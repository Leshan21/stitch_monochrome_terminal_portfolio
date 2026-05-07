import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black text-white font-space-grotesk text-[10px] tracking-widest uppercase border-t border-solid border-white w-full flex flex-col md:flex-row justify-between items-center p-6 gap-4 mt-auto">
      <div className="text-white font-mono">SYSTEM_STABLE_V1.0.0</div>
      <div className="flex gap-4">
        <Link
          className="text-white/70 hover:text-white hover:underline transition-none"
          href="#"
        >
          github
        </Link>
        <Link
          className="text-white/70 hover:text-white hover:underline transition-none"
          href="#"
        >
          linkedin
        </Link>
        <Link
          className="text-white/70 hover:text-white hover:underline transition-none"
          href="#"
        >
          source_code
        </Link>
      </div>
    </footer>
  );
}
