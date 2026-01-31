import { useEffect, useRef, useState } from "react";
import { IterateIcon, EvaluateIcon, DeployIcon, MonitorIcon } from "./ProductIcons";

export default function ProductsDropdown({ isOpen, onClose }) {
    const dropdownRef = useRef(null);
    const [hoveredProduct, setHoveredProduct] = useState(null);

    // Close on ESC key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && isOpen) {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [isOpen, onClose]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                onClose();
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, onClose]);

    const products = [
        {
            id: 1,
            name: "Iterate",
            description: "Sketch, test\nand refine",
            href: "/iterate",
            icon: <IterateIcon />,
            badgeTop: "36%",
            badgeLeft: "34%",
            links: [
                { name: "Editor", href: "/editor" },
                { name: "Playground", href: "/playground" },
                { name: "Datasets", href: "/datasets" },
            ],
        },
        {
            id: 2,
            name: "Evaluate",
            description: "Reflect\nand measure",
            href: "/evaluate",
            icon: <EvaluateIcon />,
            badgeTop: "68%",
            badgeLeft: "34%",
            links: [
                { name: "Evaluations", href: "/evaluations" },
                { name: "Datasets", href: "/datasets" },
            ],
        },
        {
            id: 3,
            name: "Deploy",
            description: "From draft\nto live",
            href: "/deploy",
            icon: <DeployIcon />,
            badgeTop: "9%",
            badgeLeft: "34%",
            links: [
                { name: "Deployments", href: "/deployments" },
                { name: "Analytics", href: "/analytics" },
                { name: "Gateway", href: "https://github.com/adaline/gateway", external: true },
            ],
        },
        {
            id: 4,
            name: "Monitor",
            description: "Insights\nin real time",
            href: "/monitor",
            icon: <MonitorIcon />,
            badgeTop: "40%",
            badgeLeft: "34%",
            links: [
                { name: "Logs", href: "/logs" },
                { name: "Analytics", href: "/analytics" },
            ],
        },
    ];

    // Get opacity class based on hover state
    const getOpacityClass = (productId) => {
        if (hoveredProduct === null) return "";
        return hoveredProduct === productId ? "product-active" : "product-faded";
    };

    return (
        <div
            ref={dropdownRef}
            className={`products-dropdown ${isOpen ? "open" : ""}`}
            aria-hidden={!isOpen}
            onMouseLeave={() => {
                onClose();
                setHoveredProduct(null);
            }}
        >
            <div className="products-dropdown-inner">
                {/* Divider at top */}
                <div className="products-divider">
                    <hr />
                    <hr />
                </div>

                {/* Icons Section */}
                <div className="products-grid products-icons-grid">
                    {products.map((product) => (
                        <a
                            key={`icon-${product.id}`}
                            className={`product-icon-link ${getOpacityClass(product.id)}`}
                            href={product.href}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <div className="product-icon-wrapper">
                                {product.icon}
                                {/* Product number badge */}
                                <div className="product-badge" style={{ top: product.badgeTop, left: product.badgeLeft }}>
                                    <div className="product-number">{product.id}</div>
                                    <div className="product-name-mono">{product.name}</div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="products-divider">
                    <hr />
                    <hr />
                </div>

                {/* Links Section */}
                <div className="products-grid products-links-grid">
                    {products.map((product) => (
                        <div
                            key={`links-${product.id}`}
                            className={`product-links-column ${getOpacityClass(product.id)}`}
                            onMouseEnter={() => setHoveredProduct(product.id)}
                            onMouseLeave={() => setHoveredProduct(null)}
                        >
                            <a className="product-header-link" href={product.href}>
                                <div className="product-name-mono">{product.name}</div>
                                <div className="product-description">{product.description}</div>
                            </a>
                            <ul className="product-links-list">
                                {product.links.map((link, idx) => (
                                    <li key={idx}>
                                        <a
                                            href={link.href}
                                            target={link.external ? "_blank" : undefined}
                                            rel={link.external ? "noopener noreferrer" : undefined}
                                        >
                                            {link.name}
                                            {link.external && (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="14"
                                                    height="14"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M7 7h10v10"></path>
                                                    <path d="M7 17 17 7"></path>
                                                </svg>
                                            )}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
