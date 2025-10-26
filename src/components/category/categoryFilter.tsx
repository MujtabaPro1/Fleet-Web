'use client';
import React, { useEffect, useState } from 'react';
import styles from '@/styles/category/Category.module.scss';
import { callMiddlewareApi } from '../utils/api';

interface Category {
    category_id: number;
    name: string;
    slug: string;
}

interface CategoryFilterProps {
    selectedCategoryIds: number[];
    onToggleCategory: (categoryId: number) => void;
}

export default function CategoryFilter({ selectedCategoryIds, onToggleCategory }: CategoryFilterProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [isExpanded, setIsExpanded] = useState(true); // 👈 Toggle state

    const fetchCategories = async () => {
        try {
            const result = await callMiddlewareApi({
                targetEndpoint: 'categories/getCategories',
                payload: {},
            });

            if (result.success) {
                setCategories(result.data.data);
            }
        } catch (err) {
            console.error('Error fetching categories:', err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    const isChecked = (id: number) => selectedCategoryIds.includes(id);

    return (
        <div className={`w-full ${styles.taxonomiesList}`}>
            <div className={`${styles.taxonomyItem} ${isExpanded ? styles.taxonomyItemActive : ''}`}>

                <h4
                    onClick={() => setIsExpanded((prev) => !prev)} // 👈 Toggle on click
                    className={`text-xl font-semibold flex items-center justify-between ${styles.taxtTitle}`}>
                    Body Type
                    <svg
                        className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-180' : 'rotate-0'}`} // 👈 Rotate
                        xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15.2837 0.833179C15.685 1.25521 15.685 1.91773 15.2837 2.33976L8 10L0.716265 2.33976C0.314979 1.91773 0.314979 1.25521 0.716265 0.833179C1.14719 0.379975 1.86979 0.379975 2.30072 0.833179L8 6.82706L13.6993 0.83318C14.1302 0.379976 14.8528 0.379975 15.2837 0.833179Z"
                            fill="#737373"
                        />
                    </svg>
                </h4>

                {isExpanded && (
                    <ul className={`mt-1 max-h-[120px] overflow-y-auto ${styles.taxonomyItemsInner}`}>
                        {categories.map((cat) => (
                            <li key={cat.category_id}>
                                <label
                                    className='flex items-center custom-checkbox1 mb-1.5 cursor-pointer'
                                    onClick={() => onToggleCategory(cat.category_id)}
                                >
                                    <input
                                        type="checkbox"
                                        name={cat.category_id.toString()}
                                        checked={isChecked(cat.category_id)}
                                        readOnly
                                    />
                                    <span className='checkbox-custom flex items-center justify-center'>
                                        <svg width="10" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M10.1313 0L4.14556 5.67979L1.85151 3.54347L0.666687 4.71957L4.11022 8H4.12501L11.3334 1.15211L10.1313 0Z" fill="white" />
                                        </svg>
                                    </span>
                                    <span className='text-base'>{cat.name}</span>
                                </label>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
}
