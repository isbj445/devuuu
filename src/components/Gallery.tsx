import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Camera, Eye, X, Calendar, Info, Search } from "lucide-react";
import { GALLERY_DATA } from "../data";
import { GalleryItem } from "../types";

interface GalleryProps {
  isDark: boolean;
}

const CATEGORIES: ("All" | "Internship" | "Research" | "Academic" | "Ceremony")[] = [
  "All",
  "Internship",
  "Research",
  "Academic",
  "Ceremony"
];

export default function Gallery({ isDark }: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const filteredItems = GALLERY_DATA.filter((item) => {
    if (activeCategory === "All") return true;
    return item.category === activeCategory;
  });

  return (
    <section
      id="gallery"
      className={`py-20 sm:py-28 relative transition-colors duration-300 ${
        isDark ? "bg-[#0B1428]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            07 / EVIDENCE CATALOGUE & EVENTS
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Professional Gallery
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Category Filters row */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-all duration-200 select-none ${
                activeCategory === cat
                  ? "bg-cyan-500 text-white shadow-sm"
                  : isDark
                    ? "bg-[#0E1A33] border border-[#1C2C47] text-slate-300 hover:border-cyan-500/20"
                    : "bg-slate-50 border border-slate-200 text-slate-650 hover:bg-slate-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(item)}
                className={`group rounded-2xl overflow-hidden border cursor-pointer relative shadow-xs transition-all duration-300 ${
                  isDark ? "bg-[#0E1A33] border-[#1C2E49]" : "bg-slate-50 border-slate-200 hover:shadow-lg"
                }`}
              >
                
                {/* Image Wrap */}
                <div className="relative aspect-square overflow-hidden bg-slate-900">
                  
                  {/* Category Pill Tag overlaid */}
                  <span className="absolute top-3 left-3 z-20 text-[9px] font-mono font-bold uppercase bg-cyan-500 text-white px-2.5 py-0.5 rounded-full select-none shadow">
                    {item.category}
                  </span>

                  {/* Glass Hover Scanner Overlay */}
                  <div className="absolute inset-0 bg-cyan-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-350 z-10 flex flex-col justify-center items-center backdrop-blur-xs">
                    <div className="p-3 bg-white/10 rounded-full border border-white/20 text-white scale-75 group-hover:scale-100 transition-transform duration-350 shadow-md">
                      <Search size={18} />
                    </div>
                    <span className="mt-2.5 text-[10px] font-mono font-bold tracking-widest text-[#22D3EE] uppercase">
                      Inspect Trace Block
                    </span>
                  </div>

                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info Box below */}
                <div className="p-5 text-left space-y-1.5 relative">
                  <span className="text-[9px] font-mono font-bold text-cyan-400 block uppercase tracking-wide">
                    {item.date}
                  </span>
                  <h4 className={`text-sm font-sans font-bold leading-tight line-clamp-1 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-400 font-mono tracking-normal line-clamp-2">
                    {item.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Lightbox Modal */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 bg-[#020617]/95 z-50 flex items-center justify-center p-4 backdrop-blur-md">
              
              {/* Outer dismissal overlay */}
              <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedItem(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`relative w-full max-w-3xl rounded-3xl overflow-hidden border z-15 ${
                  isDark ? "bg-[#0A1224] border-cyan-500/20" : "bg-white border-slate-200 shadow-2xl"
                }`}
              >
                
                {/* Close button */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 bg-[#020617]/80 hover:bg-[#020617] text-white rounded-lg z-30 shadow transition-all duration-200"
                >
                  <X size={18} />
                </button>

                {/* Responsive Dual Column */}
                <div className="grid grid-cols-1 md:grid-cols-12">
                  
                  {/* Left Column: Image wrapper */}
                  <div className="md:col-span-7 relative aspect-video md:aspect-[4/5] bg-slate-950">
                    <img
                      src={selectedItem.imageUrl}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover relative z-10"
                      referrerPolicy="no-referrer"
                    />
                    {/* Abstract trace grid overlay */}
                    <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-20" />
                  </div>

                  {/* Right Column: Detailed parameters description */}
                  <div className="md:col-span-5 p-6 sm:p-8 text-left flex flex-col justify-between h-full">
                    
                    <div className="space-y-4">
                      
                      {/* Meta badge */}
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono font-bold bg-cyan-500 text-white px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                          {selectedItem.category}
                        </span>
                        <div className="flex items-center space-x-1 text-[11px] font-mono text-slate-400">
                          <Calendar size={12} className="text-cyan-500" />
                          <span>{selectedItem.date}</span>
                        </div>
                      </div>

                      <h3 className={`text-base sm:text-lg font-sans font-extrabold leading-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                        {selectedItem.title}
                      </h3>

                      <div className={`text-xs leading-relaxed space-y-2.5 ${isDark ? "text-slate-350" : "text-slate-700"}`}>
                        <p>{selectedItem.description}</p>
                        <p className="font-mono text-[10px] text-slate-400 border-l-2 border-cyan-500 pl-2.5 py-1">
                          "This activity catalogs standard laboratory practice, ensuring student-to-field readiness constraints are documented in compliance with regional research and police standards."
                        </p>
                      </div>

                    </div>

                    {/* Scientific coordinates metrics */}
                    <div className="pt-6 mt-6 border-t border-dashed border-slate-700/20 text-[9px] font-mono text-slate-400 space-y-1">
                      <div>CATALOG_RECORD_ID: {selectedItem.id.toUpperCase()}</div>
                      <div>SPECIMEN CALIBRATION: ACTIVE_PASS</div>
                    </div>

                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
