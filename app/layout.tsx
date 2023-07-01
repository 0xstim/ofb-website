import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
{/* <body className={inter.className}> */}

export const metadata = {
  title: 'Open For Builders',
  description: 'Helping builders from Ground Zero to Outer Space',
  openGraph: {
    title: 'Open For Builders',
    description: 'Helping builders from Ground Zero to Outer Space',
    url: 'https://openforbuilders.com',
    siteName: 'Open For Builders',
    images: [
      {
        url: '/ofb-og.png',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open For Builders',
    description: 'Helping builders from Ground Zero to Outer Space',
    creator: '@openforbuilders',
    images: ['/ofb-og.png.jpeg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
