import { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router";
import { ArrowLeft, Building2, Bot, User } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  showOptions?: "main" | "procedures" | "none";
}

export default function GovernmentProceduresPage() {
  const { language } = useLanguage();
  const isAr = language === "ar";

  const getInitialMessage = (ar: boolean): Message => ({
    id: 1,
    text: ar
      ? "مرحباً بك في مساعد الإجراءات الحكومية! 👋\n\nأنا هنا لمساعدتك في معرفة جميع التراخيص والإجراءات اللازمة لمشروعك في قطاع المطاعم والكافيهات.\n\nاختر من الخيارات بالأسفل:"
      : "Welcome to the Government Procedures Assistant! 👋\n\nI'm here to help you with all licenses and procedures required for your restaurant or café.\n\nChoose from the options below:",
    sender: "bot",
    timestamp: new Date(),
    showOptions: "main",
  });

  const [messages, setMessages] = useState<Message[]>([
    getInitialMessage(isAr),
  ]);

  useEffect(() => {
    setMessages([getInitialMessage(isAr)]);
  }, [language]);

  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const mainOptions = useMemo(
    () => [
      {
        id: 1,
        text: isAr ? "الإجراءات الحكومية" : "Government Procedures",
        action: "procedures",
      },
      {
        id: 2,
        text: isAr ? "ما الترتيب الأفضل للإجراءات؟" : "What's the best order?",
        action: "order",
      },
      {
        id: 3,
        text: isAr ? "التكلفة الإجمالية للإجراءات" : "Total cost of procedures",
        action: "cost",
      },
    ],
    [isAr],
  );

  const proceduresOptions = useMemo(
    () => [
      {
        id: 1,
        text: isAr ? "السجل التجاري" : "Commercial Registration",
        query: "السجل التجاري",
      },
      {
        id: 2,
        text: isAr ? "الرقم الضريبي" : "Tax Number",
        query: "الرقم الضريبي",
      },
      {
        id: 3,
        text: isAr ? "رخصة البلدية" : "Municipal License",
        query: "رخصة البلدية",
      },
      {
        id: 4,
        text: isAr ? "رخصة الدفاع المدني" : "Civil Defense License",
        query: "رخصة الدفاع المدني",
      },
      {
        id: 5,
        text: isAr ? "التأمينات الاجتماعية" : "Social Insurance",
        query: "التأمينات الاجتماعية",
      },
      {
        id: 6,
        text: isAr ? "رخصة العمل للأجانب" : "Work Permits",
        query: "رخصة العمل للأجانب",
      },
    ],
    [isAr],
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    // السجل التجاري
    if (lowerMessage.includes("سجل") || lowerMessage.includes("تجاري")) {
      return isAr
        ? "📋 **السجل التجاري**\n\n**الوصف:** استخراج السجل التجاري لمؤسستك من وزارة التجارة\n\n**المدة:** 1-3 أيام\n**التكلفة:** 200 ريال\n\n**الخطوات:**\n1. تسجيل الدخول على منصة وزارة التجارة\n2. اختيار نوع النشاط التجاري (مطاعم وكافيهات)\n3. تعبئة البيانات المطلوبة\n4. دفع الرسوم\n5. استلام السجل التجاري إلكترونياً\n\n**المتطلبات:**\n• الهوية الوطنية / الإقامة\n• عنوان المنشأة\n• اسم تجاري مقترح\n\n**الموقع الرسمي:** https://mc.gov.sa"
        : "📋 **Commercial Registration**\n\n**Description:** Register your business with the Ministry of Commerce\n\n**Duration:** 1-3 days\n**Cost:** SAR 200\n\n**Steps:**\n1. Login to Ministry of Commerce portal\n2. Select business type (Restaurants & Cafés)\n3. Fill in required information\n4. Pay fees\n5. Receive registration electronically\n\n**Requirements:**\n• National ID / Residency\n• Business address\n• Proposed trade name\n\n**Official Website:** https://mc.gov.sa";
    }

    // الرقم الضريبي
    if (lowerMessage.includes("ضريب") || lowerMessage.includes("زكاة")) {
      return isAr
        ? "💰 **الرقم الضريبي**\n\n**الوصف:** التسجيل في ضريبة القيمة المضافة لدى هيئة الزكاة والضريبة\n\n**المدة:** 3-5 أيام\n**التكلفة:** مجاني\n\n**الخطوات:**\n1. التسجيل في بوابة هيئة الزكاة والضريبة\n2. تعبئة نموذج التسجيل\n3. رفع المستندات المطلوبة\n4. مراجعة الطلب من الهيئة\n5. الحصول على الرقم الضريبي\n\n**المتطلبات:**\n• السجل التجاري\n• معلومات النشاط التجاري\n• التوقعات المالية\n\n**الموقع الرسمي:** https://zatca.gov.sa"
        : "💰 **Tax Number (VAT)**\n\n**Description:** Register for VAT with the Zakat, Tax and Customs Authority\n\n**Duration:** 3-5 days\n**Cost:** Free\n\n**Steps:**\n1. Register on ZATCA portal\n2. Fill registration form\n3. Upload required documents\n4. Application reviewed by authority\n5. Receive tax number\n\n**Requirements:**\n• Commercial Registration\n• Business activity information\n• Financial projections\n\n**Official Website:** https://zatca.gov.sa";
    }

    // رخصة البلدية
    if (lowerMessage.includes("بلدية") || lowerMessage.includes("أمانة")) {
      return isAr
        ? "🏛️ **رخصة البلدية**\n\n**الوصف:** الحصول على رخصة مزاولة النشاط من الأمانة أو البلدية\n\n**المدة:** 5-10 أيام\n**التكلفة:** 500-2000 ريال\n\n**الخطوات:**\n1. تحديد موقع المنشأة\n2. التأكد من مطابقة الموقع للنشاط\n3. تقديم طلب الرخصة\n4. زيارة المفتش\n5. استلام الرخصة\n\n**المتطلبات:**\n• السجل التجاري\n• عقد الإيجار / صك الملكية\n• مخطط الموقع\n• شهادة الدفاع المدني\n\n**الموقع الرسمي:** https://balady.gov.sa"
        : "🏛️ **Municipal License**\n\n**Description:** Obtain a business operation license from the municipality\n\n**Duration:** 5-10 days\n**Cost:** SAR 500-2,000\n\n**Steps:**\n1. Identify business location\n2. Confirm location complies with activity type\n3. Submit license application\n4. Inspector visit\n5. Receive license\n\n**Requirements:**\n• Commercial Registration\n• Lease contract / ownership deed\n• Site plan\n• Civil Defense certificate\n\n**Official Website:** https://balady.gov.sa";
    }

    // رخصة الدفاع المدني
    if (
      lowerMessage.includes("دفاع") ||
      lowerMessage.includes("مدني") ||
      lowerMessage.includes("سلامة")
    ) {
      return isAr
        ? "🚒 **رخصة الدفاع المدني**\n\n**الوصف:** الحصول على شهادة السلامة من الدفاع المدني\n\n**المدة:** 3-7 أيام\n**التكلفة:** 300-1000 ريال\n\n**الخطوات:**\n1. تجهيز الموقع بمتطلبات السلامة\n2. تقديم طلب الفحص\n3. زيارة مفتش الدفاع المدني\n4. معالجة الملاحظات إن وجدت\n5. الحصول على الشهادة\n\n**المتطلبات:**\n• مطافئ حريق\n• مخارج طوارئ\n• إنارة طوارئ\n• صور الموقع\n\n**الموقع الرسمي:** https://998.gov.sa"
        : "🚒 **Civil Defense License**\n\n**Description:** Obtain safety certificate from Civil Defense\n\n**Duration:** 3-7 days\n**Cost:** SAR 300-1,000\n\n**Steps:**\n1. Prepare site with safety requirements\n2. Submit inspection request\n3. Civil Defense inspector visit\n4. Address any observations\n5. Receive certificate\n\n**Requirements:**\n• Fire extinguishers\n• Emergency exits\n• Emergency lighting\n• Site photos\n\n**Official Website:** https://998.gov.sa";
    }

    // التأمينات الاجتماعية
    if (lowerMessage.includes("تأمين") || lowerMessage.includes("موظف")) {
      return isAr
        ? "👥 **التأمينات الاجتماعية**\n\n**الوصف:** تسجيل المنشأة والموظفين في التأمينات الاجتماعية\n\n**المدة:** 1-2 يوم\n**التكلفة:** مجاني\n\n**الخطوات:**\n1. التسجيل في موقع التأمينات\n2. إضافة بيانات المنشأة\n3. إضافة الموظفين\n4. تفعيل الاشتراكات\n\n**المتطلبات:**\n• السجل التجاري\n• بيانات الموظفين\n• رقم الآيبان\n\n**الموقع الرسمي:** https://gosi.gov.sa"
        : "👥 **Social Insurance**\n\n**Description:** Register your business and employees with GOSI\n\n**Duration:** 1-2 days\n**Cost:** Free\n\n**Steps:**\n1. Register on GOSI website\n2. Add business information\n3. Add employees\n4. Activate subscriptions\n\n**Requirements:**\n• Commercial Registration\n• Employee data\n• IBAN number\n\n**Official Website:** https://gosi.gov.sa";
    }

    // رخصة العمل
    if (
      lowerMessage.includes("عمل") &&
      (lowerMessage.includes("رخصة") ||
        lowerMessage.includes("أجانب") ||
        lowerMessage.includes("وافد"))
    ) {
      return isAr
        ? "🌍 **رخصة العمل (للموظفين الأجانب)**\n\n**الوصف:** استخراج رخصة العمل للموظفين غير السعوديين\n\n**المدة:** 5-10 أيام\n**التكلفة:** حسب عدد الموظفين\n\n**الخطوات:**\n1. التحقق من الرصيد في نطاقات\n2. تقديم طلب رخصة العمل\n3. دفع الرسوم\n4. انتظار الموافقة\n5. استلام الرخصة\n\n**المتطلبات:**\n• جواز سفر الموظف\n• عقد العمل\n• المؤهلات العلمية\n• رصيد في نطاقات\n\n**الموقع الرسمي:** https://mol.gov.sa"
        : "🌍 **Work Permits (Foreign Employees)**\n\n**Description:** Issue work permits for non-Saudi employees\n\n**Duration:** 5-10 days\n**Cost:** Varies by employee count\n\n**Steps:**\n1. Check Nitaqat balance\n2. Submit work permit application\n3. Pay fees\n4. Wait for approval\n5. Receive permit\n\n**Requirements:**\n• Employee passport\n• Employment contract\n• Academic qualifications\n• Nitaqat balance\n\n**Official Website:** https://mol.gov.sa";
    }

    return "";
  };

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate bot typing and response
    setTimeout(
      () => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: getBotResponse(inputValue),
          sender: "bot",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleMainOption = (action: string) => {
    let userText = "";
    let botText = "";
    let showOptions: "main" | "procedures" | "none" = "none";

    if (action === "order") {
      userText = isAr
        ? "ما الترتيب الأفضل للإجراءات؟"
        : "What's the best order?";
      botText = isAr
        ? "📅 **الخطة الزمنية المقترحة للإجراءات**\n\n**الأسبوع 1:**\n• السجل التجاري (أولوية قصوى)\n• الرقم الضريبي\n\n**الأسبوع 2:**\n• رخصة الدفاع المدني\n\n**الأسبوع 3:**\n• رخصة البلدية\n\n**الأسبوع 4:**\n• التأمينات الاجتماعية\n• رخص العمل (إن وجدت)\n\n💡 **نصيحة:** ابدأ بالسجل التجاري لأنه مطلوب لجميع الإجراءات الأخرى!\n\nهل تريد تفاصيل أكثر عن إجراء معين؟"
        : "📅 **Suggested Timeline**\n\n**Week 1:**\n• Commercial Registration (top priority)\n• Tax Number\n\n**Week 2:**\n• Civil Defense License\n\n**Week 3:**\n• Municipal License\n\n**Week 4:**\n• Social Insurance\n• Work Permits (if needed)\n\n💡 **Tip:** Start with Commercial Registration as it is required for all other procedures!\n\nWould you like more details on a specific procedure?";
      showOptions = "main";
    } else if (action === "procedures") {
      userText = isAr ? "الإجراءات الحكومية" : "Government Procedures";
      botText = isAr
        ? "📋 **قائمة جميع الإجراءات الحكومية للمطاعم والكافيهات:**\n\n1️⃣ السجل التجاري (1-3 أيام - 200 ريال)\n2️⃣ الرقم الضريبي (3-5 أيام - مجاني)\n3️⃣ رخصة البلدية (5-10 أيام - 500-2000 ريال)\n4️⃣ رخصة الدفاع المدني (3-7 أيام - 300-1000 ريال)\n5️⃣ التأمينات الاجتماعية (1-2 يوم - مجاني)\n6️⃣ رخصة العمل للأجانب (5-10 أيام - حسب العدد)\n\nاختر أي إجراء للحصول على التفاصيل الكاملة:"
        : "📋 **All Government Procedures for Restaurants & Cafés:**\n\n1️⃣ Commercial Registration (1-3 days - SAR 200)\n2️⃣ Tax Number (3-5 days - Free)\n3️⃣ Municipal License (5-10 days - SAR 500-2000)\n4️⃣ Civil Defense License (3-7 days - SAR 300-1000)\n5️⃣ Social Insurance (1-2 days - Free)\n6️⃣ Work Permits for Foreigners (5-10 days - varies)\n\nSelect any procedure for full details:";
      showOptions = "procedures";
    } else if (action === "cost") {
      userText = isAr
        ? "التكلفة الإجمالية للإجراءات"
        : "Total cost of procedures";
      botText = isAr
        ? "💵 **التكلفة الإجمالية المتوقعة:**\n\n• السجل التجاري: 200 ريال\n• الرقم الضريبي: مجاني\n• رخصة البلدية: 500-2000 ريال\n• رخصة الدفاع المدني: 300-1000 ريال\n• التأمينات: مجاني\n• رخص العمل: حسب عدد الموظفين\n\n**الإجمالي التقريبي:** 1,000 - 3,200 ريال\n(بدون احتساب رخص العمل)\n\nهل تريد معرفة تفاصيل أي رخصة؟"
        : "💵 **Estimated Total Cost:**\n\n• Commercial Registration: SAR 200\n• Tax Number: Free\n• Municipal License: SAR 500-2000\n• Civil Defense License: SAR 300-1000\n• Social Insurance: Free\n• Work Permits: varies by number\n\n**Approximate Total:** SAR 1,000 - 3,200\n(excluding work permits)\n\nWould you like details on any specific license?";
      showOptions = "main";
    }

    const userMessage: Message = {
      id: Date.now(),
      text: userText,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(
      () => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: botText,
          sender: "bot",
          timestamp: new Date(),
          showOptions: showOptions,
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  const handleQuickOption = (query: string, displayText?: string) => {
    const userMessage: Message = {
      id: Date.now(),
      text: displayText || query,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(
      () => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: getBotResponse(query),
          sender: "bot",
          timestamp: new Date(),
          showOptions: "main",
        };
        setMessages((prev) => [...prev, botResponse]);
        setIsTyping(false);
      },
      1000 + Math.random() * 1000,
    );
  };

  return (
    <>
      <Header />
      <div
        className="min-h-screen bg-transparent p-6 lg:p-8"
        dir={isAr ? "rtl" : "ltr"}
      >
        <div className="max-w-5xl mx-auto h-[calc(100vh-4rem)] flex flex-col">
          {/* Header */}
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
                    <Building2 className="w-7 h-7 text-white" />
                  </div>
                  <h1 className="text-4xl font-bold text-[#08312d] dark:text-gray-900">
                    {isAr
                      ? "مساعد الإجراءات الحكومية"
                      : "Government Procedures Assistant"}
                  </h1>
                </div>
                <p className="text-gray-600 dark:text-gray-700 text-lg font-medium mr-[68px] font-[Changa]">
                  {isAr
                    ? "اسأل عن أي إجراء حكومي لمشروعك"
                    : "Ask about any government procedure for your project"}
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
              {messages.map((message, index) => (
                <div key={message.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex gap-2 ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-[#08312D] dark:bg-primary-600 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-5 h-5 text-white" />
                      </div>
                    )}

                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-2.5 ${
                        message.sender === "user"
                          ? "bg-[#08312D] dark:bg-primary-600 text-white"
                          : "bg-gray-50 dark:bg-gray-100 text-[#08312D] dark:text-gray-900 border border-gray-200 dark:border-gray-300"
                      }`}
                    >
                      <p className="whitespace-pre-line leading-relaxed text-sm font-medium font-[Changa]">
                        {message.text}
                      </p>
                      <span
                        className={`text-[10px] mt-1.5 block ${message.sender === "user" ? "text-gray-200" : "text-gray-500 dark:text-gray-600"}`}
                      >
                        {message.timestamp.toLocaleTimeString("ar-SA", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>

                    {message.sender === "user" && (
                      <div className="w-8 h-8 rounded-full bg-[#C6A75E] dark:bg-secondary-600 flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </motion.div>

                  {/* Show options if this is the last message and it's from bot */}
                  {message.sender === "bot" &&
                    index === messages.length - 1 &&
                    message.showOptions !== "none" &&
                    !isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="flex flex-col gap-2 mr-10 mt-2 max-w-[55%]"
                      >
                        {message.showOptions === "main" &&
                          mainOptions.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => handleMainOption(option.action)}
                              disabled={isTyping}
                              className="w-full bg-white dark:bg-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300 border-2 border-[#08312D] dark:border-primary-600 text-[#08312D] dark:text-gray-900 rounded-lg px-3 py-2 text-center font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-[Changa]"
                              style={{ fontSize: "12px" }}
                            >
                              {option.text}
                            </button>
                          ))}
                        {message.showOptions === "procedures" &&
                          proceduresOptions.map((option) => (
                            <button
                              key={option.id}
                              onClick={() =>
                                handleQuickOption(option.query, option.text)
                              }
                              disabled={isTyping}
                              className="w-full bg-white dark:bg-gray-200 hover:bg-gray-50 dark:hover:bg-gray-300 border-2 border-[#08312D] dark:border-primary-600 text-[#08312D] dark:text-gray-900 rounded-lg px-3 py-2 text-center font-bold transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-[Changa]"
                              style={{ fontSize: "12px" }}
                            >
                              {option.text}
                            </button>
                          ))}
                      </motion.div>
                    )}
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
          </motion.div>
        </div>
      </div>
    </>
  );
}
