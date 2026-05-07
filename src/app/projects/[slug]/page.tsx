import Link from "next/link";
import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Terminal Portfolio`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const relatedProjects = projects.filter(
    (p) => p.id !== project.id && p.featured,
  );

  return (
    <div className="p-gutter md:p-margin lg:p-xl flex justify-center items-start min-h-screen">
      <div className="w-full max-w-4xl flex flex-col gap-xl">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-dim text-body-sm">
          <Link href="/projects" className="hover:text-fg transition-none">
            projects
          </Link>
          <span>&gt;</span>
          <span className="text-fg">{project.title}</span>
        </div>

        {/* Project Header */}
        <section className="border border-primary bg-surface-container-lowest">
          <div className="border-b border-primary p-xs flex justify-between items-center bg-surface-container-highest">
            <span className="font-label-xs text-label-xs text-on-surface-variant">
              ~/projects/{slug}
            </span>
            <span
              className={`font-label-xs text-label-xs px-2 py-1 border ${
                project.status === "ACTIVE"
                  ? "border-fg text-fg"
                  : "border-dim text-dim"
              }`}
            >
              [{project.status}]
            </span>
          </div>

          <div className="p-sm md:p-lg lg:p-xl space-y-lg">
            <div className="space-y-md">
              <h1 className="font-headline-xl text-headline-xl text-fg">
                &gt; {project.title}
              </h1>
              <p className="font-body-base text-body-base text-on-surface max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 text-body-sm text-on-surface-variant border-t border-dashed border-dim pt-4">
              <div>
                <span className="text-dim">Started:</span>
                <span className="text-fg ml-2">{project.startDate}</span>
              </div>
              {project.endDate && (
                <div>
                  <span className="text-dim">Completed:</span>
                  <span className="text-fg ml-2">{project.endDate}</span>
                </div>
              )}
              <div>
                <span className="text-dim">Featured:</span>
                <span className="text-fg ml-2">
                  {project.featured ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="space-y-lg">
          <div className="space-y-md">
            <h2 className="font-headline-lg text-headline-lg text-fg">
              &gt; Project Overview
            </h2>
            <div className="font-body-base text-body-base text-on-surface whitespace-pre-line leading-relaxed">
              {project.longDescription}
            </div>
          </div>

          {/* Technologies */}
          <div className="space-y-md">
            <h2 className="font-headline-lg text-headline-lg text-fg">
              &gt; Tech Stack
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <div
                  key={tech}
                  className="border border-fg px-4 py-2 text-body-sm font-body-sm hover:bg-fg hover:text-bg transition-none cursor-default"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="space-y-md">
            <h2 className="font-headline-lg text-headline-lg text-fg">
              &gt; Tags
            </h2>
            <div className="flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-label-xs font-label-xs border border-dim px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-md border-t border-dashed border-dim pt-lg">
            <h2 className="font-headline-lg text-headline-lg text-fg">
              &gt; Links
            </h2>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-fg px-6 py-3 font-label-xs text-label-xs uppercase hover:bg-fg hover:text-bg transition-none flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-[16px]">
                  code
                </span>
                View on GitHub
              </a>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-fg px-6 py-3 font-label-xs text-label-xs uppercase hover:bg-fg hover:text-bg transition-none flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    play_arrow
                  </span>
                  View Live
                </a>
              )}
            </div>
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="space-y-md border-t border-dashed border-dim pt-lg">
            <h2 className="font-headline-lg text-headline-lg text-fg">
              &gt; Related Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.slice(0, 2).map((relProject) => (
                <Link key={relProject.id} href={`/projects/${relProject.slug}`}>
                  <div className="border border-dim p-4 hover:bg-white hover:text-black transition-none cursor-pointer group">
                    <h3 className="font-headline-lg text-headline-lg text-fg group-hover:text-black mb-2">
                      {relProject.title}
                    </h3>
                    <p className="text-body-sm text-on-surface group-hover:text-black/80">
                      {relProject.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to Projects */}
        <div className="border-t border-dashed border-dim pt-lg">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-body-sm font-body-sm text-dim hover:text-fg transition-none"
          >
            <span>&lt;</span>
            Back to all projects
          </Link>
        </div>
      </div>
    </div>
  );
}
