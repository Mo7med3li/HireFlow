import { MapPin, Briefcase } from "lucide-react";

import { useQueryClient } from "@tanstack/react-query";
import { cn } from "../../../../lib/utils";

interface ProfileHeaderProps {
  candidate: Candidate;
}

export const ProfileHeader = ({ candidate }: ProfileHeaderProps) => {
  const queryClient = useQueryClient();

  const handleStatusChange = (newStatus: string) => {
    queryClient.setQueryData(["candidate", candidate.id], (old: Candidate) => ({
      ...old,
      status: newStatus,
    }));

    //  Update the candidate in the directory list cache
    queryClient.setQueryData(["candidates"], (old: Candidate[] | undefined) => {
      if (!old) return old;
      return old.map((c) =>
        c.id === candidate.id ? { ...c, status: newStatus } : c,
      );
    });
  };

  const statusColors: Record<string, string> = {
    "Open to work": "bg-green-100 text-green-800 border-green-200",
    Interviewing: "bg-yellow-100 text-yellow-800 border-yellow-200",
    Hired: "bg-gray-100 text-gray-800 border-gray-200",
    "Not currently looking": "bg-red-100 text-red-800 border-red-200",
  };

  const currentBadgeColor =
    statusColors[candidate.status] ||
    "bg-blue-100 text-blue-800 border-blue-200";

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8 mb-8">
      <div className="flex flex-col md:flex-row gap-6 md:items-start justify-between">
        {/* Candidate Info */}
        <div className="flex gap-6 items-start">
          <div className="h-24 w-24 shrink-0 rounded-2xl bg-blue-100 border border-slate-200 flex items-center justify-center text-blue-600 text-3xl font-bold uppercase shadow-sm">
            {candidate.fullName
              .split(" ")
              .map((n) => n[0])
              .join("")
              .substring(0, 2)}
          </div>

          <div>
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                {candidate.fullName}
              </h1>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${currentBadgeColor}`}
              >
                {candidate.status}
              </span>
            </div>

            <p className="text-lg text-slate-600 font-medium mb-4 max-w-2xl">
              {candidate.headline}
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-slate-400" />
                {candidate.location}
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-4 w-4 text-slate-400" />
                {candidate.yearsOfExperience} Years Experience
              </div>
            </div>
          </div>
        </div>

        {/* Actions / Status Update */}
        <div className="flex flex-col gap-3 min-w-[200px] shrink-0 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-6">
          <label className="text-sm font-semibold text-slate-700">
            Update Candidate Status
          </label>
          <select
            className="w-full h-10 rounded-[10px] border border-slate-300 bg-white px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:border-blue-500 transition-colors cursor-pointer"
            value={candidate.status}
            onChange={(e) => handleStatusChange(e.target.value)}
          >
            <option value="Open to work">Open to work</option>
            <option value="Interviewing">Interviewing</option>
            <option value="Hired">Hired</option>
            <option value="Not currently looking">Not currently looking</option>
          </select>

          <div
            className={cn(
              "mt-2 text-center text-xs font-bold py-2 rounded-lg border",
              candidate.score > 80
                ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                : candidate.score > 70
                  ? "bg-amber-50 text-amber-700 border-amber-200"
                  : "bg-slate-50 text-slate-600 border-slate-200",
            )}
          >
            Assessment Score: {candidate.score}
          </div>
        </div>
      </div>
    </div>
  );
};
