import {
  Deployment,
  Environment,
  Job,
  MonitoringMetric,
  Secret
} from "@/types";

import { mockApi } from "./mockApi";

const jobs: Job[] = [
  {
    id: "job-100",
    name: "Clickstream Analytics",
    status: "Running"
  },
  {
    id: "job-101",
    name: "Fraud Detection",
    status: "Pending"
  },
  {
    id: "job-102",
    name: "Inventory Sync",
    status: "Failed"
  }
];

const environments: Environment[] = [
  {
    id: "env-dev",
    name: "Development"
  },
  {
    id: "env-qa",
    name: "QA"
  },
  {
    id: "env-prod",
    name: "Production"
  }
];

const secrets: Secret[] = [
  {
    id: "secret-1",
    name: "KafkaConnection"
  },
  {
    id: "secret-2",
    name: "StorageAccountKey"
  }
];

let deployments: Deployment[] = [
  {
    id: "dep-1",
    jobName: "Clickstream Analytics",
    environment: "Production",
    scale: 4,
    status: "Running"
  }
];

export const api = {
  getJobs: async () =>
    mockApi(jobs),

  getEnvironments: async () =>
    mockApi(environments),

  getSecrets: async () =>
    mockApi(secrets),

  getDeployments: async () =>
    mockApi(deployments),

  createDeployment: async (
    deployment: Deployment
  ) => {
    deployments = [
      ...deployments,
      deployment
    ];

    return mockApi(deployment);
  },

  scaleDeployment: async (
    id: string,
    scale: number
  ) => {
    deployments = deployments.map(
      (deployment) =>
        deployment.id === id
          ? {
              ...deployment,
              scale,
              status: "Scaling"
            }
          : deployment
    );

    return mockApi(true);
  },

  stopDeployment: async (
    id: string
  ) => {
    deployments = deployments.map(
      (deployment) =>
        deployment.id === id
          ? {
              ...deployment,
              status: "Stopped"
            }
          : deployment
    );

    return mockApi(true);
  },

  getMonitoring: async (): Promise<
    MonitoringMetric[]
  > =>
    mockApi([
      {
        timestamp: "10:00",
        throughput: 240,
        latency: 30
      },
      {
        timestamp: "10:05",
        throughput: 280,
        latency: 27
      },
      {
        timestamp: "10:10",
        throughput: 320,
        latency: 22
      }
    ])
};