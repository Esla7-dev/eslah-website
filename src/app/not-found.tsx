import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-8 py-24">
      <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 p-10">
        <div className="text-sm text-white/50">404</div>
        <h1 className="mt-3 text-3xl font-light">Page not found</h1>
        <p className="mt-3 text-white/60">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link href="/" className="bg-white text-black px-6 py-3 rounded text-sm text-center">
            Go home
          </Link>
          <Link href="/projects" className="border border-white/20 px-6 py-3 rounded text-sm text-center">
            View projects
          </Link>
        </div>
      </div>
    </section>
  );
}
