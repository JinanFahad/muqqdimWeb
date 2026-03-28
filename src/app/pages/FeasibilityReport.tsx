import { 
  Download, 
  Printer, 
  Share2,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Calendar,
  Users,
  Target,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  PieChart as PieChartIcon
} from "lucide-react";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area,
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function FeasibilityReport() {
  const monthlyProjections = [
    { month: "يناير", revenue: 45000, costs: 32000, profit: 13000 },
    { month: "فبراير", revenue: 52000, costs: 35000, profit: 17000 },
    { month: "مارس", revenue: 58000, costs: 36000, profit: 22000 },
    { month: "أبريل", revenue: 65000, costs: 38000, profit: 27000 },
    { month: "مايو", revenue: 72000, costs: 39000, profit: 33000 },
    { month: "يونيو", revenue: 78000, costs: 40000, profit: 38000 },
    { month: "يوليو", revenue: 85000, costs: 41000, profit: 44000 },
    { month: "أغسطس", revenue: 90000, costs: 42000, profit: 48000 },
    { month: "سبتمبر", revenue: 95000, costs: 43000, profit: 52000 },
    { month: "أكتوبر", revenue: 98000, costs: 43500, profit: 54500 },
    { month: "نوفمبر", revenue: 102000, costs: 44000, profit: 58000 },
    { month: "ديسمبر", revenue: 108000, costs: 45000, profit: 63000 },
  ];

  const marketShare = [
    { name: "منتجنا", value: 25, color: "var(--primary-500)" },
    { name: "المنافس أ", value: 30, color: "var(--secondary-500)" },
    { name: "المنافس ب", value: 20, color: "var(--warning-500)" },
    { name: "المنافس ج", value: 15, color: "var(--success-500)" },
    { name: "أخرى", value: 10, color: "var(--gray-400)" },
  ];

  const breakEvenData = [
    { month: "شهر 1", cumulative: -180000 },
    { month: "شهر 2", cumulative: -163000 },
    { month: "شهر 3", cumulative: -141000 },
    { month: "شهر 4", cumulative: -114000 },
    { month: "شهر 5", cumulative: -81000 },
    { month: "شهر 6", cumulative: -43000 },
    { month: "شهر 7", cumulative: 1000 },
    { month: "شهر 8", cumulative: 49000 },
    { month: "شهر 9", cumulative: 101000 },
    { month: "شهر 10", cumulative: 155500 },
    { month: "شهر 11", cumulative: 213500 },
    { month: "شهر 12", cumulative: 276500 },
  ];

  const keyMetrics = [
    { 
      label: "رأس المال المطلوب",
      value: "500,000 ر.س",
      icon: DollarSign,
      color: "var(--primary-600)",
      bg: "var(--primary-50)"
    },
    { 
      label: "العائد على الاستثمار",
      value: "45%",
      change: "+12%",
      icon: TrendingUp,
      color: "var(--success-600)",
      bg: "var(--success-50)"
    },
    { 
      label: "نقطة التعادل",
      value: "7 أشهر",
      icon: Calendar,
      color: "var(--warning-600)",
      bg: "var(--warning-50)"
    },
    { 
      label: "السوق المستهدف",
      value: "250,000",
      subtitle: "مستخدم محتمل",
      icon: Users,
      color: "var(--secondary-600)",
      bg: "var(--secondary-50)"
    },
  ];

  const costBreakdown = [
    { category: "التطوير التقني", amount: 180000, percentage: 36 },
    { category: "التسويق والإعلان", amount: 125000, percentage: 25 },
    { category: "الرواتب والتشغيل", amount: 100000, percentage: 20 },
    { category: "البنية التحتية", amount: 60000, percentage: 12 },
    { category: "أخرى", amount: 35000, percentage: 7 },
  ];

  const risks = [
    {
      title: "المنافسة الشديدة",
      severity: "عالية",
      severityColor: "error",
      mitigation: "التركيز على التمييز بالجودة والابتكار",
    },
    {
      title: "تغيير في اللوائح",
      severity: "متوسطة",
      severityColor: "warning",
      mitigation: "المتابعة المستمرة للتحديثات التنظيمية",
    },
    {
      title: "تأخير في التطوير",
      severity: "منخفضة",
      severityColor: "success",
      mitigation: "استخدام منهجية Agile والمراجعة الدورية",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--gray-50)]" dir="rtl">
      {/* Report Header */}
      <div className="bg-gradient-to-br from-[var(--primary-700)] via-[var(--primary-600)] to-[var(--primary-500)] text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <Badge className="bg-white/20 text-white border-white/30 mb-4">
                تقرير دراسة الجدوى
              </Badge>
              <h1 className="text-4xl font-bold mb-3">مشروع منصة التجارة الإلكترونية</h1>
              <p className="text-[var(--primary-100)] text-lg mb-4">
                دراسة جدوى شاملة لإطلاق منصة تجارة إلكترونية متخصصة في المنتجات المحلية
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  تاريخ الإعداد: 15 يناير 2024
                </span>
                <span className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  معد بواسطة: فريق مُـقــــدِم
                </span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-white text-[var(--primary-700)] hover:bg-[var(--gray-100)]">
                <Download className="w-4 h-4 ml-2" />
                تحميل PDF
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Printer className="w-4 h-4 ml-2" />
                طباعة
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                <Share2 className="w-4 h-4 ml-2" />
                مشاركة
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {keyMetrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <Card key={metric.label} className="p-6 bg-white border-[var(--gray-200)] shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <p className="text-sm text-[var(--gray-600)] mb-2">{metric.label}</p>
                    <p className="text-3xl font-bold text-[var(--gray-900)]">{metric.value}</p>
                    {metric.subtitle && (
                      <p className="text-xs text-[var(--gray-500)] mt-1">{metric.subtitle}</p>
                    )}
                    {metric.change && (
                      <p className="text-sm text-[var(--success-600)] font-medium mt-2">
                        {metric.change}
                      </p>
                    )}
                  </div>
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: metric.bg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: metric.color }} />
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 space-y-8">
        {/* Executive Summary */}
        <Card className="p-8 bg-white border-[var(--gray-200)]">
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-6">الملخص التنفيذي</h2>
          <div className="space-y-4 text-[var(--gray-700)] leading-relaxed">
            <p>
              تهدف هذه الدراسة إلى تقييم جدوى إطلاق منصة تجارة إلكترونية متخصصة في المنتجات المحلية والحرفية.
              تستهدف المنصة شريحة واسعة من المستهلكين الباحثين عن منتجات أصلية وعالية الجودة.
            </p>
            <p>
              تشير التوقعات المالية إلى إمكانية تحقيق نقطة التعادل خلال 7 أشهر من الإطلاق، مع عائد متوقع
              على الاستثمار بنسبة 45% خلال السنة الأولى.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="p-4 bg-[var(--success-50)] rounded-lg border border-[var(--success-200)]">
                <CheckCircle className="w-6 h-6 text-[var(--success-600)] mb-2" />
                <p className="font-semibold text-[var(--success-900)]">فرصة واعدة</p>
                <p className="text-sm text-[var(--success-700)] mt-1">السوق في نمو مستمر</p>
              </div>
              <div className="p-4 bg-[var(--info-50)] rounded-lg border border-[var(--info-200)]">
                <Target className="w-6 h-6 text-[var(--info-600)] mb-2" />
                <p className="font-semibold text-[var(--info-900)]">سوق مستهدف كبير</p>
                <p className="text-sm text-[var(--info-700)] mt-1">250,000 مستخدم محتمل</p>
              </div>
              <div className="p-4 bg-[var(--primary-50)] rounded-lg border border-[var(--primary-200)]">
                <TrendingUp className="w-6 h-6 text-[var(--primary-600)] mb-2" />
                <p className="font-semibold text-[var(--primary-900)]">نمو متوقع</p>
                <p className="text-sm text-[var(--primary-700)] mt-1">معدل نمو 35% سنوياً</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs for Different Sections */}
        <Card className="p-8 bg-white border-[var(--gray-200)]">
          <Tabs defaultValue="market" dir="rtl">
            <TabsList className="mb-8 bg-[var(--gray-100)]">
              <TabsTrigger value="market">تحليل السوق</TabsTrigger>
              <TabsTrigger value="financial">التوقعات المالية</TabsTrigger>
              <TabsTrigger value="competitors">المنافسون</TabsTrigger>
              <TabsTrigger value="risks">المخاطر</TabsTrigger>
            </TabsList>

            {/* Market Analysis */}
            <TabsContent value="market" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-4">تحليل السوق والفرص</h3>
                <div className="space-y-4 text-[var(--gray-700)]">
                  <p>
                    يشهد سوق التجارة الإلكترونية في المملكة نمواً متسارعاً بمعدل 35% سنوياً، مدفوعاً بزيادة
                    انتشار الإنترنت وتغير سلوك المستهلكين نحو التسوق الإلكتروني.
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-[var(--gray-900)] mb-3">الحصة السوقية المتوقعة</h4>
                      <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                          <Pie
                            data={marketShare}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={90}
                            fill="#C6A75E"
                            dataKey="value"
                          >
                            {marketShare.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Pie>
                          <Tooltip />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-[var(--gray-900)] mb-3">الفرص الرئيسية</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[var(--success-600)] flex-shrink-0 mt-0.5" />
                            <span>ارتفاع الطلب على المنتجات المحلية الأصيلة</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[var(--success-600)] flex-shrink-0 mt-0.5" />
                            <span>نقص المنصات المتخصصة في هذا القطاع</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[var(--success-600)] flex-shrink-0 mt-0.5" />
                            <span>دعم حكومي للمشاريع الصغيرة والمتوسطة</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="w-5 h-5 text-[var(--success-600)] flex-shrink-0 mt-0.5" />
                            <span>زيادة استخدام وسائل الدفع الإلكتروني</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[var(--gray-900)] mb-3">التحديات</h4>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-[var(--warning-600)] flex-shrink-0 mt-0.5" />
                            <span>المنافسة من المنصات الكبرى العامة</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <AlertTriangle className="w-5 h-5 text-[var(--warning-600)] flex-shrink-0 mt-0.5" />
                            <span>الحاجة لبناء الثقة مع البائعين والمشترين</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Financial Projections */}
            <TabsContent value="financial" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-4">التوقعات المالية</h3>
                
                {/* Revenue Chart */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[var(--gray-900)] mb-4">الإيرادات والتكاليف المتوقعة - السنة الأولى</h4>
                  <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={monthlyProjections}>
                      <defs>
                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--primary-500)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--primary-500)" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="var(--success-500)" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="var(--success-500)" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-200)" />
                      <XAxis dataKey="month" stroke="var(--gray-600)" />
                      <YAxis stroke="var(--gray-600)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          border: "1px solid var(--gray-200)",
                          borderRadius: "8px"
                        }}
                      />
                      <Legend />
                      <Area 
                        type="monotone" 
                        dataKey="revenue" 
                        name="الإيرادات"
                        stroke="var(--primary-600)" 
                        fillOpacity={1}
                        fill="url(#colorRevenue)"
                      />
                      <Area 
                        type="monotone" 
                        dataKey="profit" 
                        name="الأرباح"
                        stroke="var(--success-600)" 
                        fillOpacity={1}
                        fill="url(#colorProfit)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Break Even Analysis */}
                <div className="mb-8">
                  <h4 className="font-semibold text-[var(--gray-900)] mb-4">تحليل نقطة التعادل</h4>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={breakEvenData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--gray-200)" />
                      <XAxis dataKey="month" stroke="var(--gray-600)" />
                      <YAxis stroke="var(--gray-600)" />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: "white", 
                          border: "1px solid var(--gray-200)",
                          borderRadius: "8px"
                        }}
                      />
                      <Legend />
                      <Line 
                        type="monotone" 
                        dataKey="cumulative" 
                        name="الربح التراكمي"
                        stroke="var(--primary-600)" 
                        strokeWidth={3}
                        dot={{ fill: "var(--primary-600)", r: 4 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                  <p className="text-sm text-[var(--gray-600)] mt-4">
                    من المتوقع الوصول لنقطة التعادل في الشهر السابع من التشغيل
                  </p>
                </div>

                {/* Cost Breakdown */}
                <div>
                  <h4 className="font-semibold text-[var(--gray-900)] mb-4">توزيع التكاليف الاستثمارية</h4>
                  <div className="space-y-3">
                    {costBreakdown.map((item) => (
                      <div key={item.category} className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-medium text-[var(--gray-900)]">{item.category}</span>
                          <span className="text-[var(--gray-600)]">
                            {item.amount.toLocaleString('ar-SA')} ر.س ({item.percentage}%)
                          </span>
                        </div>
                        <div className="w-full bg-[var(--gray-200)] rounded-full h-2">
                          <div 
                            className="h-2 rounded-full bg-[var(--primary-600)]"
                            style={{ width: `${item.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Competitors */}
            <TabsContent value="competitors" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-4">تحليل المنافسين</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-[var(--gray-200)]">
                        <th className="text-right py-3 px-4 font-semibold text-[var(--gray-900)]">المنافس</th>
                        <th className="text-right py-3 px-4 font-semibold text-[var(--gray-900)]">نقاط القوة</th>
                        <th className="text-right py-3 px-4 font-semibold text-[var(--gray-900)]">نقاط الضعف</th>
                        <th className="text-right py-3 px-4 font-semibold text-[var(--gray-900)]">الحصة السوقية</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--gray-200)]">
                      <tr className="hover:bg-[var(--gray-50)]">
                        <td className="py-4 px-4 font-medium text-[var(--gray-900)]">المنافس أ</td>
                        <td className="py-4 px-4 text-sm text-[var(--gray-700)]">انتشار واسع، سمعة قوية</td>
                        <td className="py-4 px-4 text-sm text-[var(--gray-700)]">خدمة عملاء ضعيفة</td>
                        <td className="py-4 px-4">
                          <Badge className="bg-[var(--warning-50)] text-[var(--warning-700)]">30%</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-[var(--gray-50)]">
                        <td className="py-4 px-4 font-medium text-[var(--gray-900)]">المنافس ب</td>
                        <td className="py-4 px-4 text-sm text-[var(--gray-700)]">تقنية متقدمة، سرعة توصيل</td>
                        <td className="py-4 px-4 text-sm text-[var(--gray-700)]">أسعار مرتفعة</td>
                        <td className="py-4 px-4">
                          <Badge className="bg-[var(--info-50)] text-[var(--info-700)]">20%</Badge>
                        </td>
                      </tr>
                      <tr className="hover:bg-[var(--gray-50)]">
                        <td className="py-4 px-4 font-medium text-[var(--gray-900)]">المنافس ج</td>
                        <td className="py-4 px-4 text-sm text-[var(--gray-700)]">تخصص في قطاع معين</td>
                        <td className="py-4 px-4 text-sm text-[var(--gray-700)]">قاعدة عملاء محدودة</td>
                        <td className="py-4 px-4">
                          <Badge className="bg-[var(--gray-100)] text-[var(--gray-700)]">15%</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 p-6 bg-[var(--primary-50)] rounded-lg border border-[var(--primary-200)]">
                  <h4 className="font-semibold text-[var(--primary-900)] mb-3">ميزتنا التنافسية</h4>
                  <ul className="space-y-2 text-sm text-[var(--primary-800)]">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--primary-600)] flex-shrink-0 mt-0.5" />
                      <span>التركيز الحصري على المنتجات المحلية والحرفية عالية الجودة</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--primary-600)] flex-shrink-0 mt-0.5" />
                      <span>نظام تقييم وضمان جودة صارم للمنتجات</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--primary-600)] flex-shrink-0 mt-0.5" />
                      <span>تجربة مستخدم متميزة مع تخصيص ذكي بالذكاء الاصطناعي</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[var(--primary-600)] flex-shrink-0 mt-0.5" />
                      <span>دعم كامل للحرفيين والمنتجين الصغار</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* Risks */}
            <TabsContent value="risks" className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-[var(--gray-900)] mb-4">تحليل المخاطر واستراتيجيات التخفيف</h3>
                <div className="space-y-4">
                  {risks.map((risk, index) => (
                    <div 
                      key={index}
                      className={`p-6 rounded-lg border ${
                        risk.severityColor === "error" 
                          ? "bg-[var(--error-50)] border-[var(--error-200)]"
                          : risk.severityColor === "warning"
                          ? "bg-[var(--warning-50)] border-[var(--warning-200)]"
                          : "bg-[var(--success-50)] border-[var(--success-200)]"
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className={`font-semibold ${
                          risk.severityColor === "error" 
                            ? "text-[var(--error-900)]"
                            : risk.severityColor === "warning"
                            ? "text-[var(--warning-900)]"
                            : "text-[var(--success-900)]"
                        }`}>
                          {risk.title}
                        </h4>
                        <Badge className={`${
                          risk.severityColor === "error" 
                            ? "bg-[var(--error-600)] text-white"
                            : risk.severityColor === "warning"
                            ? "bg-[var(--warning-600)] text-white"
                            : "bg-[var(--success-600)] text-white"
                        }`}>
                          {risk.severity}
                        </Badge>
                      </div>
                      <p className={`text-sm ${
                        risk.severityColor === "error" 
                          ? "text-[var(--error-800)]"
                          : risk.severityColor === "warning"
                          ? "text-[var(--warning-800)]"
                          : "text-[var(--success-800)]"
                      }`}>
                        <span className="font-medium">استراتيجية التخفيف:</span> {risk.mitigation}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 bg-white rounded-lg border border-[var(--gray-200)]">
                  <h4 className="font-semibold text-[var(--gray-900)] mb-4">التوصيات</h4>
                  <ul className="space-y-3 text-[var(--gray-700)]">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--primary-600)] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        1
                      </div>
                      <span>بدء التنفيذ في Q1 2024 للاستفادة من نمو السوق</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--primary-600)] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        2
                      </div>
                      <span>التركيز على بناء علاقات قوية مع الحرفيين والمنتجين المحليين</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--primary-600)] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        3
                      </div>
                      <span>استثمار 25% من الميزانية في التسويق الرقمي والوعي بالعلامة التجارية</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[var(--primary-600)] text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        4
                      </div>
                      <span>إنشاء نظام ضمان جودة صارم لتمييز المنصة عن المنافسين</span>
                    </li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Conclusion */}
        <Card className="p-8 bg-gradient-to-br from-[var(--primary-50)] to-white border-[var(--primary-200)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[var(--primary-600)] flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--gray-900)] mb-3">الخلاصة والتوصية</h3>
              <p className="text-[var(--gray-700)] mb-4">
                بناءً على التحليل الشامل للسوق والتوقعات المالية وتقييم المخاطر، نوصي <strong>بالموافقة على المشروع
                والبدء في التنفيذ</strong>. المشروع يقدم فرصة استثمارية واعدة مع عائد متوقع مجزٍ ومخاطر قابلة للإدارة.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg border border-[var(--primary-300)]">
                  <p className="text-3xl font-bold text-[var(--primary-600)] mb-1">45%</p>
                  <p className="text-sm text-[var(--gray-600)]">عائد على الاستثمار</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-[var(--primary-300)]">
                  <p className="text-3xl font-bold text-[var(--primary-600)] mb-1">7</p>
                  <p className="text-sm text-[var(--gray-600)]">أشهر لنقطة التعادل</p>
                </div>
                <div className="text-center p-4 bg-white rounded-lg border border-[var(--primary-300)]">
                  <p className="text-3xl font-bold text-[var(--primary-600)] mb-1">عالي</p>
                  <p className="text-sm text-[var(--gray-600)]">احتمال النجاح</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}