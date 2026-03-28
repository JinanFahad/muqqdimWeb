import { useState } from "react";
import { 
  Search, 
  FileText, 
  DollarSign, 
  Clock, 
  Building2,
  ChevronDown,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Download
} from "lucide-react";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

interface Procedure {
  id: string;
  title: string;
  entity: string;
  duration: string;
  cost: string;
  priority: "high" | "medium" | "low";
  description: string;
  steps: string[];
  documents: string[];
  link: string;
  tips: string[];
}

export default function GovernmentProcedures() {
  const [searchQuery, setSearchQuery] = useState("");

  const procedures: Procedure[] = [
    {
      id: "1",
      title: "تسجيل الشركة في السجل التجاري",
      entity: "وزارة التجارة",
      duration: "1-3 أيام",
      cost: "200 ر.س",
      priority: "high",
      description: "تسجيل الشركة في السجل التجاري خطوة أساسية لبدء النشاط التجاري بشكل قانوني في المملكة.",
      steps: [
        "تسجيل حساب في منصة مركز الأعمال (mc.gov.sa)",
        "اختيار الاسم التجاري والتحقق من توفره",
        "تحديد نوع النشاط التجاري والشكل القانوني للشركة",
        "رفع المستندات المطلوبة",
        "دفع الرسوم المطلوبة إلكترونياً",
        "استلام شهادة السجل التجاري إلكترونياً",
      ],
      documents: [
        "نسخة من الهوية الوطنية أو الإقامة",
        "عقد تأسيس الشركة (للشركات)",
        "إثبات العنوان الوطني",
        "تفويض إلكتروني (في حال وجود وكيل)",
      ],
      link: "https://mc.gov.sa",
      tips: [
        "تأكد من توفر الاسم التجاري قبل البدء بالإجراءات",
        "استخدم العنوان الوطني المسجل في منصة سبل",
        "احتفظ بنسخة إلكترونية من جميع المستندات",
      ],
    },
    {
      id: "2",
      title: "استخراج الرقم الضريبي (ضريبة القيمة المضافة)",
      entity: "هيئة الزكاة والضريبة والجمارك",
      duration: "يوم واحد",
      cost: "مجاني",
      priority: "high",
      description: "التسجيل في ضريبة القيمة المضافة إلزامي للمنشآت التي تتجاوز إيراداتها السنوية 375,000 ر.س",
      steps: [
        "التسجيل في بوابة هيئة الزكاة والضريبة (zatca.gov.sa)",
        "إدخال بيانات المنشأة التجارية",
        "رفع المستندات المطلوبة",
        "مراجعة البيانات والتأكد من صحتها",
        "تقديم الطلب إلكترونياً",
        "استلام شهادة التسجيل في ضريبة القيمة المضافة",
      ],
      documents: [
        "السجل التجاري ساري المفعول",
        "الهوية الوطنية أو الإقامة",
        "إثبات العنوان الوطني",
        "رقم الآيبان البنكي",
      ],
      link: "https://zatca.gov.sa",
      tips: [
        "التسجيل إلزامي خلال 30 يوم من بداية النشاط",
        "احتفظ بجميع الفواتير والمستندات الضريبية",
        "قدم الإقرارات الضريبية في مواعيدها",
      ],
    },
    {
      id: "3",
      title: "تسجيل المنشأة في التأمينات الاجتماعية",
      entity: "المؤسسة العامة للتأمينات الاجتماعية",
      duration: "يوم واحد",
      cost: "مجاني (+ الاشتراكات الشهرية)",
      priority: "high",
      description: "تسجيل المنشأة والموظفين في نظام التأمينات الاجتماعية إلزامي لجميع المنشآت التي لديها موظفين.",
      steps: [
        "التسجيل في منصة التأمينات الاجتماعية (gosi.gov.sa)",
        "إدخال بيانات المنشأة",
        "تسجيل بيانات الموظفين",
        "تحديد الأجور الخاضعة للاشتراك",
        "تفعيل الخدمات الإلكترونية",
        "سداد الاشتراكات الشهرية",
      ],
      documents: [
        "السجل التجاري",
        "بيانات الموظفين (هوية، جوازات، إقامات)",
        "عقود العمل",
        "إثبات الأجور",
      ],
      link: "https://gosi.gov.sa",
      tips: [
        "سجل المنشأة قبل تعيين أي موظف",
        "سدد الاشتراكات في مواعيدها لتجنب الغرامات",
        "حدّث بيانات الموظفين عند أي تغيير",
      ],
    },
    {
      id: "4",
      title: "الحصول على رخصة البلدية",
      entity: "الأمانة / البلدية",
      duration: "3-7 أيام",
      cost: "يختلف حسب النشاط والموقع",
      priority: "medium",
      description: "الحصول على رخصة البلدية ضرورية لمزاولة النشاط التجاري من موقع فعلي.",
      steps: [
        "تحديد الموقع المناسب للنشاط",
        "التأكد من توافق النشاط مع تصنيف المنطقة",
        "تقديم طلب الرخصة عبر منصة بلدي",
        "رفع المخططات والمستندات المطلوبة",
        "دفع الرسوم المقررة",
        "انتظار الموافقة واستلام الرخصة",
      ],
      documents: [
        "السجل التجاري",
        "عقد الإيجار أو ملكية العقار",
        "مخطط الموقع",
        "صور للموقع",
        "شهادة الدفاع المدني (لبعض الأنشطة)",
      ],
      link: "https://balady.gov.sa",
      tips: [
        "تحقق من اشتراطات البلدية للنشاط قبل استئجار الموقع",
        "تأكد من الحصول على شهادة الدفاع المدني إن لزم",
        "جدد الرخصة سنوياً",
      ],
    },
    {
      id: "5",
      title: "تسجيل العلامة التجارية",
      entity: "الهيئة السعودية للملكية الفكرية",
      duration: "6-12 شهر",
      cost: "1,000 ر.س",
      priority: "medium",
      description: "حماية العلامة التجارية من الاستخدام غير المصرح به والتقليد.",
      steps: [
        "البحث عن العلامة التجارية للتأكد من عدم تسجيلها مسبقاً",
        "التسجيل في منصة الملكية الفكرية (saip.gov.sa)",
        "تعبئة طلب تسجيل العلامة التجارية",
        "رفع صورة العلامة التجارية بالمواصفات المطلوبة",
        "تحديد فئات المنتجات أو الخدمات",
        "دفع الرسوم",
        "متابعة الطلب حتى الموافقة النهائية",
      ],
      documents: [
        "السجل التجاري",
        "صورة العلامة التجارية (بدقة عالية)",
        "وصف تفصيلي للعلامة",
        "قائمة بالمنتجات/الخدمات",
      ],
      link: "https://saip.gov.sa",
      tips: [
        "ابحث جيداً قبل التقديم لتجنب رفض الطلب",
        "سجل العلامة في جميع الفئات ذات الصلة",
        "جدد التسجيل كل 10 سنوات",
      ],
    },
    {
      id: "6",
      title: "الحصول على ترخيص الاستثمار الأجنبي",
      entity: "وزارة الاستثمار",
      duration: "5-10 أيام",
      cost: "يختلف حسب نوع النشاط",
      priority: "low",
      description: "مطلوب للمستثمرين الأجانب الراغبين في تأسيس شركة أو الاستثمار في المملكة.",
      steps: [
        "التحقق من أهلية النشاط للاستثمار الأجنبي",
        "التسجيل في منصة الاستثمار (misa.gov.sa)",
        "تعبئة نموذج طلب الترخيص",
        "رفع المستندات المطلوبة",
        "دفع الرسوم",
        "انتظار الموافقة",
        "استلام الترخيص وإكمال إجراءات التأسيس",
      ],
      documents: [
        "جواز السفر ساري المفعول",
        "السجل التجاري من بلد المنشأ",
        "القوائم المالية للشركة الأم",
        "دراسة جدوى المشروع",
        "خطة العمل",
      ],
      link: "https://misa.gov.sa",
      tips: [
        "راجع قائمة الأنشطة المتاحة للاستثمار الأجنبي",
        "احصل على استشارة قانونية متخصصة",
        "تأكد من استيفاء جميع الشروط قبل التقديم",
      ],
    },
  ];

  const filteredProcedures = procedures.filter((proc) =>
    proc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proc.entity.toLowerCase().includes(searchQuery.toLowerCase()) ||
    proc.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return { text: "عالية الأهمية", className: "bg-[var(--error-50)] text-[var(--error-700)] border-[var(--error-200)]" };
      case "medium":
        return { text: "متوسطة الأهمية", className: "bg-[var(--warning-50)] text-[var(--warning-700)] border-[var(--warning-200)]" };
      case "low":
        return { text: "منخفضة الأهمية", className: "bg-[var(--gray-100)] text-[var(--gray-700)] border-[var(--gray-300)]" };
      default:
        return { text: "عادية", className: "bg-[var(--gray-100)] text-[var(--gray-700)]" };
    }
  };

  return (
    <div className="p-6 lg:p-8 space-y-8" dir="rtl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-[var(--gray-900)] mb-2">مساعد الإجراءات الحكومية</h1>
        <p className="text-lg text-[var(--gray-600)]">
          دليلك الشامل لجميع الإجراءات الحكومية اللازمة لتأسيس وتشغيل مشروعك
        </p>
      </div>

      {/* Search Bar */}
      <Card className="p-6 bg-white border-[var(--gray-200)]">
        <div className="relative">
          <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-500)]" />
          <Input
            placeholder="ابحث عن إجراء حكومي... (مثل: سجل تجاري، رخصة، تأمينات)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-12 py-6 text-base bg-[var(--gray-50)] border-[var(--gray-300)]"
          />
        </div>
      </Card>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-[var(--primary-50)] to-white border-[var(--primary-200)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[var(--primary-600)] flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-[var(--gray-600)] mb-1">إجمالي الإجراءات</p>
              <p className="text-3xl font-bold text-[var(--gray-900)]">{procedures.length}</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-[var(--success-50)] to-white border-[var(--success-200)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[var(--success-600)] flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-[var(--gray-600)] mb-1">إجراءات سريعة</p>
              <p className="text-3xl font-bold text-[var(--gray-900)]">3</p>
              <p className="text-xs text-[var(--gray-500)] mt-1">أقل من يومين</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-[var(--secondary-50)] to-white border-[var(--secondary-200)]">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-[var(--secondary-600)] flex items-center justify-center">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-[var(--gray-600)] mb-1">جهات حكومية</p>
              <p className="text-3xl font-bold text-[var(--gray-900)]">6</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Results Count */}
      {searchQuery && (
        <p className="text-sm text-[var(--gray-600)]">
          تم العثور على <span className="font-bold text-[var(--gray-900)]">{filteredProcedures.length}</span> إجراء
        </p>
      )}

      {/* Procedures List */}
      <div className="space-y-4">
        {filteredProcedures.map((procedure) => {
          const priorityBadge = getPriorityBadge(procedure.priority);
          
          return (
            <Card key={procedure.id} className="overflow-hidden border-[var(--gray-200)] hover:shadow-lg transition-shadow duration-200">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className="w-12 h-12 rounded-lg bg-[var(--primary-50)] flex items-center justify-center flex-shrink-0">
                        <FileText className="w-6 h-6 text-[var(--primary-600)]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">{procedure.title}</h3>
                        <p className="text-sm text-[var(--gray-600)]">{procedure.description}</p>
                      </div>
                    </div>
                  </div>
                  <Badge className={`${priorityBadge.className} border`}>
                    {priorityBadge.text}
                  </Badge>
                </div>

                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-[var(--gray-50)] rounded-lg">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-[var(--gray-500)]" />
                    <div>
                      <p className="text-xs text-[var(--gray-600)]">الجهة</p>
                      <p className="text-sm font-medium text-[var(--gray-900)]">{procedure.entity}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--gray-500)]" />
                    <div>
                      <p className="text-xs text-[var(--gray-600)]">المدة المتوقعة</p>
                      <p className="text-sm font-medium text-[var(--gray-900)]">{procedure.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="w-4 h-4 text-[var(--gray-500)]" />
                    <div>
                      <p className="text-xs text-[var(--gray-600)]">الرسوم</p>
                      <p className="text-sm font-medium text-[var(--gray-900)]">{procedure.cost}</p>
                    </div>
                  </div>
                </div>

                {/* Accordion for Details */}
                <Accordion type="single" collapsible>
                  <AccordionItem value="details" className="border-none">
                    <AccordionTrigger className="text-[var(--primary-600)] hover:text-[var(--primary-700)] font-medium py-2">
                      عرض التفاصيل الكاملة
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6 pt-4">
                      {/* Steps */}
                      <div>
                        <h4 className="font-semibold text-[var(--gray-900)] mb-3 flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-[var(--primary-600)]" />
                          الخطوات المطلوبة
                        </h4>
                        <ol className="space-y-2">
                          {procedure.steps.map((step, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-[var(--gray-700)]">
                              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[var(--primary-100)] text-[var(--primary-700)] flex items-center justify-center text-xs font-bold">
                                {index + 1}
                              </span>
                              <span className="flex-1">{step}</span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      {/* Documents */}
                      <div>
                        <h4 className="font-semibold text-[var(--gray-900)] mb-3 flex items-center gap-2">
                          <Download className="w-5 h-5 text-[var(--warning-600)]" />
                          المستندات المطلوبة
                        </h4>
                        <ul className="space-y-2">
                          {procedure.documents.map((doc, index) => (
                            <li key={index} className="flex items-center gap-2 text-sm text-[var(--gray-700)]">
                              <div className="w-2 h-2 rounded-full bg-[var(--warning-600)]"></div>
                              {doc}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tips */}
                      <div>
                        <h4 className="font-semibold text-[var(--gray-900)] mb-3 flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-[var(--info-600)]" />
                          نصائح مهمة
                        </h4>
                        <ul className="space-y-2">
                          {procedure.tips.map((tip, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm text-[var(--gray-700)] p-3 bg-[var(--info-50)] rounded-lg border border-[var(--info-200)]">
                              <AlertCircle className="w-4 h-4 text-[var(--info-600)] flex-shrink-0 mt-0.5" />
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Official Link */}
                      <div className="pt-4 border-t border-[var(--gray-200)]">
                        <Button
                          asChild
                          className="w-full bg-[var(--primary-600)] hover:bg-[var(--primary-700)] text-white"
                        >
                          <a href={procedure.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 ml-2" />
                            زيارة الموقع الرسمي للجهة
                          </a>
                        </Button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </Card>
          );
        })}
      </div>

      {/* No Results */}
      {filteredProcedures.length === 0 && (
        <Card className="p-12 text-center border-[var(--gray-200)]">
          <Search className="w-16 h-16 text-[var(--gray-400)] mx-auto mb-4" />
          <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">لم يتم العثور على نتائج</h3>
          <p className="text-[var(--gray-600)]">جرب البحث بكلمات مختلفة أو تصفح جميع الإجراءات</p>
        </Card>
      )}

      {/* Help Section */}
      <Card className="p-8 bg-gradient-to-br from-[var(--secondary-50)] to-white border-[var(--secondary-200)]">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[var(--secondary-600)] flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--gray-900)] mb-2">هل تحتاج مساعدة؟</h3>
            <p className="text-[var(--gray-700)] mb-4">
              فريقنا جاهز لمساعدتك في فهم الإجراءات الحكومية وتسهيل عملية التأسيس.
            </p>
            <Button className="bg-[var(--secondary-600)] hover:bg-[var(--secondary-700)] text-white">
              تواصل معنا
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
