// Product Icon Components matching exact Adaline.ai geometry
// Each icon uses layered geometric shapes with plus symbols

export function IterateIcon() {
    // Heptagon paths (7-sided polygon)
    const heptagonOuter = "m32 8 18.764 9.036 4.634 20.304-12.985 16.283H21.587L8.602 37.341l4.634-20.305z";
    const heptagonInner = "m32 8 15.427 5.615 8.208 14.217L52.785 44 40.209 54.553H23.79L11.215 44l-2.85-16.168 8.208-14.217z";

    return (
        <div className="product-icon-graphic">
            {/* Shape 1 - Top Left */}
            <div className="icon-shape" style={{ top: '0%', left: '20%', height: '50%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonOuter} vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonInner} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Shape 2 - Top Right (small) */}
            <div className="icon-shape" style={{ top: '5%', left: '75%', height: '20%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonOuter} vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonInner} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Shape 3 - Middle Left */}
            <div className="icon-shape" style={{ top: '35%', left: '0%', height: '35%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonOuter} vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonInner} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Shape 4 - Center (large) */}
            <div className="icon-shape" style={{ top: '35%', left: '25%', height: '65%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonOuter} vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={heptagonInner} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export function EvaluateIcon() {
    return (
        <div className="product-icon-graphic">
            {/* Circle 1 - Middle Left */}
            <div className="icon-shape" style={{ top: '37%', left: '0%', height: '50%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Circle 2 - Top Center */}
            <div className="icon-shape" style={{ top: '0%', left: '20%', height: '55%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Circle 3 - Middle Right (small) */}
            <div className="icon-shape" style={{ top: '35%', left: '75%', height: '20%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Circle 4 - Bottom Center */}
            <div className="icon-shape" style={{ top: '60%', left: '35%', height: '40%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export function DeployIcon() {
    // Gear path
    const gearPath = "M30.803 8.03c-7.956.39-14.893 4.654-18.965 10.946L19.53 24.8l-8.893-3.75A23.9 23.9 0 0 0 8 32c0 3.945.952 7.667 2.638 10.95l8.892-3.75-7.691 5.825c4.072 6.291 11.01 10.555 18.964 10.946L32 46.4l1.198 9.57c7.954-.392 14.89-4.656 18.963-10.947l-7.69-5.823 8.89 3.749A23.9 23.9 0 0 0 56 32c0-3.944-.951-7.666-2.637-10.948L44.472 24.8l7.69-5.824C48.092 12.685 41.155 8.42 33.2 8.029l-1.198 9.572z";

    return (
        <div className="product-icon-graphic">
            {/* Gear 1 - Center Left (large) */}
            <div className="icon-shape" style={{ top: '40%', left: '0%', height: '60%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={gearPath} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Gear 2 - Top Right (small) */}
            <div className="icon-shape" style={{ top: '0%', left: '45%', height: '25%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={gearPath} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Gear 3 - Center Right (medium) */}
            <div className="icon-shape" style={{ top: '25%', left: '60%', height: '40%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={gearPath} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Gear 4 - Bottom Right (small) */}
            <div className="icon-shape" style={{ top: '75%', left: '65%', height: '20%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <path fill="none" stroke="currentColor" d={gearPath} vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export function MonitorIcon() {
    return (
        <div className="product-icon-graphic">
            {/* Circle 1 - Top Left (large) */}
            <div className="icon-shape" style={{ top: '0%', left: '0%', height: '65%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Circle 2 - Top Right (small) */}
            <div className="icon-shape" style={{ top: '0%', left: '70%', height: '25%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Circle 3 - Bottom Left (small) */}
            <div className="icon-shape" style={{ top: '72%', left: '10%', height: '28%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>

            {/* Circle 4 - Bottom Right (medium) */}
            <div className="icon-shape" style={{ top: '55%', left: '55%', height: '45%' }}>
                <div className="shape-inner">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" vectorEffect="non-scaling-stroke" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="shape-layer" strokeWidth="1">
                        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" strokeDasharray="5 3" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
                <div className="plus-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke="currentColor" viewBox="0 0 64 64" strokeWidth="1">
                        <path d="M28 32h8M32 28v8" vectorEffect="non-scaling-stroke" />
                    </svg>
                </div>
            </div>
        </div>
    );
}
