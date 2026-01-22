"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Mail, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate EmailJS call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-glow opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Info Column */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Vamos Transformar Sua <br />
              <span className="text-gradient">Ideia em Realidade?</span>
            </h2>
            <p className="text-gray-muted mb-12 text-lg">
              Estou pronto para ajudar você a escalar seu negócio com tecnologia de ponta.
              Entre em contato para um orçamento sem compromisso.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-tertiary rounded-full flex items-center justify-center text-blue-primary">
                  <Mail />
                </div>
                <div>
                  <h3 className="text-white font-medium">Email</h3>
                  <p className="text-gray-muted">contato@kayzz.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-bg-tertiary rounded-full flex items-center justify-center text-gold-primary">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-white font-medium">Localização</h3>
                  <p className="text-gray-muted">Bahia, Brasil (Remoto Global)</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition-all">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="bg-bg-secondary p-8 md:p-10 rounded-2xl border border-white/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-bg-tertiary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-primary transition-colors"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Email Profissional</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-bg-tertiary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-primary transition-colors"
                  placeholder="seu@email.com"
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">Sobre o Projeto</label>
                <textarea 
                  required
                  rows={4}
                  className="w-full bg-bg-tertiary border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-primary transition-colors resize-none"
                  placeholder="Conte-me um pouco sobre seus objetivos..."
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                />
              </div>

              <Button 
                type="submit" 
                className="w-full btn-glow" 
                disabled={status === 'loading'}
              >
                {status === 'loading' ? 'Enviando...' : 
                 status === 'success' ? 'Mensagem Enviada!' : 
                 'Enviar Mensagem'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;