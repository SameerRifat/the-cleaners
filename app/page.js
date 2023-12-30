import GetInTouch from '@/components/GetInTouch'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import ServicesSection from '@/components/ServicesSection'
import SmallBar from '@/components/SmallBar'
import WhyChooseUs from '@/components/WhyChooseUs'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=''>
      <SmallBar />
      <Navbar />
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <WhyChooseUs />
      <GetInTouch />
    </main>
  )
}
