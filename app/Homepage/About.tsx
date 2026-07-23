"use client";

export default function About() {
  const stats = [
    { label: "Projects Built", value: "2+" },
    { label: "Technologies", value: "12+" },
    { label: "Years Learning", value: "3+" },
    { label: "Cup of Coffee", value: "∞" },
  ];

  return (
    <section id="about" className="section">
      {/* Background orb */}
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "var(--gradient-end)",
          top: "10%",
          left: "-150px",
          opacity: 0.08,
        }}
      />

      <div className="container">
        <h2 className="section-title gradient-text">About Me</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Left: Text */}
          <div className="animate-slide-left">
            {/* Avatar / Illustration */}
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                background:
                  "linear-gradient(135deg, var(--accent), var(--gradient-end))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 32,
                fontSize: "5rem",
                boxShadow: "0 20px 60px rgba(124,58,237,0.3)",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              👨‍💻
            </div>

            {/* Bio */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "#c4c4d4",
                }}
              >
                I&apos;m <strong style={{ color: "var(--foreground)" }}>Maven Daniel Frederick</strong>, a
                19-year-old Computer Science student at{" "}
                <span style={{ color: "var(--accent-light)" }}>
                  Madras Christian College
                </span>
                , with a solid academic foundation built from my A-Level and AS-Level studies at
                Gateway The Complete School.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "#c4c4d4",
                }}
              >
                I specialize in building{" "}
                <span style={{ color: "var(--accent-light)" }}>
                  full-stack web applications
                </span>{" "}
                using Python (Flask), and love diving deep into{" "}
                <span style={{ color: "var(--gradient-end)" }}>
                  data analysis
                </span>{" "}
                with tools like Pandas, NumPy, and Scikit-learn — uncovering
                insights from complex datasets.
              </p>
              <p
                style={{
                  fontSize: "1.05rem",
                  lineHeight: 1.8,
                  color: "#c4c4d4",
                }}
              >
                Whether it&apos;s architecting a multi-role placement portal or
                analysing football player transfer markets, I enjoy tackling
                real-world problems with clean code and a data-driven mindset.
                I&apos;m actively looking to contribute to impactful projects and
                grow as a developer.
              </p>
            </div>

            <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="#contact" className="btn-primary">
                Let&apos;s Connect
              </a>
              <a href="#projects" className="btn-outline">
                See Projects
              </a>
            </div>
          </div>

          {/* Right: Stats + Info */}
          <div
            className="animate-slide-right"
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Stats grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card"
                  style={{
                    padding: "24px 20px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2.2rem",
                      fontWeight: 800,
                      background:
                        "linear-gradient(135deg, var(--accent-light), var(--gradient-end))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.value}
                  </div>
                  <div
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--muted)",
                      marginTop: 4,
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick info */}
            <div className="glass-card" style={{ padding: 24 }}>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: 600,
                  marginBottom: 16,
                  color: "var(--accent-light)",
                }}
              >
                Quick Facts
              </h3>
              {[
                { icon: "🎓", label: "Education", value: "BSc. Computer Science" },
                { icon: "🏫", label: "College", value: "Madras Christian College" },
                { icon: "📍", label: "Location", value: "India" },
                { icon: "💼", label: "Status", value: "Student & Developer" },
                { icon: "🌐", label: "Interests", value: "Web Dev · Data Science · Open Source" },
              ].map((item) => (
                <div
                  key={item.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "8px 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span style={{ fontSize: "1.1rem" }}>{item.icon}</span>
                  <span
                    style={{
                      fontSize: "0.82rem",
                      color: "var(--muted)",
                      width: 80,
                      flexShrink: 0,
                    }}
                  >
                    {item.label}
                  </span>
                  <span style={{ fontSize: "0.88rem", color: "var(--foreground)" }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
