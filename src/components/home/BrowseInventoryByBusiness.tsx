import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { callMiddlewareApi } from '../utils/api';
import BrandIconGrid from '../brands/brands-icon-grid';
import Link from 'next/link';

export default function BrowseInventoryByBusiness(props: any) {
    const [activeTab, setActiveTab] = useState('Car Brands');
    const [categories, setCategories] = useState<any[]>([]);
    const [brands, setBrands] = useState<any[]>([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const [loadingBrands, setLoadingBrands] = useState(true);

    const fuelTypes = ['Petrol', 'Diesel', 'Hybrid', 'Electric'];

    useEffect(() => {
        if (props.showTopCategories) fetchCategories();
        if (props.showTopBrands) fetchBrands();
    }, []);

    const fetchCategories = async () => {
        try {
            const result = await callMiddlewareApi({
                targetEndpoint: 'categories/getCategories',
                payload: {},
            });

            if (result.success) {
                const data = result.data.data;
                setCategories(data);
                // setSelectedCategoryId(data[0]?.category_id || null);
            }
        } catch (err) {
            console.error('Error fetching categories:', err);
        } finally {
            setLoadingCategories(false);
        }
    };

    const fetchBrands = async (itemsPerPage = 12, page = 1) => {
        try {
            const result = await callMiddlewareApi({
                targetEndpoint: 'brands/getBrands',
                payload: {
                    itemsPerPage,
                    page,
                },
            });

            if (result.success) {
                const mappedBrands = result.data.brands.map((brand: any) => ({
                    id: brand.brand_id,
                    title: brand.title,
                    slug: brand.slug,
                    imageUrl: brand.imageUrl || '/logos/default.png',
                    link: brand.link || '#',
                }));
                setBrands(mappedBrands || []);
            }
        } catch (err) {
            console.error('Error fetching brands:', err);
        } finally {
            setLoadingBrands(false);
        }
    };


    const tabs = [
        props.showTopBrands && 'Car Brands',
        props.showTopCategories && 'Body Types',
        props.showTopFuelTypes && 'Fuel Types',
    ].filter(Boolean);

    return (
        <section className="animate-slide-up-fade  py-[50px]">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-[50px]">
                    <h2 className="text-customBlue-500 font-medium text-[30px] md:text-[36px] sm:text-[28px] leading-[1.1em] tracking-[-0.03em] capitalize animate-slide-in-top">
                        {props.sectionTitle}
                    </h2>
                    <p className="text-[#000] text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px] animate-slide-in-top">
                        {props.sectionDescription}
                    </p>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`py-3 px-3 min-w-[150px] text-center rounded-lg text-base font-medium  transition 
                                ${activeTab === tab
                                    ? 'bg-customBlue-500 text-white'
                                    : 'bg-white text-customBlue-500 hover:bg-customBlue-500 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'Body Types' && props.showTopCategories && (
                    <div className="w-full">
                        <div className="inline-grid grid-flow-col auto-cols-max gap-5 justify-start overflow-hidden">
                            {loadingCategories ? (
                                <></>
                            ) : (
                                categories.map((cat) => (
                                    <Link key={cat.category_id} href={`/current-offers/?category_id=${cat.category_id}`}>
                                        <span

                                            // onClick={() => setSelectedCategoryId(cat.category_id)}
                                            className={`flex flex-col items-end justify-center border rounded-xl min-w-[100px] px-3 py-2 text-sm font-medium cursor-pointer select-none transition
                      ${selectedCategoryId === cat.category_id
                                                    ? 'bg-customBlue-500 text-white border-customBlue-500'
                                                    : 'bg-white text-customBlue-500 border-[#ddd] hover:border-customBlue-500'
                                                }`}
                                        >
                                            {cat.icon ? (
                                                <div className="w-[170px] text-center">
                                                    <Image
                                                        alt={cat.name}
                                                        width={170}
                                                        height={68}
                                                        src={cat.icon}
                                                        className="mb-2"
                                                    />
                                                    {cat.name}
                                                </div>
                                            ) : (
                                                cat.name
                                            )}
                                        </span>
                                    </Link>
                                ))
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'Car Brands' && props.showTopBrands && (
                    <div className='w-full'>
                        <h6 className='text-customBlue-500 text-base font-semibold mb-2'>Popular Brands</h6>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                            {loadingBrands ? (
                                <></>
                            ) : (
                                brands.map((brand, index) => (
                                    <BrandIconGrid key={index} categoryData={brand} />
                                ))
                            )}
                        </div>
                    </div>
                )}

                {activeTab === 'Fuel Types' && props.showTopFuelTypes && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                        {fuelTypes.map((type) => (
                            <div
                                key={type}
                                className="border border-gray-200 rounded-lg px-4 py-3 text-center text-sm font-medium text-customBlue-500 bg-white hover:border-customBlue-500 cursor-pointer"
                            >
                                {type}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
