import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coca-Cola Mantra — Brand Evolution",
  description: "A visual journey through Coca-Cola's timeless brand evolution across generations.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
