import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useNavigate } from "react-router";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
const logoImage = "/assets/logo-color.png";

export default function AuthPageNew() {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const isAr = language === "ar";
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.email && loginData.password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", loginData.email);
      navigate("/dashboard");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (registerData.name && registerData.email && registerData.password) {
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userEmail", registerData.email);
      localStorage.setItem("userName", registerData.name);
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex" dir="rtl">
      {/* Right Side - Form Section (Light) */}
      <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 p-8">
        <div className="w-full max-w-md">
          {/* Tabs */}
          <div className="flex gap-2 mb-8 bg-gray-200 p-1 rounded-full">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex-1 py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 ${
                isLogin
                  ? "bg-[#08312D] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              تسجيل الدخول
            </button>

            <button
              onClick={() => setIsLogin(false)}
              className={`flex-1 py-3 px-6 rounded-full font-bold text-sm transition-all duration-300 ${
                !isLogin
                  ? "bg-[#08312D] text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              إنشاء حساب
            </button>
          </div>

          {isLogin ? (
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Welcome Message */}
              <div className="text-right mb-8">
                <h2 className="text-2xl font-bold text-[#08312D] dark:text-white mb-2">
                  {isAr ? "أهــلاً بــعــودتــك" : "Welcome Back"}
                </h2>
                <p className="text-gray-500 dark:text-white/60 text-sm font-[Changa]">
                  {isAr ? "سجّل دخولك للمتابعة" : "Sign in to continue"}
                </p>
              </div>

              {/* Email Field */}
              <div>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    value={loginData.email}
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                    placeholder="البريد الإلكتروني"
                    className="w-full pr-12 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:border-[#C6A75E] dark:focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/30 text-[#08312D] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 rounded-xl py-4 text-base shadow-sm font-[Changa]"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={(e) =>
                      setLoginData({ ...loginData, password: e.target.value })
                    }
                    placeholder="كلمة المرور"
                    className="w-full pr-12 pl-12 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:border-[#C6A75E] dark:focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/30 text-[#08312D] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 rounded-xl py-4 text-base shadow-sm font-[Changa]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#08312D] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <button
                  type="button"
                  className="text-[#C6A75E] hover:text-[#a88f4e] font-medium text-sm transition-colors font-[Changa]"
                >
                  نسيت كلمة المرور؟
                </button>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-[#08312D] hover:bg-[#0E4A43] text-white py-4 text-base font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-[Changa]"
              >
                دخول
              </Button>

              {/* Divider */}
              <div className="relative text-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative">
                  <span className="bg-transparent dark:bg-transparent px-4 text-gray-500 dark:text-white/50 text-sm font-[Changa]">
                    {isAr ? "أو باستخدام" : "or continue with"}
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-sm font-[Changa]"
                >
                  <span className="text-[#08312D] font-medium text-sm">
                    Facebook
                  </span>
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-sm font-[Changa]"
                >
                  <span className="text-[#08312D] font-medium text-sm">
                    Google
                  </span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleRegister} className="space-y-6">
              {/* Welcome Message */}
              <div className="text-right mb-8">
                <h2 className="text-2xl font-bold text-[#08312D] dark:text-white mb-2">
                  {isAr ? "أهــلاً بــك" : "Welcome"}
                </h2>
                <p className="text-gray-500 dark:text-white/60 text-sm font-[Changa]">
                  {isAr
                    ? "أنشئ حسابك للبدء"
                    : "Create your account to get started"}
                </p>
              </div>

              {/* Name Field */}
              <div>
                <div className="relative">
                  <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="text"
                    value={registerData.name}
                    onChange={(e) =>
                      setRegisterData({ ...registerData, name: e.target.value })
                    }
                    placeholder="الاسم الكامل"
                    className="w-full pr-12 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:border-[#C6A75E] dark:focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/30 text-[#08312D] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 rounded-xl py-4 text-base shadow-sm font-[Changa]"
                    required
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <div className="relative">
                  <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="email"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    placeholder="البريد الإلكتروني"
                    className="w-full pr-12 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:border-[#C6A75E] dark:focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/30 text-[#08312D] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 rounded-xl py-4 text-base shadow-sm font-[Changa]"
                    required
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className="relative">
                  <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type={showPassword ? "text" : "password"}
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    placeholder="كلمة المرور"
                    className="w-full pr-12 pl-12 bg-white dark:bg-white/10 border border-gray-300 dark:border-white/20 focus:border-[#C6A75E] dark:focus:border-[#C6A75E] focus:ring-2 focus:ring-[#C6A75E]/30 text-[#08312D] dark:text-white placeholder:text-gray-400 dark:placeholder:text-white/40 rounded-xl py-4 text-base shadow-sm font-[Changa]"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#08312D] transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Register Button */}
              <Button
                type="submit"
                className="w-full bg-[#08312D] hover:bg-[#0E4A43] text-white py-4 text-base font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg font-[Changa]"
              >
                إنشاء حساب
              </Button>

              {/* Divider */}
              <div className="relative text-center my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative">
                  <span className="bg-transparent dark:bg-transparent px-4 text-gray-500 dark:text-white/50 text-sm font-[Changa]">
                    {isAr ? "أو باستخدام" : "or continue with"}
                  </span>
                </div>
              </div>

              {/* Social Login Buttons */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-sm font-[Changa]"
                >
                  <span className="text-[#08312D] font-medium text-sm">
                    Facebook
                  </span>
                  <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 transition-all shadow-sm font-[Changa]"
                >
                  <span className="text-[#08312D] font-medium text-sm">
                    Google
                  </span>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Left Side - Logo Section (Dark Green) */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-[#08312D] via-[#0E4A43] to-[#1F2A2A] items-center justify-center relative overflow-hidden">
        {/* Concentric Circles Around Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer circle */}
          <div className="absolute w-[600px] h-[600px] rounded-full border border-white/5"></div>
          {/* Middle circle */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/8"></div>
          {/* Inner circle */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-white/10"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-12">
          {/* Logo */}
          <div className="mb-8">
            <img
              src={logoImage}
              alt="MOQDDIM"
              className="h-48 w-auto mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-white mb-6">مُـقــــدِم</h1>

          {/* Elegant Divider */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C6A75E]/40 to-[#C6A75E]/40 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-white/90 text-lg max-w-md mx-auto leading-relaxed font-[Changa]">
            منصة ذكية لإنشاء دراسات الجدوى
            <br />
            ومساعدتك في الإجراءات الحكومية
          </p>
        </div>
      </div>
    </div>
  );
}
