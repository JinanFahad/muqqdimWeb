import { Link } from "react-router";
import { 
  TrendingUp, 
  FileText, 
  Clock, 
  CheckCircle,
  Plus,
  ArrowUp,
  ArrowDown,
  MoreVertical,
  Calendar,
  DollarSign,
  Users,
  Target
} from "lucide-react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { ThemeToggle } from "../components/ThemeToggle";

export default function Dashboard() {
  const stats = [
    {
      title: "إجمالي المشاريع",
      value: "24",
      change: "+12%",
      trend: "up",
      icon: FileText,
      color: "var(--primary-600)",
      bgColor: "var(--primary-50)",
    },
    {
      title: "المشاريع النشطة",
      value: "8",
      change: "+3",
      trend: "up",
      icon: Clock,
      color: "var(--warning-600)",
      bgColor: "var(--warning-50)",
    },
    {
      title: "المشاريع المكتملة",
      value: "16",
      change: "+8%",
      trend: "up",
      icon: CheckCircle,
      color: "var(--success-600)",
      bgColor: "var(--success-50)",
    },
    {
      title: "معدل النجاح",
      value: "87%",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
      color: "var(--secondary-600)",
      bgColor: "var(--secondary-50)",
    },
  ];

  const projects = [
    {
      id: 1,
      name: "مشروع منصة التجارة الإلكترونية",
      status: "قيد المراجعة",
      statusColor: "warning",
      budget: "500,000 ر.س",
      progress: 75,
      date: "2024-01-15",
      roi: "45%",
    },
    {
      id: 2,
      name: "تطبيق توصيل الطعام",
      status: "مكتمل",
      statusColor: "success",
      budget: "350,000 ر.س",
      progress: 100,
      date: "2024-01-10",
      roi: "38%",
    },
    {
      id: 3,
      name: "نظام إدارة المدارس",
      status: "قيد الإعداد",
      statusColor: "info",
      budget: "750,000 ر.س",
      progress: 45,
      date: "2024-01-20",
      roi: "52%",
    },
    {
      id: 4,
      name: "منصة حجز المواعيد الطبية",
      status: "مكتمل",
      statusColor: "success",
      budget: "420,000 ر.س",
      progress: 100,
      date: "2024-01-05",
      roi: "42%",
    },
  ];

  const revenueData = [
    { month: "يناير", revenue: 45000, costs: 32000 },
    { month: "فبراير", revenue: 52000, costs: 35000 },
    { month: "مارس", revenue: 48000, costs: 33000 },
    { month: "أبريل", revenue: 61000, costs: 38000 },
    { month: "مايو", revenue: 55000, costs: 36000 },
    { month: "يونيو", revenue: 67000, costs: 40000 },
  ];

  const categoryData = [
    { name: "تقنية", value: 35, color: "var(--primary-500)" },
    { name: "تجارة", value: 25, color: "var(--secondary-500)" },
    { name: "صحة", value: 20, color: "var(--success-500)" },
    { name: "تعليم", value: 15, color: "var(--warning-500)" },
    { name: "أخرى", value: 5, color: "var(--gray-400)" },
  ];

  const activities = [
    { type: "إنشاء", project: "مشروع منصة التجارة الإلكترونية", time: "منذ ساعتين", icon: Plus },
    { type: "تحديث", project: "تطبيق توصيل الطعام", time: "منذ 4 ساعات", icon: FileText },
    { type: "مراجعة", project: "نظام إدارة المدارس", time: "منذ 6 ساعات", icon: CheckCircle },
    { type: "إكمال", project: "منصة حجز المواعيد الطبية", time: "منذ يوم", icon: CheckCircle },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 bg-gray-50 dark:bg-gray-100 min-h-screen" dir="rtl">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#08312D] dark:text-gray-900">لوحة التحكم</h1>
          <p className="text-gray-600 dark:text-gray-700 mt-1 font-[Changa]">نظرة عامة على مشاريعك ودراسات الجدوى</p>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/app/ai-chat"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#08312D] dark:bg-primary-600 hover:bg-[#0E4A43] dark:hover:bg-primary-700 text-white rounded-lg transition-all shadow-md hover:shadow-lg font-[Changa]"
          >
            <Plus className="w-5 h-5" />
            مشروع جديد
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const trendUp = stat.trend === "up";
          return (
            <div
              key={stat.title}
              className="bg-white dark:bg-gray-200 rounded-xl p-6 border border-gray-200 dark:border-gray-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-sm text-gray-600 dark:text-gray-700 mb-2 font-[Changa]">{stat.title}</p>
                  <p className="text-3xl font-bold text-[#08312D] dark:text-gray-900 mb-2">{stat.value}</p>
                  <div className={`inline-flex items-center gap-1 text-sm font-medium ${
                    trendUp ? "text-green-600 dark:text-green-700" : "text-red-600 dark:text-red-700"
                  }`}>
                    {trendUp ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                    {stat.change}
                  </div>
                </div>
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: stat.bgColor }}
                >
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Revenue Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-200 rounded-xl p-6 border border-gray-200 dark:border-gray-300">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-[#08312D] dark:text-gray-900">الإيرادات والتكاليف</h3>
              <p className="text-sm text-gray-600 dark:text-gray-700 mt-1 font-[Changa]">آخر 6 أشهر</p>
            </div>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-300 rounded-lg transition-colors">
              <MoreVertical className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" style={{ fontSize: '12px' }} />
              <YAxis stroke="#6B7280" style={{ fontSize: '12px' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#FFFFFF", 
                  border: "1px solid #E5E7EB",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
              />
              <Legend wrapperStyle={{ fontSize: '12px' }} />
              <Line 
                type="monotone" 
                dataKey="revenue" 
                name="الإيرادات"
                stroke="#C6A75E" 
                strokeWidth={3}
                dot={{ fill: "#C6A75E", r: 4 }}
              />
              <Line 
                type="monotone" 
                dataKey="costs" 
                name="التكاليف"
                stroke="#EF4444" 
                strokeWidth={3}
                dot={{ fill: "#EF4444", r: 4 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Pie Chart */}
        <div className="bg-white dark:bg-gray-200 rounded-xl p-6 border border-gray-200 dark:border-gray-300">
          <h3 className="text-lg font-bold text-[#08312D] dark:text-gray-900 mb-6">توزيع المشاريع</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ 
                backgroundColor: "#FFFFFF", 
                border: "1px solid #E5E7EB",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
              }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="mt-4 space-y-2">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-gray-600 dark:text-gray-700 font-[Changa]">{cat.name}</span>
                </div>
                <span className="font-medium text-[#08312D] dark:text-gray-900">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Projects and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Projects List */}
        <div className="lg:col-span-2 bg-white dark:bg-gray-200 rounded-xl p-6 border border-gray-200 dark:border-gray-300">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-[#08312D] dark:text-gray-900">المشاريع الأخيرة</h3>
            <Link to="/feasibility/demo" className="text-sm text-[#08312D] dark:text-primary-700 hover:text-[#0E4A43] dark:hover:text-primary-800 font-medium font-[Changa]">
              عرض الكل
            </Link>
          </div>
          <div className="space-y-4">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/feasibility/${project.id}`}
                className="block p-4 rounded-lg border border-gray-200 dark:border-gray-300 hover:border-[#08312D] dark:hover:border-primary-600 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="font-medium text-[#08312D] dark:text-gray-900 mb-1">{project.name}</h4>
                    <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-700">
                      <span className="flex items-center gap-1 font-[Changa]">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </span>
                      <span className="flex items-center gap-1 font-[Changa]">
                        <DollarSign className="w-4 h-4" />
                        {project.budget}
                      </span>
                    </div>
                  </div>
                  <span className={`
                    px-3 py-1 rounded-full text-xs font-medium font-[Changa]
                    ${project.statusColor === "success" ? "bg-green-100 dark:bg-green-200 text-green-700 dark:text-green-800" : ""}
                    ${project.statusColor === "warning" ? "bg-yellow-100 dark:bg-yellow-200 text-yellow-700 dark:text-yellow-800" : ""}
                    ${project.statusColor === "info" ? "bg-blue-100 dark:bg-blue-200 text-blue-700 dark:text-blue-800" : ""}
                  `}>
                    {project.status}
                  </span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-gray-700 font-[Changa]">التقدم</span>
                    <span className="font-medium text-[#08312D] dark:text-gray-900">{project.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-300 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full transition-all duration-300"
                      style={{ 
                        width: `${project.progress}%`,
                        backgroundColor: project.statusColor === "success" ? "#10B981" : "#C6A75E"
                      }}
                    ></div>
                  </div>
                  <div className="flex items-center justify-between text-sm pt-2">
                    <span className="text-gray-600 dark:text-gray-700 font-[Changa]">العائد المتوقع</span>
                    <span className="font-bold text-green-600 dark:text-green-700">{project.roi}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Activity Timeline */}
        <div className="bg-white dark:bg-gray-200 rounded-xl p-6 border border-gray-200 dark:border-gray-300">
          <h3 className="text-lg font-bold text-[#08312D] dark:text-gray-900 mb-6">النشاط الأخير</h3>
          <div className="space-y-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="flex gap-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#E6F2F0] dark:bg-primary-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#08312D] dark:text-primary-700" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-[#08312D] dark:text-gray-900 mb-1">{activity.type}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-700 mb-1 font-[Changa]">{activity.project}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-600 font-[Changa]">{activity.time}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}