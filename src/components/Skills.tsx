import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Microscope, ShieldCheck, Database, Award, CheckCircle2 } from "lucide-react";
import { TECHNICAL_SKILLS } from "../data";
import { Skill } from "../types";

interface SkillsProps {
  isDark: boolean;
}

type SkillCategory = "Biological & Chemical Analysis" | "Field & Evidence Investigation" | "Document & Cyber Forensics";

const CATEGORY_TABS: { label: string; value: SkillCategory; description: string; icon: any }[] = [
  {
    label: "Biological & Chemical",
    value: "Biological & Chemical Analysis",
    description: "Wet chemistry, DNA amplifications, chromatography profiling, and fluid diagnostics.",
    icon: Microscope
  },
  {
    label: "Field & Evidence",
    value: "Field & Evidence Investigation",
    description: "On-site crime scene processing, latent fuming development, and trace casting.",
    icon: ShieldCheck
  },
  {
    label: "Document & Cyber",
    value: "Document & Cyber Forensics",
    description: "Questioned documents strokes, forensic imaging extraction, and network data recoveries.",
    icon: Database
  }
];

export default function Skills({ isDark }: SkillsProps) {
  const [selectedCategory, setSelectedCategory] = useState<SkillCategory>("Biological & Chemical Analysis");

  const filteredSkills = TECHNICAL_SKILLS.filter((skill) => skill.category === selectedCategory);

  // Calculate high spotlight average for selected category
  const averageLevel = Math.round(
    filteredSkills.reduce((acc, curr) => acc + curr.level, 0) / filteredSkills.length
  );

  return (
    <section
      id="skills"
      className={`py-20 sm:py-28 relative transition-colors duration-300 ${
        isDark ? "bg-[#0B1428]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            03 / SPECIALIZED CAPABILITIES
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Technical Skill Laboratories
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-16">
          {CATEGORY_TABS.map((tab) => {
            const TabIcon = tab.icon;
            const isSelected = selectedCategory === tab.value;

            return (
              <button
                key={tab.value}
                onClick={() => setSelectedCategory(tab.value)}
                className={`flex items-center space-x-2.5 px-5 py-3 rounded-xl border text-xs sm:text-sm font-mono uppercase tracking-wider font-bold transition-all duration-200 select-none ${
                  isSelected
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/10"
                    : isDark
                      ? "bg-[#0E1A33] border-[#1C2C47] text-slate-300 hover:border-cyan-500/20"
                      : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                }`}
              >
                <TabIcon size={16} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Category Blueprint Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Spotlight Circle Dashboard Column (Left) */}
          <div className="lg:col-span-4 flex flex-col justify-center items-center">
            <div className={`p-8 rounded-2xl border text-center h-full w-full flex flex-col justify-center items-center relative overflow-hidden ${
              isDark ? "bg-[#0A1326] border-[#182C49]" : "bg-slate-50 border-slate-200 shadow-xs"
            }`}>
              
              {/* Abs grid pattern behind */}
              <div className="absolute inset-0 bg-[#06B6D4]/[0.01] pointer-events-none select-none" />

              <h3 className={`text-xs font-mono font-bold tracking-widest uppercase mb-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                Division Effectiveness Score
              </h3>

              {/* Large Circular gauge */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                <svg className="absolute w-full h-full -rotate-90">
                  <circle
                    cx="88"
                    cy="88"
                    r="72"
                    className={isDark ? "stroke-slate-800" : "stroke-slate-200"}
                    strokeWidth="4"
                    fill="transparent"
                  />
                  <circle
                    cx="88"
                    cy="88"
                    r="72"
                    className={`transition-all duration-700 ease-out ${isDark ? "stroke-cyan-400" : "stroke-cyan-600"}`}
                    strokeWidth="6"
                    fill="transparent"
                    strokeDasharray={452}
                    strokeDashoffset={452 - (452 * averageLevel) / 100}
                    strokeLinecap="round"
                  />
                </svg>
                
                <div className="text-center z-10">
                  <span className={`text-4xl font-mono font-bold tracking-tight block ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    {averageLevel}%
                  </span>
                  <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase">
                    SYS_STD_LOG
                  </span>
                </div>
              </div>

              <div className="mt-8 text-center max-w-xs">
                <h4 className={`text-sm font-sans font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  {selectedCategory}
                </h4>
                <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                  {CATEGORY_TABS.find((tab) => tab.value === selectedCategory)?.description}
                </p>
              </div>

            </div>
          </div>

          {/* Interactive Skill progress bars column (Right) */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full items-stretch">
              
              <AnimatePresence mode="wait">
                {filteredSkills.map((skill, idx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    className={`p-6 rounded-2xl border text-left flex flex-col justify-between relative overflow-hidden transition-all duration-200 ${
                      isDark
                        ? "bg-[#0E1A33] border-[#1F3354] hover:border-cyan-500/20"
                        : "bg-white border-slate-250 hover:shadow-md hover:border-cyan-600/10"
                    }`}
                  >
                    <div>
                      {/* Name and count */}
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-sm font-sans font-extrabold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                          {skill.name}
                        </span>
                        <span className="text-xs font-mono font-bold text-cyan-400 shrink-0 ml-2">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Description */}
                      <p className={`text-xs leading-relaxed mb-4 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                        {skill.description}
                      </p>
                    </div>

                    {/* Progress Slider */}
                    <div className="space-y-1.5">
                      <div className={`h-1.5 w-full rounded-full overflow-hidden ${isDark ? "bg-[#1C2C47]" : "bg-slate-150"}`}>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 0.8, delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                        />
                      </div>

                      <div className="flex items-center justify-between text-[9px] font-mono text-slate-400">
                        <span>MINUTIAE_LIMIT</span>
                        <span>RECON_STABLE</span>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>

            </div>

            {/* Scientific Instrumentation Footer Bar inside skill panels */}
            <div className={`mt-6 p-4 rounded-xl border text-left flex items-start space-x-3 ${
              isDark ? "bg-[#07101E] border-[#1C2D49]/40" : "bg-cyan-50/[0.3] border-cyan-100"
            }`}>
              <span className="relative flex h-2 w-2 mt-1 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <p className="text-[11px] font-mono text-slate-400 leading-relaxed">
                <span className="font-bold text-cyan-400">INSTRUMENT CALIBRATION STATUS:</span> All analyses are validated using standardized lab procedures, conforming strictly with ISO/IEC 17025 accreditation metrics for Forensic Science Testing Laboratories.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
