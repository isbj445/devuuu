import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Calendar, FileText, CheckCircle2, ShieldCheck, X, BadgeCheck } from "lucide-react";
import { WORKSHOPS_SEMINARS } from "../data";
import { Workshop } from "../types";

interface WorkshopsProps {
  isDark: boolean;
}

export default function Workshops({ isDark }: WorkshopsProps) {
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  return (
    <section
      id="certificates"
      className={`py-20 sm:py-28 relative transition-colors duration-300 ${
        isDark ? "bg-[#0B1428]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            05 / CERTIFICATIONS & ACCOMPLISHMENTS
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Workshops & Forensic Badges
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Certificate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WORKSHOPS_SEMINARS.map((ws, index) => (
            <motion.div
              key={ws.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedWorkshop(ws)}
              className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col justify-between group ${
                isDark
                  ? "bg-[#0D1629] border-[#1C2C47] hover:border-cyan-500/20"
                  : "bg-slate-50 border-slate-200 hover:border-cyan-600/15 hover:shadow-lg"
              }`}
            >
              <div>
                
                {/* Certificate Icon & Type Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${
                    isDark ? "bg-[#1C2D49] text-cyan-400" : "bg-cyan-50 text-cyan-600 border border-cyan-100"
                  }`}>
                    <Award size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <span className={`text-[9px] font-mono font-bold uppercase px-2.5 py-1 rounded-full ${
                    ws.type === "Certification"
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : ws.type === "Workshop"
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  }`}>
                    {ws.type}
                  </span>
                </div>

                <h3 className={`text-base font-sans font-bold leading-snug tracking-tight mb-2 ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}>
                  {ws.title}
                </h3>

                <p className={`text-xs inline-flex items-center space-x-1.5 font-mono mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                  <Calendar size={12} className="shrink-0 text-cyan-500" />
                  <span>{ws.date}</span>
                </p>

                <p className={`text-xs leading-relaxed mb-6 line-clamp-2 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                  {ws.description}
                </p>

              </div>

              {/* Action Clicker */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-700/10 mt-auto">
                <span className="text-[10px] font-mono text-slate-400 tracking-wider">
                  NUM: {ws.credentialId}
                </span>
                <span className="text-xs font-mono font-bold text-cyan-400 flex items-center space-x-1 group-hover:underline">
                  <span>Audit Badge</span>
                  <X size={12} className="rotate-45" />
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* High-Fidelity Certification Lightbox Modal */}
        <AnimatePresence>
          {selectedWorkshop && (
            <div className="fixed inset-0 bg-[#020617]/95 z-50 flex items-center justify-center p-4 backdrop-blur-md">
              
              {/* Outer clicking block dismiss */}
              <div className="absolute inset-0 cursor-pointer" onClick={() => setSelectedWorkshop(null)} />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className={`relative w-full max-w-2xl rounded-3xl border p-6 sm:p-10 text-left overflow-hidden z-15 ${
                  isDark
                    ? "bg-[#0A1224] border-cyan-500/20 shadow-[0_0_50px_rgba(6,182,212,0.1)]"
                    : "bg-white border-slate-200 shadow-2xl"
                }`}
              >
                {/* Micro corner braces */}
                <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-cyan-500/50" />
                <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-cyan-500/50" />
                <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-cyan-500/50" />
                <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-cyan-500/50" />

                {/* Close Button */}
                <button
                  onClick={() => setSelectedWorkshop(null)}
                  className={`absolute top-5 right-5 p-2 rounded-lg transition-colors ${
                    isDark ? "bg-[#18263D] text-slate-350 hover:bg-[#20314F]" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <X size={18} />
                </button>

                {/* Certificate layout visual */}
                <div className="text-center font-serif text-slate-400 mb-8 mt-2 space-y-1">
                  <div className="font-mono text-[9px] tracking-widest text-[#22D3EE] uppercase font-bold">
                    OFFICIAL EXAMINATION CREDENTIAL VERIFICATION
                  </div>
                  <h4 className={`text-xl sm:text-2xl font-sans font-extrabold tracking-tight mt-1 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    Certificate of Participation & Skill
                  </h4>
                  <div className="mt-2 h-[1px] w-28 bg-cyan-400/30 mx-auto" />
                </div>

                {/* Certificate Metadata block */}
                <div className="space-y-6">
                  
                  {/* Title of workshop */}
                  <div className="text-center sm:text-left">
                    <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block">
                      Target Course title
                    </span>
                    <h3 className={`text-lg sm:text-xl font-sans font-bold leading-snug mt-1 ${isDark ? "text-white" : "text-slate-800"}`}>
                      {selectedWorkshop.title}
                    </h3>
                  </div>

                  {/* Body elements */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono border-t border-b border-dashed border-slate-700/20 py-5">
                    <div>
                      <span className="text-slate-400 block mb-0.5">ISSUING BODY CERTIFIED:</span>
                      <span className={`font-bold block ${isDark ? "text-slate-100" : "text-slate-800"}`}>{selectedWorkshop.organization}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">CREDENTIAL STATUS INDEX:</span>
                      <span className="text-emerald-400 font-bold block flex items-center space-x-1">
                        <BadgeCheck size={14} />
                        <span>VERIFIED_AND_MATCHED</span>
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">AWARD DATE:</span>
                      <span className={`font-bold block ${isDark ? "text-slate-100" : "text-slate-800"}`}>{selectedWorkshop.date}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block mb-0.5">REGISTRATION CODE HASH:</span>
                      <span className="text-cyan-400 font-bold block">{selectedWorkshop.credentialId}</span>
                    </div>
                  </div>

                  {/* Description long text */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2">
                      Syllabus Details:
                    </span>
                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700"}`}>
                      {selectedWorkshop.description}
                    </p>
                  </div>

                  {/* Skills Acquired pills */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-2.5">
                      Acquired Skills & Standards Registered:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedWorkshop.skillsAcquired.map((skill) => (
                        <span
                          key={skill}
                          className={`text-[10px] font-mono px-2.5 py-1 rounded-md ${
                            isDark ? "bg-[#14223A] text-slate-200 border border-[#20314B]" : "bg-cyan-50 text-cyan-700 border border-cyan-100"
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stamp Graphic Signature column */}
                  <div className="flex items-center justify-between pt-6 border-t border-slate-700/20 text-[9px] font-mono text-slate-400">
                    <div>ACCRA_INDIAN_LABS_2026</div>
                    <div className="text-right">
                      <span className="block italic font-sans font-bold text-slate-300">D. Pillai</span>
                      <span className="block border-t border-slate-700/30 pt-0.5 select-none">HOLDER SIGNATURE</span>
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
