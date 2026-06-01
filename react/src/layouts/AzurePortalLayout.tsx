import { Outlet } from "react-router-dom";

import Sidebar from "@/components/navigation/Sidebar";
import CommandBar from "@/components/navigation/CommandBar";
import DeploymentDetailsBlade from "@/components/deployments/DeploymentDetailsBlade";

export default function AzurePortalLayout() {
  return (
    <div className="h-screen flex bg-slate-50">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <CommandBar />

        <main className="flex-1 overflow-auto p-6">
          <Outlet />
        </main>
      </div>

      <DeploymentDetailsBlade />
    </div>
  );
}