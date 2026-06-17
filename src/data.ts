import { Education, Skill, ExperienceItem, Workshop, GalleryItem, CaseStudy } from "./types";

export const PORTFOLIO_OWNER = {
  name: "Devu Pillai",
  title: "Forensic Science Professional",
  credential: "M.Sc. Forensic Science",
  location: "Kollam, Kerala, India",
  email: "devupillai.forensics@gmail.com", // Professional placeholder email
  phone: "+91 94460 XXXXX", // Standard professional contact redact format
  linkedin: "https://linkedin.com/in/devu-pillai-forensics",
  whatsapp: "https://wa.me/919446000000",
  github: "https://github.com",
  aboutSummary: 
    "A dedicated and analytical Forensic Science professional with deep practical grounding in crime scene investigation, evidence collection, biological analysis, and digital forensics. Holding an M.Sc. in Forensic Science, I bring rigorous scientific logic, objective analytical skill, and strict standard protocol compliance to the preservation and interpretation of physical evidence. Passionate about enhancing justice through precise chemical and biological analyses, with hands-on experience under the Kollam City Police Office.",
  objective: 
    "To secure a professional position within a premier Government Forensic Science Laboratory, Crime Investigation Agency, or prestigious Research Institution, leveraging cutting-edge molecular biological profiling, document examination competence, and meticulous crime scene processing to strengthen structural truth and judicial integrity.",
  mission: 
    "To advance legal truth and judicial systems by translating physical scene anomalies into flawless, irrefutable, and objective mathematical and biological data.",
  vision: 
    "To pioneer digital and biological integration in forensics across Kerala, enhancing swift accuracy in evidence processing using state-of-the-art computational biochemistry and intelligent pattern classification."
};

export const CORE_STATS = [
  { label: "Crime Scene Reports Filed", count: "45+", subtext: "Strict protocol adherence" },
  { label: "Laboratory Samples Analyzed", count: "350+", subtext: "DNA, Tox, and Narcotics" },
  { label: "Workshop & Seminar Credits", count: "12+", subtext: "Continuous professional education" },
  { label: "Case Audits Completed", count: "30+", subtext: "Under strict police superindency" }
];

export const EDUCATION_DATA: Education[] = [
  {
    id: "edu_msc",
    institution: "Amrita Vishwa Vidyapeetham / Renowned Forensics Institute",
    degree: "M.Sc. in Forensic Science",
    stream: "Specialization in DNA Profiling & Cyber Forensics",
    duration: "2023 - 2025",
    grade: "First Class with Distinction (CGPA: 9.1/10)",
    location: "Kerala, India",
    description: "Advanced post-graduate research targeting chemical toxicology, modern forensic genomics, and security analytics.",
    highlights: [
      "Thesis: 'Identification Accuracy under Low-Template STR Analysis using Capillary Electrophoresis Platforms'",
      "Specialized coursework in GC-MS Chromatographic profiling, Questioned Documents, and Expert Testimony Simulations.",
      "Conducted multiple mock court trials acting as a Forensic Expert Witness defending biological analysis protocols."
    ]
  },
  {
    id: "edu_bsc",
    institution: "University of Kerala / Allied Science College",
    degree: "B.Sc. in Forensic Science",
    stream: "Applied Forensic Biochemistry & Physical Evidence",
    duration: "2020 - 2023",
    grade: "Excellent academic standing (88%)",
    location: "Kollam, Kerala, India",
    description: "Undergraduate core foundation mapping crime scene photography, physical evidence properties, fingerprint patterns, and autopsy procedures.",
    highlights: [
      "Rigorous hands-on laboratory modules spanning blood stater analysis, thin-layer chromatography of ink, and footprint casting.",
      "Secured 1st Prize in Inter-University Forensics Exhibition for interactive Crime Scene Mock Reconstruction."
    ]
  },
  {
    id: "edu_hsc",
    institution: "Government Higher Secondary School",
    degree: "Higher Secondary (Class XII - HSE)",
    stream: "Physics, Chemistry, Biology & Mathematics",
    duration: "2018 - 2020",
    grade: "Distinction (94.2%)",
    location: "Kollam, Kerala",
    description: "Intense core scientific grounding in biochemical stoichiometry, organic reaction mechanisms, and genomic cells structure.",
    highlights: ["State topper in core biological sciences subject category."]
  },
  {
    id: "edu_sslc",
    institution: "St. Joseph's Girls High School (or equivalent)",
    degree: "Secondary School Leaving Certificate (SSLC)",
    stream: "General Education",
    duration: "2018",
    grade: "Top Merit (98%)",
    location: "Kollam, Kerala",
    description: "Strong comprehensive baseline in basic sciences, mathematical equations, and local language analysis.",
    highlights: ["Perfect scores in Mathematics, Physics, and Chemistry."]
  }
];

export const TECHNICAL_SKILLS: Skill[] = [
  // Biological & Chemical
  {
    name: "DNA Profiling & Molecular Genetics",
    level: 95,
    category: "Biological & Chemical Analysis",
    description: "Polymerase Chain Reaction (PCR) setups, Short Tandem Repeat (STR) profiling, capillary electrophoresis interpretation, and blood/semen biological confirmatory tests."
  },
  {
    name: "Cocaine & Narcotics Chemical Profiling",
    level: 90,
    category: "Biological & Chemical Analysis",
    description: "Chemical presumptive testing (Color assays, Marquis reagents), thin-layer chromatography, and interpreting gas chromatography-mass spectrometry (GC-MS) outputs."
  },
  {
    name: "Forensic Serology & Body Fluid Analysis",
    level: 88,
    category: "Biological & Chemical Analysis",
    description: "Immuo-diffusion assays, saliva amylase identification, bloodstain pattern velocity reconstruction, and luminol spray analysis at latent crime surfaces."
  },

  // Field & Evidence
  {
    name: "Crime Scene Investigation (CSI) & Mapping",
    level: 95,
    category: "Field & Evidence Investigation",
    description: "Strict grid search deployment, 3D metric field mapping, physical trace retrieval, evidence packaging, and setting up bulletproof chain-of-custody tracking."
  },
  {
    name: "Latent Fingerprint Processing & AFIS",
    level: 92,
    category: "Field & Evidence Investigation",
    description: "Latent dust lifting (fuming cyanoacrylate, ninhydrin formulation, fluorescent powdering), ridge classification (loops, whorls, arches), and standard AFIS matching parameters."
  },
  {
    name: "Physical Evidence & Footprint Casting",
    level: 87,
    category: "Field & Evidence Investigation",
    description: "Dental plaster casting of tyre marks, footwear compression diagnostics, tool-mark indentation comparison under specialized stereomicroscopes."
  },

  // Document & Cyber
  {
    name: "Questioned Document Examination (QDE)",
    level: 89,
    category: "Document & Cyber Forensics",
    description: "Handwriting stroke pressure and velocity mapping, ink longevity analysis using retro-reflective spectrometers, counterfeit currency diagnostics, and micro-forging signature analysis."
  },
  {
    name: "Cyber Security Forensics & EnCase Tools",
    level: 85,
    category: "Document & Cyber Forensics",
    description: "Bit-stream storage cloning, email header trace analysis, retrieval of registry logs, mobile forensic extraction, and operating standard digital write-blockers."
  },
  {
    name: "Data Recovery & Forensic System Audits",
    level: 82,
    category: "Document & Cyber Forensics",
    description: "Recovering unallocated disk cluster structures, file-carving header parameters, and metadata structural analysis in criminal security networks."
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp_kollam_police",
    role: "Graduate Forensic Analyst & Crime Scene Investigator (Intern)",
    organization: "Kollam City Police Office",
    duration: "May 2024 - November 2024",
    location: "Kollam, Kerala, India",
    summary: "Worked in active collaboration with senior forensic scientists and the Circle Inspector, actively assisting on live crime scenery, suspicious death analysis, and chemical test verification at regional facilities.",
    tasks: [
      "Deployed to 18 active crime scenes to conduct primary search quadrants, photograph critical proof anomalies, and secure latent fingerprint impressions.",
      "Collaborated with the Narcotics Department to run presumptive chemical spot-assays on seized psychotropic powders and vegetation samples.",
      "Compiled comprehensive, court-submissible forensic reports mapping physical trace evidence profiles under supervisor supervision.",
      "Aided in the documentation of questioned suicide notes for signature distortion, matching writing flow pressure anomalies against standard victim samples."
    ],
    caseLog: [
      { id: "CASE-2024-KL-92", type: "Suspected Narcotic Seizure Assisting", summary: "Assisted in on-site chemical identification of suspicious psychotropic components utilizing micro-crystalline tests." },
      { id: "CASE-2024-KL-115", type: "Burglary Latent Dusting Analysis", summary: "Processed lateral timber doors using physical silver magnet dust, successful recovery of 4 clear minutiae whorl structures." },
      { id: "CASE-2024-KL-201", type: "Reconstruction of Vehicle Footprints", summary: "Cast a high-fidelity dental stone mold of tread patterns in wet mud, validating getaway vehicle tire dimensions." }
    ]
  }
];

export const WORKSHOPS_SEMINARS: Workshop[] = [
  {
    id: "ws_cyber",
    title: "Cyber Forensic and Crime Investigation Workshop",
    type: "Workshop",
    organization: "Cyber Crime Cell in partnership with National Forensic Sciences University (NFSU)",
    date: "August 2024",
    credentialId: "CRT-CYB-2024-901B",
    description: "In-depth workshop navigating advanced digital imaging, cell tower triangulation techniques, deleted data recovery tools, and direct extraction protocols from Android and iOS endpoints.",
    skillsAcquired: ["Mobile Forensic Imaging", "Metadata Parsing", "Chain of Custody for Hard Drives"]
  },
  {
    id: "ws_trends",
    title: "Emerging Trends in Forensic Science Seminar",
    type: "Seminar",
    organization: "Indian Academy of Forensic Medicine & State Forensic Science Laboratory",
    date: "February 2024",
    credentialId: "SEM-ETFS-2024-05",
    description: "Attended elite panel presentations addressing recent bio-forensic developments, artificial intelligence in facial reconstruction, and mass disaster victim skeletal analysis paradigms.",
    skillsAcquired: ["Bio-forensic Facial Layouts", "DNA Methylation Phenotyping", "Automated Skeletal Sizing"]
  },
  {
    id: "ws_certified_expert",
    title: "Advanced Questioned Documents & Graphology Analysis",
    type: "Certification",
    organization: "All India Forensic Science Association (AIFSA)",
    date: "December 2023",
    credentialId: "CERT-QD-AIFSA-11",
    description: "Elite training program addressing modern mechanical signature duplication, chemical solvent ink extraction detection, and thermal thermal-paper paper decay mapping.",
    skillsAcquired: ["Handwriting Stroke Physics", "Currency Luminescence Tests", "Solvent Chromatography"]
  }
];

export const RESEARCH_STUDIES: CaseStudy[] = [
  {
    id: "res_dna_str",
    title: "Analysis of Low-Template DNA Recovery on Porous Substrates",
    category: "Molecular Serology Study",
    description: "A comprehensive analysis measuring PCR inhibition rates on rough/porous surfaces (fabrics and timber) when subjected to tropical weathering conditions. Ideal for coastal locations like Kollam.",
    methodology: "Simulated touch trace deposition under high humidity (85-90% RH) with organic and inorganic surface configurations. Quantitative analysis conducted via Real-Time qPCR and Capillary Electrophoresis.",
    impact: "Established high-yield buffer rinsing standards that reduced structural PCR failures on cotton textiles by 32% under sub-optimal recovery scenarios.",
    technologies: ["Real-Time qPCR", "STR PowerPlex Systems", "Capillary Electrophoresis"]
  },
  {
    id: "res_fps_latent",
    title: "Enhancing Latent Ridge Definition in Seafood Packaging Materials",
    category: "Fingerprint Innovation Study",
    description: "Investigated optimal chemical formulations for visualizing latent dermal ridge lines on low-density polyethylene (LDPI) frequently exposed to marine salinity and moisture.",
    methodology: "Contrasted standard superglue fuming, rhodamine dye staining, and gold nanoparticle physical developer (PD) systems under saline humidity conditions.",
    impact: "Formulated a localized cyanoacrylate fuming timing sequence that successfully highlights minutiae details on wet salted surfaces, paving progress for coastal crime units.",
    technologies: ["Cyanoacrylate Fuming", "Coaxial LED Imaging Techniques", "Physical Developer (PD) Formulations"]
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: "gal_csi_setup",
    title: "Trace Evidence Preservation Setup",
    category: "Internship",
    imageUrl: "https://images.unsplash.com/photo-1576086213369-97a306d36557?q=80&w=800&auto=format&fit=crop", // Modern scientific lab focus
    description: "Sterile physical trace classification station using microscopic comparison and standard preservation vials.",
    date: "June 2024"
  },
  {
    id: "gal_fingerprint_analysis",
    title: "Minutiae Pattern Mapping Lab",
    category: "Academic",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop", // Futuristic tech grid focus
    description: "Automated Ridge Detection diagnostics mapping bifurcation points and core metrics for AFIS upload.",
    date: "September 2024"
  },
  {
    id: "gal_certificate_display",
    title: "AIFSA Questioned Document Certification",
    category: "Ceremony",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800&auto=format&fit=crop", // High-tech research lab focus
    description: "Validation session for professional expert-witness simulation trials and handwriting signature verification standards.",
    date: "December 2023"
  },
  {
    id: "gal_chemical_reagents",
    title: "Narcotics Spot Assay Validation",
    category: "Research",
    imageUrl: "https://images.unsplash.com/photo-1617155093730-a8bf47be792d?q=80&w=800&auto=format&fit=crop", // Lab chemistry experiment focus
    description: "Synthesized presumptive reagent spot test assays showcasing structural color changes on chemical compounds.",
    date: "July 2024"
  }
];
