import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sarthak Rao — Developer Portfolio",
  description: "IT Student at Parul University. Building practical software solutions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
