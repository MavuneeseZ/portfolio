"use client";
import { useEffect } from "react";

const skillCategories = [
  {
    category: "Backend Development",
    icon: "⚙️",
    color: "#7c3aed",
    skills: ["Flask", "Jinja2", "SQLAlchemy", "Cookies & Sessions", "REST APIs"],
  },
  {
    category: "Frontend Development",
    icon: "🎨",
    color: "#06b6d4",
    skills: ["HTML5", "CSS3", "Bootstrap", "Responsive Design"],
  },
  {
    category: "Data Analysis",
    icon: "📊",
    color: "#10b981",
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Data Visualization"],
  },
  {
    category: "Programming Languages",
    icon: "💻",
    color: "#f59e0b",
    skills: ["Python", "Java", "Bash / Shell Scripting"],
  },
  {
    category: "Tools & Misc",
    icon: "🛠️",
    color: "#ec4899",
    skills: ["Git & GitHub", "SQL", "SQLite", "Linux CLI"],
  },
];

export default function Skills() {
  useEffect(() => {
    const els = document.querySelectorAll("#skills .reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      className="section"
      style={{ background: "rgba(28,28,40,0.3)" }}
    >
      {/* Decorative orb */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "var(--accent)",
          top: "50%",
          right: "-200px",
          transform: "translateY(-50%)",
          opacity: 0.07,
        }}
      />

      <div className="container">
        <h2 className="section-title gradient-text">Technical Skills</h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: 56,
            fontSize: "1rem",
            marginTop: -40,
          }}
        >
          A snapshot of my current tech stack and tools
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {skillCategories.map((cat, i) => (
            <div
              key={cat.category}
              className="glass-card reveal"
              style={{
                padding: 28,
                transitionDelay: `${i * 0.08}s`,
              }}
            >
              {/* Category header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    background: `${cat.color}20`,
                    border: `1px solid ${cat.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.3rem",
                  }}
                >
                  {cat.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                  }}
                >
                  {cat.category}
                </h3>
              </div>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="skill-pill"
                    style={{
                      borderColor: `${cat.color}40`,
                      color: cat.color,
                      background: `${cat.color}10`,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* "Currently learning" banner */}
        <div
          className="glass-card"
          style={{
            marginTop: 40,
            padding: "24px 32px",
            display: "flex",
            alignItems: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          <span style={{ fontSize: "1.4rem" }}>🚀</span>
          <div>
            <div
              style={{
                fontSize: "0.82rem",
                color: "var(--muted)",
                marginBottom: 4,
              }}
            >
              Currently exploring
            </div>
            <div
              style={{
                fontSize: "0.95rem",
                color: "var(--foreground)",
                fontWeight: 500,
              }}
            >
              Machine Learning · Next.js · React · TypeScript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
