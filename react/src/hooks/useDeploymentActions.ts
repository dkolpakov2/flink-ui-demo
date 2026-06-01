import { toast } from "sonner";

import { api } from "@/services/api";

import { Deployment } from "@/types";

export function useDeploymentActions(
  refresh: () => Promise<void>
) {
  async function scaleDeployment(
    deployment: Deployment,
    scale: number
  ) {
    try {
      toast.info(
        `Scaling ${deployment.jobName}`
      );

      await api.scaleDeployment(
        deployment.id,
        scale
      );

      await refresh();

      toast.success(
        "Scale completed"
      );
    } catch {
      toast.error(
        "Scale failed"
      );
    }
  }

  async function stopDeployment(
    deployment: Deployment
  ) {
    try {
      toast.info(
        `Stopping ${deployment.jobName}`
      );

      await api.stopDeployment(
        deployment.id
      );

      await refresh();

      toast.success(
        "Deployment stopped"
      );
    } catch {
      toast.error(
        "Stop operation failed"
      );
    }
  }

  return {
    scaleDeployment,
    stopDeployment
  };
}