import { useState } from "react";

import { toast } from "sonner";

export function useAsyncRequest() {
  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState<Error | null>(null);

  async function execute<T>(
    request: () => Promise<T>,
    successMessage?: string
  ): Promise<T | undefined> {
    try {
      setLoading(true);
      setError(null);

      const result =
        await request();

      if (successMessage) {
        toast.success(successMessage);
      }

      return result;
    } catch (err) {
      const error =
        err instanceof Error
          ? err
          : new Error(
              "Unknown error"
            );

      setError(error);

      toast.error(error.message);

      return undefined;
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    error,
    execute
  };
}