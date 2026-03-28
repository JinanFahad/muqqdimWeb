import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import AuthPageNew from "./pages/AuthPageNew";
import MainDashboard from "./pages/MainDashboard";
import FeasibilityStudyPage from "./pages/FeasibilityStudyPage";
import EditProjectPage from "./pages/EditProjectPage";
import ConsultantPage from "./pages/ConsultantPage";
import ConsultantChatPage from "./pages/ConsultantChatPage";
import GovernmentProceduresPage from "./pages/GovernmentProceduresPage";
import PitchDeckPage from "./pages/PitchDeckPage";
import MyProjectsPageNew from "./pages/MyProjectsPageNew";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFound";

// Protected Route Component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  if (!isAuthenticated) {
    window.location.href = "/auth";
    return null;
  }
  
  return <>{children}</>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/auth",
    Component: AuthPageNew,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <MainDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/feasibility-study",
    element: (
      <ProtectedRoute>
        <FeasibilityStudyPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/edit-project/:projectId",
    element: (
      <ProtectedRoute>
        <EditProjectPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/consultant",
    element: (
      <ProtectedRoute>
        <ConsultantPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/consultant/chat/:projectId",
    element: (
      <ProtectedRoute>
        <ConsultantChatPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/government-procedures",
    element: (
      <ProtectedRoute>
        <GovernmentProceduresPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/pitch-deck",
    element: (
      <ProtectedRoute>
        <PitchDeckPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/my-projects",
    element: (
      <ProtectedRoute>
        <MyProjectsPageNew />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard/profile",
    element: (
      <ProtectedRoute>
        <ProfilePage />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    Component: NotFound,
  },
]);