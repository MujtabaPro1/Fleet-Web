import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DynamicContent from '@/components/common/DynamicContent';

const SearchByModels: MyPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | Search By Popular Models</title>
        <meta name="description" content="Search for fleet vehicles by popular models in Australia." />
      </Head>
      <div className="bg-white px-4 pt-[20px] lg:pt-[60px] mt-5">
        <div className="max-w-7xl px-2 mx-auto flex flex-wrap">
          <div className="w-full mb-10">
            <DynamicContent
              contentKey="search-by-model"
              className="flex flex-col items-center justify-center text-center"
              fallbackContent={
                <div className="flex flex-col items-center justify-center text-center">
              <h1 className="text-[#171717] text-[56px] leading-tight font-semibold tracking-[-0.03em] capitalize md:text-[40px] sm:text-[28px] mb-6">
                Search By Popular Models
              </h1>
              <div className="flex flex-col items-center justify-center">
                <p className="font-medium text-center text-[#333] text-[20px] leading-[1.6em] tracking-[-0.03em] max-w-[700px] mb-8">
                  Browse our selection of vehicles from Australia's most popular models.
                </p>
                <div className="bg-customBlue-100 p-10 rounded-lg w-full max-w-[700px] text-center">
                  <h2 className="text-[32px] font-semibold mb-4">Coming Soon</h2>
                  <p className="text-[18px]">
                    Our fuel search functionality is coming soon. 
                    Please check back for updates or contact our team for assistance finding vehicles from your preferred model.
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

export async function getStaticProps(context: any) {
  const { locale, params } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
      model: params.model,
    },
  };
}

// This function is required for dynamic routes with SSG
// Function to fetch car models from API
async function fetchCarModels() {
  // TODO: Replace with actual API call when available
  // Example implementation:
  // try {
  //   const response = await callMiddlewareApi({
  //     targetEndpoint: 'car-models',
  //     payload: {}
  //   });
  //   return response.success ? response.data.models : [];
  // } catch (error) {
  //   console.error('Error fetching car models:', error);
  //   return [];
  // }
  
  // For now, return a list of popular car models
  return [
    'corolla', 'camry', 'rav4', 'hilux',  // Toyota
    'ranger', 'focus', 'everest', 'mustang',  // Ford
    '3-series', 'x5', '5-series', 'x3',  // BMW
    'c-class', 'e-class', 'gla', 'gle',  // Mercedes
    'a4', 'q5', 'q7', 'a6'  // Audi
  ];
}

export async function getStaticPaths() {
  // Fetch car models dynamically
  const models = await fetchCarModels();
  
  const paths = models.map((model) => ({
    params: { model },
  }));
  
  return {
    paths,
    // fallback: true means that other routes will be generated on-demand
    // This is important as new car models may be added in the future
    fallback: true,
  };
}

export default SearchByModels;
SearchByModels.Layout = "Default";
