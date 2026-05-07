import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center p-gutter md:p-margin lg:p-xl">
      <div className="w-full max-w-2xl border border-primary bg-surface-container-lowest">
        <div className="border-b border-primary p-xs flex justify-between items-center bg-surface-container-highest">
          <span className="font-label-xs text-label-xs text-on-surface-variant">
            ~/errors/404.log
          </span>
          <span className="font-label-xs text-label-xs text-on-surface-variant">
            [NOT FOUND]
          </span>
        </div>
        <div className="p-sm md:p-lg lg:p-xl space-y-lg">
          <h1 className="font-headline-xl text-headline-xl text-fg">
            &gt; 404
          </h1>
          <p className="font-body-base text-body-base text-on-surface max-w-xl">
            The requested page could not be found in this portfolio filesystem.
            Check the path or return to the projects index.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="border border-fg px-6 py-3 font-label-xs text-label-xs uppercase hover:bg-fg hover:text-bg transition-none text-center"
            >
              return home
            </Link>
            <Link
              href="/projects"
              className="border border-fg px-6 py-3 font-label-xs text-label-xs uppercase hover:bg-fg hover:text-bg transition-none text-center"
            >
              browse projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
