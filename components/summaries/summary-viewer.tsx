"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { NavigationControls } from "./navigation-controls";
import { ProgressBar } from "./progress-bar";
import { parseSection } from "./summary-helper";
import ContentSection from "./content-section";

const SectionTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-2 mb-6 sticky top-0 pt-2 pb-4 bg-background/80 backdrop-blur-xs z-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center flex items-center justify-center gap-2">
        {title}
      </h2>
    </div>
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
      <Card>
        <CardHeader>
          <CardTitle>No Summary Available</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">No content to display.</p>
        </CardContent>
      </Card>
    );
  }

  const { title, points } = sections[currentSection]; // Extracting title and points from the current section

  return (
    <Card
      className="relative px-2 h-[500px] sm:h-[400px] lg:h-[500px] 
               w-full xl:w-[600px] bg-gradient-to-br 
               from-background via-background/95 to-rose-500/5
               backdrop-blur-lg shadow-2xl rounded-3xl 
               border border-rose-500/10"
    >
      <ProgressBar sections={sections} currentSection={currentSection} />

      <div className="h-full overflow-y-auto scrollbar-hide pt-12 sm:pt-16 pb-20 sm:pb-24">
        <div className="px-4 sm:px-6">
          <SectionTitle title={title} />
          <ContentSection points={points} /> {/* Corrected: passing points */}
        </div>
      </div>

      <NavigationControls
        currentSection={currentSection}
        totalSections={sections.length}
        onPrevious={() => setCurrentSection((prev) => Math.max(0, prev - 1))}
        onNext={() =>
          setCurrentSection((prev) => Math.min(sections.length - 1, prev + 1))
        }
        onSectionSelect={setCurrentSection}
      />
    </Card>
  );
}
