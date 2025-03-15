import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkle, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-16 sm:py-20 lg:pb-28 animate-in transition-all">
      <div className="flex items-center space-x-2">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-rose-500 group transition-all duration-300 ease-in-out hover:bg-rose-600">
          <Badge
            variant="secondary"
            className="relative flex items-center px-6 py-2 text-base font-medium bg-white rounded-full transition-all duration-300 group-hover:bg-rose-50"
          >
            <Sparkle className="h-8 w-8 lg:h-10 lg:w-10 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
              Powered by AI
            </p>
          </Badge>
        </div>
      </div>

      <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl py-6">
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 bg-rose-200/50 -rotate-2 transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
        summaries
      </h1>

      <h2 className="mt-2 text-lg sm:text-xl text-gray-600 max-w-2xl">
        Get a beautiful summary reel of the document in seconds.
      </h2>

      <Link href="#pricing">
        <Button className="mt-6 px-8 py-4 text-white text-lg sm:text-xl rounded-full bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 font-bold flex gap-2 items-center">
          <span>Try Summarise</span>
          <ArrowRight className="animate-pulse" />
        </Button>
      </Link>
    </section>
  );
}
