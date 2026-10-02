import React from 'react';
import { ArrowUpRight, Hammer, PenTool, Home, KeyRound, Wrench, MessageSquareText } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const services = [
    {
      number: '01',
      title: 'CONSTRUCTION',
      icon: Hammer,
      description: 'Professional construction solutions for residential and commercial requirements.',
      deliverables: ['Structural engineering & framing', 'Quality masonry & concrete work', 'On-site execution management'],
    },
    {
      number: '02',
      title: 'ARCHITECTURAL DESIGN',
      icon: PenTool,
      description: 'Modern architectural concepts and design-focused solutions.',
      deliverables: ['2D floor plans & elevations', 'Photorealistic 3D visualizations', 'Interior space optimization'],
    },
    {
      number: '03',
      title: 'HOUSE CONSTRUCTION',
      icon: Home,
      description: 'Residential construction solutions tailored to project requirements.',
      deliverables: ['Turnkey home building', 'Custom villa construction', 'Finishing & sanitary installation'],
    },
    {
      number: '04',
      title: 'PROPERTY SOLUTIONS',
      icon: KeyRound,
      description: 'Property-related assistance and solutions.',
      deliverables: ['Site selection & plot evaluation', 'Market pricing advisory', 'Property documentation support'],
    },
    {
      number: '05',
      title: 'RENOVATION & REMODELING',
      icon: Wrench,
      description: 'Modernizing existing spaces with practical contemporary design.',
      deliverables: ['Facade redesign & elevation update', 'Interior layout remodeling', 'Plumbing & electrical modernization'],
    },
    {
      number: '06',
      title: 'PROJECT CONSULTATION',
      icon: MessageSquareText,
      description: 'Consultation for construction, architectural and property requirements.',
      deliverables: ['Initial feasibility studies', 'Budget planning & cost estimation', 'Material selection advisory'],
    },
  ];

  return (
    <section id="services" className="py-28 bg-[#0b0e14] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
              <span>EXPERTISE</span>
              <span className="text-white/30">/</span>
              <span>COMPREHENSIVE SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              SERVICES ENGINEERED FOR EXCELLENCE.
            </h2>
          </div>
          <p className="text-stone-400 text-sm max-w-sm leading-relaxed">
            Delivering modern construction, architectural design and property solutions across Burewala and Punjab.
          </p>
        </div>

        {/* 6 Premium Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.number}
                onClick={() => onSelectService(service.title)}
                className="group relative bg-[#121620] hover:bg-[#161c29] p-8 rounded-xl border border-white/10 hover:border-[#ea580c]/50 transition-all duration-300 flex flex-col justify-between cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-2xl font-black font-mono-numbers text-stone-500 group-hover:text-[#ea580c] transition-colors">
                      {service.number}
                    </span>
                    <div className="p-3 rounded-lg bg-white/5 group-hover:bg-[#ea580c]/10 text-stone-300 group-hover:text-[#ea580c] transition-colors border border-white/5 group-hover:border-[#ea580c]/30">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white tracking-wide font-display mb-3 group-hover:text-[#ea580c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-stone-300 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Deliverables Bullet List */}
                  <div className="space-y-2 border-t border-white/5 pt-4 mb-6">
                    {service.deliverables.map((item, idx) => (
                      <div key={idx} className="text-xs text-stone-400 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Action */}
                <div className="flex items-center justify-between text-xs font-bold text-stone-300 group-hover:text-white pt-4 border-t border-white/10">
                  <span className="uppercase tracking-wider font-mono-numbers">
                    Request Consultation
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#ea580c] flex items-center justify-center text-stone-300 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
