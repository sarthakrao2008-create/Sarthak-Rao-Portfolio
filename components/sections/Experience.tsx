"use client";
import { useEffect, useRef, useState } from "react";

const highlights = [
  { label: "Coding practice", desc: "Strengthening problem-solving through labs and assignments." },
  { label: "Front-end basics", desc: "Building simple interfaces with HTML, CSS, and JavaScript." },
  { label: "Working under deadlines", desc: "Managing project timelines and coursework simultaneously." },
  { label: "Hackathon participation", desc: "Applied skills in fast-paced, collaborative environments." },
];

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      id="experience"
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
              04 / Experience
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
              Academic experience
            </h2>

            {/* Timeline item */}
            <div className={visible ? "animate-fade-up delay-200" : ""}>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  marginBottom: "32px",
                }}
              >
                {/* Timeline dot & line */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "4px",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "var(--accent)",
                      flexShrink: 0,
                    }}
                  />
                  <div
                    style={{
                      width: "1px",
                      flex: 1,
                      background: "var(--border)",
                      marginTop: "8px",
                    }}
                  />
                </div>

                {/* Content */}
                <div style={{ paddingBottom: "24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "baseline",
                      gap: "12px",
                      marginBottom: "6px",
                      flexWrap: "wrap",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "var(--text)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Diploma in Information Technology
                    </h3>
                    <span
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: "11px",
                        color: "var(--text-dim)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      2024 – Present
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--accent)",
                      fontFamily: "'DM Mono', monospace",
                      marginBottom: "16px",
                      letterSpacing: "0.02em",
                    }}
                  >
                    Parul University
                  </p>

                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      fontWeight: 300,
                      maxWidth: "520px",
                    }}
                  >
                    Hands-on coursework covering core CS fundamentals, labs,
                    and project-based learning. Building practical understanding
                    of software systems from the ground up.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights grid */}
            <div
              className={`highlights-grid ${visible ? "animate-fade-up delay-300" : ""}`}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "16px",
              }}
            >
              {highlights.map((item) => (
                <div
                  key={item.label}
                  style={{
                    padding: "16px 20px",
                    background: "var(--bg-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "13.5px",
                      fontWeight: 500,
                      color: "var(--text)",
                      marginBottom: "6px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "12.5px",
                      color: "var(--text-muted)",
                      lineHeight: 1.6,
                      fontWeight: 300,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .section-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
