import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { FileText, Sparkles, CheckCircle, MapPin } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

const ChevronDown = () => (
  <svg className="w-4 h-4 text-[#C6A75E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const inputClass =
  "w-full bg-gray-50 dark:bg-gray-100 border-gray-300 dark:border-gray-400 text-[#08312d] dark:text-gray-900 placeholder:text-gray-400 rounded-lg px-4 py-3 text-base font-medium font-[Changa] focus:ring-2 focus:ring-[#C6A75E] focus:border-[#C6A75E]";
const labelClass =
  "block text-[#08312d] dark:text-gray-900 font-bold text-base mb-2 font-[Changa]";
const selectClass =
  "w-full bg-gray-50 dark:bg-gray-100 border border-gray-300 dark:border-gray-400 text-[#08312d] dark:text-gray-900 rounded-lg px-4 py-3 text-base font-medium font-[Changa] focus:ring-2 focus:ring-[#C6A75E] focus:border-[#C6A75E] focus:outline-none appearance-none cursor-pointer";
const sectionTitle =
  "text-[#08312d] dark:text-white font-bold text-lg mb-5 pb-2 border-b border-gray-200 dark:border-white/10 font-[Changa]";

export const businessTypes = [
  { ar: "مطعم برجر", en: "Burger Restaurant" },
  { ar: "مطعم شاورما", en: "Shawarma Restaurant" },
  { ar: "مطعم مأكولات بحرية", en: "Seafood Restaurant" },
  { ar: "مطعم مشويات", en: "Grill Restaurant" },
  { ar: "مطعم إيطالي / بيتزا", en: "Italian / Pizza Restaurant" },
  { ar: "مطعم آسيوي", en: "Asian Restaurant" },
  { ar: "مطعم وجبات سريعة", en: "Fast Food Restaurant" },
  { ar: "كافيه قهوة مختصة", en: "Specialty Coffee Cafe" },
  { ar: "كافيه عام", en: "General Cafe" },
  { ar: "كافيه حلويات وديزرت", en: "Dessert Cafe" },
  { ar: "بوفيه مفتوح", en: "Buffet Restaurant" },
  { ar: "فود ترك", en: "Food Truck" },
  { ar: "كلاود كيتشن", en: "Cloud Kitchen" },
  { ar: "أخرى", en: "Other" },
];

export const cities = [
  { ar: "الرياض", en: "Riyadh" },
  { ar: "جدة", en: "Jeddah" },
  { ar: "مكة المكرمة", en: "Makkah" },
  { ar: "المدينة المنورة", en: "Madinah" },
  { ar: "الدمام", en: "Dammam" },
  { ar: "الخبر", en: "Khobar" },
  { ar: "أبها", en: "Abha" },
  { ar: "تبوك", en: "Tabuk" },
  { ar: "الطائف", en: "Taif" },
];

export const cityMap: Record<string, string> = {
  "Riyadh": "الرياض", "Jeddah": "جدة", "Makkah": "مكة المكرمة",
  "Madinah": "المدينة المنورة", "Dammam": "الدمام", "Khobar": "الخبر",
  "Abha": "أبها", "Tabuk": "تبوك", "Taif": "الطائف"
};

export const businessMap: Record<string, string> = {
  "Burger Restaurant": "مطعم برجر", "Shawarma Restaurant": "مطعم شاورما",
  "Seafood Restaurant": "مطعم مأكولات بحرية", "Grill Restaurant": "مطعم مشويات",
  "Italian / Pizza Restaurant": "مطعم إيطالي / بيتزا", "Asian Restaurant": "مطعم آسيوي",
  "Fast Food Restaurant": "مطعم وجبات سريعة", "Specialty Coffee Cafe": "كافيه قهوة مختصة",
  "General Cafe": "كافيه عام", "Dessert Cafe": "كافيه حلويات وديزرت",
  "Buffet Restaurant": "بوفيه مفتوح", "Food Truck": "فود ترك",
  "Cloud Kitchen": "كلاود كيتشن", "Other": "أخرى"
};

export default function FeasibilityStudyPage() {
  const navigate = useNavigate();
  const { t, language } = useLanguage();
  const isAr = language === "ar";

  const [formData, setFormData] = useState({
    businessType: "",
    city: "",
    initialCapital: "",
    monthlyRent: "",
    numEmployees: "",
    avgProductPrice: "",
    expectedCustomersPerDay: "",
    lat: "",
    lng: "",
  });

  const [locationLoading, setLocationLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleGetLocation = () => {
    if (!navigator.geolocation) return;
    setLocationLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setFormData((prev) => ({
          ...prev,
          lat: pos.coords.latitude.toFixed(6),
          lng: pos.coords.longitude.toFixed(6),
        }));
        setLocationLoading(false);
      },
      () => setLocationLoading(false),
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const existingProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    const newProject = {
      id: Date.now(),
      projectName: formData.businessType,
      projectType: formData.businessType,
      ...formData,
      status: "قيد المراجعة",
      statusColor: "warning",
      progress: 0,
      createdAt: new Date().toISOString(),
      hasGovernmentData: false,
    };
    existingProjects.push(newProject);
    localStorage.setItem("projects", JSON.stringify(existingProjects));
    navigate("/dashboard/my-projects");
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-transparent p-6 lg:p-8" dir={isAr ? "rtl" : "ltr"}>
        <div className="max-w-3xl mx-auto space-y-6">

          <motion.div
            className="bg-white dark:bg-gray-200 rounded-xl p-8 border border-gray-200 dark:border-gray-300 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-lg bg-[#C6A75E] flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#08312d] dark:text-gray-900 font-[Changa]">
                  {isAr ? "إنشاء دراسة جدوى" : "Create Feasibility Study"}
                </h1>
                <p className="text-gray-500 dark:text-gray-600 text-sm font-[Changa] mt-2">
                  {isAr ? "أدخل بيانات مشروعك لإنشاء دراسة جدوى شاملة" : "Enter your project data to generate a full study"}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            className="bg-white dark:bg-gray-200 rounded-xl p-8 border border-gray-200 dark:border-gray-300 shadow-sm space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* ١ - معلومات المشروع */}
            <div>
              <h2 className={sectionTitle}>
                {isAr ? "١. معلومات المشروع" : "1. Project Information"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    {isAr ? "نوع المشروع" : "Business Type"} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select name="businessType" value={formData.businessType} onChange={handleChange} required className={selectClass}>
                      <option value="">{isAr ? "اختر نوع المشروع" : "Select business type"}</option>
                      {businessTypes.map((b) => (
                        <option key={b.en} value={b.en}>
                          {isAr ? b.ar : b.en}
                        </option>
                      ))}
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown /></div>
                  </div>
                </div>
                <div>
                  <label className={labelClass}>
                    {isAr ? "المدينة" : "City"} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select name="city" value={formData.city} onChange={handleChange} required className={selectClass}>
                      <option value="">{isAr ? "اختر المدينة" : "Select city"}</option>
                      {cities.map((c) => (
                        <option key={c.en} value={c.en}>
                          {isAr ? c.ar : c.en}
                        </option>
                      ))}
                    </select>
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"><ChevronDown /></div>
                  </div>
                </div>
              </div>
            </div>

            {/* ٢ - التفاصيل الاستثمارية */}
            <div>
              <h2 className={sectionTitle}>
                {isAr ? "٢. التفاصيل الاستثمارية" : "2. Investment Details"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className={labelClass}>
                    {isAr ? "رأس المال الأولي (ر.س)" : "Initial Capital (SAR)"} <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" name="initialCapital" value={formData.initialCapital} onChange={handleChange} placeholder={isAr ? "مثال: 100000" : "e.g. 100000"} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>
                    {isAr ? "الإيجار الشهري (ر.س)" : "Monthly Rent (SAR)"} <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" name="monthlyRent" value={formData.monthlyRent} onChange={handleChange} placeholder={isAr ? "مثال: 8000" : "e.g. 8000"} className={inputClass} required />
                </div>
              </div>
            </div>

            {/* ٣ - التشغيل */}
            <div>
              <h2 className={sectionTitle}>
                {isAr ? "٣. التشغيل" : "3. Operations"}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className={labelClass}>
                    {isAr ? "عدد الموظفين" : "No. of Employees"} <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" name="numEmployees" value={formData.numEmployees} onChange={handleChange} placeholder={isAr ? "مثال: 4" : "e.g. 4"} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>
                    {isAr ? "متوسط سعر المنتج (ر.س)" : "Avg Product Price (SAR)"} <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" name="avgProductPrice" value={formData.avgProductPrice} onChange={handleChange} placeholder={isAr ? "مثال: 30" : "e.g. 30"} className={inputClass} required />
                </div>
                <div>
                  <label className={labelClass}>
                    {isAr ? "عملاء متوقعون يومياً" : "Expected Customers/Day"} <span className="text-red-500">*</span>
                  </label>
                  <Input type="number" name="expectedCustomersPerDay" value={formData.expectedCustomersPerDay} onChange={handleChange} placeholder={isAr ? "مثال: 70" : "e.g. 70"} className={inputClass} required />
                </div>
              </div>
            </div>

            {/* ٤ - الموقع */}
            <div>
              <h2 className={sectionTitle}>
                {isAr ? "٤. الموقع (اختياري)" : "4. Location (Optional)"}
              </h2>
              <div
                className="relative w-full h-64 rounded-xl overflow-hidden border border-[#C6A75E]/30 bg-gray-100 dark:bg-gray-200 cursor-pointer group"
                onClick={() => setFormData((prev) => ({ ...prev, lat: "24.7136", lng: "46.6753" }))}
              >
                <div className="absolute inset-0" style={{ backgroundImage: `linear-gradient(rgba(200,220,200,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,220,200,0.3) 1px, transparent 1px)`, backgroundSize: "40px 40px", backgroundColor: "#e8f0e8" }} />
                <div className="absolute inset-0 opacity-40">
                  <div className="absolute bg-white h-[3px] w-full top-[35%]" />
                  <div className="absolute bg-white h-[3px] w-full top-[65%]" />
                  <div className="absolute bg-white w-[3px] h-full left-[30%]" />
                  <div className="absolute bg-white w-[3px] h-full left-[70%]" />
                  <div className="absolute bg-[#d4e8d4] h-[1px] w-full top-[20%]" />
                  <div className="absolute bg-[#d4e8d4] h-[1px] w-full top-[50%]" />
                  <div className="absolute bg-[#d4e8d4] h-[1px] w-full top-[80%]" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <MapPin className="w-10 h-10 text-red-500 drop-shadow-lg" />
                    <div className="w-3 h-3 bg-red-500/30 rounded-full -mt-1" />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-end justify-center pb-4">
                  <div className="bg-white/90 dark:bg-gray-100/90 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md group-hover:bg-[#C6A75E]/10 transition-all border border-[#C6A75E]/20">
                    <p className="text-[#08312d] text-sm font-medium font-[Changa] flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#C6A75E]" />
                      {isAr ? "اضغط لتحديد الموقع على الخريطة" : "Click to select location on map"}
                    </p>
                  </div>
                </div>
                {formData.lat && formData.lng && (
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-medium font-[Changa] px-3 py-1 rounded-full flex items-center gap-1">
                    <span>✓</span>
                    <span>{isAr ? "تم تحديد الموقع" : "Location selected"}</span>
                  </div>
                )}
              </div>
              <button
                type="button"
                onClick={handleGetLocation}
                className="mt-3 flex items-center gap-3 px-5 py-3 rounded-lg border border-[#C6A75E]/40 bg-[#C6A75E]/5 text-[#08312d] dark:text-white font-[Changa] font-medium text-sm hover:border-[#C6A75E] hover:bg-[#C6A75E]/10 transition-all"
              >
                <MapPin className="w-5 h-5 text-[#C6A75E]" />
                {locationLoading ? isAr ? "جاري تحديد الموقع..." : "Getting location..." : isAr ? "تحديد موقعي تلقائياً" : "Use my current location"}
              </button>
            </div>

            {/* Note */}
            <div className="flex items-center gap-2 p-4 bg-[#FFF9F0] dark:bg-[#C6A75E]/10 rounded-lg border border-[#C6A75E] dark:border-[#C6A75E]/40">
              <Sparkles className="w-5 h-5 text-[#C6A75E] flex-shrink-0" />
              <p className="text-gray-700 dark:text-white/80 text-sm font-medium font-[Changa]">
                {t("feasibility.autoSaveNote")}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t-2 border-gray-200 dark:border-gray-300">
              <Button type="submit" className="flex-1 h-14 bg-[#C6A75E] hover:bg-[#a88f4e] text-white font-bold text-base rounded-lg transition-all font-[Changa]">
                <CheckCircle className="w-5 h-5 ml-2 flex-shrink-0" />
                {t("feasibility.generateButton")}
              </Button>
              <Link
                to="/dashboard/my-projects"
                className="h-14 bg-gray-50 dark:bg-[#08312D]/30 border border-gray-300 dark:border-white/20 rounded-lg px-6 text-gray-700 dark:text-white/80 hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center justify-center font-semibold font-[Changa] text-sm whitespace-nowrap"
              >
                {t("feasibility.viewProjectsButton")}
              </Link>
            </div>
          </motion.form>
        </div>
      </div>
    </>
  );
}