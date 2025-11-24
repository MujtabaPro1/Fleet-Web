import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { Card, CardContent } from "../card";

const workingCapitalSolutions = [
  {
    title: "Business Overdraft",
    features: [
      "Instant extra funds",
      "Linked to business account",
      "Pay interest only on used funds",
      "Manage short-term cash flow",
    ],
  },
  {
    title: "Line of Credit",
    features: [
      "Flexible, reusable capital",
      "Draw and repay anytime",
      "Ideal for seasonal expenses",
      "Interest only on drawn funds",
    ],
  },
  {
    title: "Invoice Finance",
    features: [
      "Cash from unpaid invoices",
      "Access up to 90% upfront",
      "Maintain cash flow",
      "Pay suppliers on time",
    ],
  },
  {
    title: "Trade Finance",
    features: [
      "Fund trade cycles",
      "Bridge payments & receipts",
      "Reduce inventory and currency risks",
      "Keep supply chains moving",
    ],
  },
];

const propertyLoans = [
  {
    title: "Commercial Property Loan",
    features: [
      "Finance or refinance property",
      "Property as collateral",
      "Competitive rates and flexible terms",
      "Ideal for offices, warehouses, or retail",
    ],
  },
  {
    title: "Self-Employed Residential Loan",
    features: [
      "Loans for self-employed buyers",
      "Flexible income verification",
      "Fixed or variable rates",
      "Buy, build, or refinance",
    ],
  },
];

export const FeaturesListSection = (): JSX.Element => {
  return (
    <section className="pt-44 pb-24 px-0 bg-gray-50 flex flex-col w-full items-center">
      <div className="flex-col gap-10 flex max-w-[1280px] w-full items-start px-4">
        <Card className="bg-white rounded border border-solid shadow-shadow-sm w-full">
          <CardContent className="flex flex-col items-center gap-5 p-8">
            <div className="flex-col items-center gap-2 flex w-full">
              <h2 className="font-figtree font-semibold text-[#101828] text-2xl tracking-[-0.80px] leading-6">
                Business Finance Solutions
              </h2>

              <h1 className="font-figtree font-semibold text-[#c70036] text-5xl tracking-[-0.80px] leading-[48px]">
                Your Full Suite of Business Finance Solutions
              </h1>
            </div>

            <p className="max-w-[854.49px] font-figtree font-normal text-[#4a5565] text-base text-center tracking-[0] leading-6">
              Access the right funding structure for every business need, from
              managing daily cash flow and optimizing trade cycles to acquiring
              long-term commercial property. Use our guide to compare the key
              finance options available.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white rounded border border-solid shadow-shadow-sm">
          <CardContent className="flex flex-col items-center gap-[45px] p-8">
            <h2 className="font-figtree font-semibold text-[#101828] text-4xl tracking-[-0.80px] leading-9">
              Working Capital &amp; Cash Flow Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {workingCapitalSolutions.map((solution, index) => (
                <Card
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-solid shadow-shadow-sm"
                >
                  <CardContent className="flex flex-col items-start gap-8 p-6 h-full">
                    <div className="flex flex-col items-start gap-4 flex-1 w-full">
                      <h3 className="font-figtree font-semibold text-[#101828] text-2xl tracking-[0] leading-9">
                        {solution.title}
                      </h3>

                      <div className="flex flex-col items-start gap-3 w-full">
                        {solution.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 w-full"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-[#4a5565] flex-shrink-0" />
                            <span className="flex-1 font-figtree font-normal text-[#4a5565] text-base leading-6 tracking-[0]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="inline-flex h-auto items-center justify-center gap-1.5 px-3 py-2 bg-[#194170] rounded shadow-shadow-xs hover:bg-[#194170]/90">
                      <span className="font-figtree font-medium text-white text-sm tracking-[0] leading-5">
                        Learn more
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-white" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white rounded border border-solid shadow-shadow-sm w-full">
          <CardContent className="flex flex-col items-center gap-[45px] p-8">
            <h2 className="font-figtree font-semibold text-[#101828] text-4xl tracking-[-0.80px] leading-9">
              Property &amp; Long-Term Asset Loans
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
              {propertyLoans.map((loan, index) => (
                <Card
                  key={index}
                  className="bg-gray-50 rounded-xl overflow-hidden border border-solid shadow-shadow-sm"
                >
                  <CardContent className="flex flex-col items-start gap-8 p-6 h-full">
                    <div className="flex flex-col items-start gap-4 flex-1 w-full">
                      <h3 className="font-figtree font-semibold text-[#101828] text-2xl tracking-[0] leading-9">
                        {loan.title}
                      </h3>

                      <div className="flex flex-col items-start gap-3 w-full">
                        {loan.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center gap-2 w-full"
                          >
                            <CheckCircleIcon className="w-4 h-4 text-[#4a5565] flex-shrink-0" />
                            <span className="flex-1 font-figtree font-normal text-[#4a5565] text-base leading-6 tracking-[0]">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="inline-flex h-auto items-center justify-center gap-1.5 px-3 py-2 bg-[#194170] rounded shadow-shadow-xs hover:bg-[#194170]/90">
                      <span className="font-figtree font-medium text-white text-sm tracking-[0] leading-5">
                        Learn more
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-white" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
