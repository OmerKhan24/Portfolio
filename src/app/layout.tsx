import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Muhammad Omer Khan - Portfolio",
  description: "Computer Science Undergraduate passionate about AI, Data Analytics, and Full-Stack Development",
  keywords: "Muhammad Omer Khan, Portfolio, AI, Machine Learning, Data Analytics, Full Stack Developer, FAST University",
  authors: [{ name: "Muhammad Omer Khan" }],
  creator: "Muhammad Omer Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omerkhan24.github.io/Portfolio/",
    title: "Muhammad Omer Khan - Portfolio",
    description: "Computer Science Undergraduate passionate about AI, Data Analytics, and Full-Stack Development",
    siteName: "Muhammad Omer Khan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Omer Khan - Portfolio",
    description: "Computer Science Undergraduate passionate about AI, Data Analytics, and Full-Stack Development",
    creator: "@MOmerKhan24",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
