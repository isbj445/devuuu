import React, { useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Printer, Download, MapPin, Mail, Phone, Calendar, ShieldCheck, FileCheck } from "lucide-react";
import { PORTFOLIO_OWNER, EDUCATION_DATA, TECHNICAL_SKILLS, EXPERIENCE_DATA, WORKSHOPS_SEMINARS } from "../data";

interface ResumeViewerProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
}

export default function ResumeViewer({ isOpen, onClose, isDark }: ResumeViewerProps) {
  const resumeRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    // Elegant native print window trigger for premium export
    const printContent = resumeRef.current?.innerHTML;
    const originalContent = document.body.innerHTML;

    if (printContent) {
      const windowPrint = window.open("", "_blank");
      if (windowPrint) {
        windowPrint.document.write(`
          <html>
            <head>
              <title>Devu Pillai - Forensic Science Resume</title>
              <style>
                body {
                  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                  color: #1e293b;
                  background-color: #ffffff;
                  padding: 40px;
                  line-height: 1.5;
                }
                .header { text-align: center; border-bottom: 2px solid #0891b2; padding-bottom: 20px; margin-bottom: 25px; }
                .name { font-size: 28px; font-weight: 800; color: #020817; margin: 0; }
                .title { font-size: 14px; font-family: monospace; color: #0891b2; font-weight: bold; margin-top: 5px; }
                .contact-row { display: flex; justify-content: center; gap: 15px; font-size: 11px; margin-top: 10px; flex-wrap: wrap; }
                .section-title { font-size: 14px; font-weight: bold; font-family: monospace; color: #0891b2; border-bottom: 1px solid #e2e8f0; padding-bottom: 5px; margin-top: 25px; margin-bottom: 12px; text-transform: uppercase; }
                .grid-2 { display: grid; grid-cols: 1fr 1fr; gap: 20px; }
                .edu-item, .exp-item { margin-bottom: 15px; }
                .item-header { display: flex; justify-content: space-between; font-weight: bold; font-size: 12px; }
                .item-sub { font-size: 11px; color: #64748b; font-style: italic; }
                .item-desc { font-size: 11px; margin-top: 5px; color: #475569; }
                .skill-cat { font-weight: bold; font-size: 12px; margin-top: 10px; color: #0f172a; }
                .skills-list { font-size: 11px; color: #475569; }
                ul { margin-top: 5px; margin-bottom: 0; padding-left: 20px; }
                li { font-size: 11px; color: #475569; margin-bottom: 3px; }
                @media print {
                  body { padding: 0; }
                  @page { margin: 1.6cm; }
                }
              </style>
            </head>
            <body>
              ${printContent}
            </body>
          </html>
        `);
        windowPrint.document.close();
        windowPrint.focus();
        windowPrint.print();
        windowPrint.close();
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 bg-[#020617]/90 z-50 flex items-center justify-center p-4 backdrop-blur-md">
          
          {/* Outer click barrier */}
          <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className={`relative w-full max-w-5xl rounded-3xl overflow-hidden border flex flex-col h-[90vh] z-10 ${
              isDark ? "bg-[#091122] border-cyan-500/20" : "bg-white border-slate-200 shadow-2xl"
            }`}
          >
            
            {/* Top Toolbar panel */}
            <div className={`p-4 border-b flex items-center justify-between shrink-0 ${
              isDark ? "bg-[#0E1A33] border-[#1E3050]" : "bg-slate-50 border-slate-250"
            }`}>
              
              <div className="flex items-center space-x-2">
                <FileCheck size={18} className="text-cyan-400" />
                <span className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-slate-200" : "text-slate-800"}`}>
                  Prnt-Ready Dossier Document Viewer
                </span>
              </div>

              {/* Toolbar Actions */}
              <div className="flex items-center space-x-2">
                
                {/* Print button */}
                <button
                  onClick={handlePrint}
                  className="flex items-center space-x-1.5 px-3.5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-mono text-xs font-bold uppercase rounded-lg shadow-sm select-none"
                  title="Print Portfolio Resume"
                >
                  <Printer size={14} />
                  <span className="hidden sm:inline">Export Hard-Copy</span>
                </button>

                {/* Dismiss close */}
                <button
                  onClick={onClose}
                  className={`p-2 rounded-lg transition-colors ${
                    isDark ? "bg-[#18263D] text-slate-300 hover:bg-[#20314F]" : "bg-slate-200 text-slate-700 hover:bg-slate-300"
                  }`}
                >
                  <X size={16} />
                </button>

              </div>

            </div>

            {/* Resume Document Canvas Body layout */}
            <div className={`flex-1 overflow-y-auto p-4 sm:p-8 ${isDark ? "bg-[#0B1428]" : "bg-slate-100"}`}>
              
              {/* Paper simulation wrapper sheet */}
              <div
                ref={resumeRef}
                className="max-w-4xl mx-auto bg-white text-slate-800 p-8 sm:p-12 shadow-md rounded-xl text-left border border-slate-200"
              >
                
                {/* DOCUMENT HEADER */}
                <div className="text-center border-b-2 border-cyan-500 pb-5 mb-6">
                  <h1 className="text-3xl font-sans font-extrabold text-slate-900 tracking-tight">
                    {PORTFOLIO_OWNER.name}
                  </h1>
                  <p className="text-sm font-mono text-cyan-600 font-bold uppercase tracking-wider mt-1">
                    {PORTFOLIO_OWNER.credential} / {PORTFOLIO_OWNER.title}
                  </p>
                  
                  {/* Metadata coordinates */}
                  <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-500 mt-3 font-mono">
                    <span className="flex items-center space-x-1">
                      <MapPin size={12} className="text-cyan-500" />
                      <span>{PORTFOLIO_OWNER.location}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Mail size={12} className="text-cyan-500" />
                      <span>{PORTFOLIO_OWNER.email}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Phone size={12} className="text-cyan-500" />
                      <span>{PORTFOLIO_OWNER.phone}</span>
                    </span>
                  </div>
                </div>

                {/* CAREER OBJECTIVE */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold text-cyan-600 uppercase border-b border-slate-200 pb-1 mb-2.5 tracking-wider">
                    CAREER OBJECTIVE
                  </h2>
                  <p className="text-xs sm:text-xs leading-relaxed text-slate-650">
                    {PORTFOLIO_OWNER.objective}
                  </p>
                </div>

                {/* EDUCATION GRID */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold text-cyan-600 uppercase border-b border-slate-200 pb-1 mb-3.5 tracking-wider">
                    ACADEMIC FOUNDATION
                  </h2>
                  
                  <div className="space-y-4">
                    {EDUCATION_DATA.slice(0, 3).map((edu) => (
                      <div key={edu.id} className="text-xs">
                        <div className="flex justify-between items-start font-bold text-slate-900 text-xs sm:text-xs">
                          <span>{edu.degree}</span>
                          <span className="font-mono text-cyan-600 shrink-0 ml-2">{edu.duration}</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-slate-500 italic mt-0.5">
                          <span>{edu.institution}, {edu.location}</span>
                          <span className="font-mono">{edu.grade}</span>
                        </div>
                        <ul className="list-disc pl-5 mt-1 text-slate-600 space-y-0.5">
                          {edu.highlights.map((h, i) => (
                            <li key={i}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CORE PRACTICAL PLACEMENT EXPERIENCE */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold text-cyan-600 uppercase border-b border-slate-200 pb-1 mb-3.5 tracking-wider">
                    POLICE INTERNSHIP PLACEMENT
                  </h2>

                  {EXPERIENCE_DATA.map((exp) => (
                    <div key={exp.id} className="text-xs">
                      <div className="flex justify-between items-start font-bold text-slate-900 text-xs sm:text-xs">
                        <span>{exp.role}</span>
                        <span className="font-mono text-cyan-600 shrink-0 ml-2">{exp.duration}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 italic mt-0.5">
                        {exp.organization}, {exp.location}
                      </div>
                      <p className="mt-1 text-slate-650 leading-relaxed text-xs">
                        {exp.summary}
                      </p>
                      <ul className="list-disc pl-5 mt-1.5 text-slate-600 space-y-0.5">
                        {exp.tasks.map((task, i) => (
                          <li key={i}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* TECHNICAL SKILLS SECTION */}
                <div className="mb-6">
                  <h2 className="text-xs font-mono font-bold text-cyan-600 uppercase border-b border-slate-200 pb-1 mb-3 tracking-wider">
                    TECHNICAL METHODOLOGIES & SPECIAL INSTRUMENTS
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                    <div>
                      <div className="font-bold text-slate-900 border-b border-slate-100 pb-0.5 mb-1 text-[11px]">Biological & Chemical</div>
                      <div className="text-slate-600 leading-normal space-y-0.5 text-[11px]">
                        <div>• PCR Sequence STR setups</div>
                        <div>• Fluid Confirmatory Spots</div>
                        <div>• TLC Ink Chromatography</div>
                        <div>• Blood Splatter Vector Reconstruction</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 border-b border-slate-100 pb-0.5 mb-1 text-[11px]">Field Crime & Evidence</div>
                      <div className="text-slate-600 leading-normal space-y-0.5 text-[11px]">
                        <div>• Quadrant Field Grids Mapping</div>
                        <div>• Cyanoacrylate Latent Fuming</div>
                        <div>• Minutiae Ridges Matching (AFIS)</div>
                        <div>• Plaster Cast Footwear Casting</div>
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 border-b border-slate-100 pb-0.5 mb-1 text-[11px]">Document & Cyber Analysis</div>
                      <div className="text-slate-600 leading-normal space-y-0.5 text-[11px]">
                        <div>• Handwriting Pen Dynamics examination</div>
                        <div>• Signature Forgery inspection</div>
                        <div>• Hard-disk Bit-stream cloners</div>
                        <div>• System Metadata Registry logs audit</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SIGNED DECLARATION */}
                <div className="mt-8 border-t border-dashed border-slate-300 pt-5 text-xs text-slate-500">
                  <p className="italic leading-relaxed">
                    "I hereby certify and declare that the credentials, school grades, and practical police log cases compiled above represent verifiable scientific facts, in strict accordance with objective audit procedures."
                  </p>
                  
                  <div className="flex justify-between items-end mt-6">
                    <div className="space-y-0.5">
                      <span className="block font-bold">Kollam, Kerala</span>
                      <span className="block text-[10px] uppercase font-mono">Date verified: 2026</span>
                    </div>
                    <div className="text-right space-y-0.5">
                      <span className="block italic font-bold font-sans text-slate-800">D. Pillai</span>
                      <span className="block text-[10px] border-t border-slate-350 pt-1 select-none font-mono uppercase">DEVU PILLAI (M.Sc.)</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
