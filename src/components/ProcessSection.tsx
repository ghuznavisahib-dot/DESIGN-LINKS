import React from 'react';
import { ArrowRight, CheckCircle, MessagesSquare, FileText, Palette, HardHat, Award } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'CONSULTATION',
      icon: MessagesSquare,
      summary: 'Understanding vision, plot parameters, and budgetary goals.',
      deliverables: ['Initial site meeting', 'Requirement briefing', 'Scope & budget alignment'],
    },
    {
      step: '02',
      title: 'PLANNING',
      icon: FileText,
      summary: 'Feasibility analysis, zoning review, and structural planning.',
      deliverables: ['Site survey & measurements', 'Bylaw compliance check', 'Preliminary timeline schedule'],
    },
    {
      step: '03',
      title: 'DESIGN & DEVELOPMENT',
      icon: Palette,
      summary: '2D architectural layouts and high-end 3D visual walkthroughs.',
      deliverables: ['Architectural floor plans', 'Photorealistic 3D elevations', 'Material specifications'],
    },
    {
      step: '04',
      title: 'EXECUTION',
      icon: HardHat,
      summary: 'Rigorous on-site construction with scheduled phase inspections.',
      deliverables: ['Foundation & RCC structure', 'Brickwork & conduit utilities', 'Finishing & sanitary installation'],
    },
    {
      step: '05',
      title: 'COMPLETION',
      icon: Award,
      summary: 'Final quality audits, walkthrough inspection, and handover.',
      deliverables: ['Detailed snag list clearance', 'Utility testing verification', 'Final project handover'],
    },
  ];

  return (
    <section className="py-28 bg-[#0b0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
            <span>METHODOLOGY</span>
            <span className="text-white/30">/</span>
            <span>CINEMATIC PROJECT TIMELINE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            HOW WE BUILD.
          </h2>
          <p className="text-stone-400 text-sm sm:text-base mt-4 max-w-xl leading-relaxed">
            A structured, 5-stage project lifecycle engineered to deliver architectural quality with complete predictability.
          </p>
        </div>

        {/* Timeline Horizontal / Stacked Container */}
        <div className="relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ea580c]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {steps.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group bg-[#121620] hover:bg-[#161c29] p-6 rounded-2xl border border-white/10 hover:border-[#ea580c] transition-all duration-300 flex flex-col justify-between shadow-lg hover:-translate-y-2"
                >
                  <div>
                    {/* Step Number & Icon badge */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-3xl font-black font-mono-numbers text-stone-500 group-hover:text-[#ea580c] transition-colors">
                        {item.step}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white/5 group-hover:bg-[#ea580c] flex items-center justify-center text-stone-300 group-hover:text-white transition-all shadow-sm">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-white font-display uppercase tracking-wider mb-2 group-hover:text-[#ea580c] transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs text-stone-300 leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 space-y-1.5">
                    {item.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="text-[11px] text-stone-400 flex items-center gap-1.5">
                        <CheckCircle className="w-3 h-3 text-[#ea580c] shrink-0" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
