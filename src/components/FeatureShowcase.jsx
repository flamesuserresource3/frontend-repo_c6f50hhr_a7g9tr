import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, Bot, Users, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Rocket,
    title: 'Task Automation',
    desc: 'Create rules that move work forward automatically with AI triggers and conditions.',
  },
  {
    icon: Bot,
    title: 'AI Scheduling',
    desc: 'Smartly prioritize and schedule tasks based on team capacity and goals.',
  },
  {
    icon: Users,
    title: 'Collaboration Rooms',
    desc: 'Bring tasks, docs, and chat together in focused spaces for each initiative.',
  },
  {
    icon: BarChart3,
    title: 'Progress Insights',
    desc: 'Real-time trends, forecasts, and bottleneck detection across every workflow.',
  },
];

const Toggle = ({ value, onChange }) => {
  return (
    <button
      onClick={() => onChange(!value)}
      className="relative inline-flex items-center rounded-full bg-white/10 backdrop-blur-md px-1 py-1 w-40 transition-colors"
      aria-label="Toggle billing period"
    >
      <span
        className={`absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] rounded-full bg-white transition-transform ${
          value ? 'translate-x-[calc(100%+0.5rem)]' : 'translate-x-0'
        }`}
      />
      <span className={`z-10 flex-1 text-center text-sm ${value ? 'text-white/70' : 'text-indigo-900'}`}>Monthly</span>
      <span className={`z-10 flex-1 text-center text-sm ${value ? 'text-indigo-900' : 'text-white/70'}`}>Yearly</span>
    </button>
  );
};

const DashboardMock = () => {
  return (
    <div className="relative rounded-2xl p-4 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-gradient-to-br from-indigo-400/30 via-fuchsia-400/30 to-cyan-400/30 blur-3xl rounded-full pointer-events-none" />
      <div className="flex gap-4">
        <div className="flex-1 space-y-4">
          <div className="rounded-xl bg-white/70 text-slate-900 p-4 shadow-inner">
            <div className="flex justify-between items-center">
              <div className="h-4 w-24 rounded-md bg-slate-200" />
              <div className="h-4 w-12 rounded-md bg-slate-200" />
            </div>
            <div className="mt-4 grid grid-cols-12 gap-2">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="h-24 rounded-md bg-gradient-to-t from-indigo-200 to-fuchsia-200" />
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-white/70 text-slate-900 p-4 shadow-inner">
            <div className="flex items-center gap-2 mb-3">
              <div className="h-3 w-3 rounded-full bg-emerald-400" />
              <div className="h-3 w-24 rounded-md bg-slate-200" />
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="p-3 rounded-lg bg-white shadow">
                  <div className="h-4 w-28 bg-slate-200 rounded" />
                  <div className="mt-2 h-3 w-40 bg-slate-100 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <aside className="w-64 hidden lg:block rounded-xl bg-white/60 text-slate-900 p-4 shadow-inner">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-300 to-fuchsia-300" />
            <div>
              <div className="h-3 w-24 bg-slate-200 rounded" />
              <div className="mt-1 h-2 w-16 bg-slate-100 rounded" />
            </div>
          </div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="p-3 rounded-lg bg-white shadow">
                <div className="h-3 w-36 bg-slate-200 rounded" />
                <div className="mt-2 h-2 w-28 bg-slate-100 rounded" />
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 rounded-lg bg-gradient-to-br from-indigo-200 to-cyan-200 text-slate-900">
            <div className="text-xs font-medium">AI Assistant</div>
            <div className="mt-1 text-[11px] opacity-70">How can I help optimize this sprint?</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

const FeatureShowcase = () => {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="features" className="relative z-10">
      <div className="mx-auto max-w-7xl px-6 py-20 space-y-24">
        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-semibold">Powerful building blocks</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">
            A refined toolkit to plan, automate, and analyze every part of your workflow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all shadow-lg hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-400/20 via-fuchsia-400/20 to-cyan-400/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity pointer-events-none" />
              <div className="relative">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-indigo-400 to-fuchsia-400 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm text-white/80">{desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard preview */}
        <motion.div
          id="demo"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_3px] shadow-emerald-400/60" />
            <h3 className="text-2xl font-semibold">Live dashboard preview</h3>
          </div>
          <DashboardMock />
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-semibold">Trusted by modern teams</h3>
          <div className="relative overflow-x-auto no-scrollbar">
            <div className="flex gap-6 min-w-max pr-6">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative w-80 rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl"
                >
                  <div className="absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-400/20 via-fuchsia-400/20 to-cyan-400/20 blur-xl opacity-60 pointer-events-none" />
                  <div className="relative">
                    <p className="text-white/90">
                      “FlowGrid helps our team see the future of our sprint. The AI nudges are spot on.”
                    </p>
                    <div className="mt-4 flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-slate-200 to-slate-400 border border-white/30" />
                      <div>
                        <div className="text-sm font-medium">Team {i}</div>
                        <div className="text-xs text-white/70">Case Study • Productivity +24%</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Pricing */}
        <motion.div
          id="pricing"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold">Simple, transparent pricing</h3>
              <p className="text-white/80">Scale with your team. Cancel anytime.</p>
            </div>
            <Toggle value={yearly} onChange={setYearly} />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Starter', price: yearly ? 9 : 12, features: ['Unlimited tasks', 'Basic automations', 'Community support'] },
              { name: 'Pro', price: yearly ? 19 : 24, popular: true, features: ['AI scheduling', 'Advanced automations', 'Priority support'] },
              { name: 'Enterprise', price: yearly ? 49 : 59, features: ['SSO & roles', 'Custom models', 'Dedicated success'] },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-6 bg-white/10 backdrop-blur-xl border ${
                  plan.popular ? 'border-white/60 shadow-2xl' : 'border-white/20 shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-6 text-[11px] px-2 py-1 rounded-full bg-white text-indigo-900 font-medium shadow">
                    Most Popular
                  </div>
                )}
                <div className="text-lg font-semibold">{plan.name}</div>
                <div className="mt-2 flex items-end gap-1">
                  <div className="text-3xl font-bold">${plan.price}</div>
                  <div className="text-white/70 mb-1 text-sm">/user/mo</div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-white/90">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#get-started"
                  className={`mt-6 inline-flex w-full items-center justify-center px-4 py-2 rounded-xl font-medium transition-colors ${
                    plan.popular
                      ? 'bg-white text-indigo-900 hover:bg-white/90'
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {plan.popular ? 'Start Pro' : 'Choose Plan'}
                </a>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
