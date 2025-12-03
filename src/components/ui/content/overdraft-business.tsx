
'use client';
import React from "react";
import Image from "next/image";
import BaloonImage from "../../../assets/images/baloon-package-flying.png";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../button";
import { useRouter } from "next/navigation";


  
  
  const contentSections = [
    {
      id: "how-it-works",
      icon: "../../../assets/images/svg/code-pull-request.svg",
      title: "How It Works",
      content: (
        <>
         The overdraft provides a credit limit that your business can draw on whenever needed. You only pay interest on the amount your account is overdrawn, and repayments happen automatically as funds are deposited back into the account. This makes it a flexible and cost-effective solution for managing short-term funding gaps.
        </>
      ),
      hasBorder: true,
    },
  ];
  
  const financialSections = [
    {
      id: "financial-tax",
      icon: "../../../assets/images/svg/chart-mixed.svg",
      title: "Financial & Liquidity Benefits",
      content: (
        <>
        <ul className="flex flex-col items-start p-2 list-disc">
          <li>Interest efficiency: Pay interest only on the amount used, not the full limit.</li>
          <li>Instant access: Funds are immediately available through your existing business account.</li>
          <li>Automatic repayments: As client payments or income are deposited, the overdraft reduces automatically.</li>
          <li>Liquidity support: Acts as a cash flow safety net for unexpected expenses or timing mismatches.</li>
        </ul>
        </>
      ),
    },
    {
      id: "who-its-for",
      icon: "../../../assets/images/svg/users.svg",
      title: "Who It's Best For",
      content: (
        <>
         Ideal for businesses that:
         <ul className="flex flex-col items-start p-2 list-disc">
          <li>Experience seasonal or irregular cash flow</li>
          <li>Need a safety buffer for unexpected bills or payroll gaps</li>
          <li>Want fast, revolving access to working capital</li>
          <li>Prefer interest-only-on-use flexibility instead of fixed repayments</li>
        </ul>
        </>
      ),
    },
  ];
  
  const keyTakeawaySections = [
    {
      id: "key-takeaway",
      icon: "../../../assets/images/svg/award.svg",
      title: "Key Takeaway",
      content: (
        <>
        A Business Overdraft offers on-demand access to cash, interest-only flexibility, and automatic repayment, making it a smart, low-maintenance tool for maintaining smooth daily operations.
        </>
      ),
    },
  ];
  
  export const OverdraftBusiness = (): JSX.Element => {
    const router = useRouter();
    return (
      <section id="overdraft-business"  className="flex flex-col w-full items-center px-0  pt-10 pb-10 bg-white">
        <div className="gap-16 flex max-w-[1280px] w-full items-start px-4">
          <div className="flex flex-col w-full max-w-[650px] items-start gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <h1 className="flex items-start justify-start w-full font-figtree font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                  Business Overdraft
                </h1>
  
                <h2 className="flex items-start justify-start w-full font-figtree font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                  Flexible Cash Flow Buffer for Short-Term Needs
                </h2>
              </div>
  
              <p className="w-full font-figtree font-normal text-base text-[#101828] leading-6 tracking-[0]">
            A revolving line of credit linked directly to your business transaction account. It gives you immediate access to funds up to a pre-approved limit - perfect for managing day-to-day cash flow fluctuations.
              </p>

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


            </div>
  
            <div className="flex flex-col items-start gap-8 px-0 py-8 w-full border-t border-b border-border">
              {contentSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div key={section.id} className="flex items-start gap-4 w-full">
                    <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                      <img src={IconComponent} alt={section.title} className="w-5 h-5 text-gray-600" />
                    </div>
  
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <div className="gap-3 flex flex-col items-start w-full">
                        <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                          {section.title}
                        </h3>
  
                        <div className="w-full font-figtree font-normal text-[#101828] text-base tracking-[0] leading-6">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
  
            <div className="flex flex-col items-start gap-8 pt-0 pb-8 px-0 w-full border-b border-border">
              {financialSections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div key={section.id} className="flex items-start gap-4 w-full">
                    <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                      <img src={IconComponent} alt={section.title} className="w-5 h-5 text-gray-600" />
                    </div>
  
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <div className="gap-3 flex flex-col items-start w-full">
                        <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                          {section.title}
                        </h3>
  
                        <div className="w-full font-figtree font-normal text-[#101828] text-base tracking-[0] leading-6">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
  
            <div className="flex flex-col items-start gap-8 pt-0 pb-8 px-0 w-full border-b border-border">
              {keyTakeawaySections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <div key={section.id} className="flex items-start gap-4 w-full">
                    <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded-lg flex-shrink-0">
                      <img src={IconComponent} alt={section.title} className="w-5 h-5 text-gray-600" />
                    </div>
  
                    <div className="flex flex-col items-start gap-4 flex-1">
                      <div className="gap-3 flex flex-col items-start w-full">
                        <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                          {section.title}
                        </h3>
  
                        <div className="w-full font-figtree font-normal text-[#101828] text-base tracking-[0] leading-6">
                          {section.content}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
  
          <div className="hidden lg:flex items-center justify-center gap-2.5 flex-1">
            <div className="relative w-full max-w-[520px] h-[672px]">
           
              {/* <Image
                className="absolute w-[100.00%] h-[100.01%] top-0 left-0"
                alt="Ballon"
                src={BaloonImage}
              />
   */}
          
            </div>
          </div>b
        </div>
      </section>
    );
  };
  