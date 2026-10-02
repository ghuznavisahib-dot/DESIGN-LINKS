import React, { useState } from 'react';
import { Building, MapPin, Search, ArrowRight, CheckCircle2 } from 'lucide-react';

interface PropertySectionProps {
  onRegisterPropertyInquiry: () => void;
}

export const PropertySection: React.FC<PropertySectionProps> = ({ onRegisterPropertyInquiry }) => {
  const [filterType, setFilterType] = useState('All');

  return (
    <section id="property" className="py-28 bg-[#0b0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
              <span>REAL ESTATE</span>
              <span className="text-white/30">/</span>
              <span>PROPERTY SOLUTIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              PROPERTY IN BUREWALA.
            </h2>
          </div>
          <p className="text-stone-400 text-sm max-w-md leading-relaxed">
            Design Links assists clients in residential, commercial, and agricultural property acquisitions, verification, and development across Burewala and Punjab.
          </p>
        </div>

        {/* Filter Bar (Visual structure) */}
        <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-[#121620] border border-white/10 mb-12">
          <div className="flex items-center gap-2">
            {['All', 'Residential Plots', 'Commercial', 'Constructed Homes'].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilterType(tab)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  filterType === tab
                    ? 'bg-[#ea580c] text-white shadow-xs'
                    : 'text-stone-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 text-xs text-stone-400 font-mono-numbers">
            <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
            <span>Target Market: Burewala, Punjab</span>
          </div>
        </div>

        {/* Primary Prompt Compliance Box: Required exact text */}
        <div className="relative p-12 md:p-16 rounded-2xl bg-gradient-to-br from-[#121620] to-[#1a202c] border border-white/10 text-center flex flex-col items-center justify-center overflow-hidden shadow-2xl">
          {/* Subtle architectural grid pattern background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

          <div className="relative z-10 max-w-2xl flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ea580c] mb-6">
              <Building className="w-8 h-8" />
            </div>

            {/* MANDATORY PROMPT TEXT */}
            <h3 className="text-2xl sm:text-3xl font-black text-white font-display tracking-wider uppercase mb-4">
              PROPERTY LISTINGS WILL BE UPDATED HERE.
            </h3>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-8">
              Design Links is currently indexing verified residential and commercial opportunities in Burewala. In accordance with our quality standards, only fully vetted plots and structures with verified documentation will be showcased.
            </p>

            {/* Registration Action */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
              <button
                onClick={onRegisterPropertyInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#ea580c] hover:bg-[#d94e08] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>REGISTER YOUR PROPERTY INQUIRY</span>
              </button>
              <button
                onClick={onRegisterPropertyInquiry}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-200 border border-white/10 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>SUBMIT PROPERTY FOR CONSTRUCTION</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Property Services Advisory Strip */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#121620] border border-white/5">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c]" />
              <span>Plot Feasibility & Demarcation</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Evaluating soil suitability, access roads, zoning bylaws, and architectural viability before purchase.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#121620] border border-white/5">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c]" />
              <span>Turnkey Construction Linkage</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Seamlessly link your plot purchase with our complete architectural planning and construction execution.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-[#121620] border border-white/5">
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
              <CheckCircle2 className="w-4 h-4 text-[#ea580c]" />
              <span>Local Market Pricing Guidance</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">
              Real-world intelligence on prevailing per-marla and per-canal valuations in Burewala sectors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
