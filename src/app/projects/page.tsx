import Link from "next/link";
import { projects } from "@/data/projects";

export const metadata = {
  title: "Projects - Terminal Portfolio",
  description: "My featured projects and work showcase",
};

export default function ProjectsPage() {
  return (
    <div className="p-gutter md:p-margin lg:p-xl flex justify-center items-start min-h-screen">
      <div className="w-full max-w-5xl flex flex-col gap-xl">
        {/* Page Header */}
        <section className="border-l-2 border-fg pl-6 ml-2 space-y-md">
          <h1 className="font-headline-xl text-headline-xl text-fg">
            <span className="text-dim">$</span> ls -la ./projects
          </h1>
          <p className="font-body-base text-body-base text-on-surface max-w-3xl">
            A collection of my featured projects showcasing full-stack
            development, web technologies, and problem-solving skills. Click on
            any project to read the detailed breakdown.
          </p>
        </section>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.slug}`}>
              <article className="border border-fg flex flex-col h-full bg-bg group hover:bg-fg hover:text-bg transition-none cursor-pointer">
                {/* Window Chrome Title Bar */}
                <div className="border-b border-fg px-3 py-2 flex justify-between items-center bg-bg group-hover:bg-fg group-hover:text-bg transition-none">
                  <span className="text-label-xs font-label-xs tracking-widest">
                    {project.featured ? "[FEATURED]" : "[PROJECT]"}
                  </span>
                  <span className="text-label-xs font-label-xs">
                    ./{project.slug}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex flex-col flex-grow gap-6">
                  <div className="space-y-2">
                    <h2 className="text-headline-lg font-headline-lg flex items-center gap-2">
                      <span className="text-dim group-hover:text-bg">&gt;</span>{" "}
                      {project.title}
                    </h2>
                    <p className="text-body-sm font-body-sm text-on-surface group-hover:text-bg/80">
                      {project.description}
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-label-xs font-label-xs px-2 py-1 border ${
                        project.status === "ACTIVE"
                          ? "border-fg group-hover:border-bg"
                          : "border-dim group-hover:border-bg"
                      }`}
                    >
                      [{project.status}]
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-label-xs font-label-xs border border-dim group-hover:border-bg px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Footer Action */}
                  <div className="border-t border-dashed border-dim pt-4 mt-auto flex gap-2">
                    <span className="text-body-sm font-body-sm text-dim group-hover:text-bg/60">
                      Read more →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Stats Section */}
        <section className="border border-dim border-dashed p-6 space-y-4">
          <h2 className="font-headline-lg text-headline-lg text-dim">
            {"/* PROJECT_STATS */"}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col gap-2">
              <span className="text-body-sm font-body-sm text-dim">
                Total Projects
              </span>
              <span className="text-headline-lg font-headline-lg text-fg">
                {projects.length}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-body-sm font-body-sm text-dim">
                Featured
              </span>
              <span className="text-headline-lg font-headline-lg text-fg">
                {projects.filter((p) => p.featured).length}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-body-sm font-body-sm text-dim">Active</span>
              <span className="text-headline-lg font-headline-lg text-fg">
                {projects.filter((p) => p.status === "ACTIVE").length}
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
