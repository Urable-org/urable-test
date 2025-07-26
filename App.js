import React from 'react';
import HeroSection from './components/HeroSection';
import FeatureCards from './components/FeatureCards';
import PricingModel from './components/PricingModel';
import TestimonialsSlider from './components/TestimonialsSlider';
import FAQAccordion from './components/FAQAccordion';
import NewsletterSignUp from './components/NewsletterSignUp';
import SocialMediaLinks from './components/SocialMediaLinks';
import WalletConnection from './components/WalletConnection';

function App() {
    return (
        <div className="App">
            <HeroSection />
            <FeatureCards />
            <PricingModel />
            <TestimonialsSlider />
            <FAQAccordion />
            <NewsletterSignUp />
            <SocialMediaLinks />
            <WalletConnection />
        </div>
    );
}

export default App;