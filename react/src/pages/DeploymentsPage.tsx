import { Button } from "@/components/ui/button";

import {
  useDeployments
} from "@/hooks/useDeployments";

import {
  useAppStore
} from "@/store/appStore";

import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import PageHeader from "@/components/common/PageHeader";
import StatusBadge from "@/components/common/StatusBadge";
import DeploymentWizard from "@/components/deployments/DeploymentWizard";

export default function DeploymentsPage() {
  const {
    deployments,
    loading
  } = useDeployments();

  // const {
  //   setDeploymentBladeOpen
  // } = useAppStore();

  const {
    openDeploymentBlade,
    openScaleDialog,
    openStopDialog,
    openLogsBlade
  } = useAppStore();

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <PageHeader
        title="Deployments"
        subtitle="POST /deployments"
      />

      <div className="grid grid-cols-[400px_1fr] gap-6">
        <div className="bg-white rounded-2xl border p-6">
          <DeploymentWizard />
        </div>

        <div className="bg-white rounded-2xl border">
          {deployments.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center p-5 border-b"
            >
              <div>
                <div className="font-medium">
                  {item.jobName}
                </div>

                <div className="text-sm text-slate-500">
                  {item.environment}
                </div>
              </div>

              <div className="flex gap-2">

                <Button
                  variant="outline"
                  onClick={() =>
                    openDeploymentBlade(item)
                  }
                >
                  Details
                </Button>

                <Button
                  variant="outline"
                  onClick={() =>
                    openLogsBlade(item)
                  }
                >
                  Logs
                </Button>

                <Button
                  variant="outline"
                  onClick={() =>
                    openScaleDialog(item)
                  }
                >
                  Scale
                </Button>

                <Button
                  variant="destructive"
                  onClick={() =>
                    openStopDialog(item)
                  }
                >
                  Stop
                </Button>
              </div>

              <div className="flex gap-3 items-center"> <StatusBadge status={item.status} />

                <Button
                  variant="outline"
                  onClick={() => openDeploymentBlade(item)  //setDeploymentBladeOpen(true)
                  } >
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}