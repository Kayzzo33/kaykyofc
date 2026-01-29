"use client";

import React, { useEffect } from "react";
import Header from "@/components/layout/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children?: React.ReactNode;
}) {

  useEffect(() => {
    // Console Easter Egg
    console.log(`
      %c
      ██╗  ██╗ █████╗ ██╗   ██╗███████╗███████╗
      ██║ ██╔╝██╔══██╗╚██╗ ██╔╝╚══███╔╝╚══███╔╝
      █████╔╝ ███████║ ╚████╔╝   ███╔╝   ███╔╝ 
      ██╔═██╗ ██╔══██║  ╚██╔╝   ███╔╝   ███╔╝  
      ██║  ██╗██║  ██║   ██║   ███████╗███████╗
      ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚══════╝╚══════╝
      
      %c👨‍💻 Developed by Kayzz
      %cNeed a premium website? Let's talk.
      `,
      'color: #0ea5e9; font-family: monospace; font-weight: bold;',
      'color: #fbbf24; font-size: 14px; font-weight: bold; margin-top: 10px;',
      'color: #e5e7eb; font-size: 12px;'
    );
  }, []);

  return (
    <div className="font-sans text-gray-text antialiased selection:bg-blue-primary/30 selection:text-white flex flex-col min-h-screen">
      <Header />
      {children}
      <footer className="py-8 text-center text-sm text-gray-muted border-t border-white/5 mt-auto">
        © {new Date().getFullYear()} Kayzz. Todos os direitos reservados.
      </footer>
    </div>
  );
}