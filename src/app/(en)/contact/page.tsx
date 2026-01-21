"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    location: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setSubmitStatus({ type: null, message: "" });

    startTransition(async () => {
      const result = await submitContactForm(formData);

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you for your message. We'll get back to you soon!",
        });
        // Reset form
        setFormData({
          name: "",
          email: "",
          projectType: "",
          location: "",
          message: "",
        });
      } else {
        if (result.errors) {
          setErrors(result.errors);
        }
        setSubmitStatus({
          type: "error",
          message: "Something went wrong. Please check your data and try again.",
        });
      }
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hello, I'd like to inquire about your services"
    );
    window.open(`https://wa.me/971588927001?text=${message}`, "_blank");
  };

  return (
    <section className="px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light">Contact</h1>
        <p className="mt-4 text-white/70">
          Share your project details and we'll reach out to discuss scope and
          proposed deliverables.
        </p>

        {/* WhatsApp CTA - Primary */}
        <div className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium">Fastest way to connect</h2>
              <p className="mt-2 text-white/70 text-sm">
                Reach us directly via WhatsApp for a quick discussion about your
                project
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white px-8 py-4 rounded hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
            >
              Open WhatsApp
            </button>
          </div>
        </div>

        {/* Contact Form - Secondary */}
        <div className="mt-12">
          <h3 className="text-xl font-light">Or send an inquiry</h3>
          
          {submitStatus.type && (
            <div
              className={`mt-4 p-4 rounded ${
                submitStatus.type === "success"
                  ? "bg-green-500/10 border border-green-500/20 text-green-400"
                  : "bg-red-500/10 border border-red-500/20 text-red-400"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            <div>
              <label className="block text-sm text-white/70 mb-2">
                Name or Company *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className={`w-full bg-white/5 border ${
                  errors.name ? "border-red-500/50" : "border-white/10"
                } rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors`}
                placeholder="Your name"
                required
                disabled={isPending}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full bg-white/5 border ${
                  errors.email ? "border-red-500/50" : "border-white/10"
                } rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors`}
                placeholder="your@email.com"
                required
                disabled={isPending}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Project Type *
              </label>
              <input
                type="text"
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className={`w-full bg-white/5 border ${
                  errors.projectType ? "border-red-500/50" : "border-white/10"
                } rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors`}
                placeholder="Villa, residential, commercial..."
                required
                disabled={isPending}
              />
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-400">{errors.projectType}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Location *
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className={`w-full bg-white/5 border ${
                  errors.location ? "border-red-500/50" : "border-white/10"
                } rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors`}
                placeholder="City or region"
                required
                disabled={isPending}
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-400">{errors.location}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Additional Details *
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className={`w-full bg-white/5 border ${
                  errors.message ? "border-red-500/50" : "border-white/10"
                } rounded px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors resize-none`}
                placeholder="Area, timeline, any specific requirements..."
                required
                disabled={isPending}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full border border-white/20 px-6 py-4 rounded hover:bg-white/5 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "Sending..." : "Send Inquiry"}
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-16 border-t border-white/10 text-center">
          <h3 className="text-xl font-light">Contact Information</h3>
          <div className="mt-6 text-white/70 space-y-2">
            <p>WhatsApp: +971 58 892 7001</p>
            <p className="text-sm text-white/50">
              We typically respond within 24 hours on business days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
