import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, HelpCircle, Star, ChevronsRight, GitBranch, Cpu, BrainCircuit, Activity } from "lucide-react";
import { RESEARCH_STUDIES } from "../data";
import { CaseStudy } from "../types";

interface ResearchProps {
  isDark: boolean;
}

const RESEARCH_INTERESTS = [
  {
    topic: "Next-Gen Sequencing (NGS) STR Mapping",
    focus: "Phasing complex short tandem repeats and single nucleotide polymorphisms (SNPs) under heavily degraded tropical bone structures.",
    icon: GitBranch
  },
  {
    topic: "AI-Aided Autopsy & Pattern Classification",
    focus: "Applying advanced deep learning models to predict blood spatter impact vectors and speed up latent fingerprint ridge grouping.",
    icon: BrainCircuit
  },
  {
    topic: "Forensic Toxicology in Coastal Ecosystems",
    focus: "Investigating localized marine decay variables affecting narcotic residue persistence rates on coastal wet substrates in Kollam.",
    icon: Activity
  },
  {
    topic: "Automated Document Stroke Physics",
    focus: "Quantitative spatial measurement of ink penetration and depth dynamics across diverse paper fibers of suspicious contracts.",
    icon: Cpu
  }
];

export default function Research({ isDark }: ResearchProps) {
  const [selectedStudyId, setSelectedStudyId] = useState<string>("res_dna_str");

  const activeStudy = RESEARCH_STUDIES.find((res) => res.id === selectedStudyId);

  return (
    <section
      id="research"
      className={`py-20 sm:py-28 relative transition-colors duration-300 ${
        isDark ? "bg-[#091122]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            06 / SCIENTIFIC PUBLICATIONS & INITIATIVES
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Research & Case Studies
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Part 1: Interactive Core Research Areas */}
        <div className="mb-20">
          <div className="text-center sm:text-left mb-10">
            <h3 className={`text-xl sm:text-2xl font-sans font-bold tracking-tight ${isDark ? "text-slate-200" : "text-slate-800"}`}>
              Active Forensic Interest Areas
            </h3>
            <p className="mt-1 text-xs font-mono text-slate-400">
              Ongoing inquiries aligning biochemistry standards with computational physics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {RESEARCH_INTERESTS.map((interest, idx) => {
              const InterestIcon = interest.icon;

              return (
                <motion.div
                  key={interest.topic}
                  whileHover={{ y: -4 }}
                  className={`p-6 rounded-2xl border text-left flex flex-col justify-between transition-all duration-300 ${
                    isDark
                      ? "bg-[#0B1428] border-[#1C2C47] hover:border-cyan-500/25"
                      : "bg-white border-slate-200 hover:shadow-md hover:border-cyan-600/15"
                  }`}
                >
                  <div>
                    <div className={`p-2.5 rounded-lg w-fit mb-5 ${
                      isDark ? "bg-[#18263D] text-cyan-400" : "bg-cyan-50 text-cyan-600 border border-cyan-100"
                    }`}>
                      <InterestIcon size={18} />
                    </div>

                    <h4 className={`text-sm sm:text-base font-sans font-extrabold tracking-tight mb-2.5 ${
                      isDark ? "text-slate-100" : "text-slate-900"
                    }`}>
                      {interest.topic}
                    </h4>

                    <p className={`text-xs leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                      {interest.focus}
                    </p>
                  </div>

                  <div className="flex items-center space-x-1.5 text-[9px] font-mono text-cyan-400/80 uppercase tracking-wider mt-5">
                    <ChevronsRight size={12} />
                    <span>Active Investigation</span>
                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Part 2: Interactive In-Depth Case Study Files */}
        <div className="mt-16">
          <div className="text-center sm:text-left mb-10">
            <h3 className={`text-xl sm:text-2xl font-sans font-bold tracking-tight ${isDark ? "text-slate-200" : "text-slate-800"}`}>
              Detailed Experimental Investigations
            </h3>
            <p className="mt-1 text-xs font-mono text-slate-400">
              Select an ongoing thesis file below to read chromatography parameters and results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Case file selection selector (Left column) */}
            <div className="lg:col-span-4 flex flex-col space-y-3">
              {RESEARCH_STUDIES.map((study) => {
                const isActive = study.id === selectedStudyId;

                return (
                  <button
                    key={study.id}
                    onClick={() => setSelectedStudyId(study.id)}
                    className={`p-5 rounded-2xl border text-left transition-all duration-250 select-none relative overflow-hidden group ${
                      isActive
                        ? isDark
                          ? "bg-[#11213D] border-cyan-400/50"
                          : "bg-cyan-50 border-cyan-300 shadow-xs"
                        : isDark
                          ? "bg-[#0C1527] border-[#182842] hover:bg-[#101E35]"
                          : "bg-white border-slate-200 hover:bg-slate-100/50"
                    }`}
                  >
                    <span className="text-[9px] font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1.5">
                      {study.category}
                    </span>
                    <h4 className={`text-sm font-sans font-bold leading-tight ${
                      isActive ? (isDark ? "text-white" : "text-cyan-900") : (isDark ? "text-slate-200" : "text-slate-800")
                    }`}>
                      {study.title}
                    </h4>
                  </button>
                );
              })}
            </div>

            {/* In-depth content display board (Right column) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                {activeStudy && (
                  <motion.div
                    key={activeStudy.id}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className={`p-6 sm:p-8 rounded-3xl border text-left relative ${
                      isDark ? "bg-[#0B1326] border-[#182A45] shadow-inner-dark" : "bg-white border-slate-200 shadow-lg"
                    }`}
                  >
                    {/* Header info */}
                    <div className="pb-5 mb-5 border-b border-slate-700/10 flex items-center justify-between flex-wrap gap-2">
                      <div>
                        <span className="text-[9px] font-mono text-cyan-400 uppercase font-bold tracking-widest block">
                          CASE REPORT INDEX: {activeStudy.id}
                        </span>
                        <h3 className={`text-base sm:text-lg font-sans font-extrabold tracking-tight mt-0.5 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                          {activeStudy.title}
                        </h3>
                      </div>
                    </div>

                    {/* Methodology, Impact, Stack */}
                    <div className="space-y-6 text-xs sm:text-sm leading-relaxed">
                      
                      <div className="space-y-1.5">
                        <h5 className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-widest">
                          EXPERIMENTAL CONFIGURATION & METHODOLOGY:
                        </h5>
                        <p className={isDark ? "text-slate-350" : "text-slate-600"}>
                          {activeStudy.methodology}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <h5 className="text-[10px] font-mono text-cyan-400 uppercase font-bold tracking-widest">
                          INVESTIGATIVE FINDINGS & IMPACT LEVEL:
                        </h5>
                        <p className={isDark ? "text-slate-350" : "text-slate-600"}>
                          {activeStudy.impact}
                        </p>
                      </div>

                      {/* Applied Devices list */}
                      <div className="pt-4 border-t border-slate-750/30">
                        <h5 className="text-[10px] font-mono text-slate-400 uppercase font-bold tracking-widest mb-2.5">
                          APPLIED EQUIPMENT & TECH-STACK:
                        </h5>
                        
                        <div className="flex flex-wrap gap-2">
                          {activeStudy.technologies.map((tech) => (
                            <span
                              key={tech}
                              className={`text-[10px] font-mono px-3 py-1 rounded-lg border ${
                                isDark ? "bg-[#14233F] border-[#1F3354] text-slate-200" : "bg-cyan-50 border-cyan-100 text-cyan-700"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Scientific sign-off ledger bar */}
                    <div className="mt-8 pt-4 border-t border-dashed border-slate-700/10 flex items-center justify-between text-[9px] font-mono text-slate-400">
                      <div>EVALUATION_HASH_PROT_90</div>
                      <div>AUTHOR: DEVU PILLAI, M.Sc.</div>
                    </div>

                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
