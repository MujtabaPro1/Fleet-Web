'use client';
import React from "react";
import Image from "next/image";
import BaloonImage from "../../../assets/images/baloon-package-flying.png";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "../button";
import { useRouter } from "next/navigation";

const sections = [
  {
    icon: "../../../assets/images/svg/code-pull-request.svg",
    title: "How It Works",
    content: (
      <>
        Your business borrows funds to buy, build, or refinance a commercial property. The loan is secured against the property, and interest is charged on the outstanding balance, typically at lower rates than unsecured loans.Loan terms are often longer and larger than standard business loans, reflecting the asset’s value and long-term nature.
      </>
    ),
  },
];

const benefitsSection = [
    {
      id: "financial-tax",
      icon: "../../../assets/images/svg/chart-mixed.svg",
      title: "Financial & Liquidity Benefits",
      content: (
        <>        
        <ul className="flex flex-col items-start p-2 list-disc">
          <li>Lower interest rates: Secured against property, often cheaper than unsecured options.</li>
          <li>Longer loan terms: Flexible repayment periods suited to property investment cycles.</li>
          <li>Asset ownership: Build equity through ownership rather than rent.</li>
          <li>Refinancing options: Consolidate or restructure existing commercial property loans.</li>
          <li>Investment potential: Acquire property for business use or rental income generation.</li>
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
          <li>Want to own their business premises instead of leasing</li>
          <li>Plan to develop or expand commercial real estate assets</li>
          <li>Seek long-term investment opportunities in property</li>
          <li>Need to refinance existing commercial mortgages for better term</li>
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
     A Commercial Property Loan enables your business to own, develop, or invest in real estate while benefiting from competitive rates, long-term repayment options, and asset-backed security.
    </>
  ),
};

export const ServicesSection = (): JSX.Element => {
  const router = useRouter();

  return (
    <section id="commercial-property-loan" className="px-0 py-24 bg-white flex flex-col w-full items-center">
      <div className="gap-16 flex max-w-[1280px] w-full items-start px-4">
        <div className="flex flex-col flex-1 items-start gap-8">
          <div className="gap-4 flex flex-col items-start w-full">
            <div className="flex flex-col gap-3 w-full items-start">
              <h2 className="flex items-start justify-start w-full font-figtree font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                Commercial Property Loan
              </h2>

              <p className="flex items-start justify-start w-full font-figtree font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                Finance for Business Premises & Property Investment
              </p>
            </div>


            <p className="text-[#101828] leading-6 w-full font-figtree font-normal text-base tracking-[0]">
              A secured term loan designed for the purchase, development, or refinancing of commercial real estate such as warehouses, offices, or retail spaces. The property itself serves as the collateral, offering long-term stability and growth potential.
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

          <div className="flex flex-col items-start gap-8 px-0 py-8 w-full border-t border-b border-gray-200">
            {sections.map((section, index) => (
              <div key={index} className="flex items-start gap-4 w-full">
                <div className="flex w-9 h-9 items-center justify-center flex-shrink-0 bg-gray-100 rounded-lg">
                  <img
                    className="w-5 h-5"
                    alt={section.title}
                    src={section.icon}
                  />
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
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 pt-0 pb-8 px-0 w-full border-b border-gray-200">
            {benefitsSection.map((section, index) => (
              <div key={index} className="flex items-start gap-4 w-full">
                <div className="flex w-9 h-9 items-center justify-center flex-shrink-0 bg-gray-100 rounded-lg">
                  <img
                    className="w-5 h-5"
                    alt={section.title}
                    src={section.icon}
                  />
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
            ))}
          </div>

          <div className="flex flex-col items-start gap-8 pt-0 pb-8 px-0 w-full border-b border-gray-200">
            <div className="flex items-start gap-4 w-full">
              <div className="flex w-9 h-9 items-center justify-center flex-shrink-0 bg-gray-100 rounded-lg">
                <img
                  className="w-5 h-5"
                  alt={keyTakeaway.title}
                  src={keyTakeaway.icon}
                />
              </div>

              <div className="flex flex-col items-start gap-4 flex-1">
                <div className="gap-3 flex flex-col items-start w-full">
                  <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                    {keyTakeaway.title}
                  </h3>

                  <div className="w-full font-figtree font-normal text-[#101828] text-base tracking-[0] leading-6">
                    {keyTakeaway.content}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center gap-2.5 flex-1">
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
