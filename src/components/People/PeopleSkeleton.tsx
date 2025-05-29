import { Skeleton } from "@/components/ui/skeleton";

export const PeopleSkeleton = () => {
  return (
    <>
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className="bg-white flex w-60 h-[300px] flex-col border-b shadow-xl rounded-xl border"
        >
          <div className="aspect-square overflow-hidden relative">
            <Skeleton className="h-[100px] w-[200px] rounded-xl mx-auto mt-4" />
          </div>
          <div className="flex flex-col gap-3 p-4">
            <Skeleton className="h-6 w-40 rounded-md" />
            <Skeleton className="h-10 w-full rounded-md" />
          </div>
        </div>
      ))}
    </>
  );
};
