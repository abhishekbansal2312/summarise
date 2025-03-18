// header.jsx - Make this a server component
import React from "react";
import { FileText } from "lucide-react";
import NavLink from "./nav-link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import PlanBadge from "./plan-badge";
import ClientSideButtons from "./client-side-buttons";

export default function Header() {
  return (
    <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
      <div className="flex lg:flex-1">
        <NavLink
          href={"/"}
          className="flex items-center gap-1 lg:gap-2 shrink-0"
        >
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="font-extrabold lg:text-xl text-gray-900">
            Summarise
          </span>
        </NavLink>
      </div>

      <div className="flex lg:flex-1 justify-center gap-4 lg:items-center lg:gap-4">
        <NavLink href={"/#pricing"}>Pricing</NavLink>
        <SignedIn>
          <NavLink href={"/dashboard"}>Your Summaries</NavLink>
        </SignedIn>
      </div>

      <div className="flex lg:justify-end lg:flex-1">
        <SignedIn>
          <div className="flex lg:gap-4 gap-2 items-center">
            <ClientSideButtons variant="upload" />
            <PlanBadge />
            <UserButton />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="flex lg:gap-4 gap-2 items-center">
            <ClientSideButtons variant="auth" />
          </div>
        </SignedOut>
      </div>
    </nav>
  );
}
