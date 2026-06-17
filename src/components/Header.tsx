import React, { useState, useEffect } from "react";
import { Moon, Sun, Menu, X, ShieldAlert, FileText, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onOpenResume: () => void;
}

const NAV_ITEMS = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Education", id: "education" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Certificates", id: "certificates" },
  { label: "Research", id: "research" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" }
];

export default function Header({ isDark, setIsDark, onOpenResume }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPosition = window.scrollY + 120;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? "bg-[#0B1528]/95 backdrop-blur-md border-b border-[#1E2E4A] shadow-lg"
            : "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Branding Title */}
        <div 
          onClick={() => scrollToSection("home")}
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav-logo"
        >
          <div className={`p-2 rounded-lg transition-all duration-300 ${
            isDark ? "bg-[#1E2E4A] text-cyan-400 group-hover:bg-cyan-500/20" : "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100"
          }`}>
            <ShieldAlert size={22} className="animate-pulse" />
          </div>
          <div>
            <span className={`text-lg font-mono font-bold tracking-wider block transition-colors duration-200 ${
              isDark ? "text-slate-100" : "text-slate-900"
            }`}>
              DEVU PILLAI
            </span>
            <span className={`text-[10px] font-sans tracking-widest uppercase block ${
              isDark ? "text-cyan-400 font-medium" : "text-cyan-700 font-semibold"
            }`}>
              Forensic Specialist
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 uppercase tracking-wider font-mono ${
                activeSection === item.id
                  ? isDark
                    ? "text-cyan-400 bg-[#162744]"
                    : "text-cyan-700 bg-cyan-50"
                  : isDark
                    ? "text-slate-400 hover:text-slate-200 hover:bg-[#13223C]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Action Buttons & Theme Toggles */}
        <div className="hidden sm:flex items-center space-x-3">
          {/* Theme Switcher */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2.5 rounded-lg transition-colors duration-200 ${
              isDark 
                ? "bg-[#162744] text-amber-400 hover:bg-[#1E2E4A]" 
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
            title={isDark ? "Activate Light Clinic Mode" : "Activate Dark Lab Mode"}
          >
            {isDark ? <Sun size={19} /> : <Moon size={19} />}
          </button>

          {/* Interactive Resume Portal Trigger */}
          <button
            onClick={onOpenResume}
            className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg shadow-md hover:shadow-cyan-500/20 active:scale-95 transition-all duration-150"
          >
            <FileText size={14} />
            <span>Digital CV</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center space-x-3 lg:hidden">
          {/* Theme switcher on mobile */}
          <button
            onClick={() => setIsDark(!isDark)}
            className={`p-2 rounded-md ${
              isDark ? "bg-[#162744] text-amber-400" : "bg-slate-100 text-slate-700"
            }`}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile sandwich trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md transition-colors duration-200 ${
              isDark ? "text-slate-300 hover:bg-[#162744]" : "text-slate-700 hover:bg-slate-100"
            }`}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`lg:hidden border-t ${
              isDark ? "bg-[#0B1528] border-[#1E2E4A]" : "bg-white border-slate-200"
            }`}
          >
            <div className="px-4 py-4 space-y-1.5 flex flex-col">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-2.5 rounded-lg text-left text-sm font-mono tracking-wide uppercase transition-all ${
                    activeSection === item.id
                      ? isDark
                        ? "text-cyan-400 bg-[#162744]"
                        : "text-cyan-700 bg-cyan-50"
                      : isDark
                        ? "text-slate-400 hover:bg-[#101E35]"
                        : "text-slate-600 hover:bg-slate-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}

              <div className="pt-4 border-t border-slate-700/20 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex items-center justify-center space-x-2 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono text-xs font-bold rounded-lg uppercase tracking-wider"
                >
                  <FileText size={15} />
                  <span>Interactive Digital CV</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
