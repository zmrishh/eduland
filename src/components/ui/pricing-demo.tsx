"use client";

import { Pricing } from "@/components/ui/pricing";

const demoPlans = [
  {
    name: "STARTER",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    features: [
      "Up to 10 projects",
      "Basic analytics",
      "48-hour support response time",
      "Limited API access",
      "Community support",
    ],
    description: "Perfect for individuals and small projects",
    buttonText: "Start for Free",
    href: "/sign-up",
    isPopular: false,
  },
  {
    name: "PROFESSIONAL",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "24-hour support response time",
      "Full API access",
      "Priority support",
      "Team collaboration",
      "Custom integrations",
    ],
    description: "Ideal for growing teams and businesses",
    buttonText: "Get Started for Free",
    href: "/sign-up",
    isPopular: true,
  },
  {
    name: "ENTERPRISE",
    price: "0",
    yearlyPrice: "0",
    period: "per month",
    features: [
      "Everything in Professional",
      "Custom solutions",
      "Dedicated account manager",
      "1-hour support response time",
      "SSO Authentication",
      "Advanced security",
      "Custom contracts",
      "SLA agreement",
    ],
    description: "For large organizations with specific needs",
    buttonText: "Get in Touch for Free",
    href: "/contact",
    isPopular: false,
  },
];

export function PricingDemo() {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="relative z-20 py-10 lg:py-40 max-w-7xl mx-auto">
        <div className="px-8">
          <Pricing 
            plans={demoPlans}
            title="Everything is Now Free!"
            description="Get started with any plan at no cost. All features included."
          />
        </div>
      </div>
    </div>
  );
}
