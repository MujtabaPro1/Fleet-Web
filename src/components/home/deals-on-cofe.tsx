import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../../styles/home/DealsOnCofe.module.scss';

// images from local
import deal1 from '../../assets/images/deal1.png';
import deal2 from '../../assets/images/deal2.png';
import deal3 from '../../assets/images/deal3.png';
import deal4 from '../../assets/images/deal4.png';

export default function DealsOnCofe() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
   
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          arrows:false,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,
          arrows:false,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows:false,
        }
      }
    ]
  };
  return (
    <>
      <div className='section section-deal-on-cofee -px-4'>
        <div className='container mx-auto'>
            <h2 className='section_title'>Deals only on COFE</h2>
            <div className='m-10 deals-carousel main-wrapper'>
           
              {/* <div className="grid-deals-box flex justify-between items-center">
                <div className="new-arrival new-arrival-xs">
                  <span className="font-semibold">Upto 40% Off</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="deals">
                    <h6>Ramdan Best Deal</h6>
                    <div className="regular-price">
                      <s>SAR 80000.00</s>
                    </div>
                    <div className="sale-price">
                      <span>SAR 70000.00</span>
                    </div>
                  </div>
                  <div className='best-deal-right col-span-2'>
                    <Image src='../../assets/images/ramadan-deals.png' />
                  </div>
                </div>
              </div>
              <div className="grid-deals-box flex justify-between items-center">
                <div className="new-arrival new-arrival-xs">
                  <span className="font-semibold">Upto 40% Off</span>
                </div>
                <div className="flex justify-between  items-center">
                  <div className="deals">
                    <h6>Ramdan Best Deal</h6>
                    <div className="regular-price">
                      <s>SAR 80000.00</s>
                    </div>
                    <div className="sale-price">
                      <span>SAR 70000.00</span>
                    </div>
                  </div>
                  <div className='best-deal-right col-span-2'>
                    <Image src='../../assets/images/ramadan-deals.png' />
                  </div>
                </div>
              </div> */}
               <Slider {...settings}>
                <div className="deal-box">
                  <Link href="/" >
                    <Image src={deal1} alt="" />
                  </Link>
                </div>
                <div className="deal-box">
                  <Link href="/" >
                    <Image src={deal2} alt="" />
                  </Link>
                </div>
                <div className="deal-box">
                  <Link href="/" >
                    <Image src={deal3} alt="" />
                  </Link>
                </div>
                <div className="deal-box">
                  <Link href="/" >
                    <Image src={deal4} alt="" />
                  </Link>
                </div>
                <div className="deal-box">
                  <Link href="/" >
                    <Image src={deal4} alt="" />
                  </Link>
                </div>
              </Slider>
            </div>
        </div>
     </div>
    </>
  )
}