import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import SmallBar from '@/components/SmallBar'
import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <SmallBar />
      <Navbar />
      <Hero />
    </main>
  )
}
