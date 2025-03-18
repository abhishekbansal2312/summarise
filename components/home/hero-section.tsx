"use client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkle, ArrowRight, Upload } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { containerVariants, itemVariants } from "@/utils/constants";
import MotionComponents from "../common/motion-wrapper";

const buttonVariants = {
  scale: 1.01,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
    duration: 0.3,
  },
};

export default function HeroSection() {
  const { MotionSection, MotionDiv, MotionH1, MotionH2 } = MotionComponents;
  const router = useRouter();
  const { userId, isSignedIn } = useAuth();

  const handleGetStarted = () => {
    if (isSignedIn) {
      router.push("/upload");
    } else {
      router.push("/sign-up");
    }
  };

  return (
    <MotionSection
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center text-center min-h-screen px-6 py-16 sm:py-20 lg:pb-28 animate-in transition-all"
    >
      <MotionDiv
        variants={itemVariants}
        className="flex items-center space-x-2"
      >
        <MotionDiv className="relative p-[1px] overflow-hidden rounded-full bg-rose-500 group transition-all duration-300 ease-in-out hover:bg-rose-600">
          <Badge
            variant="secondary"
            className="relative flex items-center px-6 py-2 text-base font-medium bg-white rounded-full transition-all duration-300 group-hover:bg-rose-50"
          >
            <Sparkle className="h-8 w-8 lg:h-10 lg:w-10 mr-2 text-rose-600 animate-pulse" />
            <p className="text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800">
              Powered by AI
            </p>
          </Badge>
        </MotionDiv>
      </MotionDiv>

      <MotionH1
        variants={itemVariants}
        className="font-bold text-4xl sm:text-5xl md:text-6xl py-6 leading-tight"
      >
        Transform PDFs into{" "}
        <span className="relative inline-block">
          <span className="relative z-10 px-2">concise</span>
          <span
            className="absolute inset-0 bg-rose-200/50 -rotate-2 transform -skew-y-1"
            aria-hidden="true"
          ></span>
        </span>{" "}
        summaries
      </MotionH1>

      <MotionH2
        variants={itemVariants}
        className="mt-2 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto"
      >
        Get a beautiful summary reel of the document in seconds.
      </MotionH2>

      <MotionDiv
        variants={itemVariants}
        className="flex flex-col sm:flex-row gap-4 mt-12"
      >
        <MotionDiv whileHover={buttonVariants}>
          <Button
            onClick={handleGetStarted}
            className="px-8 py-5 text-white text-lg sm:text-xl rounded-full bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500 hover:to-slate-900 font-bold flex gap-2 items-center"
          >
            <span>{isSignedIn ? "Upload PDF" : "Get Started"}</span>
            {isSignedIn ? (
              <Upload className="ml-1" />
            ) : (
              <ArrowRight className="ml-1 animate-pulse" />
            )}
          </Button>
        </MotionDiv>

        <MotionDiv whileHover={buttonVariants}>
          <Button
            variant="outline"
            className="px-8 py-5 text-lg sm:text-xl rounded-full border-2 border-rose-200 hover:bg-rose-50 hover:border-rose-300 font-medium"
            onClick={() => router.push("/#pricing")}
          >
            View Plans
          </Button>
        </MotionDiv>
      </MotionDiv>
    </MotionSection>
  );
}
