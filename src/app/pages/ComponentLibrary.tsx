import { useState } from "react";
import { 
  Check, 
  X, 
  Loader2, 
  ChevronDown,
  Search,
  AlertCircle,
  CheckCircle,
  Info,
  AlertTriangle,
  TrendingUp,
  Calendar,
  FileText
} from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";

export default function ComponentLibrary() {
  const [searchValue, setSearchValue] = useState("");
  const [progress, setProgress] = useState(65);

  return (
    <div className="p-6 lg:p-8 space-y-12" dir="rtl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-2">مكتبة المكونات</h1>
        <p className="text-lg text-[var(--gray-600)]">
          مجموعة شاملة من المكونات القابلة لإعادة الاستخدام
        </p>
      </div>

      {/* Buttons Section */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">الأزرار</h2>
          <p className="text-[var(--gray-600)]">أزرار متنوعة بحالات مختلفة</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm space-y-8">
          {/* Primary Buttons */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">أزرار أساسية</h3>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white">
                زر أساسي
              </Button>
              <Button className="bg-[var(--secondary-600)] hover:bg-[var(--secondary-700)] text-white">
                زر ثانوي
              </Button>
              <Button variant="outline" className="border-[var(--gray-300)] text-[var(--gray-700)]">
                زر بإطار
              </Button>
              <Button variant="ghost" className="text-[var(--gray-700)]">
                زر شفاف
              </Button>
              <Button variant="destructive">
                زر حذف
              </Button>
            </div>
          </div>

          {/* Button Sizes */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">أحجام الأزرار</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm" className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)]">
                صغير
              </Button>
              <Button className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)]">
                عادي
              </Button>
              <Button size="lg" className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)]">
                كبير
              </Button>
            </div>
          </div>

          {/* Button States */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">حالات الأزرار</h3>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)]">
                <Check className="w-4 h-4 ml-2" />
                مع أيقونة
              </Button>
              <Button disabled className="bg-[var(--gray-300)]">
                معطّل
              </Button>
              <Button className="bg-[var(--primary-600)] hover:bg-[var(--primary-700)]">
                <Loader2 className="w-4 h-4 ml-2 animate-spin" />
                جاري التحميل...
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Form Elements */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">عناصر النماذج</h2>
          <p className="text-[var(--gray-600)]">حقول إدخال وعناصر تفاعلية</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm space-y-6">
          {/* Text Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--gray-900)]">حقل نص عادي</label>
            <Input 
              placeholder="أدخل النص هنا..." 
              className="bg-[var(--gray-50)] border-[var(--gray-300)]"
            />
            <p className="text-xs text-[var(--gray-500)]">نص مساعد يوضح تفاصيل الحقل</p>
          </div>

          {/* Search Input */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--gray-900)]">حقل بحث</label>
            <div className="relative">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--gray-500)]" />
              <Input 
                placeholder="ابحث..." 
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="pr-10 bg-[var(--gray-50)] border-[var(--gray-300)]"
              />
            </div>
          </div>

          {/* Text Area */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--gray-900)]">حقل نص طويل</label>
            <Textarea 
              placeholder="أدخل وصف مفصل..." 
              rows={4}
              className="bg-[var(--gray-50)] border-[var(--gray-300)]"
            />
          </div>

          {/* Error State */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--gray-900)]">حقل مع خطأ</label>
            <Input 
              placeholder="حقل مطلوب" 
              className="border-[var(--error-600)] bg-[var(--error-50)]"
            />
            <p className="text-xs text-[var(--error-600)] flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              هذا الحقل مطلوب
            </p>
          </div>

          {/* Success State */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[var(--gray-900)]">حقل صحيح</label>
            <Input 
              placeholder="البيانات صحيحة" 
              className="border-[var(--success-600)] bg-[var(--success-50)]"
              defaultValue="user@example.com"
            />
            <p className="text-xs text-[var(--success-600)] flex items-center gap-1">
              <CheckCircle className="w-3 h-3" />
              البيانات المدخلة صحيحة
            </p>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">البطاقات</h2>
          <p className="text-[var(--gray-600)]">أنماط بطاقات متنوعة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project Card */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 border-[var(--gray-200)]">
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-lg bg-[var(--primary-100)] flex items-center justify-center">
                <FileText className="w-6 h-6 text-[var(--primary-600)]" />
              </div>
              <Badge className="bg-[var(--success-50)] text-[var(--success-700)] border-[var(--success-200)]">
                نشط
              </Badge>
            </div>
            <h3 className="text-lg font-bold text-[var(--gray-900)] mb-2">بطاقة مشروع</h3>
            <p className="text-sm text-[var(--gray-600)] mb-4">
              وصف موجز للمشروع يوضح الفكرة الأساسية والأهداف الرئيسية
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--gray-600)]">التقدم</span>
              <span className="font-bold text-[var(--primary-600)]">75%</span>
            </div>
            <Progress value={75} className="mt-2" />
          </Card>

          {/* Stats Card */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 border-[var(--gray-200)]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <p className="text-sm text-[var(--gray-600)] mb-1">إجمالي الإيرادات</p>
                <p className="text-3xl font-bold text-[var(--gray-900)]">450,000 ر.س</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[var(--success-50)] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[var(--success-600)]" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-[var(--success-600)] font-medium flex items-center gap-1">
                <TrendingUp className="w-4 h-4" />
                +15%
              </span>
              <span className="text-[var(--gray-600)]">مقارنة بالشهر الماضي</span>
            </div>
          </Card>

          {/* Info Card */}
          <Card className="p-6 hover:shadow-lg transition-all duration-200 border-[var(--gray-200)] bg-gradient-to-br from-[var(--primary-50)] to-white">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-[var(--primary-600)] flex items-center justify-center flex-shrink-0">
                <Info className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-[var(--gray-900)] mb-2">نصيحة احترافية</h3>
                <p className="text-sm text-[var(--gray-700)]">
                  استخدم التحليل الشامل للسوق لتحديد الفرص الاستثمارية الأفضل
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Badges & Status */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">الشارات والحالات</h2>
          <p className="text-[var(--gray-600)]">عرض الحالات والتصنيفات</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">شارات الحالة</h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[var(--success-50)] text-[var(--success-700)] border border-[var(--success-200)]">
                نجاح
              </Badge>
              <Badge className="bg-[var(--warning-50)] text-[var(--warning-700)] border border-[var(--warning-200)]">
                تحذير
              </Badge>
              <Badge className="bg-[var(--error-50)] text-[var(--error-700)] border border-[var(--error-200)]">
                خطأ
              </Badge>
              <Badge className="bg-[var(--info-50)] text-[var(--info-700)] border border-[var(--info-200)]">
                معلومات
              </Badge>
              <Badge className="bg-[var(--gray-100)] text-[var(--gray-700)] border border-[var(--gray-300)]">
                محايد
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">شارات الأولوية</h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-[var(--error-600)] text-white">عالية</Badge>
              <Badge className="bg-[var(--warning-600)] text-white">متوسطة</Badge>
              <Badge className="bg-[var(--gray-600)] text-white">منخفضة</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Progress Indicators */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">مؤشرات التقدم</h2>
          <p className="text-[var(--gray-600)]">عرض التقدم والإنجاز</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm space-y-6">
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--gray-900)]">التقدم العام</span>
                <span className="text-sm font-bold text-[var(--primary-600)]">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--gray-900)]">المرحلة الأولى</span>
                <span className="text-sm font-bold text-[var(--success-600)]">100%</span>
              </div>
              <Progress value={100} className="h-2 [&>div]:bg-[var(--success-600)]" />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[var(--gray-900)]">المرحلة الثانية</span>
                <span className="text-sm font-bold text-[var(--warning-600)]">45%</span>
              </div>
              <Progress value={45} className="h-2 [&>div]:bg-[var(--warning-600)]" />
            </div>
          </div>

          {/* Step Progress */}
          <div>
            <h3 className="text-lg font-semibold text-[var(--gray-900)] mb-4">مؤشر خطوات</h3>
            <div className="flex items-center justify-between">
              {[1, 2, 3, 4].map((step, index) => (
                <div key={step} className="flex items-center flex-1">
                  <div className="flex flex-col items-center">
                    <div className={`
                      w-10 h-10 rounded-full flex items-center justify-center font-bold
                      ${index < 2 
                        ? "bg-[var(--primary-600)] text-white" 
                        : index === 2 
                        ? "bg-[var(--primary-200)] text-[var(--primary-600)]"
                        : "bg-[var(--gray-200)] text-[var(--gray-600)]"
                      }
                    `}>
                      {index < 2 ? <Check className="w-5 h-5" /> : step}
                    </div>
                    <span className="text-xs text-[var(--gray-600)] mt-2">خطوة {step}</span>
                  </div>
                  {index < 3 && (
                    <div className={`flex-1 h-1 mx-2 ${
                      index < 2 ? "bg-[var(--primary-600)]" : "bg-[var(--gray-200)]"
                    }`}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">Accordion</h2>
          <p className="text-[var(--gray-600)]">قوائم قابلة للطي والتوسيع</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm">
          <Accordion type="single" collapsible className="space-y-2">
            <AccordionItem value="item-1" className="border border-[var(--gray-200)] rounded-lg px-4">
              <AccordionTrigger className="text-[var(--gray-900)] font-semibold hover:text-[var(--primary-600)]">
                ما هي دراسة الجدوى؟
              </AccordionTrigger>
              <AccordionContent className="text-[var(--gray-600)]">
                دراسة الجدوى هي تحليل شامل لمشروع مقترح لتحديد إمكانية نجاحه من الناحية الفنية والمالية والتسويقية.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-[var(--gray-200)] rounded-lg px-4">
              <AccordionTrigger className="text-[var(--gray-900)] font-semibold hover:text-[var(--primary-600)]">
                كيف يعمل الذكاء الاصطناعي في مُـقــــدِم؟
              </AccordionTrigger>
              <AccordionContent className="text-[var(--gray-600)]">
                يستخدم مُـقــــدِم تقنيات متقدمة في معالجة اللغة الطبيعية والتحليل التنبؤي لإنشاء دراسات جدوى احترافية بناءً على بيانات المستخدم.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-[var(--gray-200)] rounded-lg px-4">
              <AccordionTrigger className="text-[var(--gray-900)] font-semibold hover:text-[var(--primary-600)]">
                ما هي الإجراءات الحكومية المدعومة؟
              </AccordionTrigger>
              <AccordionContent className="text-[var(--gray-600)]">
                يغطي مُـقــــدِم جميع الإجراءات الحكومية المتعلقة بتأسيس الشركات، التراخيص، التسجيل في الضمان الاجتماعي، والمزيد.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Tabs */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">التبويبات</h2>
          <p className="text-[var(--gray-600)]">تنظيم المحتوى في أقسام</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm">
          <Tabs defaultValue="overview" dir="rtl">
            <TabsList className="bg-[var(--gray-100)]">
              <TabsTrigger value="overview">نظرة عامة</TabsTrigger>
              <TabsTrigger value="financial">التحليل المالي</TabsTrigger>
              <TabsTrigger value="market">تحليل السوق</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">نظرة عامة على المشروع</h3>
                <p className="text-[var(--gray-600)]">
                  هذا القسم يحتوي على معلومات عامة عن المشروع، الأهداف، والرؤية الاستراتيجية.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="financial" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">التحليل المالي</h3>
                <p className="text-[var(--gray-600)]">
                  تحليل شامل للتوقعات المالية، التكاليف المتوقعة، والعوائد الاستثمارية.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="market" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">تحليل السوق</h3>
                <p className="text-[var(--gray-600)]">
                  دراسة تفصيلية للسوق المستهدف، المنافسين، والفرص المتاحة.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Alerts */}
      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-[var(--gray-900)] mb-2">التنبيهات</h2>
          <p className="text-[var(--gray-600)]">رسائل إعلامية وتحذيرية</p>
        </div>

        <div className="bg-white rounded-xl p-8 border border-[var(--gray-200)] shadow-sm space-y-4">
          <div className="p-4 rounded-lg bg-[var(--success-50)] border border-[var(--success-200)] flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-[var(--success-600)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[var(--success-900)] mb-1">تم بنجاح!</p>
              <p className="text-sm text-[var(--success-700)]">تم حفظ التغييرات بنجاح</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[var(--warning-50)] border border-[var(--warning-200)] flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-[var(--warning-600)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[var(--warning-900)] mb-1">تحذير</p>
              <p className="text-sm text-[var(--warning-700)]">يرجى مراجعة البيانات قبل المتابعة</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[var(--error-50)] border border-[var(--error-200)] flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[var(--error-600)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[var(--error-900)] mb-1">خطأ</p>
              <p className="text-sm text-[var(--error-700)]">حدث خطأ أثناء معالجة الطلب</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-[var(--info-50)] border border-[var(--info-200)] flex items-start gap-3">
            <Info className="w-5 h-5 text-[var(--info-600)] flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-[var(--info-900)] mb-1">معلومة</p>
              <p className="text-sm text-[var(--info-700)]">يمكنك تصدير التقرير كملف PDF</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}