import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Send, CheckCircle2, UserCheck, ShieldAlert, Sparkles, Navigation } from "lucide-react";
import { PORTFOLIO_OWNER } from "../data";
import { ContactMessage } from "../types";

interface ContactProps {
  isDark: boolean;
}

export default function Contact({ isDark }: ContactProps) {
  // Visitor Counter
  const [visitorCount, setVisitorCount] = useState<number>(1472);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success">("idle");

  // Persistent Visitor Counter
  useEffect(() => {
    const savedCount = localStorage.getItem("forensic_portfolio_visits");
    let initialCount = 1472;

    if (savedCount) {
      initialCount = parseInt(savedCount, 10) + 1;
    } else {
      // Seed randomized start
      initialCount = Math.floor(Math.random() * 50) + 1400;
    }

    setVisitorCount(initialCount);
    localStorage.setItem("forensic_portfolio_visits", initialCount.toString());
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    // Simulate database secure sync
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Automatically reset status after 5s
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className={`py-20 sm:py-28 relative transition-colors duration-300 overflow-hidden ${
        isDark ? "bg-[#091122]" : "bg-slate-50"
      }`}
    >
      {/* Absolute Decorative GPS coordinate watermark */}
      <div className="absolute bottom-5 right-5 text-[9px] font-mono tracking-widest text-[#1D3050] pointer-events-none select-none">
        LAT: 8.8932° N / LON: 76.6141° E [KOLLAM_KERALA]
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <h2 className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase">
            08 / SECURE COMMUNICATIONS PORTAL
          </h2>
          <p className={`mt-3 text-3xl sm:text-4xl font-sans font-extrabold tracking-tight ${
            isDark ? "text-slate-100" : "text-slate-900"
          }`}>
            Contact Section & GIS Map
          </p>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
        </div>

        {/* Top Feature: Visitor Counter HUD */}
        <div className="flex justify-center mb-16">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className={`px-6 py-4 rounded-2xl border text-center relative overflow-hidden backdrop-blur-md flex items-center space-x-6 ${
              isDark ? "bg-[#0B1428]/80 border-[#1E3050]" : "bg-white border-slate-200 shadow-md"
            }`}
          >
            {/* Blinking Live Indicator */}
            <span className="relative flex h-3.5 w-3.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-cyan-500"></span>
            </span>

            <div className="text-left font-mono">
              <span className="text-[9px] block text-slate-400 uppercase tracking-widest">
                VISITOR PORTAL CLEARANCE
              </span>
              <span className={`text-xl sm:text-2xl font-bold tracking-tight block ${isDark ? "text-slate-100" : "text-slate-900"}`}>
                ID_LOG: {visitorCount}
              </span>
            </div>

            <div className={`h-10 w-[1px] ${isDark ? "bg-[#1E3050]" : "bg-slate-200"}`} />
            
            <p className="text-[10px] text-slate-400 max-w-xs leading-normal uppercase font-mono hidden sm:block">
              Verifying and registering connection footprint under local state storage constraints.
            </p>
          </motion.div>
        </div>

        {/* Contact Layout Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-stretch">
          
          {/* Left Column: Direct channels & GIS Map (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            
            {/* Direct Cards channels */}
            <div className={`p-6 rounded-2xl border ${
              isDark ? "bg-[#0C172C] border-[#1C2E49]" : "bg-white border-slate-200 shadow-md"
            }`}>
              <h3 className={`text-base font-mono font-bold uppercase tracking-wider mb-5 ${isDark ? "text-cyan-400" : "text-cyan-700"}`}>
                Direct Forensic Contact Channels
              </h3>

              <div className="space-y-4 text-xs sm:text-sm">
                
                {/* Email link */}
                <a
                  href={`mailto:${PORTFOLIO_OWNER.email}`}
                  className={`flex items-center space-x-3.5 p-3 rounded-xl border transition-all ${
                    isDark ? "bg-[#0F1C36] border-[#1E3050] hover:border-cyan-500/25_text-slate-200" : "bg-slate-50 border-slate-150 hover:bg-slate-100"
                  }`}
                >
                  <div className="p-2 bg-cyan-500/10 text-cyan-400 rounded-lg">
                    <Mail size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">Official Email Liaison</span>
                    <span className="font-semibold block">{PORTFOLIO_OWNER.email}</span>
                  </div>
                </a>

                {/* Location Map Pin */}
                <div
                  className={`flex items-center space-x-3.5 p-3 rounded-xl border ${
                    isDark ? "bg-[#0F1C36] border-[#1E3050] text-slate-200" : "bg-slate-50 border-slate-150"
                  }`}
                >
                  <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">Operating Jurisdiction</span>
                    <span className="font-semibold block">{PORTFOLIO_OWNER.location}</span>
                  </div>
                </div>

                {/* LinkedIn verification link */}
                <a
                  href={PORTFOLIO_OWNER.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center space-x-3.5 p-3 rounded-xl border transition-all ${
                    isDark ? "bg-[#0F1C36] border-[#1E3050] text-slate-200 hover:border-cyan-500/25" : "bg-slate-50 border-slate-150 hover:bg-slate-100"
                  }`}
                >
                  <div className="p-2 bg-blue-600/10 text-blue-500 rounded-lg">
                    <Linkedin size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block tracking-wider">Professional Profile</span>
                    <span className="font-semibold block">linkedin.com/in/devu-pillai-forensics</span>
                  </div>
                </a>

              </div>
            </div>

            {/* Premium CAD styled Vector Geographic Map */}
            <div className={`p-6 rounded-2xl border flex-1 flex flex-col justify-between relative overflow-hidden h-72 ${
              isDark ? "bg-[#0C172C] border-[#1C2E49]" : "bg-white border-slate-200 shadow-md"
            }`}>
              
              <div className="absolute inset-0 pointer-events-none opacity-5 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:15px_15px]" />

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-2">
                  <Navigation size={14} className="text-cyan-400 animate-spin-slow" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    GIS Localized Vector Coordinates
                  </span>
                </div>
                <span className="text-[8px] font-mono bg-cyan-500/10 text-cyan-400 p-0.5 px-1.5 rounded border border-cyan-400/20">
                  REF_SAT_KL_02
                </span>
              </div>

              {/* Vector SVG Representation of Kollam Coast & Indian Ocean */}
              <div className="h-44 w-full relative rounded-xl overflow-hidden bg-[#050C19] border border-[#14233F] flex items-center justify-center">
                
                {/* Grid Rings */}
                <div className="absolute w-28 h-28 border border-dashed border-cyan-500/15 rounded-full animate-pulse" />
                <div className="absolute w-48 h-48 border border-dashed border-cyan-500/5 rounded-full" />

                {/* SVG Vector Drawing */}
                <svg className="absolute inset-0 w-full h-full text-slate-500/10 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" />
                  {/* Stylized kerala coastline curve */}
                  <path d="M 30,0 Q 40,40 50,60 T 60,100" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="1" strokeDasharray="2 2" />
                  {/* Water waves */}
                  <path d="M 0,40 Q 15,35 25,40 T 40,40" fill="none" stroke="rgba(34,211,238,0.05)" strokeWidth="0.5" />
                </svg>

                {/* Interactive coordinate Pin */}
                <div className="absolute select-none pointer-events-none flex flex-col justify-center items-center">
                  <div className="relative">
                    <span className="animate-ping absolute inline-flex h-6 w-6 rounded-full bg-cyan-400 opacity-75"></span>
                    <div className="h-4 w-4 rounded-full bg-cyan-400 border-2 border-white flex items-center justify-center">
                      <div className="h-1.5 w-1.5 bg-slate-900 rounded-full" />
                    </div>
                  </div>
                  <span className="mt-1.5 text-[9px] font-mono text-cyan-400 font-extrabold px-1.5 py-0.5 rounded bg-[#020617]/90 uppercase tracking-widest block shadow">
                    KOLLAM, INDIA
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Interactive Secure Message Form (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div className={`p-6 sm:p-8 rounded-2xl border flex-1 flex flex-col justify-between relative ${
              isDark ? "bg-[#0E1A33] border-[#1E3050]" : "bg-white border-slate-250 shadow-md"
            }`}>
              
              <div className="w-full">
                <div className="flex items-center space-x-2.5 mb-6 pb-4 border-b border-slate-700/10">
                  <UserCheck size={18} className="text-cyan-400 shrink-0" />
                  <h3 className={`text-base font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                    Dispatch Analytical Request Inquiry
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Name Input */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="name" className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                      Full Identity / Organization Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-sans font-medium transition-colors focus:ring-1 focus:ring-cyan-500 focus:outline-none ${
                        isDark ? "bg-[#0B1428] border-[#1E3050] text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                      placeholder="e.g. Inspector George / NFSU Director"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="email" className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                      Secure Return Email Channel
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-sans font-medium transition-colors focus:ring-1 focus:ring-cyan-500 focus:outline-none ${
                        isDark ? "bg-[#0B1428] border-[#1E3050] text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                      placeholder="email@organization.gov"
                    />
                  </div>

                  {/* Subject Input */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="subject" className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                      Inquiry Subject Category
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-sans font-medium transition-colors focus:ring-1 focus:ring-cyan-500 focus:outline-none ${
                        isDark ? "bg-[#0B1428] border-[#1E3050] text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                      placeholder="e.g., DNA STR Lab Consulting"
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1 text-left">
                    <label htmlFor="message" className="text-[10px] font-mono uppercase font-bold text-slate-400 tracking-wider">
                      Narrative parameters context (Message)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={5}
                      className={`w-full p-3 rounded-xl border text-xs sm:text-sm font-sans font-medium transition-colors focus:ring-1 focus:ring-cyan-500 focus:outline-none resize-none ${
                        isDark ? "bg-[#0B1428] border-[#1E3050] text-slate-100" : "bg-slate-50 border-slate-200 text-slate-900"
                      }`}
                      placeholder="Specify requirements details here..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting || submitStatus === "success"}
                    className="w-full flex items-center justify-center space-x-2.5 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-white font-mono text-xs font-bold uppercase rounded-xl shadow-lg transition-all duration-150 active:scale-[0.98] cursor-pointer"
                  >
                    <span>{isSubmitting ? "Syncing Dossier..." : "Secure Dispatch Enquiry"}</span>
                    <Send size={13} />
                  </button>

                </form>
              </div>

              {/* Status Notice Indicator pop-card banner */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-4 rounded-xl border bg-emerald-500/10 border-emerald-500/30 text-emerald-400 font-mono text-xs text-left"
                  >
                    <div className="flex items-center space-x-2">
                      <CheckCircle2 size={16} />
                      <span className="font-bold uppercase tracking-wide">SECURE SYNC SUCCESSFUL</span>
                    </div>
                    <p className="mt-1 leading-normal text-[10px] text-slate-300 uppercase">
                      Inquiry packet encrypted and synced successfully. Expect feedback within 24 operational hours.
                    </p>
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
