import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import React from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";

const financeOptions = [
  {
    title: "Operating Lease",
    features: [
      "Fixed monthly costs with minimal risk.",
      "Fully tax-deductible payments.",
      "Optional full-service management.",
      "Keeps debt off the balance sheet.",
    ],
    url: 'operating-lease'
  },
  {
    title: "Finance Lease",
    features: [
      "Lower monthly repayments.",
      "Tax benefits on interest and depreciation.",
      "Asset recorded on balance sheet.",
      "Option to purchase at lease end.",
    ],
    url: 'finance-lease'
  },
  {
    title: "Chattel Mortgage",
    features: [
      "Claim full GST upfront.",
      "Immediate asset ownership.",
      "Tax-deductible interest and depreciation.",
      "Ideal for cash-based businesses.",
    ],
    url: 'chattel-mortgage'
  },
];

export const FeaturesSection = ({ title, description, subDescription }: { title: string; description: string; subDescription: string }): JSX.Element => {
  return (
    <section className="pt-4 pb-24 px-0 bg-gray-50 flex flex-col w-full items-center">
      <div className="flex flex-col gap-6 w-full max-w-[1280px] lg:px-4 px-0">
        <Card className="shadow-shadow-sm">
          <CardContent className="flex flex-col items-start lg:items-center gap-5 p-8  bg-white">
            <div className="flex flex-col items-start lg:items-center gap-2 w-full">
              <h2 className="font-figtree font-semibold text-[#101828] text-2xl tracking-[-0.80px] leading-6">
                {title}
              </h2>

              <h1 className="max-w-[932px] font-figtree font-semibold text-[#c70036] text-3xl lg:text-5xl text-start lg:text-center tracking-[-0.80px] leading-[32px] lg:leading-[48px]">
                {description}
              </h1>
            </div>

            <p className="font-figtree font-normal text-[#4a5565] text-base text-start lg:text-center tracking-[0] leading-6">
              {subDescription}
            </p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {financeOptions.map((option, index) => (
            <Card key={index} className="shadow-shadow-sm bg-white">
              <CardContent className="flex flex-col items-start gap-8 p-6">
                <div className="flex flex-col items-start gap-4 w-full">
                  <h3 className="font-figtree font-semibold text-[#101828] text-2xl tracking-[0] leading-9">
                    {option.title}
                  </h3>

                  <div className="flex flex-col items-start gap-3 w-full">
                    {option.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2 w-full"
                      >
                        <CheckCircleIcon className="w-4 h-4 flex-shrink-0 text-[#4a5565]" />
                        <p className="flex-1 font-figtree font-normal text-[#4a5565] text-base leading-6 tracking-[0]">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button 
                onClick={()=>{
                  window.scrollTo({
                    top: document.getElementById(option.url)?.offsetTop,
                    behavior: "smooth",
                  });
                }}
                className="h-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-[#194170] hover:bg-[#194170]/90 rounded shadow-shadow-xs">
                  <span className="font-figtree font-medium text-white text-sm tracking-[0] leading-5">
                    Learn more
                  </span>
                  <ArrowRightIcon className="w-4 h-4 text-white" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
