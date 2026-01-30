import { useEffect, useRef, useState } from "react";
import "./ScrollSequence.css";

export default function ScrollSequence({ frameCount = 180, basePath = "/frames/frame-" }) {
    const canvasRef = useRef(null);
    const [images, setImages] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const currentFrame = useRef(0);

    // Preload all images
    useEffect(() => {
        const imageArray = [];

        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            const frameNumber = String(i).padStart(3, '0');
            img.src = `${basePath}${frameNumber}.webp`;

            img.onload = () => {
                setImagesLoaded(prev => prev + 1);
            };

            imageArray.push(img);
        }

        setImages(imageArray);
    }, [frameCount, basePath]);

    // Handle scroll
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const context = canvas.getContext("2d");

        // Set canvas size
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const handleScroll = () => {
            const scrollSection = document.querySelector('.scroll-sequence-section');
            if (!scrollSection) return;

            const rect = scrollSection.getBoundingClientRect();
            const scrollStart = -rect.top;
            const scrollHeight = rect.height - window.innerHeight;

            // Calculate scroll progress (0 to 1)
            let scrollProgress = scrollStart / scrollHeight;
            scrollProgress = Math.max(0, Math.min(1, scrollProgress));

            // Map to frame index
            const frameIndex = Math.floor(scrollProgress * (frameCount - 1));

            if (frameIndex !== currentFrame.current && images[frameIndex]) {
                currentFrame.current = frameIndex;

                // Clear and draw new frame
                context.clearRect(0, 0, canvas.width, canvas.height);

                const img = images[frameIndex];

                // Center and scale image
                const scale = Math.max(
                    canvas.width / img.width,
                    canvas.height / img.height
                );

                const x = (canvas.width / 2) - (img.width / 2) * scale;
                const y = (canvas.height / 2) - (img.height / 2) * scale;

                context.drawImage(
                    img,
                    x, y,
                    img.width * scale,
                    img.height * scale
                );
            }
        };

        // Initial render
        if (images[0]) {
            handleScroll();
        }

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            handleScroll();
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, [images, frameCount]);

    return (
        <section className="scroll-sequence-section">
            <div className="scroll-sequence-sticky">
                <canvas ref={canvasRef} className="scroll-sequence-canvas" />

                {/* Loading indicator */}
                {imagesLoaded < frameCount && (
                    <div className="scroll-sequence-loading">
                        <p>Loading frames: {imagesLoaded} / {frameCount}</p>
                        <div className="loading-bar">
                            <div
                                className="loading-progress"
                                style={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
