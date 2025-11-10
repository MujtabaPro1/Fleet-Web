import React from "react";
import { FeaturesListSection } from "../../components/ui/about/featured-list";
import { FeaturedSection } from "../../components/ui/about/featured-section";
import { InfoContainerSection } from "../../components/ui/about/info-container";
import { MainContentSection } from "../../components/ui/about/main-content";
import { ProcessStepsSection } from "../../components/ui/about/process-step";
import { MyPage } from "@/components/layouts/types";


const About: MyPage = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      <FeaturedSection />
      <MainContentSection />
      <FeaturesListSection />
      <InfoContainerSection />
      <ProcessStepsSection />
    </div>
  );
};

export default About;
About.Layout = "Default";

