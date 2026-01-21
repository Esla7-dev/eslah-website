import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import ServicesGrid from "@/components/ServicesGrid";
import Process from "@/components/Process";
import ProcessTimeline from "@/components/ProcessTimeline";
import SelectedProjects from "@/components/SelectedProjects";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProofStrip />
      <ServicesGrid />
      <Process />
      <ProcessTimeline />
      <SelectedProjects />
      <FinalCTA />
    </>
  );
}
