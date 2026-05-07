export default function About() {
  return (
    <div className="p-gutter md:p-margin lg:p-xl flex justify-center items-start min-h-screen">
      <div className="w-full max-w-4xl border border-primary bg-surface-container-lowest">
        {/* Window Chrome */}
        <div className="border-b border-primary p-xs flex justify-between items-center bg-surface-container-highest">
          <span className="font-label-xs text-label-xs text-on-surface-variant">
            ~/content/about.md
          </span>
          <span className="font-label-xs text-label-xs text-on-surface-variant">
            [READ ONLY]
          </span>
        </div>

        {/* Content */}
        <div className="p-sm md:p-lg lg:p-xl space-y-xl">
          {/* Intro Section */}
          <section className="space-y-md">
            <h1 className="font-headline-xl text-headline-xl text-fg">
              &gt; whoami
            </h1>
            <div className="font-body-base text-body-base text-on-surface space-y-xs">
              <p>
                Leshan Pasindu Nethmina | Computer Science Undergraduate at
                Eastern University, Trincomalee Campus, Sri Lanka.
              </p>
              <p>
                Passionate about web development and building user-friendly
                applications. Actively learning full-stack development with
                React, TypeScript, Node.js, and Docker. Committed to writing
                clean, efficient code and collaborating on open-source projects.
              </p>
            </div>
          </section>

          <hr className="border-t border-dashed border-dim" />

          {/* Core Directives Section */}
          <section className="space-y-md">
            <h2 className="font-headline-lg text-headline-lg text-fg">
              &gt; cat directives.txt
            </h2>
            <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-unit list-none">
              <li>
                - Build: Creating responsive, dynamic web applications that
                users love.
              </li>
              <li>
                - Learn: Mastering modern web technologies and best practices.
              </li>
              <li>
                - Collaborate: Contributing to open-source and working with
                amazing teams.
              </li>
              <li>
                - Solve: Tackling real-world problems with elegant code
                solutions.
              </li>
            </ul>
          </section>

          <hr className="border-t border-dashed border-dim" />

          {/* Skills Section (JSON) */}
          <section className="space-y-md">
            <h2 className="font-headline-lg text-headline-lg text-fg">
              &gt; cat skills.json
            </h2>
            <div className="border border-outline bg-bg p-sm overflow-x-auto">
              <pre className="font-body-sm text-body-sm text-on-surface m-0 leading-relaxed">
                <code>{`{
  "languages": [
    "JavaScript",
    "TypeScript",
    "Python",
    "HTML/CSS"
  ],
  "frontend": {
    "frameworks": ["React", "Next.js"],
    "styling": ["TailwindCSS", "CSS", "Material UI"],
    "tools": ["React Router", "State Management"]
  },
  "backend": [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL"
  ],
  "automation": [
    "n8n",
    "Workflow Automation",
    "AI Agents",
    "API Integration",
    "Webhook Design"
  ],
  "ai_ml": [
    "OpenAI Integration",
    "AI Automation",
    "Intelligent Routing",
    "LLM Workflows"
  ],
  "devops": [
    "Docker",
    "Git",
    "Testing Frameworks"
  ],
  "education": "B.Sc CS Undergraduate, Eastern University, Sri Lanka",
  "status": "Always Learning & Growing"
}`}</code>
              </pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
