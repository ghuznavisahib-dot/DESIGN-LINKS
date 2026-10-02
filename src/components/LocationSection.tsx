import React from 'react';
import { MapPin, ExternalLink, Navigation, Clock, Building } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const mapsUrl = 'https://maps.app.goo.gl/K53ijvPXwkRZchLa7';

  return (
    <section id="location" className="py-28 bg-[#0e121a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
            <span>OFFICE & PRESENCE</span>
            <span className="text-white/30">/</span>
            <span>VISIT OUR OFFICE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
            LOCATION & ACCESSIBILITY.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Location Information Card */}
          <div className="lg:col-span-5 bg-[#141923] p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col justify-between shadow-xl">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#ea580c]/10 border border-[#ea580c]/20 flex items-center justify-center text-[#ea580c] mb-6">
                <MapPin className="w-6 h-6" />
              </div>

              <span className="text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold block mb-2">
                HEAD OFFICE
              </span>
              <h3 className="text-2xl font-bold text-white font-display mb-4">
                Design Links Construction and Property
              </h3>

              {/* Exact Address from prompt */}
              <div className="space-y-1.5 text-base sm:text-lg text-stone-200 font-medium pb-6 mb-6 border-b border-white/10">
                <p>Near Tofha Sweet's,</p>
                <p>Canal Road,</p>
                <p>Burewala,</p>
                <p className="text-[#ea580c]">Punjab, Pakistan</p>
              </div>

              {/* Key Landmark Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <Navigation className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Prominent Landmark</span>
                    <span>Directly situated along Canal Road, proximate to Tofha Sweet's with accessible client parking.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <Building className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Consultation Studio</span>
                    <span>Architectural review desk, 3D project visualization suite, and material sample library.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-xs text-stone-300">
                  <Clock className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Office Availability</span>
                    <span>Monday to Saturday · 9:00 AM – 7:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* MANDATORY PROMPT CTA: OPEN IN GOOGLE MAPS */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#ea580c] hover:bg-[#d94e08] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-orange-600/30 transition-all cursor-pointer"
            >
              <span>OPEN IN GOOGLE MAPS</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Interactive Map Embed */}
          <div className="lg:col-span-7 bg-[#141923] rounded-2xl overflow-hidden border border-white/10 relative min-h-[400px] flex flex-col shadow-xl">
            <iframe
              title="Design Links Burewala Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13735.632230230678!2d72.6738281!3d30.1554904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393d258b348d4f43%3A0x6b772c67c515a81e!2sCanal%20Rd%2C%20Burewala%2C%20Vehari%2C%20Punjab!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '420px', filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full flex-1"
            />
            {/* Map bottom bar */}
            <div className="p-4 bg-[#0b0e14] border-t border-white/10 flex flex-wrap items-center justify-between text-xs text-stone-400 gap-2">
              <span className="font-mono-numbers">
                Canal Road, Burewala · Coordinates Active
              </span>
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ea580c] hover:underline font-semibold flex items-center gap-1"
              >
                <span>Direct Navigation</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
