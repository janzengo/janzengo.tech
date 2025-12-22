import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

export const metadata: Metadata = {
  metadataBase: new URL("https://janzengo.tech"),
  title: "Janzen Go | Aspiring Full Stack Developer | Philippines",
  description: "Janzen Go is an Aspiring Full Stack Developer from the Philippines, building robust and scalable server-side applications with a focus on security, performance, and clean architecture.",
  keywords: "Janzen Go, Aspiring Full Stack Developer, Web Developer, Software Engineer, Philippines, RESTful APIs, Frontend, Backend, JavaScript, React, PHP, Python",
  authors: [{ name: "Janzen Go" }],
  openGraph: {
    type: "website",
    url: "https://janzengo.tech",
    title: "Janzen Go | Aspiring Full Stack Developer",
    description: "Building robust and scalable server-side applications with a focus on security, performance, and clean architecture.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Janzen Go | Aspiring Full Stack Developer",
    description: "Building robust and scalable server-side applications with a focus on security, performance, and clean architecture.",
    images: ["/images/og-image.png"],
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
        <link rel="canonical" href="https://janzengo.tech/" />
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
              name: "Janzen Go",
              url: "https://janzengo.tech",
              image: "https://janzengo.tech/images/profile.jpg",
              jobTitle: "Aspiring Full Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Freelance",
              },
              description: "Building robust and scalable server-side applications with a focus on security, performance, and clean architecture.",
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
