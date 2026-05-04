import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://janzen.is-a.dev"),
  title: "Janneil Janzen R. Go | Frontend Developer / Graphic Designer | Philippines",
  description: "Aspiring Fullstack Developer and Graphic Designer with Next.js, TailwindCSS, Firebase, and Laravel + React. Creating clean, functional, and user-friendly digital experiences.",
  keywords: "Janneil Janzen R. Go, Frontend Developer, Graphic Designer, Web Developer, Fullstack Developer, Philippines, Next.js, React, Laravel, TailwindCSS, Firebase, WordPress, Adobe Photoshop, Adobe Illustrator",
  authors: [{ name: "Janzen Go" }],
  openGraph: {
    type: "website",
    siteName: "Janzen Go",
    url: "https://janzen.is-a.dev",
    title: "Janneil Janzen R. Go | Frontend Developer / Graphic Designer",
    description: "Aspiring Fullstack Developer and Graphic Designer with Next.js, TailwindCSS, Firebase, and Laravel + React. Creating clean, functional, and user-friendly digital experiences.",
    locale: "en_US",
    images: [
      {
        url: "https://janzen.is-a.dev/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Janneil Janzen R. Go | Frontend Developer / Graphic Designer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janneil Janzen R. Go | Frontend Developer / Graphic Designer",
    description: "Aspiring Fullstack Developer and Graphic Designer with practical exposure to Next.js, TailwindCSS, Firebase, and Laravel + React. Passionate about creating clean, functional, and user-friendly digital experiences.",
    images: ["https://janzen.is-a.dev/images/og-image.png"],
  },
  icons: {
    icon: "/images/logo.ico",
    apple: "/images/apple-touch-icon-60x60.png",
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
        <link rel="canonical" href="https://janzen.is-a.dev" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Janneil Janzen R. Go",
              url: "https://janzen.is-a.dev",
              image: "https://janzen.is-a.dev/images/profile.jpg",
              jobTitle: "Frontend Developer / Graphic Designer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description: "Aspiring Fullstack Developer and Graphic Designer with practical exposure to Next.js, TailwindCSS, Firebase, and Laravel + React. Passionate about creating clean, functional, and user-friendly digital experiences.",
              sameAs: [
                "https://github.com/janzengo",
                "https://linkedin.com/in/janzengo",
              ],
              knowsAbout: [
                "Web Development",
                "JavaScript",
                "React",
                "PHP",
                "Python",
                "UI/UX Design",
                "Graphic Design",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sfpro">
        {children}
        <Toaster position="bottom-right" richColors closeButton />
      </body>
    </html>
  );
}
