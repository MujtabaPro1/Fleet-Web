import { MyPage } from '@/components/layouts/types';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ProductImageSlider from '@/components/product-detail/product-image-slider';
import ProductDetailRight from '@/components/product-detail/product-detail-right';
import BrowseInventoryByBusiness from '@/components/home/BrowseInventoryByBusiness';
import SeoMeta from '@/components/common/seo/SeoMeta';

import styles from '@/styles/productDetail/productDetail.module.scss';
import { callMiddlewareApi } from '@/components/utils/api';

type Variation = {
    variation_id: number;
    trim_name?: string;
    transmission?: string;
    fuel_type?: string;
    engine_description?: string;
    power_kw?: number;
    torque_nm?: number;
    fuel_efficiency?: number;
    wheels_driven?: string;
    body_shape?: string;
    seats?: string;
    doors?: number;
    price?: string;
    old_price?: string;
    generalInfo: {
        label: string;
        values: string[];
    }[];
};

type VehicleData = {
    vehicle_id: number;
    slug: string;
    title: string;
    brand: string;
    categoryName: string;
    featured_image?: string;
    gallery: { src: string }[];
    safetyInfo: {
        label: string;
        values: string[];
    }[];
    variations: Variation[];
    primaryPrice: {
        price?: string;
        old_price?: string;
    };
};

const SkeletonBlock = ({ height = 'h-6', width = 'w-full' }: { height?: string; width?: string }) => (
    <div className={`bg-gray-200 animate-pulse rounded ${height} ${width}`}></div>
);
const BreadcrumbSkeleton = () => (
    <div className="flex items-center gap-2 animate-pulse mb-3">
        {[...Array(3)].map((_, i) => (
            <React.Fragment key={i}>
                <div className="h-4 w-20 bg-gray-200 rounded" />
                {i < 2 && <div className="w-4 h-4 bg-gray-300 " />}
            </React.Fragment>
        ))}
    </div>
);

const ProductImageSliderSkeleton = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-pulse">
        {/* Left: big image */}
        <div className="md:col-span-2">
            <div className="aspect-video bg-gray-200 rounded-xl w-full" />
        </div>

        {/* Right: stacked images */}
        <div className="flex flex-col gap-4">
            <div className="aspect-video bg-gray-200 rounded-xl w-full" />
            <div className="aspect-video bg-gray-200 rounded-xl w-full" />
        </div>
    </div>
);

const CarDetail: MyPage = () => {
    const router = useRouter();
    const { carID } = router.query;

    const [isLoading, setIsLoading] = useState(true);
    const [vehicle, setVehicle] = useState<VehicleData | null>(null);
    const [breadcrumbItems, setBreadcrumbItems] = useState<{ label: string; href: string }[]>([]);

    useEffect(() => {
        if (!carID) return;

        async function fetchVehicle() {
            const resp = await callMiddlewareApi({
                targetEndpoint: 'vehicles/getVehicleNew',
                payload: { slug: carID },
            });

            const json = await resp.data;
            if (json.success) {
                setVehicle(json.data);

                const crumbs = [
                    { label: 'Home', href: '/' },
                    { label: 'Inventory', href: '/inventory' },
                    { label: json.data.brand, href: `/inventory?brand=${json.data.brand}` },
                    { label: json.data.title, href: `/vehicles/${json.data.slug}` },
                ];
                setBreadcrumbItems(crumbs);
            }

            setIsLoading(false);
        }

        fetchVehicle();
    }, [carID]);

    return (
        <>
            {vehicle && (
                <SeoMeta
                    title={`${vehicle.title} | Fleet Leasing Australia`}
                    description={`Explore leasing options for the ${vehicle.title}, a premium ${vehicle.categoryName} from ${vehicle.brand}.`}
                    image={vehicle.featured_image}
                    slug={vehicle.slug}
                />
            )}

            <div className='mt-[30px]'>
                <div className="container ">
                    {/* Breadcrumbs */}
                    {isLoading ? (

                        <BreadcrumbSkeleton />


                    ) : (
                        <nav aria-label="breadcrumb">
                            <ol className="flex flex-wrap items-center breadCrumbNew">
                                {breadcrumbItems.map((item, index) => (
                                    <React.Fragment key={item.label}>
                                        <li className="breadcrumbItemNEW flex items-center mx-3">
                                            <Link href={item.href} className="text-sm">
                                                {item.label}
                                            </Link>
                                        </li>
                                        {index < breadcrumbItems.length - 1 && (
                                            <svg
                                                className="fill-[#a3a3a3] w-5 h-5"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 256 256"
                                            >
                                                <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z" />
                                            </svg>
                                        )}
                                    </React.Fragment>
                                ))}
                            </ol>
                        </nav>
                    )}

                    {/* Title */}
                    {isLoading ? (
                        <SkeletonBlock height="h-8" width="w-3/4" />
                    ) : (
                        <h2 className="mt-3 text-[32px] font-medium text-customBlue-500">
                            Lease a {vehicle?.title} with $0 Down & Fast Approval
                        </h2>
                    )}
                </div>

                <div className={`mt-[30px] ${styles.productDetaiWrp}`}>
                    <div className="container">
                        <div className="lg:grid lg:grid-cols-1 items-start gap-x-6 mb-10">
                            {isLoading ? (
                                <ProductImageSliderSkeleton />
                            ) : vehicle ? (
                                <div className="animate-fade-in transition-opacity duration-500">
                                    <ProductImageSlider images={vehicle.gallery} isLoading={false} />
                                    <ProductDetailRight vehicle={vehicle} />
                                </div>
                            ) : (
                                <p className="text-center text-gray-500 py-10">Vehicle not found.</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-[#f9f9fb] w-full">
                        <BrowseInventoryByBusiness
                            showTopCategories={true}
                            showTopBrands={true}
                            showTopFuelTypes={true}
                            sectionTitle="Browse inventory based on your business needs"
                        />
                    </div>

                    <div className="container">
                        <div className={styles.productDetaiOther}>
                            {/* <ProductRelated /> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CarDetail;
CarDetail.Layout = 'Default';
