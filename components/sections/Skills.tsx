"use client";
import { useEffect, useRef, useState } from "react";

const skillGroups = [
  {
    category: "Programming",
    skills: ["Python", "Java"],
  },
  {
    category: "Web Development",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Core CS",
    skills: ["Operating Systems", "Computer Networks", "Databases"],
  },
  {
    category: "Other",
    skills: ["UI/UX basics", "Debugging", "Code optimization"],
  },
];

function SkillTag({ label }: { label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <span
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "inline-block",
        padding: "5px 12px",
        borderRadius: "4px",
        background: hovered ? "var(--accent-dim)" : "var(--bg-3)",
        border: `1px solid ${hovered ? "rgba(79,142,247,0.25)" : "var(--border)"}`,
        color: hovered ? "var(--accent)" : "var(--text-muted)",
        fontSize: "12.5px",
        fontWeight: 400,
        fontFamily: "'DM Mono', monospace",
        letterSpacing: "0.02em",
        cursor: "default",
        transition: "all 0.18s ease",
      }}
    >
      {label}
    </span>
  );
}

export default function Skills() {
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
      id="skills"
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
              02 / Skills
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
                marginBottom: "48px",
                color: "var(--text)",
              }}
            >
              What I work with
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "40px",
              }}
              className="skills-grid"
            >
              {skillGroups.map((group, i) => (
                <div
                  key={group.category}
                  className={
                    visible
                      ? `animate-fade-up delay-${(i + 2) * 100}`
                      : ""
                  }
                >
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "11px",
                      color: "var(--text-dim)",
                      letterSpacing: "0.08em",
                      marginBottom: "14px",
                      textTransform: "uppercase",
                    }}
                  >
                    {group.category}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {group.skills.map((s) => (
                      <SkillTag key={s} label={s} />
                    ))}
                  </div>
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
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
