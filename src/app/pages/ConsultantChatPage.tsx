import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router";
import { Send, Loader2, ArrowLeft, Bot, User, Lightbulb } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
const logoImage = "/assets/logo-color.png";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ConsultantChatPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState<any>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();
  const isAr = language === "ar";

  useEffect(() => {
    const projects = JSON.parse(localStorage.getItem("projects") || "[]");
    const foundProject = projects.find((p: any) => p.id === Number(projectId));

    if (foundProject) {
      setProject(foundProject);
      setMessages([
        {
          id: "1",
          role: "assistant",
          content: isAr
            ? `مرحباً! 👋\n\nأنا مساعدك الاستشاري المتخصص. سأساعدك في تحليل ومناقشة مشروع "${foundProject.projectName}".\n\n**نظرة سريعة على مشروعك:**\n• النوع: ${foundProject.projectType}\n• رأس المال: ${foundProject.initialCapital || foundProject.budget || "—"} ر.س\n• المدينة: ${foundProject.city || "—"}\n• العملاء اليومي: ${foundProject.expectedCustomersPerDay || "—"}\n\nكيف يمكنني مساعدتك اليوم؟ يمكنني:\n✓ تحليل جدوى مشروعك\n✓ اقتراح تحسينات\n✓ مناقشة المخاطر والفرص\n✓ المساعدة في التخطيط المالي`
            : `Hello! 👋\n\nI'm your specialized AI consultant. I'll help you analyze and discuss your project "${foundProject.projectName}".\n\n**Quick overview:**\n• Type: ${foundProject.projectType}\n• Capital: ${foundProject.initialCapital || foundProject.budget || "—"} SAR\n• City: ${foundProject.city || "—"}\n• Expected daily customers: ${foundProject.expectedCustomersPerDay || "—"}\n\nHow can I help you today? I can:\n✓ Analyze your project feasibility\n✓ Suggest improvements\n✓ Discuss risks and opportunities\n✓ Help with financial planning`,
          timestamp: new Date(),
        },
      ]);
    }
  }, [projectId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string, ar: boolean): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (!project)
      return ar
        ? "عذراً، لم أتمكن من تحميل بيانات المشروع."
        : "Sorry, I couldn't load the project data.";

    if (
      lowerMessage.includes("تحليل") ||
      lowerMessage.includes("analys") ||
      lowerMessage.includes("review") ||
      lowerMessage.includes("رأيك")
    ) {
      return ar
        ? `بناءً على دراسة مشروع "${project.projectName}"، إليك تحليلي:\n\n**النقاط الإيجابية:**\n✓ السوق المستهدف واضح\n✓ رأس المال (${project.initialCapital || project.budget || "—"} ر.س) مناسب للبداية\n✓ المدينة: ${project.city || "—"}\n\n**نقاط تحتاج تطوير:**\n• يُنصح بإضافة خطة تسويقية واضحة\n• تحديد المنافسين بشكل أكثر تفصيلاً\n• وضع خطة للنمو والتوسع\n\n**التوصيات:**\n1. ابدأ بدراسة تفصيلية للمنافسين\n2. حدد مؤشرات الأداء الرئيسية (KPIs)\n3. ضع خطة احتياطية للمخاطر المحتملة`
        : `Based on your project "${project.projectName}", here is my analysis:\n\n**Strengths:**\n✓ Capital of ${project.initialCapital || project.budget || "—"} SAR is suitable for a start\n✓ City: ${project.city || "—"}\n✓ Expected daily customers: ${project.expectedCustomersPerDay || "—"}\n\n**Areas for improvement:**\n• Add a clear marketing plan\n• Identify competitors in more detail\n• Create a growth plan\n\n**Recommendations:**\n1. Conduct detailed competitor research\n2. Define KPIs\n3. Develop a risk contingency plan`;
    }

    if (
      lowerMessage.includes("مخاطر") ||
      lowerMessage.includes("تحديات") ||
      lowerMessage.includes("risk") ||
      lowerMessage.includes("challenge")
    ) {
      return ar
        ? `**المخاطر المحتملة لمشروع ${project.projectType}:**\n\n**مخاطر السوق:**\n• المنافسة الشديدة في القطاع\n• تغير تفضيلات العملاء\n• التقلبات الاقتصادية\n\n**مخاطر تشغيلية:**\n• التحديات في توظيف الكفاءات\n• صعوبات سلسلة الإمداد\n• المشاكل التقنية\n\n**كيفية التخفيف منها:**\n✓ بناء ميزة تنافسية واضحة\n✓ الاحتفاظ باحتياطي مالي (15-20% من الميزانية)\n✓ تنويع مصادر الإيرادات\n✓ بناء علاقات قوية مع الموردين`
        : `**Potential Risks for ${project.projectType}:**\n\n**Market risks:**\n• Intense competition in the sector\n• Changing customer preferences\n• Economic fluctuations\n\n**Operational risks:**\n• Challenges in hiring talent\n• Supply chain difficulties\n• Technical issues\n\n**Mitigation strategies:**\n✓ Build a clear competitive advantage\n✓ Maintain financial reserves (15-20% of budget)\n✓ Diversify revenue sources\n✓ Build strong supplier relationships`;
    }

    if (
      lowerMessage.includes("ميزانية") ||
      lowerMessage.includes("تكاليف") ||
      lowerMessage.includes("مالي") ||
      lowerMessage.includes("budget") ||
      lowerMessage.includes("financial") ||
      lowerMessage.includes("cost")
    ) {
      return ar
        ? `**التحليل المالي لمشروعك:**\n\n**رأس المال الإجمالي:** ${project.initialCapital || project.budget || "—"} ر.س\n\n**توزيع مقترح للميزانية:**\n• التأسيس والتراخيص: 15% (${Math.round(parseFloat(project.budget.replace(/[^0-9]/g, "")) * 0.15).toLocaleString()} ر.س)\n• المعدات والتجهيزات: 30%\n• رأس المال العامل: 35%\n• التسويق: 10%\n• احتياطي الطوارئ: 10%\n\n**نصائح مالية:**\n✓ تابع التدفق النقدي بشكل أسبوعي\n✓ احتفظ باحتياطي يغطي 3-6 أشهر\n✓ راقب نقطة التعادل باستمرار\n✓ فكر في مصادر تمويل بديلة`
        : `**Financial Analysis:**\n\n**Total Capital:** ${project.initialCapital || project.budget || "—"} SAR\n\n**Suggested budget allocation:**\n• Setup & licenses: 15%\n• Equipment: 30%\n• Working capital: 35%\n• Marketing: 10%\n• Emergency reserve: 10%\n\n**Financial tips:**\n✓ Monitor cash flow weekly\n✓ Keep reserves covering 3-6 months\n✓ Track break-even point continuously\n✓ Explore alternative funding sources`;
    }

    if (
      lowerMessage.includes("تسويق") ||
      lowerMessage.includes("عملاء") ||
      lowerMessage.includes("market") ||
      lowerMessage.includes("customer")
    ) {
      return ar
        ? `**استراتيجية التسويق المقترحة:**\n\n**القنوات الرقمية:**\n✓ وسائل التواصل الاجتماعي (Instagram, Twitter, TikTok)\n✓ حملات Google Ads مستهدفة\n✓ التسويق بالمحتوى (مدونة، فيديوهات)\n✓ التعاون مع المؤثرين\n\n**القنوات التقليدية:**\n• الإعلانات المحلية\n• المشاركة في الفعاليات\n• العروض الترويجية\n\n**السوق المستهدف:** ${project.targetMarket}\n\n**الميزانية التسويقية المقترحة:**\n10-15% من الميزانية الإجمالية في السنة الأولى`
        : `**Suggested Marketing Strategy:**\n\n**Digital channels:**\n✓ Social media (Instagram, Twitter, TikTok)\n✓ Targeted Google Ads campaigns\n✓ Content marketing (blog, videos)\n✓ Influencer collaborations\n\n**Traditional channels:**\n• Local advertising\n• Event participation\n• Promotional offers\n\n**City:** ${project.city || "—"}\n\n**Suggested marketing budget:**\n10-15% of total capital in the first year`;
    }

    return ar
      ? `شكراً على سؤالك عن "${project.projectName}"!\n\nأنا هنا لمساعدتك في:\n• تحليل جدوى مشروعك بالتفصيل\n• مناقشة المخاطر وكيفية التعامل معها\n• تقديم نصائح حول التخطيط المالي\n• اقتراح استراتيجيات تسويقية\n• الإجابة على أي استفسارات أخرى\n\nما الذي تريد مناقشته تحديداً؟ 🚀`
      : `Thanks for your question about "${project.projectName}"!\n\nI can help you with:\n• Detailed feasibility analysis\n• Risk discussion and management\n• Financial planning advice\n• Marketing strategy suggestions\n• Any other questions\n\nWhat would you like to discuss specifically? 🚀`;
  };

  const handleSend = () => {
    if (!inputValue.trim() || isTyping) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: inputValue,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    const currentIsAr = isAr;
    const currentInput = inputValue;
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: simulateResponse(currentInput, currentIsAr),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6 bg-transparent">
        <div className="text-center">
          <div className="text-[#08312D] dark:text-gray-900 text-xl mb-4 font-[Changa]">
            {isAr ? "جاري تحميل بيانات المشروع..." : "Loading project data..."}
          </div>
          <Loader2 className="w-8 h-8 text-[#C6A75E] dark:text-secondary-600 animate-spin mx-auto" />
        </div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-transparent p-6 lg:p-8"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="max-w-5xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
          {/* Page Header */}
          <motion.div
            className="bg-white dark:bg-gray-200 rounded-xl p-8 border border-gray-200 dark:border-gray-300 shadow-sm mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-14 h-14 rounded-lg bg-[#C6A75E] dark:bg-secondary-600 flex items-center justify-center">
                    <Lightbulb className="w-7 h-7 text-white" />
                  </div>
                  <h1 className="text-4xl font-bold text-[#08312d] dark:text-gray-900">
                    {isAr ? "المستشار الذكي" : "AI Consultant"}
                  </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-700 text-lg font-medium mr-[68px] font-[Changa]">
                  {project?.projectName
                    ? isAr
                      ? `استشارات حول: ${project.projectName}`
                      : `Consulting about: ${project.projectName}`
                    : isAr
                      ? "استشارات لمشروعك"
                      : "Project consultation"}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Chat Container */}
          <motion.div
            className="flex-1 bg-white dark:bg-gray-200 rounded-xl border border-gray-200 dark:border-gray-300 shadow-sm flex flex-col overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full bg-[#08312D] dark:bg-primary-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}

                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                        message.role === "user"
                          ? "bg-[#08312D] dark:bg-primary-600 text-white"
                          : "bg-gray-50 dark:bg-gray-100 text-[#08312D] dark:text-gray-900 border border-gray-200 dark:border-gray-300"
                      }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed text-sm font-medium font-[Changa]">
                        {message.content}
                      </p>
                      <span
                        className={`text-[10px] mt-1.5 block ${message.role === "user" ? "text-gray-200" : "text-gray-500 dark:text-gray-600"}`}
                      >
                        {message.timestamp.toLocaleTimeString("ar-SA", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-[#C6A75E] dark:bg-secondary-600 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 justify-start"
                >
                  <div className="w-8 h-8 rounded-full bg-[#08312D] dark:bg-primary-600 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-100 rounded-2xl px-4 py-2.5 border border-gray-200 dark:border-gray-300">
                    <div className="flex gap-1">
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      ></span>
                      <span
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      ></span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-300 p-4">
              <div className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="اكتب سؤالك هنا..."
                  className="flex-1 bg-gray-50 dark:bg-gray-100 border-gray-300 dark:border-gray-400 text-[#08312D] dark:text-gray-900 placeholder:text-gray-500 text-base py-6 font-[Changa]"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isTyping}
                  className="px-6 py-6 bg-[#C6A75E] dark:bg-secondary-600 hover:bg-[#a88f4e] dark:hover:bg-secondary-700 disabled:opacity-50"
                >
                  {isTyping ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
