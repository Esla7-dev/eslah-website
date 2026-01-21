import ServicesGrid from "@/components/ServicesGrid";
import ServicesDeliverables from "@/components/ServicesDeliverables";
import EngagementModels from "@/components/EngagementModels";

export const metadata = {
  title: "Services — ESLAH",
  description:
    "Architecture, interiors, landscape, planning, and visualization services.",
};

export default function Services() {
  return (
    <>
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light">Services</h1>
          <p className="mt-4 text-white/70 max-w-2xl">
            We offer coordinated design services across architecture, interiors,
            landscape, and planning — structured for approval readiness and
            execution clarity.
          </p>
        </div>
      </section>

      <ServicesGrid />
      <ServicesDeliverables />
      <EngagementModels />
    </>
  );
}
