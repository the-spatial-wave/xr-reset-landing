import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import PortalPreview from './sections/PortalPreview'
import Stats from './sections/Stats'
import Problem from './sections/Problem'
import Solution from './sections/Solution'
import Protocol from './sections/Protocol'
import Features from './sections/Features'
import HowItWorks from './sections/HowItWorks'
import Testimonials from './sections/Testimonials'
import Pricing from './sections/Pricing'
import Faq from './sections/Faq'
import Contact from './sections/Contact'
import FinalCTA from './sections/FinalCTA'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-brand-void text-brand-silver font-sans">
      <Navbar />
      <main>
        <Hero />
        <PortalPreview />
        <Stats />
        <Problem />
        <Solution />
        <Protocol />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <Faq />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
