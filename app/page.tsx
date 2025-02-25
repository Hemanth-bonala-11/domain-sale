'use client';

import { Mail, Globe, DollarSign, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative">
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="absolute top-4 right-4 p-2 rounded-full bg-card hover:bg-card/80 transition-colors"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5" />
        ) : (
          <Moon className="w-5 h-5" />
        )}
      </button>

      <div className="max-w-4xl mx-auto px-4 py-16 sm:py-24 sm:px-6 lg:px-8 text-center">
        <div className="space-y-16">
          <div className="space-y-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center blur-3xl opacity-20">
                <div className="w-48 h-48 bg-primary rounded-full"></div>
              </div>
              <Globe className="w-24 h-24 mx-auto text-primary relative animate-pulse" />
            </div>
            <h1 className="text-4xl sm:text-6xl font-bold text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary">
              This Domain is For Sale
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Secure this premium domain name for your broking software and establish your digital presence today
            </p>
          </div>

          <div className="bg-card shadow-xl rounded-2xl p-8 backdrop-blur-sm bg-opacity-50 transform hover:scale-105 transition-transform duration-300 border border-border/50">
            <div className="space-y-8">
              <div className="flex items-center justify-center space-x-3">
                <DollarSign className="w-10 h-10 text-primary animate-bounce" />
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
                  Make an Offer
                </span>
              </div>
              <p className="text-lg text-muted-foreground">
                Contact us to discuss the purchase of this premium domain name and take your business to the next level
              </p>
              <a
                href="mailto:hemanth.bonala7@gmail.com"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-full text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all transform hover:scale-105 hover:shadow-lg"
              >
                <Mail className="w-6 h-6 mr-2" />
                Contact Us
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50 transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Globe className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Domain</h3>
              <p className="text-muted-foreground">
                A memorable and brandable domain name that will set your business apart
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50 transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Secure Transfer</h3>
              <p className="text-muted-foreground">
                Guaranteed safe and secure domain transfer process with escrow service
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-border/50 transform hover:scale-105 transition-transform duration-300">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Transaction</h3>
              <p className="text-muted-foreground">
                Quick and professional transaction handling with dedicated support
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}