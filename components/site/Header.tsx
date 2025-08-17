import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500">
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <span className="text-xl font-bold text-zinc-900">SiteCloner AI</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#features"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Testimonials
          </Link>
          <Link
            href="/docs"
            className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            Docs
          </Link>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2">
          <svg
            className="h-5 w-5 text-zinc-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}