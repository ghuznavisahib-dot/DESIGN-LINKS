import React from 'react';
import { ArrowDown, ArrowRight, ShieldCheck, Compass } from 'lucide-react';
import { DesignLinksLogo } from './DesignLinksLogo';

interface HeroSectionProps {
  onExploreServices: () => void;
  onOpenConsultation: () => void;
  onStartWalkthrough: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreServices,
  onOpenConsultation,
  onStartWalkthrough,
}) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#0b0e14] pt-24 pb-16">
      {/* Background Architectural Poster Backdrop with Subtle Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src="/walkthrough-poster.jpg"
          alt="Modern Architecture Front Elevation by Design Links"
          className="w-full h-full object-cover object-center brightness-75 scale-105"
        />
        {/* Architectural grid overlay and gradient scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e14] via-[#0b0e14]/65 to-black/75" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start justify-center">
        {/* Brand Badge Card */}
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <DesignLinksLogo variant="official" size="md" />
          <div className="h-10 w-[1px] bg-white/20 hidden sm:block" />
          <div className="flex flex-col text-left">
            <span className="text-[11px] font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold">
              BUREWALA · PUNJAB · PAKISTAN
            </span>
            <span className="text-xs text-stone-300">
              Construction · Architectural Design · Property Solutions
            </span>
          </div>
        </div>

        {/* Hero Main Headline */}
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.95] font-display mb-6">
            BUILDING SPACES.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-stone-200 to-[#ea580c]">
              DESIGNING POSSIBILITIES.
            </span>
          </h1>

          <div className="border-l-2 border-[#ea580c] pl-4 sm:pl-6 my-6 max-w-2xl">
            <p className="text-base sm:text-xl font-medium text-stone-200 leading-snug">
              Design Links Construction and Property
            </p>
            <p className="text-sm sm:text-base text-stone-400 mt-1 leading-relaxed">
              Modern construction, architectural design and property solutions in Burewala, Punjab.
            </p>
          </div>
        </div>

        {/* Action Controls */}
        <div className="mt-6 flex flex-wrap items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onStartWalkthrough}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#ea580c] hover:bg-[#d94e08] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-orange-600/30 transition-all active:scale-95 cursor-pointer"
          >
            <Compass className="w-4 h-4" />
            <span>START 3D VIRTUAL WALKTHROUGH</span>
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer backdrop-blur-xs"
          >
            <span>EXPLORE OUR SERVICES</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-stone-900/80 hover:bg-stone-800 text-stone-200 border border-white/10 font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
          >
            <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
            <span>GET A CONSULTATION</span>
          </button>
        </div>

        {/* Quick Specs Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full grid grid-cols-2 md:grid-cols-4 gap-6 text-stone-300">
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-mono-numbers">
              Primary Location
            </span>
            <span className="text-sm font-semibold text-white">Canal Road, Burewala</span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-mono-numbers">
              Design Philosophy
            </span>
            <span className="text-sm font-semibold text-white">Practical & Contemporary</span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-mono-numbers">
              Core Capabilities
            </span>
            <span className="text-sm font-semibold text-white">Residential & Commercial</span>
          </div>
          <div>
            <span className="block text-[11px] uppercase tracking-wider text-stone-400 font-mono-numbers">
              Virtual Walkthrough
            </span>
            <span className="text-sm font-semibold text-[#ea580c] flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#ea580c] animate-pulse" />
              Scroll-Controlled 3D
            </span>
          </div>
        </div>

        {/* Scroll Indicator Prompt */}
        <div
          onClick={onStartWalkthrough}
          className="mt-12 mx-auto flex flex-col items-center gap-2 cursor-pointer group select-none text-stone-400 hover:text-white transition-colors"
        >
          <span className="text-[10px] uppercase tracking-widest font-mono-numbers">
            SCROLL TO EXPLORE 3D WALKTHROUGH
          </span>
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#ea580c] group-hover:bg-[#ea580c]/10 transition-colors animate-bounce">
            <ArrowDown className="w-4 h-4 text-[#ea580c]" />
          </div>
        </div>
      </div>
    </section>
  );
};
