import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Target, Compass, BookOpen, Quote, Shield, Award, ClipboardEdit, Eye } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";

interface AboutProps {
  isDark: boolean;
}

const COMPETENCIES = [
  {
    name: "Evidence Preservation",
    score: 96,
    icon: Shield,
    description: "Flawless physical chain-of-custody containment under ISO standards, ensuring sample purity and judicial readiness.",
    detailLog: "Adhering strictly to state, national and international standards. Hands-on expert in anti-contamination shielding."
  },
  {
    name: "In-Depth Investigation Skills",
    score: 94,
    icon: Target,
    description: "Multidisciplinary crime scene processing spanning primary triage layout, blood velocity profiling, and ballistic trajectory angles.",
    detailLog: "Qualified on active field assignments logging precise scene documentation under police officer supervision."
  },
  {
    name: "Scientific Report Writing",
    score: 92,
    icon: ClipboardEdit,
    description: "Translating sophisticated biochemical chromatography data and STR allele counts into crystal-clear, objective legal briefs.",
    detailLog: "Composed complex peer-reviewed and supervisor-signed laboratory reports matching official state prosecution expectations."
  },
  {
    name: "Critical Analytical Thinking",
    score: 95,
    icon: Compass,
    description: "Unbiased, objective evidence validation filtering out confirmation bias and applying clinical deduction to find hidden crime trails.",
    detailLog: "Expert at resolving conflicting evidence markers and validating inconsistencies under tight prosecution deadlines."
  },
  {
    name: "Legal Compliance & Testimony",
    score: 90,
    icon: BookOpen,
    description: "Deep procedural knowledge of Indian Evidence Act (Sec 45), CrPC scene mandates, and expert witness defense criteria.",
    detailLog: "In-depth understanding of secure storage, structural warrants, and courtroom examination mechanics."
  },
  {
    name: "Communication & Collaboration",
    score: 88,
    icon: Award,
    description: "Seamless team integration among field officers, medical specialists, legal prosecutors, and senior government laboratory directors.",
    detailLog: "Experienced working within the high-pressure environment of the Kollam City Police Headquarters."
  }
];

export default function About({ isDark }: AboutProps) {
  const [activeCompetency, setActiveCompetency] = useState<number | null>(null);

  return (
    <section
      id="about"
      className={`py-20 sm:py-28 relative transition-colors duration-300 overflow-hidden ${
        isDark ? "bg-[#0B1428]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            01 / Professional Credentials
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Investigative Synopsis & Mandates
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* First Row: Summary & Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mb-16 md:mb-24 items-start">
          
          {/* Summary Quote block */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border relative overflow-hidden backdrop-blur-xs ${
              isDark ? "bg-[#0E1A33] border-[#1E3050]" : "bg-slate-50 border-slate-200"
            }`}>
              {/* Abs quotes decorator */}
              <Quote size={50} className={`absolute -right-2 -bottom-2 ${isDark ? "text-[#152744]/40" : "text-slate-200"}`} />
              
              <h3 className={`text-lg font-mono font-bold uppercase tracking-wider mb-4 ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
                Professional Objective & Core Summary
              </h3>
              <p className={`text-sm sm:text-base leading-relaxed relative z-10 ${isDark ? "text-slate-200" : "text-slate-700"}`}>
                {PORTFOLIO_OWNER.objective}
              </p>
            </div>

            {/* In-depth details */}
            <div className="space-y-4">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                The Foundation of Science in Justice
              </h4>
              <p className={`text-sm md:text-base leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                "Science never lies, it does not forget, and it operates under strict thermodynamic laws. My approach is to apply strict mathematical logic and biochemistry frameworks to solve biological riddles on active scenes, safeguarding proof integrity for legal prosecution."
              </p>
            </div>
          </div>

          {/* Mission & Vision Command Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Mission Statement */}
            <motion.div
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border flex items-start space-x-4 transition-all duration-300 ${
                isDark ? "bg-[#0E1A33]/80 border-[#1C2C47] hover:border-cyan-500/25" : "bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-600/15"
              }`}
            >
              <div className={`p-2.5 rounded-lg shrink-0 ${isDark ? "bg-cyan-500/10 text-cyan-400" : "bg-cyan-50 text-cyan-600"}`}>
                <Compass size={20} className="animate-spin-slow" />
              </div>
              <div>
                <h4 className={`text-sm font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  Operational Mission
                </h4>
                <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {PORTFOLIO_OWNER.mission}
                </p>
              </div>
            </motion.div>

            {/* Vision Statement */}
            <motion.div
              whileHover={{ y: -4 }}
              className={`p-6 rounded-2xl border flex items-start space-x-4 transition-all duration-300 ${
                isDark ? "bg-[#0E1A33]/80 border-[#1C2C47] hover:border-cyan-500/25" : "bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-600/15"
              }`}
            >
              <div className={`p-2.5 rounded-lg shrink-0 ${isDark ? "bg-blue-500/10 text-blue-400" : "bg-blue-50 text-blue-600"}`}>
                <Target size={20} />
              </div>
              <div>
                <h4 className={`text-sm font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                  Future Vision
                </h4>
                <p className={`mt-2 text-xs sm:text-sm leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                  {PORTFOLIO_OWNER.vision}
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Second Row: Professional Competencies Section */}
        <div className="mt-16 sm:mt-24">
          <div className="text-center mb-12">
            <h3 className={`text-xl sm:text-2xl font-sans font-bold tracking-tight ${isDark ? "text-slate-100" : "text-slate-900"}`}>
              Professional Competencies Assessment
            </h3>
            <p className="mt-1.5 text-xs font-mono text-cyan-400 uppercase tracking-widest">
              Standard operating metrics / Click to expand system logs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPETENCIES.map((comp, idx) => {
              const CompIcon = comp.icon;
              const isActive = activeCompetency === idx;

              return (
                <motion.div
                  key={comp.name}
                  onClick={() => setActiveCompetency(isActive ? null : idx)}
                  className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-250 relative overflow-hidden group select-none ${
                    isActive
                      ? isDark
                        ? "bg-[#112443] border-cyan-400/50 shadow-cyan-400/5"
                        : "bg-cyan-50 border-cyan-400/50 shadow-cyan-400/5"
                      : isDark
                        ? "bg-[#0D1629] border-[#1C2C47] hover:border-cyan-500/20"
                        : "bg-slate-50 border-slate-200 hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : isDark
                          ? "bg-[#1C2C47] text-cyan-400"
                          : "bg-white text-cyan-600 border border-slate-200"
                    }`}>
                      <CompIcon size={18} />
                    </div>

                    {/* Circular Percentage gauge tracker */}
                    <div className="relative w-10 h-10 flex items-center justify-center font-mono text-xs font-bold shrink-0">
                      <svg className="absolute w-full h-full -rotate-90">
                        <circle
                          cx="20"
                          cy="20"
                          r="16"
                          className={isDark ? "stroke-slate-800" : "stroke-slate-200"}
                          strokeWidth="2"
                          fill="transparent"
                        />
                        <circle
                          cx="20"
                          cy="20"
                          r="16"
                          className={isDark ? "stroke-cyan-400" : "stroke-cyan-500"}
                          strokeWidth="2.5"
                          fill="transparent"
                          strokeDasharray={100}
                          strokeDashoffset={100 - comp.score}
                        />
                      </svg>
                      <span className={isActive ? (isDark ? "text-cyan-300" : "text-cyan-800") : (isDark ? "text-slate-300" : "text-slate-700")}>
                        {comp.score}%
                      </span>
                    </div>
                  </div>

                  <h4 className={`text-base font-sans font-bold tracking-tight mb-2 ${
                    isActive ? "text-cyan-500" : isDark ? "text-slate-100" : "text-slate-900"
                  }`}>
                    {comp.name}
                  </h4>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-3 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    {comp.description}
                  </p>

                  <div className="flex items-center space-x-1 text-[10px] font-mono uppercase tracking-widest text-cyan-400">
                    <Eye size={12} />
                    <span>{isActive ? "Hide internal system log" : "Click to review state credential"}</span>
                  </div>

                  {/* Active detailed panel expansion */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className={`mt-4 pt-3 border-t text-[11px] font-mono leading-relaxed space-y-1 ${
                          isDark ? "border-[#1E3050] text-slate-300" : "border-cyan-100 text-slate-600"
                        }`}
                      >
                        <div className="text-cyan-400 font-bold uppercase">
                          [AUDIT LOG ID: EVAL-2026]
                        </div>
                        <p>{comp.detailLog}</p>
                        <div className="text-emerald-400 flex items-center space-x-1 pt-0.5">
                          <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>CREDENTIAL STATUS: ISO COMPLIANT</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
