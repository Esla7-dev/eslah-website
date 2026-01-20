import ServicesGrid from "@/components/ServicesGrid";

export default function ServicesPage() {
  return (
    <>
      <section className="px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light">Services</h1>
          <p className="mt-3 text-white/60 max-w-2xl">
            Structured services designed to reduce rework, speed up approvals, and deliver build-ready outputs.
          </p>
        </div>
      </section>

      <ServicesGrid />
    </>
  );
}
