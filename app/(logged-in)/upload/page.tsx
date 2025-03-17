import BgGradient from "@/components/common/bg-gradient";
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";
import { hasReachedUploadLimit } from "@/lib/user";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  const userId = user?.id;

  if (!userId) {
    redirect("/sign-in");
  }

  const uploadLimitData = await hasReachedUploadLimit(userId);

  let hasReachedLimit = true;
  let uploadLimit = 0;

  if (uploadLimitData) {
    hasReachedLimit = uploadLimitData.hasReachedLimit;
    uploadLimit = uploadLimitData.uploadLimit;
  } else {
    console.error("Failed to retrieve upload limit data.");
  }

  if (hasReachedLimit) {
    redirect("/dashboard");
  }

  return (
    <div className="relative min-h-screen">
      <BgGradient />
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <UploadHeader />
        <UploadForm />
      </div>
    </div>
  );
}
