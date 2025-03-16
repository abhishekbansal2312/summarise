import { isDev } from "./helpers";
export const plans = [
  {
    id: "basic",
    name: "Basic",
    paymentLink: isDev ? "https://buy.stripe.com/test_eVa0299Jeade5ricMM" : "",
    priceId: isDev ? "price_1R3HKvE2Fvocy8KEJr9qKMqn" : "",
    price: 9,
    description: "For casual readers",
    items: [
      "5 PDF summaries per month",
      "Standard Processing Speed",
      "Email support",
    ],
  },
  {
    id: "pro",
    paymentLink: isDev ? "https://buy.stripe.com/test_8wM2ahdZubhibPGfYZ" : "",
    priceId: isDev ? "price_1R3HPaE2Fvocy8KEMhySVPO5" : "",
    name: "Pro",
    price: 19,
    description: "For professionals and teams",
    items: [
      "Unlimited PDF summaries",
      "Priority Processing",
      "24/7 priority support",
      "Markdown export",
    ],
  },
];
