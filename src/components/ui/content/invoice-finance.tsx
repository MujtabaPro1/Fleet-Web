
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
         The lender advances funds (often up to 90% of the invoice value) against your accounts receivable.Your business uses these funds to pay suppliers or cover expenses, and once your customer pays the invoice, the advance is repaid, minus an agreed fee. Fees are typically structured as a discount rate based on the invoice amount.
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
          <li>Immediate working capital: Turn outstanding invoices into instant cash.</li>
          <li>Cash flow stability: No need to wait 30–90 days for customer payments.</li>
          <li>Flexible use: Ideal for paying suppliers, covering payroll, or operating expenses.</li>
          <li>Cost-effective: Pay only a small fee based on the invoice value — no long-term debt.</li>
          <li>Scalable: The more you sell, the more working capital you can unlock.</li>
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
        Perfect for businesses that:
         <ul className="flex flex-col items-start p-2 list-disc">
          <li>Offer extended payment terms to clients</li>
          <li>Experience cash flow gaps between invoicing and payment</li>
          <li>Want to maintain smooth operations without taking on new debt</li>
          <li>Rely on large or slow-paying corporate customers</li>
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
        Invoice Finance helps your business turn sales into cash faster, improving liquidity and stability without taking on extra loans — ideal for growing businesses that want consistent cash flow.
        </>
      ),
    },
  ];
  
  export const InvoiceFinance = (): JSX.Element => {
    const router = useRouter();
    return (
      <section id="invoice-finance" className="flex flex-col w-full items-center px-0 py-24 bg-white">
        <div className="gap-16 flex max-w-[1280px] w-full items-start px-4">
          <div className="flex flex-col w-full max-w-[650px] items-start gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <h1 className="flex items-start justify-start w-full font-figtree font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                  Invoice Finance 
                </h1>
  
                <h2 className="flex items-start justify-start w-full font-figtree font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                  Unlock Cash Flow from Unpaid Invoices
                </h2>
              </div>
  
              <p className="w-full font-figtree font-normal text-base text-[#101828] leading-6 tracking-[0]">
               Lets your business access immediate cash by using unpaid customer invoices as collateral. It’s an effective way to bridge cash flow gaps and keep operations running smoothly while waiting for clients to pay.
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
           
              <Image
                className="absolute w-[100.00%] h-[100.01%] top-0 left-0"
                alt="Ballon"
                src={BaloonImage}
              />
  
          
            </div>
          </div>
        </div>
      </section>
    );
  };
  