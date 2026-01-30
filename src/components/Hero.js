import { useEffect, useState } from "react";
import SalesforceLogo from "./logos/Salesforce";
import DiscordLogo from "./logos/Discord";
import HubSpotLogo from "./logos/HubSpot";
import McKinseyLogo from "./logos/McKinsey";
import ReforgeLogo from "./logos/Reforge";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate scroll-based transforms
  const opacity = Math.max(0, 1 - scrollY / 300);
  const scale = Math.max(0.85, 1 - scrollY / 2000);
  const translateY = -(scrollY * 0.3);

  const logos = [
    <SalesforceLogo key="sf1" />,
    <DiscordLogo key="d1" />,
    <HubSpotLogo key="hs1" />,
    <McKinseyLogo key="m1" />,
    <ReforgeLogo key="r1" />,
    // Duplicates for seamless loop
    <SalesforceLogo key="sf2" />,
    <DiscordLogo key="d2" />,
    <HubSpotLogo key="hs2" />,
    <McKinseyLogo key="m2" />,
    <ReforgeLogo key="r2" />,
  ];

  return (
    <section className="hero">
      <div className="hero-wrapper">
        {/* Sticky Content with Mask Effect */}
        <div
          className="hero-sticky-content"
          style={{
            opacity,
            transform: `translateY(${translateY}px) scale(${scale})`,
          }}
        >
          {/* Main Content */}
          <div className="hero-content">
            <h1 className="hero-headline">
              The single platform to iterate, evaluate, deploy, and monitor AI agents
            </h1>
          </div>

          {/* Trusted By Section with Scrolling Logos */}
          <div className="hero-trusted">
            <p className="trusted-label">TRUSTED BY</p>
            <div className="trusted-logos-wrapper">
              <div className="trusted-logos-track">
                {logos.map((logo, index) => (
                  <div key={index} className="logo-item">
                    {logo}
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
