import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import styles from './wishlistItem.module.scss'
import { useState } from "react";
import productImage from '../../../assets/images/productNav.png';
import Icon from '@/components/common/icons/icomoon';
//import Modal from '../modal/wishListModal';
import GetLang from '@/hooks/getLang';

export default function WishListItem({ productData }: any) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const lang = GetLang();

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const removeFromWishlist = () => {
    const stored = localStorage.getItem("wishlist");
    if (!stored) return;

    const updated = JSON.parse(stored).filter((id: string) => id !== productData.link);
    localStorage.setItem("wishlist", JSON.stringify(updated));
    window.location.reload(); // or use state lifting to re-render
  };

  return (
    <div className={`${styles.wishListItemWrapper} border-b-[1px] py-[24px] cursor-pointer mt-[15px]`}>
      <div className="flex">
        <div className={`${styles.leftSec} relative md:h-[197px] sm:h-[140px] h-[100px] flex md:basis-[205px] sm:basis-[180px] basis-[140px] justify-center items-center bg-[#F7F7F7] rounded-[20px]`}>
          <Image src={productData.imageUrl} alt={productData.title} width={180} height={140} />
        </div>
        <div className={`${styles.rightSec} w-full ${lang === "en" ? "sm:pl-[24px] pl-[10px]" : "sm:pr-[24px] pr-[10px]"}`}>
          <div className="flex justify-end">
            <button onClick={removeFromWishlist}>
              <Icon icon="icon-cancel-circle" className="text-[#4D4D4D] text-[20px]" />
            </button>
          </div>
          <div className="flex flex-col justify-between">
            <div className="pb-[35px]">
              <h4 className="text-[18px] font-semibold">{productData.title}</h4>
              <h6 className="text-[14px]">{productData.brand}</h6>
            </div>
            <div className="flex justify-between items-center">
              <h5 className="text-[18px] font-bold text-[#212121]">{productData.price}</h5>
              {/* <div className="flex gap-2">
                <button onClick={openModal} className="bg-white border border-[#08BFB0] rounded-full p-2">
                  <Icon icon="icon-share" className="text-[#4D4D4D] text-[20px]" />
                </button>
                <button className="bg-[#08BFB0] text-white px-4 py-2 rounded-[12px] font-bold">
                  Proceed to Checkout
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Checkout Button */}
      {/* <button className="xl:hidden block bg-white text-[#08BFB0] w-full py-2 rounded-[12px] font-bold border mt-4 border-[#08BFB0]">
        Proceed to Checkout
      </button> */}

      {/* <Modal isOpen={isModalOpen} closeModal={closeModal} /> */}
    </div>
  );
}


