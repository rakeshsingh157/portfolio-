import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rakeshinfo.in'),
  title: "Rakesh Kumar Singh - Portfolio",
  description: "Portfolio of Rakesh Kumar Singh - Web Developer showcasing projects, skills, and achievements",
  keywords: ["Rakesh Kumar Singh", "Web Developer", "Portfolio", "React", "Next.js", "Full Stack Developer"],
  authors: [{ name: "Rakesh Kumar Singh" }],
  creator: "Rakesh Kumar Singh",
  publisher: "Rakesh Kumar Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rakeshinfo.in",
    siteName: "Rakesh Kumar Singh - Portfolio",
    title: "Rakesh Kumar Singh - Portfolio",
    description: "Portfolio of Rakesh Kumar Singh - Web Developer showcasing projects, skills, and achievements",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rakesh Kumar Singh - Portfolio",
    description: "Portfolio of Rakesh Kumar Singh - Web Developer showcasing projects, skills, and achievements",
  },
  verification: {
    google: "your-google-verification-code-here", // Add your Google Search Console verification code here
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Rakesh Kumar Singh",
    "url": "https://rakeshinfo.in",
    "jobTitle": "Web Developer",
    "description": "Web Developer specializing in React, Next.js, and Full Stack Development",
    "sameAs": [
      // Add your social media profiles here
      // "https://github.com/yourusername",
      // "https://linkedin.com/in/yourusername",
      // "https://twitter.com/yourusername"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Rakesh Kumar Singh - Portfolio",
    "url": "https://rakeshinfo.in",
    "description": "Portfolio of Rakesh Kumar Singh - Web Developer showcasing projects, skills, and achievements",
    "author": {
      "@type": "Person",
      "name": "Rakesh Kumar Singh"
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
