import { useQuery } from "@tanstack/react-query";
import { getCandidates } from "../../../../lib/apis/candidates.api";

export const useFetchCandidates = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["candidates"],
    queryFn: getCandidates,
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};
