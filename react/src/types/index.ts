export type DeploymentStatus =
  | "Pending"
  | "Running"
  | "Failed"
  | "Scaling"
  | "Stopping"
  | "Stopped";

export interface Job {
  id: string;
  name: string;
  status: DeploymentStatus;
}

export interface Environment {
  id: string;
  name: string;
}

export interface Secret {
  id: string;
  name: string;
}

export interface Deployment {
  id: string;
  jobName: string;
  environment: string;
  scale: number;
  status: DeploymentStatus;
}

export interface MonitoringMetric {
  timestamp: string;
  throughput: number;
  latency: number;
}