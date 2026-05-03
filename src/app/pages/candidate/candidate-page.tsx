import { useParams, Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { ProfileHeader } from "./components/profile-header";
import { ProfileDetails } from "./components/profile-details";
import { ErrorCandidate } from "../../../components/shared/error";
import SingleCandidateSkeleton from "../../../components/skeletons/single-cadidate.skeleton";
import { useFetchSingleCandidate } from "./hooks/use-fetch-single-cadidate";

export default function CandidateProfile() {
  const { id } = useParams<{ id: string }>();

  const {
    data: candidate,
    isLoading,
    error,
    refetch,
  } = useFetchSingleCandidate(id!);

  if (isLoading) {
    return <SingleCandidateSkeleton />;
  }

  if (error || !candidate) {
    return <ErrorCandidate error={error} refetch={refetch} />;
  }

  return (
    <div className="mx-auto max-w-5xl py-8 px-4 lg:px-8">
      <Link
        to="/"
        className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-slate-900 mb-6 transition-colors"
      >
        <ChevronLeft className="h-4 w-4 mr-1" />
        Back to Directory
      </Link>

      <ProfileHeader candidate={candidate} />
      <ProfileDetails candidate={candidate} />
    </div>
  );
}
