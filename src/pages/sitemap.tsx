import Head from 'next/head';
import Link from 'next/link';
import { MyPage } from '@/components/layouts/types';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Sitemap: MyPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | Sitemap</title>
        <meta name="description" content="Complete sitemap of Fleet Leasing Australia website." />
      </Head>
      <div className="bg-white px-4 pt-[20px] lg:pt-[60px] mt-5 pb-20">
        <div className="max-w-7xl px-2 mx-auto">
          <h1 className="text-[#171717] text-[56px] leading-tight font-semibold tracking-[-0.03em] capitalize md:text-[40px] sm:text-[28px] mb-10">
            Sitemap
          </h1>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-customBlue-500">Vehicle Search</h2>
              <ul className="space-y-2">
                <li><Link href="/vehicles/search" className="hover:text-customBlue-500">Find Your Fleet Vehicle</Link></li>
                <li className="ml-4 mt-2">
                  <h3 className="font-medium">Search By Brand</h3>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/vehicles/brand/toyota" className="hover:text-customBlue-500">Toyota</Link></li>
                    <li><Link href="/vehicles/brand/ford" className="hover:text-customBlue-500">Ford</Link></li>
                    <li><Link href="/vehicles/brand/bmw" className="hover:text-customBlue-500">BMW</Link></li>
                    <li><Link href="/vehicles/brand/mercedes" className="hover:text-customBlue-500">Mercedes</Link></li>
                    <li><Link href="/vehicles/brand/audi" className="hover:text-customBlue-500">Audi</Link></li>
                  </ul>
                </li>
                <li className="ml-4 mt-2">
                  <h3 className="font-medium">Search By Fuel Type</h3>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/vehicles/fuel/petrol" className="hover:text-customBlue-500">Petrol</Link></li>
                    <li><Link href="/vehicles/fuel/diesel" className="hover:text-customBlue-500">Diesel</Link></li>
                    <li><Link href="/vehicles/fuel/hybrid" className="hover:text-customBlue-500">Hybrid</Link></li>
                    <li><Link href="/vehicles/fuel/electric" className="hover:text-customBlue-500">Electric</Link></li>
                  </ul>
                </li>
                <li className="ml-4 mt-2">
                  <h3 className="font-medium">Search By Body Type</h3>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/vehicles/body/sedan" className="hover:text-customBlue-500">Sedan</Link></li>
                    <li><Link href="/vehicles/body/suv" className="hover:text-customBlue-500">SUV</Link></li>
                    <li><Link href="/vehicles/body/hatchback" className="hover:text-customBlue-500">Hatchback</Link></li>
                    <li><Link href="/vehicles/body/ute" className="hover:text-customBlue-500">Ute</Link></li>
                  </ul>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-customBlue-500">Deals</h2>
              <ul className="space-y-2">
                <li><Link href="/deals" className="hover:text-customBlue-500">Explore Deals</Link></li>
                <li><Link href="/deals/limited-time" className="hover:text-customBlue-500">Limited-Time Deals</Link></li>
                <li><Link href="/deals/popular-models" className="hover:text-customBlue-500">Popular Models</Link></li>
                <li><Link href="/current-offers" className="hover:text-customBlue-500">Current Offers</Link></li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4 text-customBlue-500">Products & Services</h2>
              <ul className="space-y-2">
                <li className="mt-2">
                  <h3 className="font-medium">Fleet Leasing Products</h3>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/products/fleet-leasing" className="hover:text-customBlue-500">Overview</Link></li>
                    <li><Link href="/products/fleet-leasing/novated-lease" className="hover:text-customBlue-500">Novated Lease</Link></li>
                    <li><Link href="/products/fleet-leasing/finance-lease" className="hover:text-customBlue-500">Finance Lease</Link></li>
                    <li><Link href="/products/fleet-leasing/operating-lease" className="hover:text-customBlue-500">Operating Lease</Link></li>
                  </ul>
                </li>
                <li className="mt-2">
                  <h3 className="font-medium">Fleet Finance Products</h3>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/products/fleet-finance" className="hover:text-customBlue-500">Overview</Link></li>
                    <li><Link href="/products/fleet-finance/chattel-mortgage" className="hover:text-customBlue-500">Chattel Mortgage</Link></li>
                    <li><Link href="/products/fleet-finance/rent-to-own" className="hover:text-customBlue-500">Rent to Own</Link></li>
                  </ul>
                </li>
                <li className="mt-2">
                  <h3 className="font-medium">Fleet Services</h3>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/services" className="hover:text-customBlue-500">Overview</Link></li>
                    <li><Link href="/services/procurement" className="hover:text-customBlue-500">Procurement & Sourcing</Link></li>
                    <li><Link href="/services/maintenance" className="hover:text-customBlue-500">Maintenance & Servicing</Link></li>
                    <li><Link href="/services/fuel-cards" className="hover:text-customBlue-500">Fuel Cards & Insurance</Link></li>
                    <li><Link href="/services/consultation" className="hover:text-customBlue-500">Fleet Consultation</Link></li>
                  </ul>
                </li>
                <li className="mt-2">
                  <h3 className="font-medium">Business Finance Products</h3>
                  <ul className="ml-4 mt-1 space-y-1">
                    <li><Link href="/products/business-finance" className="hover:text-customBlue-500">Overview</Link></li>
                    <li><Link href="/products/business-finance/commercial-term-loan" className="hover:text-customBlue-500">Commercial Term Loan</Link></li>
                    <li><Link href="/products/business-finance/line-of-credit" className="hover:text-customBlue-500">Line of Credit</Link></li>
                    <li><Link href="/products/business-finance/working-capital" className="hover:text-customBlue-500">Working Capital</Link></li>
                    <li><Link href="/products/business-finance/invoice-financing" className="hover:text-customBlue-500">Invoice Financing</Link></li>
                    <li><Link href="/products/business-finance/overdraft-facility" className="hover:text-customBlue-500">Overdraft Facility</Link></li>
                  </ul>
                </li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-customBlue-500">About Us</h2>
              <ul className="space-y-2">
                <li><Link href="/about" className="hover:text-customBlue-500">About Us</Link></li>
                <li><Link href="/about/our-story" className="hover:text-customBlue-500">Our Story</Link></li>
                <li><Link href="/about/team" className="hover:text-customBlue-500">Team</Link></li>
                <li><Link href="/about/contact" className="hover:text-customBlue-500">Contact Us</Link></li>
              </ul>

              <h2 className="text-2xl font-semibold mb-4 mt-8 text-customBlue-500">Resources</h2>
              <ul className="space-y-2">
                <li><Link href="/resources" className="hover:text-customBlue-500">Resources & Insights</Link></li>
                <li><Link href="/resources/blog" className="hover:text-customBlue-500">Blog</Link></li>
                <li><Link href="/resources/guides" className="hover:text-customBlue-500">Guides</Link></li>
                <li><Link href="/resources/faqs" className="hover:text-customBlue-500">FAQs</Link></li>
              </ul>
            </div>
          </div>
        </div>
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

export default Sitemap;
Sitemap.Layout = "Default";
