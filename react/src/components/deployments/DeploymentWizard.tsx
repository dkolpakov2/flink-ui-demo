import { useState } from "react";

import { toast } from "sonner";

import { api } from "@/services/api";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DeploymentWizard() {
  const [loading, setLoading] =
    useState(false);

  async function deploy() {
    setLoading(true);

    try {
      await api.createDeployment({
        id: crypto.randomUUID(),
        jobName: "Clickstream Analytics",
        environment: "Production",
        scale: 4,
        status: "Pending"
      });

      toast.success(
        "Deployment submitted"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <Input
        value="Clickstream Analytics"
        readOnly
      />

      <Input
        value="Production"
        readOnly
      />

      <Input
        value="4"
        readOnly
      />

      <Button
        onClick={deploy}
        disabled={loading}
      >
        {loading
          ? "Deploying..."
          : "Deploy"}
      </Button>
    </div>
  );
}