import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/HowItWorks';
import LiveDashboardPreview from './components/LiveDashboardPreview';
import FeaturesSection from './components/FeaturesSection';
import PricingTable from './components/PricingTable';
import Testimonials from './components/Testimonials';
import Integrations from './components/Integrations';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <HowItWorks />
      <LiveDashboardPreview />
      <FeaturesSection />
      <PricingTable />
      <Testimonials />
      <Integrations />
      <Footer />
    </div>
  );
}

export default App;