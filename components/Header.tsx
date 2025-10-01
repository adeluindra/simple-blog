'use client'

import Link from 'next/link'
import { useTheme } from './ThemeProvider'
import { Button } from './ui/Button'
import { Moon, Sun } from 'lucide-react'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo di tengah untuk desktop */}
          <div className="hidden md:flex md:items-center md:justify-center md:flex-1">
            <Link 
              href="/" 
              className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              SimpleBlog
            </Link>
          </div>

          {/* Navigation di kiri untuk mobile, tengah untuk desktop */}
          <nav className="flex items-center space-x-4 md:space-x-6 flex-1 md:justify-center">
            <Link
              href="/"
              className="text-sm font-medium transition-colors text-foreground/80 hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors text-foreground/80 hover:text-foreground"
            >
              About
            </Link>
          </nav>

          {/* Theme toggle di kanan */}
          <div className="flex items-center justify-end flex-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
              className="w-9 px-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}