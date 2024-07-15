import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Vaibhav Sonawane - Full Stack Developer Portfolio",
  description: "Discover the projects and skills of Vaibhav Sonawane, a proficient Full Stack Developer with a passion for creating impactful web applications.",
  keywords: "Vaibhav Sonawane, Full Stack Developer, Web Developer, Portfolio, JavaScript, React, Node.js",
  authors: [{ name: "Vaibhav Sonawane" }],
  openGraph: {
    title: "Vaibhav Sonawane - Full Stack Developer Portfolio",
    description: "Discover the projects and skills of Vaibhav Sonawane, a proficient Full Stack Developer with a passion for creating impactful web applications.",
    url: "https://portfolio-vaibhav72.vercel.app/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Sonawane - Full Stack Developer Portfolio",
    description: "Discover the projects and skills of Vaibhav Sonawane, a proficient Full Stack Developer with a passion for creating impactful web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
