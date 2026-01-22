"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 2000);
  };

  return (
    <div className="container mx-auto px-6 h-full flex items-center justify-center">
      <div className="w-full max-w-5xl grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Area */}
        <div className="space-y-6">
          <h2 className="text-5xl font-bold uppercase">
            Vamos Iniciar um <br/>
            <span className="text-blue-primary">Projeto?</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Interessado em trabalhar juntos? Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.
          </p>
          <div className="pt-8">
            <div className="inline-block p-4 bg-white/5 rounded-lg backdrop-blur-sm border border-white/5">
              <p className="text-sm text-gray-400 mb-1">Email Direto</p>
              <p className="text-xl text-white font-mono">hello@kayzz.dev</p>
            </div>
          </div>
        </div>

        {/* Form Interface */}
        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
            {/* Fake Terminal Header */}
            <div className="flex gap-2 mb-6 opacity-50">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            {status === 'success' ? (
                <div className="h-[300px] flex flex-col items-center justify-center text-center space-y-4">
                    <CheckCircle className="w-16 h-16 text-green-500" />
                    <h3 className="text-2xl font-bold">Mensagem Enviada!</h3>
                    <p className="text-gray-400">Entrarei em contato em breve.</p>
                    <button onClick={() => setStatus('idle')} className="text-sm text-blue-primary hover:underline">Enviar outra</button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="group">
                        <label className="block text-xs font-mono text-blue-primary mb-1 ml-1 opacity-0 group-focus-within:opacity-100 transition-opacity">NOME</label>
                        <input 
                            type="text" 
                            required 
                            placeholder="NOME_" 
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-primary focus:bg-black/50 transition-all font-mono"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-mono text-blue-primary mb-1 ml-1 opacity-0 group-focus-within:opacity-100 transition-opacity">EMAIL</label>
                        <input 
                            type="email" 
                            required 
                            placeholder="EMAIL_" 
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-primary focus:bg-black/50 transition-all font-mono"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs font-mono text-blue-primary mb-1 ml-1 opacity-0 group-focus-within:opacity-100 transition-opacity">MENSAGEM</label>
                        <textarea 
                            rows={4} 
                            required 
                            placeholder="MENSAGEM..._" 
                            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-primary focus:bg-black/50 transition-all font-mono resize-none"
                        />
                    </div>
                    
                    <Button type="submit" className="w-full mt-4 group flex items-center justify-center gap-2">
                        {status === 'loading' ? 'Enviando...' : 'Transmitir Mensagem'} 
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