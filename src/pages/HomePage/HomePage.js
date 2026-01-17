import React from 'react';
import { Header } from '../../components/layout/Header/Header';
import { Footer } from '../../components/layout/Footer/Footer';
import { Hero } from '../../components/sections/Hero/Hero';
import { Features } from '../../components/sections/Features/Features';
import { HowItWorks } from '../../components/sections/HowItWorks/HowItWorks';
import { GeneratorSection } from '../../components/sections/GeneratorSection/GeneratorSection';
import { ScrollToTop } from '../../components/ui/ScrollToTop/ScrollToTop';
import './HomePage.css';

export default function HomePage() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <GeneratorSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
