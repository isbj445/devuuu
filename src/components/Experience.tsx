import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, MapPin, Calendar, ClipboardList, ShieldAlert, CheckCircle, Search, FileText } from "lucide-react";
import { EXPERIENCE_DATA } from "../data";

interface ExperienceProps {
  isDark: boolean;
}

export default function Experience({ isDark }: ExperienceProps) {
  const [selectedCaseId, setSelectedCaseId] = useState<string>("CASE-2024-KL-115");

  const agencyData = EXPERIENCE_DATA[0]; // Kollam City Police Office static index
  const activeCase = agencyData.caseLog.find((log) => log.id === selectedCaseId);

  return (
    <section
      id="experience"
      className={`py-20 sm:py-28 relative transition-colors duration-300 overflow-hidden ${
        isDark ? "bg-[#091122]" : "bg-slate-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            04 / APPLIED PRACTICAL TRAINING
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Law Enforcement Internship
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Primary Row: Kollam Police HQ Card & Case dossier panels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
          
          {/* Left Column: Core Agency Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className={`p-6 sm:p-8 rounded-2xl border flex-1 flex flex-col justify-between relative overflow-hidden ${
              isDark ? "bg-[#0C172C] border-[#1C2E49] shadow-xl" : "bg-white border-slate-200 shadow-md"
            }`}>
              
              <div>
                {/* Agency Title Headers */}
                <div className="flex items-start justify-between mb-6 flex-wrap gap-2">
                  <div className="flex items-center space-x-3.5">
                    <div className="p-3 bg-cyan-55/10 rounded-xl border border-cyan-400/20 text-cyan-400">
                      <Building2 size={24} className="animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
                        Official Police Placement
                      </span>
                      <h4 className={`text-lg sm:text-xl font-sans font-extrabold leading-tight mt-0.5 ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                        {agencyData.organization}
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Sub Metadata pins */}
                <div className="grid grid-cols-2 gap-4 pb-6 mb-6 border-b border-slate-700/20 text-xs">
                  <div className="flex items-center space-x-1.5 text-slate-400">
                    <MapPin size={14} className="text-cyan-500 shrink-0" />
                    <span>{agencyData.location}</span>
                  </div>
                  <div className="flex items-center space-x-1.5 text-slate-400">
                    <Calendar size={14} className="text-blue-500 shrink-0" />
                    <span>{agencyData.duration}</span>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-slate-200" : "text-slate-700 font-medium"}`}>
                  {agencyData.summary}
                </p>

                {/* Bullets lists */}
                <div className="space-y-3">
                  <h5 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    Operational Directives Completed:
                  </h5>
                  <div className="space-y-2.5">
                    {agencyData.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start space-x-2.5 text-xs leading-relaxed">
                        <span className="p-0.5 bg-cyan-500 rounded-full mt-1.5 shrink-0" />
                        <span className={isDark ? "text-slate-300" : "text-slate-700"}>{task}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified seal marker */}
              <div className="mt-8 pt-5 border-t border-slate-700/20 flex items-center justify-between text-[10px] font-mono">
                <span className="text-cyan-400 flex items-center space-x-1">
                  <CheckCircle size={12} />
                  <span>SUPERVISED INTERNSHIP SEAL</span>
                </span>
                <span className="text-slate-400">CREDENTIAL_ID: KCP-2024</span>
              </div>

            </div>
          </div>

          {/* Right Column: Interactive Incident Case File Dossier */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className={`p-6 sm:p-8 rounded-2xl border h-full flex flex-col justify-between relative ${
              isDark ? "bg-[#0E1A33] border-[#1E3050]" : "bg-white border-slate-250 shadow-md"
            }`}>
              
              <div>
                {/* Dossier Headers */}
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-dashed border-slate-700/20">
                  <div className="flex items-center space-x-2">
                    <ClipboardList size={18} className="text-cyan-400" />
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400">
                      Investigative Incident Folder
                    </span>
                  </div>
                  <span className="text-[9px] font-mono text-cyan-400 px-2 py-0.5 rounded border border-cyan-400/30">
                    DECRYPTED
                  </span>
                </div>

                {/* Case File Selector Tabs */}
                <div className="grid grid-cols-3 gap-2 mb-6">
                  {agencyData.caseLog.map((log) => {
                    const isCaseActive = log.id === selectedCaseId;

                    return (
                      <button
                        key={log.id}
                        onClick={() => setSelectedCaseId(log.id)}
                        className={`py-2 px-1 text-center rounded-lg border text-[10px] font-mono font-bold transition-all duration-200 select-none ${
                          isCaseActive
                            ? "bg-cyan-500 border-transparent text-white shadow-sm"
                            : isDark
                              ? "bg-[#0B1428] border-[#1C2C47] text-slate-400 hover:border-cyan-500/20 hover:text-cyan-300"
                              : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
                        }`}
                      >
                        {log.id}
                      </button>
                    );
                  })}
                </div>

                {/* Dossier Detailed Body */}
                <AnimatePresence mode="wait">
                  {activeCase && (
                    <motion.div
                      key={activeCase.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      className={`p-5 rounded-xl border font-mono text-xs leading-relaxed space-y-4 relative ${
                        isDark ? "bg-[#08101E] border-[#1B2D49]/40" : "bg-cyan-50/20 border-cyan-100"
                      }`}
                    >
                      {/* Blueprint grid coordinates absolute watermark */}
                      <div className="absolute right-4 top-4 opacity-5 pointer-events-none select-none text-[30px] font-bold">
                        CSI
                      </div>

                      <div className="space-y-1">
                        <div className="text-cyan-400 uppercase font-bold text-[9px] tracking-wider">
                          INCIDENT RECORD CODE:
                        </div>
                        <div className={`text-sm font-bold ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                          {activeCase.id}
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="text-cyan-400 uppercase font-bold text-[9px] tracking-wider">
                          ASSIGNMENT TASK CATEGORY:
                        </div>
                        <div className={isDark ? "text-slate-300" : "text-slate-700 font-semibold"}>
                          {activeCase.type}
                        </div>
                      </div>

                      <div className="space-y-1 pt-2 border-t border-slate-700/20">
                        <div className="text-cyan-400 uppercase font-bold text-[9px] tracking-wider mb-1">
                          OPERATIONAL SUMMARY PROTOCOL:
                        </div>
                        <p className={isDark ? "text-slate-400" : "text-slate-600"}>
                          {activeCase.summary}
                        </p>
                      </div>

                      {/* Chemical / Fingerprint specific realistic mock analytical stats to look authentic */}
                      <div className={`grid grid-cols-2 gap-2 p-2.5 rounded-lg text-[9px] ${isDark ? "bg-[#0E1A33]/50" : "bg-cyan-100/30"}`}>
                        <div>
                          <span className="text-slate-400 block font-bold">ANALYSIS INSTRUMENT:</span>
                          <span className="text-slate-200 font-bold block">COMPARISON STEREOMICROSCOPY</span>
                        </div>
                        <div>
                          <span className="text-slate-400 block font-bold">EVIDENCE ENVELOPE SEAL:</span>
                          <span className="text-emerald-400 block font-bold">SECURED / TAMPER_FREE</span>
                        </div>
                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Dossier action print sign-offs */}
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
                <div className="text-slate-400 flex items-center gap-1.5 shrink-0">
                  <ShieldAlert size={14} className="text-cyan-500 animate-pulse" />
                  <span>CLASSIFICATION: EVIDENCE AUDIT COMPLETE</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
