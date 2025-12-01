import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FeaturesListSection } from '@/components/ui/content/featured-nested-section';
import { OverdraftBusiness } from '@/components/ui/content/overdraft-business';
import { MainContentSection } from '@/components/ui/content/main-section-business';
import { ServicesSection } from '@/components/ui/content/service-section-business';
import { InfoSection } from '@/components/ui/content/info-section-business';
import { LineCredit } from '@/components/ui/content/line-credit';
import { InvoiceFinance } from '@/components/ui/content/invoice-finance';

const BusinessFinanceProducts: MyPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | Business Finance Products</title>
      </Head>
     

     
      <div className="inline-flex flex-col items-center relative bg-white w-full">
        <FeaturesListSection/>
        <OverdraftBusiness />
        <LineCredit />
        <InvoiceFinance/>
        <MainContentSection />
        <ServicesSection />
        <InfoSection />
           <section className="flex flex-col w-full items-center px-0 py-24 bg-white">
      <div className="flex gap-16 w-full max-w-[1280px] items-start px-4 border-t border-b py-8">
          <p className="text-[#101828] leading-6 font-figtree font-normal text-base tracking-[0]">Note: Accounting treatment is dependent on specific lease terms and current AASB 16 standards. Always consult your accountant.</p>
      </div>
      </section>
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
