import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { Card, CardContent } from "../card";

const consultationFeatures = [
  {
    icon: "../../../assets/images/svg/location.svg",
    title: "Personalised Product Roadmap",
    description: "The best product for your structure and goals.",
  },
  {
    icon: "../../../assets/images/svg/chart.svg",
    title: "Confident Costing",
    description:
      "Indicative repayments and tax-efficient guidance (seek independent advice).",
  },
  {
    icon: "../../../assets/images/svg/wallet.svg",
    title: "Immediate Market Access",
    description: "National fleet pricing and limited-time manufacturer offers.",
  },
  {
    icon: "../../../assets/images/svg/check-1.svg",
    title: "Quick-Start Approval Plan",
    description: "A step-by-step path to fast approval and delivery.",
  },
];

const expertReasons = [
  {
    icon: "../../../assets/images/svg/badge-check.svg",
    text: "Independent, product-agnostic advice (not tied to a single lender or brand)",
  },
  {
    icon: "../../../assets/images/svg/sale-percent.svg",
    text: "National network access with fleet pricing across major manufacturers",
  },
  {
    icon: "../../../assets/images/svg/briefcase.svg",
    text: "Decades of combined experience in leasing and business finance",
  },
  {
    icon: "../../../assets/images/svg/fire.svg",
    text: "Fast, simple process with minimal paperwork",
  },
  {
    icon: "../../../assets/images/svg/cash.svg",
    text: "Tax-savvy structuring aligned to ABN holders and growing companies",
  },
];

const includedItems = [
  { number: "1", text: "One-on-One Discovery Call" },
  { number: "2", text: "Pre-Qualification Guidance" },
  { number: "3", text: "Product Comparison" },
  { number: "4", text: "Indicative Quote" },
  { number: "5", text: "Action Plan" },
];

export const FeaturesListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-8 sm:gap-12 lg:gap-16 px-0 py-8 sm:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-[1280px] px-4 sm:px-6">
        <Card className="bg-gray-50 border-border shadow-shadow-sm">
          <CardContent className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-7">
            <div className="flex flex-col items-start justify-center gap-3 sm:gap-4 w-full">
              <h2 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-2xl sm:text-3xl lg:text-4xl tracking-[-0.40px] leading-tight sm:leading-[45px]">
                What the Free Consultation Offers
              </h2>

              <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base sm:text-lg tracking-[0] leading-6 sm:leading-7">
                At Fleet Leasing Australia, we know choosing the right product
                can be complex, multiple options, tax outcomes, and brand
                availability. That&apos;s why we offer a free, no-obligation
                consultation with our fleet and finance specialists.
              </p>
            </div>

            <div className="flex flex-col items-start gap-4 sm:gap-[18px] w-full">
              <h3 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-xl sm:text-2xl tracking-[-0.40px] leading-[28px] sm:leading-[30px]">
                In one call, you&apos;ll gain:
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full">
                {consultationFeatures.map((feature, index) => (
                  <Card
                    key={index}
                    className="bg-white border-border shadow-shadow-sm"
                  >
                    <CardContent className="flex flex-col items-start justify-center gap-4 sm:gap-6 p-4 sm:p-6">
                      <div className="flex w-12 h-12 sm:w-16 sm:h-16 items-center justify-center bg-[#fafcfe] rounded">
                        <img
                          className="w-7 h-7 sm:w-9 sm:h-9"
                          alt="Check"
                          src={feature.icon}
                        />
                      </div>

                      <div className="flex flex-col items-start gap-2 w-full">
                        <h4 className="w-full [font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-lg sm:text-xl tracking-[0] leading-5">
                          {feature.title}
                        </h4>

                        <p className="w-full font-normal text-[#4a5565] text-sm sm:text-base [font-family:'Figtree',Helvetica] tracking-[0] leading-5 sm:leading-6">
                          {feature.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full max-w-[1280px] px-4 sm:px-6">
        <Card className="bg-[#194170] border-none shadow-shadow-sm">
          <CardContent className="flex flex-col items-start justify-center gap-6 sm:gap-8 md:gap-10 p-4 sm:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 w-full">
              <h2 className="flex items-center justify-center md:justify-start [font-family:'Figtree',Helvetica] font-semibold text-white text-2xl sm:text-3xl tracking-[0] leading-7 sm:leading-8">
                Ready to Get Started?
              </h2>

              <p className="flex items-center justify-center md:justify-start [font-family:'Figtree',Helvetica] font-medium text-white text-base sm:text-lg tracking-[0] leading-5">
                Your free consultation is quick, friendly, and packed with value
                — no sales pitch, just practical advice from real fleet experts.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full">
              <Button
                variant="outline"
                className="h-auto bg-gray-50 border-border shadow-shadow-xs hover:bg-gray-100 w-full"
              >
                <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Book a Free Consultation
                </span>
                <ArrowRightIcon className="w-4 h-4 ml-1.5" />
              </Button>

              <Button
                variant="outline"
                className="h-auto bg-gray-50 border-border shadow-shadow-xs hover:bg-gray-100 w-full"
              >
                <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
                  Talk to a Fleet Specialist – 1300 FLA FLA
                </span>
                <ArrowRightIcon className="w-4 h-4 ml-1.5" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="w-full max-w-[1280px] px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16">
          <Card className="bg-gray-50 border-border shadow-shadow-sm relative overflow-hidden">
            <img
              className="absolute top-[-1309px] left-[-1603px] w-[618px] h-[625px]"
              alt="Pattern"
              src="/pattern.svg"
            />
            <CardContent className="flex flex-col items-start justify-center gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-7 relative z-10">
              <div className="flex flex-col items-start justify-center gap-3 sm:gap-4 w-full">
                <h2 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-2xl sm:text-3xl lg:text-4xl tracking-[-0.40px] leading-tight sm:leading-[45px]">
                  Why Choose Our Experts
                </h2>

                <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base sm:text-lg tracking-[0] leading-6 sm:leading-7">
                  We&apos;ve helped hundreds of Australian businesses reduce
                  fleet costs, unlock cash flow, and scale with smarter finance.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
                {expertReasons.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 sm:p-4 w-full bg-white rounded border border-solid border-[#d4e3f5]"
                  >
                    <div className="rounded flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center bg-[#fafcfe] shrink-0">
                      <img className="w-6 h-6 sm:w-7 sm:h-7" alt="Icon" src={reason.icon} />
                    </div>

                    <p className="flex-1 [font-family:'Figtree',Helvetica] font-medium text-[#0b1c31] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
                      {reason.text}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-50 border-border shadow-shadow-sm relative overflow-hidden">
            <img
              className="absolute top-[-1309px] left-[-2275px] w-[618px] h-[625px]"
              alt="Pattern"
              src="/pattern.svg"
            />
            <CardContent className="flex flex-col items-start justify-center gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-6 lg:p-7 relative z-10">
              <div className="flex flex-col items-start justify-center gap-3 sm:gap-4 w-full">
                <h2 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-2xl sm:text-3xl lg:text-4xl tracking-[-0.40px] leading-tight sm:leading-[45px]">
                  What&apos;s Included
                </h2>

                <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base sm:text-lg tracking-[0] leading-6 sm:leading-7">
                  Each session is handled by an experienced specialist who
                  understands your industry, budget, and structure.
                </p>
              </div>

              <div className="flex flex-col items-start gap-3 sm:gap-4 w-full">
                {includedItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 p-3 sm:p-4 w-full bg-white rounded border border-solid border-[#d4e3f5]"
                  >
                    <div className="rounded flex w-10 h-10 sm:w-12 sm:h-12 items-center justify-center bg-[#fafcfe] shrink-0">
                      <span className="[font-family:'Figtree',Helvetica] font-medium text-[#194170] text-lg sm:text-xl tracking-[0] leading-6">
                        {item.number}
                      </span>
                    </div>

                    <p className="flex-1 [font-family:'Figtree',Helvetica] font-medium text-[#0b1c31] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="w-full max-w-[1280px] px-4 sm:px-6">
        <Card className="bg-[#194170] border-none shadow-shadow-sm">
          <CardContent className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6">
            <div className="flex flex-col items-start gap-2 flex-1">
              <h2 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-white text-xl sm:text-2xl md:text-3xl tracking-[0] leading-7 sm:leading-8">
                Smarter Leasing. Bigger Savings. Faster Approvals.
              </h2>

              <p className="w-full flex items-center justify-center [font-family:'Figtree',Helvetica] font-medium text-white text-base sm:text-lg tracking-[0] leading-5">
                For Sole Traders, Partnerships, Companies, Non-for-profits &amp;
                Government.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
