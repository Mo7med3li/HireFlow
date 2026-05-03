export default function SingleCandidateSkeleton() {
  return (
    <div className="mx-auto w-full py-8 px-4 animate-pulse">
      <div className="h-4 w-24 bg-muted rounded mb-8"></div>
      <div className="h-48 w-full bg-muted rounded-xl mb-8"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-2 h-96 bg-muted rounded-xl"></div>
        <div className="col-span-1 h-96 bg-muted rounded-xl"></div>
      </div>
    </div>
  );
}
