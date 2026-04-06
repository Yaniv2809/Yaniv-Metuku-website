export const PORTFOLIO_DATA = {
  personalInfo: {
    name: "Yaniv Metuku",
    title: "AI-Powered QA Automation Engineer",
    tagline: "2 PyPI packages shipped. 53 automated tests across 4 layers. AI-powered failure analysis built in. All before my first full-time QA role.",
    email: "yaniv2809@gmail.com",
    phone: "",
    location: "Israel",
    github: "https://github.com/Yaniv2809",
    linkedin: "https://www.linkedin.com/in/yaniv-metuku/",
    profileImage: "/avatar.png",
    cvDownloadLink: "/Yaniv-Metuku-CV.pdf"
  },

  about: {
    description: "I approach quality assurance as a strategic business function, not just a checkbox. With expertise spanning API testing, CI/CD automation, and AI-powered failure analysis (using Groq LLM), I build testing ecosystems that catch issues before they reach production. I focus on \"Shift-Left\" methodologies, ensuring every commit transitions software from 'working' to 'bulletproof'.",
    stats: [
      { number: 120, label: "Test Cases Automated", icon: "CheckCircle", suffix: "+" },
      { number: 4, label: "Testing Layers", icon: "Layers", suffix: "" },
      { number: 97, label: "Bug Interception Rate", icon: "TrendingUp", suffix: "%" },
      { number: 3, label: "AI Tools Integrated", icon: "Bot", suffix: "" }
    ]
  },

  skills: {
    automation: ["Python", "Pytest", "Playwright", "Selenium", "Appium"],
    apiData: ["Postman", "REST APIs", "SQL", "MySQL", "MongoDB", "Data Validation"],
    devops: ["GitHub Actions", "Docker", "Jenkins", "CI/CD Pipelines"],
    ai: ["Groq API", "Local LLMs (Ollama)", "Prompt Engineering", "AI Failure Analysis"],
    management: ["Jira", "Xray", "Test Strategy", "Root Cause Analysis"]
  },

  projects: [
    {
      title: "Financial Integrity Ecosystem",
      badge: "FLAGSHIP PROJECT",
      badgeColor: "cyan",
      description: "End-to-end test automation framework that mathematically proves data integrity across a financial system (Expense Tracker) — validating that data entered via the UI arrives intact in the database. Not just status 200. Built solo: architecture, design, and execution.",
      techStack: ["Python", "Pytest", "Playwright", "Appium", "Flask", "MySQL", "Docker", "GitHub Actions", "Allure", "Groq AI"],
      architectureHighlights: [
        "4-Layer coverage: Web (Playwright), API (Flask+Requests), Mobile (Appium/UiAutomator2), Database (MySQL+SQLite)",
        "Set Theory validation: new_set - old_set = exact record added — mathematical proof of data completeness",
        "AI Failure Analysis: automatic root-cause analysis on every test failure via Groq LLM",
        "DDT: Data-Driven Testing with external CSV + JSON — zero hardcoded values",
        "CI/CD: GitHub Actions → Allure Reports → GitHub Pages",
        "Mobile tested on a real physical device — not an emulator"
      ],
      metrics: [
        { label: "Automated Tests", value: "53" },
        { label: "Test Layers", value: "4" },
        { label: "Bugs Found", value: "3" },
        { label: "Test Files", value: "9" }
      ],
      githubUrl: "https://github.com/Yaniv2809/Financial-Integrity-Ecosystem",
      allureUrl: "https://yaniv2809.github.io/Financial-Integrity-Ecosystem/",
      diagramType: "architecture"
    },
    {
      title: "Failscope",
      badge: "PyPI PACKAGE",
      badgeColor: "emerald",
      description: "A published PyPI package (v0.1.1) that auto-analyzes test failures using a dual-agent AI pipeline powered by Groq/Llama. Reads pytest logs, classifies failure type, and generates structured bug reports — all from a single CLI command.",
      techStack: ["Python", "Groq API", "Llama", "Dual-Agent Pipeline", "PyPI", "Log Parsing", "CLI"],
      architectureHighlights: [
        "Dual-agent pipeline: Agent 1 classifies failure type, Agent 2 generates actionable resolution",
        "Published to PyPI v0.1.1 — installable via pip install failscope",
        "Smart Log Preprocessing: Cleans and structures pytest logs before LLM analysis",
        "Zero data leakage option: supports local Ollama for offline inference",
        "Generates structured bug report templates ready to paste into Jira"
      ],
      metrics: [
        { label: "PyPI Version", value: "v0.1.1" },
        { label: "LLM Backend", value: "Groq" },
        { label: "Agents", value: "2" },
        { label: "Install", value: "pip" }
      ],
      githubUrl: "https://github.com/Yaniv2809/Failscope",
      pypiUrl: "https://pypi.org/project/failscope/",
      diagramType: "pipeline"
    },
    {
      title: "TestAxiom",
      badge: "PyPI PACKAGE",
      badgeColor: "violet",
      description: "A published Python testing utility package on PyPI. Built to streamline test assertion patterns and reduce boilerplate in Pytest-based automation projects — making test code cleaner, more readable, and easier to maintain.",
      techStack: ["Python", "Pytest", "PyPI", "Test Utilities"],
      architectureHighlights: [
        "Published to PyPI — installable via pip install testaxiom",
        "Reduces assertion boilerplate across Pytest test suites",
        "Designed for integration with existing automation frameworks",
        "Complements Playwright and Requests-based test layers"
      ],
      metrics: [
        { label: "Platform", value: "PyPI" },
        { label: "Language", value: "Python" },
        { label: "Type", value: "Utility" },
        { label: "Install", value: "pip" }
      ],
      githubUrl: "https://github.com/Yaniv2809/TestAxiom",
      pypiUrl: "https://pypi.org/project/testaxiom/",
      diagramType: "pipeline"
    }
  ],

  experience: [
    {
      date: "2020 – 2022",
      title: "Planner & Logistics Controller(Deputy Team Lead)",
      company: "IDF — Masha 7200",
      description: "Managed end-to-end inventory processes in a mission-critical military environment using SAP ERP.",
      highlights: [
        "Owned data integrity for mission-critical inventory — identified and resolved discrepancies in real-time.",
        "Coordinated with suppliers and production teams under strict operational deadlines.",
        "Maintained 100% accountability across high-value asset tracking using SAP ERP."
      ],
      type: "work"
    },
    {
      date: "2024 – 2025",
      title: "Operations & Logistics Specialist",
      company: "Various Companies (Manpower)",
      description: "Executed logistics and inventory operations with high attention to detail and process discipline.",
      highlights: [
        "Demonstrated consistency and reliability across multiple high-throughput environments.",
        "Applied structured process thinking from industrial management background."
      ],
      type: "work"
    },
    {
      date: "2024 – 2025",
      title: "QA Automation & AI Bootcamp",
      company: "Tech-Career",
      description: "Intensive 800+ hour program covering Manual Testing, Automation, and AI-assisted QA.",
      highlights: [
        "Built a comprehensive E2E test automation framework using Python (OOP), Pytest, and Playwright.",
        "Designed and executed REST API tests with Postman and integrated database validation via SQL.",
        "Managed test artifacts, bug lifecycle, and documentation in an Agile environment (Jira, Xray)."
      ],
      type: "education"
    },
    {
      date: "2018 – 2020",
      title: "P.E. Industrial Management",
      company: "The Joint College",
      description: "Practical Engineering degree specializing in Operations Management and Information Systems.",
      highlights: [
        "Specialization in Operations Management and Information Systems.",
        "Strong foundation in process optimization and data-driven decision-making."
      ],
      type: "education"
    }
  ],

  education: [
    {
      title: "QA Automation & AI Bootcamp",
      issuer: "Tech-Career",
      date: "2024–2025",
      icon: "GraduationCap",
      type: "education"
    },
    {
      title: "P.E. Industrial Management",
      issuer: "The Joint College",
      date: "2018–2020",
      icon: "GraduationCap",
      type: "education"
    }
  ]
};
