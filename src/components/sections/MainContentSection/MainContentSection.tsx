import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "lucide-react";
import React, { useEffect, useState, useRef, ReactNode } from "react";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { useRouter } from "next/router";
import axiosInstance from "@/service/api";
import { VehiclesCarousel } from "@/components/carousels/VehiclesCarousel";
import { VehicleCard } from "@/components/vehicle-card";
import { Carousel } from 'react-responsive-carousel'

// Brands array for carousel
const mobileBrands = [
  // Mobile view - 4 brands per slide
  [
    { name: 'Tesla', src: '/assets/images/brands/tesla.png' },
    { name: 'Kia', src: '/assets/images/brands/kia.png' },
    { name: 'BMW', src: '/assets/images/brands/bmw.png' },
    { name: 'Ram', src: '/assets/images/brands/ram.png' },
  ],
  [
    { name: 'Volvo', src: '/assets/images/brands/volvo.png' },
    { name: 'Ford', src: '/assets/images/brands/ford.png' },
    { name: 'Nissan', src: '/assets/images/brands/nissan.png' },
    { name: 'Jeep', src: '/assets/images/brands/jeep.png' },
  ],
  [
    { name: 'Volkswagen', src: '/assets/images/brands/vv.png' },
    { name: 'Hyundai', src: '/assets/images/brands/hyundai.png' },
    { name: 'Mercedes-Benz', src: '/assets/images/brands/benz.png' },
    { name: 'Tesla', src: '/assets/images/brands/tesla.png' },
  ],
];

const desktopBrands = [
  // Desktop view - 8 brands per slide
  [
    { name: 'Tesla', src: '/assets/images/brands/tesla.png' },
    { name: 'Kia', src: '/assets/images/brands/kia.png' },
    { name: 'BMW', src: '/assets/images/brands/bmw.png' },
    { name: 'Ram', src: '/assets/images/brands/ram.png' },
    { name: 'Volvo', src: '/assets/images/brands/volvo.png' },
    { name: 'Ford', src: '/assets/images/brands/ford.png' },
    { name: 'Nissan', src: '/assets/images/brands/nissan.png' },
    { name: 'Jeep', src: '/assets/images/brands/jeep.png' },
  ],
  [
    { name: 'Volkswagen', src: '/assets/images/brands/vv.png' },
    { name: 'Hyundai', src: '/assets/images/brands/hyundai.png' },
    { name: 'Mercedes-Benz', src: '/assets/images/brands/benz.png' },
    { name: 'Tesla', src: '/assets/images/brands/tesla.png' },
    { name: 'Kia', src: '/assets/images/brands/kia.png' },
    { name: 'BMW', src: '/assets/images/brands/bmw.png' },
    { name: 'Ram', src: '/assets/images/brands/ram.png' },
    { name: 'Volvo', src: '/assets/images/brands/volvo.png' },
  ],
];

// Using public paths instead of imports
const dollarSvg = "/assets/images/svg/dollar.svg";
const personChalkboardSvg = "/assets/images/svg/person-chalkboard.svg";

const orderRideSvg = "/assets/images/svg/undraw_order-ride_4gaq.svg";
const confirmationSvg = "/assets/images/svg/undraw_confirmation_31jc.svg";
const orderCarSvg = "/assets/images/svg/undraw_order-a-car_x5mq.svg";
const fillFormsSvg = "/assets/images/svg/undraw_fill-forms_npwp.svg";






const promoCards = [
  {
    bgColor: "bg-[#ecf3fb]",
    iconBg: "bg-[#fafcfe]",
    icon: dollarSvg,
    title: "Save 7¢ per litre with your Caltex Fuel Card!",
    description:
      "Enjoy everyday savings on fuel — exclusively for Caltex Fuel Card holders.",
  },
  {
    bgColor: "bg-[#fef9c2]",
    iconBg: "bg-yellow-50",
    icon: personChalkboardSvg,
    title: "Optimize Your Fleet with a Free Consultation",
    description:
      "Discover smarter ways to manage vehicles, reduce expenses, and boost productivity.",
  },
];

const processSteps = [
  {
    step: "Step 1",
    title: "Pre-Approval",
    image: confirmationSvg,
    description:
      "Check your eligibility and proposal in minutes. Perfect for ABN holders; get clarity on available finance and lease options before you commit.",
  },
  {
    step: "Step 2",
    title: "Vehicle Sourcing & Procurement",
    image: orderCarSvg,
    description:
      "We source vehicles directly from our dealer network, securing fleet discounts to maximise your savings. Our commercial partnerships ensure ABN holders get access to pricing usually reserved for large fleets.",
  },
  {
    step: "Step 3",
    title: "Finance and Leasing Application",
    image: fillFormsSvg,
    description:
      "Our finance and leasing team handles the paperwork and submits your application directly to leading lenders, saving you time and hassle.",
  },
  {
    step: "Step 4",
    title: "Settlement & Drive Away",
    image: orderRideSvg,
    description:
      "Once approved, we finalise the paperwork and arrange delivery so you can hit the road without delays. Whether it's a single vehicle or a growing fleet, we scale the settlement process to match your business needs.",
  },
];

const productOfferings = [
  {
    title: "Chattel Mortgage",
    description:
      'A chattel mortgage is a commercial loan used to purchase a "chattel" (an asset like a vehicle or equipment), which is then used as security for the loan.',
  },
  {
    title: "Finance Lease",
    description:
      "Finance Lease: A finance lease is a long-term rental agreement where the finance company buys the asset and leases it to your business for a fixed period.",
  },
  {
    title: "Operating Lease",
    description:
      "An operating lease is a rental agreement that provides your business with the use of an asset for a shorter term than its useful life.",
  },
];

const additionalProducts = [
  {
    title: "Business overdraft",
    description:
      "A revolving line of credit linked to a business transaction account, providing access to funds up to an approved limit. It is used for short-term expenses like wages or stock purchases, and interest is only charged on the drawn down amount.",
    gridPosition: "row-[1_/_2] col-[1_/_2]",
    height: "h-fit",
  },
  {
    title: "Line of credit",
    description:
      "A separate account that offers a reusable credit limit, similar to an overdraft but often used for slightly larger or medium-term needs. Businesses can draw funds, repay them, and draw again without reapplying, paying interest only on the amount used.",
    gridPosition: "row-[1_/_2] col-[2_/_3]",
    height: "h-fit",
  },
  {
    title: "Invoice finance",
    description:
      "A way for businesses to manage cash flow by using unpaid invoices to access immediate working capital. It is also known as debtor or accounts receivable finance.",
    gridPosition: "row-[1_/_2] col-[3_/_4]",
    height: "h-full",
    alignSelf: "[align-self:start]",
  },
  {
    title: "Trade finance",
    description:
      "hort-term working capital to support domestic and international trade transactions, used to bridge the funding gap between paying suppliers for stock and receiving payment from customers.",
    gridPosition: "row-[2_/_3] col-[1_/_2]",
    height: "h-[254px]",
    alignSelf: "[align-self:start]",
  },
  {
    title: "Commercial property loan",
    description:
      "A specialized loan for purchasing, developing, or refinancing commercial real estate, such as office buildings, warehouses, or retail spaces. It typically involves larger amounts and can have longer repayment periods than residential loans.",
    gridPosition: "row-[2_/_3] col-[2_/_3]",
    height: "h-fit",
  },
  {
    title: "Self-Employed Residential Loans",
    description:
      "A residential loan for a self-employed person is a mortgage used to purchase, build, or renovate a residential property, but with different income verification requirements than for a salaried employee.",
    gridPosition: "row-[2_/_3] col-[3_/_4]",
    height: "h-fit",
  },
];

// New partner logos list sourced from public/assets/images/partner-brand
// name is derived from the filename for easier integration
const partnerLogosV1 = [
  {
    name: "Affordable Car Loans",
    src: "/assets/images/partner-brand/affordable-car-loans.png",
    width: "w-[152px]",
  },
  {
    name: "Alex Bank",
    src: "/assets/images/partner-brand/Alex-Bank.png",
    width: "w-[152px]",
  },
  {
    name: "AMMF",
    src: "/assets/images/partner-brand/AMMF.png",
    width: "w-[152px]",
  },
  {
    name: "Angle Finance",
    src: "/assets/images/partner-brand/Angle-Finance.png",
    width: "w-[152px]",
  },
  {
    name: "ANZ",
    src: "/assets/images/partner-brand/ANZ.png",
    width: "w-[152px]",
  },
  {
    name: "Automotive Financial Services",
    src: "/assets/images/partner-brand/Automotive-Financial-Services.png",
    width: "w-[152px]",
  },
  {
    name: "Azora",
    src: "/assets/images/partner-brand/azora.png",
    width: "w-[152px]",
  },
  {
    name: "Banjo Loans",
    src: "/assets/images/partner-brand/Banjo-Loans.png",
    width: "w-[152px]",
  },
  {
    name: "Bizcap",
    src: "/assets/images/partner-brand/bizcap.png",
    width: "w-[152px]",
  },
  {
    name: "BOQ",
    src: "/assets/images/partner-brand/BOQ.png",
    width: "w-[152px]",
  },
  {
    name: "Branded",
    src: "/assets/images/partner-brand/Branded.png",
    width: "w-[152px]",
  },
  {
    name: "Capital Finance",
    src: "/assets/images/partner-brand/capital-finance.png",
    width: "w-[152px]",
  },
  {
    name: "Carstart",
    src: "/assets/images/partner-brand/carstart.png",
    width: "w-[152px]",
  },
  {
    name: "CBA",
    src: "/assets/images/partner-brand/CBA.png",
    width: "w-[152px]",
  },
  {
    name: "Dynamoney",
    src: "/assets/images/partner-brand/dynamoney.png",
    width: "w-[152px]",
  },
  {
    name: "Earlypay",
    src: "/assets/images/partner-brand/Earlypay.png",
    width: "w-[152px]",
  },
  {
    name: "Finance One",
    src: "/assets/images/partner-brand/Finance-One.png",
    width: "w-[152px]",
  },
  {
    name: "Firstmac",
    src: "/assets/images/partner-brand/Firstmac.png",
    width: "w-[152px]",
  },
  {
    name: "FLEXI",
    src: "/assets/images/partner-brand/FLEXI.png",
    width: "w-[152px]",
  },
  {
    name: "Latitude Horizontal",
    src: "/assets/images/partner-brand/Latitude-Horizontal.png",
    width: "w-[152px]",
  },
  {
    name: "Liberty",
    src: "/assets/images/partner-brand/Liberty.png",
    width: "w-[152px]",
  },
  {
    name: "Metro Finance",
    src: "/assets/images/partner-brand/Metro-Finance.png",
    width: "w-[152px]",
  },
  {
    name: "Money3",
    src: "/assets/images/partner-brand/money3.png",
    width: "w-[152px]",
  },
  {
    name: "MONEYME Autopay",
    src: "/assets/images/partner-brand/MONEYME-Autopay.png",
    width: "w-[152px]",
  },
  {
    name: "MONEYME SocietyOne",
    src: "/assets/images/partner-brand/MONEYME-SocietyOne.png",
    width: "w-[152px]",
  },
  {
    name: "MoneyPlace",
    src: "/assets/images/partner-brand/MoneyPlace.png",
    width: "w-[152px]",
  },
  {
    name: "Moneytech",
    src: "/assets/images/partner-brand/Moneytech_Logos.png",
    width: "w-[152px]",
  },
  {
    name: "Morris",
    src: "/assets/images/partner-brand/morris.png",
    width: "w-[152px]",
  },
  {
    name: "Moula",
    src: "/assets/images/partner-brand/Moula.png",
    width: "w-[152px]",
  },
  {
    name: "Multipli",
    src: "/assets/images/partner-brand/multipli.png",
    width: "w-[152px]",
  },
  {
    name: "NAB",
    src: "/assets/images/partner-brand/NAB.png",
    width: "w-[152px]",
  },
  {
    name: "NOW Finance",
    src: "/assets/images/partner-brand/NOW-Finance.png",
    width: "w-[152px]",
  },
  {
    name: "Pepper",
    src: "/assets/images/partner-brand/Pepper.png",
    width: "w-[152px]",
  },
  {
    name: "Plenti",
    src: "/assets/images/partner-brand/Plenti.png",
    width: "w-[152px]",
  },
  {
    name: "Prospa",
    src: "/assets/images/partner-brand/Prospa.png",
    width: "w-[152px]",
  },
  {
    name: "RACV",
    src: "/assets/images/partner-brand/racv.png",
    width: "w-[152px]",
  },
  {
    name: "Resimac",
    src: "/assets/images/partner-brand/Resimac.png",
    width: "w-[152px]",
  },
  {
    name: "Scottish Pacific",
    src: "/assets/images/partner-brand/Scottish-Pacific.png",
    width: "w-[152px]",
  },
  {
    name: "Selfco",
    src: "/assets/images/partner-brand/Selfco.png",
    width: "w-[152px]",
  },
  {
    name: "Shift",
    src: "/assets/images/partner-brand/Shift.png",
    width: "w-[152px]",
  },
  {
    name: "The Asset Financier",
    src: "/assets/images/partner-brand/The-Asset-Financier.png",
    width: "w-[152px]",
  },
  {
    name: "UME Loans",
    src: "/assets/images/partner-brand/umeloans.png",
    width: "w-[152px]",
  },
  {
    name: "Westpac",
    src: "/assets/images/partner-brand/Westpac.png",
    width: "w-[152px]",
  },
  {
    name: "WISR",
    src: "/assets/images/partner-brand/WISR.png",
    width: "w-[152px]",
  },
];






export const MainContentSection = (): JSX.Element => {
  const router = useRouter();
  const [offers, setOffers] = useState([]);
  const [bodyTypeOffers, setBodyTypeOffers] = useState({
    'Popular Hatchback': [],
    'Popular Sedan': [],
    'Popular Van': [],
  });

  useEffect(() => {
    getLimitedTimeDeals();
    getByBodyType('Popular Hatchback');
    getByBodyType('Popular Sedan');
    getByBodyType('Popular Van');
  
  }, []); 

  const getLimitedTimeDeals = async () => {
    // Make the API call
    const params = new URLSearchParams();
    params.set('tags', 'Limited Time Offer');
    axiosInstance.get(`/v1/cars/search?${params.toString()}`)
      .then(response => {
        setOffers(response.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });

  };

  const getByBodyType = async (bodyType: string) => {
    // Make the API call
    const params = new URLSearchParams();
    params.set('tags', bodyType);
    axiosInstance.get(`/v1/cars/search?${params.toString()}`)
      .then(response => {
        console.log(response.data.data);
        setBodyTypeOffers(prev => ({
          ...prev,
          [bodyType]: response.data.data || []
        }));
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });

  };

  
  
  return (
    <section className="flex flex-col w-full items-start gap-16 py-12 md:py-16">
      {/* Promo cards section */}
      <div className="hidden md:flex items-center gap-4 self-stretch w-full">
        <Button
          variant="ghost"
          size="icon"
          className="w-[34px] h-[34px] flex-shrink-0 bg-[#194170] hover:bg-[#194170]/90 rounded-full p-2.5"
        >
          <ChevronLeftIcon className="w-5 h-5 text-white" />
        </Button>

        {promoCards.map((card, index) => (
          <Card
            key={index}
            className={`flex-1 ${card.bgColor} shadow-shadow-sm border-0`}
          >
            <CardContent className="flex items-start gap-7 p-5">
              <div
                className={`flex w-[53px] h-[51px] items-center justify-center gap-1.5 px-3 py-2 ${card.iconBg} rounded border border-solid shadow-shadow-xs flex-shrink-0`}
              >
                <img className="w-[37px] h-[37px]" alt="Icon" src={card.icon} />
              </div>

              <div className="flex flex-col items-start gap-3.5 flex-1">
                <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
                  <div className="flex flex-col items-start gap-3 self-stretch w-full">
                    <h3 className="self-stretch font-figtree font-semibold text-[#101828] text-lg tracking-[-0.80px] leading-[18px]">
                      {card.title}
                    </h3>

                    <p className="self-stretch font-figtree font-normal text-[#4a5565] text-xs tracking-[0] leading-4">
                      {card.description}
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="h-auto px-0 py-1.5 gap-1.5 hover:bg-transparent"
                >
                  <span className="font-figtree font-medium text-[#101828] text-xs tracking-[0] leading-5">
                    Learn more
                  </span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Button
          variant="ghost"
          size="icon"
          className="w-[34px] h-[34px] flex-shrink-0 bg-[#194170] hover:bg-[#194170]/90 rounded-full p-2.5"
        >
          <ChevronRightIcon className="w-5 h-5 text-white" />
        </Button>
      </div>
      
      {/* Mobile promo cards section */}
      <div className="flex md:hidden flex-col gap-4 self-stretch w-full">
        {promoCards.map((card, index) => (
          <Card
            key={index}
            className={`w-full ${card.bgColor} shadow-shadow-sm border-0`}
          >
            <CardContent className="flex items-start gap-4 p-4">
              <div
                className={`flex w-[45px] h-[45px] items-center justify-center gap-1.5 px-2 py-2 ${card.iconBg} rounded border border-solid shadow-shadow-xs flex-shrink-0`}
              >
                <img className="w-[30px] h-[30px]" alt="Icon" src={card.icon} />
              </div>

              <div className="flex flex-col items-start gap-3 flex-1">
                <div className="flex flex-col items-start gap-2 self-stretch w-full">
                  <div className="flex flex-col items-start gap-2 self-stretch w-full">
                    <h3 className="self-stretch font-figtree font-semibold text-[#101828] text-base tracking-[-0.50px] leading-[18px]">
                      {card.title}
                    </h3>

                    <p className="self-stretch font-figtree font-normal text-[#4a5565] text-xs tracking-[0] leading-4">
                      {card.description}
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="h-auto px-0 py-1 gap-1.5 hover:bg-transparent"
                >
                  <span className="font-figtree font-medium text-[#101828] text-xs tracking-[0] leading-5">
                    Learn more
                  </span>
                  <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Vehicle listings section */}
      <div className="flex flex-col items-center justify-center gap-8 self-stretch w-full">
        <VehiclesCarousel
          title="Unlock Limited-Time Leasing Deals on Cars, SUVs & Fleets"
          actionLabel="View all"
          onAction={() => router.push("/inventory")}
          cars={offers}
          showMultipleColumns={true}
          getCardKey={(offer: any) => offer?.slug || offer?.id || offer?.title}
          renderCard={(offer: any) => (
                    <VehicleCard
              image={
                offer?.NVIC
                  ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${offer.NVIC}`
                  : "/assets/images/no-image.png"
              }
              name={offer?.title}
              type={offer?.bodyType}
              fuel={offer?.selectedVariant?.variant}
              price={offer?.selectedVariant?.weeklyPrice}
                      router={router}
              id={offer?.slug}
              isTrending={offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("trending")
                )?.length > 0}
              tags={
                offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("limited")
                ) ?? offer?.tags
              }
            />
          )}
        />

        <Button 
        onClick={() => router.push("/inventory")}
          className="w-auto h-auto bg-[#194170] hover:bg-[#194170]/90 rounded shadow-sm gap-2 px-6 py-3 mt-4"
        >
          <span className="font-medium text-white text-sm">
            View all vehicles
          </span>
          <ArrowRightIcon className="w-4 h-4 text-white" />
        </Button>
      </div>

      {/* 4-step process section */}
      <div className="flex flex-col w-full items-start gap-12">
        <div className="flex flex-col items-center gap-4 w-full text-center">
          <h2 className="font-semibold text-[#101828] text-3xl md:text-4xl leading-tight max-w-3xl mx-auto">
            From Quote to Keys: Your Simple 4-Step Leasing Process
          </h2>

          <p className="text-[#4a5565] text-lg max-w-2xl mx-auto">
            We simplify vehicle leasing for Australian businesses. Our
            streamlined four-step process eliminates complexity &amp; provides
            clear expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="border border-solid overflow-hidden h-full"
            >
              <CardContent className="flex bg-white flex-col items-center gap-6 p-6 relative h-full">
                <div className="flex flex-col items-center gap-2 w-full">
                  <div className="font-semibold text-[#4a5565] text-base text-center">
                    {step.step}
                  </div>

                  <div className="font-semibold text-[#101828] text-xl md:text-2xl text-center min-h-[64px]">
                    {step.title}
                  </div>
                </div>

                <img
                  className="h-[120px] md:h-[150px] w-auto object-contain"
                  alt={step.title}
                  src={step.image}
                />

                <p className="text-[#4a5565] text-base text-start">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Brand logos section */}
      <div className="w-full py-6 relative">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-[#101828] text-2xl lg:text-3xl">Popular Brands</h3>
        </div>
        
        <div className="w-full py-8 bg-gray-50">
          {/* Mobile Carousel */}
          <div className="md:hidden">
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              showIndicators={true}
              interval={3000}
              transitionTime={500}
              className="brand-carousel"
            >
              {mobileBrands.map((brandGroup, groupIndex) => (
                <div key={`mobile-group-${groupIndex}`} className="flex items-center justify-center gap-4 px-2 py-2">
                  {brandGroup.map((brand, index) => (
                    <div
                      key={`mobile-brand-${index}`}
                      onClick={() => router.push(`/inventory?brand=${brand.name}`)}
                      className="flex items-center justify-center cursor-pointer hover:opacity-70 transition-opacity px-1"
                    >
                      <img
                        className="h-[30px] w-auto max-w-[100px] object-contain"
                        alt={brand.name}
                        src={brand.src}
                      />
            </div>
                  ))}
          </div>
              ))}
            </Carousel>
          </div>
          
          {/* Desktop Carousel */}
          <div className="hidden md:block">
            <Carousel
              autoPlay
              infiniteLoop
              showArrows={false}
              showStatus={false}
              showThumbs={false}
              showIndicators={true}
              interval={3000}
              transitionTime={500}
              className="brand-carousel"
            >
              {desktopBrands.map((brandGroup, groupIndex) => (
                <div key={`desktop-group-${groupIndex}`} className="flex items-center justify-center gap-6 lg:gap-16 px-4 py-2">
                  {brandGroup.map((brand, index) => (
                    <div
                      key={`desktop-brand-${index}`}
                      onClick={() => router.push(`/inventory?brand=${brand.name}`)}
                      className="flex  items-center justify-center cursor-pointer hover:opacity-70 transition-opacity px-2"
                    >
                      <img
                        className="h-[40px] w-auto max-w-[120px] object-contain"
                        alt={brand.name}
                        src={brand.src}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        <style jsx global>{`
            .brand-carousel .carousel .control-dots {
              display: none !important;
            }
            .brand-carousel .carousel .slide {
              min-height: auto;
              padding: 0;
            }
            .brand-carousel .carousel .slider-wrapper {
              margin: 0;
          }
        `}</style>
        </div>
      </div>

      {/* Popular Hatchback section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <VehiclesCarousel
          title="Popular Hatchback for Business Lease"
          actionLabel="View all"
          onAction={() => router.push("/inventory")}
          cars={bodyTypeOffers['Popular Hatchback']}
          getCardKey={(offer: any) => offer?.slug || offer?.id || offer?.title}
          renderCard={(offer: any) => (
                    <VehicleCard
              image={
                offer?.NVIC
                  ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${offer.NVIC}`
                  : "/assets/images/no-image.png"
              }
              name={offer?.title}
              type={offer?.bodyType}
              fuel={offer?.selectedVariant?.variant}
              price={offer?.selectedVariant?.weeklyPrice}
                      router={router}
              id={offer?.slug}
                      isTrending={offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("trending")
                )?.length > 0}
              tags={
                offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("limited")
                ) ?? offer?.tags
              }
            />
          )}
        />

      </div>

      {/* Product Offerings section */}
      <div className="flex flex-col w-full items-start gap-12">
        <div className="flex flex-col md:flex-row justify-between lg:items-center items-start  w-full gap-6">
          <div className="flex flex-col items-start gap-4 flex-1">
            <h2 className="font-semibold text-[#101828] text-2xl md:text-3xl text-left">
              Product Offerings
            </h2>

            <p className="text-[#4a5565] text-lg text-left">
              Choose the lease that fits your fleet and budget.
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={() => router.push("/inventory")}
            className="h-auto px-3 py-2 hover:bg-transparent text-[#194170]"
          >
            <span className="font-medium text-sm text-left">
              View all
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {productOfferings.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border border-solid shadow-sm overflow-hidden bg-white"
            >
              <CardContent className="flex flex-col items-start gap-6 p-6 h-full">
                <img
                  className="w-full h-48 object-cover rounded-md"
                  alt={product.title}
                  src="/assets/images/no-image.png"
                />

                <div className="flex flex-col items-start gap-4 flex-grow w-full">
                  <div className="flex flex-col items-start gap-3 w-full">
                    <h3 className="font-semibold text-[#101828] text-xl md:text-2xl">
                      {product.title}
                    </h3>

                    <p className="text-[#4a5565] text-base">
                      {product.description}
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="h-auto px-0 py-0 gap-2 hover:bg-transparent text-[#194170]"
                >
                  <span className="font-medium text-base">
                    Learn more
                  </span>
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner logos */}
        <div className="w-full py-4 rounded-lg mt-8">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex items-center gap-4 md:gap-8 min-w-max px-4">
              {partnerLogosV1.map((logo, index) => (
                <img
                  key={index}
                  className="h-[46px] md:h-[46px] w-[152px] max-w-[160px] object-cover flex-shrink-0"
                  alt="Partner logo"
                  src={logo.src}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-8">
          {additionalProducts.map((product, index) => (
            <Card
              key={index}
              className="w-full border border-solid shadow-sm overflow-hidden h-full bg-white"
            >
              <CardContent className="flex flex-col items-start gap-6 p-6 h-full">
                <div className="flex flex-col items-start gap-3 w-full flex-grow">
                  <h3 className="font-semibold text-[#101828] text-xl md:text-2xl">
                    {product.title}
                  </h3>

                  <p className="text-[#4a5565] text-base">
                    {product.description}
                  </p>
                </div>

                <Button
                  variant="ghost"
                  className="h-auto px-0 py-0 gap-2 hover:bg-transparent text-[#194170] self-start mt-auto"
                >
                  <span className="font-medium text-base">
                    Learn more
                  </span>
                  <ArrowRightIcon className="w-5 h-5 text-white" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Popular SUVs section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <VehiclesCarousel
          title="Popular Sedan for Business Lease"
          actionLabel="View all"
          onAction={() => router.push("/inventory")}
          cars={bodyTypeOffers['Popular Sedan']}
          getCardKey={(offer: any) => offer?.slug || offer?.id || offer?.title}
          renderCard={(offer: any) => (
                    <VehicleCard
              image={
                offer?.NVIC
                  ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${offer.NVIC}`
                  : "/assets/images/no-image.png"
              }
              name={offer?.title}
              type={offer?.bodyType}
              fuel={offer?.selectedVariant?.variant}
              price={offer?.selectedVariant?.weeklyPrice}
                      router={router}
              id={offer?.slug}
                      isTrending={offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("trending")
                )?.length > 0}
              tags={
                offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("limited")
                ) ?? offer?.tags
              }
            />
          )}
        />

      </div>

      {/* Popular Vans section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <VehiclesCarousel
          title="Popular Van for Business Lease"
          actionLabel="View all"
          onAction={() => router.push("/inventory")}
          cars={bodyTypeOffers['Popular Van']}
          getCardKey={(offer: any) => offer?.slug || offer?.id || offer?.title}
          renderCard={(offer: any) => (
                    <VehicleCard
              image={
                offer?.NVIC
                  ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${offer.NVIC}`
                  : "/assets/images/no-image.png"
              }
              name={offer?.title}
              type={offer?.bodyType}
              fuel={offer?.selectedVariant?.variant}
              price={offer?.selectedVariant?.weeklyPrice}
                      router={router}
              id={offer?.slug}
                      isTrending={offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("trending")
                )?.length > 0}
              tags={
                offer?.tags?.filter((tag: string) =>
                  tag.toLowerCase().includes("limited")
                ) ?? offer?.tags
              }
            />
          )}
        />

      </div>
    </section>
  );
};
