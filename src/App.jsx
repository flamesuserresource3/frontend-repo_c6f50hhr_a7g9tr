import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeatureShowcase from './components/FeatureShowcase.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-200 via-fuchsia-200 to-cyan-200 text-white selection:bg-white/30 selection:text-indigo-800">
      <Header />
      <main className="relative">
        <Hero />
        <FeatureShowcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;
