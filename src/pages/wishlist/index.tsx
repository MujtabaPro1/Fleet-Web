import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import ProductRelated from '../../components/product-detail/product-related';
import styles from '../../styles/wishList/wishList.module.scss';

// import productImage from '../../assets/images/productImage.png';
// import productOtherImage from '../../assets/images/productOtherImage.jpg';
// import delivery from '../../assets/images/svg/delivery.svg';
import Item from '../../components/common/wishlist-item/WishListItem';
import { callMiddlewareApi } from '@/components/utils/api';

const WishList: MyPage = () => {
  const [wishlistItems, setWishlistItems] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("wishlist");
    if (!stored) return;

    const links = JSON.parse(stored);
    // Fetch product data based on links
    const fetchWishlistProducts = async () => {
      const result = await callMiddlewareApi({
        targetEndpoint: "vehicles/getProductCards",
        payload: {
          filters: { slugs: links },
        },
      });

      if (result.success) {
        setWishlistItems(result.data.data || []);
      }
    };

    fetchWishlistProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | WishList</title>
      </Head>
      <div className={`${styles.wishListWrapper} mt-[50px] h-[calc(100vh-50px)]`}>
        <div className="container">
          <div className="pb-[19px] border-b-[1px]">
            <div className="flex items-center justify-between">
              <h6 className="text-[24px] font-bold">WishList</h6>
              <span className="text-[16px] px-[5px]">({wishlistItems.length} items)</span>
            </div>
          </div>
          <hr />
          <div className={styles.itemListWrapper}>
            {wishlistItems.length > 0 ? (
              wishlistItems.map((item, index) => (
                <Item key={index} productData={item} />
              ))
            ) : (
              <p className="text-center py-10 text-gray-500">Your wishlist is empty.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};


export default WishList;
WishList.Layout = "Default";