import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import ServicesSection from '@/components/ServicesSection'
import SmallBar from '@/components/SmallBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <SmallBar />
      <Navbar />
      <Hero />
      <ServicesSection />
    </main>
  )
}
