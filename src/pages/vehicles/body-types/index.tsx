import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import DynamicContent from '@/components/common/DynamicContent';

const SearchByBodyTypes: MyPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | Search By Body Types</title>
        <meta name="description" content="Search for fleet vehicles by body types in Australia." />
      </Head>
      <div className="bg-white px-4 pt-[20px] lg:pt-[60px] mt-5">
        <div className="max-w-7xl px-2 mx-auto flex flex-wrap">
          <div className="w-full mb-10">
            <DynamicContent
              contentKey="search-by-body-types"
              className="flex flex-col items-center justify-center text-center"
              fallbackContent={
                <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[#171717] text-[56px] leading-tight font-semibold tracking-[-0.03em] capitalize md:text-[40px] sm:text-[28px] mb-6">
                Search By Body Types
              </h1>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-center text-[#333] text-[20px] leading-[1.6em] tracking-[-0.03em] max-w-[700px] mb-8">
                  Browse our selection of vehicles by body type to find the perfect fit for your business needs.
                </p>
                <div className="bg-customBlue-100 p-10 rounded-lg w-full max-w-[700px] text-center">
                  <h2 className="text-[32px] font-semibold mb-4">Coming Soon</h2>
                  <p className="text-[18px]">
                    Our body type search functionality is coming soon. 
                    Please check back for updates or contact our team for assistance finding vehicles with your preferred body type.
                  </p>
                </div>
              </div>
                </div>
              }
            />
          </div>
        </div>
      </div>
    </>
  );
};


export default SearchByBodyTypes;
SearchByBodyTypes.Layout = "Default";
