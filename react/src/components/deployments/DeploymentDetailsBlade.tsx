import AzureBlade from "@/components/blades/AzureBlade";

import {
  useAppStore
} from "@/store/appStore";

import StatusBadge from "@/components/common/StatusBadge";

export default function DeploymentDetailsBlade() {
  const {
    deploymentBladeOpen,
    setDeploymentBladeOpen
  } = useAppStore();

  return (
    <AzureBlade
      title="Deployment Details"
      open={deploymentBladeOpen}
      onClose={() =>
        setDeploymentBladeOpen(false)
      }
    >
      <div className="space-y-6">
        <div>
          <div className="text-sm text-slate-500">
            Deployment
          </div>

          <div className="font-semibold mt-1">
            Clickstream Analytics
          </div>
        </div>

        <StatusBadge
          status="Running"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 border rounded-xl">
            <div className="text-sm text-slate-500">
              Scale
            </div>

            <div className="font-semibold">
              4 Nodes
            </div>
          </div>

          <div className="p-4 border rounded-xl">
            <div className="text-sm text-slate-500">
              Environment
            </div>

            <div className="font-semibold">
              Production
            </div>
          </div>
        </div>
      </div>
    </AzureBlade>
  );
}