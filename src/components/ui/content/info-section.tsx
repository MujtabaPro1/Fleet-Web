import React from "react";
import Image from "next/image";
import BaloonImage from "../../../assets/images/baloon-package-flying.png";

const sections = [
  {
    icon: "../../../assets/images/svg/code-pull-request.svg",
    title: "How It Works",
    content: (
      <>
        This structure works like a traditional{" "}
        <span className="font-bold">secured business loan</span>. The{" "}
        <span className="font-bold">Lender</span> provides funds to purchase the
        vehicle, and your{" "}
        <span className="font-bold">business owns it outright</span>. You make
        regular repayments, and at the end of the term, you may have a{" "}
        <span className="font-bold">balloon payment </span>(residual) to
        finalise the loan.
        <br />
        <br />
        You assume{" "}
        <span className="font-bold">full ownership and residual risk</span>,
        giving you complete control over the asset.
      </>
    ),
  },
];

const benefitsSections = [
  {
    icon: "../../../assets/images/svg/chart-mixed.svg",
    title: "Financial & Tax Benefits",
    content: (
      <>
        A Chattel Mortgage is recorded{" "}
        <span className="font-bold">on the balance sheet </span>as both an{" "}
        <span className="font-bold">
          asset and a loan.
          <br />
          GST
        </span>
        : Claimed <span className="font-bold">upfront</span> on the full vehicle
        purchase price (in the next BAS period).
        <br />
        <span className="font-bold">Tax deductions: </span>You can claim{" "}
        <span className="font-bold">interest on the loan</span> and{" "}
        <span className="font-bold">
          depreciation of the vehicle.
          <br />
          Cash flow advantage:
        </span>{" "}
        The <span className="font-bold">upfront GST claim</span> provides an{" "}
        <span className="font-bold">immediate cash flow boost</span>, especially
        for businesses using the{" "}
        <span className="font-bold">Cash Method for BAS.</span>
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
        Use the{" "}
        <span className="font-bold">
          Cash Method for BAS
          <br />
        </span>
        Want <span className="font-bold">immediate ownership</span> and control
        of the vehicle
        <br />
        Seek an <span className="font-bold">upfront GST refund </span>and{" "}
        <span className="font-bold">
          ongoing tax deductions
          <br />
        </span>
        Prefer to <span className="font-bold">retain full responsibility</span>{" "}
        for maintenance and resale value
      </>
    ),
  },
];

const keyTakeaway = {
  icon: "../../../assets/images/svg/award.svg",
  title: "Key Takeaway",
  content: (
    <>
      A <span className="font-bold">Chattel Mortgage</span> gives your business{" "}
      <span className="font-bold">
        ownership from day one, upfront GST benefits,
      </span>{" "}
      and <span className="font-bold">long-term asset control</span> - ideal for
      those wanting both flexibility and financial efficiency.
    </>
  ),
};

export const InfoSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center px-0 py-24 bg-white">
      <div className="flex gap-16 w-full max-w-[1280px] items-start px-4">
        <div className="flex flex-col w-full max-w-[650px] items-start gap-8">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-3 w-full">
              <h1 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                Chattel Mortgage
              </h1>

              <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                Upfront Tax Advantage &amp; Immediate Ownership Ownership
              </h2>
            </div>

            <p className="text-[#101828] leading-6 [font-family:'Figtree',Helvetica] font-normal text-base tracking-[0]">
              A <span className="font-bold">commercial loan</span> secured by
              the vehicle (the chattel). Your business takes{" "}
              <span className="font-bold">legal ownership from day one</span>,
              while the lender holds a{" "}
              <span className="font-bold">mortgage over the vehicle</span> as
              security.
            </p>
          </div>

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
                    <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 tracking-[0]">
                      {section.title}
                    </h3>

                    <p className="[font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                      {section.content}
                    </p>
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
                    <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 tracking-[0]">
                      {section.title}
                    </h3>

                    <p className="[font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                      {section.content}
                    </p>
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
                  <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 tracking-[0]">
                    {keyTakeaway.title}
                  </h3>

                  <p className="[font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                    {keyTakeaway.content}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-1">
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
