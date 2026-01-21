export const metadata = {
  title: "About — ESLAH",
  description:
    "Multidisciplinary design team delivering coordinated outcomes.",
};

export default function About() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light">About</h1>

        <div className="mt-10 space-y-8 text-white/80 leading-relaxed">
          <p className="text-lg">
            <strong className="text-white">ESLAH</strong> is a multidisciplinary
            design team delivering coordinated architecture, planning, and design
            solutions prepared for approval and execution.
          </p>

          <p>
            We don't just design — we produce organized deliverables that
            accelerate decision-making, reduce revisions, and streamline
            coordination between parties.
          </p>

          <p>
            We work with private project owners, developers, and engineering firms
            that need support in design, development, or technical review.
          </p>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-light">What we focus on</h2>

          <div className="mt-8 space-y-6">
            <FocusBlock
              title="Clear deliverables"
              desc="Every delivery is organized, detailed, and ready for review or approval without ambiguity."
            />
            <FocusBlock
              title="Responsive turnaround"
              desc="We understand projects have schedules — we commit to delivery within agreed timelines."
            />
            <FocusBlock
              title="Technical coordination"
              desc="We care about the details that affect execution, and ensure consistency across outputs."
            />
            <FocusBlock
              title="Decision support"
              desc="We present clear options with pros and cons for each choice."
            />
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-light">Our approach</h2>

          <div className="mt-8 space-y-4 text-white/70">
            <p>
              <strong className="text-white">We start with understanding:</strong>{" "}
              We listen to requirements, define constraints, and clarify scope
              before starting.
            </p>
            <p>
              <strong className="text-white">Then we develop solutions:</strong>{" "}
              We present clear design ideas with comparable and selectable options.
            </p>
            <p>
              <strong className="text-white">And deliver with precision:</strong>{" "}
              Coordinated plans, clear details, and outputs that reduce the need
              for revision during execution.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-white/10 text-center">
          <h2 className="text-2xl font-light">Interested in working together?</h2>
          <p className="mt-4 text-white/70">
            Get in touch to discuss how we can support your project.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-white/90 transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FocusBlock({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}
