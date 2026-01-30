import { useEffect, useState, useRef } from "react";
import Salesforce from "./logos/Salesforce";
import Discord from "./logos/Discord";
import HubSpot from "./logos/HubSpot";
import McKinsey from "./logos/McKinsey";
import Reforge from "./logos/Reforge";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const currentFrame = useRef(0);

  const frameCount = 180;
  const basePath = "/frames/frame-";

  // Preload frames
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
  }, []);

  // Handle scroll for both content and canvas
  useEffect(() => {
    const canvas = canvasRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrollY(scrollPosition);

      // Update canvas frame
      if (canvas && images.length > 0) {
        const context = canvas.getContext("2d");
        const heroSection = document.querySelector('.hero');
        if (!heroSection) return;

        const rect = heroSection.getBoundingClientRect();
        const scrollStart = -rect.top;
        const scrollHeight = rect.height - window.innerHeight;

        let scrollProgress = scrollStart / scrollHeight;
        scrollProgress = Math.max(0, Math.min(1, scrollProgress));

        const frameIndex = Math.floor(scrollProgress * (frameCount - 1));

        if (frameIndex !== currentFrame.current && images[frameIndex]) {
          currentFrame.current = frameIndex;

          context.clearRect(0, 0, canvas.width, canvas.height);

          const img = images[frameIndex];
          const scale = Math.max(
            canvas.width / img.width,
            canvas.height / img.height
          );

          const x = (canvas.width / 2) - (img.width / 2) * scale;
          const y = (canvas.height / 2) - (img.height / 2) * scale;

          context.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
      }
    };

    const handleResize = () => {
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        handleScroll();
      }
    };

    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    if (images[0]) {
      handleScroll();
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [images]);

  // Calculate scroll-based transforms for content
  const opacity = Math.max(0, 1 - scrollY / 500);
  const scale = Math.max(0, 1 - scrollY / 1000);

  const logos = [
    { component: Salesforce, key: "salesforce-1" },
    { component: Discord, key: "discord-1" },
    { component: HubSpot, key: "hubspot-1" },
    { component: McKinsey, key: "mckinsey-1" },
    { component: Reforge, key: "reforge-1" },
    { component: Salesforce, key: "salesforce-2" },
    { component: Discord, key: "discord-2" },
    { component: HubSpot, key: "hubspot-2" },
    { component: McKinsey, key: "mckinsey-2" },
    { component: Reforge, key: "reforge-2" },
  ];

  return (
    <section className="hero">
      {/* Canvas Background */}
      <canvas ref={canvasRef} className="hero-canvas-bg" />

      {/* Loading Indicator */}
      {imagesLoaded < frameCount && (
        <div className="hero-canvas-loading">
          <p>Loading animation: {imagesLoaded} / {frameCount}</p>
          <div className="loading-bar">
            <div
              className="loading-progress"
              style={{ width: `${(imagesLoaded / frameCount) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="hero-wrapper">
        <div
          className="hero-sticky-content"
          style={{
            opacity,
            transform: `translate3d(-50%, -50%, 0) scale(${scale})`,
          }}
        >
          {/* Main Content */}
          <div className="hero-content">
            <h1 className="hero-headline">
              The single platform to iterate, evaluate, deploy, and monitor AI agents
            </h1>
          </div>

          {/* Trusted By Section */}
          <div className="hero-trusted">
            <p className="trusted-label">Trusted by</p>
            <div className="trusted-logos-wrapper">
              <div className="trusted-logos-track">
                {logos.map(({ component: Logo, key }) => (
                  <div key={key} className="logo-item">
                    <Logo />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
