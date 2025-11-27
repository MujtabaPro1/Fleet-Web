import React from "react";
import { FeaturesListSection } from "../../components/ui/about/featured-list";
import { FeaturedSection } from "../../components/ui/about/featured-section";
import { InfoContainerSection } from "../../components/ui/about/info-container";
import { MainContentSection } from "../../components/ui/about/main-content";
import { ProcessStepsSection } from "../../components/ui/about/process-step";
import { MyPage } from "@/components/layouts/types";
import { useRouter } from "next/navigation";


const About: MyPage = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col w-full bg-white">
      <FeaturedSection />
      <MainContentSection />
      <FeaturesListSection />
      <InfoContainerSection />
      <ProcessStepsSection router={router} />
    </div>
  );
};

export default About;
About.Layout = "Default";

