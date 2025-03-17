import BgGradient from "@/components/common/bg-gradient";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import SummaryCard from "@/components/summaries/summary-card";
import { getSummaries } from "@/lib/summaries";
import { Suspense } from "react";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import EmptySummaryState from "@/components/summaries/empty-summary";
import { hasReachedUploadLimit } from "@/lib/user";

import { cn } from "@/lib/utils";

export function Skeleton({
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

// DashboardSkeleton component
function DashboardSkeleton() {
  return (
    <div className="container max-w-5xl z-0 mx-auto flex flex-col gap-4 px-2 py-12 sm:py-24">
      {/* Flex container for heading and button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Skeleton className="h-10 w-64 bg-gradient-to-r from-rose-100 to-rose-200" />
          <Skeleton className="h-5 w-80 bg-rose-50" />
        </div>
        <Skeleton className="h-10 w-32 rounded-md bg-gradient-to-r from-rose-300 to-rose-400" />
      </div>

      {/* Loading alert */}
      <div className="mb-6">
        <Skeleton className="h-16 w-full rounded-lg bg-rose-50 border border-rose-200" />
      </div>

      {/* Loading cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:px-0">
        {Array(6)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <Skeleton className="h-40 w-full bg-gradient-to-r from-rose-50 to-rose-100" />
              <div className="p-4 flex flex-col gap-2">
                <Skeleton className="h-6 w-3/4 bg-rose-100" />
                <Skeleton className="h-4 w-full bg-rose-50" />
                <Skeleton className="h-4 w-5/6 bg-rose-50" />
                <div className="flex justify-between mt-2">
                  <Skeleton className="h-8 w-24 rounded-md bg-rose-100" />
                  <Skeleton className="h-8 w-8 rounded-full bg-rose-200" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

// Actual content component
async function DashboardContent() {
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return redirect("/sign-in");
  }

  const uploadLimitData = await hasReachedUploadLimit(userId);

  let hasReachedLimit = true;
  let uploadLimit = 0;

  if (uploadLimitData) {
    hasReachedLimit = uploadLimitData.hasReachedLimit;
    uploadLimit = uploadLimitData.uploadLimit;
  } else {
    console.error("Failed to retrieve upload limit data.");
  }

  const summaries = await getSummaries(userId);

  return (
    <div className="container max-w-5xl z-0 mx-auto flex flex-col gap-4 px-2 py-12 sm:py-24">
      {/* Flex container for heading and button */}
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-rose-600 to-rose-900 bg-clip-text text-transparent">
            Your Summaries
          </h1>
          <p className="text-gray-600">
            Transform your PDFs into concise, actionable insights
          </p>
        </div>

        {hasReachedLimit ? (
          <Button
            variant="link"
            className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 
            hover:to-rose-800 transition-all duration-300 group hover:no-underline 
            flex items-center text-white opacity-50 cursor-not-allowed"
            disabled={true}
          >
            <Plus className="w-5 h-5 mr-2" />
            New Summary
          </Button>
        ) : (
          <Link href="/upload">
            <Button
              variant="link"
              className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 
              hover:to-rose-800 hover:scale-105 transition-all duration-300 group hover:no-underline 
              flex items-center text-white"
            >
              <Plus className="w-5 h-5 mr-2" />
              New Summary
            </Button>
          </Link>
        )}
      </div>

      {/* Alert for upload limit */}
      {hasReachedLimit && (
        <div className="mb-6">
          <div className="border border-rose-300 bg-rose-100 text-rose-700 text-sm p-4 rounded-lg flex items-center justify-between">
            <p className="flex-1">
              <strong>
                You've reached the limit of {uploadLimit} summaries on this
                plan.
              </strong>{" "}
              Upgrade to unlock more!
            </p>

            {/* Upgrade Link */}
            <Link
              href="#pricing"
              className="flex items-center gap-2 text-rose-700 font-semibold hover:text-rose-800 underline transition-all duration-300"
            >
              Click here to upgrade to Pro
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}

      {/* Display Summaries */}
      {summaries.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:px-0">
          {summaries.map((summary, index) => (
            <SummaryCard key={index} summary={summary} />
          ))}
        </div>
      ) : (
        <EmptySummaryState />
      )}
    </div>
  );
}

// Main page component with suspense
export default function DashboardPage() {
  return (
    <main className="min-h-screen">
      <BgGradient className="from-emerald-200 via-teal-200 to-cyan-200" />
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </main>
  );
}
