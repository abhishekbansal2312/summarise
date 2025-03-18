import { isDev } from "./helpers";
export const plans = [
  {
    id: "basic",
    name: "Basic",
    paymentLink: isDev
      ? "https://buy.stripe.com/test_eVa0299Jeade5ricMM"
      : "https://buy.stripe.com/test_eVa0299Jeade5ricMM",
    priceId: isDev
      ? "price_1R3HKvE2Fvocy8KEJr9qKMqn"
      : "price_1R3HKvE2Fvocy8KEJr9qKMqn",
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
    paymentLink: isDev
      ? "https://buy.stripe.com/test_8wM2ahdZubhibPGfYZ"
      : "https://buy.stripe.com/test_8wM2ahdZubhibPGfYZ",
    priceId: isDev
      ? "price_1R3HPaE2Fvocy8KEMhySVPO5"
      : "price_1R3HPaE2Fvocy8KEMhySVPO5",
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

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    transition: {
      type: "spring",
      damping: 15,
      stiffness: 50,
      duration: 6.8,
    },
  },
};
