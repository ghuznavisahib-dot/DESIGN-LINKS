import React from 'react';
import { Layers, Compass, Ruler, Building2, CheckCircle2 } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-28 bg-[#0e121a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
            <span>ABOUT US</span>
            <span className="text-white/30">/</span>
            <span>DESIGN LINKS CONSTRUCTION & PROPERTY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            PRACTICAL DESIGN.
            <br />
            QUALITY CONSTRUCTION.
          </h2>
          <div className="h-1 w-16 bg-[#ea580c] mt-6" />
        </div>

        {/* Core Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Statement */}
          <div className="lg:col-span-7 space-y-6 text-stone-300 text-base sm:text-lg leading-relaxed font-normal">
            <p className="text-white font-medium text-xl sm:text-2xl leading-snug">
              Design Links Construction and Property is a construction and property-focused business serving clients in Burewala, Punjab.
            </p>
            <p>
              The company focuses on construction, architectural development and property-related solutions with an emphasis on practical design, quality and professional service.
            </p>
            <p className="text-stone-400 text-sm sm:text-base">
              Every project is approached through a disciplined synthesis of spatial utility, durable material selection, and clean modern aesthetics. Whether developing a contemporary private residence or managing property requirements, our priority remains reliable execution tailored to the unique conditions of Burewala and surrounding regions.
            </p>

            {/* Core Values Strip */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono-numbers">
                    Practical Modernism
                  </h4>
                  <p className="text-xs text-stone-400 mt-1">
                    Design solutions shaped around functional living rather than unnecessary ornament.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10">
                <CheckCircle2 className="w-5 h-5 text-[#ea580c] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider font-mono-numbers">
                    Transparent Execution
                  </h4>
                  <p className="text-xs text-stone-400 mt-1">
                    Direct communication, clear project milestones, and quality material standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Architectural Pillars Card */}
          <div className="lg:col-span-5 bg-[#141923] p-8 rounded-2xl border border-white/10 shadow-xl space-y-6">
            <h3 className="text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold">
              OPERATIONAL DISCIPLINES
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-[#ea580c] shrink-0 border border-white/10">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Construction Management</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Supervised on-site construction ensuring structural integrity, accurate specifications, and durable workmanship.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-[#ea580c] shrink-0 border border-white/10">
                  <Ruler className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Architectural Concepts</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Efficient spatial planning, 3D visualization, natural cross-ventilation, and contemporary facade development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-[#ea580c] shrink-0 border border-white/10">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Local Property Solutions</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Ground-level market guidance for residential and commercial plots, acquisitions, and project consultations in Burewala.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-white/5 text-[#ea580c] shrink-0 border border-white/10">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Quality Materials</h4>
                  <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                    Careful sourcing of steel, cement, sanitary fittings, and finishes designed for regional longevity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
