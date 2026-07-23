"use client";
import { useState } from "react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: wire up to your preferred email service
    setSubmitted(true);
  };

  const contactLinks = [
    {
      label: "Email",
      value: "mavendanielf@gmail.com",
      href: "mailto:mavendanielf@gmail.com",
      icon: (
        <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "#7c3aed",
    },
    {
      label: "GitHub",
      value: "MavuneeseZ",
      href: "https://github.com/MavuneeseZ",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
        </svg>
      ),
      color: "#06b6d4",
    },
    {
      label: "LinkedIn",
      value: "[ADD YOUR LINKEDIN]",
      href: "[ADD YOUR LINKEDIN URL]",
      icon: (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      color: "#0077b5",
    },
  ];

  return (
    <section
      id="contact"
      className="section"
      style={{ background: "rgba(28,28,40,0.3)" }}
    >
      {/* Orb */}
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "var(--accent)",
          top: "0%",
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.06,
        }}
      />

      <div className="container">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p
          style={{
            textAlign: "center",
            color: "var(--muted)",
            marginBottom: 60,
            fontSize: "1rem",
            maxWidth: 500,
            margin: "-40px auto 60px",
            lineHeight: 1.7,
          }}
        >
          Have a project in mind or want to collaborate? I&apos;d love to hear from you.
          Drop me a message and I&apos;ll get back to you soon!
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          {/* Left: Contact info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <h3
              style={{
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--foreground)",
                marginBottom: 8,
              }}
            >
              Let&apos;s Build Something Together
            </h3>
            <p style={{ fontSize: "0.9rem", color: "#9090a8", lineHeight: 1.7 }}>
              I&apos;m currently open to internships, freelance work, and exciting
              collaborations. Feel free to reach out via any channel below.
            </p>

            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card"
                style={{
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  textDecoration: "none",
                  color: "var(--foreground)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${link.color}15`,
                    border: `1px solid ${link.color}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: link.color,
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--muted)",
                      marginBottom: 2,
                    }}
                  >
                    {link.label}
                  </div>
                  <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>
                    {link.value}
                  </div>
                </div>
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  style={{ marginLeft: "auto", color: "var(--muted)" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            ))}
          </div>

          {/* Right: Contact form */}
          <div className="glass-card" style={{ padding: 32 }}>
            {submitted ? (
              <div
                style={{
                  textAlign: "center",
                  padding: "40px 0",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 16,
                }}
              >
                <div
                  style={{
                    fontSize: "3rem",
                    animation: "float 3s ease-in-out infinite",
                  }}
                >
                  🎉
                </div>
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                  }}
                >
                  Message Sent!
                </h3>
                <p style={{ color: "var(--muted)", fontSize: "0.9rem" }}>
                  Thanks for reaching out. I&apos;ll get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  style={{ marginTop: 8 }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "var(--foreground)",
                    marginBottom: 4,
                  }}
                >
                  Send a Message
                </h3>

                <div className="form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="john@example.com"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell me about your project or idea..."
                    value={formState.message}
                    onChange={(e) =>
                      setFormState({ ...formState, message: e.target.value })
                    }
                    required
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                  <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
