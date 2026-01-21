"use client";

import { useState, useTransition } from "react";
import { submitContactForm } from "@/app/actions/contact";

export default function ArabicContact() {
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
          message: "شكراً لتواصلك معنا. سنرد عليك قريباً!",
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
          message: "حدث خطأ. يرجى التحقق من البيانات والمحاولة مرة أخرى.",
        });
      }
    });
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `مرحبًا، أود الاستفسار عن خدماتكم`
    );
    window.open(`https://wa.me/971588927001?text=${message}`, "_blank");
  };

  return (
    <section className="px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light">تواصل معنا</h1>
        <p className="mt-4 text-white/70 leading-relaxed">
          شاركنا تفاصيل مشروعك وسنتواصل معك لمناقشة نطاق العمل والتسليمات المقترحة.
        </p>

        {/* WhatsApp CTA - Primary */}
        <div className="mt-10 p-8 rounded-2xl border border-white/10 bg-white/5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h2 className="text-xl font-medium">الطريقة الأسرع</h2>
              <p className="mt-2 text-white/70 text-sm">
                تواصل معنا مباشرة عبر واتساب لنقاش سريع حول مشروعك
              </p>
            </div>
            <button
              onClick={handleWhatsApp}
              className="bg-[#25D366] text-white px-8 py-4 rounded hover:bg-[#20bd5a] transition-colors whitespace-nowrap"
            >
              فتح واتساب
            </button>
          </div>
        </div>

        {/* Contact Form - Secondary */}
        <div className="mt-12">
          <h3 className="text-xl font-light">أو أرسل استفسارك</h3>
          
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
                الاسم أو اسم الشركة *
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
                placeholder="أدخل اسمك"
                required
                disabled={isPending}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                البريد الإلكتروني *
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
                نوع المشروع *
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
                placeholder="فيلا، عمارة سكنية، منشأة تجارية..."
                required
                disabled={isPending}
              />
              {errors.projectType && (
                <p className="mt-1 text-sm text-red-400">{errors.projectType}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                الموقع *
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
                placeholder="المدينة أو المنطقة"
                required
                disabled={isPending}
              />
              {errors.location && (
                <p className="mt-1 text-sm text-red-400">{errors.location}</p>
              )}
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                تفاصيل إضافية *
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
                placeholder="المساحة، المدة المتوقعة، أي متطلبات خاصة..."
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
              {isPending ? "جارٍ الإرسال..." : "إرسال الاستفسار"}
            </button>
          </form>
        </div>

        {/* Additional Info */}
        <div className="mt-16 pt-16 border-t border-white/10 text-center">
          <h3 className="text-xl font-light">معلومات الاتصال</h3>
          <div className="mt-6 text-white/70 space-y-2">
            <p>واتساب: +971 58 892 7001</p>
            <p className="text-sm text-white/50">
              نرد عادة خلال 24 ساعة في أيام العمل
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
