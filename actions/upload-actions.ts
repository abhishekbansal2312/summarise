"use server";

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";
import { generateSummaryFromGemini } from "@/lib/geminiai";
import { auth } from "@clerk/nextjs/server";
import { getDbConnected } from "@/lib/db";
import { formatFileNameTitle } from "@/utils/format-utils";
import { revalidatePath } from "next/cache";
import { extractTitleFromSummary } from "@/utils/title-utils";

export async function generatePdfSummary(uploadResponse: any) {
  try {
    console.log("Raw Upload Response:", uploadResponse);

    let fileUrl, fileName;

    if (typeof uploadResponse === "string") {
      fileUrl = uploadResponse;
      fileName = fileUrl.split("/").pop() || "unknown-file";
    } else if (Array.isArray(uploadResponse) && uploadResponse.length > 0) {
      fileUrl = uploadResponse[0]?.ufsUrl || uploadResponse[0]?.appUrl;
      fileName =
        uploadResponse[0]?.fileName ||
        uploadResponse[0]?.name ||
        "unknown-file";
    } else if (uploadResponse && typeof uploadResponse === "object") {
      fileUrl = uploadResponse.ufsUrl || uploadResponse.appUrl;
      fileName =
        uploadResponse.fileName || uploadResponse.name || "unknown-file";
    }
    console.log(fileUrl, "hbhbvhjjb");

    if (!fileUrl || typeof fileUrl !== "string") {
      throw new Error("Invalid file URL format");
    }

    console.log("Fetching text from:", fileUrl);
    const pdfText = await fetchAndExtractPdfText(fileUrl);
    console.log("Extracted PDF Text:", pdfText);

    let summary;
    try {
      summary = await generateSummaryFromOpenAI(pdfText);
    } catch (error) {
      console.error("OpenAI Error:", error);
      summary = await generateSummaryFromGemini(pdfText);
    }

    if (!summary) {
      throw new Error("Failed to generate summary from both OpenAI and Gemini");
    }

    let title =
      extractTitleFromSummary(summary) || formatFileNameTitle(fileName);

    return {
      success: true,
      message: "Summary generated successfully",
      data: { summary, title, fileName },
    };
  } catch (error) {
    console.error("Error generating PDF summary:", error);
    return {
      success: false,
      message: " Failed  to generate summary",
      data: null,
    };
  }
}

interface PdfSummaryType {
  userId?: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
}

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  try {
    if (!userId) throw new Error("User ID is required.");

    const sql = await getDbConnected();
    if (!sql) throw new Error("Database connection failed.");
    console.log("Saving PDF summary for User ID:", userId);

    const result = await sql`
      INSERT INTO pdf_summaries (
        user_id, original_file_url, summary_text, title, file_name
      ) VALUES (
        ${userId}, ${fileUrl}, ${summary}, ${title}, ${fileName}
      ) RETURNING id;
    `;

    return result?.length > 0 ? result[0] : null;
  } catch (error) {
    console.error("Error saving PDF summary:", error);
    throw error;
  }
}

export async function storePdfSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
}: Omit<PdfSummaryType, "userId">) {
  try {
    const authData = await auth();
    if (!authData?.userId) {
      throw new Error("User not authenticated");
    }
    const { userId } = authData;
    console.log("Authenticated User ID:", userId);

    if (!userId) {
      throw new Error("User not authenticated");
    }

    const savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });
    if (!savedSummary) {
      throw new Error("Failed to save PDF summary");
    }

    revalidatePath(`/summaries/${savedSummary.id}`);

    return {
      success: true,
      message: "PDF summary saved successfully",
      data: { id: savedSummary.id },
    };
  } catch (error) {
    console.error("Error in storePdfSummaryAction:", error);
    return { success: false, message: " Failed to save PDF summary" };
  }
}

export async function generatePdfText({ fileUrl }: { fileUrl: string }) {
  try {
    if (!fileUrl || typeof fileUrl !== "string") {
      throw new Error("Invalid file URL.");
    }

    const pdfText = await fetchAndExtractPdfText(fileUrl);
    console.log("Extracted PDF text:", pdfText);

    if (!pdfText) {
      throw new Error("Failed to extract PDF text");
    }

    return {
      success: true,
      message: "PDF text extracted successfully",
      data: { pdfText },
    };
  } catch (error) {
    console.error("Error generating PDF text:", error);
    return { success: false, message: "Error generating PDF text", data: null };
  }
}
