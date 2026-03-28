import { Link } from "react-router";
import { Plus, Edit, Trash2, Check, MoreVertical, Calendar, DollarSign, TrendingUp, FolderOpen } from "lucide-react";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export default function MyProjects() {
  const projects = [
    {
      id: 1,
      name: "مشروع منصة التجارة الإلكترونية",
      description: "منصة متخصصة في بيع المنتجات المحلية والحرفية",
      status: "قيد المراجعة",
      statusColor: "warning",
      budget: "500,000 ر.س",
      roi: "45%",
      progress: 75,
      date: "2024-01-15",
      hasGovernmentData: true,
      procedures: [
        { name: "السجل التجاري", done: true },
        { name: "الرقم الضريبي", done: true },
        { name: "رخصة البلدية", done: false },
      ]
    },
    {
      id: 2,
      name: "تطبيق توصيل الطعام",
      description: "تطبيق ذكي لتوصيل الطعام من المطاعم المحلية",
      status: "مكتمل",
      statusColor: "success",
      budget: "350,000 ر.س",
      roi: "38%",
      progress: 100,
      date: "2024-01-10",
      hasGovernmentData: true,
      procedures: [
        { name: "السجل التجاري", done: true },
        { name: "الرقم الضريبي", done: true },
        { name: "رخصة البلدية", done: true },
      ]
    },
    {
      id: 3,
      name: "نظام إدارة المدارس",
      description: "نظام متكامل لإدارة العمليات التعليمية والإدارية",
      status: "قيد الإعداد",
      statusColor: "info",
      budget: "750,000 ر.س",
      roi: "52%",
      progress: 45,
      date: "2024-01-20",
      hasGovernmentData: false,
      procedures: []
    },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8 space-y-8" dir="rtl">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-[#08312d] mb-2">مشاريعي</h1>
            <p className="text-gray-600 text-lg">إدارة جميع مشاريعك ودراسات الجدوى</p>
          </div>
          <Link to="/app/ai-chat">
            <Button className="bg-gradient-to-r from-[#C6A75E] to-[#a88f4e] hover:from-[#a88f4e] hover:to-[#8f7840] text-white px-8 py-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl text-lg font-bold">
              <Plus className="w-6 h-6 ml-2" />
              مشروع جديد
            </Button>
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-semibold text-gray-700">إجمالي المشاريع</span>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#C6A75E] to-[#a88f4e] flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#08312d]">{projects.length}</p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-semibold text-gray-700">مكتملة</span>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0E4A43] to-[#08312D] flex items-center justify-center">
              <Check className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#08312d]">
            {projects.filter(p => p.status === "مكتمل").length}
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-semibold text-gray-700">متوسط العائد</span>
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#08312D] to-[#0E4A43] flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
          <p className="text-4xl font-bold text-[#08312d]">42%</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group border border-gray-200 hover:border-[#C6A75E]"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <Link 
                  to={`/feasibility/${project.id}`}
                  className="text-xl font-bold text-[#08312d] hover:text-[#C6A75E] transition-colors mb-2 block"
                >
                  {project.name}
                </Link>
                <p className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
                  {project.description}
                </p>
              </div>
              <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <MoreVertical className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Status Badge */}
            <div className="mb-4">
              <Badge className={`
                ${project.statusColor === "success" ? "bg-[#E6F2F0] text-[#0E4A43] border-[#0E4A43]/30" : ""}
                ${project.statusColor === "warning" ? "bg-[#F7FAF9] text-[#C6A75E] border-[#C6A75E]/30" : ""}
                ${project.statusColor === "info" ? "bg-[#E5ECEB] text-[#1F2A2A] border-[#1F2A2A]/30" : ""}
                border font-semibold px-3 py-1 text-sm
              `}>
                {project.status}
              </Badge>
            </div>

            {/* Info */}
            <div className="space-y-3 mb-4 bg-gray-50 rounded-xl p-4 border border-gray-200">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 flex items-center gap-2 font-semibold">
                  <Calendar className="w-4 h-4 text-[#C6A75E]" />
                  {project.date}
                </span>
                <span className="text-[#08312d] font-bold text-base">{project.budget}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-700 font-semibold">العائد المتوقع</span>
                <span className="text-[#0E4A43] font-bold text-lg">{project.roi}</span>
              </div>
            </div>

            {/* Progress */}
            <div className="mb-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span className="text-gray-700 font-semibold">التقدم</span>
                <span className="text-[#08312d] font-bold text-base">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3 shadow-inner">
                <div 
                  className="h-3 rounded-full transition-all duration-300 bg-gradient-to-r from-[#C6A75E] to-[#a88f4e] shadow-sm"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>

            {/* Government Data */}
            {project.hasGovernmentData && (
              <div className="bg-gradient-to-br from-[#E6F2F0] to-[#F7FAF9] rounded-xl p-4 mb-4 border border-[#E5ECEB]">
                <p className="text-sm font-bold text-[#08312d] mb-3 flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#0E4A43]" />
                  البيانات الحكومية
                </p>
                <div className="space-y-2">
                  {project.procedures.map((proc, index) => (
                    <div key={index} className="flex items-center justify-between text-sm bg-white/50 rounded-lg px-3 py-2">
                      <span className="text-gray-800 font-semibold">{proc.name}</span>
                      {proc.done ? (
                        <div className="w-5 h-5 rounded-full bg-[#0E4A43] flex items-center justify-center">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                      ) : (
                        <div className="w-5 h-5 rounded-full border-2 border-gray-400"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-2 pt-4 border-t border-gray-200">
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1 bg-white border-gray-300 text-gray-800 hover:bg-gray-100 hover:border-gray-400 font-semibold"
              >
                <Edit className="w-4 h-4 ml-1" />
                تعديل
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="flex-1 bg-[#E6F2F0] border-[#0E4A43]/30 text-[#0E4A43] hover:bg-[#0E4A43] hover:text-white font-semibold"
              >
                <Check className="w-4 h-4 ml-1" />
                تأكيد
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="bg-red-50 border-red-300 text-red-700 hover:bg-red-100"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ))}

        {/* Add New Card */}
        <Link
          to="/app/ai-chat"
          className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border-2 border-dashed border-gray-300 hover:border-[#C6A75E] flex flex-col items-center justify-center min-h-[400px] group"
        >
          <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#C6A75E] to-[#a88f4e] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl">
            <Plus className="w-12 h-12 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-[#08312d] mb-3">إنشاء مشروع جديد</h3>
          <p className="text-base text-gray-600 text-center font-medium leading-relaxed">
            ابدأ دراسة جدوى جديدة لمشروعك<br/>بمساعدة الذكاء الاصطناعي
          </p>
        </Link>
      </div>
    </div>
  );
}