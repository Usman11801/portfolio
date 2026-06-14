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
  email: "Usman11801@gmail.com",
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

  // ---- Additional client / NDA projects (rounding out each field) ----
  {
    name: "RetailCRM Suite",
    category: "CRM",
    field: "Retail Sales CRM",
    accent: "#a855f7",
    summary:
      "A retail-focused CRM that unifies customers, sales pipelines and inventory so store teams can track leads, orders and follow-ups in one place.",
    features: [
      "Customer 360 & lead pipeline",
      "Order and inventory sync",
      "Automated follow-up reminders",
      "Sales analytics dashboards",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "REST API"],
    link: null,
  },
  {
    name: "ServiceDesk CRM",
    category: "CRM",
    field: "Support & Ticketing CRM",
    accent: "#9333ea",
    summary:
      "A support-desk CRM combining ticketing, a knowledge base and a unified customer timeline so agents resolve issues faster.",
    features: [
      "Omnichannel ticket management",
      "SLA tracking & escalations",
      "Customer interaction timeline",
      "Agent performance reporting",
    ],
    stack: ["Next.js", "Nest.js", "MongoDB", "WebSockets"],
    link: null,
  },
  {
    name: "ClinicFlow",
    category: "Healthcare",
    field: "Clinic Management",
    accent: "#10b981",
    summary:
      "A clinic management platform for appointments, patient records and billing, designed to streamline front-desk and practitioner workflows.",
    features: [
      "Online appointment booking",
      "Lightweight EMR / patient records",
      "Billing & invoicing",
      "Role-based access for staff",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "JWT Auth"],
    link: null,
  },
  {
    name: "PharmaTrack",
    category: "Healthcare",
    field: "Pharmacy Inventory",
    accent: "#059669",
    summary:
      "A pharmacy inventory and prescription tracking system that keeps stock, expiry and dispensing records accurate and compliant.",
    features: [
      "Real-time stock & expiry alerts",
      "Prescription dispensing log",
      "Supplier & purchase orders",
      "Compliance-ready audit trail",
    ],
    stack: ["Angular", "Express.js", "MySQL", "REST API"],
    link: null,
  },
  {
    name: "LearnLoop LMS",
    category: "Education",
    field: "Learning Management",
    accent: "#8b5cf6",
    summary:
      "A learning management system for courses, lessons and quizzes with progress tracking for both students and instructors.",
    features: [
      "Course & lesson builder",
      "Quizzes with auto-grading",
      "Student progress tracking",
      "Certificates on completion",
    ],
    stack: ["Next.js", "Node.js", "MongoDB", "REST API"],
    link: null,
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
    name: "PropertyHub",
    category: "Real Estate & FinTech",
    field: "Property Listings Portal",
    accent: "#eab308",
    summary:
      "A real estate listings and lead-management portal where agents publish properties and capture, qualify and follow up on buyer leads.",
    features: [
      "Property listings with media galleries",
      "Map & advanced search filters",
      "Lead capture & CRM",
      "Agent dashboards",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Maps API"],
    link: null,
  },
  {
    name: "InvoicePay",
    category: "Real Estate & FinTech",
    field: "Invoicing & Payments",
    accent: "#f59e0b",
    summary:
      "An invoicing and payments dashboard for small businesses to create invoices, accept online payments and track cash flow.",
    features: [
      "Invoice creation & recurring billing",
      "Stripe online payments",
      "Cash-flow & revenue analytics",
      "Automated payment reminders",
    ],
    stack: ["React", "Express.js", "PostgreSQL", "Stripe"],
    link: null,
  },
  {
    name: "RouteWise",
    category: "Fleet & Logistics",
    field: "Delivery Route Optimization",
    accent: "#0ea5e9",
    summary:
      "A delivery route optimization platform with a driver mobile app that cuts mileage and keeps dispatchers updated in real time.",
    features: [
      "Multi-stop route optimization",
      "Driver mobile app with navigation",
      "Live delivery status updates",
      "Proof-of-delivery capture",
    ],
    stack: ["React Native", "Node.js", "MongoDB", "Maps API"],
    link: null,
  },
  {
    name: "CargoTrack",
    category: "Fleet & Logistics",
    field: "Shipment & Warehouse",
    accent: "#0284c7",
    summary:
      "A shipment tracking and warehouse management dashboard giving operations teams full visibility from inbound to delivery.",
    features: [
      "End-to-end shipment tracking",
      "Warehouse inventory & bins",
      "Barcode/QR scanning",
      "Operations KPIs & reporting",
    ],
    stack: ["React", "Nest.js", "PostgreSQL", "REST API"],
    link: null,
  },
  {
    name: "BuildSite Manager",
    category: "Facility & Construction",
    field: "Construction Project Mgmt",
    accent: "#64748b",
    summary:
      "A construction project management tool for tracking tasks, snag lists and site progress with photo documentation.",
    features: [
      "Task & milestone tracking",
      "Snag / defect lists with photos",
      "Daily site progress logs",
      "Contractor & vendor management",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "File Storage"],
    link: null,
  },
  {
    name: "TeamSync",
    category: "SaaS & Productivity",
    field: "Team Productivity SaaS",
    accent: "#6366f1",
    summary:
      "A team productivity SaaS combining task boards, time tracking and lightweight messaging to keep distributed teams aligned.",
    features: [
      "Kanban task boards",
      "Time tracking & timesheets",
      "Team chat & mentions",
      "Workspace analytics",
    ],
    stack: ["Next.js", "Nest.js", "MongoDB", "WebSockets"],
    link: null,
  },
  {
    name: "CaseFile",
    category: "Legal",
    field: "Legal Case Management",
    accent: "#3b82f6",
    summary:
      "A legal case and document management system that organizes matters, deadlines and client documents for small law firms.",
    features: [
      "Matter & case tracking",
      "Document management & versioning",
      "Deadline & hearing reminders",
      "Client & billing records",
    ],
    stack: ["React", "Django", "PostgreSQL", "File Storage"],
    link: null,
  },
  {
    name: "CampaignIQ",
    category: "Marketing",
    field: "Campaign Analytics",
    accent: "#ec4899",
    summary:
      "A multi-channel marketing analytics dashboard that unifies ad, email and social metrics with AI-generated performance insights.",
    features: [
      "Unified multi-channel metrics",
      "AI-generated insights & summaries",
      "Custom KPI dashboards",
      "Automated reports",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "AI / LLM"],
    link: null,
  },
  {
    name: "InfluenceHub",
    category: "Marketing",
    field: "Influencer Outreach CRM",
    accent: "#db2777",
    summary:
      "An influencer outreach and tracking CRM for brands to discover creators, manage campaigns and measure ROI.",
    features: [
      "Creator discovery & profiles",
      "Outreach & collaboration pipeline",
      "Campaign tracking & ROI",
      "Contract & payout management",
    ],
    stack: ["React", "Express.js", "MongoDB", "REST API"],
    link: null,
  },
  {
    name: "EventGo",
    category: "Events & Ticketing",
    field: "Event Ticketing",
    accent: "#d946ef",
    summary:
      "An event ticketing and check-in platform where organizers sell tickets, scan QR codes at the door and track attendance live.",
    features: [
      "Online ticket sales (Stripe)",
      "QR-code check-in app",
      "Live attendance dashboard",
      "Promo codes & tiers",
    ],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
    link: null,
  },
  {
    name: "VenueBook",
    category: "Events & Ticketing",
    field: "Venue Booking",
    accent: "#c026d3",
    summary:
      "A venue booking and scheduling system that lets clients check availability, reserve spaces and pay deposits online.",
    features: [
      "Real-time availability calendar",
      "Online reservations & deposits",
      "Resource & staff scheduling",
      "Automated confirmations",
    ],
    stack: ["React", "Nest.js", "PostgreSQL", "Stripe"],
    link: null,
  },
  {
    name: "FitTrack",
    category: "Mobile",
    field: "Gym & Fitness App",
    accent: "#f43f5e",
    summary:
      "A fitness and workout tracking mobile app with custom plans, progress charts and gym class scheduling for members and trainers.",
    features: [
      "Custom workout & nutrition plans",
      "Progress charts & streaks",
      "Gym class booking",
      "Trainer–member messaging",
    ],
    stack: ["React Native", "Node.js", "MongoDB", "Push Notifications"],
    link: null,
  },
  {
    name: "FoodieGo",
    category: "Mobile",
    field: "Food Delivery App",
    accent: "#fb7185",
    summary:
      "A food delivery solution with customer and driver apps, live order tracking and restaurant order management.",
    features: [
      "Browse menus & place orders",
      "Live order & driver tracking",
      "Driver delivery app",
      "Restaurant order dashboard",
    ],
    stack: ["React Native", "Express.js", "PostgreSQL", "Real-time APIs"],
    link: null,
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
