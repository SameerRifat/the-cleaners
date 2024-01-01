import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import SmallBar from '@/components/SmallBar'
import Navbar from '@/components/Navbar'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'TheCleaners Cleaning Service in Dubai',
  description: 'TheWashers Sofa Cleaning Service in Dubai',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-50`}>
        <SmallBar />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
