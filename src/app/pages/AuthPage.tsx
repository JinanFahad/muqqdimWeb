import { useState } from "react";
import { useNavigate, Link } from "react-router";
import { Mail, Lock, User, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { useTheme } from "../contexts/ThemeContext";
const logoImage = "/assets/logo-color.png";


export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock authentication
    const user = {
      name: isLogin ? "المستخدم" : formData.name,
      email: formData.email,
    };
    
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("user", JSON.stringify(user));
    
    navigate("/dashboard");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
      dir="rtl"
      style={isDark ? { background: '#0a2e2a' } : { background: '#F5FAF9' }}
    >
      <div className="w-full max-w-md relative z-10">
        {/* Logo */}
        <div className="text-center mb-10">
          <div
            className="inline-block rounded-2xl p-6 mb-6"
            style={isDark ? {
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(198,167,94,0.3)',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              backdropFilter: 'blur(10px)',
            } : {
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              boxShadow: '0 4px 12px rgba(8,49,45,0.08)',
            }}
          >
            <img 
              src={logoImage} 
              alt="مُـقــــدِم" 
              className="h-20 w-auto mx-auto"
            />
          </div>
          
          <h2
            className="text-2xl font-bold mb-2"
            style={{ color: isDark ? '#ffffff' : '#08312D' }}
          >
            {isLogin ? "مرحباً بعودتك!" : "انضم إلى مُـقــــدِم"}
          </h2>
          <p className="font-[Changa]" style={{ color: isDark ? '#bdc6c1' : '#6b7280' }}>
            {isLogin ? "سجّل دخولك للمتابعة" : "ابدأ رحلتك الريادية اليوم"}
          </p>
        </div>

        {/* Auth Card */}
        <div
          className="rounded-2xl p-8"
          style={isDark ? {
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(198,167,94,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
            backdropFilter: 'blur(20px)',
          } : {
            background: '#ffffff',
            border: '1px solid #e5e7eb',
            boxShadow: '0 10px 25px rgba(8,49,45,0.08)',
          }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {!isLogin && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2 font-[Changa]"
                  style={{ color: isDark ? '#e8f0f0' : '#08312D' }}
                >
                  الاسم الكامل
                </label>
                <div className="relative">
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required={!isLogin}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pr-11 font-[Changa]"
                    style={isDark ? {
                      background: 'rgba(255,255,255,0.08)',
                      border: '1px solid rgba(77,184,174,0.3)',
                      color: '#f5f9f9',
                    } : {
                      background: '#F8FAFB',
                      border: '1px solid #d1d5db',
                      color: '#08312D',
                    }}
                    placeholder="أدخل اسمك الكامل"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2">
                    <User className="w-5 h-5" style={{ color: isDark ? '#4db8ae' : '#9ca3af' }} />
                  </div>
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-2 font-[Changa]"
                style={{ color: isDark ? '#e8f0f0' : '#08312D' }}
              >
                البريد الإلكتروني
              </label>
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pr-11 font-[Changa]"
                  style={isDark ? {
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(77,184,174,0.3)',
                    color: '#f5f9f9',
                  } : {
                    background: '#F8FAFB',
                    border: '1px solid #d1d5db',
                    color: '#08312D',
                  }}
                  placeholder="example@email.com"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Mail className="w-5 h-5" style={{ color: isDark ? '#4db8ae' : '#9ca3af' }} />
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2 font-[Changa]"
                style={{ color: isDark ? '#e8f0f0' : '#08312D' }}
              >
                كلمة المرور
              </label>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pr-11 font-[Changa]"
                  style={isDark ? {
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(77,184,174,0.3)',
                    color: '#f5f9f9',
                  } : {
                    background: '#F8FAFB',
                    border: '1px solid #d1d5db',
                    color: '#08312D',
                  }}
                  placeholder="••••••••"
                />
                <div className="absolute right-3 top-1/2 -translate-y-1/2">
                  <Lock className="w-5 h-5" style={{ color: isDark ? '#4db8ae' : '#9ca3af' }} />
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full py-6 text-lg font-bold rounded-xl transition-all font-[Changa]"
              style={isDark ? {
                background: 'linear-gradient(to right, #C6A75E, #a88f4e)',
                color: '#ffffff',
                boxShadow: '0 4px 20px rgba(198,167,94,0.3)',
                border: 'none',
              } : {
                background: '#08312D',
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(8,49,45,0.2)',
                border: 'none',
              }}
            >
              <span>{isLogin ? "تسجيل الدخول" : "إنشاء حساب"}</span>
              <ArrowLeft className="w-5 h-5 mr-2" />
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="font-medium transition-colors font-[Changa]"
              style={{ color: isDark ? '#C6A75E' : '#08312D' }}
            >
              {isLogin ? "ليس لديك حساب؟ سجل الآن" : "لديك حساب؟ سجل دخولك"}
            </button>
          </div>
        </div>

        {/* Back to Home */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 transition-colors font-[Changa]"
            style={{ color: isDark ? '#bdc6c1' : '#6b7280' }}
          >
            <ArrowLeft className="w-4 h-4 rotate-180" />
            <span>العودة للصفحة الرئيسية</span>
          </Link>
        </div>
      </div>
    </div>
  );
}