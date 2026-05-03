import { RefreshCcw } from "lucide-react";

export const ErrorCandidate = ({
  error,
  refetch,
}: {
  error: Error | null;
  refetch: () => void;
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center">
      <div className="p-4 rounded-full mb-4">
        <RefreshCcw className="h-8 w-8" />
      </div>
      <h3 className="text-xl font-bold mb-2">Something went wrong</h3>
      <p className="text-red-500 mb-6 max-w-md">
        {error?.message || "Candidate not found or an unexpected error occurred."}
      </p>
      <button
        onClick={() => refetch()}
        className="inline-flex h-10 items-center justify-center rounded-md bg-red-200 hover:bg-red-400 px-6 text-sm font-medium text-white shadow transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};
