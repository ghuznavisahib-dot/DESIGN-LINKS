import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService = '' }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [serviceRequired, setServiceRequired] = useState(initialService || 'Construction');
  const [projectDetails, setProjectDetails] = useState('');
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const services = [
    'Construction',
    'Architectural Design',
    'House Construction',
    'Property Solutions',
    'Renovation & Remodeling',
    'Project Consultation',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim() || !phoneNumber.trim()) {
      setErrorMsg('Please enter your Full Name and Phone Number so we can reach you.');
      return;
    }

    setIsSubmitting(true);
    // Simulate swift local processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 bg-[#0b0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headings & Instructions */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold">
              <span>GET IN TOUCH</span>
              <span className="text-white/30">/</span>
              <span>PROJECT INQUIRY</span>
            </div>

            {/* MANDATORY PROMPT HEADING */}
            <h2 className="text-3xl sm:text-5xl font-black text-white font-display tracking-tight leading-tight">
              LET'S BUILD SOMETHING GREAT.
            </h2>

            {/* MANDATORY PROMPT TEXT */}
            <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
              Have a construction, design or property requirement?
              <br />
              Get in touch with Design Links.
            </p>

            <div className="pt-6 border-t border-white/10 space-y-4 text-xs text-stone-400">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span>
                  Consultations conducted on-site or at our Canal Road studio in Burewala.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span>
                  Clear cost estimates and timeline projections provided prior to project kickoff.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span>
                  3D architectural walkthrough visualizers available for custom residence planning.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiries Form */}
          <div className="lg:col-span-7 bg-[#141923] p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl">
            {isSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white font-display">
                  Inquiry Received
                </h3>
                <p className="text-stone-300 text-sm max-w-md leading-relaxed">
                  Thank you, <span className="text-white font-semibold">{fullName}</span>. Your project requirement regarding{' '}
                  <span className="text-[#ea580c] font-semibold">{serviceRequired}</span> has been registered. Our representative in Burewala will contact you shortly at{' '}
                  <span className="text-white font-mono-numbers">{phoneNumber}</span>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFullName('');
                    setPhoneNumber('');
                    setEmail('');
                    setProjectDetails('');
                  }}
                  className="mt-6 px-6 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 font-semibold mb-2"
                  >
                    Full Name <span className="text-[#ea580c]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Muhammad Ahmad"
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-colors"
                  />
                </div>

                {/* Phone Number & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phoneNumber"
                      className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 font-semibold mb-2"
                    >
                      Phone Number <span className="text-[#ea580c]">*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      type="tel"
                      required
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      placeholder="e.g. 0300 1234567"
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-colors font-mono-numbers"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 font-semibold mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. client@example.com"
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-colors"
                    />
                  </div>
                </div>

                {/* Service Required */}
                <div>
                  <label
                    htmlFor="serviceRequired"
                    className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 font-semibold mb-2"
                  >
                    Service Required <span className="text-[#ea580c]">*</span>
                  </label>
                  <select
                    id="serviceRequired"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-[#141923] border border-white/15 text-white text-sm focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-colors cursor-pointer"
                  >
                    {services.map((svc) => (
                      <option key={svc} value={svc} className="bg-[#121620] text-white">
                        {svc}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Project Details */}
                <div>
                  <label
                    htmlFor="projectDetails"
                    className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 font-semibold mb-2"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    rows={4}
                    value={projectDetails}
                    onChange={(e) => setProjectDetails(e.target.value)}
                    placeholder="Provide details about your plot size, location in Burewala, construction timeline, or architectural requirements..."
                    className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/15 text-white text-sm placeholder:text-stone-500 focus:outline-none focus:border-[#ea580c] focus:ring-1 focus:ring-[#ea580c] transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#ea580c] hover:bg-[#d94e08] disabled:opacity-60 text-white font-bold text-xs uppercase tracking-widest shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SEND INQUIRY</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
