import { Route, Routes } from "react-router";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import JourneyPage from "@/pages/JourneyPage";
import ResumePage from "@/pages/ResumePage";
import NotFoundPage from "@/pages/NotFoundPage";

import { ROUTES } from "@/routes/paths";

function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path={ROUTES.projects.slice(1)} element={<ProjectsPage />} />
                <Route path={ROUTES.journey.slice(1)} element={<JourneyPage />} />
                <Route path={ROUTES.resume.slice(1)} element={<ResumePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;