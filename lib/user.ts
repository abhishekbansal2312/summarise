import { plans } from "@/utils/constants";
import { getDbConnected } from "./db";
import { getUserUploadCount } from "./summaries";

export async function getPriceId(email: string) {
  const sql = await getDbConnected();
  const query =
    await sql`SELECT price_id FROM users WHERE email = ${email} AND status = 'active'`;

  return query?.[0]?.price_id || null;
}

export async function hasReachedUploadLimit(userId: string) {
  const uploadCount = await getUserUploadCount(userId); // Add await here
  const priceId = await getPriceId(userId);
  const isProPlan =
    plans.find((plan) => plan.priceId === priceId)?.id === "pro";

  const uploadLimit: number = isProPlan ? 1000 : 5;

  return {
    hasReachedLimit: uploadCount >= uploadLimit,
    uploadLimit,
  };
}
