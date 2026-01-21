export default function ArabicServices() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-light">خدماتنا</h1>
        <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
          نقدّم خدمات تصميم واضحة بتسليمات منظمة،
          تساعد على الاعتماد السريع وتقليل التعديلات.
        </p>

        <div className="mt-12 space-y-8">
          <ServiceBlock
            title="التصميم المعماري"
            bullets={[
              "تطوير الفكرة المعمارية",
              "مخططات معمارية منسّقة",
              "حزم تقديم جاهزة للاعتماد",
            ]}
          />

          <ServiceBlock
            title="التصميم الداخلي"
            bullets={[
              "تنظيم المساحات والوظائف",
              "اختيار المواد والتشطيبات",
              "تفاصيل داخلية داعمة للتنفيذ",
            ]}
          />

          <ServiceBlock
            title="التصميم الخارجي والتخطيط"
            bullets={[
              "تنظيم الموقع والحركة",
              "تصميم المساحات الخارجية",
              "مراحل تنفيذ واضحة",
            ]}
          />

          <ServiceBlock
            title="التصور المعماري"
            bullets={[
              "صور واقعية",
              "لقطات توضيحية",
              "دعم اتخاذ القرار",
            ]}
          />

          <ServiceBlock
            title="الاستشارات الفنية"
            bullets={[
              "مراجعة تصاميم",
              "تقييم جدوى تنفيذ",
              "توجيه تقني أثناء التنفيذ",
            ]}
          />
        </div>

        {/* Engagement Models */}
        <div className="mt-20 pt-20 border-t border-white/10">
          <h2 className="text-3xl font-light">نماذج التعاون</h2>
          <p className="mt-4 text-white/70 max-w-2xl leading-relaxed">
            نقدم خيارات تعاون مرنة تناسب طبيعة مشروعك ومرحلته
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <EngagementCard
              title="التسليم الكامل"
              desc="حزمة شاملة من الفكرة إلى التسليم النهائي"
              ideal="للمشاريع الجديدة من البداية"
            />
            <EngagementCard
              title="التطوير والدعم"
              desc="نكمل أو نطوّر تصميم موجود"
              ideal="للمشاريع الجارية أو التي تحتاج تعديل"
            />
            <EngagementCard
              title="الاستشارة والمراجعة"
              desc="مراجعة فنية أو توجيه أثناء التنفيذ"
              ideal="للتأكد من جودة وقابلية التنفيذ"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 pt-20 border-t border-white/10 text-center">
          <h2 className="text-2xl font-light">جاهز لبدء مشروعك؟</h2>
          <p className="mt-4 text-white/70">
            تواصل معنا لمناقشة احتياجات مشروعك
          </p>
          <div className="mt-8">
            <a
              href="https://wa.me/971588927001"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-8 py-4 rounded text-sm hover:bg-white/90 transition-colors"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceBlock({
  title,
  bullets,
}: {
  title: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
      <h2 className="text-xl font-medium">{title}</h2>
      <ul className="mt-4 list-disc pr-5 space-y-2 text-sm text-white/70">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function EngagementCard({
  title,
  desc,
  ideal,
}: {
  title: string;
  desc: string;
  ideal: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-6 hover:border-white/20 transition-colors">
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="mt-3 text-sm text-white/70 leading-relaxed">{desc}</p>
      <p className="mt-4 text-xs text-white/50 italic">{ideal}</p>
    </div>
  );
}
