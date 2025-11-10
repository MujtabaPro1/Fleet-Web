
  import React from "react";
  import Image from "next/image";

  import BaloonImage from "../../../assets/images/baloon-package-flying.png";


  
  
  const contentSections = [
    {
      id: "how-it-works",
      icon: "../../../assets/images/svg/code-pull-request.svg",
      title: "How It Works",
      content: (
        <>
          A <span className="font-bold">fixed-term, fixed-cost rental</span>{" "}
          arrangement. The{" "}
          <span className="font-bold">Lessor owns the vehicle</span>, and you
          simply rent it for the agreed term. At the end of the lease, you{" "}
          <span className="font-bold">hand the vehicle back</span> - the{" "}
          <span className="font-bold">
            Lessor takes on the residual value risk
          </span>
          , so you don&apos;t have to.
        </>
      ),
      hasBorder: true,
    },
  ];
  
  const financialSections = [
    {
      id: "financial-tax",
      icon: "../../../assets/images/svg/chart-mixed.svg",
      title: "Financial & Tax Benefits",
      content: (
        <>
          Operating leases are{" "}
          <span className="font-bold">often off-balance sheet</span>, offering{" "}
          <span className="font-bold">low liability impact</span> under certain
          AASB 16 conditions.
          <br />
          <span className="font-bold">Lease payments</span>: Generally{" "}
          <span className="font-bold">100% tax-deductible</span> as an operating
          expense.
          <br />
          <span className="font-bold">GST</span>: Claimed progressively on each
          monthly payment.
          <br />
          <span className="font-bold">Accounting</span>: Simplifies reporting and
          budgeting with predictable monthly costs.
        </>
      ),
    },
    {
      id: "maintenance",
      icon: "../../../assets/images/svg/tools.svg",
      title: "Maintenance & Management",
      content: (
        <>
          Choose a <span className="font-bold">Full-Service Lease</span> and let
          the Lessor handle everything — from{" "}
          <span className="font-bold">
            registration, servicing, and tyres to fuel management
          </span>
          . This keeps your business running smoothly without the admin burden.
        </>
      ),
    },
    {
      id: "who-its-for",
      icon: "../../../assets/images/svg/users.svg",
      title: "Who It's Best For",
      content: (
        <>
          Perfect for businesses that want to:
          <br />
          Maintain <span className="font-bold">cash flow flexibility</span>
          <br />
          Enjoy{" "}
          <span className="font-bold">predictable, fixed monthly costs</span>
          <br />
          Keep{" "}
          <span className="font-bold">debt and assets off the balance sheet</span>
          <br />
          <span className="font-bold">Turn over fleets frequently</span> without
          worrying about resale value
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
          An <span className="font-bold">Operating Lease</span> gives you{" "}
          <span className="font-bold">
            cost control, flexibility, and peace of mind
          </span>{" "}
          - all while keeping your vehicles up-to-date and your balance sheet
          light.
        </>
      ),
    },
  ];
  
  export const MainContentSection = (): JSX.Element => {
    return (
      <section className="flex flex-col w-full items-center px-0 py-24 bg-white">
        <div className="justify-end gap-16 flex w-full max-w-[1280px] items-start">
          <div className="flex flex-col w-full max-w-[650px] items-start gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <h1 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                  Operating Lease
                </h1>
  
                <h2 className="flex items-center justify-center w-full [font-family:'Figtree',Helvetica] font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                  Minimal Risk. Fixed Budgeting.
                </h2>
              </div>
  
              <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-base text-[#101828] leading-6 tracking-[0]">
                A simple rental agreement where the{" "}
                <span className="font-bold">Lessor retains ownership.</span> You
                pay a <span className="font-bold">fixed monthly fee,</span> which
                can include <span className="font-bold">full-service costs</span>{" "}
                (maintenance, registration, fuel, tyres, etc.), offering
                predictable budgeting and minimal risk.
              </p>
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
                        <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                          {section.title}
                        </h3>
  
                        <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                          {section.content}
                        </p>
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
                        <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                          {section.title}
                        </h3>
  
                        <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                          {section.content}
                        </p>
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
                        <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-xl leading-5 w-full tracking-[0]">
                          {section.title}
                        </h3>
  
                        <p className="w-full [font-family:'Figtree',Helvetica] font-normal text-[#101828] text-base tracking-[0] leading-6">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
  
          <div className="flex items-center justify-center gap-2.5 flex-1">
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
  