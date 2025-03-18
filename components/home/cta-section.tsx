"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function CTASection() {
  return (
    <section className="bg-gray-50 py-12 dark:bg-gray-900">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Runs when visible
          exit={{ opacity: 0, y: 50 }} // Resets when leaving
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.3 }} // Triggers at 30% visibility
          className="flex flex-col items-center justify-center space-y-4 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false, amount: 0.3 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900 dark:text-white">
              Ready to Save Hours of Reading Time?
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500 md:text-xl lg:text-base xl:text-xl dark:text-gray-400">
              Transform lengthy documents into clear, actionable insights with
              our AI-powered summarizer.
            </p>
          </motion.div>

          {/* Conditional Rendering Based on Authentication */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
          >
            <SignedOut>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
              >
                <Button
                  size="lg"
                  variant="link"
                  className="w-full text-white min-[400px]:w-auto bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500"
                  asChild
                >
                  <Link href="/sign-in">
                    Sign In
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </SignedOut>

            <SignedIn>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: false, amount: 0.3 }}
                className="flex flex-col gap-2 min-[400px]:flex-row justify-center"
              >
                <Button
                  size="lg"
                  variant="link"
                  className="w-full text-white min-[400px]:w-auto bg-gradient-to-r from-slate-900 to-rose-500 hover:from-rose-500"
                  asChild
                >
                  <Link href="/upload">
                    Get Started
                    <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </SignedIn>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
