import { Link, Outlet, useLocation, useNavigate } from "react-router";
import { useState } from "react";
import { 
  LayoutDashboard, 
  FileText, 
  MessageSquare, 
  Building2,
  Palette,
  Component,
  Menu,
  X,
  ChevronRight,
  LogOut
} from "lucide-react";
const logo = "/assets/logo-white.png";

export default function Root() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("userEmail");
    localStorage.removeItem("userName");
    navigate("/login");
  };

  const navigation = [
    { name: "لوحة التحكم", path: "/app", icon: LayoutDashboard },
    { name: "مشاريعي", path: "/app/projects", icon: FileText },
    { name: "مساعد الذكاء الاصطناعي", path: "/app/ai-chat", icon: MessageSquare },
    { name: "الإجراءات الحكومية", path: "/app/government-procedures", icon: Building2 },
    { name: "نظام التصميم", path: "/app/design-system", icon: Palette },
    { name: "مكتبة المكونات", path: "/app/components", icon: Component },
  ];

  const isActive = (path: string) => {
    if (path === "/app") return location.pathname === "/app";
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      {/* Header */}
      <header className="bg-white dark:bg-gray-200 fixed top-0 right-0 left-0 z-50 border-b border-gray-200 dark:border-gray-300 shadow-sm">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-300 transition-colors lg:hidden"
            >
              {sidebarOpen ? <X className="w-5 h-5 text-[#08312D] dark:text-gray-900" /> : <Menu className="w-5 h-5 text-[#08312D] dark:text-gray-900" />}
            </button>
            <Link to="/app" className="flex items-center gap-3">
              <img src={logo} alt="مُقدِّم" className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-[#08312D] dark:text-gray-900">مُقدِّم</h1>
                <p className="text-xs text-gray-600 dark:text-gray-700 font-[Changa]">منصة دراسات الجدوى الذكية</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-100 rounded-lg border border-green-200 dark:border-green-300">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-700 dark:text-green-800 font-medium font-[Changa]">النظام متصل</span>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-300 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4 text-red-600" />
              <span className="text-sm text-[#08312D] dark:text-gray-900 hidden md:inline font-[Changa]">تسجيل الخروج</span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside
          className={`
            fixed lg:sticky top-16 right-0 z-40 h-[calc(100vh-4rem)]
            bg-white dark:bg-gray-200 border-l border-gray-200 dark:border-gray-300
            transition-all duration-300
            ${sidebarOpen ? "w-72" : "w-0 lg:w-20"}
            overflow-hidden
          `}
        >
          <nav className="p-4 space-y-2">
            {navigation.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200
                    ${active 
                      ? "bg-[#08312D] dark:bg-primary-600 text-white shadow-md" 
                      : "hover:bg-gray-100 dark:hover:bg-gray-300 text-gray-700 dark:text-gray-800"
                    }
                  `}
                >
                  <Icon className={`w-5 h-5 flex-shrink-0 ${active ? "text-white" : "text-[#08312D] dark:text-primary-700"}`} />
                  <span className={`font-medium font-[Changa] ${sidebarOpen ? "block" : "hidden lg:hidden"} ${active ? "text-white" : "text-gray-700 dark:text-gray-800"}`}>
                    {item.name}
                  </span>
                  {active && sidebarOpen && (
                    <ChevronRight className="w-4 h-4 mr-auto text-white" />
                  )}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-[calc(100vh-4rem)]">
          <Outlet />
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}