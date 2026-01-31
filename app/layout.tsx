import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Header from "@/components/layout/Header";
import "./globals.css";

// Configuração de Fontes Otimizada do Next.js
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kayzz.vercel.app'), // Substituir pela URL final
  title: {
    default: "Kayzz | Full Stack Developer & Creative Coder",
    template: "%s | Kayzz Portfolio"
  },
  description: "Desenvolvedor Web Full-Stack especialista em Next.js, React e interfaces de alta performance. Transformo ideias em experiências digitais premium.",
  keywords: ["Desenvolvedor Web", "Full Stack", "React", "Next.js", "Portfólio", "Frontend", "UI/UX", "Brasil", "Freelancer"],
  authors: [{ name: "Kayzz" }],
  creator: "Kayzz",
  publisher: "Kayzz",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Kayzz | Full Stack Developer",
    description: "Interfaces imersivas e código de alta performance. Confira meu portfólio.",
    url: 'https://kayzz.vercel.app',
    siteName: 'Kayzz Portfolio',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg', // Certifique-se de adicionar uma imagem na pasta public
        width: 1200,
        height: 630,
        alt: 'Kayzz Portfolio Preview',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kayzz | Full Stack Developer",
    description: "Interfaces imersivas e código de alta performance.",
    creator: "@_xkayky.s",
    images: ['/og-image.jpg'], // Certifique-se de adicionar uma imagem na pasta public
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
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans text-gray-text antialiased bg-bg-primary selection:bg-blue-primary/30 selection:text-white flex flex-col min-h-screen overflow-x-hidden">
        <Header />
        {children}
        <footer className="py-8 text-center text-sm text-gray-muted border-t border-white/5 mt-auto relative z-10 bg-bg-primary">
          © {new Date().getFullYear()} Kayzz. Todos os direitos reservados.
        </footer>
      </body>
    </html>
  );
}