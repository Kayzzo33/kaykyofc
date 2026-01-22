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
    const button = buttonRef.current;
    if (!button) return;

    // Use quickTo for better performance and simpler state management
    // This avoids creating new tweens on every mousemove which can cause race conditions
    const xTo = gsap.quickTo(button, "x", { duration: 0.3, ease: "power2.out" });
    const yTo = gsap.quickTo(button, "y", { duration: 0.3, ease: "power2.out" });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      xTo(x * 0.2);
      yTo(y * 0.2);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      // Ensure any active animations are killed immediately on unmount
      gsap.killTweensOf(button);
    };
  }, []);

  const variants = {
    primary: "bg-gradient-to-r from-blue-primary to-blue-dark text-white hover:shadow-lg hover:shadow-blue-500/30 border border-transparent",
    outline: "bg-transparent border border-blue-primary/50 text-blue-primary hover:border-blue-primary hover:bg-blue-primary/10",
    ghost: "bg-transparent text-gray-muted hover:text-white"
  };

  return (
    <button
      ref={buttonRef}
      className={cn(
        "relative rounded-lg px-8 py-3 font-semibold transition-all duration-300",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;