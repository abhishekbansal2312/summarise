import React from "react";
import { getDbConnected } from "./db";

export async function getSummaries(userId: string) {
  if (!userId) return [];

  try {
    const sql = await getDbConnected();
    const summaries =
      await sql`SELECT * FROM pdf_summaries WHERE user_id = ${userId} ORDER BY created_at DESC`;

    return summaries;
  } catch (error) {
    console.error("Error fetching summaries:", error);
    return [];
  }
}
