import React from "react";
import { getDbConnected } from "./db";

export async function getSummaries(userId: string) {
  if (!userId) return [];

  try {
    const sql = await getDbConnected();
    if (!sql) throw new Error("Database connection failed");

    return await sql`
      SELECT * FROM pdf_summaries 
      WHERE user_id = ${userId} 
      ORDER BY created_at DESC
    `;
  } catch (error) {
    console.error("Error fetching summaries:", error);
    return [];
  }
}

export async function getSummaryById(id: string) {
  try {
    const sql = await getDbConnected();
    if (!sql) throw new Error("Database connection failed");

    const [result] = await sql`
        SELECT id, 
          user_id, 
          title, 
          original_file_url, 
          summary_text, 
          created_at, 
          updated_at, 
          status, 
          file_name, 
          LENGTH(summary_text) - LENGTH(REPLACE(summary_text, ' ', '')) + 1 AS word_count
        FROM pdf_summaries 
        WHERE id = ${id} 
        LIMIT 1
      `;

    return result || null;
  } catch (err) {
    console.error("Error fetching summary by ID:", err);
    return null;
  }
}
