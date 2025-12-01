
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
         The lender advances funds to pay your local or overseas suppliers for inventory or goods. Once your customer pays your business, the advance is repaid, along with any interest charged on the funded amount. This structure allows you to bridge the funding gap between buying and selling - ensuring a steady flow of goods and capital.
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
          <li>End-to-end trade support: Finance the full cycle of buying, shipping, and selling goods.</li>
          <li>Improved cash flow: Keep operations moving without tying up working capital.</li>
          <li>Interest efficiency: Pay interest only on the amount advanced and for the duration used.</li>
          <li>Inventory control: Maintain stock availability and meet demand without financial strain.</li>
          <li>Risk management: Helps mitigate inventory risk and foreign exchange exposure in cross-border trade.</li>
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
          <li>Import or export goods and need supplier payment flexibility</li>
          <li>Experience longer trade cycles between purchase and customer payment</li>
          <li>Want to secure stock without depleting operating funds</li>
          <li>Face currency or timing risks in international transactions</li>
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
        Trade Finance provides targeted short-term funding for global or domestic trade - helping you manage supplier payments, inventory flow, and currency risk while protecting your core working capital.
        </>
      ),
    },
  ];
  
  export const MainContentSection = (): JSX.Element => {
    return (
      <section id="trade-finance" className="flex flex-col w-full items-center px-0  pt-10 pb-10 bg-gray-50">
        <div className="gap-16 flex max-w-[1280px] w-full items-start px-4">
          <div className="flex flex-col w-full max-w-[650px] items-start gap-8">
            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-3 w-full">
                <h1 className="flex items-start justify-start w-full font-figtree font-semibold text-[#194170] text-4xl tracking-[-0.40px] leading-9">
                  Trade Finance
                </h1>
  
                <h2 className="flex items-start justify-start w-full font-figtree font-semibold text-[#6a7282] text-2xl tracking-[-0.40px] leading-6">
                  Bridge the Gap in Domestic & International Trade
                </h2>
              </div>
  
              <p className="w-full font-figtree font-normal text-base text-[#101828] leading-6 tracking-[0]">
                A short-term working capital to help businesses pay suppliers upfront for goods while waiting for customer payments. It supports the full trade cycle - from purchasing and shipping to selling - without draining your cash reserves.
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
  