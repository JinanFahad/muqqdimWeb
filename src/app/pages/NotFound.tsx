import { Link } from "react-router";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] p-8">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-[var(--primary-600)]">404</h1>
        <h2 className="text-3xl font-bold text-[var(--gray-900)] mt-4">الصفحة غير موجودة</h2>
        <p className="text-[var(--gray-600)] mt-4 max-w-md">
          عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها إلى موقع آخر.
        </p>
      </div>
    </div>
  );
}