export default function MonitoringKPICards() {
  const cards = [
    {
      title: "Throughput",
      value: "325 msg/s"
    },
    {
      title: "Latency",
      value: "22 ms"
    },
    {
      title: "CPU",
      value: "61%"
    },
    {
      title: "Failures",
      value: "0"
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card) => (
        <div
          key={card.title}
          className="bg-white border rounded-2xl p-5"
        >
          <div className="text-sm text-slate-500">
            {card.title}
          </div>

          <div className="text-3xl font-semibold mt-2">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}