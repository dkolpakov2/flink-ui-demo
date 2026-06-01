import { useEffect, useState } from "react";

import { api } from "@/services/api";

import { Job } from "@/types";

import PageHeader from "@/components/common/PageHeader";
import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import StatusBadge from "@/components/common/StatusBadge";

export default function JobsPage() {
  const [jobs, setJobs] =
    useState<Job[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function load() {
      const result =
        await api.getJobs();

      setJobs(result);
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
        title="Jobs"
        subtitle="GET /jobs"
      />

      <div className="bg-white rounded-2xl border">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex justify-between p-4 border-b"
          >
            <span>{job.name}</span>

            <StatusBadge
              status={job.status}
            />
          </div>
        ))}
      </div>
    </>
  );
}