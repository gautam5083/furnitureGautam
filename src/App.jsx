import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import WhyChoos from './components/WhyChoos'
import BestSeller from './components/BestSeller'
import ExploreSection from './components/ExploreSection'
import Footer from './components/Footer'
import Shinnig from './components/Shinnig'
import OurClient from './components/OurClient'
import Creation from './components/Creation'

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <WhyChoos />
      <ExploreSection />
      <BestSeller />
      <Creation />
      <Shinnig />
      <OurClient />

      <Footer />
    </div>
  )
}

export default App
