"use client";

import React, { useState } from 'react';
import Button from '@/components/ui/Button';
import { Lock } from 'lucide-react';
import { auth } from '@/lib/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/admin/dashboard');
    } catch (err) {
      setError('Credenciais inválidas. Acesso negado.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="w-full max-w-md p-8 bg-bg-secondary rounded-2xl border border-white/5 shadow-2xl">
        <div className="flex justify-center mb-6 text-blue-primary">
          <div className="p-4 bg-blue-primary/10 rounded-full">
            <Lock size={32} />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-center mb-8">Acesso Restrito</h1>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-bg-tertiary border border-white/10 rounded px-4 py-2 focus:border-blue-primary focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-1">Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-bg-tertiary border border-white/10 rounded px-4 py-2 focus:border-blue-primary focus:outline-none"
            />
          </div>
          
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          
          <Button type="submit" className="w-full">Entrar</Button>
        </form>
      </div>
    </div>
  );
}