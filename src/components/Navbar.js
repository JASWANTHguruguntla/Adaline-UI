import { useEffect, useState } from "react";
import Logo from "./Logo";
import WatchDemoButton from "./WatchDemoButton";
import StartFreeButton from "./StartFreeButton";
import ProductsDropdown from "./ProductsDropdown";

export default function Navbar() {
  const [opacity, setOpacity] = useState(1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    let rafId = null;
    const start = 0; // scroll position where fade begins
    const end = 240; // scroll position where fade completes (opacity 0)

    const onScroll = () => {
      const current = window.scrollY;
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        let newOpacity;
        if (current <= start) newOpacity = 1;
        else if (current >= end) newOpacity = 0;
        else newOpacity = 1 - (current - start) / (end - start);

        setOpacity(prev => (Math.abs(prev - newOpacity) < 0.005 ? prev : newOpacity));
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // set initial opacity (in case the page starts scrolled)
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const openDropdown = () => {
    setIsDropdownOpen(true);
  };

  return (
    <>
      <nav className="nav" style={{ opacity }}>
        <div className="nav-inner">
          <div className="nav-grid">
            <div className="nav-left">
              <button
                className="nav-link products"
                aria-expanded={isDropdownOpen}
                type="button"
                onClick={toggleDropdown}
                onMouseEnter={openDropdown}
              >
                <span className="nav-text">PRODUCTS</span>
                <svg className="chev" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
              </button>

              <a className="nav-link" href="/pricing">PRICING</a>
              <a className="nav-link" href="/blog">BLOG</a>
            </div>

            <div className="logo-center" aria-label="Adaline Homepage">
              <Logo />
            </div>

            <div className="nav-right">
              <WatchDemoButton />
              <StartFreeButton />
            </div>
          </div>
        </div>
      </nav>

      <ProductsDropdown isOpen={isDropdownOpen} onClose={closeDropdown} />
    </>
  );
}
