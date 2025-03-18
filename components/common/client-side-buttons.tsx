// client-side-buttons.jsx
"use client";

import React from "react";
import { Button } from "../../components/ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

export default function ClientSideButtons({ variant }: { variant: string }) {
  const router = useRouter();
  const { userId } = useAuth();

  const handleUploadClick = () => {
    if (!userId) {
      router.push("/sign-in");
    } else {
      router.push("/upload");
    }
  };

  if (variant === "upload") {
    return (
      <Button
        onClick={handleUploadClick}
        variant="outline"
        className="hover:bg-rose-50 border-rose-200 text-rose-600 hover:text-rose-700 hover:border-rose-300"
      >
        Upload a PDF
      </Button>
    );
  }

  if (variant === "auth") {
    return (
      <>
        <Button
          onClick={() => router.push("/sign-in")}
          variant="outline"
          className="hover:bg-rose-50 border-rose-200"
        >
          Sign In
        </Button>
        <Button
          onClick={() => router.push("/sign-up")}
          className="bg-rose-500 hover:bg-rose-600 text-white"
        >
          Sign Up
        </Button>
      </>
    );
  }

  return null;
}
