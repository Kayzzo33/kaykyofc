"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from '@/components/ui/Button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [pathname, setPathname] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    // Simple pathname simulation
    setPathname(window.location.pathname);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Projetos', href: '#projects' },
    { name: 'Sobre', href: '#' }, // Simplified for SPA
    { name: 'Serviços', href: '#services' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled ? "bg-bg-primary/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold tracking-tighter group">
          KAYZZ<span className="text-blue-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-primary",
                pathname === link.href ? "text-blue-primary" : "text-gray-muted"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="ml-4 py-2 px-6 text-sm">
            Falar Comigo
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
        >
          {isMobileOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-bg-secondary border-b border-white/10 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-text hover:text-blue-primary py-2"
              onClick={() => setIsMobileOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button className="w-full">Solicitar Orçamento</Button>
        </div>
      )}
    </header>
  );
};

export default Header;