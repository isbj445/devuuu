import heroImage from "../assets/images/forensic_hero_1781676218522.jpeg";
import bannerImage from "../assets/images/forensic_banner_1781676235238.jpg";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { FileText, ArrowRight, ShieldCheck, Microscope, Database, Sparkles } from "lucide-react";
import { PORTFOLIO_OWNER, CORE_STATS } from "../data";

interface HeroProps {
  isDark: boolean;
  onOpenResume: () => void;
}

const TYPING_SPECIALTIES = [
  "M.Sc. Forensic Science Specialist",
  "Crime Scene Analyst & Investigator",
  "DNA Profiling & Molecular Expert",
  "Questioned Document Examiner",
  "Narcotic Assay Field Analyst"
];

export default function Hero({ isDark, onOpenResume }: HeroProps) {
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentText = TYPING_SPECIALTIES[currentSpecialtyIndex];
    const speed = isDeleting ? 40 : 100;

    if (!isDeleting && typedText === currentText) {
      // Pause at full word
      timer = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setCurrentSpecialtyIndex((prev) => (prev + 1) % TYPING_SPECIALTIES.length);
    } else {
      timer = setTimeout(() => {
        setTypedText(
          isDeleting
            ? currentText.substring(0, typedText.length - 1)
            : currentText.substring(0, typedText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentSpecialtyIndex]);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen pt-28 pb-16 flex flex-col justify-center overflow-hidden transition-colors duration-300 ${
        isDark
          ? "bg-[#091122] bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.1),transparent_45%)]"
          : "bg-slate-50 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.06),transparent_45%)]"
      }`}
    >
      {/* Decorative Blueprint Grid Overlay */}
      <div 
        className={`absolute inset-0 pointer-events-none opacity-[0.03] transition-all duration-300 ${
          isDark ? "bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]" : "bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)]"
        } bg-[size:30px_30px]`}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Text */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Status Indicator */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex"
            >
              <div className={`flex items-center space-x-2 px-3 py-1.5 rounded-full border text-xs font-mono font-medium tracking-wider uppercase ${
                isDark 
                  ? "bg-[#10223D] border-cyan-500/20 text-cyan-400" 
                  : "bg-cyan-50 border-cyan-100 text-cyan-700"
              }`}>
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Active Forensic Investigator</span>
              </div>
            </motion.div>

            {/* Owner Name */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className={`text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight ${
                  isDark ? "text-slate-100" : "text-slate-900"
                }`}
              >
                {PORTFOLIO_OWNER.name}
              </motion.h1>

              {/* Typed Specialty */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-8 md:h-10 flex items-center"
              >
                <p className={`text-lg sm:text-xl md:text-2xl font-mono font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r ${
                  isDark ? "from-cyan-400 to-blue-400" : "from-cyan-600 to-blue-700"
                }`}>
                  {typedText}
                  <span className={`inline-block w-1.5 h-6 ml-1 animate-pulse ${isDark ? "bg-cyan-400" : "bg-cyan-600"}`} />
                </p>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-sm sm:text-base leading-relaxed max-w-xl ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              {PORTFOLIO_OWNER.aboutSummary}
            </motion.p>

            {/* Verification highlights badge row */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 gap-4 pb-2"
            >
              <div className="flex items-start space-x-2">
                <ShieldCheck size={18} className="text-cyan-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-200" : "text-slate-800"}`}>Police Interned</h4>
                  <p className="text-[11px] text-slate-400">Kollam City Police Office validation</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Microscope size={18} className="text-blue-500 mt-0.5 shrink-0" />
                <div>
                  <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-200" : "text-slate-800"}`}>M.Sc. Specialized</h4>
                  <p className="text-[11px] text-slate-400">Biological DNA & Cyber emphasis</p>
                </div>
              </div>
            </motion.div>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={onOpenResume}
                className="flex items-center space-x-2.5 px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-sm font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 active:scale-95 transition-all duration-150"
              >
                <FileText size={16} />
                <span>Interactive Resume</span>
              </button>

              <button
                onClick={scrollToContact}
                className={`flex items-center space-x-2 px-6 py-3.5 border font-mono text-sm font-bold uppercase tracking-widest rounded-xl group transition-all duration-250 ${
                  isDark
                    ? "border-[#1E304C] text-slate-200 bg-[#0C172B] hover:border-cyan-500/30 hover:bg-[#11213D]"
                    : "border-slate-300 text-slate-700 bg-white hover:border-cyan-600/30 hover:bg-slate-50"
                }`}
              >
                <span>Call Inspector Link</span>
                <ArrowRight size={15} className="group-hover:translate-x-1.5 transition-transform duration-200" />
              </button>
            </motion.div>

          </div>

          {/* Right Column: Holographic Scanner Portrait + Home Photos */}
          <div className="lg:col-span-5 flex flex-col items-center relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-72 sm:w-80 md:w-85 aspect-[3/4] h-auto rounded-2xl overflow-hidden group shadow-2xl"
            >
              {/* Outer Cyan border glowing wrap */}
              <div className="absolute inset-0 border-2 border-cyan-500/40 rounded-2xl z-30 pointer-events-none group-hover:border-cyan-400 transition-colors" />

              {/* Absolute Corner Blueprint brackets */}
              <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-cyan-400 z-30 pointer-events-none" />
              <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-cyan-400 z-30 pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-cyan-400 z-30 pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-cyan-400 z-30 pointer-events-none" />

              {/* Interactive Scientific HUD Overlay */}
              <div className="absolute top-4 left-4 z-20 font-mono text-[9px] tracking-widest text-cyan-400 uppercase bg-[#020617]/70 px-2 py-0.5 rounded backdrop-blur-xs select-none">
                SYS_SCAN: 8.893° N / 76.614° E
              </div>
              <div className="absolute bottom-4 right-4 z-20 font-mono text-[9px] tracking-widest text-cyan-400 uppercase bg-[#020617]/70 px-2 py-0.5 rounded backdrop-blur-xs select-none">
                VERIFIED_DNA_CE_STR
              </div>

              {/* Scanning Active Laser Line */}
              <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent z-20 shadow-[0_0_12px_rgba(34,211,238,0.8)] animate-[bounce_5s_infinite_linear]" />

              <img
               src={heroImage}
                alt="Devu Pillai - Forensic Scientist"
                className="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Tint overlay */}
              <div className="absolute inset-0 bg-cyan-950/10 z-10 pointer-events-none mix-blend-color-dodge transition-opacity duration-300 group-hover:opacity-10" />
            </motion.div>

            {/* Added Home Photos strip */}
            <div className="w-72 sm:w-80 md:w-85 mt-5 grid grid-cols-2 gap-3">
              <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 shadow-sm group">
                <div className="absolute inset-0 bg-cyan-950/30 opacity-0 group-hover:opacity-10 transition-opacity" />
                <img
                 src={heroImage}
                  alt="Forensic Banner"
                  className="w-full h-28 object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="relative overflow-hidden rounded-xl border border-cyan-500/20 shadow-sm group">
                <div className="absolute inset-0 bg-cyan-950/30 opacity-0 group-hover:opacity-10 transition-opacity" />
                <img
                 src={heroImage}
                  alt="Forensic Portrait"
                  className="w-full h-28 object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Core Statistics Bar */}
        <div id="stats-section" className="mt-16 sm:mt-24">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {CORE_STATS.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`p-6 rounded-2xl border text-center relative overflow-hidden group transition-all duration-300 ${
                  isDark
                    ? "bg-[#0B1428]/80 border-[#1C2C47] hover:border-cyan-500/20"
                    : "bg-white border-slate-200 shadow-xs hover:shadow-md hover:border-cyan-600/15"
                }`}
              >
                {/* Micro Ambient background accent */}
                <div className={`absolute -right-4 -bottom-4 w-16 h-16 rounded-full group-hover:scale-150 transition-transform duration-300 ${
                  isDark ? "bg-cyan-500/5" : "bg-cyan-500/[0.03]"
                }`} />

                <div className={`text-2xl sm:text-3xl font-mono font-bold tracking-tight bg-gradient-to-r ${isDark ? "from-cyan-400 to-blue-400" : "from-cyan-600 to-blue-700"} bg-clip-text text-transparent`}>
                  {stat.count}
                </div>
                <div className={`mt-1.5 text-xs sm:text-sm font-sans font-semibold tracking-wide ${isDark ? "text-slate-100" : "text-slate-800"}`}>
                  {stat.label}
                </div>
                <div className={`text-[10px] font-mono uppercase mt-0.5 tracking-wider ${isDark ? "text-cyan-400/80" : "text-cyan-700"}`}>
                  {stat.subtext}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
