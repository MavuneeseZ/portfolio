"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Blinking cursor
    const el = cursorRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      el.style.opacity = el.style.opacity === "0" ? "1" : "0";
    }, 530);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "80px",
      }}
    >
      {/* Background orbs */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "var(--accent)",
          top: "-100px",
          right: "-150px",
        }}
      />
      <div
        className="orb"
        style={{
          width: 350,
          height: 350,
          background: "var(--gradient-end)",
          bottom: "-50px",
          left: "-100px",
          opacity: 0.1,
        }}
      />

      {/* Floating geometric shape */}
      <div
        className="animate-float"
        style={{
          position: "absolute",
          top: "15%",
          right: "8%",
          width: 180,
          height: 180,
          borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))",
          border: "1px solid rgba(124,58,237,0.2)",
          backdropFilter: "blur(10px)",
        }}
      />
      <div
        className="animate-spin-slow"
        style={{
          position: "absolute",
          bottom: "20%",
          left: "6%",
          width: 120,
          height: 120,
          borderRadius: "50%",
          border: "1px solid rgba(124,58,237,0.2)",
          borderTopColor: "var(--accent)",
        }}
      />

      <div className="container" style={{ textAlign: "center" }}>
        {/* Badge */}
        <div
          className="animate-fade-in"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 18px",
            borderRadius: 9999,
            background: "rgba(124,58,237,0.12)",
            border: "1px solid rgba(124,58,237,0.3)",
            marginBottom: 28,
            fontSize: "0.82rem",
            color: "var(--accent-light)",
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#22c55e",
              display: "inline-block",
              boxShadow: "0 0 6px #22c55e",
            }}
          />
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          className="animate-fade-in-up"
          style={{
            fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: 16,
            animationDelay: "0.1s",
            opacity: 0,
          }}
        >
          Hi, I&apos;m{" "}
          <span className="gradient-text">Maven Daniel</span>
          <br />
          <span style={{ color: "var(--foreground)" }}>Frederick</span>
        </h1>

        {/* Tagline */}
        <p
          className="animate-fade-in-up"
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.45rem)",
            color: "var(--muted)",
            marginBottom: 40,
            maxWidth: 620,
            margin: "0 auto 40px",
            lineHeight: 1.6,
            animationDelay: "0.25s",
            opacity: 0,
          }}
        >
          Computer Science student &amp; full-stack developer specializing in{" "}
          <span style={{ color: "var(--accent-light)" }}>Python backends</span>,{" "}
          <span style={{ color: "var(--gradient-end)" }}>data analysis</span>, and{" "}
          <span style={{ color: "var(--accent-light)" }}>web applications</span>
          <span ref={cursorRef} style={{ marginLeft: 2 }}>
            |
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-fade-in-up"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            animationDelay: "0.4s",
            opacity: 0,
            marginTop: 40,
          }}
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a href="#contact" className="btn-outline">
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className="animate-fade-in"
          style={{
            marginTop: 80,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            color: "var(--muted)",
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            animationDelay: "1s",
            opacity: 0,
          }}
        >
          <span>Scroll to explore</span>
          <div
            style={{
              width: 24,
              height: 38,
              border: "1px solid var(--border)",
              borderRadius: 12,
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              padding: "4px",
            }}
          >
            <div
              style={{
                width: 4,
                height: 8,
                borderRadius: 2,
                background: "var(--accent-light)",
                animation: "float 1.8s ease-in-out infinite",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
