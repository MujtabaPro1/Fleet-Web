import React from "react";

const BannerImage = "../../../assets/images/svg/dummy-image.svg";


const featuresData = [
  {
    title: "Our Vision",
    description:
      "To be Australia's most trusted partner for commercial vehicle finance and leasing, recognised for our clarity, independence, and genuine commitment to each client's financial health.",
    image: BannerImage,
  },
  {
    title: "Our Commitment",
    description:
      "We believe that the right finance structure is just as important as the right vehicle. Our mission is to cut through lending complexity and deliver transparent, tailored solutions that strengthen your business long term. By leveraging our national dealer and lender network, we deliver maximum savings, efficiency, and fleet performance without compromise.",
    image: BannerImage,
  },
  {
    title: "Our Expertise",
    description:
      "Our leadership team brings decades of combined experience across fleet aggregation, finance, and automotive sourcing, backed by long-standing partnerships with trusted lenders and national manufacturers. We understand the challenges Australian businesses face, from balancing budgets to maintaining vehicles and we're here to make every step easier.",
    image: BannerImage,
  },
];

export const FeaturesListSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 px-0 py-16 bg-white">
      <div className="flex w-full max-w-[1280px] items-start gap-16 px-4">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center gap-7 flex-1"
          >
            <img
              className="w-full h-96 object-cover"
              alt={feature.title}
              src={feature.image}
            />

            <div className="flex flex-col items-start gap-6 w-full">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-4xl tracking-[-0.40px] leading-[45px]">
                  {feature.title}
                </h2>

                <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base tracking-[0] leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
