import Head from 'next/head';
// import BannerSlider from '@/components/common/banner/banner-slider';
// import ShopByBrands from '@/components/home/shop-by-brands';
import { MyPage } from '@/components/layouts/types';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import GetAllBrands from '@/components/brands/getAllBrands';

// import LeasingComparison from '@/components/home/LeasingComparison';

const BrandsPage: MyPage = () => {
    const { t } = useTranslation("common");
    const metaTitle = t("brands.title");
    return (
        <>
            <Head>
                <title>{`Fleet Leasing Australia | ${metaTitle}`}</title>
            </Head>
            <div
                className={` -flex -min-h-screen -flex-col -items-center -justify-between`}
            >
                <GetAllBrands sectionTitle={t("brands.mainTitle")} sectionDescription={t("brands.mainDesc")} />

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
};
export default BrandsPage;
BrandsPage.Layout = "Default";
