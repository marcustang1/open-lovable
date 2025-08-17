'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function HeroSection() {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClone = async () => {
    if (!url) return;
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 py-20 sm:py-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="container mx-auto px-4 relative">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 ring-1 ring-orange-200 mb-8">
            <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            AI-Powered Website Cloning
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl lg:text-7xl mb-6">
            Clone any website with{' '}
            <span className="text-orange-500">one URL</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 sm:text-xl mb-12">
            Paste a URL, get production-ready React/Next.js code in seconds. 
            No lock-in, fully editable, and mobile-first.
          </p>

          {/* URL Input */}
          <div className="mx-auto max-w-2xl mb-12">
            <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white rounded-[12px] shadow-lg border border-zinc-200">
              <Input
                type="url"
                placeholder="https://example.com"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1 border-0 bg-transparent text-lg placeholder:text-zinc-400 focus-visible:ring-0"
              />
              <Button
                onClick={handleClone}
                disabled={!url || isLoading}
                size="lg"
                className="bg-orange-500 hover:bg-orange-600 px-8 whitespace-nowrap"
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Cloning...
                  </>
                ) : (
                  'Clone Site'
                )}
              </Button>
            </div>
            <p className="text-sm text-zinc-500 mt-3">
              Try: https://stripe.com, https://linear.app, or any website
            </p>
          </div>

          {/* Demo Video Placeholder */}
          <div className="mx-auto max-w-4xl">
            <div className="relative rounded-xl bg-zinc-900 p-2 shadow-2xl">
              <div className="relative aspect-video rounded-lg bg-zinc-800 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                      <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-zinc-400 text-sm">Watch Demo Video</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}