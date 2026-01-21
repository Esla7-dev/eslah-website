export default function ArabicHome() {
  return (
    <>
      {/* Hero */}
      <section className="px-8 py-24 max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light leading-tight">
          نقدّم حلول تصميم معمارية واضحة،
          <br />
          <span className="text-white/60">
            مهيأة للاعتماد والتنفيذ
          </span>
        </h1>

        <p className="mt-6 text-white/70 max-w-xl">
          تصميم معماري، داخلي، وتخطيطي بتسليمات منظمة
          تقلل التعديلات وتسرّع اتخاذ القرار.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <a
            href="/ar/contact"
            className="bg-white text-black px-6 py-3 rounded text-sm text-center hover:bg-white/90 transition-colors"
          >
            اطلب عرض تصميم
          </a>
          <a
            href="/ar/projects"
            className="border border-white/20 px-6 py-3 rounded text-sm text-center hover:bg-white/5 transition-colors"
          >
            اطّلع على أعمالنا
          </a>
        </div>
      </section>

      {/* Proof Strip */}
      <section className="px-8 py-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            "تسليم سريع",
            "دقة عالية في التفاصيل",
            "فريق متعدد التخصصات",
            "مخرجات جاهزة للتنفيذ",
          ].map((x) => (
            <div
              key={x}
              className="rounded-2xl border border-white/10 p-5 text-sm text-white/80"
            >
              {x}
            </div>
          ))}
        </div>
      </section>

      {/* Services Preview */}
      <section className="px-8 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light">خدماتنا</h2>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Service
              title="التصميم المعماري"
              desc="تصميم مفاهيمي وتطوير معماري بتسليمات واضحة وجاهزة للمراجعة."
            />
            <Service
              title="التصميم الداخلي"
              desc="تنظيم المساحات واختيار المواد بما يوازن بين الجمال والوظيفة."
            />
            <Service
              title="التصميم الخارجي"
              desc="تصميم المساحات الخارجية بما يخدم الاستخدام ويكمل الرؤية المعمارية."
            />
            <Service
              title="التخطيط"
              desc="مخططات موقع تراعي الحركة، الخصوصية، ومراحل التنفيذ."
            />
            <Service
              title="التصور المعماري"
              desc="إخراج بصري واقعي يساعد على الفهم السريع وتسريع الاعتماد."
            />
            <Service
              title="الاستشارات"
              desc="دعم تقني ومراجعة تصاميم لضمان قابلية التنفيذ والجودة."
            />
          </div>

          <div className="mt-10 text-center">
            <a
              href="/ar/services"
              className="inline-block border border-white/20 px-6 py-3 rounded text-sm hover:bg-white/5 transition-colors"
            >
              عرض جميع الخدمات
            </a>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="px-8 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light">طريقة عملنا</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            نبدأ بفهم المتطلبات والقيود،
            ثم نطوّر الفكرة، ننسّق التصميم،
            ونسلّم مخرجات واضحة تقلل التعديلات أثناء التنفيذ.
          </p>
        </div>
      </section>

      {/* Selected Projects Intro */}
      <section className="px-8 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-light">نماذج مختارة</h2>
          <p className="mt-4 text-white/70">
            نماذج مختارة من أعمالنا،
            مع توضيح نطاق العمل، التحديات، والنتائج.
          </p>

          <div className="mt-10 text-center">
            <a
              href="/ar/projects"
              className="inline-block bg-white text-black px-6 py-3 rounded text-sm hover:bg-white/90 transition-colors"
            >
              عرض جميع المشاريع
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-8 py-20 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-light">هل لديك مشروع؟</h2>
          <p className="mt-6 text-white/70 text-lg leading-relaxed max-w-2xl mx-auto">
            شاركنا نوع المشروع، الموقع، والمدة المتوقعة،
            وسنقترح عليك نطاق عمل وتسليمات واضحة.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/971588927001"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-8 py-4 rounded text-sm hover:bg-white/90 transition-colors"
            >
              تواصل معنا عبر واتساب
            </a>
            <a
              href="/ar/contact"
              className="border border-white/20 px-8 py-4 rounded text-sm hover:bg-white/5 transition-colors"
            >
              أو أرسل استفسارك
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function Service({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
    </div>
  );
}
