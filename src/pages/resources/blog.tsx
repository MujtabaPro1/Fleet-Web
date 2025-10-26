import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import DynamicContent from '@/components/common/DynamicContent';

const Blog: MyPage = () => {
  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | Blog</title>
        <meta name="description" content="Read the latest articles, news, and insights about fleet management and vehicle leasing in Australia." />
      </Head>
      <div className="bg-white px-4 pt-[20px] lg:pt-[60px] mt-5">
        <div className="max-w-7xl px-2 mx-auto flex flex-wrap">
          <div className="w-full mb-10">
          
            <DynamicContent
              contentKey="blog"
              className="flex flex-col items-center justify-center text-center"
              fallbackContent={
                <div className="flex flex-col items-center justify-center text-center">
                <h1 className="text-[#171717] text-[56px] leading-tight font-semibold tracking-[-0.03em] capitalize md:text-[40px] sm:text-[28px] mb-6">
                  Blog
                </h1>
                <div className="flex flex-col items-center justify-center">
                  <p className="font-medium text-center text-[#333] text-[20px] leading-[1.6em] tracking-[-0.03em] max-w-[700px] mb-8">
                    Stay updated with the latest news, trends, and insights in fleet management and vehicle leasing.
                  </p>
                  <div className="bg-customBlue-100 p-10 rounded-lg w-full max-w-[700px] text-center">
                    <h2 className="text-[32px] font-semibold mb-4">Coming Soon</h2>
                    <p className="text-[18px]">
                      We're currently developing our blog. 
                      Please check back soon for articles, news, and industry insights.
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
  const { locale } = context;
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}

export default Blog;
Blog.Layout = "Default";
