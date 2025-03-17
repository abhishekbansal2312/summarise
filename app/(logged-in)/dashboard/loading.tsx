import { cn } from "@/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-rose-100", className)}
      {...props}
    />
  );
}

export default function Loading() {
  return (
    <div className="container max-w-5xl mx-auto flex flex-col gap-4 px-2 py-12 sm:py-24">
      {/* Heading */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-10 w-64 bg-gradient-to-r from-rose-100 to-rose-200" />
          <Skeleton className="h-5 w-80 bg-rose-50" />
        </div>
        <Skeleton className="h-10 w-32 bg-gradient-to-r from-rose-300 to-rose-400" />
      </div>

      {/* Alert */}
      <div className="mb-6">
        <Skeleton className="h-16 w-full rounded-lg bg-rose-50 border border-rose-200" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow-sm">
            <Skeleton className="h-40 w-full bg-gradient-to-r from-rose-50 to-rose-100" />
            <div className="p-4 flex flex-col gap-2">
              <Skeleton className="h-6 w-3/4 bg-rose-100" />
              <Skeleton className="h-4 w-full bg-rose-50" />
              <Skeleton className="h-4 w-5/6 bg-rose-50" />
              <div className="flex justify-between mt-2">
                <Skeleton className="h-8 w-24 bg-rose-100" />
                <Skeleton className="h-8 w-8 rounded-full bg-rose-200" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
