"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { NavigationControls } from "./navigation-controls";
import { ProgressBar } from "./progress-bar";
import { parseSection } from "./summary-helper";
import ContentSection from "./content-section";
import { motion, AnimatePresence } from "framer-motion";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="flex flex-col gap-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <motion.h2
        className="text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {title}
      </motion.h2>
    </motion.div>
  );
};

export function SummaryViewer({ summary }: { summary: string }) {
  const sections = summary
    .split("\n#") // Splitting into sections based on "#"
    .map((section) => section.trim())
    .filter(Boolean)
    .map(parseSection); // Assuming parseSection returns { title, points }

  const [currentSection, setCurrentSection] = useState(0);

  if (sections.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>No Summary Available</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">No content to display.</p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const { title, points } = sections[currentSection]; // Extracting title and points from the current section

  // Define animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const contentVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    }),
  };

  // Track the direction of navigation
  const [direction, setDirection] = useState(0);

  const handleNext = () => {
    if (currentSection < sections.length - 1) {
      setDirection(1);
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSection > 0) {
      setDirection(-1);
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleSectionSelect = (index: number) => {
    setDirection(index > currentSection ? 1 : -1);
    setCurrentSection(index);
  };

  return (
    <motion.div variants={cardVariants} initial="hidden" animate="visible">
      <Card
        className="relative px-2 h-[500px] sm:h-[400px] lg:h-[500px] 
                 w-full xl:w-[600px] bg-gradient-to-br 
                 from-background via-background/95 to-rose-500/5
                 backdrop-blur-lg shadow-2xl rounded-3xl 
                 border border-rose-500/10 overflow-hidden"
      >
        <ProgressBar sections={sections} currentSection={currentSection} />

        <div className="h-full overflow-y-auto scrollbar-hide pt-12 sm:pt-16 pb-20 sm:pb-24">
          <div className="px-4 sm:px-6">
            <SectionTitle title={title} />

            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentSection}
                custom={direction}
                variants={contentVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="min-h-[200px]"
              >
                <ContentSection points={points} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <NavigationControls
          currentSection={currentSection}
          totalSections={sections.length}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onSectionSelect={handleSectionSelect}
        />
      </Card>
    </motion.div>
  );
}
