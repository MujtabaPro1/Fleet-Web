import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import emptyImage from '../../../assets/images/illsutration.png'

export  default function EmptyWishList() {
    return (
       <>
           <div className="flex justify-center items-center flex-col">
             <Image 
               src={emptyImage}
               alt='emptyImage'
             />
             <h2 className='text-[32px] text-[#212121] font-bold mb-[8px] mt-[32px]'>Empty Wishlist</h2>
             <h6 className="text-[16px] text-[#4D4D4D] leading-[19px] mb-[24px]">Check out what is on Sale</h6>
             <button type="button" className='bg-[#08BFB0] text-[18px] text-[#fff] py-[13px] w-[317px] rounded-[12px]'>Shop Now</button>
           </div>
       </>
      );
    };
