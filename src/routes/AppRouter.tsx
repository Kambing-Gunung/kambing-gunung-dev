import { Route, Routes } from "react-router";

import MainLayout from "@/layouts/MainLayout";

import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import JourneyPage from "@/pages/JourneyPage";
import ResumePage from "@/pages/ResumePage";
import NotFoundPage from "@/pages/NotFoundPage";

function AppRouter() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="projects" element={<ProjectsPage />} />
                <Route path="journey" element={<JourneyPage />} />
                <Route path="resume" element={<ResumePage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Route>
        </Routes>
    );
}

export default AppRouter;