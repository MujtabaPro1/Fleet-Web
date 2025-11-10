import React from "react";
import { FeaturesListSection } from "../../components/ui/consultation/featured-list";
import { FeaturesSection } from "../../components/ui/consultation/featured-section";
import { MainContentSection } from "../../components/ui/consultation/main-content";
import { MyPage } from "@/components/layouts/types";

const Consultation: MyPage = () => {
  return (
    <div className="flex flex-col items-center relative bg-white w-full overflow-x-hidden">
      <div className="w-full max-w-screen-2xl mx-auto">
        <FeaturesSection />
        <FeaturesListSection />
        <MainContentSection />
      </div>
    </div>
  );
};

export default Consultation;
Consultation.Layout = "Default";
