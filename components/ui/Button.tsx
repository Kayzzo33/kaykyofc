"use client";

import React, { useRef, useEffect, ButtonHTMLAttributes } from 'react';
import { gsap } from 'gsap';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
}

const Button = ({ className, variant = 'primary', children, ...props }: ButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Definitive Safety Check: If ref is null, do absolutely nothing
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    // Initialize state safely
    try {
      gsap.set(button, { x: 0, y: 0 });
    } catch (e) {
      // If GSAP fails to set, simply return to avoid attaching listeners to a broken state
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Runtime Safety Check: Ensure element is still in DOM
      if (!button || !document.contains(button)) return;
      
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Wrap in try-catch to prevent page crash if GSAP context is lost
      try {
        gsap.to(button, {
          x: x * 0.2,
          y: y * 0.2,
          duration: 0.3,
          ease: "power2.out",
          overwrite: true
        });
      } catch (err) {
        // Silent failure is better than app crash
      }
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
      } catch (err) {
        // Silent failure
      }
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      try {
        gsap.killTweensOf(button);
      } catch (e) {
        // Ignore cleanup errors
      }
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