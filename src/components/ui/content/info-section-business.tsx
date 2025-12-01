'use client';
import React from "react";
import Image from "next/image";
import BaloonImage from "../../../assets/images/baloon-package-flying.png";
import { useRouter } from "next/navigation";
import { Button } from "../button";
import { ArrowRightIcon } from "lucide-react";

const sections = [
  {
    icon: "../../../assets/images/svg/code-pull-request.svg",
    title: "How It Works",
    content: (
      <>
        This loan functions like a standard residential mortgage, but with customized underwriting for self-employed applicants.<br/>
        Instead of relying solely on PAYG payslips, lenders assess your income using BAS statements, bank statements, accountant declarations, or other verified financial records.<br/>
        Interest is charged on the outstanding balance at either fixed or variable rates, depending on your chosen structure.
      </>
    ),
  },
];

const benefitsSections = [
  {
    icon: "../../../assets/images/svg/chart-mixed.svg",
    title: "Financial & Liquidity Benefits",
    content: (
      <>
        <ul className="flex flex-col items-start p-2 list-disc">
          <li>Flexible documentation: Qualify using business or alternative income verification.</li>
          <li>Property ownership: Finance a primary residence or investment property.</li>
          <li>Choice of rates: Access fixed or variable interest options.</li>
          <li>Equity growth: Build long-term wealth through property ownership.</li>
          <li>Tailored approval: Designed for self-employed borrowers with irregular income streams.</li>
        </ul>
      </>
    ),
  },
  {
    icon: "../../../assets/images/svg/users.svg",
    title: "Who It's Best For",
    content: (
      <>
        Ideal for businesses that:
        <ul className="flex flex-col items-start p-2 list-disc">
          <li>Small business owners, contractors, or freelancers with non-traditional income</li>
          <li>Individuals who can’t provide PAYG payslips but have verified business financials</li>
          <li>Those looking to buy, build, or renovate residential or investment property</li>
          <li>Borrowers seeking flexibility in documentation and repayment structures</li>
        </ul>
      </>
    ),
  },
];

const keyTakeaway = {
  icon: "../../../assets/images/svg/award.svg",
  title: "Key Takeaway",
  content: (
    <>
      A Self-Employed Residential Loan offers flexible documentation, competitive interest options, and tailored approval criteria, making property ownership more accessible for self-employed Australians.
    </>
  ),
};

export const InfoSection = (): JSX.Element => {
  const router = useRouter();
  return (
    <section id="self-employed-residential-loan" className="flex flex-col w-full items-center px-0 py-24 bg-gray-50">
      <div className="flex gap-16 w-full max-w-[1280px] items-start px-4">
        <div className="flex flex-col w-full max-w-[650px] items-start gap-8">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-3 w-full">
              <h1 className="font-figtree font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                Self-Employed Residential Loan
              </h1>

              <h2 className="font-figtree font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                Home Finance Designed for Self-Employed Professionals
              </h2>
            </div>

            <p className="text-[#101828] leading-6 font-figtree font-normal text-base tracking-[0]">
            A specialized home loan tailored for business owners, contractors, and freelancers who may not have traditional PAYG income documentation. It allows you to buy, build, or renovate a home or investment property with flexible income verification options.
            </p>
            
          </div>


         <Button
            onClick={() => {
              router.push("/services/consultation");
            }}
            className="inline-flex h-auto items-center justify-center gap-1.5 px-3 py-2 bg-[#194170] rounded shadow-shadow-xs hover:bg-[#194170]/90">
              <span className="font-figtree font-medium text-white text-sm tracking-[0] leading-5">
                Free Consultation
              </span>
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </Button>

          <div className="flex flex-col items-start gap-8 px-0 py-8 w-full border-t border-b border-border">
            {sections.map((section, index) => (
              <div key={index} className="flex items-start gap-4 w-full">
                <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                  <img
                    className="w-5 h-5"
                    alt={section.title}
                    src={section.icon}
                  />
                </div>

                <div className="flex flex-col items-start gap-4 flex-1">
                  <div className="flex flex-col gap-3 w-full">
                    <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-5 tracking-[0]">
                      {section.title}
                    </h3>

                    <div className="font-figtree font-normal text-[#101828] text-base tracking-[0] leading-6">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 pt-0 pb-8 px-0 w-full border-b border-border">
            {benefitsSections.map((section, index) => (
              <div key={index} className="flex items-start gap-4 w-full">
                <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                  <img
                    className="w-5 h-5"
                    alt={section.title}
                    src={section.icon}
                  />
                </div>

                <div className="flex flex-col items-start gap-4 flex-1">
                  <div className="flex flex-col gap-3 w-full">
                    <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-5 tracking-[0]">
                      {section.title}
                    </h3>

                    <div className="font-figtree font-normal text-[#101828] text-base tracking-[0] leading-6">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 pt-0 pb-8 px-0 w-full border-b border-border">
            <div className="flex items-start gap-4 w-full">
              <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                <img
                  className="w-5 h-5"
                  alt={keyTakeaway.title}
                  src={keyTakeaway.icon}
                />
              </div>

              <div className="flex flex-col items-start gap-4 flex-1">
                <div className="flex flex-col gap-3 w-full">
                  <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-5 tracking-[0]">
                    {keyTakeaway.title}
                  </h3>

                  <div className="font-figtree font-normal text-[#101828] text-base tracking-[0] leading-6">
                    {keyTakeaway.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center flex-1">
          <div className="relative w-full max-w-[520px] aspect-[520/672]">
      

            <Image
              className="absolute w-full h-full top-0 left-0"
              alt="Ballon"
              src={BaloonImage}
            />

        
          </div>
        </div>
      </div>
    </section>
  );
};
