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
      className={`navbar ${scrolled ? "scrolled" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 5%",
        zIndex: 1000,
        background: scrolled
          ? "rgba(10,10,15,0.95)"
          : "rgba(10,10,15,0.5)",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
        boxShadow: scrolled ? "0 4px 30px rgba(0,0,0,0.3)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <a href="#hero" className="logo" style={{ textDecoration: "none", fontWeight: "bold", fontSize: "1.2rem" }}>
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

      <ul
        className={`nav-menu ${mobileOpen ? "open" : ""}`}
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {navLinks.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                color:
                  activeSection === link.href.slice(1)
                    ? "var(--accent-light)"
                    : "var(--muted)",
                textDecoration: "none",
                position: "relative",
              }}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
        <a href="#contact" className="btn-primary" style={{ padding: "8px 20px", fontSize: "0.85rem", textDecoration: "none" }}>
          Hire Me
        </a>

        <button
          id="mobile-menu-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "var(--foreground)",
            cursor: "pointer",
          }}
          aria-label="Toggle mobile menu"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {mobileOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown — styled by .mobile-menu in globals.css */}
      {mobileOpen && (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={activeSection === link.href.slice(1) ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary" onClick={() => setMobileOpen(false)}>
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
