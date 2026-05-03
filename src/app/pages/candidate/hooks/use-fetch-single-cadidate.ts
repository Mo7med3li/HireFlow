import { useQuery } from "@tanstack/react-query";
import { getCandidateById } from "../../../../lib/apis/candidates.api";

export const useFetchSingleCandidate = (id: string) => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["candidate", id],
    queryFn: () => getCandidateById(id!),
    enabled: !!id,
  });

  return { data, isLoading, error, refetch };
};
