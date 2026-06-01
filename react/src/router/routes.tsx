import { Navigate, Route, Routes } from "react-router-dom";

import AzurePortalLayout from "@/layouts/AzurePortalLayout";

import LoginPage from "@/pages/LoginPage";
import JobsPage from "@/pages/JobsPage";
import EnvironmentsPage from "@/pages/EnvironmentsPage";
import SecretsPage from "@/pages/SecretsPage";
import DeploymentsPage from "@/pages/DeploymentsPage";
import MonitoringPage from "@/pages/MonitoringPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />

      <Route
        path="/portal"
        element={<AzurePortalLayout />}
      >
        <Route
          index
          element={
            <Navigate
              to="/portal/deployments"
              replace
            />
          }
        />

        <Route
          path="jobs"
          element={<JobsPage />}
        />

        <Route
          path="environments"
          element={<EnvironmentsPage />}
        />

        <Route
          path="secrets"
          element={<SecretsPage />}
        />

        <Route
          path="deployments"
          element={<DeploymentsPage />}
        />

        <Route
          path="monitoring"
          element={<MonitoringPage />}
        />
      </Route>
    </Routes>
  );
}