export interface Project {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  status: "ACTIVE" | "STABLE" | "ALPHA" | "BETA" | "DEPRECATED";
  tags: string[];
  technologies: string[];
  imageUrl?: string;
  githubUrl: string;
  liveUrl?: string;
  startDate: string;
  endDate?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "ocr-app",
    title: "OCR App",
    description:
      "Optical Character Recognition application for extracting and processing text from images with high accuracy.",
    longDescription: `A powerful OCR (Optical Character Recognition) application built with modern web technologies. 
      This tool allows users to upload images and automatically extract text with high accuracy. 
      Features include image preprocessing, layout analysis, and support for multiple languages.
      Perfect for digitizing documents, scanning receipts, or extracting text from screenshots.`,
    status: "ACTIVE",
    tags: ["javascript", "web", "ml"],
    technologies: ["JavaScript", "HTML5", "Canvas API", "Tesseract.js"],
    githubUrl: "https://github.com/Leshan21/ocr-app",
    startDate: "2025-09",
    featured: true,
  },
  {
    id: "2",
    slug: "coffee-shop",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with product catalog, shopping cart, and payment integration.",
    longDescription: `A complete e-commerce solution built with TypeScript and React. 
      Features include a dynamic product catalog, shopping cart functionality, user authentication, and secure payment processing.
      The backend is built with Node.js and Express, with MongoDB for database management.
      Includes admin dashboard for managing products, orders, and inventory.`,
    status: "STABLE",
    tags: ["typescript", "react", "backend"],
    technologies: ["TypeScript", "React", "Node.js", "MongoDB", "Stripe"],
    githubUrl: "https://github.com/Leshan21/coffee-shop",
    startDate: "2025-08",
    featured: true,
  },
  {
    id: "3",
    slug: "fb-clone",
    title: "Social Media Platform",
    description:
      "Feature-rich social media platform with user authentication, posts, comments, and real-time updates.",
    longDescription: `A full-featured social media application similar to Facebook. 
      Users can create accounts, make posts, like and comment on content, follow other users, and get real-time notifications.
      Implements WebSocket for real-time messaging and updates.
      Frontend built with React and TypeScript, backend with Node.js and PostgreSQL.`,
    status: "STABLE",
    tags: ["typescript", "react", "nodejs"],
    technologies: ["TypeScript", "React", "Node.js", "PostgreSQL", "WebSocket"],
    githubUrl: "https://github.com/Leshan21/fb-clone",
    startDate: "2025-07",
    featured: true,
  },
  {
    id: "4",
    slug: "user-login",
    title: "User Authentication System",
    description:
      "Secure user authentication system with JWT tokens, password hashing, and Docker containerization.",
    longDescription: `A robust authentication system implementing industry best practices for security.
      Features include JWT token-based authentication, bcrypt password hashing, rate limiting, and csrf protection.
      Fully containerized with Docker for easy deployment and scaling.
      Includes comprehensive testing with Jest and integration tests with Docker Compose.`,
    status: "STABLE",
    tags: ["typescript", "docker", "security"],
    technologies: ["TypeScript", "Express.js", "JWT", "Docker", "PostgreSQL"],
    githubUrl: "https://github.com/Leshan21/user-login",
    startDate: "2025-06",
    featured: true,
  },
  {
    id: "5",
    slug: "dsa-compare",
    title: "DSA Comparison Tool",
    description:
      "Interactive tool for comparing and visualizing Data Structure Algorithm implementations.",
    longDescription: `An educational tool for learning and visualizing different data structure algorithms.
      Compare performance metrics, memory usage, and time complexity across different implementations.
      Interactive visualizations show step-by-step execution of algorithms.
      Great for students learning computer science fundamentals.`,
    status: "STABLE",
    tags: ["javascript", "visualization", "education"],
    technologies: ["JavaScript", "React", "D3.js", "Node.js"],
    githubUrl: "https://github.com/Leshan21/dsa-compare",
    startDate: "2025-05",
    featured: false,
  },
  {
    id: "6",
    slug: "short-video-merger",
    title: "Short Video Merger",
    description:
      "Python-based short video merging application for Linux with GUI for batch processing videos.",
    longDescription: `A desktop application for batch processing and merging short video clips.
      Built with Python and featuring a user-friendly GUI.
      Supports multiple video formats, customizable transitions, and background music.
      Optimized for Linux systems with command-line interface for automation.`,
    status: "BETA",
    tags: ["python", "video", "desktop"],
    technologies: ["Python", "FFmpeg", "PyQt", "Linux"],
    githubUrl: "https://github.com/Leshan21/short-video-merger",
    startDate: "2025-12",
    endDate: "2025-12",
    featured: false,
  },
  {
    id: "7",
    slug: "ai-automation-workflow",
    title: "AI Automation Workflow",
    description:
      "Enterprise-grade automation workflow using n8n with AI integration for intelligent task automation and data processing.",
    longDescription: `A comprehensive automation workflow system built with n8n that leverages AI capabilities for intelligent automation.
      Automates complex business processes including data extraction, API integrations, and AI-powered decision making.
      Integrates with multiple services like OpenAI, Slack, Google Sheets, and custom webhooks.
      Fully scalable and can handle real-time data processing and scheduling.
      Includes error handling, logging, and monitoring for production reliability.`,
    status: "ACTIVE",
    tags: ["n8n", "automation", "ai"],
    technologies: [
      "n8n",
      "OpenAI",
      "Webhooks",
      "API Integration",
      "Slack",
      "Google Sheets",
    ],
    githubUrl:
      "https://www.linkedin.com/posts/leshan-pasindu-918251299_ai-artificialintelligence-aiautomation-activity-7457000128474783744-zdVX",
    startDate: "2025-04",
    featured: true,
  },
  {
    id: "8",
    slug: "n8n-ai-agents",
    title: "AI Agents with n8n",
    description:
      "Intelligent AI agent workflows using n8n for autonomous decision-making and multi-step automation processes.",
    longDescription: `Advanced AI agent automation using n8n to create intelligent, autonomous workflows.
      Agents can make decisions, route tasks, and execute complex processes without manual intervention.
      Integrates with AI models for natural language processing and intelligent routing.
      Features include conditional logic, error recovery, and adaptive workflows based on AI responses.
      Perfect for customer service automation, data processing, and intelligent notification systems.`,
    status: "ACTIVE",
    tags: ["n8n", "aiagents", "automation"],
    technologies: [
      "n8n",
      "AI Models",
      "Conditional Logic",
      "Automation",
      "Intelligent Routing",
    ],
    githubUrl:
      "https://www.linkedin.com/posts/leshan-pasindu-918251299_automation-aiagents-n8n-activity-7453678318035447808-99rU",
    startDate: "2025-03",
    featured: true,
  },
  {
    id: "9",
    slug: "n8n-workflow-automation",
    title: "n8n Workflow Automation",
    description:
      "Complete workflow automation solution using n8n for seamless integration across multiple platforms and services.",
    longDescription: `A production-ready automation platform built with n8n for enterprise workflow automation.
      Connects disparate systems and automates repetitive tasks across the organization.
      Includes pre-built workflows for common business processes like email handling, data sync, and notifications.
      Features advanced error handling, retry logic, and detailed audit trails.
      Easily customizable through n8n's visual workflow builder, no coding required.
      Supports both on-premise and cloud deployment options.`,
    status: "STABLE",
    tags: ["n8n", "workflow", "automation"],
    technologies: [
      "n8n",
      "REST APIs",
      "Webhooks",
      "Database Integration",
      "Email Automation",
    ],
    githubUrl:
      "https://www.linkedin.com/posts/leshan-pasindu-918251299_ai-automation-n8n-activity-7450622115126358016-KzCj",
    startDate: "2025-02",
    featured: true,
  },
];

export const getFeaturedProjects = () => projects.filter((p) => p.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);
