import { MapPin, Briefcase, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../../../../lib/utils";

interface CandidateCardProps {
  candidate: Candidate;
}

const statusColors: Record<string, string> = {
  "Open to work": "bg-green-100 text-green-800 border-green-200",
  Interviewing: "bg-yellow-100 text-yellow-800 border-yellow-200",
  Hired: "bg-gray-100 text-gray-800 border-gray-200",
  "Not currently looking": "bg-red-100 text-red-800 border-red-200",
};

export const CandidateCard = ({ candidate }: CandidateCardProps) => {
  const badgeColor =
    statusColors[candidate.status] ||
    "bg-blue-100 text-blue-800 border-blue-200";

  return (
    <div className="group relative flex flex-col justify-between rounded-xl border border-slate-200  from-white to-slate-50/50 p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold leading-none tracking-tight mb-2 text-slate-900 group-hover:text-blue-600 transition-colors">
              {candidate.fullName}
            </h3>
            <span
              className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors ${badgeColor}`}
            >
              {candidate.status}
            </span>
          </div>
          <div className="flex flex-col items-end">
            <span
              className={cn(
                "text-xs font-bold px-2.5 py-1 rounded-md border",
                candidate.score > 80
                  ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                  : candidate.score > 70
                    ? "bg-amber-50 text-amber-700 border-amber-200"
                    : "bg-slate-100 text-slate-600 border-slate-200",
              )}
            >
              Score: {candidate.score}
            </span>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-5 font-medium line-clamp-2 leading-relaxed">
          {candidate.headline}
        </p>

        <div className="grid grid-cols-2 gap-y-3 text-sm text-slate-500 mb-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-slate-400" />
            <span className="truncate">{candidate.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Briefcase className="h-4 w-4 text-slate-400" />
            <span>{candidate.yearsOfExperience} Yrs Exp</span>
          </div>
          <div className="flex items-center gap-2 col-span-2">
            <Clock className="h-4 w-4 text-slate-400" />
            <span>Availability: {candidate.availability}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {candidate.skills.slice(0, 4).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-md border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 transition-colors hover:bg-blue-100"
            >
              {skill}
            </span>
          ))}
          {candidate.skills.length > 4 && (
            <span className="inline-flex items-center rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-500">
              +{candidate.skills.length - 4}
            </span>
          )}
        </div>
      </div>

      <Link
        to={`/candidate/${candidate.id}`}
        className="inline-flex w-full items-center justify-center rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2"
      >
        View Profile
        <ChevronRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
};
