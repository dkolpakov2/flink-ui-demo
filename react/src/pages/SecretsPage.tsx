import { useEffect, useState } from "react";

import { api } from "@/services/api";

import {
  Secret
} from "@/types";

import PageHeader from "@/components/common/PageHeader";
import LoadingSkeleton from "@/components/common/LoadingSkeleton";

export default function SecretsPage() {
  const [items, setItems] =
    useState<Secret[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const result =
        await api.getSecrets();

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
        title="Secrets"
        subtitle="GET /secrets"
      />

      <div className="bg-white rounded-2xl border">
        {items.map((secret) => (
          <div
            key={secret.id}
            className="p-4 border-b"
          >
            ************
            {secret.name.slice(-4)}
          </div>
        ))}
      </div>
    </>
  );
}