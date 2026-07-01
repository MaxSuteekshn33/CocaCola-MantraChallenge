import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Coca-Cola Mantra — Brand Evolution",
  description: "140 years. One timeless identity. An interactive journey through Coca-Cola's brand evolution across generations.",
  icons: {
    icon: "/favicon.webp",
    apple: "/favicon.webp",
  },
  openGraph: {
    title: "Coca-Cola Mantra — Brand Evolution",
    description: "140 years. One timeless identity. Explore how a brand became a feeling.",
    images: [{ url: "/og-image.webp", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coca-Cola Mantra — Brand Evolution",
    description: "140 years. One timeless identity. Explore how a brand became a feeling.",
    images: ["/og-image.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
