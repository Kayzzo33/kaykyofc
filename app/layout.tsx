import React from "react";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Kayzz Portfolio",
  description: "Premium Full Stack Developer Portfolio for Kayzz.",
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