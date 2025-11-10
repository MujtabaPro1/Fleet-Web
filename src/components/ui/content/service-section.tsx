import React from "react";
import Image from "next/image";
import BaloonImage from "../../../assets/images/baloon-package-flying.png";

const sections = [
  {
    icon: "../../../assets/images/svg/code-pull-request.svg",
    title: "How It Works",
    content: (
      <>
        Under a Finance Lease, the Lessor owns the vehicle during the lease
        term. Your business (the Lessee) makes regular payments and has the{" "}
        <span className="font-bold">option to buy the vehicle</span> by paying
        the <span className="font-bold">residual value</span> at the end of the
        agreement.
        <br />
        You <span className="font-bold">assume the residual risk</span>, meaning
        your business is responsible for the final value at lease end.
      </>
    ),
  },
];

const benefitsSection = [
  {
    icon: "../../../assets/images/svg/chart-mixed.svg",
    title: "Financial & Tax Benefits",
    content: (
      <>
        Finance leases are <span className="font-bold">on-balance sheet</span>,
        meaning the <span className="font-bold">asset and liability </span>are
        both recorded per AASB 16.
        <br />
        <span className="font-bold">GST</span>: Claimed progressively on each
        monthly payment.
        <br />
        <span className="font-bold">Tax deductions</span>: You can claim the{" "}
        <span className="font-bold">interest component</span> of the lease and{" "}
        <span className="font-bold">vehicle depreciation</span> as deductible
        expenses.
        <br />
        <span className="font-bold">Payments</span>: Lower regular repayments
        help maintain cash flow while preserving long-term ownership
        flexibility.
      </>
    ),
  },
  {
    icon: "../../../assets/images/svg/tools.svg",
    title: "Maintenance & Management",
    content: (
      <>
        Your business (the <span className="font-bold">Lessee</span>) manages
        all{" "}
        <span className="font-bold">
          maintenance, registration, and running costs
        </span>
        , giving you full control over the asset&apos;s condition and
        performance.
      </>
    ),
  },
  {
    icon: "../../../assets/images/svg/users.svg",
    title: "Who It's Best For",
    content: (
      <>
        Ideal for businesses that:
        <br />
        Want{" "}
        <span className="font-bold">
          lower monthly payments
          <br />
        </span>
        Prefer <span className="font-bold">flexibility</span> with the{" "}
        <span className="font-bold">option to own</span> the asset later
        <br />
        Are comfortable <span className="font-bold">managing maintenance</span>{" "}
        and{" "}
        <span className="font-bold">
          residual risk
          <br />
        </span>
        Want to <span className="font-bold">build equity</span> in their
        business assets over time
      </>
    ),
  },
];

const keyTakeaway = {
  icon: "../../../assets/images/svg/award.svg",
  title: "Key Takeaway",
  content: (
    <>
      A <span className="font-bold">Finance Lease</span> combines{" "}
      <span className="font-bold">
        lower payments, ownership potential, and tax advantages
      </span>{" "}
      - perfect for businesses that want flexibility today and ownership
      tomorrow.
    </>
  ),
};

export const ServicesSection = (): JSX.Element => {
  return (
    <section className="px-0 py-24 bg-gray-50 flex flex-col w-full items-center">
      <div className="gap-16 flex max-w-[1280px] w-full items-start px-4">
        <div className="flex flex-col flex-1 items-start gap-8">
          <div className="gap-4 flex flex-col items-start w-full">
            <div className="flex flex-col gap-3 w-full items-start">
              <h2 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                Finance Lease
              </h2>

              <p className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                Flexibility with an Option to Own
              </p>
            </div>

            <p className="text-[#101828] leading-6 w-full [font-family:'Figtree',Helvetica] font-normal text-base tracking-[0]">
              A rental-style financing method with a{" "}
              <span className="font-bold">mandatory residual value</span> set
              within <span className="font-bold">ATO guidelines</span>. This
              structure keeps your monthly payments lower while giving you the{" "}
              <span className="font-bold">option to purchase</span> the vehicle
              at the end of the term.
            </p>
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
                    <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                      {section.title}
                    </h3>

                    <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                      {section.content}
                    </p>
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
                    <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                      {section.title}
                    </h3>

                    <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                      {section.content}
                    </p>
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
                  <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                    {keyTakeaway.title}
                  </h3>

                  <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                    {keyTakeaway.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-2.5 flex-1">
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
