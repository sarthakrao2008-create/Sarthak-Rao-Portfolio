"use client";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
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
          className="about-grid"
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
              01 / About
            </p>
          </div>

          {/* Right content */}
          <div>
            <h2
              className={visible ? "animate-fade-up delay-100" : ""}
              style={{
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                marginBottom: "28px",
                color: "var(--text)",
              }}
            >
              A bit about me
            </h2>

            <div
              className={visible ? "animate-fade-up delay-200" : ""}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "580px",
              }}
            >
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                I&apos;m an IT student at{" "}
                <span style={{ color: "var(--text)" }}>Parul University</span>,
                working toward a Diploma in Information Technology. I enjoy
                understanding how things work under the hood — from operating
                systems to the code that runs on them.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                My foundation is in{" "}
                <span style={{ color: "var(--text)" }}>Python and Java</span>,
                and I've been picking up front-end development on the side.
                I find myself most engaged when there's a real problem to
                solve — like building a system that detects driver drowsiness
                in real time.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "var(--text-muted)",
                  lineHeight: 1.8,
                  fontWeight: 300,
                }}
              >
                Outside of coursework, I've participated in hackathons and
                hands-on technical environments. I'm interested in{" "}
                <span style={{ color: "var(--text)" }}>
                  operating systems, computer networks, and UI/UX
                </span>{" "}
                — areas that span both the technical and experiential side
                of software.
              </p>
            </div>

            {/* Quick stats row */}
            <div
              className={visible ? "animate-fade-up delay-400" : ""}
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "40px",
                flexWrap: "wrap",
              }}
            >
              {[
                { label: "Year", value: "2nd Year" },
                { label: "Degree", value: "IT Diploma" },
                { label: "University", value: "Parul" },
              ].map((item) => (
                <div key={item.label}>
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "var(--text-dim)",
                      letterSpacing: "0.08em",
                      marginBottom: "4px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text)",
                      fontWeight: 400,
                    }}
                  >
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </section>
  );
}
