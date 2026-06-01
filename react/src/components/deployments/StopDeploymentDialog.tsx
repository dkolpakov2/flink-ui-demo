import { toast } from "sonner";

import { api } from "@/services/api";

import {
  Dialog,
  DialogContent
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";

interface Props {
  deploymentId: string;
  open: boolean;
  onClose: () => void;
}

export default function StopDeploymentDialog({
  deploymentId,
  open,
  onClose
}: Props) {
  async function stop() {
    try {
      await api.stopDeployment(
        deploymentId
      );

      toast.success(
        "Deployment stopped"
      );

      onClose();
    } catch {
      toast.error(
        "Stop request failed"
      );
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <h2 className="text-xl font-semibold">
          Stop Deployment
        </h2>

        <p>
          This operation will stop
          the running Flink job.
        </p>

        <Button
          variant="destructive"
          onClick={stop}
        >
          Stop Deployment
        </Button>
      </DialogContent>
    </Dialog>
  );
}