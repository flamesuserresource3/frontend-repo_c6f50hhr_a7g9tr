import React, { useEffect, useState } from 'react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-white/10 shadow-[0_8px_30px_rgb(2,6,23,0.12)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-400 via-fuchsia-400 to-cyan-400 shadow-lg shadow-indigo-500/30" />
          <span className="font-semibold tracking-tight text-white/90 text-lg">FlowGrid</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <a href="#ai" className="hover:text-white transition-colors">AI Assistant</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex px-4 py-2 text-sm rounded-full bg-white/10 hover:bg-white/20 transition-colors">Sign in</button>
          <a
            href="#get-started"
            className="relative inline-flex items-center justify-center px-5 py-2 text-sm font-medium rounded-full text-indigo-900 bg-white overflow-hidden group"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-lg transition-opacity"></span>
            <span className="relative">Try for Free</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
