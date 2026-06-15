// ============================================================
//  Portfolio data — Muhammad Usman, Full Stack JS Developer
// ============================================================

export const profile = {
  name: "Muhammad Usman",
  title: "Full Stack JS Developer",
  tagline:
    "Building scalable, secure & AI-powered web and mobile applications.",
  location: "Lahore, Pakistan",
  phone: "+92 304 3308478",
  email: "usmandevofficial@gmail.com",
  github: "https://github.com/Usman11801",
  linkedin: "https://www.linkedin.com/in/muhammad-usman-0b7975163/",
  experienceYears: "8+",
  summary:
    "Full Stack Developer with 8+ years of experience building scalable, secure, and efficient web applications. Proficient in Node.js, React.js, React Native, Next.js, MongoDB, and PostgreSQL. Passionate about designing RESTful APIs, server-side rendering, and modular UI components. Proven ability to collaborate with cross-functional teams to integrate front-end and back-end systems, ensuring seamless user experiences — with deep, hands-on experience shipping production AI products.",
  stats: [
    { value: "8+", label: "Years Experience" },
    { value: "35+", label: "Projects Delivered" },
    { value: "12+", label: "Industries Served" },
    { value: "15+", label: "AI Integrations" },
  ],
};

// ------------------------------------------------------------
//  Tech Stack — grouped
// ------------------------------------------------------------
export const techStack = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Next.js",
      "React Native",
      "Angular",
      "Vue.js",
      "Nuxt.js",
      "TypeScript",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "Python", "Django", "FastAPI"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "ChromaDB"],
  },
  {
    group: "Stacks",
    items: ["MERN", "MEAN", "MEVN"],
  },
  {
    group: "AI / LLM",
    items: [
      "OpenAI (GPT-4o)",
      "Anthropic Claude",
      "Google Gemini",
      "DeepSeek",
      "Perplexity",
      "Meta Llama",
      "RAG / Vector Search",
      "YOLOv8 / OCR",
      "ElevenLabs Voice AI",
    ],
  },
  {
    group: "DevOps & Tools",
    items: [
      "Docker",
      "Git / GitHub / Bitbucket",
      "Azure",
      "Stripe",
      "JWT / OAuth",
      "Jest / Unit Testing",
    ],
  },
  {
    group: "Emerging",
    items: ["Blockchain Development", "Microservices", "WebSockets / Socket.IO"],
  },
];

// ------------------------------------------------------------
//  Skills — grouped with proficiency
// ------------------------------------------------------------
export const skills = [
  { name: "React.js / Next.js", level: 95 },
  { name: "Node.js / Express / Nest.js", level: 93 },
  { name: "TypeScript / JavaScript", level: 92 },
  { name: "React Native (Mobile)", level: 88 },
  { name: "Vue.js / Nuxt.js / Angular", level: 85 },
  { name: "Python / Django / FastAPI", level: 84 },
  { name: "MongoDB / PostgreSQL / SQL", level: 90 },
  { name: "AI / LLM & RAG Integration", level: 87 },
  { name: "REST API & Microservices", level: 91 },
  { name: "Auth (JWT / OAuth) & Security", level: 89 },
];

// ------------------------------------------------------------
//  Project categories (filter chips)
// ------------------------------------------------------------
export const categories = [
  "All",
  "AI & ML",
  "CRM",
  "Healthcare",
  "Education",
  "Real Estate & FinTech",
  "Fleet & Logistics",
  "Facility & Construction",
  "SaaS & Productivity",
  "Legal",
  "Marketing",
  "Events & Ticketing",
  "Mobile",
];

// ------------------------------------------------------------
//  Projects
// ------------------------------------------------------------
export const projects = [
  {
    name: "Memory Capsule",
    category: "AI & ML",
    field: "AI SaaS",
    accent: "#7c5cff",
    summary:
      "A Next.js full-stack application for storing and reliving memories, powered by AI-driven semantic search and intelligent organization.",
    features: [
      "AI-powered semantic search",
      "Sentiment tagging of memories",
      "Voice & media storage",
      "Smart reminders",
      "End-to-end secure storage",
    ],
    stack: ["Next.js", "Node.js", "AI / LLM", "Semantic Search", "MongoDB"],
    link: null,
  },
  {
    name: "Chatbot AI",
    category: "AI & ML",
    field: "AI Chatbot Platform",
    accent: "#22c55e",
    summary:
      "A multi-model AI chatbot platform giving users access to many LLMs (GPT-5.4, Claude Sonnet 4.6, Gemini 3.1 Pro, DeepSeek, Llama 3.3 and more) through a single unified interface.",
    features: [
      "Multi-model chat with live model switching",
      "AI image generation (Nano Banana, GPT Image, Ghibli)",
      "PDF analysis & chat with documents",
      "Web search + link analyzer",
      "20+ specialized AI assistants",
      "Plagiarism & AI-content detection",
      "Multi-language support (7 languages)",
    ],
    stack: [
      "Vue.js",
      "Nuxt.js",
      "Firebase",
      "OpenAI / Claude / Gemini",
      "Stripe",
      "i18n",
    ],
    link: "https://chatbotai.co",
  },
  {
    name: "DeftGPT",
    category: "AI & ML",
    field: "Multi-LLM Microservice",
    accent: "#06b6d4",
    summary:
      "A production-ready multi-LLM chat platform built as a containerized microservice, with real-time streaming and a RAG workflow for context-aware answers.",
    features: [
      "Multi-LLM chat support",
      "Real-time streaming responses",
      "RAG integration with ChromaDB vector store",
      "Containerized for scalable deployment",
      "Microservice architecture",
    ],
    stack: ["FastAPI", "ChromaDB", "Docker", "RAG", "Tavily / Perplexity"],
    link: "https://deftgpt.com",
  },
  {
    name: "LLM SQL Agent",
    category: "AI & ML",
    field: "AI Data / NL-to-SQL",
    accent: "#f59e0b",
    summary:
      "An LLM-powered agent that lets users query databases in plain English — interpreting natural language, generating safe SQL, executing it, and presenting clear results.",
    features: [
      "Natural language to SQL generation",
      "Schema-aware, safe query execution",
      "Agentic RAG, TAG & ReACT frameworks",
      "Empowers non-technical users to access data",
      "Chatbot-style querying interface",
    ],
    stack: ["LLM", "Agentic RAG", "TAG", "ReACT Agent", "SQL"],
    link: null,
  },
  {
    name: "CHEX.AI",
    category: "AI & ML",
    field: "Computer Vision",
    accent: "#ef4444",
    summary:
      "An AI-powered vehicle inspection system that detects damage with 92% accuracy and extracts license plates via OCR, cutting manual inspection time by 75%.",
    features: [
      "Automated vehicle damage detection (92% accuracy)",
      "License plate extraction via OCR",
      "Reduces manual inspection time by 75%",
      "AI-generated damage summaries & reports (GPT-4o)",
    ],
    stack: ["YOLOv8", "OCR", "GPT-4o", "Computer Vision"],
    link: "https://www.chex.ai",
  },
  {
    name: "YourTeacher.ai",
    category: "Education",
    field: "AI Language Learning",
    accent: "#8b5cf6",
    summary:
      "An AI-powered language learning platform focused on real conversational practice — learners speak with AI tutors 24/7 to build fluency without anxiety.",
    features: [
      "Unlimited AI tutor conversations",
      "Real-time feedback & transcriptions",
      "Vocabulary & progress tracking",
      "Personalized topics & themes",
      "Available 24/7 on web, iOS & Android",
    ],
    stack: ["React", "Node.js", "AI / LLM", "Speech Recognition"],
    link: "https://yourteacher.ai/",
  },
  {
    name: "Talk2Taste",
    category: "AI & ML",
    field: "Voice AI / FoodTech",
    accent: "#f97316",
    summary:
      "A real-time ordering system with bidirectional AI voice streaming — webhook-driven architecture with live cart synchronization for seamless customer interactions.",
    features: [
      "Real-time bidirectional AI voice streaming",
      "Live cart synchronization",
      "Webhook-based architecture",
      "AI voice ordering integration",
    ],
    stack: ["Node.js", "WebSockets / Socket.IO", "ElevenLabs", "Real-time APIs"],
    link: null,
  },
  {
    name: "LexOrbit",
    category: "Legal",
    field: "AI Legal Research",
    accent: "#3b82f6",
    summary:
      "An AI-powered legal research platform helping solo practitioners and small firms access accurate legal information fast — automating research, document analysis and judge analytics.",
    features: [
      "AI-assisted legal research",
      "Document analysis automation",
      "Judge analytics insights",
      "Built for solo & small-firm practitioners",
    ],
    stack: ["React", "Python / Node.js", "AI / LLM", "Document Processing"],
    link: "https://getlexorbit.com/",
  },
  {
    name: "Scale Mediation",
    category: "Legal",
    field: "Dispute Resolution",
    accent: "#14b8a6",
    summary:
      "A professional dispute resolution service platform providing mediation and conflict management for businesses, organizations and individuals.",
    features: [
      "Business & workplace conflict mediation",
      "Commercial dispute resolution",
      "Customized mediation strategies",
      "Responsive informational platform",
    ],
    stack: ["JavaScript", "HTML5 / CSS3", "CMS", "Responsive UI"],
    link: "https://scalemediation.com/",
  },
  {
    name: "Veriport",
    category: "Healthcare",
    field: "Medical / Compliance",
    accent: "#10b981",
    summary:
      "A secure cloud-based drug & alcohol test management platform used by 200+ Canadian testing businesses — automating reporting and electronic result delivery for employers, MROs and TPAs.",
    features: [
      "Automated drug & alcohol test reporting",
      "Electronic delivery of results & notifications",
      "Support for MROs, TPAs & employers",
      "Regulatory compliance & audit trails",
      "Secure, encrypted data handling",
    ],
    stack: ["Node.js / Python", "Cloud Infrastructure", "Secure Auth", "Email Automation"],
    link: "https://veriport.ca/",
  },
  {
    name: "GlazeCRM",
    category: "CRM",
    field: "Customer Relationship Management",
    accent: "#a855f7",
    summary:
      "A robust CRM platform with a Python/Django backend for managing customers, pipelines and business workflows at scale.",
    features: [
      "Customer & contact management",
      "Sales pipeline tracking",
      "Workflow automation",
      "Reporting & analytics dashboards",
    ],
    stack: ["Python", "Django", "PostgreSQL", "REST API"],
    link: null,
  },
  {
    name: "CapitalVue",
    category: "Real Estate & FinTech",
    field: "Real Estate Dashboard",
    accent: "#eab308",
    summary:
      "A real estate investment dashboard built with Next.js and Stripe — giving users a clear, data-rich view of properties and portfolios with integrated payments.",
    features: [
      "Real estate analytics dashboard",
      "Stripe payment integration",
      "Portfolio & property insights",
      "Server-side rendering for performance & SEO",
    ],
    stack: ["Next.js", "Stripe", "Node.js", "PostgreSQL"],
    link: null,
  },
  {
    name: "Linxio",
    category: "Fleet & Logistics",
    field: "Fleet Management",
    accent: "#0ea5e9",
    summary:
      "A fleet management system for tracking vehicles, monitoring assets and optimizing logistics operations in real time.",
    features: [
      "Real-time vehicle & GPS tracking",
      "Asset monitoring",
      "Route & logistics optimization",
      "Fleet analytics & reporting",
    ],
    stack: ["React", "Node.js", "MongoDB", "Real-time Tracking"],
    link: null,
  },
  {
    name: "MRI NetFacilities",
    category: "Facility & Construction",
    field: "Facility Management",
    accent: "#64748b",
    summary:
      "A facility management platform that streamlines maintenance, work orders and asset management for property and facility teams.",
    features: [
      "Work order & maintenance management",
      "Asset & vendor tracking",
      "Preventive maintenance scheduling",
      "Reporting & compliance",
    ],
    stack: ["React", "Node.js", "SQL", "Enterprise Web"],
    link: null,
  },
  {
    name: "QLASSIC",
    category: "Facility & Construction",
    field: "Construction Quality",
    accent: "#78716c",
    summary:
      "A CIDB Malaysia portal for the Quality Assessment System for Building Construction Works — standardized scoring of workmanship quality through site inspections.",
    features: [
      "Standardized CIS 7 quality scoring",
      "Assessment registration & login",
      "Resources, templates & announcements",
      "Benchmarking across construction projects",
    ],
    stack: ["JavaScript", "HTML5 / CSS3", "ASP.NET", "MS SQL Server"],
    link: null,
  },
  {
    name: "Optevo",
    category: "SaaS & Productivity",
    field: "Work Management SaaS",
    accent: "#6366f1",
    summary:
      "A cloud-based collaborative work management platform centered on 'WorkPods' — unifying people, tasks, files and conversations with AI-assisted summaries and insights.",
    features: [
      "Centralized task & project management",
      "Real-time messaging & collaboration threads",
      "AI-powered summaries & writing assistance",
      "Personalized dashboards & workflows",
      "Calendar & external app integrations",
    ],
    stack: ["React", "Microsoft Azure", "AI Automation", "Cloud SaaS"],
    link: "https://www.optevo.com/",
  },
  {
    name: "InventHub",
    category: "SaaS & Productivity",
    field: "Collaboration Platform",
    accent: "#0d9488",
    summary:
      "A collaboration platform for engineering and hardware teams to manage projects, version control and design workflows in one place.",
    features: [
      "Project & version management",
      "Team collaboration tools",
      "Modular, scalable UI",
      "Responsive cross-device experience",
    ],
    stack: ["React.js", "Node.js", "TypeScript", "REST API"],
    link: "https://inventhub.io/",
  },
  {
    name: "Brandbassador",
    category: "Marketing",
    field: "Influencer Marketing",
    accent: "#ec4899",
    summary:
      "A brand ambassador & influencer marketing platform connecting brands with their community to drive authentic, gamified marketing campaigns.",
    features: [
      "Ambassador & influencer management",
      "Gamified campaign & reward system",
      "Social engagement tracking",
      "Analytics & performance dashboards",
    ],
    stack: ["React.js", "Node.js", "MongoDB", "REST API"],
    link: "https://www.brandbassador.com",
  },
  {
    name: "CAPA",
    category: "Events & Ticketing",
    field: "Performing Arts / Ticketing",
    accent: "#d946ef",
    summary:
      "The official platform for the Columbus Association for the Performing Arts — browse shows, buy tickets and access community and educational programs.",
    features: [
      "Event calendar & online ticketing",
      "Customer support & accessibility info",
      "Community & educational programs",
      "Volunteer & sponsorship opportunities",
    ],
    stack: ["React", "JavaScript", "Ticketing Integration", "Responsive UI"],
    link: "https://www.capa.com/",
  },
  {
    name: "Cazvid App",
    category: "Mobile",
    field: "Jobs / Video Resume",
    accent: "#f43f5e",
    summary:
      "A mobile job platform where candidates and employers connect through short video resumes — built for a native cross-platform experience.",
    features: [
      "Short video resumes for job seekers",
      "Employer–candidate matching",
      "Native cross-platform mobile experience",
      "Published on Android & iOS",
    ],
    stack: ["React Native", "Node.js", "MongoDB", "Mobile"],
    link: null,
  },

  // ---- Additional real-world projects (rounding out each field) ----
  {
    name: "Orderry",
    category: "CRM",
    field: "Retail & Repair Shop CRM",
    accent: "#a855f7",
    summary:
      "An all-in-one business management and CRM platform for retail stores and repair shops — unifying a customer database, POS, invoicing and inventory in one system.",
    features: [
      "Customer database & profiles",
      "POS, invoicing & payments",
      "Inventory & stock control",
      "Work order tracking & dispatch",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "React", "Redis"],
    link: "https://orderry.com",
  },
  {
    name: "HelpSpot",
    category: "CRM",
    field: "Help Desk & Ticketing",
    accent: "#9333ea",
    summary:
      "A help-desk and service-desk platform that turns email-based support into organized, trackable tickets with SLA tracking and a built-in knowledge base.",
    features: [
      "Email-to-ticket inbox",
      "SLA tracking & escalations",
      "Knowledge base",
      "Customer portal & API",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "REST API"],
    link: "https://www.helpspot.com",
  },
  {
    name: "Noterro",
    category: "Healthcare",
    field: "Clinic Management",
    accent: "#10b981",
    summary:
      "Cloud-based clinic and practice management software for health and wellness practitioners — covering charting, scheduling, billing and patient records.",
    features: [
      "SOAP notes & charting",
      "Online booking & reminders",
      "Billing & insurance claims",
      "Patient portal & intake forms",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "JavaScript", "Stripe"],
    link: "https://www.noterro.com",
  },
  {
    name: "BestRx",
    category: "Healthcare",
    field: "Pharmacy Management",
    accent: "#059669",
    summary:
      "Pharmacy management software built for independent pharmacies — handling prescription processing, e-prescribing, refills and integrated point-of-sale.",
    features: [
      "Prescription processing & e-scripts",
      "Med sync & automated refills",
      "Drug profitability analysis",
      "Integrated POS",
    ],
    stack: [".NET", "C#", "SQL Server", "REST API"],
    link: "https://www.bestrx.com",
  },
  {
    name: "GoSkills",
    category: "Education",
    field: "Learning Management (LMS)",
    accent: "#8b5cf6",
    summary:
      "A learning management and training platform with 500+ bite-sized courses plus a block-based builder for organizations to create and manage their own training.",
    features: [
      "500+ courses with certifications",
      "Custom course builder",
      "Progress & compliance tracking",
      "AI tutor & learning paths",
    ],
    stack: ["Laravel", "PHP", "MySQL", "Vue.js"],
    link: "https://www.goskills.com",
  },
  {
    name: "TutorConnect",
    category: "Education",
    field: "Tutoring Marketplace",
    accent: "#7c3aed",
    summary:
      "A student–tutor booking marketplace with scheduling, video sessions and payments that connects learners with the right tutor.",
    features: [
      "Tutor discovery & profiles",
      "Calendar-based booking",
      "Integrated video sessions",
      "Secure payments & reviews",
    ],
    stack: ["React", "Django", "PostgreSQL", "Stripe"],
    link: null,
  },
  {
    name: "TenantCloud",
    category: "Real Estate & FinTech",
    field: "Property Management Portal",
    accent: "#eab308",
    summary:
      "An all-in-one property management portal for landlords and managers to list properties, collect rent online, screen tenants and handle maintenance requests.",
    features: [
      "Online rent collection",
      "Tenant screening & background checks",
      "Listing & marketing syndication",
      "Digital leases & e-signatures",
    ],
    stack: ["Angular", "Node.js", "PostgreSQL", "Stripe"],
    link: "https://www.tenantcloud.com",
  },
  {
    name: "Billdu",
    category: "Real Estate & FinTech",
    field: "Invoicing & Payments",
    accent: "#f59e0b",
    summary:
      "An invoicing and online-payments web app for freelancers and small businesses to create invoices, quotes and estimates and accept payments with automated reminders.",
    features: [
      "Invoices, quotes & estimates",
      "Online payments (Stripe, Apple/Google Pay)",
      "Recurring billing & reminders",
      "Expense tracking & reports",
    ],
    stack: ["PHP", "Laravel", "MySQL", "Stripe"],
    link: "https://www.billdu.com",
  },
  {
    name: "Routific",
    category: "Fleet & Logistics",
    field: "Delivery Route Optimization",
    accent: "#0ea5e9",
    summary:
      "Delivery route optimization software that auto-generates efficient multi-stop driver routes, dispatches them to a mobile app and provides live tracking and customer ETAs.",
    features: [
      "Smart multi-stop route optimization",
      "Driver mobile app & dispatch",
      "Live tracking & SMS ETAs",
      "Route optimization API",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Maps API"],
    link: "https://www.routific.com",
  },
  {
    name: "GoFreight",
    category: "Fleet & Logistics",
    field: "Freight & Shipment Tracking",
    accent: "#0284c7",
    summary:
      "A cloud-based freight forwarding and shipment tracking platform for ocean and air freight — connecting tracking with documents, billing and a customer portal.",
    features: [
      "Real-time shipment tracking",
      "Ocean & air freight management",
      "AI document data extraction",
      "Customer portal & billing",
    ],
    stack: ["React", "Python", "Django", "PostgreSQL"],
    link: "https://gofreight.com",
  },
  {
    name: "Buildern",
    category: "Facility & Construction",
    field: "Construction Project Mgmt",
    accent: "#64748b",
    summary:
      "All-in-one construction project management software for builders and remodelers — covering estimating, scheduling, budgeting, billing and field/office collaboration.",
    features: [
      "Estimating & takeoffs",
      "Scheduling & task tracking",
      "Budget & change-order management",
      "Mobile field access & client portal",
    ],
    stack: ["Angular", "ASP.NET Core", "SQL Server", "Azure"],
    link: "https://buildern.com",
  },
  {
    name: "Nifty",
    category: "SaaS & Productivity",
    field: "Project & Team Productivity",
    accent: "#6366f1",
    summary:
      "A unified team project and task productivity platform combining roadmaps, tasks, docs and discussions so teams manage work without switching tools.",
    features: [
      "Kanban, list & timeline views",
      "Gantt roadmaps",
      "Team discussions & docs",
      "AI planning & reporting",
    ],
    stack: ["React", "Node.js", "MongoDB", "Redis"],
    link: "https://niftypm.com",
  },
  {
    name: "PracticePanther",
    category: "Legal",
    field: "Legal Practice Management",
    accent: "#3b82f6",
    summary:
      "Cloud-based legal case and practice management software for solo and small firms — covering matters, client intake, billing, trust accounting and client communication.",
    features: [
      "Case & matter management",
      "Legal billing & online payments",
      "Client intake automation",
      "Trust accounting & client portal",
    ],
    stack: ["React", "Ruby on Rails", "PostgreSQL", "Stripe"],
    link: "https://www.practicepanther.com",
  },
  {
    name: "DashThis",
    category: "Marketing",
    field: "Marketing Analytics",
    accent: "#ec4899",
    summary:
      "An automated marketing reporting platform that aggregates data from 30+ sources into branded, client-ready campaign analytics dashboards.",
    features: [
      "Automated multi-channel data integration",
      "Pre-built SEO/PPC/social templates",
      "White-label client dashboards",
      "Scheduled email reports",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "Redis"],
    link: "https://dashthis.com/",
  },
  {
    name: "Insense",
    category: "Marketing",
    field: "Influencer & UGC Platform",
    accent: "#db2777",
    summary:
      "An influencer-marketing and UGC platform connecting brands to a vetted creator marketplace, with automated outreach, campaign management and creator payments.",
    features: [
      "Vetted creator marketplace",
      "AI-powered influencer outreach",
      "Automated contracts & payments",
      "Meta/TikTok/Shopify integrations",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    link: "https://insense.pro/",
  },
  {
    name: "Prekindle",
    category: "Events & Ticketing",
    field: "Event Ticketing",
    accent: "#d946ef",
    summary:
      "An event ticketing and registration platform for venues, festivals and independent promoters — combining online ticket sales with built-in event marketing tools.",
    features: [
      "Online ticket sales & settlement",
      "Built-in event marketing",
      "Low commission, no upfront fees",
      "Stripe / Facebook / Spotify integrations",
    ],
    stack: ["Ruby on Rails", "PostgreSQL", "Stripe", "jQuery"],
    link: "https://www.prekindle.com/",
  },
  {
    name: "Planning Pod",
    category: "Events & Ticketing",
    field: "Venue Booking & Management",
    accent: "#c026d3",
    summary:
      "A venue management and event booking platform for event spaces, hotels and wedding venues — scheduling rooms and spaces and preventing double-bookings via a drag-and-drop calendar.",
    features: [
      "Drag-and-drop booking calendar",
      "Lead/CRM & proposal pipeline",
      "Catering & BEO management",
      "Invoicing & online payments",
    ],
    stack: ["Angular", "Java", "MySQL", "Stripe"],
    link: "https://www.planningpod.com/venue-management-software.cfm",
  },
  {
    name: "Future",
    category: "Mobile",
    field: "Fitness Coaching App",
    accent: "#f43f5e",
    summary:
      "A mobile fitness app that pairs users with a dedicated 1-on-1 personal coach who builds custom workout programs and tracks progress in-app.",
    features: [
      "Personalized 1-on-1 coaching",
      "In-app workout tracking with video cues",
      "Video coach check-ins",
      "Apple Watch / HealthKit integration",
    ],
    stack: ["Swift", "React Native", "Node.js", "HealthKit"],
    link: "https://www.future.co/",
  },
  {
    name: "ChowNow",
    category: "Mobile",
    field: "Restaurant Ordering App",
    accent: "#fb7185",
    summary:
      "A commission-free online ordering platform that gives independent restaurants their own branded ordering website and mobile apps, plus a discovery marketplace.",
    features: [
      "Branded ordering apps & websites",
      "Commission-free direct ordering",
      "20+ POS integrations",
      "Email/SMS marketing & loyalty",
    ],
    stack: ["React Native", "Python", "Django", "PostgreSQL"],
    link: "https://get.chownow.com/",
  },
];

// ------------------------------------------------------------
//  AI capabilities — "AI things we can work on"
// ------------------------------------------------------------
export const aiCapabilities = [
  {
    icon: "💬",
    title: "Multi-LLM Chatbots",
    desc: "Unified interfaces over GPT, Claude, Gemini, DeepSeek, Llama & more — with live model switching and streaming responses.",
  },
  {
    icon: "🔎",
    title: "RAG & Semantic Search",
    desc: "Retrieval-Augmented Generation with vector databases (ChromaDB) for context-aware answers over your own documents.",
  },
  {
    icon: "🗄️",
    title: "AI Data Agents (NL-to-SQL)",
    desc: "Query databases in plain English using agentic RAG, TAG and ReACT — safe, schema-aware SQL for non-technical users.",
  },
  {
    icon: "👁️",
    title: "Computer Vision",
    desc: "Object detection & OCR with YOLOv8 — damage detection, document parsing and automated visual inspection.",
  },
  {
    icon: "🎙️",
    title: "Voice AI & Real-time",
    desc: "Bidirectional voice streaming with ElevenLabs over WebSockets — real-time voice ordering and conversational agents.",
  },
  {
    icon: "📄",
    title: "Document & PDF Analysis",
    desc: "Chat with PDFs, extract insights, summarize, and automate document-heavy workflows like legal research.",
  },
  {
    icon: "🧠",
    title: "Sentiment & Content Detection",
    desc: "Sentiment tagging, plagiarism and AI-content detection, and intelligent classification pipelines.",
  },
  {
    icon: "🖼️",
    title: "AI Image Generation",
    desc: "Generate and edit images with the latest models — integrated directly into product workflows.",
  },
];

// ------------------------------------------------------------
//  Industries served (fields)
// ------------------------------------------------------------
export const industries = [
  { icon: "🏥", name: "Medical & Healthcare" },
  { icon: "🎓", name: "Education & E-Learning" },
  { icon: "💪", name: "Gym & Fitness" },
  { icon: "📊", name: "CRM & Sales" },
  { icon: "🏠", name: "Real Estate & FinTech" },
  { icon: "🚚", name: "Fleet & Logistics" },
  { icon: "🏗️", name: "Facility & Construction" },
  { icon: "⚖️", name: "Legal & Compliance" },
  { icon: "🛒", name: "E-Commerce & Food" },
  { icon: "📣", name: "Marketing & Influencer" },
  { icon: "🤖", name: "AI & Automation" },
  { icon: "🎭", name: "Events & Ticketing" },
];

// ------------------------------------------------------------
//  Experience
// ------------------------------------------------------------
export const experience = [
  {
    company: "Discord Solutions",
    role: "Full Stack Developer",
    period: "January 2021 – Present",
    points: [
      "Developed and maintained scalable server-side applications using Node.js and Nest.js for high performance and efficiency.",
      "Designed and implemented RESTful APIs using TypeScript to streamline client-server communication.",
      "Integrated MongoDB and PostgreSQL to optimize data management and system performance.",
      "Implemented secure authentication with JWT and OAuth for controlled access.",
      "Collaborated with front-end teams to ensure seamless integration between server logic and user interfaces.",
    ],
  },
  {
    company: "DexterSol",
    role: "Frontend Developer",
    period: "2019 – 2021",
    points: [
      "Developed front-end applications using React.js, React Native, Angular, TypeScript, Vue.js and Next.js.",
      "Built modular UI components to enhance scalability and maintainability.",
      "Created SPAs and optimized server-side rendering with Next.js for better performance and SEO.",
      "Implemented responsive designs for seamless experiences across devices.",
      "Conducted unit testing with Jest and debugging to ensure high-quality, reliable code.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Superior University, Lahore",
  period: "2015 – 2019",
  specialization: "Web Design & Development",
};

// ------------------------------------------------------------
//  Free 1-Day Demo offering
// ------------------------------------------------------------
export const demoSteps = [
  {
    step: "01",
    title: "Share Your Idea",
    desc: "Tell me your project, industry and the core feature you want to see. A quick 15-minute call or message is enough.",
  },
  {
    step: "02",
    title: "I Build a Live Demo",
    desc: "Within one day I design and ship a working, clickable demo — real UI, real flow, hosted on a live link you can open instantly.",
  },
  {
    step: "03",
    title: "You Review & Decide",
    desc: "Explore the demo, share feedback, and only move forward when you're confident. Zero cost, zero commitment.",
  },
];

export const demoIncludes = [
  "A live, hosted URL (not just screenshots)",
  "Responsive design — desktop, tablet & mobile",
  "Real, interactive UI matching your brand",
  "A sample core feature (e.g. dashboard, chatbot, booking)",
  "Clear plan & timeline for the full build",
  "Delivered in 1 working day — completely free",
];
