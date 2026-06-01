import { useEffect, useState } from "react";

import { api } from "@/services/api";

import PageHeader from "@/components/common/PageHeader";
import LoadingSkeleton from "@/components/common/LoadingSkeleton";

import {
  Environment
} from "@/types";

export default function EnvironmentsPage() {
  const [items, setItems] =
    useState<Environment[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const result =
        await api.getEnvironments();

      setItems(result);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <PageHeader
        title="Environments"
        subtitle="GET /environments"
      />

      <div className="grid gap-4">
        {items.map((env) => (
          <div
            key={env.id}
            className="bg-white p-5 rounded-2xl border"
          >
            {env.name}
          </div>
        ))}
      </div>
    </>
  );
}