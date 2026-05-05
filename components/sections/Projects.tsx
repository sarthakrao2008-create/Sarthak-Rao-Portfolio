"use client";
import { useEffect, useRef, useState } from "react";

const contributions = [
  "Implemented the eye aspect ratio detection logic",
  "Integrated real-time video capture with OpenCV",
  "Tested and refined detection accuracy across lighting conditions",
  "Wired the alert system (sound + visual) to trigger on threshold",
];

const techStack = ["Python", "OpenCV", "dlib", "NumPy", "imutils"];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="projects"
      ref={ref}
      style={{
        borderBottom: "1px solid var(--border)",
        padding: "96px 24px",
      }}
    >
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "200px 1fr",
            gap: "64px",
            alignItems: "start",
          }}
          className="section-grid"
        >
          {/* Left label */}
          <div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                color: "var(--text-dim)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                paddingTop: "4px",
              }}
            >
              03 / Projects
            </p>
          </div>

          {/* Right */}
          <div>
            <h2
              className={visible ? "animate-fade-up delay-100" : ""}
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "40px",
                color: "var(--text)",
              }}
            >
              Things I&apos;ve built
            </h2>

            {/* Project card */}
            <div
              className={visible ? "animate-fade-up delay-200" : ""}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                background: hovered ? "var(--bg-3)" : "var(--bg-2)",
                border: `1px solid ${hovered ? "#282828" : "var(--border)"}`,
                borderRadius: "10px",
                padding: "32px",
                transition: "all 0.2s ease",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "20px",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "8px",
                    }}
                  >
                    {/* Icon */}
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "6px",
                        background: "var(--accent-dim)",
                        border: "1px solid rgba(79,142,247,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </div>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Real-Time Sleep Detection System
                    </h3>
                  </div>

                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "var(--text-dim)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    Computer Vision · Driver Safety
                  </p>
                </div>

                <span
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "var(--accent)",
                    background: "var(--accent-dim)",
                    border: "1px solid rgba(79,142,247,0.2)",
                    padding: "3px 10px",
                    borderRadius: "20px",
                    letterSpacing: "0.04em",
                  }}
                >
                  Featured
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--text-muted)",
                  lineHeight: 1.75,
                  marginBottom: "24px",
                  fontWeight: 300,
                }}
              >
                A real-time drowsiness detection system built with Python and
                OpenCV. Uses eye aspect ratio (EAR) logic to monitor eye closure
                through a webcam feed, and triggers an alert — both visual and
                audio — when prolonged drowsiness is detected. Built to address
                a real road safety concern.
              </p>

              {/* Contributions */}
              <div style={{ marginBottom: "24px" }}>
                <p
                  style={{
                    fontFamily: "'DM Mono', monospace",
                    fontSize: "11px",
                    color: "var(--text-dim)",
                    letterSpacing: "0.08em",
                    marginBottom: "12px",
                    textTransform: "uppercase",
                  }}
                >
                  My contributions
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {contributions.map((item) => (
                    <li
                      key={item}
                      style={{
                        display: "flex",
                        gap: "10px",
                        fontSize: "13.5px",
                        color: "var(--text-muted)",
                        padding: "5px 0",
                        fontWeight: 300,
                      }}
                    >
                      <span style={{ color: "var(--accent)", marginTop: "2px" }}>
                        ›
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div
                style={{
                  borderTop: "1px solid var(--border)",
                  paddingTop: "20px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "8px",
                }}
              >
                {techStack.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11.5px",
                      color: "var(--text-muted)",
                      background: "var(--bg)",
                      border: "1px solid var(--border)",
                      padding: "3px 9px",
                      borderRadius: "3px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* More projects hint */}
            <p
              className={visible ? "animate-fade-up delay-400" : ""}
              style={{
                marginTop: "24px",
                fontFamily: "'DM Mono', monospace",
                fontSize: "12px",
                color: "var(--text-dim)",
                letterSpacing: "0.04em",
              }}
            >
              More projects in progress —
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .section-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
