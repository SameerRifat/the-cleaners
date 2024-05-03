import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import SmallBar from '@/components/SmallBar'
import Navbar from '@/components/Navbar'
import WhatsappChat from '@/components/WhatsappChat'
import { Toaster } from 'react-hot-toast'

const roboto = Roboto({ weight: ['100', '300', '400', '500', '700', '900'], subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('https://www.thecleanersuae.com/'),
  title: 'TheCleaners UAE | Cleaning Services in Dubai, Sharjah',
  description: 'Get top-notch cleaning services at TheCleaners UAE! Our expert team guarantees spotless and pristine results for your home or business Sharjah. Book your appointment today and enjoy a sparkling clean space!',
  keywords: [
    "the cleaner company",
    "the cleaners",
    "looking for cleaner near me",
    "the cleanes",
    "cleaners sharjah",
    "best cleaning services in sharjah",
    "house cleaning service",
    "appartment cleaning service",
    "villa cleaning service",
    "office cleaning service",
    "kitchen cleaning service",
    "washroom cleaning service",
    "balcony cleaning service",
    "floor cleaning service",
    "appliance cleaning service",
    "house maid services service",
    "deep cleaning service",
    "ironing and washing clothes service",
    "mattress cleaning service",
    "rugs cleaning service",
    "Professional Cleaners Near Me",
    "Best Cleaning Services Provider",
  ],
  openGraph: {
    title: 'TheCleaners UAE | Cleaning Services in Dubai, Sharjah',
    description: 'Get top-notch cleaning services at TheCleaners UAE! Our expert team guarantees spotless and pristine results for your home or business Sharjah. Book your appointment today and enjoy a sparkling clean space!',
    images: [
      {
        url: "/housCleaning4.jpg",
        width: 800,
        height: 600,
        alt: "TheCleaners UAE"
      },
    ],
    type: "website",
    url: "https://www.thecleanersuae.com/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-50`}>
        <SmallBar />
        <Navbar />
        {children}
        <Footer />
        <WhatsappChat />
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
