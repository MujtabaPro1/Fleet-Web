import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/CategoryIconGrid.module.scss';
import fallbackImage from '../../assets/images/svg/brand1.svg'; // Default fallback image
import Link from 'next/link';

export default function BrandIconGrid({ categoryData }: any) {
    const imageSrc = categoryData.imageUrl || fallbackImage;

    return (
        <div className={`text-center bg-white p-2 rounded-lg hover:border-[#a3a3a3] border-[#d4d4d4] border-[1px]`}>


            <Link href={`/current-offers/?brands_id=${categoryData.slug}`}>
                <Image
                    src={imageSrc}
                    alt={categoryData.title || 'Brand'}
                    width={160}
                    height={100}
                    className="h-[100px] object-contain mx-auto mb-4"
                />


                <span className={`${styles.cat_title} cat_title`}>
                    {categoryData.title}
                </span>
            </Link>
        </div>
    );
}
