import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EKSTREM – Component Playground",
  description: "A playground for testing and experimenting with different UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
