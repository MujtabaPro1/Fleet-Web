import React, { useEffect, useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import ProductSkeleton from '../product/product-skeleton';
import CButton from "../common/form/Button";
import Icons from "../common/icons/Icons";

export default function ProductCard({ productData }: any) {
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    if (productData) {
      setTimeout(() => setLoading(false), 1000);
    }

    const stored = localStorage.getItem("wishlist");
    if (stored) setWishlist(JSON.parse(stored));
  }, [productData]);

  const isWishlisted = wishlist.includes(productData.link);

  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent link navigation
    let updated: string[];

    if (isWishlisted) {
      updated = wishlist.filter((id) => id !== productData.link);
    } else {
      updated = [...wishlist, productData.link];
    }

    setWishlist(updated);
    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    // <div className="w-full px-2">
    //   {loading ? (
    //     <ProductSkeleton />
    //   ) : (
    //     <div className="block rounded-2xl bg-white shadow-md hover:shadow-lg transition-all overflow-hidden">
    //       <Link href={productData.link}>
    //         <div className="relative">
    //           {/* Product Image */}
    //           <div className="border border-gray-200 rounded-xl overflow-hidden">
    //             <Image
    //               src={productData.imageUrl}
    //               alt={productData.title}
    //               width={400}
    //               height={250}
    //               className="w-full h-auto object-cover"
    //             />
    //           </div>

    //           {/* Tag + Heart */}
    //           <div className="absolute top-2 left-2 flex gap-2">
    //             <span className="bg-gray-100 text-red-600 text-xs px-3 py-1 rounded-full font-medium">
    //               Current Offer
    //             </span>
    //           </div>
    //           <button
    //             onClick={toggleWishlist}
    //             className="absolute top-2 right-2 bg-gray-100 p-2 rounded-full z-10"
    //           >
    //             {isWishlisted ? (
    //               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 text-red-600 fill-current">
    //                 <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z" />
    //               </svg>
    //             ) : (
    //               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="w-5 h-5 text-gray-400 fill-current">
    //                 <path d="M178,40c-20.65,0-38.73,8.88-50,23.89C116.73,48.88,98.65,40,78,40a62.07,62.07,0,0,0-62,62c0,70,103.79,126.66,108.21,129a8,8,0,0,0,7.58,0C136.21,228.66,240,172,240,102A62.07,62.07,0,0,0,178,40Z" />
    //               </svg>
    //             )}
    //           </button>
    //         </div>

    //         {/* Product Details */}
    //         <div className="p-4 space-y-2">
    //           <div className="flex items-center gap-2">
    //             <Image
    //               src={productData.brandLogo}
    //               alt={productData.brand}
    //               width={42}
    //               height={20}
    //               className="object-contain"
    //             />
    //             <p className="text-sm font-medium text-gray-700">{productData.brand}</p>
    //           </div>
    //           <h5 className="text-lg font-semibold text-gray-900">{productData.title}</h5>

    //           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
    //             <div className="sm:basis-2/5">
    //               <span className="inline-block bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full font-medium">
    //                 {productData.variants} Variants
    //               </span>
    //             </div>
    //             <div className="sm:basis-3/5 flex flex-col">
    //               <div className="flex items-center gap-2">
    //                 <s className="text-sm text-nowrap text-gray-400">{productData.discountedPrice}</s>
    //                 <span className="text-md font-bold text-red-600">{productData.price}</span>
    //                 <span className="text-xs text-red-600 font-medium">PW</span>
    //               </div>
    //               <p className="text-xs text-gray-500">Our Repayments</p>
    //             </div>
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   )}
    // </div>
    <>
      {loading ? (
        <ProductSkeleton />
      ) : (
        <>
          <article className="cursor-pointer bg-white p-5 rounded-lg hover:border-[#a3a3a3] border-[#d4d4d4] border-[1px] xshadow-[0_1px_20px_rgba(0,0,0,0.03)] w-full max-w-md">
            <Link href={productData.link}>
              <h4 className="hover:underline text-2xl font-medium leading-tight text-[#171717] mb-4">{productData.title}</h4>
              {/* Image Container */}

              <div className="relative rounded-md xborder xborder-gray-200 overflow-hidden">
                <Image
                  src={productData.imageUrl}
                  alt={productData.title || 'Vehicle'}
                  width={346}
                  height={150}
                  className="object-contain w-[346px] h-[150px]"
                />
                <div className="relative inline-block w-auto bg-[#c7272e] rounded-[5px] px-2 py-1 mt-4">
                  <p className="text-white text-sm font-medium tracking-tight leading-tight select-none">
                    Limited-Time Deal
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-3 text-2xl text-[#525252] font-medium select-none py-1 max-w-max mt-2">
                  From
                  <span className="text-[#c7272e] ">{productData.discountedPrice}</span>
                  <span className="">per week.</span>
                </div>
              </div>

              {/* Details */}
              <div className="border-[#e5e5e5] border-t-[1px] flex justify-start items-center gap-2 pt-2 pb-3 text-[#525252] text-sm select-none font-normal">
                <div className="flex items-center bg-[#fafafa] rounded-[5px] py-1 px-2">
                  <span>{productData.categoryName}</span>
                </div>
                <div className="flex items-center bg-[#fafafa] rounded-[5px] py-1 px-2">
                  <span className="">{productData.fuel_type}</span>
                </div>
                <div className="flex items-center bg-[#fafafa] rounded-[5px] py-1 px-2 gap-1">
                  <span className="">{productData.variants}</span>
                  <span>Variants</span>
                </div>
                {productData.ev &&
                  <div className="flex items-center text-[#14532D] bg-[#f0fdf4] rounded-[5px] py-1 px-2 gap-1">
                    <span className="">EV Credit</span>
                  </div>
                }

              </div>

              {/* Button */}
              <div className="flex gap-1">
                <div className="w-full ">
                  {/* <CButton className={"w-full"}
                  label={
                    <>
                      <span className="flex justify-center items-center">Get a offer
                        <Icons name="right" className="ml-2 w-5 h-5 text-[#fff]" />
                      </span>
                    </>
                  }

                  variant="blue" /> */}
                  <CButton
                    className="w-full group"
                    label={
                      <span className="flex justify-center items-center">
                        Get a offer
                        <Icons
                          name="right"
                          className="ml-2 w-5 h-5 text-white transition-transform duration-300 group-hover:animate-slide-in-left"
                        />
                      </span>
                    }
                    variant="blue"
                  />
                </div>
                <div className="">
                  {/* <CButton
                  className="h-full w-11 px-2"
                  variant="transparent-blue"
                  label={
                    <Icons name="heart" className="w-5 h-5 text-[#737373]" />
                  }
                /> */}
                  <CButton
                    className="h-full w-11 px-2 group"
                    variant="transparent-blue"
                    label={
                      <Icons
                        name="heart"
                        className="w-5 h-5 text-[#737373] group-hover:animate-pulse transition duration-300"
                      />
                    }
                  />

                </div>
              </div>
            </Link>
          </article >
        </>
      )
      }
    </>
  );
}




