import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, Loader2, FileText, TrendingUp, Users, DollarSign } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Card } from "../components/ui/card";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content: "مرحباً بك في مُـقــــدِم! 👋\n\nأنا مساعدك الذكي لإنشاء دراسات الجدوى الاحترافية. يمكنني مساعدتك في:\n\n• تحليل فكرة مشروعك\n• تقييم السوق والمنافسين\n• إعداد التوقعات المالية\n• تحديد المخاطر والفرص\n• إنشاء تقرير جدوى شامل\n\nكيف يمكنني مساعدتك اليوم؟",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickSuggestions = [
    { icon: FileText, text: "أريد إنشاء دراسة جدوى لمطعم" },
    { icon: TrendingUp, text: "كيف أحسب نقطة التعادل؟" },
    { icon: Users, text: "ما هو حجم السوق المستهدف؟" },
    { icon: DollarSign, text: "كيف أقدر رأس المال المطلوب؟" },
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes("مطعم") || lowerMessage.includes("مطاعم")) {
      return `رائع! دراسة جدوى مشروع مطعم. دعني أساعدك في ذلك.\n\nلإنشاء دراسة جدوى شاملة لمطعمك، سأحتاج لبعض المعلومات:\n\n**1. نوع المطعم:**\n• ما نوع المطبخ؟ (عربي، إيطالي، آسيوي، وجبات سريعة...)\n• فئة السعر المستهدفة؟ (اقتصادي، متوسط، فاخر)\n\n**2. الموقع:**\n• في أي منطقة تخطط للافتتاح؟\n• هل لديك موقع محدد؟\n\n**3. الميزانية:**\n• ما هو رأس المال المتوفر تقريباً؟\n\n**4. الخبرة:**\n• هل لديك خبرة سابقة في قطاع المطاعم؟\n\nيمكنك مشاركة هذه المعلومات وسأقوم بإنشاء دراسة جدوى تفصيلية لك! 📊`;
    }
    
    if (lowerMessage.includes("التعادل") || lowerMessage.includes("break even")) {
      return `نقطة التعادل هي النقطة التي تتساوى فيها إجمالي الإيرادات مع إجمالي التكاليف.\n\n**معادلة نقطة التعادل:**\n\nنقطة التعادل (بالوحدات) = التكاليف الثابتة ÷ (سعر البيع للوحدة - التكلفة المتغيرة للوحدة)\n\n**مثال عملي:**\n• التكاليف الثابتة: 180,000 ر.س (إيجار، رواتب...)\n• سعر البيع: 50 ر.س\n• التكلفة المتغيرة: 20 ر.س\n\nنقطة التعادل = 180,000 ÷ (50 - 20) = 6,000 وحدة\n\nأي تحتاج لبيع 6,000 وحدة لتغطية جميع تكاليفك.\n\n**بالزمن:**\nإذا كان متوسط مبيعاتك الشهرية 1,000 وحدة، ستصل لنقطة التعادل في 6 أشهر.\n\nهل تريد مساعدة في حساب نقطة التعادل لمشروعك؟ 📈`;
    }
    
    if (lowerMessage.includes("سوق") || lowerMessage.includes("market")) {
      return `تحديد حجم السوق المستهدف خطوة أساسية في دراسة الجدوى!\n\n**خطوات تقدير حجم السوق:**\n\n**1. السوق الإجمالي (TAM):**\nإجمالي الطلب على المنتج/الخدمة في السوق\n\n**2. السوق القابل للخدمة (SAM):**\nجزء السوق الذي يمكنك استهدافه جغرافياً وخدماتياً\n\n**3. السوق المستهدف (SOM):**\nالجزء الذي يمكنك الاستحواذ عليه واقعياً\n\n**مثال:**\n• TAM: 10 مليون مستخدم في المملكة\n• SAM: 2 مليون في منطقتك\n• SOM: 50,000 (2.5% حصة متوقعة في السنة الأولى)\n\n**مصادر البيانات:**\n✓ الهيئة العامة للإحصاء\n✓ تقارير أبحاث السوق\n✓ تحليل المنافسين\n✓ الاستبيانات الميدانية\n\nهل تريد مساعدة في تحليل سوق محدد؟ 🎯`;
    }
    
    if (lowerMessage.includes("رأس المال") || lowerMessage.includes("ميزانية") || lowerMessage.includes("تكلفة")) {
      return `تقدير رأس المال المطلوب من أهم خطوات دراسة الجدوى!\n\n**مكونات رأس المال:**\n\n**1. التكاليف التأسيسية (مرة واحدة):**\n• التراخيص والتصاريح\n• المعدات والأثاث\n• تجهيز الموقع\n• التصميم والعلامة التجارية\n• التسويق الافتتاحي\n\n**2. رأس المال العامل:**\n• مخزون أولي\n• نفقات تشغيلية لـ 3-6 أشهر\n• احتياطي طوارئ (10-15%)\n\n**3. التكاليف الشهرية:**\n• الإيجار\n• الرواتب\n• المرافق والخدمات\n• التسويق\n• الصيانة\n\n**مثال - مطعم متوسط:**\n• تأسيسي: 250,000 ر.س\n• عامل: 150,000 ر.س\n• **الإجمالي: 400,000 ر.س**\n\nهل تريد إنشاء تقدير تفصيلي لمشروعك؟ 💰`;
    }
    
    return `شكراً على سؤالك! يمكنني مساعدتك في:\n\n• إنشاء دراسة جدوى كاملة لمشروعك\n• تحليل السوق والمنافسين\n• التوقعات المالية التفصيلية\n• تقييم المخاطر والفرص\n• نصائح لنجاح مشروعك\n\nهل يمكنك مشاركة المزيد من التفاصيل عن مشروعك؟ 🚀`;
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

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: simulateAIResponse(inputValue),
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (text: string) => {
    setInputValue(text);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col bg-gray-50 dark:bg-gray-100" dir="rtl">
      {/* Header */}
      <div className="bg-white dark:bg-gray-200 border-b border-gray-200 dark:border-gray-300 px-6 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-[#08312D] dark:bg-primary-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#08312D] dark:text-gray-900">مساعد دراسة الجدوى الذكي</h1>
              <div className="text-sm text-green-600 dark:text-green-700 flex items-center gap-1 font-[Changa]">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                متصل ونشط
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.role === "user" ? "justify-start" : "justify-end"}`}
            >
              <div className={`flex gap-3 max-w-[85%] ${message.role === "user" ? "flex-row-reverse" : ""}`}>
                {/* Avatar */}
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                    message.role === "user"
                      ? "bg-gray-200 dark:bg-gray-300"
                      : "bg-[#08312D] dark:bg-primary-600"
                  }`}
                >
                  {message.role === "user" ? (
                    <span className="text-[#08312D] dark:text-gray-900 font-bold">أ</span>
                  ) : (
                    <Sparkles className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Message Content */}
                <div>
                  <div
                    className={`rounded-2xl px-5 py-4 ${
                      message.role === "user"
                        ? "bg-white dark:bg-gray-200 text-[#08312D] dark:text-gray-900 border border-gray-200 dark:border-gray-300 rounded-tr-sm"
                        : "bg-[#E6F2F0] dark:bg-primary-100 text-[#08312D] dark:text-gray-900 rounded-tl-sm"
                    }`}
                  >
                    <div className="whitespace-pre-wrap leading-relaxed font-[Changa]">{message.content}</div>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-600 mt-2 px-1 font-[Changa]">
                    {message.timestamp.toLocaleTimeString("ar-SA", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-end">
              <div className="flex gap-3 max-w-[85%]">
                <div className="w-10 h-10 rounded-lg bg-[#08312D] dark:bg-primary-600 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#E6F2F0] dark:bg-primary-100 rounded-2xl rounded-tl-sm px-5 py-4">
                  <div className="flex items-center gap-2">
                    <Loader2 className="w-4 h-4 text-[#08312D] dark:text-primary-700 animate-spin" />
                    <span className="text-gray-600 dark:text-gray-700 font-[Changa]">جاري الكتابة...</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Quick Suggestions */}
      {messages.length <= 1 && (
        <div className="px-4 pb-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm text-gray-600 dark:text-gray-700 mb-3 font-medium font-[Changa]">اقتراحات سريعة:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {quickSuggestions.map((suggestion, index) => {
                const Icon = suggestion.icon;
                return (
                  <button
                    key={index}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className="flex items-center gap-3 p-4 bg-white dark:bg-gray-200 border border-gray-200 dark:border-gray-300 rounded-xl hover:border-[#08312D] dark:hover:border-primary-600 hover:shadow-md transition-all duration-200 text-right"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#E6F2F0] dark:bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-[#08312D] dark:text-primary-700" />
                    </div>
                    <span className="text-sm text-[#08312D] dark:text-gray-900 font-medium font-[Changa]">{suggestion.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Input Area */}
      <div className="bg-white dark:bg-gray-200 border-t border-gray-200 dark:border-gray-300 px-4 py-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex gap-3">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="اكتب سؤالك أو وصف مشروعك..."
              className="flex-1 bg-gray-50 dark:bg-gray-100 border-gray-300 dark:border-gray-400 text-[#08312D] dark:text-gray-900 placeholder:text-gray-500 text-base py-6 font-[Changa]"
              disabled={isTyping}
            />
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim() || isTyping}
              className="px-6 py-6 bg-[#08312D] dark:bg-primary-600 hover:bg-[#0E4A43] dark:hover:bg-primary-700 disabled:opacity-50"
            >
              {isTyping ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <Send className="w-5 h-5" />
              )}
            </Button>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-600 mt-3 text-center font-[Changa]">
            المساعد الذكي يستخدم تقنيات متقدمة لتقديم معلومات دقيقة. تحقق دائماً من البيانات المهمة.
          </p>
        </div>
      </div>
    </div>
  );
}