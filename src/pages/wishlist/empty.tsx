import { MyPage } from '@/components/layouts/types';
import Head from 'next/head';
import React, { useState, useEffect, Component, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/wishList/wishList.module.scss';

import Item from '../../components/common/wishlist-item/WishListItem';
import EmptyWishList from '../../components/common/wishlist-item/EmptyWishList';

const wishList: MyPage = () => {

  return (
    <>
      <Head>
        <title>Fleet Leasing Australia | WishList</title>
      </Head>
      <div className={`${styles.wishListWrapper} mt-[50px] h-[calc(100vh-50px)]`}>
        <div className='container'>
          <div className="pb-[19px] border-b-[1px]">
            <div className="flex items-center md:justify-normal justify-between">
              <h6 className='xl:text-[24px] leading-[28px] font-bold'> WishList </h6>
            </div>
          </div>
          <hr />
          <div className={`my-[150px]`}>
            <EmptyWishList />
          </div>
        </div>
      </div>
    </>
  );
};

export default wishList;
wishList.Layout = "Default";