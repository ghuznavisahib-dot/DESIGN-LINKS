import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  caption: string;
}

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    'All',
    'Architecture',
    'Construction',
    'Modern Houses',
    'Interiors',
    'Exterior Elevations',
    'Property',
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'Cantilevered Modern Residence Elevation',
      category: 'Exterior Elevations',
      image: '/src/assets/images/hero_modern_elevation_1790949541521.jpg',
      caption: 'Two-story residential facade featuring stone cladding, timber louvers, and expansive double glazing.',
    },
    {
      id: 'g2',
      title: 'Double-Height Architectural Stair Hall',
      category: 'Interiors',
      image: '/src/assets/images/walkthrough_stair_hall_1790949560480.jpg',
      caption: 'Suspended floating timber steps with clear tempered glass balustrades and custom brass pendant lighting.',
    },
    {
      id: 'g3',
      title: 'Integrated TV Lounge & Formal Drawing Room',
      category: 'Modern Houses',
      image: '/src/assets/images/walkthrough_living_lounge_1790949577373.jpg',
      caption: 'Open-concept living space with illuminated marble feature wall and acoustic slatted wood details.',
    },
    {
      id: 'g4',
      title: 'Waterfall Marble Kitchen Island Suite',
      category: 'Architecture',
      image: '/src/assets/images/walkthrough_kitchen_island_1790949590545.jpg',
      caption: 'Contemporary kitchen architecture balancing culinary ergonomics with architectural minimalism.',
    },
    {
      id: 'g5',
      title: 'Master Bedroom Retreat & Garden Glazing',
      category: 'Interiors',
      image: '/src/assets/images/walkthrough_master_suite_1790949605465.jpg',
      caption: 'Refined private quarters with bespoke acoustic headboard and direct view into landscaped courtyard.',
    },
    {
      id: 'g6',
      title: 'Front Elevation Gate & Masonry Detail',
      category: 'Construction',
      image: '/walkthrough-poster.jpg',
      caption: 'Precision boundary wall construction with integrated security lighting and automated gate framework.',
    },
    {
      id: 'g7',
      title: 'Burewala Residential Plot Development',
      category: 'Property',
      image: '/src/assets/images/hero_modern_elevation_1790949541521.jpg',
      caption: 'Conceptual site layout highlighting optimized solar orientation and street-level access.',
    },
    {
      id: 'g8',
      title: 'Contemporary Luxury Villa Concept',
      category: 'Modern Houses',
      image: '/src/assets/images/walkthrough_living_lounge_1790949577373.jpg',
      caption: 'Comprehensive 3D design study developed for prospective residential clients in Punjab.',
    },
  ];

  const filteredItems =
    activeTab === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex(
        (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
      );
    }
  };

  return (
    <section id="gallery" className="py-28 bg-[#0b0e14] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono-numbers uppercase tracking-widest text-[#ea580c] font-bold mb-3">
              <span>VISUAL ARCHIVE</span>
              <span className="text-white/30">/</span>
              <span>ARCHITECTURAL GALLERY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight leading-tight">
              SPATIAL EXPLORATION.
            </h2>
          </div>
          <p className="text-stone-400 text-xs sm:text-sm max-w-sm leading-relaxed">
            Click any frame to inspect in high-resolution architectural presentation mode.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 select-none no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#ea580c] text-white shadow-md'
                  : 'bg-white/5 text-stone-300 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-xl overflow-hidden bg-[#121620] border border-white/10 hover:border-[#ea580c]/60 cursor-pointer transition-all duration-300 shadow-md hover:-translate-y-1"
            >
              <div className="aspect-4/3 overflow-hidden bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                <div className="self-end p-2 rounded-full bg-black/60 text-white backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5 text-[#ea580c]" />
                </div>
                <div>
                  <span className="text-[10px] font-mono-numbers uppercase tracking-wider text-[#ea580c] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-xs font-bold text-white leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 sm:p-8">
          {/* Top Bar Controls */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10">
            <div className="text-xs font-mono-numbers text-stone-300">
              <span className="text-[#ea580c] font-bold">
                {lightboxIndex + 1}
              </span>{' '}
              / {filteredItems.length} · {filteredItems[lightboxIndex].category}
            </div>
            <button
              onClick={closeLightbox}
              className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevImage}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#ea580c] text-white border border-white/20 transition-all cursor-pointer z-10"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#ea580c] text-white border border-white/20 transition-all cursor-pointer z-10"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Active Image and Caption */}
          <div className="max-w-5xl max-h-[80vh] flex flex-col items-center justify-center">
            <img
              src={filteredItems[lightboxIndex].image}
              alt={filteredItems[lightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center max-w-2xl">
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                {filteredItems[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 mt-1">
                {filteredItems[lightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
