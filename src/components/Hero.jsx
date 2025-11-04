import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center" id="home">
      {/* Background gradient aura */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] max-w-[1200px] rounded-full bg-gradient-to-br from-[#a78bfa]/40 via-[#fb7185]/30 to-[#22d3ee]/40 blur-3xl opacity-60 pointer-events-none" />
      </div>

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-white/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
            Flow, Optimized
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-white drop-shadow-sm">
            Reimagine how your team flows
          </h1>
          <p className="text-white/80 text-lg max-w-xl">
            AI-powered productivity dashboard for modern teams. Plan, track, and optimize every workflow with intelligent assistance.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <a
              href="#get-started"
              className="relative inline-flex items-center justify-center px-6 py-3 rounded-full text-indigo-900 bg-white font-medium shadow-lg shadow-indigo-500/20 overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-cyan-400 opacity-0 group-hover:opacity-100 blur-lg transition-opacity"></span>
              <span className="relative">Get Started</span>
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-md text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M8 5v14l11-7z"/></svg>
              Watch Demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
