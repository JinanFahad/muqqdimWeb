export default function DesignSystem() {
  const colorPalettes = [
    {
      name: "الألوان الأساسية - الأزرق الملكي",
      colors: [
        { name: "50", value: "var(--primary-50)", hex: "#eff6ff" },
        { name: "100", value: "var(--primary-100)", hex: "#dbeafe" },
        { name: "200", value: "var(--primary-200)", hex: "#bfdbfe" },
        { name: "300", value: "var(--primary-300)", hex: "#93c5fd" },
        { name: "400", value: "var(--primary-400)", hex: "#60a5fa" },
        { name: "500", value: "var(--primary-500)", hex: "#3b82f6" },
        { name: "600", value: "var(--primary-600)", hex: "#2563eb" },
        { name: "700", value: "var(--primary-700)", hex: "#1d4ed8" },
        { name: "800", value: "var(--primary-800)", hex: "#1e40af" },
        { name: "900", value: "var(--primary-900)", hex: "#1e3a8a" },
      ],
    },
    {
      name: "الألوان الرمادية",
      colors: [
        { name: "50", value: "var(--gray-50)", hex: "#f9fafb" },
        { name: "100", value: "var(--gray-100)", hex: "#f3f4f6" },
        { name: "200", value: "var(--gray-200)", hex: "#e5e7eb" },
        { name: "300", value: "var(--gray-300)", hex: "#d1d5db" },
        { name: "400", value: "var(--gray-400)", hex: "#9ca3af" },
        { name: "500", value: "var(--gray-500)", hex: "#6b7280" },
        { name: "600", value: "var(--gray-600)", hex: "#4b5563" },
        { name: "700", value: "var(--gray-700)", hex: "#374151" },
        { name: "800", value: "var(--gray-800)", hex: "#1f2937" },
        { name: "900", value: "var(--gray-900)", hex: "#111827" },
      ],
    },
    {
      name: "الألوان الثانوية - التركواز",
      colors: [
        { name: "50", value: "var(--secondary-50)", hex: "#f0fdfa" },
        { name: "500", value: "var(--secondary-500)", hex: "#14b8a6" },
        { name: "600", value: "var(--secondary-600)", hex: "#0d9488" },
      ],
    },
  ];

  const semanticColors = [
    { name: "نجاح", bg: "var(--success-50)", color: "var(--success-600)", text: "عملية ناجحة" },
    { name: "تحذير", bg: "var(--warning-50)", color: "var(--warning-600)", text: "تنبيه هام" },
    { name: "خطأ", bg: "var(--error-50)", color: "var(--error-600)", text: "حدث خطأ" },
    { name: "معلومات", bg: "var(--info-50)", color: "var(--info-600)", text: "معلومة مفيدة" },
  ];

  const typography = [
    { name: "Display كبير", class: "text-5xl font-bold", sample: "عنوان رئيسي ضخم" },
    { name: "H1", class: "text-4xl font-bold", sample: "عنوان من المستوى الأول" },
    { name: "H2", class: "text-3xl font-bold", sample: "عنوان من المستوى الثاني" },
    { name: "H3", class: "text-2xl font-semibold", sample: "عنوان من المستوى الثالث" },
    { name: "H4", class: "text-xl font-semibold", sample: "عنوان من المستوى الرابع" },
    { name: "نص كبير", class: "text-lg font-normal", sample: "نص أساسي بحجم كبير للفقرات المهمة" },
    { name: "نص عادي", class: "text-base font-normal", sample: "النص الأساسي المستخدم في معظم المحتوى" },
    { name: "نص صغير", class: "text-sm font-normal", sample: "نص بحجم صغير للتفاصيل الثانوية" },
    { name: "Caption", class: "text-xs font-normal", sample: "نص صغير جداً للملاحظات" },
  ];

  const spacing = [
    { name: "1 (4px)", value: "4px", height: "4px" },
    { name: "2 (8px)", value: "8px", height: "8px" },
    { name: "3 (12px)", value: "12px", height: "12px" },
    { name: "4 (16px)", value: "16px", height: "16px" },
    { name: "6 (24px)", value: "24px", height: "24px" },
    { name: "8 (32px)", value: "32px", height: "32px" },
    { name: "12 (48px)", value: "48px", height: "48px" },
    { name: "16 (64px)", value: "64px", height: "64px" },
  ];

  const shadows = [
    { name: "صغير (sm)", class: "shadow-sm", desc: "ظل خفيف للعناصر الصغيرة" },
    { name: "متوسط (md)", class: "shadow-md", desc: "ظل متوسط للبطاقات" },
    { name: "كبير (lg)", class: "shadow-lg", desc: "ظل قوي للعناصر المرتفعة" },
    { name: "كبير جداً (xl)", class: "shadow-xl", desc: "ظل قوي جداً للنوافذ المنبثقة" },
  ];

  const radii = [
    { name: "صغير (sm)", class: "rounded-sm", value: "2px" },
    { name: "عادي", class: "rounded", value: "4px" },
    { name: "متوسط (md)", class: "rounded-md", value: "6px" },
    { name: "كبير (lg)", class: "rounded-lg", value: "8px" },
    { name: "كبير جداً (xl)", class: "rounded-xl", value: "12px" },
    { name: "دائري كامل", class: "rounded-full", value: "9999px" },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-12" dir="rtl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-2">نظام التصميم</h1>
        <p className="text-lg text-[var(--gray-600)]">
          نظام تصميم شامل لمنصة مُـقــــدِم - معايير الهوية البصرية والمكونات
        </p>
      </div>

      {/* Brand Identity */}
      <section className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm">
        <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-4">شخصية العلامة التجارية</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {["ذكية", "تحليلية", "موثوقة", "رسمية", "عصرية"].map((trait) => (
            <div key={trait} className="p-4 bg-[var(--primary-50)] rounded-lg border border-[var(--primary-200)] text-center">
              <p className="font-semibold text-[var(--primary-700)]">{trait}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Color Palettes */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">نظام الألوان</h2>
          <p className="text-[var(--gray-600)]">لوحة ألوان متكاملة للمنصة</p>
        </div>
        
        {colorPalettes.map((palette) => (
          <div key={palette.name} className="bg-white rounded-xl p-6 border border-[var(--gray-200)] shadow-sm">
            <h3 className="text-lg font-bold text-[var(--gray-900)] mb-4">{palette.name}</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-3">
              {palette.colors.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div 
                    className="h-20 rounded-lg border border-[var(--gray-200)] shadow-sm"
                    style={{ backgroundColor: color.value }}
                  ></div>
                  <div className="text-center">
                    <p className="text-sm font-medium text-[var(--gray-900)]">{color.name}</p>
                    <p className="text-xs text-[var(--gray-600)]">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Semantic Colors */}
        <div className="bg-white rounded-xl p-6 border border-[var(--gray-200)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--gray-900)] mb-4">الألوان الدلالية</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {semanticColors.map((item) => (
              <div 
                key={item.name}
                className="p-4 rounded-lg border"
                style={{ backgroundColor: item.bg, borderColor: item.color }}
              >
                <p className="font-bold mb-1" style={{ color: item.color }}>{item.name}</p>
                <p className="text-sm" style={{ color: item.color }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Colors */}
        <div className="bg-white rounded-xl p-6 border border-[var(--gray-200)] shadow-sm">
          <h3 className="text-lg font-bold text-[var(--gray-900)] mb-4">ألوان الرسوم البيانية</h3>
          <div className="flex flex-wrap gap-3">
            {[
              { name: "Chart 1", value: "var(--chart-1)" },
              { name: "Chart 2", value: "var(--chart-2)" },
              { name: "Chart 3", value: "var(--chart-3)" },
              { name: "Chart 4", value: "var(--chart-4)" },
              { name: "Chart 5", value: "var(--chart-5)" },
            ].map((color) => (
              <div key={color.name} className="flex-1 min-w-[100px]">
                <div 
                  className="h-16 rounded-lg border border-[var(--gray-200)]"
                  style={{ backgroundColor: color.value }}
                ></div>
                <p className="text-sm font-medium text-[var(--gray-900)] mt-2 text-center">{color.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">نظام الخطوط</h2>
          <p className="text-[var(--gray-600)]">هرم نصوص متناسق لجميع العناصر</p>
        </div>
        
        {typography.map((type) => (
          <div key={type.name} className="flex items-baseline gap-6 p-4 hover:bg-[var(--gray-50)] rounded-lg transition-colors">
            <div className="w-32 flex-shrink-0">
              <p className="text-sm font-medium text-[var(--gray-600)]">{type.name}</p>
              <p className="text-xs text-[var(--gray-500)] mt-1">{type.class}</p>
            </div>
            <p className={type.class + " text-[var(--gray-900)]"}>{type.sample}</p>
          </div>
        ))}
      </section>

      {/* Spacing */}
      <section className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">نظام المسافات</h2>
          <p className="text-[var(--gray-600)]">شبكة 4px - مقياس تباعد 8px</p>
        </div>
        
        <div className="space-y-4">
          {spacing.map((space) => (
            <div key={space.name} className="flex items-center gap-6">
              <div className="w-32 flex-shrink-0">
                <p className="text-sm font-medium text-[var(--gray-900)]">{space.name}</p>
              </div>
              <div 
                className="bg-[var(--primary-600)] rounded"
                style={{ height: space.height, width: space.value }}
              ></div>
            </div>
          ))}
        </div>
      </section>

      {/* Shadows */}
      <section className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">نظام الظلال</h2>
          <p className="text-[var(--gray-600)]">مستويات ارتفاع متعددة</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shadows.map((shadow) => (
            <div key={shadow.name} className="text-center">
              <div className={`bg-white p-8 rounded-lg ${shadow.class} border border-[var(--gray-200)]`}>
                <p className="font-medium text-[var(--gray-900)]">{shadow.name}</p>
              </div>
              <p className="text-sm text-[var(--gray-600)] mt-2">{shadow.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius */}
      <section className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">نظام الحواف</h2>
          <p className="text-[var(--gray-600)]">أحجام انحناء متنوعة</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {radii.map((radius) => (
            <div key={radius.name} className="text-center">
              <div className={`bg-[var(--primary-100)] border-2 border-[var(--primary-600)] p-6 ${radius.class}`}>
                <div className="text-sm font-medium text-[var(--primary-900)]">{radius.value}</div>
              </div>
              <p className="text-sm text-[var(--gray-600)] mt-2">{radius.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Animation Speeds */}
      <section className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">سرعات الحركة</h2>
          <p className="text-[var(--gray-600)]">مدد زمنية موحدة للتفاعل</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "سريع", duration: "150ms", desc: "للتفاعلات الفورية" },
            { name: "متوسط", duration: "250ms", desc: "للانتقالات القياسية" },
            { name: "بطيء", duration: "400ms", desc: "للتحولات الكبيرة" },
          ].map((speed) => (
            <div key={speed.name} className="p-6 bg-[var(--gray-50)] rounded-lg border border-[var(--gray-200)]">
              <p className="text-lg font-bold text-[var(--gray-900)] mb-1">{speed.name}</p>
              <p className="text-2xl font-bold text-[var(--primary-600)] mb-2">{speed.duration}</p>
              <p className="text-sm text-[var(--gray-600)]">{speed.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}