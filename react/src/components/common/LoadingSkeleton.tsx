export default function LoadingSkeleton() {
  return (
    <div className="space-y-4">
      <div className="h-16 rounded-2xl bg-slate-200 animate-pulse" />

      <div className="grid grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((x) => (
          <div
            key={x}
            className="h-32 rounded-2xl bg-slate-200 animate-pulse"
          />
        ))}
      </div>

      <div className="h-96 rounded-2xl bg-slate-200 animate-pulse" />
    </div>
  );
}