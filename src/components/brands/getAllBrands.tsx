import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { callMiddlewareApi } from '@/components/utils/api';
import BrandIconGrid from './brands-icon-grid';

// Brand fetching and display component
export default function GetAllBrands(props: any) {
    const [brands, setBrands] = useState<any[]>([]); // Stores fetched brands
    const [isLoading, setIsLoading] = useState<boolean>(true); // Tracks loading state

    // Fetch brands on mount
    useEffect(() => {
        const fetchBrands = async () => {
            try {
                const result = await callMiddlewareApi({
                    targetEndpoint: 'brands/getBrands',
                    payload: {},
                });

                if (result.success) {
                    setBrands(result.data.brands || []);
                }
            } catch (err) {
                console.error('Error fetching brands:', err);
            } finally {
                setTimeout(function () {
                    setIsLoading(false); // Stop loader once fetch is done
                }, 1000);
            }
        };

        fetchBrands();
    }, []);

    return (
        <div className="ShopByBrand section pt-[50px] pb-[50px] -px-4">
            <div className="container mx-auto">

                {/* Section Title and Description */}
                <div className="flex flex-col items-start justify-start gap-4 w-[1104px] max-w-full p-0 relative overflow-visible">
                    {/*<div className="relative w-auto h-auto flex-none">
                         <div className="flex flex-col items-center justify-center gap-2 w-full max-w-[900px] p-0 relative overflow-visible">
                            <h2
                                className="font-sans font-normal text-black text-[48px] leading-[1.1em] tracking-[-0.03em] capitalize
              max-w-full md:text-[38px] sm:text-[28px] m-0 p-0 bg-transparent rounded-none"
                                style={{
                                    fontFeatureSettings: "normal",
                                    textDecoration: "none",
                                    textTransform: "capitalize",
                                    WebkitFontSmoothing: "antialiased",
                                }}
                            >
                                {props.sectionTitle}
                            </h2>
                            <p
                                className="font-sans font-medium text-center text-gray-600 text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px] m-0 p-0 bg-transparent rounded-none"
                                style={{
                                    fontFeatureSettings: "normal",
                                    textDecoration: "none",
                                    WebkitFontSmoothing: "antialiased",
                                }}
                            >
                                {props.sectionDescription}
                            </p>
                        </div> 
                        </div>*/}
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-full relative overflow-visible mb-5">
                        <h1 className="text-[#171717] text-[40px]  font-semibold  capitalize md:text-[56px] sm:text-[28px]">
                            {props.sectionTitle}
                        </h1>
                        <p className="font-medium text-left text-[#333] text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px]">
                            {props.sectionDescription}
                        </p>
                    </div>



                </div>

                {/* Brands Grid */}
                <div className="mt-[30px] ">
                    <span className="text-[#171717] text-2xl  font-semibold  capitalize mb-5 block">
                        Popular Brands
                    </span>
                    <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-5'>
                        {isLoading ? (
                            // Show skeleton loaders while loading
                            Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="animate-pulse bg-gray-200 h-[150px] rounded flex flex-col justify-center items-center"
                                >
                                    <div className="w-full h-[80px] bg-gray-300 xrounded-full mb-2"></div>
                                    <div className="w-[60%] h-4 bg-gray-300 "></div>
                                </div>
                            ))
                        ) : (
                            // Render actual brand cards
                            brands.map((brand, index) => (
                                <Link href={`/brands/${brand.slug}`} key={index}>

                                    <BrandIconGrid key={index} categoryData={brand} />
                                </Link>
                            ))
                        )}
                    </div>
                </div>

                <div className="mt-[30px] ">

                    <span className="text-[#171717] text-2xl  font-semibold  capitalize mb-5 block">
                        All Brands
                    </span>
                    <div className='grid grid-cols-2 lg:grid-cols-5 md:grid-cols-4 gap-5'>
                        {isLoading ? (
                            // Show skeleton loaders while loading
                            Array.from({ length: 8 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="animate-pulse bg-gray-200 h-[150px] rounded flex flex-col justify-center items-center"
                                >
                                    {/* <div className="w-full h-[80px] bg-gray-300 xrounded-full mb-2"></div> */}
                                    <div className="w-[60%] h-4 bg-gray-300 "></div>
                                </div>
                            ))
                        ) : (
                            // Render actual brand cards
                            brands.map((brand, index) => (
                                <Link href={`/${brand.slug}`} key={index}>



                                    <div className="flex flex-col border-[#d4d4d4] border cursor-pointer hover:shadow-lg transition rounded-xl">
                                        <span className="font-semibold text-center text-black py-2 px-2">
                                            {brand.title}
                                        </span>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
