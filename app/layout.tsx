import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'ChineseMaster TJ',
  description: 'Learn Mandarin Chinese — Tajik interface. Initial scaffold.'
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="tg">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <header className="border-b bg-white">
          <div className="max-w-4xl mx-auto p-4 flex items-center justify-between">
            <h1 className="text-lg font-semibold">ChineseMaster TJ</h1>
            <nav>
              <a className="px-3" href="/">Home</a>
              <a className="px-3" href="/characters">Characters</a>
              <a className="px-3" href="/dashboard">Dashboard</a>
            </nav>
          </div>
        </header>
        <main className="max-w-4xl mx-auto p-4">{children}</main>
      </body>
    </html>
  )
}
