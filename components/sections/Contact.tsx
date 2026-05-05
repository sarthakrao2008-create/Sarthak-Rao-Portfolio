"use client";
import { useEffect, useRef, useState } from "react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real deployment, wire this to a form service (Formspree, etc.)
    setSent(true);
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "96px 24px 80px" }}
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
              05 / Contact
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
                marginBottom: "16px",
                color: "var(--text)",
              }}
            >
              Get in touch
            </h2>

            <p
              className={visible ? "animate-fade-up delay-200" : ""}
              style={{
                fontSize: "15px",
                color: "var(--text-muted)",
                fontWeight: 300,
                marginBottom: "40px",
                maxWidth: "460px",
                lineHeight: 1.75,
              }}
            >
              Open to internship opportunities, collaborations, or just a
              conversation about tech. Drop me a message and I&apos;ll get back
              to you.
            </p>

            {/* Email link */}
            <div
              className={visible ? "animate-fade-up delay-200" : ""}
              style={{ marginBottom: "48px" }}
            >
              <p
                style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "11px",
                  color: "var(--text-dim)",
                  letterSpacing: "0.08em",
                  marginBottom: "8px",
                  textTransform: "uppercase",
                }}
              >
                Email
              </p>
              <a
                href="mailto:sarthakrao2008@gmail.com"
                style={{
                  fontSize: "15px",
                  color: "var(--accent)",
                  textDecoration: "none",
                  fontFamily: "'DM Mono', monospace",
                  letterSpacing: "0.02em",
                  borderBottom: "1px solid rgba(79,142,247,0.3)",
                  paddingBottom: "2px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLAnchorElement).style.borderColor = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLAnchorElement).style.borderColor = "rgba(79,142,247,0.3)")
                }
              >
                sarthakrao2008@gmail.com
              </a>
            </div>

            {/* Contact form */}
            <div className={visible ? "animate-fade-up delay-300" : ""}>
              {sent ? (
                <div
                  style={{
                    padding: "24px 28px",
                    background: "var(--bg-2)",
                    border: "1px solid var(--border)",
                    borderRadius: "8px",
                    borderLeft: "3px solid var(--accent)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "13px",
                      color: "var(--accent)",
                      letterSpacing: "0.04em",
                      marginBottom: "6px",
                    }}
                  >
                    Message sent
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "var(--text-muted)",
                      fontWeight: 300,
                    }}
                  >
                    Thanks for reaching out. I&apos;ll reply as soon as I can.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "16px",
                    }}
                  >
                    {[
                      { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                      { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                    ].map((field) => (
                      <div key={field.key}>
                        <label
                          style={{
                            display: "block",
                            fontFamily: "'DM Mono', monospace",
                            fontSize: "11px",
                            color: "var(--text-dim)",
                            letterSpacing: "0.08em",
                            marginBottom: "8px",
                            textTransform: "uppercase",
                          }}
                        >
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          required
                          placeholder={field.placeholder}
                          value={form[field.key as keyof typeof form]}
                          onChange={(e) =>
                            setForm((f) => ({ ...f, [field.key]: e.target.value }))
                          }
                          style={{
                            width: "100%",
                            maxWidth: "480px",
                            padding: "10px 14px",
                            background: "var(--bg-2)",
                            border: "1px solid var(--border)",
                            borderRadius: "6px",
                            color: "var(--text)",
                            fontSize: "14px",
                            fontFamily: "'DM Sans', sans-serif",
                            fontWeight: 300,
                            outline: "none",
                            transition: "border-color 0.2s",
                          }}
                          onFocus={(e) =>
                            ((e.target as HTMLInputElement).style.borderColor = "rgba(79,142,247,0.4)")
                          }
                          onBlur={(e) =>
                            ((e.target as HTMLInputElement).style.borderColor = "var(--border)")
                          }
                        />
                      </div>
                    ))}

                    <div>
                      <label
                        style={{
                          display: "block",
                          fontFamily: "'DM Mono', monospace",
                          fontSize: "11px",
                          color: "var(--text-dim)",
                          letterSpacing: "0.08em",
                          marginBottom: "8px",
                          textTransform: "uppercase",
                        }}
                      >
                        Message
                      </label>
                      <textarea
                        required
                        placeholder="What's going on??"
                        rows={5}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        style={{
                          width: "100%",
                          maxWidth: "480px",
                          padding: "10px 14px",
                          background: "var(--bg-2)",
                          border: "1px solid var(--border)",
                          borderRadius: "6px",
                          color: "var(--text)",
                          fontSize: "14px",
                          fontFamily: "'DM Sans', sans-serif",
                          fontWeight: 300,
                          outline: "none",
                          resize: "vertical",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) =>
                          ((e.target as HTMLTextAreaElement).style.borderColor = "rgba(79,142,247,0.4)")
                        }
                        onBlur={(e) =>
                          ((e.target as HTMLTextAreaElement).style.borderColor = "var(--border)")
                        }
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        style={{
                          padding: "10px 24px",
                          background: "var(--accent)",
                          color: "#fff",
                          border: "none",
                          borderRadius: "6px",
                          fontSize: "13px",
                          fontWeight: 500,
                          fontFamily: "'DM Sans', sans-serif",
                          cursor: "pointer",
                          letterSpacing: "0.02em",
                          transition: "opacity 0.2s",
                        }}
                        onMouseEnter={(e) =>
                          ((e.target as HTMLButtonElement).style.opacity = "0.85")
                        }
                        onMouseLeave={(e) =>
                          ((e.target as HTMLButtonElement).style.opacity = "1")
                        }
                      >
                        Send message
                      </button>
                    </div>
                  </div>
                </form>
              )}
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
        }
        input::placeholder, textarea::placeholder {
          color: var(--text-dim);
        }
      `}</style>
    </section>
  );
}
