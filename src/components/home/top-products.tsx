import React, { useEffect, useState } from 'react';
import ProductCard from '../product/product-card';
import Slider from 'react-slick';
import Link from 'next/link';
import { callMiddlewareApi } from '../utils/api';
import CButton from '../common/form/Button';
import Icons from '../common/icons/Icons';
import Image from 'next/image';

export default function TopProducts(props: any) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingProducts, setLoadingProducts] = useState(true);


  // Fetch categories
  const fetchCategories = async () => {
    try {
      const result = await callMiddlewareApi({
        targetEndpoint: 'categories/getCategories',
        payload: {}, // if you need to send anything, add here
      });

      if (result.success) {
        setCategories(result.data.data);
        // console.log(result.data.data);
        setSelectedCategoryId(result.data.data[0].category_id); // Set first category as selected
      }
    } catch (err) {
      console.error('Error fetching categories:', err);
    } finally {
      setLoadingCategories(false);
    }
  };

  // Fetch categories once on mount
  useEffect(() => {

    if (props.showTopCategories) {
      fetchCategories();
    } else {
      fetchVehiclesData();
    }

  }, []);

  // When selectedCategoryId changes, fetch products
  useEffect(() => {
    if (selectedCategoryId !== null) {
      fetchVehiclesData();
    }
  }, [selectedCategoryId]);

  const fetchVehiclesData = async () => {
    try {
      const result = await callMiddlewareApi({
        targetEndpoint: 'vehicles/getProductCards',
        payload: {
          currentPage: 1,
          itemsPerPage: 6,
          filters: {
            "category_id": selectedCategoryId || ''
          }, // or pass props.filters
        },
      });

      if (result.success) {
        
        const mapped = result.data.data.map((v: any, index: number) => ({
          title: v.title,
          brand: v.brand,
          fuel_type: v.fuel_type,
          ev: [0, 4, 5].includes(index) ? true : false,
          categoryName: v.categoryName,
          brandLogo: v.brandLogo || '/logos/default.png',
          imageUrl: v.imageUrl || 'https://framerusercontent.com/images/euuj0q7iNuXVoYPIf0xBnvyb34s.jpg?width=1947&height=1500',
          variants: v.variants || 1,
          price: v.old_price || '$ 0.00',
          discountedPrice: '$' + v.discountedPrice || '',
          link: "/cars/" + v.slug || '#',
        }));

        setProducts(mapped);
      }
    } catch (err) {
      console.error('Error fetching vehicles:', err);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   fetchVehiclesData();
  // }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
      { breakpoint: 767, settings: { slidesToShow: 2.1, slidesToScroll: 1, arrows: false } },
    ],
  };

  return (
    <section className="animate-slide-up-fade bg-white TopProducts py-[50px] px-4">
      <div className="container mx-auto">

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-full relative overflow-visible mb-[50px]">
          <h2
            className="
               text-[#171717] font-medium 
              text-[30px] leading-[1.1em] tracking-[-0.03em] capitalize
              max-w-full
              md:text-[36px]
              sm:text-[28px]
              m-0 p-0
              bg-transparent rounded-none
              animate-slide-in-top
              ">
            {/* Heading text here */}
            {props.sectionTitle}
          </h2>
          <p
            className="
              font-normal text-left text-[#000] 
              text-[16px] leading-[1.4em] tracking-[-0.03em]
              max-w-[425px]
              m-0 p-0
              bg-transparent rounded-none animate-slide-in-top
              ">
            {/* Paragraph text here */}
            {props.sectionDescription}
          </p>
        </div>

        {/* category tags  */}
        {/* Category Tags */}

        {/* {JSON.stringify(categories)} */}

        {props.showTopCategories && (
          <div
            className="
      mt-[50px] mb-3
      w-full
      overflow-x-auto
      
      scrollbar-hide
    "
          >
            <div
              className="
        inline-grid
        grid-flow-col
        auto-cols-max
        gap-5
        justify-start
        w-full 
        overflow-hidden
      "
            >
              {loadingCategories ? (
                // Optionally a loader
                <></>
              ) : (
                categories.map((cat) => (
                  <span
                    key={cat.category_id}
                    onClick={() => setSelectedCategoryId(cat.category_id)}
                    className={`flex flex-col items-end justify-center border border-[#ddd] rounded-xl min-w-[100px] text-center px-3 py-2 text-sm font-medium cursor-pointer select-none
               hover:border-customBlue-500
              ${selectedCategoryId === cat.category_id
                        ? 'bg-customBlue-500 text-white'
                        : 'bg-white xbg-[#f5f5f5]  xhover:bg-[#737373] text-customBlue-500'
                      }
            `}
                  >
                    {cat.icon != null ? (
                      <>
                        <div className='w-[170px]'>
                          <Image
                            alt={cat.name}
                            width={170}
                            height={68}
                            src={cat.icon}
                            className='text-white mb-2'
                          />
                          {cat.name}
                          {/* <Icons
                            name={cat.icon}
                            className={`
                              ${selectedCategoryId === cat.category_id
                                ? 'text-customBlue-500 '
                                : 'text-[#f5f5f5] hover:text-[#737373] '
                              }
                              
                              ml-2 w-full h-auto  transition-transform duration-300 group-hover:animate-slide-in-left`}
                          /> */}

                        </div>
                      </>
                    ) : (
                      <>
                        {cat.name}
                      </>
                    )}
                  </span>
                ))
              )}
            </div>
          </div>
        )}




        <div className="main-wrapper mt-10">
          {loading ? (
            <>
              {/* <p>Loading...</p> */}
            </>
          ) : (
            <>
              {/* <Slider {...settings}></Slider> */}
              <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr justify-center gap-[20px] w-full h-min relative overflow-clip"
              >
                {products.map((product, index) => (
                  <div key={index}>
                    <ProductCard productData={product} />
                  </div>
                ))}
              </div>
              <div className='flex items-center justify-center mt-[50px]'>
                <CButton className={"w-auto"}
                  label={
                    <>
                      <span className="flex justify-center items-center">View More Deals
                        <Icons name="right" className="ml-2 w-5 h-5 text-[#fff]" />
                      </span>
                    </>
                  }

                  variant="blue" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
