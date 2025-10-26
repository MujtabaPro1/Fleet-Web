import React from 'react';
import Image from 'next/image';
import styles from '../../styles/components/CategoryIconGrid.module.scss';
import fallbackImage from '../../assets/images/svg/brand1.svg'; // Default fallback image

export default function CategoryIconGrid({ categoryData }: any) {
  const imageSrc = categoryData.imageUrl || fallbackImage;

  return (
    <div className={`${styles.categoryIconGridItem} text-center categoryIconGridItem`}>
      <div
        className={`${styles.cat_circle} xcat_circle`}
      // style={{ backgroundColor: categoryData.catColor }}
      >
        <span>
          <Image
            src={imageSrc}
            alt={categoryData.title || 'Brand'}
            width={80}
            height={80}
            className="object-contain"
          />
        </span>
      </div>
    </div>
  );
}
