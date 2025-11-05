import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './styles/globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Appartement Notice',
  description:
    'Informations sur l’appartement : code Wi-Fi, règles générales, hygiène, instructions et tout ce qui est lié à l’appartement'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
