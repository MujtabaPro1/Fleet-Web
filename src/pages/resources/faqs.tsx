import React from "react";
import { FaqSection } from "../../components/ui/faqs/faq-section";
import { MyPage } from "@/components/layouts/types";
import Head from "next/head";

const Faq: MyPage = () => {
  return (
    <>
    <Head>
    <title>Fleet Leasing Australia | FAQs</title>
    </Head>
    <main className="flex flex-col w-full bg-white">
      <FaqSection />
    </main>
    </>
  );
};

export default Faq;
Faq.Layout = "Default";