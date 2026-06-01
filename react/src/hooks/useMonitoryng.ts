import { useEffect, useState } from "react";

import { api } from "@/services/api";
import { MonitoringMetric } from "@/types";

export function useMonitoring() {
  const [metrics, setMetrics] =
    useState<MonitoringMetric[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const result =
        await api.getMonitoring();

      setMetrics(result);

      setLoading(false);
    }

    load();
  }, []);

  return {
    metrics,
    loading
  };
}