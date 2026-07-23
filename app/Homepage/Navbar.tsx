"use client";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      // Determine active section
      const sections = ["hero", "about", "skills", "projects", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        background: scrolled
          ? "rgba(10,10,15,0.95)"
          : "rgba(10,10,15,0.5)",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Logo */}
      <a href="#hero" className="logo" style={{ textDecoration: "none" }}>
        MDF
        <span
          style={{
            display: "inline-block",
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "var(--gradient-end)",
            marginLeft: 3,
            verticalAlign: "middle",
            marginBottom: 2,
          }}
        />
      </a>

      {/* Desktop nav */}
      <ul style={{ margin: 0 }}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color:
                  activeSection === link.href.slice(1)
                    ? "var(--accent-light)"
                    : "var(--muted)",
                position: "relative",
              }}
            >
              {link.label}
              {activeSection === link.href.slice(1) && (
                <span
                  style={{
                    position: "absolute",
                    bottom: -4,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: 4,
                    height: 4,
                    borderRadius: "50%",
                    background: "var(--accent-light)",
                  }}
                />
              )}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      <a href="#contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.85rem" }}>
        Hire Me
      </a>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "var(--foreground)",
          cursor: "pointer",
          padding: 4,
        }}
        id="mobile-menu-btn"
        aria-label="Toggle mobile menu"
      >
        <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          {mobileOpen
            ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
        </svg>
      </button>
    </nav>
  );
}
