import React from "react";
import { FaqSection } from "../../components/ui/faqs/faq-section";
import { MyPage } from "@/components/layouts/types";

const Faq: MyPage = () => {
  return (
    <main className="flex flex-col w-full bg-white">
      <FaqSection />
    </main>
  );
};

export default Faq;
Faq.Layout = "Default";