"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid var(--border)",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(circle at 20% 50%, rgba(79,142,247,0.04) 0%, transparent 60%), linear-gradient(rgba(30,30,30,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(30,30,30,0.3) 1px, transparent 1px)",
          backgroundSize: "auto, 60px 60px, 60px 60px",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          width: "100%",
          paddingTop: "80px",
        }}
      >
        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "48px",
            alignItems: "center",
          }}
          className="hero-grid"
        >
          {/* Left: Text */}
          <div>
            <p
              className={`animate-fade-up ${loaded ? "delay-100" : ""}`}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: "var(--accent)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "20px",
                fontWeight: 400,
              }}
            >
              Available for internships
            </p>

            <h1
              className={`animate-fade-up ${loaded ? "delay-200" : ""}`}
              style={{
                fontSize: "clamp(38px, 6vw, 64px)",
                fontWeight: 500,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--text)",
                marginBottom: "16px",
              }}
            >
              Sarthak
              <br />
              <span style={{ color: "var(--text-muted)", fontWeight: 300 }}>
                Rao
              </span>
            </h1>

            <p
              className={`animate-fade-up ${loaded ? "delay-300" : ""}`}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "13px",
                color: "var(--text-muted)",
                marginBottom: "28px",
                fontWeight: 300,
                letterSpacing: "0.02em",
              }}
            >
              IT Student{" "}
              <span style={{ color: "var(--text-dim)" }}>·</span>{" "}
              Developer{" "}
              <span style={{ color: "var(--text-dim)" }}>·</span>{" "}
              Problem Solver
            </p>

            <p
              className={`animate-fade-up ${loaded ? "delay-400" : ""}`}
              style={{
                fontSize: "15px",
                color: "var(--text-muted)",
                maxWidth: "480px",
                lineHeight: 1.75,
                marginBottom: "40px",
                fontWeight: 300,
              }}
            >
              Focused on building practical software solutions. Currently working
              on real-time driver drowsiness detection using computer vision and
              Python.
            </p>

            {/* CTAs */}
            <div
              className={`animate-fade-up ${loaded ? "delay-500" : ""}`}
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <a
                href="#projects"
                style={{
                  display: "inline-block",
                  background: "var(--accent)",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "10px 22px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "0.02em",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.opacity = "0.85")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.opacity = "1")
                }
              >
                View Projects
              </a>
              <a
                href="#contact"
                style={{
                  display: "inline-block",
                  background: "transparent",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  padding: "10px 22px",
                  borderRadius: "6px",
                  fontSize: "13px",
                  fontWeight: 400,
                  border: "1px solid var(--border)",
                  letterSpacing: "0.02em",
                  transition: "border-color 0.2s, color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.borderColor = "#333";
                  (e.target as HTMLAnchorElement).style.color = "var(--text)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.borderColor =
                    "var(--border)";
                  (e.target as HTMLAnchorElement).style.color =
                    "var(--text-muted)";
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right: Avatar placeholder */}
          <div
            className={`animate-fade-in ${loaded ? "delay-300" : ""}`}
            style={{ flexShrink: 0 }}
          >
            <div
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "12px",
                background: "var(--bg-3)",
                border: "1px solid var(--border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Abstract face placeholder */}
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="30" r="18" stroke="#2a2a2a" strokeWidth="1.5" />
                <path
                  d="M14 72c0-14.36 11.64-26 26-26s26 11.64 26 26"
                  stroke="#2a2a2a"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              <span
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: 0,
                  right: 0,
                  textAlign: "center",
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "9px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.06em",
                }}
              >
                SR
              </span>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className={`animate-fade-in ${loaded ? "delay-700" : ""}`}
          style={{
            marginTop: "80px",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              width: "24px",
              height: "1px",
              background: "var(--text-dim)",
            }}
          />
          <span
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "11px",
              color: "var(--text-dim)",
              letterSpacing: "0.08em",
            }}
          >
            scroll to explore
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 560px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-grid > div:last-child {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
