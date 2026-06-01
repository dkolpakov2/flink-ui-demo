import { useState } from "react";
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

export default function ScaleDeploymentDialog({
  deploymentId,
  open,
  onClose
}: Props) {
  const [scale, setScale] =
    useState(4);

  const [loading, setLoading] =
    useState(false);

  async function submit() {
    setLoading(true);

    try {
      await api.scaleDeployment(
        deploymentId,
        scale
      );

      toast.success(
        "Scaling initiated"
      );

      onClose();
    } catch {
      toast.error(
        "Scaling failed"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={onClose}
    >
      <DialogContent>
        <h2 className="font-semibold text-xl">
          Scale Deployment
        </h2>

        <input
          type="range"
          min="1"
          max="16"
          value={scale}
          onChange={(e) =>
            setScale(
              Number(e.target.value)
            )
          }
          className="w-full"
        />

        <div>
          Target Scale: {scale}
        </div>

        <Button
          onClick={submit}
          disabled={loading}
        >
          Apply Scale
        </Button>
      </DialogContent>
    </Dialog>
  );
}