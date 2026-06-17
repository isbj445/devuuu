import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, MapPin, Calendar, Award, ChevronRight, CheckCircle2 } from "lucide-react";
import { EDUCATION_DATA } from "../data";

interface TimelineProps {
  isDark: boolean;
}

export default function Timeline({ isDark }: TimelineProps) {
  const [activeMilestoneId, setActiveMilestoneId] = useState<string>("edu_msc");

  const activeMilestone = EDUCATION_DATA.find((edu) => edu.id === activeMilestoneId);

  return (
    <section
      id="education"
      className={`py-20 sm:py-28 relative transition-colors duration-300 ${
        isDark ? "bg-[#091122]" : "bg-slate-50"
      }`}
    >
      {/* Decorative Science Blueprint grid markings */}
      <div className="absolute top-10 left-10 text-[9px] font-mono tracking-widest text-[#1E3050] uppercase pointer-events-none select-none select-none">
        MAPPED_ACADEMIC_RECORD_04
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            02 / Education Milestones
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Scholastic Science Sequence
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Dynamic Dual-Column Timeline Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Interactive Vertical Timeline */}
          <div className="lg:col-span-5 relative">
            
            {/* The vertical timeline central line */}
            <div className={`absolute top-4 bottom-4 left-6 sm:left-8 w-0.5 pointer-events-none ${
              isDark ? "bg-[#1E304C]" : "bg-slate-200"
            }`} />

            {/* Milepost Nodes */}
            <div className="space-y-8 relative">
              {EDUCATION_DATA.map((edu, idx) => {
                const isActive = edu.id === activeMilestoneId;

                return (
                  <div
                    key={edu.id}
                    onClick={() => setActiveMilestoneId(edu.id)}
                    className="flex items-start cursor-pointer group select-none relative"
                  >
                    {/* Pulsing state marker node */}
                    <div className="relative mt-1 z-10 flex items-center justify-center">
                      {isActive ? (
                        <>
                          <span className="animate-ping absolute inline-flex h-9 w-9 rounded-full bg-cyan-400 opacity-20"></span>
                          <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md">
                            <GraduationCap size={18} />
                          </div>
                        </>
                      ) : (
                        <div className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center transition-all duration-200 border ${
                          isDark
                            ? "bg-[#0E1729] border-[#1C2D49] text-slate-400 group-hover:border-cyan-500/40 group-hover:text-cyan-400"
                            : "bg-white border-slate-300 text-slate-500 group-hover:border-cyan-600/30 group-hover:text-cyan-700"
                        }`}>
                          <GraduationCap size={16} />
                        </div>
                      )}
                    </div>

                    {/* Timeline Milestone Station Overview Card */}
                    <div className="ml-5 sm:ml-7 flex-1">
                      <div className={`p-4 rounded-xl border transition-all duration-250 ${
                        isActive
                          ? isDark
                            ? "bg-[#11213D] border-cyan-400/50"
                            : "bg-cyan-50 border-cyan-300"
                          : isDark
                            ? "bg-[#0A1326] border-[#162744] hover:bg-[#101E35]"
                            : "bg-white border-slate-250 hover:bg-slate-100/50"
                      }`}>
                        <div className="flex items-center justify-between gap-1 flex-wrap">
                          <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                            isActive
                              ? "bg-cyan-500 text-white"
                              : isDark
                                ? "bg-[#1E304C] text-slate-300"
                                : "bg-slate-100 text-slate-700"
                          }`}>
                            {edu.duration}
                          </span>
                          <span className={`text-xs font-mono font-medium ${isActive ? (isDark ? "text-cyan-300" : "text-cyan-800") : "text-slate-400"}`}>
                            {edu.grade}
                          </span>
                        </div>

                        <h3 className={`mt-2 text-sm sm:text-base font-sans font-bold leading-tight ${
                          isActive ? (isDark ? "text-white" : "text-cyan-900") : (isDark ? "text-slate-200" : "text-slate-800")
                        }`}>
                          {edu.degree}
                        </h3>

                        <p className={`text-xs font-mono mt-1 ${isActive ? "text-cyan-400/80" : "text-slate-400"}`}>
                          {edu.stream}
                        </p>

                        <div className="flex items-center space-x-1 text-[10px] mt-2 font-mono text-cyan-400 font-bold group-hover:translate-x-1 transition-transform duration-200">
                          <span>Evaluate syllabus details</span>
                          <ChevronRight size={12} />
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: High-Detail Academic Syllabus Ledger */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeMilestone && (
                <motion.div
                  key={activeMilestone.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25 }}
                  className={`p-6 sm:p-8 rounded-2xl border ${
                    isDark
                      ? "bg-[#0C172C] border-[#1C2E49] shadow-inner-dark"
                      : "bg-white border-slate-200 shadow-md"
                  }`}
                >
                  {/* Decorative badge header */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-dashed border-slate-700/20">
                    <div>
                      <div className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase font-bold">
                        Academic Certificate Profile
                      </div>
                      <h4 className={`text-lg sm:text-xl font-sans font-bold leading-tight mt-1 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                        {activeMilestone.degree}
                      </h4>
                    </div>
                    {/* Standard Grade Certificate box */}
                    <div className={`px-4 py-2 rounded-lg border text-center ${
                      isDark ? "bg-[#13233E] border-[#1F3354]" : "bg-cyan-50/50 border-cyan-100"
                    }`}>
                      <div className="text-[9px] font-mono uppercase text-slate-400 tracking-wider">Overall Record</div>
                      <div className="text-sm font-mono font-bold text-cyan-400">{activeMilestone.grade}</div>
                    </div>
                  </div>

                  {/* Metadata coordinates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-xs">
                      <MapPin size={16} className="text-cyan-500 shrink-0" />
                      <span className={isDark ? "text-slate-300" : "text-slate-600"}>
                        {activeMilestone.location}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs">
                      <Calendar size={16} className="text-blue-500 shrink-0" />
                      <span className={isDark ? "text-slate-300" : "text-slate-600"}>
                        Session Period: {activeMilestone.duration}
                      </span>
                    </div>
                  </div>

                  {/* Description Box */}
                  <div className="space-y-4">
                    <div>
                      <h5 className={`text-xs font-mono font-bold uppercase tracking-wider mb-2 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Institutional Body
                      </h5>
                      <p className={`text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-700 font-semibold"}`}>
                        {activeMilestone.institution}
                      </p>
                      <p className={`text-xs sm:text-sm leading-relaxed mt-1.5 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                        {activeMilestone.description}
                      </p>
                    </div>

                    {/* Highlights Bullet-List */}
                    <div>
                      <h5 className={`text-xs font-mono font-bold uppercase tracking-wider mb-3 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        Acquired Competencies & Highlights
                      </h5>
                      <div className="space-y-2.5">
                        {activeMilestone.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-start space-x-3 text-xs leading-relaxed">
                            <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                            <span className={isDark ? "text-slate-300" : "text-slate-700"}>
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Operational sign-off bottom graphic */}
                  <div className="mt-8 pt-5 border-t border-dashed border-slate-700/20 flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <div>REGISTRATION_STATE_CODE_KL</div>
                    <div>SECURITY VERIFICATION: SIGNED</div>
                  </div>

                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
