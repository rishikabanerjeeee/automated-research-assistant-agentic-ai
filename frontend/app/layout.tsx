import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Research Assistant',
  description: 'AI-powered research assistant for summarizing and querying papers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <header className="bg-primary text-white p-4">
          <div className="max-w-5xl mx-auto flex items-center">
            <img src="/logo.png" alt="Logo" className="h-10 mr-4" />
            <h1 className="text-2xl font-bold">AI Research Assistant</h1>
          </div>
        </header>
        {children}
      </body>
    </html>
  )
}