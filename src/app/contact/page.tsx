"use client";

export default function ContactPage() {
  const WHATSAPP_NUMBER = "971588927001";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    "Hello ESLAH — I'd like to request a proposal. Project type: _____. Location: _____. Timeline: _____."
  )}`;

  return (
    <section className="px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div>
          <h1 className="text-4xl font-light">Contact</h1>
          <p className="mt-3 text-white/60 max-w-xl">
            Share your project type, location, timeline, and required scope.
            We'll respond with a clear deliverables plan and next steps.
          </p>

          <div className="mt-8 rounded-2xl border border-white/10 p-6">
            <div className="text-sm text-white/50">Fast track</div>
            <h2 className="mt-2 text-lg font-medium">Request a proposal on WhatsApp</h2>
            <p className="mt-2 text-sm text-white/60">
              Best for quick alignment and scope clarification.
            </p>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex bg-white text-black px-6 py-3 rounded text-sm"
            >
              Open WhatsApp
            </a>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 p-6">
          <h2 className="text-xl font-medium">Project brief</h2>
          <p className="mt-2 text-sm text-white/60">
            This form is a placeholder (frontend). We'll connect it to email later.
          </p>

          <form className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-white/60">Name</label>
              <input
                className="mt-2 w-full rounded border border-white/10 bg-black px-4 py-3 outline-none focus:border-white/30"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Email</label>
              <input
                type="email"
                className="mt-2 w-full rounded border border-white/10 bg-black px-4 py-3 outline-none focus:border-white/30"
                placeholder="name@email.com"
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Project type</label>
              <input
                className="mt-2 w-full rounded border border-white/10 bg-black px-4 py-3 outline-none focus:border-white/30"
                placeholder="Villa / Duplex / Commercial / ..."
              />
            </div>

            <div>
              <label className="text-sm text-white/60">Message</label>
              <textarea
                className="mt-2 w-full rounded border border-white/10 bg-black px-4 py-3 outline-none focus:border-white/30 min-h-[140px]"
                placeholder="Scope, location, timeline, constraints, deliverables..."
              />
            </div>

            <button
              type="button"
              className="w-full bg-white text-black px-6 py-3 rounded text-sm"
              onClick={() => alert("Placeholder form — connect to email/backend later.")}
            >
              Send (placeholder)
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
