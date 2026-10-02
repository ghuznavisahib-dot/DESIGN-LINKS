import React, { useState } from 'react';
import { Eye, ArrowUpRight } from 'lucide-react';

interface ProjectsSectionProps {
  onOpenProjectModal: (project: ProjectItem) => void;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  location: string;
  type: string;
  image: string;
  description: string;
  specifications: string[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenProjectModal }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Modern Residence',
    'Luxury Villa',
    'Commercial Building',
    'Residential Construction',
    'Interior & Renovation',
  ];

  const projects: ProjectItem[] = [
    {
      id: 'p1',
      title: 'Linear Stone Residence Concept',
      category: 'Modern Residence',
      location: 'Burewala Region (Concept Study)',
      type: '3D Architectural Design Proposal',
      image: '/walkthrough-poster.jpg',
      description: 'A contemporary two-story residential concept featuring cantilevered concrete volumes, organic stone cladding, and natural timber screening designed for thermal comfort in Punjab.',
      specifications: ['4,200 sq.ft covered area', 'Double-height central stair hall', 'Integrated green lightwell courtyards'],
    },
    {
      id: 'p2',
      title: 'Grand Staircase & Atrium Concept',
      category: 'Luxury Villa',
      location: 'Proposed Villa Plan (Concept)',
      type: 'Interior Architectural Spatial Study',
      image: '/src/assets/images/walkthrough_stair_hall_1790949560480.jpg',
      description: 'Vertical circulation study exploring open floating oak treads, architectural brass pendant clusters, and expansive natural skylight illumination.',
      specifications: ['Clear glass balustrades', 'Italian marble flooring', 'Custom cove perimeter lighting'],
    },
    {
      id: 'p3',
      title: 'Open Living & Entertainment Lounge',
      category: 'Interior & Renovation',
      location: 'Burewala Residence (Design Model)',
      type: 'Modern Interior Renovation Concept',
      image: '/src/assets/images/walkthrough_living_lounge_1790949577373.jpg',
      description: 'Connected living space bridging drawing room and family lounge with bookmatched marble feature walls and integrated media joinery.',
      specifications: ['Acoustic wood slat paneling', 'Concealed linear HVAC diffusers', 'Architectural zoned lighting'],
    },
    {
      id: 'p4',
      title: 'Culinary Island & Prep Suite',
      category: 'Residential Construction',
      location: 'Modern Residence (Specification)',
      type: 'Modern Kitchen Construction Detail',
      image: '/src/assets/images/walkthrough_kitchen_island_1790949590545.jpg',
      description: 'Modern open kitchen layout emphasizing workflow ergonomics, calacatta marble waterfall edges, and hidden utility pantry access.',
      specifications: ['Soft-close integrated cabinetry', 'Designer pendant task lights', 'Durable non-porous surfaces'],
    },
    {
      id: 'p5',
      title: 'Master Suite & Private Garden Terrace',
      category: 'Modern Residence',
      location: 'Master Suite (Design Proposal)',
      type: 'Private Living Concept',
      image: '/src/assets/images/walkthrough_master_suite_1790949605465.jpg',
      description: 'Calm master bedroom sanctuary featuring floor-to-ceiling garden glazing, textured wall upholstery, and direct ensuite access.',
      specifications: ['Full-height acoustic glazing', 'Warm oak timber flooring', 'Direct terrace access'],
    },
    {
      id: 'p6',
      title: 'Commercial Plaza & Office Development',
      category: 'Commercial Building',
      location: 'Canal Road Corridor (Proposed)',
      type: 'Commercial Concept Framework',
      image: '/src/assets/images/hero_modern_elevation_1790949541521.jpg',
      description: 'Commercial architectural concept developed for flexible retail frontage on ground level with high-efficiency modern corporate offices above.',
      specifications: ['Structural steel & RCC hybrid', 'Thermal curtain-wall facade', 'Dedicated basement parking grid'],
    },
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-28 bg-[#0e121a] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
              <span>PORTFOLIO</span>
              <span className="text-white/30">/</span>
              <span>PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              ARCHITECTURAL SHOWCASE.
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
              Explore 3D architectural proposals, spatial studies, and development concepts. All project cards represent design models and ongoing plans ready for customization.
            </p>
          </div>
        </div>

        {/* Category Filters (Clean Segmented Tab Controls) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 select-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#ea580c] text-white shadow-md'
                  : 'bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onOpenProjectModal(project)}
              className="group bg-[#141923] rounded-2xl overflow-hidden border border-white/10 hover:border-[#ea580c]/50 transition-all duration-300 flex flex-col cursor-pointer shadow-lg hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative aspect-16/10 overflow-hidden bg-black/50">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" />
                
                {/* Clean Type Marker */}
                <div className="absolute top-4 left-4">
                  <span className="text-[11px] font-mono-numbers uppercase tracking-wider text-white font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#ea580c] text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Architectural Details</span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-stone-400 mb-2 font-mono-numbers">
                    <span>{project.location}</span>
                    <span className="text-[#ea580c]">{project.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white font-display group-hover:text-[#ea580c] transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-300 line-clamp-2 leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-400">
                  <span className="font-mono-numbers">Explore Concept</span>
                  <div className="w-7 h-7 rounded-full bg-white/5 group-hover:bg-[#ea580c] flex items-center justify-center text-stone-300 group-hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
