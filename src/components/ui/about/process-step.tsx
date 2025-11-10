import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { Card, CardContent } from "../card";



const benefitCards = [
  {
    icon: "../../../assets/images/svg/cash.svg",
    title: "Independent Advice and Exclusive Savings",
    description:
      "Unbiased, product-agnostic guidance with access to fleet-level pricing and manufacturer discounts.",
  },
  {
    icon: "../../../assets/images/svg/form.svg",
    title: "Fast, Paperless Finance Approvals",
    description:
      "Streamlined digital applications through trusted Australian lenders for quick, hassle-free approvals.",
  },
  {
    icon: "../../../assets/images/svg/bell.svg",
    title: "Tailored Solutions for ABN Holders",
    description:
      "Custom tax and finance structures designed to optimise business cash flow and performance.",
  },
  {
    icon: "../../../assets/images/svg/bell.svg",
    title: "Nationwide Support and Personalised Service",
    description:
      "Expert assistance and dedicated account management available across Australia.",
  },
];

export const ProcessStepsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 px-0 py-16 bg-white">
      <Card className="w-full max-w-[1280px] bg-gray-50 rounded-xl overflow-hidden border border-solid shadow-shadow-sm">
        <CardContent className="relative flex items-center gap-12 px-6 py-7">
          <img
            className="absolute top-[-213px] left-[612px] w-[864px] h-[862px] pointer-events-none"
            alt="Pattern"
            src="/pattern.svg"
          />

          <div className="flex flex-col w-[448px] items-start justify-center gap-4 z-10">
            <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-4xl tracking-[-0.40px] leading-[45px]">
              Why Businesses Choose Fleet Leasing Australia
            </h2>

            <p className="text-[#4a5565] text-lg leading-7 [font-family:'Figtree',Helvetica] font-normal tracking-[0]">
              We don&apos;t just help you get into vehicles; we help you build
              sustainable, scalable, and cost-efficient fleets that grow with
              your business.
            </p>
          </div>

          <img
            className="w-px self-stretch z-10"
            alt="Separator"
            src="/separator.svg"
          />

          <div className="flex flex-col items-start gap-6 flex-1 z-10">
            {benefitCards.map((benefit, index) => (
              <Card
                key={index}
                className="w-full bg-white rounded overflow-hidden border border-solid shadow-shadow-sm"
              >
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="flex w-16 h-16 items-center justify-center bg-[#fafcfe] rounded flex-shrink-0">
                    <img className="w-9 h-9" alt="Check" src={benefit.icon} />
                  </div>

                  <div className="flex flex-col items-start gap-2 flex-1">
                    <h3 className="font-semibold text-[#101828] text-xl [font-family:'Figtree',Helvetica] tracking-[0] leading-5">
                      {benefit.title}
                    </h3>

                    <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base tracking-[0] leading-6">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="w-full max-w-[1280px] bg-[#194170] rounded overflow-hidden shadow-shadow-sm border-0">
        <CardContent className="flex flex-col items-start justify-center gap-10 p-6">
          <div className="flex items-start gap-6 w-full">
            <h2 className="flex-1 [font-family:'Figtree',Helvetica] font-semibold text-white text-3xl tracking-[0] leading-8">
              Ready to Simplify Your Fleet Finance?
            </h2>

            <p className="flex-1 font-medium text-white text-lg [font-family:'Figtree',Helvetica] tracking-[0] leading-5">
              Book a free consultation today and discover how we can save your
              business time, money, and unnecessary complexity.
            </p>
          </div>

          <div className="flex items-start gap-6 w-full">
            <Button
              variant="secondary"
              className="h-auto flex-1 bg-gray-50 rounded border border-solid shadow-shadow-xs px-3 py-2 gap-1.5 hover:bg-gray-100"
            >
              <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
                Book a Free Consultation
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>

            <Button
              variant="secondary"
              className="h-auto flex-1 bg-gray-50 rounded border border-solid shadow-shadow-xs px-3 py-2 gap-1.5 hover:bg-gray-100"
            >
              <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
                Talk to a Fleet Specialist – 1300 FLA FLA
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col w-full max-w-[1280px] items-start gap-8 px-0 py-8 border-t border-b border-solid">
        <p className="text-[#101828] text-sm leading-6 [font-family:'Figtree',Helvetica] font-normal tracking-[0]">
          By submitting your details, you consent to Fleet Leasing Australia
          contacting you in relation to our products and services. All
          information provided is treated confidentially and in accordance with
          our Privacy Policy. The information on this website is of a general
          nature only and does not take your personal circumstances into
          account. It should not be relied upon as financial or tax advice. We
          recommend seeking independent professional advice before proceeding
          with any leasing or finance product.
        </p>
      </div>
    </section>
  );
};
