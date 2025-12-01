import React from "react";
import { FeaturesListSection } from "../../components/ui/about/featured-list";
import { FeaturedSection } from "../../components/ui/about/featured-section";
import { InfoContainerSection } from "../../components/ui/about/info-container";
import { MainContentSection } from "../../components/ui/about/main-content";
import { ProcessStepsSection } from "../../components/ui/about/process-step";
import { MyPage } from "@/components/layouts/types";
import { useRouter } from "next/navigation";
import { Card } from "@/components/ui/card";
import { CardContent } from "@/components/ui/card";


const orderRideSvg = "/assets/images/svg/undraw_order-ride_4gaq.svg";
const confirmationSvg = "/assets/images/svg/undraw_confirmation_31jc.svg";
const orderCarSvg = "/assets/images/svg/undraw_order-a-car_x5mq.svg";
const fillFormsSvg = "/assets/images/svg/undraw_fill-forms_npwp.svg";




const processSteps = [
  {
    step: "Step 1",
    title: "Pre-Approval",
    image: confirmationSvg,
    description:
      "Check your eligibility and proposal in minutes. Perfect for ABN holders; get clarity on available finance and lease options before you commit.",
  },
  {
    step: "Step 2",
    title: "Vehicle Sourcing & Procurement",
    image: orderCarSvg,
    description:
      "We source vehicles directly from our dealer network, securing fleet discounts to maximise your savings. Our commercial partnerships ensure ABN holders get access to pricing usually reserved for large fleets.",
  },
  {
    step: "Step 3",
    title: "Finance and Leasing Application",
    image: fillFormsSvg,
    description:
      "Our finance and leasing team handles the paperwork and submits your application directly to leading lenders, saving you time and hassle.",
  },
  {
    step: "Step 4",
    title: "Settlement & Drive Away",
    image: orderRideSvg,
    description:
      "Once approved, we finalise the paperwork and arrange delivery so you can hit the road without delays. Whether it's a single vehicle or a growing fleet, we scale the settlement process to match your business needs.",
  },
];



const About: MyPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full bg-white">
      <FeaturedSection />
      <MainContentSection />
      <FeaturesListSection />
      {/* <InfoContainerSection /> */}
        <div className="flex flex-col w-full max-w-[1280px] items-start gap-10 px-4 mx-auto">
        <div className="flex flex-col w-full items-start gap-12">
        <div className="flex flex-col items-center gap-4 w-full text-center">
             <Card className="w-full border border-solid shadow-shadow-sm">
                      <CardContent className="flex flex-col items-center gap-4 p-8">
                        <h2 className="font-figtree font-semibold text-[#101828] text-4xl text-center tracking-[-0.40px] leading-9">
                     How we work
                        </h2>
                      </CardContent>
                    </Card>

          <p className="text-[#4a5565] text-lg max-w-2xl mx-auto">
            We simplify vehicle leasing for Australian businesses. Our
            streamlined four-step process eliminates complexity &amp; provides
            clear expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="border border-solid overflow-hidden h-full"
            >
              <CardContent className="flex bg-white flex-col items-center gap-6 p-6 relative h-full">
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="font-semibold text-[#4a5565] text-base text-center">
                    {step.step}
                  </div>

                  <div className="font-semibold text-[#101828] text-xl md:text-2xl text-center min-h-[64px]">
                    {step.title}
                  </div>
                </div>

                <img
                  className="h-[120px] md:h-[150px] w-auto object-contain"
                  alt={step.title}
                  src={step.image}
                />

                <p className="text-[#4a5565] text-base text-start">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        </div>
      </div>
      <ProcessStepsSection router={router} />
    </div>
  );
};

export default About;
About.Layout = "Default";

