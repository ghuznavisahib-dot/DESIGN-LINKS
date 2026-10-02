import React from 'react';
import { X, Check, MapPin, Layers, ArrowRight } from 'lucide-react';
import { ProjectItem } from './ProjectsSection';

interface ProjectDetailModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onRequestQuote: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onRequestQuote,
}) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-[#141923] border border-white/15 rounded-2xl shadow-2xl overflow-hidden my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white border border-white/20 transition-colors cursor-pointer"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Feature Image with Overlay */}
        <div className="relative aspect-16/9 w-full bg-black">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141923] via-transparent to-black/40" />
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[11px] font-mono-numbers uppercase tracking-wider text-[#ea580c] font-bold bg-black/80 px-2.5 py-1 rounded border border-white/10">
              {project.category} · {project.type}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-display mt-2">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex items-center gap-2 text-xs text-stone-400 font-mono-numbers">
            <MapPin className="w-4 h-4 text-[#ea580c]" />
            <span>{project.location}</span>
          </div>

          <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
            {project.description}
          </p>

          <div>
            <h4 className="text-xs font-mono-numbers uppercase tracking-wider text-white font-bold mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#ea580c]" />
              <span>Architectural Specifications</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.specifications.map((spec, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 text-xs text-stone-300 p-2.5 rounded-lg bg-black/30 border border-white/5"
                >
                  <Check className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-stone-400">
              Interested in a similar construction design in Burewala?
            </span>
            <button
              onClick={() => {
                onClose();
                onRequestQuote(project.title);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#ea580c] hover:bg-[#d94e08] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
            >
              <span>INQUIRE ABOUT THIS DESIGN</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
