import { create } from "zustand";

import { Deployment } from "@/types";

interface AppState {
  selectedDeployment?: Deployment;

  setSelectedDeployment: (
    deployment?: Deployment
  ) => void;

  deploymentBladeOpen: boolean;
  scaleDialogOpen: boolean;
  stopDialogOpen: boolean;
  logsBladeOpen: boolean;

  openDeploymentBlade: (
    deployment: Deployment
  ) => void;

  closeDeploymentBlade: () => void;

  openScaleDialog: (
    deployment: Deployment
  ) => void;

  closeScaleDialog: () => void;

  openStopDialog: (
    deployment: Deployment
  ) => void;

  closeStopDialog: () => void;

  openLogsBlade: (
    deployment: Deployment
  ) => void;

  closeLogsBlade: () => void;
}

export const useAppStore =
  create<AppState>((set) => ({
    selectedDeployment: undefined,

    deploymentBladeOpen: false,
    scaleDialogOpen: false,
    stopDialogOpen: false,
    logsBladeOpen: false,

    setSelectedDeployment: (
      deployment
    ) =>
      set({
        selectedDeployment:
          deployment
      }),

    openDeploymentBlade:
      (deployment) =>
        set({
          selectedDeployment:
            deployment,
          deploymentBladeOpen:
            true
        }),

    closeDeploymentBlade:
      () =>
        set({
          deploymentBladeOpen:
            false
        }),

    openScaleDialog:
      (deployment) =>
        set({
          selectedDeployment:
            deployment,
          scaleDialogOpen: true
        }),

    closeScaleDialog:
      () =>
        set({
          scaleDialogOpen: false
        }),

    openStopDialog:
      (deployment) =>
        set({
          selectedDeployment:
            deployment,
          stopDialogOpen: true
        }),

    closeStopDialog:
      () =>
        set({
          stopDialogOpen: false
        }),

    openLogsBlade:
      (deployment) =>
        set({
          selectedDeployment:
            deployment,
          logsBladeOpen: true
        }),

    closeLogsBlade:
      () =>
        set({
          logsBladeOpen: false
        })
  }));