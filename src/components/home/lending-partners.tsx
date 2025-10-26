import React, { useState } from 'react';
import Link from 'next/link';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../../styles/home/ShopByBrands.module.scss';

// import brand1 from '../../assets/images/svg/brand1.svg';
// import brand2 from '../../assets/images/svg/brand2.svg';
// import brand3 from '../../assets/images/svg/brand3.svg';
// import brand4 from '../../assets/images/svg/brand4.svg';
// import brand5 from '../../assets/images/svg/brand5.svg';
// import brand6 from '../../assets/images/svg/b6.svg';
// import brand7 from '../../assets/images/svg/b7.svg';

import BrandIconGrid from '../brands/brands-icon-grid';
import CButton from '../common/form/Button';
import Icons from '../common/icons/Icons';

// Static brand data (moved after imports)
const dataBrands = [
    {
        title: 'Brand 1',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/LbJxbdrgL7qWx2z71fGckMJYzbI.png?scale-down-to=512&width=2880&height=1315',
    },
    {
        title: 'Brand 2',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/R8bAzZ38YAIIw2n5I6xajHai6A.png?scale-down-to=512&width=2880&height=1152',
    },
    {
        title: 'Brand 3',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/ms52CdLJK6gILyAOx7eBUZgpPY.png?scale-down-to=512&width=2400&height=757',
    },
    {
        title: 'Brand 4',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/nY8wdl7HSzuoEguIboazwzFXvaI.png?scale-down-to=512&width=2000&height=539',
    },
    {
        title: 'Brand 5',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/PWIFOhijmuRZw0fHvyGv63GFs98.png?scale-down-to=512&width=1600&height=318',
    },
    {
        title: 'Brand 6',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/04miRMvQ8buIl3m1e8I1LzruWQ.png?scale-down-to=512&width=1024&height=203',
    },
    {
        title: 'Brand 7',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/PGgAUvQAE4M7uGgvcToOsL1Vmk.png?width=500&height=151',
    },
    {
        title: 'Brand 1',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/LbJxbdrgL7qWx2z71fGckMJYzbI.png?scale-down-to=512&width=2880&height=1315',
    },
    {
        title: 'Brand 2',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/R8bAzZ38YAIIw2n5I6xajHai6A.png?scale-down-to=512&width=2880&height=1152',
    },
    {
        title: 'Brand 3',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/ms52CdLJK6gILyAOx7eBUZgpPY.png?scale-down-to=512&width=2400&height=757',
    },
    {
        title: 'Brand 4',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/nY8wdl7HSzuoEguIboazwzFXvaI.png?scale-down-to=512&width=2000&height=539',
    },
    {
        title: 'Brand 5',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/PWIFOhijmuRZw0fHvyGv63GFs98.png?scale-down-to=512&width=1600&height=318',
    },
    {
        title: 'Brand 6',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/04miRMvQ8buIl3m1e8I1LzruWQ.png?scale-down-to=512&width=1024&height=203',
    },
    {
        title: 'Brand 7',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/PGgAUvQAE4M7uGgvcToOsL1Vmk.png?width=500&height=151',
    },
    {
        title: 'Brand 1',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/LbJxbdrgL7qWx2z71fGckMJYzbI.png?scale-down-to=512&width=2880&height=1315',
    },
    {
        title: 'Brand 2',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/R8bAzZ38YAIIw2n5I6xajHai6A.png?scale-down-to=512&width=2880&height=1152',
    },
    {
        title: 'Brand 3',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/ms52CdLJK6gILyAOx7eBUZgpPY.png?scale-down-to=512&width=2400&height=757',
    },
    {
        title: 'Brand 4',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/nY8wdl7HSzuoEguIboazwzFXvaI.png?scale-down-to=512&width=2000&height=539',
    },
    {
        title: 'Brand 5',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/PWIFOhijmuRZw0fHvyGv63GFs98.png?scale-down-to=512&width=1600&height=318',
    },
    {
        title: 'Brand 6',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/04miRMvQ8buIl3m1e8I1LzruWQ.png?scale-down-to=512&width=1024&height=203',
    },
    {
        title: 'Brand 7',
        link: '#',
        imageUrl: 'https://framerusercontent.com/images/PGgAUvQAE4M7uGgvcToOsL1Vmk.png?width=500&height=151',
    },
];

export default function LendingPartners(props: any) {
    const [brands] = useState<any[]>(dataBrands); // Use static data

    const settings = {
        dots: false,
        infinite: true,
        speed: 5000,
        slidesToShow: 7,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 5.5, slidesToScroll: 1 } },
            { breakpoint: 575, settings: { slidesToShow: 3.5, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 3.5, slidesToScroll: 1 } },
        ],
    };

    return (
        <section className="ShopByCategory py-[50px] -px-4 xpointer-events-none bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-full relative overflow-visible mb-2">
                    <h2 className="animate-slide-in-top text-[#171717] font-medium text-[30px] leading-[1.1em] tracking-[-0.03em] capitalize md:text-[20px] sm:text-[18px]">
                        {props.sectionTitle}
                    </h2>
                    <p className="animate-slide-in-bottom font-medium text-left text-[#333] text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px]">
                        {props.sectionDesc}
                    </p>
                </div>

                <div className={styles.carouselSec}>
                    {props.box === true ? (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                                {brands.map((brand, index) => (
                                    <BrandIconGrid key={index} categoryData={brand} />
                                ))}
                            </div>
                            <div className="flex items-center justify-center mt-[50px] mb-[30px]">
                                <CButton
                                    className="w-auto"
                                    label={
                                        <span className="flex justify-center items-center">
                                            View more brands
                                            <Icons name="right" className="ml-2 w-5 h-5 text-[#fff]" />
                                        </span>
                                    }
                                    variant="blue"
                                />
                            </div>
                        </>
                    ) : (
                        <Slider {...settings}>
                            {brands.map((brand, index) => (
                                <div key={index} className="px-2">
                                    <Link href={brand.link} target="_blank" rel="noopener noreferrer">
                                        <div className="flex items-center justify-center h-[80px] w-[100px] bg-white rounded shadow-sm">
                                            <img
                                                src={brand.imageUrl}
                                                alt={brand.title}
                                                className="max-h-[50px] object-contain"
                                            />
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </Slider>
                    )}
                </div>
            </div>
        </section>
    );
}
