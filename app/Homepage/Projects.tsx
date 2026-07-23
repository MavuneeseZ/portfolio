"use client";
import { useEffect } from "react";

const projects = [
  {
    title: "Placement Portal Web Application",
    description:
      "A full-stack web application that streamlines college placement processes. Built with Flask and SQLAlchemy, it supports multi-role authentication (students, recruiters, admin), session management, and a clean dashboard to manage job postings, applications, and placement results.",
    tech: ["Python", "Flask", "Jinja2", "SQLAlchemy", "HTML", "CSS", "Bootstrap", "SQL"],
    liveLink: "#",
    githubLink: "#",
    icon: "🏛️",
    featured: true,
    color: "#7c3aed",
  },
  {
    title: "Football Player Transfer Price Analysis",
    description:
      "A data analysis project exploring the factors that influence football player transfer prices in the modern market. Uses Pandas and NumPy for data wrangling, Matplotlib for visualisation, and Scikit-learn for predictive modelling to uncover market trends.",
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn"],
    liveLink: "#",
    githubLink: "#",
    icon: "⚽",
    featured: true,
    color: "#06b6d4",
  },
];

export default function Projects() {
  useEffect(() => {
    const els = document.querySelectorAll("#projects .reveal");
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("is-visible")),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="section">
      {/* Orb */}
      <div
        className="orb"
        style={{
          width: 450,
          height: 450,
          background: "var(--gradient-end)",
          bottom: "-100px",
          left: "-150px",
          opacity: 0.07,
        }}
      />

      <div className="container">
        <h2 className="section-title gradient-text">Projects</h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: 56,
            fontSize: "1rem",
            marginTop: -40,
          }}
        >
          Real-world projects that showcase my skills in action
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="project-card reveal"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 16,
                    background: `${project.color}20`,
                    border: `1px solid ${project.color}40`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                  }}
                >
                  {project.icon}
                </div>
                {project.featured && (
                  <span
                    style={{
                      fontSize: "0.72rem",
                      fontWeight: 600,
                      color: project.color,
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                      padding: "4px 10px",
                      borderRadius: 9999,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--foreground)",
                  lineHeight: 1.3,
                }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#9090a8",
                  lineHeight: 1.7,
                  flexGrow: 1,
                }}
              >
                {project.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.74rem",
                      padding: "3px 10px",
                      borderRadius: 9999,
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "var(--muted)",
                      fontWeight: 500,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <a
                  href={project.githubLink}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.85rem",
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--foreground)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--muted)")
                  }
                >
                  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.liveLink}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    fontSize: "0.85rem",
                    color: project.color,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "var(--muted)", marginBottom: 16, fontSize: "0.9rem" }}>
            More projects coming soon — stay tuned!
          </p>
          <a
            href="[ADD YOUR GITHUB URL]"
            className="btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
