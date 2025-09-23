import "../src/index.css";
import React from "react";

export const metadata = {
  title: "PadhaiDunia",
  description: "Converted Next.js App Router version",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
