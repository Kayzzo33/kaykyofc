"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Send, CheckCircle, Instagram } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulating a brief loading state for UX before redirecting
    setTimeout(() => {
      // Formatação da mensagem para o WhatsApp
      const phoneNumber = "5511999999999"; // ALTERE AQUI PARA SEU NÚMERO (Ex: 5511999999999)
      
      const message = `*Olá Kayzz! Vim através do seu portfólio.*\n\n` +
                      `*Nome:* ${formData.name}\n` +
                      `*Email:* ${formData.email}\n` +
                      `*Mensagem:* ${formData.message}`;
      
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

      // Abrir WhatsApp em nova aba
      window.open(whatsappUrl, '_blank');
      
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <div className="container mx-auto px-6 h-full flex items-center justify-center">
      <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: CTA Text */}
        <div className="space-y-8">
           {/* Header Style Match: ARTE & INOVAÇÃO */}
           <h2 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-widest uppercase leading-tight">
              <span className="text-white/20 font-thin">VAMOS</span>{" "}
              <span className="text-white/20 font-thin">CONVERSAR</span>{" "}
              <span className="text-white font-thin">&</span> <br/>
              <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-300">
                CRIAR
              </span>
           </h2>
          
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-light text-white leading-snug">
              O que você faria se um especialista em software estivesse a apenas um clique de distância?
            </h3>
            
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              Seja para começar um novo projeto ou apenas para cumprimentar, adoraria ouvir você.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-gray-400 text-lg font-light">Você também pode me seguir no</span>
              <a 
                href="https://instagram.com" // Coloque seu link do Instagram aqui
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500 font-semibold hover:opacity-80 transition-opacity"
              >
                Instagram <Instagram size={18} className="text-orange-500" />
              </a>.
            </div>
          </div>

          {/* Direct Email (Optional, kept for backup) */}
          <div className="pt-4">
            <div className="inline-block p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/5">
              <p className="text-sm text-gray-400 mb-1">Email Direto</p>
              <p className="text-xl text-white font-mono">hello@kayzz.dev</p>
            </div>
          </div>
        </div>

        {/* Right Column: WhatsApp Form Interface */}
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden shadow-[0_0_50px_rgba(14,165,233,0.1)] border border-white/10">
            {/* Fake Terminal Header */}
            <div className="flex gap-2 mb-6 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {status === 'success' ? (
                <div className="h-[380px] flex flex-col items-center justify-center text-center space-y-4 animate-[fadeIn_0.5s_ease-out]">
                    <CheckCircle className="w-20 h-20 text-green-500" />
                    <h3 className="text-2xl font-bold">Redirecionando...</h3>
                    <p className="text-gray-400">Continue a conversa no WhatsApp.</p>
                    <button onClick={() => setStatus('idle')} className="text-sm text-blue-primary hover:underline mt-4">Enviar outra mensagem</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="group">
                        <label className="block text-xs font-mono text-blue-primary mb-1 ml-1 opacity-70 group-focus-within:opacity-100 transition-opacity">NOME</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required 
                            placeholder="NOME_" 
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-primary focus:bg-black/50 transition-all font-mono"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-mono text-blue-primary mb-1 ml-1 opacity-70 group-focus-within:opacity-100 transition-opacity">EMAIL</label>
                        <input 
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required 
                            placeholder="EMAIL_" 
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-primary focus:bg-black/50 transition-all font-mono"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-mono text-blue-primary mb-1 ml-1 opacity-70 group-focus-within:opacity-100 transition-opacity">MENSAGEM</label>
                        <textarea 
                            rows={4} 
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required 
                            placeholder="MENSAGEM..._" 
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-primary focus:bg-black/50 transition-all font-mono resize-none"
                        />
                    </div>
                    
                    <Button type="submit" className="w-full mt-2 group flex items-center justify-center gap-2" disabled={status === 'loading'}>
                        {status === 'loading' ? 'Processando...' : 'Iniciar Conversa no WhatsApp'} 
                        {!status && <Send size={16} className="group-hover:translate-x-1 transition-transform" />}
                    </Button>
                </form>
            )}
        </div>

      </div>
    </div>
  );
};

export default Contact;