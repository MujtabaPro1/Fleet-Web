'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/category/Category.module.scss';
import { callMiddlewareApi } from '../utils/api';

interface Brand {
    brand_id?: string;
    title: string;
    slug: string;
    logo_url?: string;
}

interface BrandFilterProps {
    selectedBrandSlugs: number[];
    onToggleBrand: (slug: any) => void;
}

export default function BrandFilter({ selectedBrandSlugs, onToggleBrand }: BrandFilterProps) {
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(true); // 👈 Toggle state
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
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBrands();
    }, []);

    const isChecked = (id: string | undefined) => {
        if (!id) return false;
        return selectedBrandSlugs.includes(Number(id));
    };


    return (
        <div className={`w-full ${styles.taxonomiesList}`}>
            <div className={`${styles.taxonomyItem} ${isExpanded ? styles.taxonomyItemActive : ''}`}>
                <h4
                    onClick={() => setIsExpanded((prev) => !prev)} // 👈 Toggle on click
                    className={`text-2xl font-semibold flex items-center justify-between ${styles.taxtTitle}`}>
                    Brands
                    <svg
                        className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} // 👈 Rotate
                        xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.2837 0.833179C15.685 1.25521 15.685 1.91773 15.2837 2.33976L8 10L0.716265 2.33976C0.314979 1.91773 0.314979 1.25521 0.716265 0.833179C1.14719 0.379975 1.86979 0.379975 2.30072 0.833179L8 6.82706L13.6993 0.83318C14.1302 0.379976 14.8528 0.379975 15.2837 0.833179Z"
                            fill="#212121"
                        />
                    </svg>
                </h4>
                {isExpanded && (
                    <ul className={`mt-1 max-h-[120px] overflow-y-auto ${styles.taxonomyItemsInner}`}>
                        {loading ? (
                            Array.from({ length: 6 }).map((_, i) => (
                                <li key={i} className="animate-pulse h-6 bg-gray-200 rounded mb-2"></li>
                            ))
                        ) : (
                            brands.map((brand) => (
                                <li key={brand.slug}>
                                    <label
                                        className="flex items-center custom-checkbox1 mb-1.5 cursor-pointer"
                                        onClick={() => {
                                            if (brand.brand_id) {
                                                onToggleBrand(Number(brand.brand_id));
                                            }
                                        }}

                                    >
                                        <input
                                            type="checkbox"
                                            name={brand.brand_id?.toString()}
                                            checked={isChecked(brand.brand_id)}
                                            readOnly
                                        />
                                        <span className="checkbox-custom flex items-center justify-center">
                                            <svg width="10" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M10.1313 0L4.14556 5.67979L1.85151 3.54347L0.666687 4.71957L4.11022 8H4.12501L11.3334 1.15211L10.1313 0Z"
                                                    fill="white"
                                                />
                                            </svg>
                                        </span>
                                        <span className="text-base">{brand.title}</span>
                                    </label>
                                </li>
                            ))
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
}
