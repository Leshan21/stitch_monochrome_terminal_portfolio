"use client";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "OCR App",
      directory: "./ocr-app",
      description:
        "Optical Character Recognition application for extracting and processing text from images with high accuracy.",
      status: "[ACTIVE]",
      tags: ["javascript", "web", "ml"],
      links: [{ label: "code", icon: "code" }],
      url: "https://github.com/Leshan21/ocr-app",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      directory: "./coffee-shop",
      description:
        "Full-stack e-commerce application with product catalog, shopping cart, and payment integration.",
      status: "[ACTIVE]",
      tags: ["typescript", "react", "backend"],
      links: [{ label: "code", icon: "code" }],
      url: "https://github.com/Leshan21/coffee-shop",
    },
    {
      id: 3,
      title: "Social Media Clone",
      directory: "./fb-clone",
      description:
        "Feature-rich social media platform with user authentication, posts, comments, and real-time updates.",
      status: "[STABLE]",
      tags: ["typescript", "react", "nodejs"],
      links: [{ label: "view", icon: "play_arrow" }],
      url: "https://github.com/Leshan21/fb-clone",
    },
    {
      id: 4,
      title: "User Auth System",
      directory: "./user-login",
      description:
        "Secure user authentication system with JWT tokens, password hashing, and Docker containerization.",
      status: "[STABLE]",
      tags: ["typescript", "docker", "security"],
      links: [{ label: "secure", icon: "lock" }],
      url: "https://github.com/Leshan21/user-login",
    },
  ];

  const techStack = [
    { category: "[LANG]", name: "JavaScript" },
    { category: "[LANG]", name: "TypeScript" },
    { category: "[LANG]", name: "Python" },
    { category: "[FRAMEWORK]", name: "React" },
    { category: "[FRAMEWORK]", name: "Next.js" },
    { category: "[BACKEND]", name: "Node.js" },
    { category: "[AUTOMATION]", name: "n8n" },
    { category: "[AUTOMATION]", name: "Workflow" },
    { category: "[AI]", name: "OpenAI" },
    { category: "[DB]", name: "MongoDB" },
    { category: "[DB]", name: "PostgreSQL" },
    { category: "[TOOLS]", name: "Docker" },
  ];

  return (
    <div className="p-gutter md:p-margin lg:p-xl flex justify-center items-start min-h-screen">
      <div className="w-full max-w-5xl flex flex-col gap-xl">
        {/* Hero Section */}
        <section className="border border-primary bg-surface-container-lowest">
          <div className="border-b border-primary p-xs flex justify-between items-center bg-surface-container-highest">
            <span className="font-label-xs text-label-xs text-on-surface-variant">
              bash - 80x24
            </span>
            <div className="flex gap-2">
              <span className="w-3 h-3 border border-dim inline-block"></span>
              <span className="w-3 h-3 border border-dim inline-block"></span>
              <span className="w-3 h-3 border border-dim inline-block"></span>
            </div>
          </div>
          <div className="p-sm md:p-lg lg:p-xl space-y-lg">
            <div className="flex gap-2">
              <span className="text-dim">guest@system:~$</span>
              <span>whoami</span>
            </div>
            <div className="pl-4 border-l border-dashed border-dim pb-4 space-y-md">
              <h1 className="font-headline-xl text-headline-xl text-fg">
                FULL STACK DEVELOPER
              </h1>
              <p className="font-body-base text-body-base text-surface-tint max-w-2xl">
                Building high-performance systems with brutalist efficiency.
                Specializing in command-line interfaces, robust backends, and
                terminal-DNA web applications.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="text-dim">guest@system:~$</span>
              <span className="animate-blink bg-white w-2 h-5 inline-block"></span>
            </div>
          </div>
        </section>

        {/* Stack Section */}
        <section className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-dim">
            /* TECH_STACK */
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="border border-white p-4 hover:bg-white hover:text-black transition-none cursor-pointer flex flex-col items-center justify-center gap-2"
              >
                <span className="font-label-xs text-label-xs">
                  {tech.category}
                </span>
                <span className="font-body-base text-body-base">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-dim">
            /* RECENT_COMMITS */
          </h2>
          <div className="border border-white overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white bg-surface-container-lowest">
                  <th className="p-4 font-label-xs text-label-xs text-dim uppercase">
                    Repository
                  </th>
                  <th className="p-4 font-label-xs text-label-xs text-dim uppercase">
                    Status
                  </th>
                  <th className="p-4 font-label-xs text-label-xs text-dim uppercase hidden md:table-cell">
                    Stack
                  </th>
                  <th className="p-4 font-label-xs text-label-xs text-dim uppercase text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr
                    key={project.id}
                    className="border-b border-dashed border-dim hover:bg-white hover:text-black group transition-none"
                  >
                    <td className="p-4 font-body-base text-body-base">
                      &gt; {project.directory.slice(2)}
                    </td>
                    <td className="p-4 font-body-sm text-body-sm text-surface-tint group-hover:text-black">
                      {project.status}
                    </td>
                    <td className="p-4 font-body-sm text-body-sm hidden md:table-cell text-surface-tint group-hover:text-black">
                      {project.tags.slice(0, 2).join(", ")}
                    </td>
                    <td className="p-4 text-right">
                      <a
                        href="#"
                        className="inline-block border border-white group-hover:border-black px-2 py-1 text-label-xs font-label-xs uppercase hover:bg-black hover:text-white"
                      >
                        View
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-md">
          <h2 className="font-headline-lg text-headline-lg text-dim">
            /* ESTABLISH_CONNECTION */
          </h2>
          <form className="border border-white p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-label-xs text-label-xs text-dim"
              >
                INPUT_EMAIL:
              </label>
              <div className="flex items-center border border-white px-3 py-2 bg-black focus-within:bg-white focus-within:text-black transition-none group">
                <span className="mr-2 text-dim group-focus-within:text-black">
                  &gt;
                </span>
                <input
                  id="email"
                  type="email"
                  placeholder="user@domain.com_"
                  className="bg-transparent border-none outline-none w-full font-body-base text-body-base text-white group-focus-within:text-black placeholder-dim focus:ring-0 p-0"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-label-xs text-label-xs text-dim"
              >
                PAYLOAD:
              </label>
              <div className="flex items-start border border-white px-3 py-2 bg-black focus-within:bg-white focus-within:text-black transition-none group">
                <span className="mr-2 mt-1 text-dim group-focus-within:text-black">
                  &gt;
                </span>
                <textarea
                  id="message"
                  placeholder="Enter message body..."
                  rows={4}
                  className="bg-transparent border-none outline-none w-full font-body-base text-body-base text-white group-focus-within:text-black placeholder-dim focus:ring-0 p-0 resize-none"
                />
              </div>
            </div>
            <button
              type="submit"
              className="border border-white py-3 px-6 hover:bg-white hover:text-black transition-none font-label-xs text-label-xs uppercase self-start flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[16px]">
                send
              </span>
              send_payload
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}
