import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white text-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="flex flex-col space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-rose-700 bg-clip-text text-transparent">
              Summarise
            </div>
            <p className="text-gray-700 text-sm">
              Transform PDFs into concise summaries powered by AI. Get a
              beautiful summary reel of the document in seconds.
            </p>
            <div className="pt-2">
              <Link href="/upload">
                <Button className="bg-gradient-to-r from-rose-500 to-rose-700 hover:from-rose-600 hover:to-rose-800 group">
                  Try Summarise
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h3 className="font-semibold text-black mb-4">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/upload"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Upload a PDF
                </Link>
              </li>
              <li>
                <Link
                  href="/#how-it-works"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Your Summaries
                </Link>
              </li>
            </ul>
          </div>

          {/* Plans Column */}
          <div>
            <h3 className="font-semibold text-black mb-4">Plans</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/#pricing"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Basic - $9/month
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Pro - $19/month
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Features Comparison
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-semibold text-black mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-700 hover:text-rose-600 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-rose-100 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-rose-600">
              © {new Date().getFullYear()} Summarise. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-black">
              <span>Powered by AI</span>
              <span>Save hours of reading time</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
