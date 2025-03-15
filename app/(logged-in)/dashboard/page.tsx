import BgGradient from "@/components/common/bg-gradient";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plus } from "lucide-react";
import Link from "next/link";
import SummaryCard from "@/components/summaries/summary-card";
import { getSummaries } from "@/lib/summaries";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  let uploadLimit = 5;
  const user = await currentUser();
  const userId = user?.id;
  if (!userId) {
    return redirect("/sign-in");
  }

  const summaries = await getSummaries(userId);

  return (
    <main className="min-h-screen">
      <BgGradient className="from-emerald-200 via-teal-200 to-cyan-200" />
      <div className="container max-w-5xl z-0 mx-auto flex flex-col gap-4 px-2 py-12 sm:py-24">
        {/* Flex container for heading and button */}
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent">
              Your Summaries
            </h1>
            <p className="text-gray-600">
              Transform your PDFs into concise, actionable insights
            </p>
          </div>

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
        </div>
        <div className="mb-6">
          <div className="border border-rose-300 bg-rose-100 text-rose-700 text-sm p-4 rounded-lg flex items-center justify-between">
            <p className="flex-1">
              <strong>
                You've reached the limit of 5 summaries on this plan.
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
        {/* Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 sm:px-0">
          {summaries.map((summary, index) => (
            <SummaryCard key={index} summary={summary} />
          ))}
        </div>
      </div>
    </main>
  );
}
