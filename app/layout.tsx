import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Chatbot from "./Homepage/Chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Maven Daniel Frederick | Computer Science Student & Developer",
  description:
    "Portfolio of Maven Daniel Frederick — a 19-year-old Computer Science student at Madras Christian College specializing in Python backends, Flask web applications, and data analysis.",
  keywords: [
    "Maven Daniel Frederick",
    "portfolio",
    "computer science",
    "Python developer",
    "Flask",
    "data analysis",
    "web developer",
  ],
  authors: [{ name: "Maven Daniel Frederick" }],
  openGraph: {
    title: "Maven Daniel Frederick | Developer Portfolio",
    description:
      "Python backend developer & data analyst — BSc. Computer Science at Madras Christian College.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
