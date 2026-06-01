import { Database } from "lucide-react";

interface Props {
  title: string;
  description: string;
}

export default function EmptyState({
  title,
  description
}: Props) {
  return (
    <div className="bg-white border rounded-2xl p-12 text-center">
      <Database
        className="mx-auto mb-4 text-slate-400"
        size={48}
      />

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="text-slate-500 mt-2">
        {description}
      </p>
    </div>
  );
}