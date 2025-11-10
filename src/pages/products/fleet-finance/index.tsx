import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FeaturesSection } from '@/components/ui/content/featured-section';
import { MainContentSection } from '@/components/ui/content/main-section';
import { ServicesSection } from '@/components/ui/content/service-section';
import { InfoSection } from '@/components/ui/content/info-section';



const FleetFinanceProducts: MyPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | Fleet Finance Products</title>
      </Head>
     
      <div className="inline-flex flex-col items-center relative bg-white w-full">
        <FeaturesSection title="Fleet Finance Comparison" description="Find the Perfect Fit for Your Business"
        subDescription="We provide flexible fleet finance solutions designed to improvecash flow, support growth, and align with your business goals."
        />
        <MainContentSection />
        <ServicesSection />
        <InfoSection />
      </div>

    </>
  );
};

export async function getStaticProps(context: any) {
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default FleetFinanceProducts;
FleetFinanceProducts.Layout = "Default";
