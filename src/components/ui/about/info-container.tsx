import React from "react";
import { Card, CardContent } from "../card";

const workSteps = [
  {
    title: "Pre-Approval",
    description:
      "We start with a free 15-minute discovery session to understand your goals, structure, and vehicles.",
    image: "../../../assets/images/svg/chatting.svg",
    containerWidth: "w-[181.54px]",
  },
  {
    title: "Comparison",
    description:
      "We assess multiple leasing and finance products side-by-side to identify the most strategic solutions.",
    image: "../../../assets/images/svg/employees-working-charts.svg",
    containerWidth: "w-[239.22px]",
    containerMargin: "ml-[-6.61px] mr-[-6.61px]",
  },
  {
    title: "Recommendation",
    description:  "We tailor a clear, personalise strategy that supports your cash flow and future growth.",
    image: "../../../assets/images/svg/man-clock-shopping-charts.svg",
    containerWidth: "w-[239.22px]",
    containerMargin: "ml-[-6.61px] mr-[-6.61px]",
  },
  {
    title: "Delivery",
    description:
      "We manage sourcing, paperwork, and delivery for a smooth, stress-free experience.",
    image: "../../../assets/images/svg/man-pointing-smartphone.svg",
    containerWidth: "w-[180.28px]",
  },
];

export const InfoContainerSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-center gap-16 px-0 py-16 bg-white">
      <div className="flex-col items-center gap-8 flex w-full max-w-[1280px] px-4">
        <div className="items-start gap-9 p-6 self-stretch w-full rounded-xl overflow-hidden border border-solid border-gray-100 flex flex-col relative">
          <div className="absolute top-0 left-0 w-[1024px] h-[1112px] overflow-hidden pointer-events-none">
            <img
              className="absolute w-[168.06%] h-[99.99%] top-0 left-[-33.39%]"
              alt="Vector"
              src="/vector.svg"
            />
          </div>

          <Card className="w-full border border-solid shadow-shadow-sm">
            <CardContent className="flex flex-col items-center gap-4 p-8">
              <h2 className="font-figtree font-semibold text-[#101828] text-4xl text-center tracking-[-0.40px] leading-9">
                How We Work
              </h2>
            </CardContent>
          </Card>

          <div className="flex items-start gap-6 w-full">
            {workSteps.map((step, index) => (
              <Card
                key={index}
                className="flex-1 border border-solid shadow-shadow-sm"
              >
                <CardContent className="flex flex-col items-center gap-8 p-8">
                  <div
                    className={`relative h-44 ${step.containerWidth} ${step.containerMargin || ""}`}
                  >
                    <img
                      className="w-full h-full object-cover"
                      alt={step.title}
                      src={step.image}
                      />
                  </div>

                  <div className="flex flex-col items-start gap-2 w-full">
                    <h3 className="font-figtree font-semibold text-[#101828] text-xl tracking-[0] leading-[25px]">
                      {step.title}
                    </h3>
                    <p className="font-figtree font-normal text-[#4a5565] text-base tracking-[0] leading-6">
                      {step.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
