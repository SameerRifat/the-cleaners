import GetInTouch from '@/components/GetInTouch'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import ServicesSection from '@/components/ServicesSection'
import WhyChooseUs from '@/components/WhyChooseUs'

export default function Home() {
  return (
    <>
      <main className=''>
        <Hero />
        <ServicesSection />
        <HowItWorks />
        <WhyChooseUs />
        <GetInTouch />
      </main>
    </>
  )
}
