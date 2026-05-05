export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "32px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "12px",
          color: "var(--text-dim)",
          letterSpacing: "0.04em",
        }}
      >
        Sarthak Rao · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
