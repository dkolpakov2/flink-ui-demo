import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

import {
  useMonitoring
} from "@/hooks/useMonitoring";

import LoadingSkeleton from "@/components/common/LoadingSkeleton";
import PageHeader from "@/components/common/PageHeader";

export default function MonitoringPage() {
  const {
    metrics,
    loading
  } = useMonitoring();

  if (loading) {
    return <LoadingSkeleton />;
  }

  return (
    <>
      <PageHeader
        title="Monitoring"
        subtitle="GET /monitoring/:deploymentId"
      />

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-2xl border p-5">
          <div className="text-sm text-slate-500">
            Throughput
          </div>

          <div className="text-3xl font-semibold">
            325
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <div className="text-sm text-slate-500">
            Latency
          </div>

          <div className="text-3xl font-semibold">
            22 ms
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <div className="text-sm text-slate-500">
            CPU
          </div>

          <div className="text-3xl font-semibold">
            61%
          </div>
        </div>

        <div className="bg-white rounded-2xl border p-5">
          <div className="text-sm text-slate-500">
            Failures
          </div>

          <div className="text-3xl font-semibold">
            0
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border p-6">
        <ResponsiveContainer
          width="100%"
          height={400}
        >
          <LineChart
            data={metrics}
          >
            <XAxis
              dataKey="timestamp"
            />

            <YAxis />

            <Tooltip />

            <Line
              dataKey="throughput"
              stroke="#0078D4"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}