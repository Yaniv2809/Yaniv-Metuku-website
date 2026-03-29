export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Yaniv Metuku",
    title: "AI-Powered QA Automation Engineer",
    tagline: "I don't just find bugs. I build automated, AI-driven safety nets that protect business revenue.",
    email: "yaniv2809@gmail.com",
    phone: "", 
    location: "Israel",
    github: "https://github.com/Yaniv2809",
    linkedin: "https://linkedin.com/in/yaniv-metuku/",
    profileImage: "/avatar.png",
    cvDownloadLink: "#" 
  },
  
  about: {
    description: "I approach quality assurance as a strategic business function, not just a checkbox. With expertise spanning API testing, CI/CD automation, and AI-powered failure analysis (using tools like Gemini and Ollama), I build testing ecosystems that catch issues before they reach production. I focus on \"Shift-Left\" methodologies, ensuring every commit transitions software from 'working' to 'bulletproof'.",
    stats: [
      { number: 120, label: "Test Cases Automated", icon: "CheckCircle", suffix: "+" },
      { number: 4, label: "Testing Layers", icon: "Layers", suffix: "" },
      { number: 97, label: "Bug Interception Rate", icon: "TrendingUp", suffix: "%" },
      { number: 3, label: "AI Tools Integrated", icon: "Bot", suffix: "" }
    ]
  },

  skills: {
    automation: ["Python", "Pytest", "Playwright", "Selenium", "Appium"],
    apiData: ["Postman", "REST APIs", "SQL", "Data Validation"],
    devops: ["GitHub Actions", "Docker", "Jenkins", "CI/CD Pipelines"],
    ai: ["Gemini API", "Local LLMs (Ollama)", "Vibe Coding", "AI Failure Analysis"],
    management: ["Jira", "Xray", "Test Strategy", "Root Cause Analysis"]
  },

  projects: [
    {
      title: "Financial Integrity Ecosystem", // Fallback example, representing atid.store or similar
      badge: "FLAGSHIP PROJECT",
      badgeColor: "cyan",
      description: "A comprehensive multi-layer test automation framework targeting financial/e-commerce applications. Implements API validation, UI automation, and deep exploratory testing with programmatic test generation.",
      techStack: ["Python", "Playwright", "Postman", "GitHub Actions", "Gemini API"],
      architectureHighlights: [
        "API Level: Deep data validation and workflow sequencing via Postman",
        "UI Level: Playwright automation for critical user journeys",
        "AI Integration: Programmatic test generation using Gemini",
        "CI/CD native pipeline execution and reporting"
      ],
      metrics: [
        { label: "Test Cases", value: "97+" },
        { label: "Bugs Intercepted", value: "12" },
        { label: "Automation", value: "100%" },
        { label: "Layers", value: "Web+API" }
      ],
      githubUrl: "https://github.com/Yaniv2809/Financial-Integrity-Ecosystem",
      diagramType: "architecture"
    },
    {
      title: "Failscope (AI Assistant)",
      badge: "PYTHON TOOL",
      badgeColor: "emerald",
      description: "A local Python utility leveraging Ollama for secure, offline data analysis and prompt engineering of test failures without compromising proprietary company code.",
      techStack: ["Python", "Ollama", "Local LLMs", "Log Parsing"],
      architectureHighlights: [
        "Local execution: Zero data leakage via offline LLM inference",
        "Smart Log Preprocessing: Cleans and structures logs before analysis",
        "Cost-Optimized: Runs purely on local hardware",
        "Generates actionable bug resolution templates"
      ],
      metrics: [
        { label: "Stage", value: "MVP" },
        { label: "Cost", value: "$0" },
        { label: "Security", value: "Offline" },
        { label: "Accuracy", value: "High" }
      ],
      githubUrl: "https://github.com/Yaniv2809",
      diagramType: "pipeline"
    }
  ],

  experience: [
    {
      date: "2024 - Present",
      title: "AI-Powered QA Engineer — Independent Portfolio",
      description: "Designing and developing production-grade automated testing frameworks targeting real-world applications (like e-commerce platforms).",
      highlights: [
        "Engineered 97+ comprehensive automated tests spanning API and UI layers.",
        "Intercepted 12 critical bugs pre-production using structured exploratory testing.",
        "Integrated modern AI tools (Gemini, Ollama) for programmatic test creation."
      ],
      type: "work" 
    },
    {
      date: "2023 - 2024",
      title: "QA & Automation Program — ATID College",
      description: "Intensive training in modern software quality assurance and test automation.",
      highlights: [
        "Mastered Python and Playwright for UI automation.",
        "Developed structured API testing methodologies using Postman.",
        "Gained deep understanding of CI/CD pipelines and Docker containerization."
      ],
      type: "education"
    }
  ],

  education: [
    {
      title: "QA & Test Automation Engineering",
      issuer: "Tech Career / ATID College",
      date: "2023-2024",
      icon: "GraduationCap",
      type: "education"
    },
    {
      title: "ISTQB Certified Tester",
      issuer: "ISTQB",
      date: "2023",
      icon: "Award",
      type: "certification"
    }
  ]
};
