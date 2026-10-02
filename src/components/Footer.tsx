import React from 'react';
import { DesignLinksLogo } from './DesignLinksLogo';
import { MapPin, ArrowUp, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Property', href: '#property' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#07090e] border-t border-white/10 text-stone-400 py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/10 items-start">
          {/* Brand Column */}
          <div className="md:col-span-6 space-y-4">
            <DesignLinksLogo variant="official" size="md" />

            {/* MANDATORY PROMPT DISPLAY */}
            <div className="pt-2">
              <h3 className="text-lg font-bold text-white tracking-wider font-display">
                DESIGN LINKS
              </h3>
              <p className="text-xs uppercase tracking-widest text-[#ea580c] font-bold font-mono-numbers">
                CONSTRUCTION &amp; PROPERTY
              </p>
            </div>

            <div className="flex items-center gap-2 text-stone-300 text-sm font-medium">
              <MapPin className="w-4 h-4 text-[#ea580c] shrink-0" />
              <span>Burewala, Punjab, Pakistan</span>
            </div>

            <p className="text-xs text-stone-500 max-w-md leading-relaxed">
              Modern construction, architectural design and property solutions in Burewala, Punjab. Committed to practical, contemporary standards and lasting quality.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-numbers uppercase tracking-wider text-white font-bold">
              QUICK LINKS
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-xs text-stone-400 hover:text-[#ea580c] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Navigation Shortcut */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono-numbers uppercase tracking-wider text-white font-bold">
              OFFICE NAVIGATION
            </h4>
            <p className="text-xs text-stone-400 leading-relaxed">
              Near Tofha Sweet's, Canal Road, Burewala, Punjab, Pakistan
            </p>
            <a
              href="https://maps.app.goo.gl/K53ijvPXwkRZchLa7"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#ea580c] hover:underline font-semibold mt-2"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-stone-500 font-mono-numbers text-center sm:text-left">
            © 2026 Design Links Construction and Property. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-stone-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#ea580c]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
