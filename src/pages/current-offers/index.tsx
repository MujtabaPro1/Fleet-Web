import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import ProductCard from '@/components/product/product-card';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';
import GetLang from '@/hooks/getLang';

import styles from '@/styles/category/Category.module.scss';

import Link from 'next/link';
import Pagination from '@/components/common/pagination/pagination';
// import PillItem from '@/components/common/pills/PillItem';
// import RadioItem from '@/components/common/radio/Radio-Item';
import Logo from '@/assets/images/fleetplan-logo.avif';

import MultiRangeSlider from "@/components/common/form/multiRangeSlider";

import CategoryFilter from '@/components/category/categoryFilter';
import { callMiddlewareApi } from '@/components/utils/api';

import BrandFilter from '@/components/brands/brandFilter';
import PriceSlider from '@/components/common/form/RangeSlider';



const CurrentOffers: MyPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const [rangeMinvalue, rangeMinsetValue] = useState(0);
    const [rangeMaxvalue, rangeMaxsetValue] = useState(0);
    const handleChange = (event: any) => {
        rangeMaxsetValue(event[1]);
        rangeMinsetValue(event[0]);
        //console.log(event[0]);
    };


    const [minValue, set_minValue] = useState(0);
    const [maxValue, set_maxValue] = useState(5000);
    const handleInput = (e: any) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
        console.log(e.maxValue);
    };
    const handleChangeMin = (e: any) => {
        set_minValue(e.minValue);
        console.log(e.maxValue);
    };
    const handleChangeMax = (e: any) => {
        set_maxValue(e.maxValue);
        console.log(e.maxValue);
    };


    const [isBodyClassAdded, setIsBodyClassAdded] = useState(false);

    useEffect(() => {
        if (isBodyClassAdded) {
            document.body.classList.add(styles.sidebarListingOpen);
        } else {
            document.body.classList.remove(styles.sidebarListingOpen);
        }
    }, [isBodyClassAdded]);

    const handleButtonClick = () => {
        setIsBodyClassAdded(true);
    };

    const handleCloseClick = () => {
        setIsBodyClassAdded(false);
    };
    const lang = GetLang();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);


    const [selectedBrandSlugs, setSelectedBrandSlugs] = useState<number[]>([]);
    const handleToggleBrand = (slug: number) => {
        setCurrentPage(1); // reset pagination
        setSelectedBrandSlugs((prev) =>
            prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]
        );
    };

    const [selectedCategoryIds, setSelectedCategoryIds] = useState<number[]>([]);
    const handleToggleCategory = (id: number) => {
        setCurrentPage(1); // reset pagination on filter change
        setSelectedCategoryIds((prev) => {
            if (prev.includes(id)) {
                return prev.filter((catId: any) => catId !== id); // remove
            } else {
                return [...prev, id]; // add
            }
        });
        setTimeout(function () {
            handleCloseClick();
        }, 700)

    };

    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [sortOption, setSortOption] = useState<string>('recommended');

    // const sortOptions = [
    //     { label: 'Recommended', value: 'recommended' },
    //     { label: 'Price: Low to High', value: 'price_asc' },
    //     { label: 'Price: High to Low', value: 'price_desc' },
    // ];
    const sortOptions = [
        { label: 'Relevance', value: 'relevance' }, // default (by created_at DESC)
        { label: 'Brand A-Z', value: 'brand_asc' },
        { label: 'Brand Z-A', value: 'brand_desc' },
        { label: 'Lowest leasing rate', value: 'price_asc' },
        { label: 'Highest leasing rate', value: 'price_desc' },
        { label: 'Lowest ANCAP rating', value: 'ancap_asc' },
        { label: 'Highest ANCAP rating', value: 'ancap_desc' },
    ];


    const [totalItems, setTotalItems] = useState(0);

    const fetchVehiclesData = async () => {
        try {
            const result = await callMiddlewareApi({
                targetEndpoint: 'vehicles/getProductCards',
                payload: {
                    currentPage: currentPage,
                    itemsPerPage: 4,
                    sort: sortOption,
                    filters: {
                        category_id: selectedCategoryIds.length > 0 ? selectedCategoryIds : '',
                        brands_id: selectedBrandSlugs.length > 0 ? selectedBrandSlugs : '',
                        price_min: minValue,
                        price_max: maxValue,
                        //"category_id": selectedCategoryId || ''
                    }, // or pass props.filters
                },
            });

            if (result.success) {
                const mapped = result.data.data.map((v: any) => ({
                    title: v.title,
                    brand: v.brand,
                    fuel_type: v.fuel_type,
                    categoryName: v.categoryName,
                    brandLogo: v.brandLogo || '/logos/default.png',
                    imageUrl: v.imageUrl || '/vehicles/default.jpg',
                    variants: v.variants || 1,
                    price: v.price || '$ 0.00',
                    discountedPrice: '$ ' + v.discountedPrice || '',
                    link: v.link || '#',
                }));

                setProducts(mapped);
                setTotalPages(result.data.pagination.totalPages);
                setTotalItems(result.data.pagination.totalItems);

            }
        } catch (err) {
            console.error('Error fetching vehicles:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchVehiclesData();
    }, [selectedCategoryIds, selectedBrandSlugs, currentPage, sortOption]);

    const handleDragEnd = () => {
        console.log("Dragging finished. Final value:", minValue);
        fetchVehiclesData();
        // e.g., trigger API call or update something
    };

    const [isPriceExpanded, setIsPriceExpanded] = useState(true); // 👈 Toggle state

    return (
        <>
            <Head>
                <title>Fleet Leasing Australia | Current Offers</title>
            </Head>
            <div className='bg-white px-4 pt-[20px] lg:pt-[60px] mt-5'>
                <div className="max-w-7xl px-2 xcontainer category-page-sec mx-auto flex flex-wrap">
                    <div className='w-full mb-5 lg:mt-0 mt-3.5'>


                        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-full relative overflow-visible mb-10">
                            <h2 className="text-[#171717] text-[56px] leading-tight font-semibold tracking-[-0.03em] capitalize md:text-[40px] sm:text-[28px]">
                                Our vehicle inventory
                            </h2>
                            <p className="font-medium text-left text-[#333] text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px]">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                            </p>
                        </div>
                        <div className={`cursor-pointer text-center rounded-lg lg:hidden pb-1.5 pt-1.5  my-5 px-5 ${styles.filterOnMobile}`} onClick={handleButtonClick}>
                            <Link href="" className='text-sm'>Filter (3)</Link>
                        </div>
                    </div>
                    <div className={`w-full  lg:w-1/4 ${styles.categoryListingLeft}`}>
                        <div className={`flex justify-between items-center lg:hidden ${styles.sidebarTopListing}`}>
                            {/* <Link href="/" >
                               
                            </Link> */}


                            <Link href="/" className={`flex items-center ml-0  `}>
                                <Image
                                    src={Logo}
                                    alt="Fleet Leasing Australia"
                                    width={100}
                                    height={100}
                                />
                                <h6 className="text-[18px] uppercase font-semibold text-customRed-500 space-y-[-5px]">
                                    <span className="text-customBlue-500 block">Fleet Leasing</span> Australia
                                </h6>
                            </Link>



                            <Link href="" className={`text-2xl ${styles.closeSidebar}`} onClick={handleCloseClick}>
                                <span className="inline-flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full text-sm">
                                    🗙
                                </span>

                            </Link>
                        </div>
                        <div className={`lg:hidden   ${styles.mobileFilterWrp}`}>
                            {/* <div className={`${styles.sortingMobile}`}>
                                <h3 className={`text-2xl font-semibold mb-10  ${styles.filterTitle}`}>Sorting</h3>
                                <RadioItem />
                            </div> */}
                            <div className={`flex items-center justify-between mb-5 pt-2`}>
                                <h3 className={`text-2xl font-semibold   ${styles.filterTitle}`}>Filters</h3>
                                <button
                                    onClick={() => {
                                        setSelectedCategoryIds([]);
                                        setSelectedBrandSlugs([]);
                                        setCurrentPage(1);
                                        handleCloseClick();
                                    }}

                                    className={`font-medium ${styles.clearBtn} `}>
                                    Clear All
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center">
                                {/* <PillItem />
                                <PillItem />
                                <PillItem /> */}
                            </div>
                            <div className={`fixed bottom-0 w-full py-2.5  px-5 bg-white z-20 ${styles.footerSidebarButton}`}>
                                <button type='button' className={`w-full text-base text-white pt-2 pb-2.5 rounded-lg ${styles.btn} ${styles.btnPrimary}`}>
                                    Show All Items
                                </button>

                            </div>

                        </div>

                        <div className='p-4 flex flex-col gap-5 border-[#d4d4d4] border-[1px] rounded-lg mb-5'>
                            <h4 className={`text-xl font-semibold flex items-center justify-between ${styles.taxtTitle}`}>
                                Sort by
                            </h4>


                            <select
                                value={sortOption}
                                onChange={(e) => {
                                    setSortOption(e.target.value);
                                    setCurrentPage(1);
                                }}
                                className={`bg-[#f5f5f5] w-full px-4 py-2 text-sm border rounded ${lang === 'en' ? 'text-left' : 'text-right'}`}
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className='p-4 flex flex-col gap-5 border-[#d4d4d4] border-[1px] rounded-lg'>
                            <h4 className={`text-xl font-semibold flex items-center justify-between ${styles.taxtTitle}`}>
                                Filter ({((selectedCategoryIds.length || 0) + (selectedBrandSlugs.length || 0))})
                            </h4>







                            <CategoryFilter
                                selectedCategoryIds={selectedCategoryIds}
                                onToggleCategory={handleToggleCategory}
                            />
                            <BrandFilter
                                selectedBrandSlugs={selectedBrandSlugs}
                                onToggleBrand={handleToggleBrand}
                            />
                            <div className="Price mb-3">




                                <div className={`${styles.taxonomyItem} ${isPriceExpanded ? styles.taxonomyItemActive : ''}`}>

                                    <h4
                                        onClick={() => setIsPriceExpanded((prev) => !prev)} // 👈 Toggle on click
                                        className={`text-2xl font-semibold flex items-center justify-between ${styles.taxtTitle}`}>
                                        Price
                                        <svg
                                            className={`transform transition-transform duration-200 ${isPriceExpanded ? 'rotate-180' : 'rotate-0'}`} // 👈 Rotate
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M15.2837 0.833179C15.685 1.25521 15.685 1.91773 15.2837 2.33976L8 10L0.716265 2.33976C0.314979 1.91773 0.314979 1.25521 0.716265 0.833179C1.14719 0.379975 1.86979 0.379975 2.30072 0.833179L8 6.82706L13.6993 0.83318C14.1302 0.379976 14.8528 0.379975 15.2837 0.833179Z"
                                                fill="#737373"
                                            />
                                        </svg>
                                    </h4>

                                    {isPriceExpanded && (

                                        <PriceSlider
                                            value={minValue}
                                            onChange={set_minValue}
                                            max={5000}
                                            onDragEnd={handleDragEnd}
                                        />
                                    )}

                                    {/* <MultiRangeSlider
                                    min={0}
                                    max={5000}
                                    onChange={({ min, max }: { min: number; max: number }) => {
                                        set_minValue(min);
                                        set_maxValue(max);
                                        // console.log(`min = ${min}, max = ${max}`)
                                    }

                                    }
                                /> */}
                                </div>
                            </div>
                        </div>




                    </div>
                    <div className={`w-full  lg:w-9/12 ${styles.categorylistingRight}`}>


                        <div className="TopProducts gutters-grid-view">

                            <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-3  grid-cols-1">

                                {products.map((product, index) => (
                                    <div key={index}>
                                        {/* {JSON.stringify(product)} */}
                                        <ProductCard productData={product} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${styles.paginationSec} md:mt-28 md:mb-[2px] mt-10 mx-[-15px]`}>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={(page) => setCurrentPage(page)}
                    />

                </div>
            </div>

        </>
    );
};
export default CurrentOffers;
CurrentOffers.Layout = "Default";
