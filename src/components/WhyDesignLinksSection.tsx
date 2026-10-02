import React from 'react';
import { Sparkles, Shield, Users, MapPin } from 'lucide-react';

export const WhyDesignLinksSection: React.FC = () => {
  const pillars = [
    {
      number: '01',
      title: 'Modern Approach',
      subtitle: 'Contemporary Thinking',
      description: 'Contemporary thinking for today\'s construction and property requirements.',
      detail: 'Moving away from outdated patterns toward efficient space planning, clean modern lines, natural lighting, and climate-responsive construction techniques.',
      icon: Sparkles,
    },
    {
      number: '02',
      title: 'Quality Focus',
      subtitle: 'Uncompromising Standards',
      description: 'Attention to design, materials and project requirements.',
      detail: 'Rigorous supervision of foundation work, grade of concrete, certified reinforcement steel, and durable finishings that withstand the local climate.',
      icon: Shield,
    },
    {
      number: '03',
      title: 'Client-Centered',
      subtitle: 'Collaborative Solutions',
      description: 'Solutions shaped around client requirements.',
      detail: 'Every family and business has unique spatial, aesthetic, and budgetary constraints. We develop customized blueprints rather than rigid generic templates.',
      icon: Users,
    },
    {
      number: '04',
      title: 'Local Understanding',
      subtitle: 'Regional Insight',
      description: 'Focused on Burewala and the surrounding property and construction market.',
      detail: 'In-depth familiarity with local municipal regulations, soil conditions, trusted regional material vendors, and real-time property market trends.',
      icon: MapPin,
    },
  ];

  return (
    <section className="py-28 bg-[#090c12] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
            <span>CORE PILLARS</span>
            <span className="text-white/30">/</span>
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            WHY DESIGN LINKS?
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            A disciplined commitment to architectural integrity, practical utility, and client satisfaction in every square foot built.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.number}
                className="group relative bg-[#121620] p-8 sm:p-10 rounded-2xl border border-white/10 hover:border-[#ea580c]/50 transition-all duration-300 flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-3xl font-black font-mono-numbers text-stone-600 group-hover:text-[#ea580c] transition-colors">
                      {pillar.number}
                    </span>
                    <div className="p-3 rounded-xl bg-white/5 group-hover:bg-[#ea580c]/10 text-stone-300 group-hover:text-[#ea580c] transition-colors border border-white/5">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-xs font-mono-numbers uppercase tracking-wider text-[#ea580c] font-bold block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl font-bold text-white font-display mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-base text-stone-200 font-medium leading-snug mb-3">
                    {pillar.description}
                  </p>

                  <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-xs text-stone-400 font-mono-numbers">
                  <span>Design Links Construction & Property</span>
                  <span className="text-[#ea580c]">Burewala, PK</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
