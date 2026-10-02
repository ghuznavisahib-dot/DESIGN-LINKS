import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, MapPin } from 'lucide-react';
import { DesignLinksLogo } from './DesignLinksLogo';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Architectural Design',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(defaultService);
  const [plotSize, setPlotSize] = useState('5 Marla');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg bg-[#141923] border border-white/15 rounded-2xl shadow-2xl p-6 sm:p-8 overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#ea580c]/10 text-[#ea580c] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white font-display">
              Consultation Scheduled
            </h3>
            <p className="text-stone-300 text-sm mt-2 max-w-sm">
              Thank you, <span className="text-white font-semibold">{fullName}</span>. An architectural consultant from Design Links will contact you at{' '}
              <span className="text-[#ea580c] font-mono-numbers font-semibold">{phone}</span> to confirm your session.
            </p>
            <div className="mt-4 p-3 rounded-lg bg-black/40 border border-white/10 text-xs text-stone-400 font-mono-numbers flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#ea580c]" />
              <span>Office: Canal Road, Near Tofha Sweet's, Burewala</span>
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-6 px-6 py-2.5 rounded-lg bg-[#ea580c] hover:bg-[#d94e08] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <DesignLinksLogo variant="official" size="sm" />
              <h3 className="text-xl sm:text-2xl font-black text-white font-display mt-3">
                Request an Architectural Consultation
              </h3>
              <p className="text-xs text-stone-400 mt-1">
                Meet with our engineering &amp; design team in Burewala to discuss your project.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ea580c]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 mb-1">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0300 0000000"
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/15 text-white text-sm focus:outline-none focus:border-[#ea580c] font-mono-numbers"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 mb-1">
                    Service *
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0e121a] border border-white/15 text-white text-xs focus:outline-none focus:border-[#ea580c]"
                  >
                    <option value="Architectural Design">Architectural Design</option>
                    <option value="House Construction">House Construction</option>
                    <option value="Construction">Construction</option>
                    <option value="Property Solutions">Property Solutions</option>
                    <option value="Renovation & Remodeling">Renovation &amp; Remodeling</option>
                    <option value="Project Consultation">Project Consultation</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 mb-1">
                    Plot / Structure Size
                  </label>
                  <select
                    value={plotSize}
                    onChange={(e) => setPlotSize(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-[#0e121a] border border-white/15 text-white text-xs focus:outline-none focus:border-[#ea580c]"
                  >
                    <option value="3 to 5 Marla">3 to 5 Marla</option>
                    <option value="7 to 10 Marla">7 to 10 Marla</option>
                    <option value="1 Kanal">1 Kanal</option>
                    <option value="2+ Kanal">2+ Kanal</option>
                    <option value="Commercial Plaza">Commercial Plaza</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-numbers uppercase tracking-wider text-stone-300 mb-1">
                  Project Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Location in Burewala, estimated budget, or key requirements..."
                  className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/15 text-white text-xs focus:outline-none focus:border-[#ea580c] resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-[#ea580c] hover:bg-[#d94e08] disabled:opacity-60 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>CONFIRM CONSULTATION REQUEST</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-stone-400 flex items-center justify-center gap-1.5 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#ea580c]" />
                <span>Zero obligations. Direct guidance from experienced builders.</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
