"use client";
import { useRef, useState } from "react";
import UploadFormInput from "@/components/upload/upload-form-input";
import { z } from "zod";
import { toast } from "sonner";
import { useUploadThing } from "../../utils/uploadthing";
import {
  generatePdfSummary,
  storePdfSummaryAction,
} from "@/actions/upload-actions";
import { useRouter } from "next/navigation";

const schema = z.object({
  file: z
    .custom<File>((file) => file instanceof File, {
      message: "Please upload a valid file",
    })
    .refine((file) => file.size <= 20 * 1024 * 1024, {
      message: "File size should be less than 20MB",
    })
    .refine((file) => file.type === "application/pdf", {
      message: "File should be a PDF",
    }),
});

export default function UploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { startUpload } = useUploadThing("pdfUploader", {
    onClientUploadComplete: (res) => {
      console.log("✅ Upload completed:", res);
      toast.success("✅ File uploaded successfully!");
    },
    onUploadError: (error) => {
      console.error("❌ Upload error:", error);
      toast.error("❌ Error occurred while uploading.");
    },
    onUploadBegin: (files) => {
      console.log("Upload has begun for", files);
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");

    const formData = new FormData(e.currentTarget);
    const file = formData.get("file") as File | null;

    if (!file) {
      toast.error("⚠️ No file uploaded.");
      console.error("No file uploaded");
      return;
    }

    console.log("File selected:", file);

    const validatedFields = schema.safeParse({ file });

    if (!validatedFields.success) {
      const errorMessage = validatedFields.error.errors
        .map((err) => err.message)
        .join(", ");
      toast.error(`⚠️ ${errorMessage}`);
      console.error("Validation error:", errorMessage);
      return;
    }

    const loadingToastId = toast.loading("⏳ Uploading...");
    setIsLoading(true);

    try {
      console.log("Starting upload...", file);
      const resp = await startUpload([file]);
      console.log("Upload response:", resp);

      if (!resp || resp.length === 0 || !resp[0]?.url) {
        toast.dismiss(loadingToastId);
        setIsLoading(false);
        toast.error("❌ Upload failed. No file URL returned.");
        console.error("Upload failed, response:", resp);
        return;
      }

      const fileUrl = resp[0].url;
      console.log("File uploaded successfully! File URL:", fileUrl);

      toast.dismiss(loadingToastId);
      toast.success("✅ File uploaded successfully!");

      console.log("Calling generatePdfSummary with:", fileUrl);
      const result = await generatePdfSummary(fileUrl);
      console.log("Summary generation response:", result);

      const { data = null } = result || {};
      console.log("Extracted summary data:", data);
      if (data) {
        toast.success("🎉 Summary generated successfully!");
      }

      let storeResult;
      if (data?.summary) {
        const storedData = {
          summary: data.summary,
          fileUrl: resp[0]?.serverData?.file?.url ?? fileUrl,
          title: data.title,
          fileName: file.name,
        };
        console.log("Storing summary with data:", storedData);
        storeResult = await storePdfSummaryAction(storedData);
        console.log("Store response:", storeResult);
      }

      if (storeResult?.data?.id) {
        toast.success("🎉 Summary Saved successfully!");
        formRef.current?.reset();
        console.log(
          "Redirecting to summary page:",
          `/summaries/${storeResult.data.id}`
        );
        router.push(`/summaries/${storeResult.data.id}`);
      } else {
        toast.error("❌ Failed to save summary.");
        console.error("Save failed, response:", storeResult);
      }
    } catch (error) {
      toast.dismiss(loadingToastId);
      toast.error("❌ Upload failed with an exception.");
      console.error("Upload exception:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto p-6 bg-white dark:bg-gray-900">
      <UploadFormInput
        ref={formRef}
        onSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </div>
  );
}
