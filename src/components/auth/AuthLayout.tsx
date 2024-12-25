import React from 'react';
import { School } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Ice crystal background pattern */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483664852095-d6cc6870702d?auto=format&fit=crop&q=80')] bg-cover opacity-10" />
      
      <div className="relative">
        {/* Header */}
        <div className="text-center pt-8">
          <div className="flex justify-center">
            <School className="h-16 w-16 text-blue-600" />
          </div>
          <h1 className="mt-4 text-4xl font-bold text-gray-900">
            Noble Paths Academy
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Excellence in Education
          </p>
        </div>

        {/* Main content */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/80 backdrop-blur-lg py-8 px-4 shadow-xl ring-1 ring-gray-900/10 sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}