export default function ArabicAbout() {
  return (
    <section className="px-8 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-light">من نحن</h1>

        <div className="mt-10 space-y-8 text-white/80 leading-relaxed">
          <p className="text-lg">
            <strong className="text-white">إصلاح</strong> فريق تصميم متعدد التخصصات
            يقدم حلول معمارية وتخطيطية واضحة، مهيأة للاعتماد والتنفيذ.
          </p>

          <p>
            نحن لا نقدم تصاميم فقط — نقدم مخرجات منظمة تساعد على تسريع القرار،
            تقليل التعديلات، وتسهيل التنسيق بين الأطراف.
          </p>

          <p>
            نعمل مع مالكي مشاريع خاصة، مطورين، ومكاتب هندسية تحتاج إلى دعم
            في التصميم، التطوير، أو المراجعة الفنية.
          </p>
        </div>

        {/* What We Focus On */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-light">ما نركز عليه</h2>

          <div className="mt-8 space-y-6">
            <FocusBlock
              title="وضوح التسليمات"
              desc="كل تسليم منظم، مفصّل، وجاهز للمراجعة أو الاعتماد دون غموض."
            />
            <FocusBlock
              title="سرعة الاستجابة"
              desc="نفهم أن المشاريع لها جداول — نلتزم بالتسليم في الوقت المتفق عليه."
            />
            <FocusBlock
              title="التنسيق الفني"
              desc="نهتم بالتفاصيل التي تؤثر على التنفيذ، ونتأكد من تناسق المخرجات."
            />
            <FocusBlock
              title="دعم القرار"
              desc="نقدم خيارات واضحة مع إيضاح الإيجابيات والسلبيات لكل اختيار."
            />
          </div>
        </div>

        {/* Our Approach */}
        <div className="mt-16 pt-16 border-t border-white/10">
          <h2 className="text-2xl font-light">طريقتنا</h2>

          <div className="mt-8 space-y-4 text-white/70">
            <p>
              <strong className="text-white">نبدأ بالفهم:</strong> نستمع للمتطلبات،
              نحدد القيود، ونوضح نطاق العمل قبل البدء.
            </p>
            <p>
              <strong className="text-white">ثم نطور الحلول:</strong> نقدم أفكار
              تصميمية واضحة مع خيارات قابلة للمقارنة والاختيار.
            </p>
            <p>
              <strong className="text-white">ونسلّم بدقة:</strong> مخططات منسقة،
              تفاصيل واضحة، ومخرجات تقلل الحاجة للتعديل أثناء التنفيذ.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 pt-16 border-t border-white/10 text-center">
          <h2 className="text-2xl font-light">هل ترغب في التعاون معنا؟</h2>
          <p className="mt-4 text-white/70">
            تواصل معنا لمناقشة كيف يمكننا دعم مشروعك
          </p>
          <div className="mt-8">
            <a
              href="/ar/contact"
              className="inline-block bg-white text-black px-8 py-4 rounded hover:bg-white/90 transition-colors"
            >
              تواصل معنا
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
