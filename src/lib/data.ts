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
  projectsCompleted: 10,
  hostedProjects: 6,
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
  { href: "#contact", label: "Contact" },
  { href: "/blog", label: "Blog" },
];

export const about = {
  summary:
    "MERN Stack Developer with experience building responsive, scalable web and mobile applications using MongoDB, Express.js, React.js, and Node.js. Skilled across frontend and backend with Next.js, TypeScript, and React Native — developing user-friendly interfaces, REST APIs, and database-backed features while collaborating in Agile teams to deliver high-quality solutions.",
  highlights: [
    "3+ years shipping production React, React Native & Node.js apps",
    "Led frontend teams and mentored juniors at Pranam Creative Solutions",
    "Healthcare (ABDM/PHR), billing, legal tech & asset-tracking domains",
    "MCA (7.18 CGPA) & BCA from G.H. Raisoni University",
  ],
  profile: [
    { label: "Profile", value: "MERN Stack Developer" },
    { label: "Domain", value: "Web & Mobile Application Development" },
    { label: "Education", value: "MCA · Master of Computer Applications" },
    { label: "Languages", value: "English, Hindi, Marathi" },
    { label: "Tools", value: "Git, GitHub, VS Code, AWS" },
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
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "REST APIs", level: 85 },
      { name: "Socket.IO", level: 75 },
    ],
  },
  {
    title: "Database & Cloud",
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "AWS (S3, EC2, CloudWatch)", level: 70 },
    ],
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
    period: "Dec 2025 — Present",
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
    role: "Sr. React JS · React Native · Node.js Developer",
    period: "Nov 2023 — Nov 2025",
    current: false,
    location: "India",
    description:
      "Led frontend development for healthcare and enterprise products — mentoring juniors, shipping reusable React/TypeScript UI, and collaborating with backend and product teams in Agile sprints.",
    achievements: [
      "Led the front-end team and mentored junior developers",
      "Designed reusable UI components with React JS, TypeScript, and Material UI",
      "Built responsive apps with REST API integration and cross-browser performance",
      "Delivered clean, documented code and participated in daily scrums",
    ],
  },
  {
    company: "Persist I.T. Solutions Pvt Ltd",
    role: "React JS Developer",
    period: "Jan 2023 — Oct 2023",
    current: false,
    location: "India",
    description:
      "Built dynamic React interfaces and contributed to Node.js/Express APIs for billing and business platforms, with AWS deployment support and Agile delivery.",
    achievements: [
      "Developed interactive UIs with React JS, Bootstrap, and Material UI",
      "Integrated REST APIs with hooks, Context API, forms, and state management",
      "Built Express middleware/APIs and used AWS S3, EC2, and CloudWatch",
      "Followed GitFlow, code reviews, and sprint-based delivery",
    ],
  },
  {
    company: "Softronix I.T. Solution Pvt Ltd",
    role: "React JS Developer (Intern)",
    period: "2022",
    current: false,
    location: "India",
    description:
      "React JS internship focused on real-world responsive interfaces and collaboration with the development team.",
    achievements: [
      "Built dynamic React components for production web projects",
      "Structured pages with HTML5, CSS3, and Bootstrap",
      "Applied Material UI for consistent, modern component design",
    ],
  },
];

export const projects = [
  {
    title: "Raddatz Law — Legal Practice Management",
    subtitle: "React JS · Legal Tech",
    description:
      "Legal practice management web application for law firm operations — secure authentication, account access, and practice workflows for administrators and staff.",
    image: "/images/raddatz-law.svg",
    tech: ["React JS", "TypeScript", "REST APIs", "Node.js"],
    liveUrl: "https://app.raddatz-law.com/",
    githubUrl: "https://github.com/SAGAR261120",
    note: null,
  },
  {
    title: "White Tail — Location & Asset Tracking",
    subtitle: "Full Stack · Mapbox · Socket.IO",
    description:
      "Real-time location and asset tracking platform with Mapbox maps, live pins/markers, Socket.IO updates, role-based admin panel, and secure REST APIs on Node.js, Express, and MongoDB.",
    image: "/images/white-tail.svg",
    tech: [
      "React JS",
      "Node.js",
      "Express",
      "MongoDB",
      "Mapbox",
      "Socket.IO",
      "TypeScript",
      "AWS",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/SAGAR261120",
    note: null,
  },
  {
    title: "Sclyte — Hospital Management",
    subtitle: "React JS · Healthcare",
    description:
      "Hospital management system for patients, appointments, and resources — reusable React UI with Material UI, Bootstrap, and Reactstrap, plus responsive UX across devices.",
    image: "/images/SmartCare_dashboard.png",
    tech: ["React JS", "Material UI", "Bootstrap", "Reactstrap", "JavaScript"],
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
    subtitle: "React JS + Node.js + AWS",
    description:
      "Billing and invoicing platform with GST/tax handling, multi-user roles, payments, reports, live location tracking, and responsive web + React Native web-view experiences.",
    image: "/images/KwickBill.png",
    tech: [
      "React JS",
      "React Native",
      "Node.js",
      "Express.js",
      "TypeScript",
      "AWS",
    ],
    liveUrl: null,
    githubUrl: "https://github.com/SAGAR261120",
    note: null,
  },
  {
    title: "ABDM — Ayushman Bharat Digital Mission",
    subtitle: "React JS · Government of India",
    description:
      "Contributed to ABDM digital health ecosystem — ABHA Health ID creation, patient verification, consent management, HIP/HIU workflows, and secure record linking per national protocols.",
    image: "/images/SmartCare_dashboard.png",
    tech: ["React JS", "JavaScript", "REST APIs", "TypeScript", "Material UI"],
    liveUrl: null,
    githubUrl: "https://github.com/SAGAR261120",
    note: "Government of India digital health project.",
  },
  {
    title: "PHR — Personal Health Record Integration",
    subtitle: "React Native + Node.js · NDHM",
    description:
      "NDHM PHR integration for secure medical records, lab reports, and prescriptions — Node.js middleware for auth/encryption and React Native flows for health data linking and verification.",
    image: "/images/patientPortal.png",
    tech: ["React Native", "Node.js", "Express.js", "REST APIs"],
    liveUrl: null,
    githubUrl: "https://github.com/SAGAR261120",
    note: "National Digital Health Mission initiative.",
  },
];

export const education = [
  {
    degree: "MCA — Master of Computer Applications",
    school: "G.H. Raisoni University",
    period: "2022 — 2024",
    score: "7.18 CGPA",
  },
  {
    degree: "BCA — Bachelor of Computer Applications",
    school: "G.H. Raisoni Institute of Information Technology",
    period: "2019 — 2022",
    score: "Completed",
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
