import { useState, useEffect } from "react";
import { Link } from "react-router";
import { Plus, Edit, Trash2, FileText, Download, PresentationIcon, FolderOpen, Loader2 } from "lucide-react";
import { motion } from "motion/react";
import { Header } from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";
import { cityMap, businessMap } from "./FeasibilityStudyPage";

export default function MyProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatingProject, setGeneratingProject] = useState<any>(null);
  const [exportType, setExportType] = useState<"pdf" | "pitch">("pdf");
  const [deleteConfirm, setDeleteConfirm] = useState<number | null>(null);
  const { t, language } = useLanguage();
  const isAr = language === "ar";
  const user = JSON.parse(localStorage.getItem("user") || `{"name":"${isAr ? 'المستخدم' : 'User'}"}`);

  useEffect(() => {
    const savedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
    setProjects(savedProjects);
  }, []);

  const handleDelete = (projectId: number) => {
    const updatedProjects = projects.filter(p => p.id !== projectId);
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
    setDeleteConfirm(null);
  };

  const handleExportPDF = (project: any) => {
    setIsGenerating(true);
    setGeneratingProject(project);
    setExportType("pdf");
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratingProject(null);
      alert(`${t('projects.downloadSuccess')}: ${project.projectName}`);
    }, 3000);
  };

  const handleExportPitchDeck = (project: any) => {
    setIsGenerating(true);
    setGeneratingProject(project);
    setExportType("pitch");
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratingProject(null);
      alert(`${t('projects.pitchDeckSuccess')}: ${project.projectName}`);
    }, 3000);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 p-6 lg:p-8" dir={isAr ? "rtl" : "ltr"}>
        <div className="max-w-7xl mx-auto space-y-6">

          {/* Header */}
          <div className="bg-white dark:bg-gray-200 rounded-xl p-8 border border-gray-200 dark:border-gray-300 shadow-sm">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold text-[#08312d] dark:text-gray-900 mb-2">
                  {t('projects.welcome')}, {user.name} 👋
                </h1>
                <p className="text-gray-600 dark:text-gray-700 text-lg font-medium font-[Changa]">
                  {t('projects.youHave')} <span className="font-bold text-[#08312d] dark:text-gray-900">{projects.length}</span> {projects.length === 1 ? t('projects.project') : t('projects.projects')}
                </p>
              </div>
              <Link
                to="/dashboard/feasibility-study"
                className="bg-[#C6A75E] hover:bg-[#a88f4e] rounded-lg px-5 py-2 text-white transition-all flex items-center gap-2 font-bold text-sm shadow-md font-[Changa]"
              >
                <Plus className="w-4 h-4" />
                <span>{t('projects.createNew')}</span>
              </Link>
            </div>
          </div>

          {/* Projects */}
          {projects.length === 0 ? (
            <div className="bg-white dark:bg-gray-200 rounded-xl p-20 text-center border border-gray-200 dark:border-gray-300 shadow-sm">
              <div className="w-32 h-32 rounded-2xl bg-[#E6F2F0] flex items-center justify-center mx-auto mb-8">
                <FolderOpen className="w-16 h-16 text-[#C6A75E]" />
              </div>
              <h2 className="text-3xl font-bold text-[#08312d] dark:text-gray-900 mb-4">{t('projects.noProjects')}</h2>
              <p className="text-gray-600 dark:text-gray-700 text-lg mb-10 max-w-2xl mx-auto leading-relaxed font-[Changa]">
                {t('projects.noProjectsDesc')}
              </p>
              <Link
                to="/dashboard/feasibility-study"
                className="inline-flex items-center gap-3 bg-[#C6A75E] hover:bg-[#a88f4e] rounded-lg px-10 py-5 text-white transition-all font-bold text-lg shadow-md font-[Changa]"
              >
                <Plus className="w-6 h-6" />
                <span>{t('projects.createNew')}</span>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-200 rounded-xl p-6 border border-gray-200 dark:border-gray-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row gap-6">

                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start gap-4 mb-5">
                        <div className="w-16 h-16 rounded-lg bg-[#C6A75E] flex items-center justify-center flex-shrink-0 shadow-md">
                          <FileText className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-2xl font-bold text-[#08312d] dark:text-gray-900 mb-2">
                            {isAr ? (businessMap[project.projectName] || project.projectName) : project.projectName}
                          </h3>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 bg-gray-50 dark:bg-gray-100 rounded-lg p-5 border border-gray-200 dark:border-gray-300">
                        <div>
                          <div className="text-gray-600 dark:text-gray-700 text-sm font-semibold mb-1 font-[Changa]">
                            {isAr ? "المدينة" : "City"}
                          </div>
                          <div className="text-[#08312d] dark:text-gray-900 font-bold text-lg">
                            {isAr ? (cityMap[project.city] || project.city) : project.city}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-700 text-sm font-semibold mb-1 font-[Changa]">
                            {isAr ? "رأس المال الأولي" : "Initial Capital"}
                          </div>
                          <div className="text-[#08312d] dark:text-gray-900 font-bold text-lg">
                            {project.initialCapital} {isAr ? "ر.س" : "SAR"}
                          </div>
                        </div>
                        <div>
                          <div className="text-gray-600 dark:text-gray-700 text-sm font-semibold mb-1 font-[Changa]">
                            {isAr ? "القطاع" : "Sector"}
                          </div>
                          <div className="inline-block bg-[#C6A75E]/15 text-[#C6A75E] text-sm font-semibold font-[Changa] px-3 py-1 rounded-full">
                            🍽 {isAr ? "مطاعم وكافيهات" : "Restaurants & Cafes"}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3 lg:min-w-[220px]">
                      <button
                        onClick={() => handleExportPDF(project)}
                        className="flex items-center justify-center gap-2 bg-gray-50 dark:bg-gray-100 border border-gray-300 dark:border-gray-400 hover:bg-gray-100 rounded-lg px-5 py-3 text-[#08312D] dark:text-gray-900 transition-all font-semibold shadow-sm font-[Changa]"
                      >
                        {isGenerating && generatingProject?.id === project.id && exportType === "pdf" ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Download className="w-5 h-5" />
                        )}
                        <span>{t('projects.downloadFeasibility')}</span>
                      </button>

                      <button
                        onClick={() => handleExportPitchDeck(project)}
                        className="flex items-center justify-center gap-2 bg-[#FFF9F0] border border-[#C6A75E] hover:bg-[#C6A75E] hover:text-white rounded-lg px-5 py-3 text-[#C6A75E] transition-all font-semibold shadow-sm font-[Changa]"
                      >
                        {isGenerating && generatingProject?.id === project.id && exportType === "pitch" ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <PresentationIcon className="w-5 h-5" />
                        )}
                        <span>{t('projects.downloadPitchDeck')}</span>
                      </button>

                      <div className="flex gap-2">
                        <Link
                          to={`/dashboard/edit-project/${project.id}`}
                          className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-100 border border-gray-300 dark:border-gray-400 hover:bg-gray-100 rounded-lg px-4 py-3 text-gray-700 transition-all shadow-sm"
                        >
                          <Edit className="w-5 h-5" />
                        </Link>
                        <button
                          onClick={() => setDeleteConfirm(project.id)}
                          className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-100 border border-gray-300 dark:border-gray-400 hover:bg-red-50 rounded-lg px-4 py-3 text-red-600 transition-all shadow-sm"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Delete Confirm Modal */}
      {deleteConfirm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-200 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-red-100 flex items-center justify-center mb-6 shadow-lg">
                <Trash2 className="w-10 h-10 text-red-500" />
              </div>
              <h3 className="text-2xl font-bold text-[#08312d] dark:text-gray-900 mb-3 font-[Changa]">
                {isAr ? "حذف المشروع" : "Delete Project"}
              </h3>
              <p className="text-gray-600 dark:text-gray-700 text-lg leading-relaxed mb-6 font-[Changa]">
                {isAr ? "هل أنت متأكد من حذف هذا المشروع؟ لا يمكن التراجع عن هذا الإجراء." : "Are you sure you want to delete this project? This action cannot be undone."}
              </p>
              <div className="flex gap-3 w-full">
                <button
                  onClick={() => handleDelete(deleteConfirm)}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-4 rounded-xl transition-all font-[Changa] text-base"
                >
                  {isAr ? "حذف" : "Delete"}
                </button>
                <button
                  onClick={() => setDeleteConfirm(null)}
                  className="flex-1 bg-gray-100 dark:bg-gray-300 hover:bg-gray-200 text-gray-700 dark:text-gray-800 font-bold py-4 rounded-xl transition-all font-[Changa] text-base"
                >
                  {isAr ? "إلغاء" : "Cancel"}
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Loading Modal */}
      {isGenerating && generatingProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white dark:bg-gray-200 rounded-2xl p-8 max-w-md w-full shadow-2xl border border-gray-200 dark:border-gray-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-[#C6A75E] flex items-center justify-center mb-6 shadow-lg">
                <Loader2 className="w-10 h-10 text-white animate-spin" />
              </div>
              <h3 className="text-2xl font-bold text-[#08312d] dark:text-gray-900 mb-3">{t('projects.preparing')}</h3>
              <p className="text-gray-600 dark:text-gray-700 text-lg leading-relaxed mb-2 font-[Changa]">
                {exportType === "pdf" ? t('projects.generatingFeasibility') : t('projects.generatingPitchDeck')}
              </p>
              <p className="text-[#C6A75E] font-bold text-lg font-[Changa]">{t('projects.pleaseWait')}</p>
              <div className="mt-6 w-full bg-gray-200 dark:bg-gray-300 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-[#C6A75E]"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 3, ease: "linear" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}