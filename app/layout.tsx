import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SimpleBlog - Tempat Berbagi Ilmu',
  description: 'Blog sederhana yang dibuat dengan Next.js, TypeScript, dan Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider defaultTheme="light">
          <div className="min-h-screen bg-background text-foreground transition-colors">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
              {children}
            </main>
            <footer className="border-t border-border mt-16 py-8">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
                <p>&copy; adeluindra | 2025. Dibuat dengan ❤️ menggunakan Next.js.</p>
              </div>
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}