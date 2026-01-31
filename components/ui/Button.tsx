"use client";

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

const Button = ({ className, variant = 'primary', children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;
    const button = buttonRef.current;

    // GSAP Hover Effect Logic
    const handleMouseMove = (e: MouseEvent) => {
      if (!button || !document.contains(button)) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      try {
        gsap.to(button, {
          x: x * 0.1, // Reduced movement for stability
          y: y * 0.1,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true
        });
      } catch (err) {}
    };

    const handleMouseLeave = () => {
      if (!button || !document.contains(button)) return;
      try {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true
        });
      } catch (err) {}
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      try { gsap.killTweensOf(button); } catch (e) {}
    };
  }, []);

  const variants = {
    primary: "bg-gradient-to-r from-blue-primary to-blue-dark text-white border border-blue-400/20 shadow-[0_0_20px_rgba(14,165,233,0.3)] hover:shadow-[0_0_30px_rgba(14,165,233,0.6)]",
    outline: "bg-transparent border border-blue-primary/50 text-blue-primary hover:border-blue-primary hover:bg-blue-primary/10",
    ghost: "bg-transparent text-gray-muted hover:text-white"
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative rounded-full px-8 py-4 font-bold tracking-wide transition-all duration-300 overflow-hidden group flex items-center justify-center gap-2",
        variants[variant],
        className
      )}
      {...props}
    >
      {/* Constant Shimmer Effect */}
      {variant === 'primary' && (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-full">
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer skew-x-12" />
        </div>
      )}

      {/* Hover Light Reflection */}
      <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 transition-colors duration-300 z-0" />

      {/* Content z-index ensures text is above shimmer */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default Button;