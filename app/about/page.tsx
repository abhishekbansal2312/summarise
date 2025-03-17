import React from "react";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-rose-500 to-rose-600 bg-clip-text text-transparent">
          About Summarise
        </h1>
      </header>

      <main className="prose prose-lg max-w-none">
        <div className="mb-12">
          <img
            src="/heading.png"
            alt="PDF Summarization"
            className="w-full rounded-lg shadow-md mb-6"
          />
        </div>

        <h2 className="text-2xl font-bold text-black mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-6">
          At Summarise, we're on a mission to help people save time and extract
          valuable insights from lengthy documents. Our AI-powered tool
          transforms PDFs into clean, digestible summaries so you can grasp
          content quickly and focus on what matters most.
        </p>

        <div className="bg-white p-8 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold text-black mb-4">What We Offer</h2>
          <p className="text-gray-700 mb-6">
            Get a beautiful summary reel of your documents in seconds. Our
            AI-powered tool extracts the key information and presents it in a
            clean, digestible format so you can grasp the content quickly.
          </p>
          <p className="text-gray-700 font-bold mb-6">
            Watch how Summarise transforms your PDFs into an{" "}
            <em>easy-to-read summary!</em>
          </p>
          <div className="text-center">
            <span className="inline-block text-5xl mb-4">🚀</span>
            <p className="text-gray-700 font-medium">
              Upload PDFs and get structured, AI-generated summaries in seconds
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-black mb-6">How It Works</h2>
        <p className="text-gray-700 mb-4">
          Transform any PDF into an easy-to-digest summary in three simple
          steps:
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3">
              1. Upload your PDF
            </h3>
            <p className="text-gray-700">
              Simply drag and drop your PDF document or click to upload.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3">
              2. Summarize your PDF
            </h3>
            <p className="text-gray-700">
              Our AI-powered algorithm will analyze your PDF and generate a
              summary.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold text-black mb-3">
              3. Download your summary
            </h3>
            <p className="text-gray-700">
              Download your summary and share it with others.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-black mb-6">About Me</h2>
        <p className="text-gray-700 mb-6">
          As a full stack web developer, I combine expertise in artificial
          intelligence, natural language processing, and user experience design
          to create tools that deliver exceptional value. I'm passionate about
          making information more accessible and helping people work smarter.
        </p>

        <div className="flex justify-center mb-12">
          <div className="text-center">
            <img
              src="/profile.png"
              alt="Profile photo"
              className="w-32 h-32 mx-auto rounded-full mb-4"
            />
            <h3 className="font-bold text-black">Abhishek Bansal</h3>
            <p className="text-gray-700">Full Stack Web Developer</p>
          </div>
        </div>
      </main>

      <div className="bg-white p-8 rounded-lg shadow-sm mt-12 text-center">
        <h2 className="text-2xl font-bold text-black mb-4">
          Ready to Save Hours of Reading Time?
        </h2>
        <p className="text-gray-700 mb-6">
          Transform lengthy documents into clear, actionable insights with our
          AI-powered summarizer.
        </p>
      </div>
    </div>
  );
};

export default About;
