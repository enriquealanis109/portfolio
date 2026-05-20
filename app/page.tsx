import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Projects from '@/components/Projects'
import About from '@/components/About'
import Stack from '@/components/Stack'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import CursorGlow from '@/components/CursorGlow'

export default function Home() {
  return (
    <>
      <CursorGlow />
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Stack />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
