import AzureBlade from "./AzureBlade";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DeploymentLogsBlade({
  open,
  onClose
}: Props) {
  return (
    <AzureBlade
      title="Deployment Logs"
      open={open}
      onClose={onClose}
    >
      <div className="font-mono text-sm bg-slate-950 text-green-400 p-4 rounded-xl">
        INFO Deployment started...
        <br />
        INFO TaskManager registered...
        <br />
        INFO Checkpoint completed...
        <br />
        INFO Job running...
      </div>
    </AzureBlade>
  );
}