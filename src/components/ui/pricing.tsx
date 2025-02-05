"use client";

import { buttonVariants } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useMediaQuery } from "@/hooks/use-media-query";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

interface PricingPlan {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

interface PricingProps {
  plans: PricingPlan[];
  title?: string;
  description?: string;
}

export function Pricing({
  plans,
  title = "Simple, Transparent Pricing",
  description = "Choose the plan that works for you\nAll plans include access to our platform, lead generation tools, and dedicated support.",
}: PricingProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Return a simpler version during SSR
  if (!mounted) {
    return (
      <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase">
            {title}
          </h2>
          <p className="text-muted-foreground text-lg whitespace-pre-line">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                `rounded-xl border-4 p-8 bg-white text-center lg:flex lg:flex-col lg:justify-center relative`,
                plan.isPopular ? "border-[#FF3366]" : "border-black",
                "flex flex-col",
                "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              )}
            >
              {/* Basic content without animations */}
              <div className="flex-1 flex flex-col">
                <p className="text-xl font-bold uppercase">{plan.name}</p>
                <div className="mt-6 flex flex-col items-center justify-center gap-2">
                  <span className="text-base line-through text-gray-400">
                    ${plan.price}
                  </span>
                  <span className="text-5xl font-bold tracking-tight">
                    $0
                  </span>
                  <span className="text-lg font-bold text-[#FF3366]">
                    Now Free!
                  </span>
                </div>

                <ul className="mt-8 gap-4 flex flex-col">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-[#FF3366] mt-1 flex-shrink-0" />
                      <span className="text-left font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <Link
                    href={plan.href}
                    className={cn(
                      "w-full py-4 px-6 text-lg font-bold uppercase border-4 transition-all rounded-xl",
                      plan.isPopular 
                        ? "bg-[#FF3366] text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none" 
                        : "bg-white text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                    )}
                  >
                    {plan.buttonText}
                  </Link>
                </div>
                <p className="mt-6 text-sm font-medium text-gray-600">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-7xl px-6 lg:px-8 py-20">
      <div className="text-center space-y-4 mb-12">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl uppercase">
          {title}
        </h2>
        <p className="text-muted-foreground text-lg whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 sm:2 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ y: 50, opacity: 1 }}
            whileInView={
              isDesktop
                ? {
                    y: plan.isPopular ? -20 : 0,
                    opacity: 1,
                    x: index === 2 ? -30 : index === 0 ? 30 : 0,
                    scale: index === 0 || index === 2 ? 0.94 : 1.0,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              `rounded-xl border-4 p-8 bg-white text-center lg:flex lg:flex-col lg:justify-center relative`,
              plan.isPopular ? "border-[#FF3366]" : "border-black",
              "flex flex-col",
              !plan.isPopular && "mt-5",
              index === 0 || index === 2
                ? "z-0 transform translate-x-0 translate-y-0 -translate-z-[50px] rotate-y-[10deg]"
                : "z-10",
              index === 0 && "origin-right",
              index === 2 && "origin-left",
              "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none transition-all"
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-[#FF3366] py-1 px-3 flex items-center rounded-bl-xl">
                <Star className="text-white h-4 w-4 fill-current" />
                <span className="text-white ml-1 font-bold uppercase">
                  Popular
                </span>
              </div>
            )}
            <div className="flex-1 flex flex-col">
              <p className="text-xl font-bold uppercase">
                {plan.name}
              </p>
              <div className="mt-6 flex flex-col items-center justify-center gap-2">
                <span className="text-base line-through text-gray-400">
                  ${plan.price}
                </span>
                <span className="text-5xl font-bold tracking-tight">
                  $0
                </span>
                <span className="text-lg font-bold text-[#FF3366]">
                  Now Free!
                </span>
              </div>

              <ul className="mt-8 gap-4 flex flex-col">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-[#FF3366] mt-1 flex-shrink-0" />
                    <span className="text-left font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <Link
                  href={plan.href}
                  className={cn(
                    "w-full py-4 px-6 text-lg font-bold uppercase border-4 transition-all rounded-xl",
                    plan.isPopular 
                      ? "bg-[#FF3366] text-white border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none" 
                      : "bg-white text-black border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                  )}
                >
                  {plan.buttonText}
                </Link>
              </div>
              <p className="mt-6 text-sm font-medium text-gray-600">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
