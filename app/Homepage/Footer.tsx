"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "40px 24px",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle gradient line at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "200px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), var(--gradient-end), transparent)",
        }}
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 12,
          maxWidth: 600,
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <div
          style={{
            fontSize: "1.3rem",
            fontWeight: 800,
            background: "linear-gradient(135deg, var(--accent-light), var(--gradient-end))",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Maven Daniel Frederick
        </div>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--muted)",
          }}
        >
          Computer Science Student · Python Developer · Data Analyst
        </p>

        {/* Quick links */}
        <div style={{ display: "flex", gap: 24, marginTop: 4 }}>
          {["#about", "#skills", "#projects", "#contact"].map((href) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: "0.8rem",
                color: "var(--muted)",
                textDecoration: "none",
                transition: "color 0.2s",
                textTransform: "capitalize",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--accent-light)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--muted)")
              }
            >
              {href.slice(1)}
            </a>
          ))}
        </div>

        <div
          style={{
            fontSize: "0.78rem",
            color: "#4a4a5a",
            marginTop: 8,
          }}
        >
          © {year} Maven Daniel Frederick. Built with Next.js & ❤️
        </div>
      </div>
    </footer>
  );
}
