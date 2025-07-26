import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import PricingModel from './components/PricingModel';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import BlogSection from './components/BlogSection';
import FAQAccordion from './components/FAQAccordion';
import Dashboard from './components/Dashboard';
import WalletIntegration from './components/WalletIntegration';
import ThreeDVisuals from './components/ThreeDVisuals';
import AnimatedBackground from './components/AnimatedBackground';

const App = () => {
  return (
    <Router>
      <AnimatedBackground />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/features" element={<FeatureCards />} />
        <Route path="/pricing" element={<PricingModel />} />
        <Route path="/audit-demo" element={<ThreeDVisuals />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/docs" element={<FAQAccordion />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<WalletIntegration />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;