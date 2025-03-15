"use server";

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAI } from "@/lib/openai";
import { generateSummaryFromGemini } from "@/lib/geminiai";
import { auth } from "@clerk/nextjs/server";
import { getDbConnected } from "@/lib/db";
import { formatFileNameTitle } from "@/utils/format-utils";
import { revalidatePath } from "next/cache";

export async function generatePdfSummary(uploadResponse: any) {
  console.log("Raw Upload Response:", uploadResponse);

  let fileUrl;
  let fileName;

  if (typeof uploadResponse === "string") {
    fileUrl = uploadResponse;
    fileName = fileUrl.split("/").pop() || "unknown-file";
  } else if (Array.isArray(uploadResponse) && uploadResponse.length > 0) {
    fileUrl = uploadResponse[0]?.ufsUrl || uploadResponse[0]?.appUrl;
    fileName =
      uploadResponse[0]?.fileName || uploadResponse[0]?.name || "unknown-file";
  } else if (typeof uploadResponse === "object" && uploadResponse !== null) {
    fileUrl = uploadResponse?.ufsUrl || uploadResponse?.appUrl;
    fileName =
      uploadResponse?.fileName || uploadResponse?.name || "unknown-file";
  }

  if (!fileUrl || typeof fileUrl !== "string") {
    console.error("Invalid file URL format:", fileUrl);
    return { success: false, message: "Invalid file URL format", data: null };
  }

  try {
    console.log("Fetching text from:", fileUrl);
    const pdfText = await fetchAndExtractPdfText(fileUrl);
    console.log("Extracted PDF Text:", pdfText);

    let summary;
    try {
      summary = await generateSummaryFromOpenAI(pdfText);
      console.log("OpenAI Summary:", summary);
    } catch (error) {
      console.error("OpenAI Error:", error);
      if (error instanceof Error && error.message === "RATE_LIMIT_EXCEEDED") {
        try {
          summary = await generateSummaryFromGemini(pdfText);
          console.log("Gemini Summary:", summary);
        } catch (geminiError) {
          console.error("Gemini API call failed:", geminiError);
          throw geminiError;
        }
      } else {
        throw error;
      }
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary from both OpenAI and Gemini",
        data: null,
      };
    }

    const formattedFileName = formatFileNameTitle(fileName);

    return {
      success: true,
      message: "Summary generated successfully",
      data: { summary, title: formattedFileName, fileName },
    };
  } catch (error) {
    console.error("Error generating PDF summary:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error generating summary",
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

async function savedPdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  try {
    const sql = await getDbConnected();

    if (!userId) {
      throw new Error("User ID is required.");
    }

    console.log("Saving PDF summary for User ID:", userId);

    const result = await sql`
      INSERT INTO pdf_summaries (
        user_id,
        original_file_url,
        summary_text,
        title,
        file_name
      ) VALUES (
        ${userId},  -- No UUID enforcement
        ${fileUrl},
        ${summary},
        ${title},
        ${fileName}
      ) RETURNING id;
    `;

    return result && result.length > 0 ? result[0] : null;
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
    const { userId } = await auth();
    console.log("Authenticated User ID:", userId);

    if (!userId) {
      return { success: false, message: "User not authenticated" };
    }

    const savedSummary = await savedPdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary) {
      return { success: false, message: "Failed to save PDF summary" };
    }

    revalidatePath(`/summaries/${savedSummary.id}`);

    return {
      success: true,
      message: "PDF summary saved successfully",
      data: { id: savedSummary.id },
    };
  } catch (error) {
    console.error("Error in storePdfSummaryAction:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Error storing summary",
    };
  }
}
