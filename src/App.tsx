import React, { useState, useEffect } from "react";
import { ShieldCheck, Mail, Phone, ExternalLink } from "lucide-react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Timeline from "./components/Timeline";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Workshops from "./components/Workshops";
import Research from "./components/Research";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import ResumeViewer from "./components/ResumeViewer";
import { PORTFOLIO_OWNER } from "./data";

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync theme to root class if helpful for tailwind utilities
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div
      className={`min-h-screen relative font-sans transition-colors duration-300 ${
        isDark
          ? "bg-[#091122] text-slate-100 selection:bg-cyan-500 selection:text-[#020617]"
          : "bg-slate-50 text-slate-900 selection:bg-cyan-600 selection:text-white"
      }`}
    >
      {/* Sticky Premium Header navigation */}
      <Header
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main layout contents */}
      <main className="relative">
        
        {/* HERO SECTION */}
        <Hero isDark={isDark} onOpenResume={() => setIsResumeOpen(true)} />

        {/* ABOUT ME & COMPETENCIES */}
        <About isDark={isDark} />

        {/* EDUCATION DETAILS & TIMELINE */}
        <Timeline isDark={isDark} />

        {/* TECHNICAL SKILLS CHARTS */}
        <Skills isDark={isDark} />

        {/* INTERNSHIP PLACEMENTS */}
        <Experience isDark={isDark} />

        {/* WORKSHOPS & CERTIFICATES */}
        <Workshops isDark={isDark} />

        {/* RESEARCH INITIATIVES & CASES */}
        <Research isDark={isDark} />

        {/* GALLERY EXHIBITION */}
        <Gallery isDark={isDark} />

        {/* CONTACT & GEO VISUAL MAP */}
        <Contact isDark={isDark} />

      </main>

      {/* MASTER PROFESSIONAL FOOTER */}
      <footer
        className={`pt-16 pb-8 border-t transition-all duration-300 ${
          isDark
            ? "bg-[#060D1A] border-[#13223A] text-slate-400"
            : "bg-white border-slate-205 text-slate-650"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
            
            {/* Column 1: Branding block (5 Cols) */}
            <div className="md:col-span-5 space-y-4">
              <div onClick={scrollToTop} className="flex items-center space-x-3 cursor-pointer group">
                <div className={`p-2 rounded-lg transition-colors duration-300 ${
                  isDark ? "bg-[#10223D] text-cyan-400" : "bg-cyan-50 text-cyan-600"
                }`}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <span className={`text-base font-mono font-bold tracking-wider block ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                    DEVU PILLAI
                  </span>
                  <span className="text-[10px] font-sans tracking-widest uppercase block text-cyan-400 font-semibold">
                    Forensic Science Professional
                  </span>
                </div>
              </div>

              <p className="text-xs leading-relaxed max-w-sm">
                Translating physical crime scene metrics into flawless, irrefutable, and objective bio-chemical reports. Serving legal justice through accurate standard laboratory validation.
              </p>
            </div>

            {/* Column 2: Quick Scrolls (4 Cols) */}
            <div className="md:col-span-4 space-y-3">
              <h4 className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                Standard Protocols Sections
              </h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
                <a href="#about" className="hover:text-cyan-400 transition-colors uppercase font-mono">01_Synopsis</a>
                <a href="#education" className="hover:text-cyan-400 transition-colors uppercase font-mono">02_Scholastics</a>
                <a href="#skills" className="hover:text-cyan-400 transition-colors uppercase font-mono">03_Laboratories</a>
                <a href="#experience" className="hover:text-cyan-400 transition-colors uppercase font-mono">04_Placement</a>
                <a href="#certificates" className="hover:text-cyan-400 transition-colors uppercase font-mono">05_Certificates</a>
                <a href="#research" className="hover:text-cyan-400 transition-colors uppercase font-mono">06_Research</a>
              </div>
            </div>

            {/* Column 3: Contact signatures (3 Cols) */}
            <div className="md:col-span-3 space-y-4 text-xs font-mono">
              <h4 className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                Security Signatures
              </h4>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-slate-400">
                  <Mail size={14} className="text-cyan-500" />
                  <span className="truncate">{PORTFOLIO_OWNER.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-slate-400">
                  <Phone size={14} className="text-cyan-500" />
                  <span>{PORTFOLIO_OWNER.phone}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Copyright row */}
          <div className="pt-8 border-t border-slate-700/10 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono gap-4">
            <p>
              © 2026 Devu Pillai. Forensic Science Portfolio.
            </p>
            <div className="flex items-center space-x-4">
              <span>ISO 17025 COMPLIANT</span>
              <span className="text-cyan-400 flex items-center space-x-1">
                <span>Direct Verification Seal</span>
                <ExternalLink size={10} />
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* PDF INTERACTIVE RESUME ACCORDION DRAWER MODAL */}
      <ResumeViewer
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        isDark={isDark}
      />
    </div>
  );
}
