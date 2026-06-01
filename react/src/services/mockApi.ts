export interface MockApiOptions {
  delay?: number;
  failRate?: number;
}

export async function mockApi<T>(
  data: T,
  options?: MockApiOptions
): Promise<T> {
  const delay = options?.delay ?? 1500;
  const failRate = options?.failRate ?? 0.1;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const failed =
        Math.random() < failRate;

      if (failed) {
        reject(
          new Error(
            "Simulated Azure service error"
          )
        );
        return;
      }

      resolve(data);
    }, delay);
  });
}