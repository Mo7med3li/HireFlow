import { CandidateCard } from "./candidate-card";
import { CandidatesSkeleton } from "../../../../components/skeletons/cadidates.skeleton";
import { EmptyCandidate } from "./empty-candidate";
import { ErrorCandidate } from "../../../../components/shared/error";
import { Input } from "../../../../components/ui/input";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { useMemo } from "react";
import { useFetchCandidates } from "../hook/use-fetch-cadidates";

export const CandidateDirectory = () => {
  const { data: candidates, isLoading, error, refetch } = useFetchCandidates();
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const sort = searchParams.get("sort") || "score-desc";
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value) {
      searchParams.set("search", value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "score-desc") {
      searchParams.delete("sort");
    } else {
      searchParams.set("sort", value);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const clearSearch = () => {
    searchParams.delete("search");
    setSearchParams(searchParams, { replace: true });
  };

  const filteredCandidates = useMemo(() => {
    if (!candidates) return [];

    let filtered = candidates;

    if (search) {
      const searchTerm = search.toLowerCase();
      filtered = candidates.filter((candidate) => {
        return (
          candidate.fullName.toLowerCase().includes(searchTerm) ||
          candidate.headline.toLowerCase().includes(searchTerm) ||
          candidate.skills.some((skill) =>
            skill.toLowerCase().includes(searchTerm),
          )
        );
      });
    }

    return [...filtered].sort((a, b) => {
      switch (sort) {
        case "score-asc":
          return a.score - b.score;
        case "score-desc":
          return b.score - a.score;
        case "exp-asc":
          return a.yearsOfExperience - b.yearsOfExperience;
        case "exp-desc":
          return b.yearsOfExperience - a.yearsOfExperience;
        default:
          return b.score - a.score;
      }
    });
  }, [candidates, search, sort]);

  if (error) {
    return <ErrorCandidate error={error} refetch={refetch} />;
  }

  return (
    <div className="w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">
          Candidate Directory
        </h2>
        {!isLoading && (
          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-green-400">
              {filteredCandidates.length}
            </span>{" "}
            candidates
          </p>
        )}
      </div>
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <Input
          className="w-full h-8"
          placeholder="Search by name, headline, or skills..."
          value={search}
          onChange={handleSearch}
          addonAfter={<Search className="h-4 w-4" />}
        />
        <select
          className="h-10 sm:w-48 rounded-[10px] border border-input bg-card px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:border-primary-800 transition-colors cursor-pointer"
          value={sort}
          onChange={handleSort}
        >
          <option value="score-desc">Highest Score</option>
          <option value="score-asc">Lowest Score</option>
          <option value="exp-desc">Most Experience</option>
          <option value="exp-asc">Least Experience</option>
        </select>
      </div>
      {isLoading ? (
        <CandidatesSkeleton />
      ) : filteredCandidates.length === 0 ? (
        <EmptyCandidate setSearch={clearSearch} />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <div className="relative col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex "></div>
          {filteredCandidates.map((candidate) => (
            <CandidateCard key={candidate.id} candidate={candidate} />
          ))}
        </div>
      )}
    </div>
  );
};
