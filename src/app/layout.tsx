import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Developer Jinn",
  description: "Developed by jinn with love.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
