import { useState } from "react";
import { User, Mail, Phone, MapPin, Calendar, Edit2, Save } from "lucide-react";
import { Input } from "../components/ui/input";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

export default function ProfilePage() {
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [isEditing, setIsEditing] = useState(false);
  const user = JSON.parse(
    localStorage.getItem("user") || '{"name":"المستخدم","email":"user@example.com"}',
  );

  const [profile, setProfile] = useState({
    name: user.name || "المستخدم",
    email: user.email || "user@example.com",
    phone: "+966 50 123 4567",
    location: isAr ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia",
    joinDate: isAr ? "يناير 2024" : "January 2024",
    bio: isAr ? "رائد أعمال شغوف بالتقنية والابتكار" : "Entrepreneur passionate about technology and innovation",
  });

  const handleSave = () => {
    localStorage.setItem("user", JSON.stringify({ name: profile.name, email: profile.email }));
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-transparent dark:bg-gray-100 p-6 lg:p-8" dir={isAr ? "rtl" : "ltr"}>
        <div className="max-w-5xl mx-auto space-y-6">

          {/* Header */}
          <motion.div
            className="bg-white dark:bg-gray-200 rounded-xl p-8 border border-gray-200 dark:border-gray-300 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-14 h-14 rounded-lg bg-[#C6A75E] flex items-center justify-center">
                <User className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-[#08312D] dark:text-gray-900">
                  {isAr ? "الملف الشخصي" : "Profile"}
                </h1>
                <p className="text-gray-600 dark:text-gray-700 text-lg font-[Changa] mt-2">
                  {isAr ? "إدارة معلوماتك الشخصية وإعدادات حسابك" : "Manage your personal information and account settings"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Profile Card */}
          <motion.div
            className="bg-white dark:bg-gray-200 rounded-xl p-8 border border-gray-200 dark:border-gray-300 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex flex-col md:flex-row gap-8">

              {/* Avatar Section */}
              <div className="flex flex-col items-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-[#08312D] to-[#0E4A43] flex items-center justify-center mb-4 shadow-md">
                  <User className="w-16 h-16 text-white" />
                </div>
                <button className="text-[#C6A75E] hover:text-[#08312D] text-sm font-medium transition-colors font-[Changa]">
                  {isAr ? "تغيير الصورة" : "Change Photo"}
                </button>
              </div>

              {/* Info Section */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <h2 className="text-2xl font-bold text-[#08312D] dark:text-gray-900">
                    {isAr ? "معلومات الحساب" : "Account Information"}
                  </h2>
                  {!isEditing ? (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="flex items-center gap-2 bg-white border border-gray-300 hover:bg-gray-50 rounded-lg px-5 py-2.5 transition-all shadow-sm"
                    >
                      <Edit2 className="w-4 h-4 text-[#C6A75E]" />
                      <span className="text-[#08312D] font-medium font-[Changa]">
                        {isAr ? "تعديل" : "Edit"}
                      </span>
                    </button>
                  ) : (
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-2 bg-[#08312D] hover:bg-[#0E4A43] rounded-lg px-5 py-2.5 text-white transition-all shadow-sm"
                    >
                      <Save className="w-4 h-4" />
                      <span className="font-medium font-[Changa]">
                        {isAr ? "حفظ" : "Save"}
                      </span>
                    </button>
                  )}
                </div>

                <div className="space-y-4">
                  {/* Personal Info */}
                  <div className="bg-[#F7FAF9] dark:bg-gray-100 rounded-xl p-5 border border-gray-200">
                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-700 mb-4 flex items-center gap-2">
                      <div className="w-1 h-4 bg-[#08312D] rounded-full"></div>
                      {isAr ? "المعلومات الشخصية" : "Personal Information"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white dark:bg-gray-200 rounded-lg p-4 border border-gray-200">
                        <label className="block text-gray-500 dark:text-gray-600 text-xs mb-2 flex items-center gap-2 font-medium font-[Changa]">
                          <User className="w-3.5 h-3.5 text-[#08312D]" />
                          {isAr ? "الاسم الكامل" : "Full Name"}
                        </label>
                        {isEditing ? (
                          <Input value={profile.name} onChange={(e) => setProfile({ ...profile, name: e.target.value })} className="bg-white dark:bg-gray-200 border-gray-300 text-[#08312D] dark:text-gray-900 focus:border-[#C6A75E]" />
                        ) : (
                          <p className="text-[#08312D] dark:text-gray-900 font-semibold">{profile.name}</p>
                        )}
                      </div>

                      <div className="bg-white dark:bg-gray-200 rounded-lg p-4 border border-gray-200">
                        <label className="block text-gray-500 dark:text-gray-600 text-xs mb-2 flex items-center gap-2 font-medium font-[Changa]">
                          <Mail className="w-3.5 h-3.5 text-[#08312D]" />
                          {isAr ? "البريد الإلكتروني" : "Email"}
                        </label>
                        {isEditing ? (
                          <Input value={profile.email} onChange={(e) => setProfile({ ...profile, email: e.target.value })} className="bg-white dark:bg-gray-200 border-gray-300 text-[#08312D] dark:text-gray-900 focus:border-[#C6A75E]" />
                        ) : (
                          <p className="text-[#08312D] dark:text-gray-900 font-semibold text-sm">{profile.email}</p>
                        )}
                      </div>

                      <div className="bg-white dark:bg-gray-200 rounded-lg p-4 border border-gray-200">
                        <label className="block text-gray-500 dark:text-gray-600 text-xs mb-2 flex items-center gap-2 font-medium font-[Changa]">
                          <Phone className="w-3.5 h-3.5 text-[#08312D]" />
                          {isAr ? "رقم الجوال" : "Phone Number"}
                        </label>
                        {isEditing ? (
                          <Input value={profile.phone} onChange={(e) => setProfile({ ...profile, phone: e.target.value })} className="bg-white dark:bg-gray-200 border-gray-300 text-[#08312D] dark:text-gray-900 focus:border-[#C6A75E]" />
                        ) : (
                          <p className="text-[#08312D] dark:text-gray-900 font-semibold">{profile.phone}</p>
                        )}
                      </div>

                      <div className="bg-white dark:bg-gray-200 rounded-lg p-4 border border-gray-200">
                        <label className="block text-gray-500 dark:text-gray-600 text-xs mb-2 flex items-center gap-2 font-medium font-[Changa]">
                          <MapPin className="w-3.5 h-3.5 text-[#08312D]" />
                          {isAr ? "الموقع" : "Location"}
                        </label>
                        {isEditing ? (
                          <Input value={profile.location} onChange={(e) => setProfile({ ...profile, location: e.target.value })} className="bg-white dark:bg-gray-200 border-gray-300 text-[#08312D] dark:text-gray-900 focus:border-[#C6A75E]" />
                        ) : (
                          <p className="text-[#08312D] dark:text-gray-900 font-semibold text-sm">{profile.location}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="bg-[#F7FAF9] dark:bg-gray-100 rounded-xl p-5 border border-gray-200">
                    <h3 className="text-sm font-bold text-gray-600 dark:text-gray-700 mb-4 flex items-center gap-2">
                      <div className="w-1 h-4 bg-[#C6A75E] rounded-full"></div>
                      {isAr ? "معلومات إضافية" : "Additional Information"}
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white dark:bg-gray-200 rounded-lg p-4 border border-gray-200">
                        <label className="block text-gray-500 dark:text-gray-600 text-xs mb-2 flex items-center gap-2 font-medium font-[Changa]">
                          <Calendar className="w-3.5 h-3.5 text-[#08312D]" />
                          {isAr ? "تاريخ الانضمام" : "Join Date"}
                        </label>
                        <p className="text-[#08312D] dark:text-gray-900 font-semibold">{profile.joinDate}</p>
                      </div>

                      <div className="bg-white dark:bg-gray-200 rounded-lg p-4 border border-gray-200">
                        <label className="block text-gray-500 dark:text-gray-600 text-xs mb-2 font-medium font-[Changa]">
                          {isAr ? "نبذة عني" : "About Me"}
                        </label>
                        {isEditing ? (
                          <textarea
                            value={profile.bio}
                            onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                            className="w-full bg-white dark:bg-gray-200 border border-gray-300 rounded-lg px-3 py-2 text-[#08312D] dark:text-gray-900 resize-none focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/20 outline-none transition-all text-sm"
                            rows={3}
                          />
                        ) : (
                          <p className="text-[#08312D] dark:text-gray-900 font-medium text-sm leading-relaxed">{profile.bio}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}