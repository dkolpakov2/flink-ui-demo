import {
  Database,
  FolderKanban,
  KeyRound,
  Rocket,
  Activity
} from "lucide-react";

import { NavLink } from "react-router-dom";

const navigation = [
  {
    label: "Jobs",
    icon: FolderKanban,
    path: "/portal/jobs"
  },
  {
    label: "Environments",
    icon: Database,
    path: "/portal/environments"
  },
  {
    label: "Secrets",
    icon: KeyRound,
    path: "/portal/secrets"
  },
  {
    label: "Deployments",
    icon: Rocket,
    path: "/portal/deployments"
  },
  {
    label: "Monitoring",
    icon: Activity,
    path: "/portal/monitoring"
  }
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-[#0f172a] text-white border-r border-slate-800">
      <div className="h-16 px-6 flex items-center border-b border-slate-800">
        <div className="w-9 h-9 rounded-lg bg-[#0078D4]" />
        <div className="ml-3">
          <div className="font-semibold">
            Azure Flink
          </div>
          <div className="text-xs text-slate-400">
            Enterprise Streaming
          </div>
        </div>
      </div>

      <nav className="p-3">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-xl mb-1 transition-all ${
                  isActive
                    ? "bg-slate-800 border border-slate-700"
                    : "hover:bg-slate-800"
                }`
              }
            >
              <Icon size={18} />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}