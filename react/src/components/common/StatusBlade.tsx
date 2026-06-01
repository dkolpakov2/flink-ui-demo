import { DeploymentStatus } from "@/types";

interface Props {
  status: DeploymentStatus;
}

export default function StatusBadge({
  status
}: Props) {
  const styles = {
    Running:
      "bg-emerald-100 text-emerald-700",

    Pending:
      "bg-amber-100 text-amber-700",

    Failed:
      "bg-red-100 text-red-700",

    Scaling:
      "bg-sky-100 text-sky-700",

    Stopping:
      "bg-orange-100 text-orange-700",

    Stopped:
      "bg-slate-200 text-slate-700"
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}