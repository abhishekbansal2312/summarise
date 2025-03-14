import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkle } from "lucide-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-16 sm:py:20 lg:pb:28 transition-all animate-in lg:px-12 max-w-7xl">
      <div className="flex items-center space-x-2">
        <div className="relative p-[1px] overflow-hidden rounded-full bg-rose-500 group transition-all duration-300 ease-in-out hover:bg-rose-600 ">
          <Badge
            variant={"secondary"}
            className="relative flex items-center px-6 py-2 text-base font-medium bg-white rounded-full transition-all duration-300 group-hover:bg-rose-50"
          >
            <Sparkle className="h-12 w-12 lg:h-10 lg:w-10 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
              Powered by AI
            </p>
          </Badge>
        </div>
      </div>

      <h1 className="font-bold text-5xl py-6 text-center">
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 bg-rose-200/50 -rotate-2  transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
        summaries
      </h1>
      <h2 className="mt-2 text-lg  text-gray-600">
        Get a beautiful summary reel of the document in seconds.
      </h2>

      <Button
        variant={"link"}
        className="mt-6 px-6 py-6  text-white text-base sm:text-lg lg:text-xl rounded-full bg-linear-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 hover:no-underline font-bold "
      >
        <Link href="/#pricing" className=" flex gap-2 items-center">
          <span> Try Summarise</span>
          <ArrowRight className="animate-pulse" />
        </Link>
      </Button>
    </section>
  );
}
