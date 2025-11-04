import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-500/20 via-fuchsia-500/20 to-cyan-500/20 p-8 border border-white/20 backdrop-blur-xl">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold">Stay in the flow</h4>
              <p className="mt-2 text-white/80 max-w-md">Join our newsletter for product updates, design notes, and workflow tips.</p>
            </div>
            <form className="flex gap-3">
              <input
                type="email"
                required
                placeholder="you@company.com"
                className="flex-1 px-5 py-3 rounded-full bg-white/90 text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-300"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-full bg-white text-indigo-900 font-medium hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-md bg-gradient-to-br from-indigo-400 to-fuchsia-400" />
              <span>FlowGrid</span>
            </div>
            <p>© {new Date().getFullYear()} FlowGrid, Inc. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
