export const siteConfig = {
  name: "Sagar Sengar",
  fullName: "Sagar Rajput (Sagar Sengar)",
  title:
    "MERN Stack Developer | React JS | React Native | Next.js | Node.js Developer",
  shortTitle: "MERN Stack Developer",
  location: "Nagpur, India",
  email: "sagarssengar@gmail.com",
  phone: "+91 7709699260",
  resumeUrl:
    "https://drive.google.com/file/d/17idXEienv8J5V4tQKdjBfqqm-cJ3mvQh/view?usp=drive_link",
  github: "https://github.com/SAGAR261120",
  githubUsername: "SAGAR261120",
  linkedin: "https://www.linkedin.com/in/sagar-sengar-688a52230/",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://sagar261120.github.io/My_portfolio",
  yearsExperience: 3,
  projectsCompleted: 8,
  hostedProjects: 5,
};

export const typingTexts = [
  "React JS",
  "Next.js",
  "React Native",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "MERN Stack Developer",
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#github", label: "GitHub" },
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export const about = {
  summary:
    "MERN stack developer with 3+ years of professional experience building scalable web and mobile applications. Currently at Skyestone AI Tech Pvt Ltd, with prior roles at Pranam Creative Solutions and Persist IT Solutions delivering products across healthcare, logistics, and billing. Strong foundation in React, Next.js, React Native, Node.js, and MongoDB — focused on clean UI/UX, reusable architecture, and production-ready delivery.",
  highlights: [
    "3+ years shipping production React & React Native apps",
    "End-to-end MERN ownership: UI, APIs, and MongoDB",
    "Healthcare, billing, and logistics domain experience",
    "MCA (2024) & BCA (2022) from G.H. Raisoni University",
  ],
  profile: [
    { label: "Profile", value: "MERN Stack Developer" },
    { label: "Domain", value: "Web & Mobile Application Development" },
    { label: "Education", value: "MCA · Master of Computer Applications" },
    { label: "Languages", value: "English, Hindi, Marathi" },
    { label: "Tools", value: "Git, GitHub, VS Code" },
    { label: "Interests", value: "Traveling, Trading" },
  ],
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React JS", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "TypeScript", level: 80 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "Material UI", level: 90 },
      { name: "Bootstrap", level: 90 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 75 },
      { name: "REST APIs", level: 80 },
    ],
  },
  {
    title: "Database",
    skills: [{ name: "MongoDB", level: 75 }],
  },
  {
    title: "Mobile",
    skills: [
      { name: "React Native", level: 85 },
      { name: "Android Development", level: 70 },
      { name: "iOS Development", level: 65 },
    ],
  },
];

export const experience = [
  {
    company: "Skyestone AI Tech Pvt Ltd",
    role: "MERN Stack Developer",
    period: "2025 — Present",
    current: true,
    location: "India",
    description:
      "Building AI-powered product experiences with React, Next.js, and Node.js. Owning feature delivery across frontend interfaces and backend APIs with a focus on performance and maintainable architecture.",
    achievements: [
      "Developing scalable MERN features for production AI products",
      "Shipping responsive React and Next.js interfaces with TypeScript",
      "Collaborating on REST API design and MongoDB data models",
    ],
  },
  {
    company: "Pranam Creative Solutions Pvt Ltd",
    role: "MERN Stack Developer · React JS / React Native",
    period: "Nov 2023 — 2025",
    current: false,
    location: "India",
    description:
      "Led UI development for Sclyte, a hospital management platform — reusable React components, Material UI, Bootstrap, and React Native modules for clinical and admin workflows.",
    achievements: [
      "Built modular React UI for patient, appointment, and resource management",
      "Improved UI/UX for cross-device clinical and administrative tasks",
      "Delivered responsive, maintainable components used across Sclyte modules",
    ],
  },
  {
    company: "Persist IT Solutions",
    role: "MERN Stack Developer · React / Node.js",
    period: "Jan 2023 — Oct 2023",
    current: false,
    location: "India",
    description:
      "Developed Kwick Bill, an advanced billing and resource management system spanning React frontend and Node.js / Express backend with GST, roles, and inventory flows.",
    achievements: [
      "Built full-stack billing modules with React, Node.js, and Express",
      "Implemented GST calculations, multi-user roles, and invoice workflows",
      "Added real-time location tracking and responsive cross-device UI",
    ],
  },
  {
    company: "Softronix IT Solutions",
    role: "Front-End Web Developer (Intern)",
    period: "Jul 2022 — Dec 2022",
    current: false,
    location: "India",
    description:
      "Six-month React JS internship focused on real-world responsive interfaces and collaboration with the development team.",
    achievements: [
      "Built dynamic React components for production web projects",
      "Structured pages with HTML5, CSS3, and Bootstrap",
      "Applied Material UI for consistent, modern component design",
    ],
  },
];

export const projects = [
  {
    title: "Sclyte — Hospital Management",
    subtitle: "React JS · Healthcare",
    description:
      "Comprehensive hospital management software for patients, appointments, doctors, GST billing, and invoice printing — built with reusable React components and a responsive admin experience.",
    image: "/images/SmartCare_dashboard.png",
    tech: ["React JS", "Material UI", "Bootstrap", "Reactstrap"],
    liveUrl: "https://airbnb-project-by6x.onrender.com/listings",
    githubUrl: "https://github.com/SAGAR261120",
    note: "Login credentials required — contact me for access.",
  },
  {
    title: "Patient Portal",
    subtitle: "React JS + React Native",
    description:
      "Patient-facing platform to book doctor appointments, join scheduled video calls, and pay securely via Razorpay — available on web and mobile.",
    image: "/images/patientPortal.png",
    tech: ["React JS", "React Native", "Razorpay", "REST APIs"],
    liveUrl: "https://employee-app-1.onrender.com",
    githubUrl: "https://github.com/SAGAR261120",
    note: "Book appointments after login; register the patient if prompted.",
  },
  {
    title: "Kwick Bill — Billing Software",
    subtitle: "React JS + Node.js",
    description:
      "Feature-rich billing and invoicing system for customers, products, discounts, GST, reports, and downloadable invoices with an intuitive dashboard.",
    image: "/images/KwickBill.png",
    tech: ["React JS", "Node.js", "Express.js", "MongoDB"],
    liveUrl: null,
    githubUrl: "https://github.com/SAGAR261120",
    note: null,
  },
];

export const education = [
  {
    degree: "MCA — Master of Computer Applications",
    school: "G.H. Raisoni Institute of Information Technology",
    period: "2022 — 2024",
    score: "75.00%",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "G.H. Raisoni Institute of Information Technology",
    period: "2019 — 2022",
    score: "70.59%",
  },
];

export const certifications = [
  {
    title: "MERN Stack Internship Certificate",
    issuer: "Softronix IT Solutions",
    image: "/images/softronix.png",
    url: "https://drive.google.com/file/d/1369_D1nmN9slx0aIk5MXnxUHEqn6IrcX/view?usp=drive_link",
  },
];

export const services = [
  {
    title: "React Development",
    description:
      "Reusable, performant React applications with modern component architecture and polished UX.",
    icon: "Code2",
  },
  {
    title: "Next.js Development",
    description:
      "SEO-ready, server-rendered Next.js apps with App Router, optimized assets, and production deployment.",
    icon: "Globe",
  },
  {
    title: "MERN Stack Development",
    description:
      "Full-stack solutions with React, Node.js, Express, and MongoDB — from API design to deployable UI.",
    icon: "Layers",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform React Native apps for Android and iOS with shared business logic and native feel.",
    icon: "Smartphone",
  },
  {
    title: "API Development",
    description:
      "Secure REST APIs with Express.js, authentication patterns, and clean integration with frontend clients.",
    icon: "Server",
  },
];
