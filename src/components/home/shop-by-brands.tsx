// import React from 'react'
// import CategoryIconGrid from '../category/category-icon-grid';
// import Link from 'next/link';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import styles from '../../styles/home/ShopByBrands.module.scss';

// images static
var data = {
  "brands": [
    {
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand1,
      "catColor": " #F7F7F7"
    },
    {
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand2,
      "catColor": " #F7F7F7"
    },
    {
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand3,
      "catColor": " #F7F7F7"
    },
    {
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand4,
      "catColor": " #F7F7F7"
    },
    {
      "title": "Youph",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand5,
      "catColor": " #F7F7F7"
    },
    {
      "title": "Moo Milk Bar",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand6,
      "catColor": " #F7F7F7"
    },
    {
      "title": "Seattle’s Best",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand7,
      "catColor": " #F7F7F7"
    },
    {
      "title": "Twenty Grams",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brand1,
      "catColor": " #F7F7F7"
    },
  ]
};

import React, { useEffect, useState } from 'react';
import CategoryIconGrid from '../category/category-icon-grid';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/home/ShopByBrands.module.scss';
import { callMiddlewareApi } from '@/components/utils/api';

import brand1 from '../../assets/images/svg/brand1.svg';
import brand2 from '../../assets/images/svg/brand2.svg';
import brand3 from '../../assets/images/svg/brand3.svg';
import brand4 from '../../assets/images/svg/brand4.svg';
import brand5 from '../../assets/images/svg/brand5.svg';
import brand6 from '../../assets/images/svg/b6.svg';
import brand7 from '../../assets/images/svg/b7.svg';
import BrandIconGrid from '../brands/brands-icon-grid';
import CButton from '../common/form/Button';
import Icons from '../common/icons/Icons';



export default function ShopByBrands(props: any) {
  const [brands, setBrands] = useState<any[]>([]);
  const apiURL = process.env.NEXT_PUBLIC_middlewareAPI_FrontendURL;
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const result = await callMiddlewareApi({
          targetEndpoint: 'brands/getBrands',
          payload: {},
        });

        if (result.success) {

          const mappedBrands = result.data.brands.map((brand: any) => ({
            id: brand.brand_id,
            title: brand.title,
            slug: brand.slug,
            imageUrl: brand.imageUrl || '/logos/default.png',
            link: brand.link || '#',
          }));


          // console.log()
          setBrands(mappedBrands || []);
        }
      } catch (err) {
        console.error('Error fetching brands:', err);
      }
    };

    fetchBrands();
  }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,               // ⏱ Slow transition speed (in ms)
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,          // 🔁 Continuous autoplay
    cssEase: "linear",         // 🧈 Smooth linear motion
    pauseOnHover: false,       // 🚫 Prevent pause on hover
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 5.5, slidesToScroll: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 3.5, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 3.5, slidesToScroll: 1 } },
    ],
  };



  return (
    <section className="ShopByCategory py-[50px] -px-4 xpointer-events-none bg-white">
      <div className="container mx-auto">
        {/* <div className="flex justify-between w-full items-center head-sec">
          <h2 className="text-xl text-[#171717] font-medium text-center animate-slide-in-top">{props.sectionTitle}</h2>
          <p className=''>{props.sectionDesc}</p>
        </div> */}


        <div className={`flex flex-col md:flex-row items-center ${props.box === true ? 'justify-between' : 'justify-center'} gap-4 w-full max-w-full relative overflow-visible  ${props.box === true ? 'mb-12' : 'mb-1'} `}>
          <h2 className={`animate-slide-in-top text-[#171717] font-medium text-[30px] leading-[1.1em] tracking-[-0.03em] capitalize ${props.box === true ? 'md:text-[36px]' : 'md:text-[20px]'}  sm:text-[18px]`}>{props.sectionTitle}</h2>
          <p className="animate-slide-in-bottom font-medium text-left text-[#333] text-[16px] leading-[1.4em] tracking-[-0.03em] max-w-[425px]">{props.sectionDesc}</p></div>
        <div className={styles.carouselSec}>


          {props.box === true ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {brands.map((brand, index) => (
                  <BrandIconGrid key={index} categoryData={brand} />
                ))}
              </div>
              <div className='flex items-center justify-center mt-[50px] mb-[30px]'>
                <CButton className={"w-auto"}
                  label={
                    <>
                      <span className="flex justify-center items-center">View more brands
                        <Icons name="right" className="ml-2 w-5 h-5 text-[#fff]" />
                      </span>
                    </>
                  }

                  variant="blue" />
              </div>
            </>
          ) : (
            <Slider {...settings}>
              {brands.map((brand, index) => (
                <div key={index}>
                  <CategoryIconGrid categoryData={brand} />
                </div>
              ))}
            </Slider>
          )}






        </div>
      </div>
    </section>
  );
}
