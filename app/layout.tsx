import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Evan H Lee',
  description: 'Evan H Lee is at Johns Hopkins Whiting for Biomedical Engineering as the Class of 2030, with interests in aural technology and genetic treatments for aural conditions.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
