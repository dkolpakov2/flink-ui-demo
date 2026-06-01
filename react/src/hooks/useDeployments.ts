import {
    useCallback,
    useEffect,
    useState
  } from "react";
  
  import { api } from "@/services/api";
  
  import { Deployment } from "@/types";
  
  export function useDeployments() {
    const [
      deployments,
      setDeployments
    ] = useState<
      Deployment[]
    >([]);
  
    const [loading, setLoading] =
      useState(true);
  
    const refresh =
      useCallback(async () => {
        setLoading(true);
  
        const result =
          await api.getDeployments();
  
        setDeployments(result);
  
        setLoading(false);
      }, []);
  
    useEffect(() => {
      refresh();
    }, [refresh]);
  
    return {
      deployments,
      loading,
      refresh
    };
  }