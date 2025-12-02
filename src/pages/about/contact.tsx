import React from "react";
import { ContactUsSection } from "../../components/ui/contact/contact-us";
import { FeaturesOverviewSection } from "../../components/ui/contact/featured-overview";
import { MyPage } from "@/components/layouts/types";
import Head from "next/head";

const Contact: MyPage = () => {
  return (
    <>
    <Head>
    <title>Fleet Leasing Australia | Contact Us</title>
    </Head>
    <div className="flex flex-col items-center justify-center w-full relative bg-white">
      <div className="w-full mx-auto">
        <ContactUsSection />
        <FeaturesOverviewSection />
      </div>

    </div>
    </>
  );
};

export default Contact;
Contact.Layout = "Default";

