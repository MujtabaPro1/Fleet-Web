import React from 'react'
import CategoryIconGrid from '../category/category-icon-grid';
import Link from 'next/link';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../../styles/home/ShopByCategory.module.scss';

// images static
import coffee from '../../assets/images/svg/coffe.svg';
import capsules from '../../assets/images/svg/capsules.svg';
import grinders from '../../assets/images/svg/Grinders.svg';
import tea from '../../assets/images/svg/tea.svg';
import espressoMachine from '../../assets/images/svg/espresso-machine.svg';
import sweets from '../../assets/images/svg/sweets.svg';
import baristaTools from '../../assets/images/svg/barista-tools.svg';
import brewingTool from '../../assets/images/svg/brewing-tool.svg';

var data = {
  "categories": [
  {
      "title": "Coffee Beans",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": coffee,
      "catColor" : " #F3F2FC"
  },
	{
      "title": "Capsules",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": capsules,
      "catColor" : " #F2FBF4"
   },
	{
      "title": "Grinders",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": grinders,
      "catColor" : " #F2FBF4"
    },
	{
      "title": "Tea",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": tea,
      "catColor" : "#F3F2FC"
    },
	{
      "title": "Espresso Machine",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": espressoMachine,
      "catColor" : " #F1F8FA"
    },
	{
      "title": "Sweets",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": sweets,
      "catColor" : "#F2FBF4"
    },
	{
      "title": "Barista Tools",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": baristaTools,
      "catColor" : "#FCF2FA"
    },
	{
      "title": "Brewing Tool",
      "link": "https://twitter.com/kendalmintcode",
      "imageUrl": brewingTool,
      "catColor" : "#FBF8F0"
    },
    
	]
};

export default function ShopByCategory(props : any) {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
   
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 7.5,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 5.5,
          slidesToScroll: 1,
          initialSlide: 2,
          rows: 2,
    
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          rows: 2
        }
      }
    ]
  };
  return (
    <div className={`${styles.ShopByCategory} section -px-4 mbl-shop-by-cat`}>
		<div className="container mx-auto">
      <div className="flex justify-between w-full items-center head-sec">
        <h2 className='section_title my-0'>{props.sectionTitle}</h2>
      </div>
			<div className="carousel-sec">
      <Slider {...settings}>
			  {data.categories.map((category, index) => {
					return (
            <div key={category.title}>
						<CategoryIconGrid categoryData={category}  />
            </div>
					)
				})
				}
        </Slider>
			</div>
		</div>
	</div>
  )
}
