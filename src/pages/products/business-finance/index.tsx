import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FeaturesListSection } from '@/components/ui/content/featured-nested-section';
import { MainContentSection } from '@/components/ui/content/main-section';
import { ServicesSection } from '@/components/ui/content/service-section';
import { InfoSection } from '@/components/ui/content/info-section';

const BusinessFinanceProducts: MyPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | Business Finance Products</title>
      </Head>
     

     
      <div className="inline-flex flex-col items-center relative bg-white w-full">
        <FeaturesListSection/>
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

export default BusinessFinanceProducts;
BusinessFinanceProducts.Layout = "Default";
