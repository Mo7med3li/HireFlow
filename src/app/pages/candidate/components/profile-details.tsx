import { CheckCircle2, Clock } from "lucide-react";

interface ProfileDetailsProps {
  candidate: Candidate;
}

export const ProfileDetails = ({ candidate }: ProfileDetailsProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Main Content Column */}
      <div className="lg:col-span-2 space-y-8">
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
            Top Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {candidate.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-lg border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-100"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 lg:p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Recruiter Notes
          </h2>
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-5 text-slate-700 leading-relaxed font-medium">
            "Candidate demonstrated strong problem-solving skills during the
            initial technical screen. Excellent communication and a good fit for
            fast-paced agile environments. Strong background in modern web
            technologies and component-driven architecture."
          </div>
        </section>
      </div>

      {/* Sidebar Column */}
      <div className="space-y-8">
        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Availability
          </h2>
          <div className="flex items-center gap-3 text-slate-700">
            <div className="h-10 w-10 rounded-full bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0">
              <Clock className="h-5 w-5 text-indigo-600" />
            </div>
            <div>
              <p className="font-semibold">{candidate.availability}</p>
              <p className="text-sm text-slate-500">Notice period</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6">
          <h2 className="text-lg font-bold text-slate-900 mb-4">
            Experience Overview
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">
                {candidate.yearsOfExperience}+ years of professional experience
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">
                Proficient in {candidate.skills.slice(0, 2).join(" & ")}
              </span>
            </li>
            <li className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
              <span className="text-slate-700">
                Open to roles in {candidate.location}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};
