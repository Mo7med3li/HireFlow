import { SearchX } from "lucide-react";

export const EmptyCandidate = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center border rounded-xl bg-card border-dashed">
      <div className="p-4 rounded-full mb-4">
        <SearchX className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">No candidates found</h3>
      <p className="mb-6 max-w-md text-gray-400">
        We couldn't find any candidates matching your criteria. Try adjusting
        your filters.
      </p>
      <button className="inline-flex h-10 items-center justify-center rounded-md border px-6 text-sm font-medium shadow-sm bg-green-200 hover:bg-green-400 transition-colors">
        Clear Filters
      </button>
    </div>
  );
};
