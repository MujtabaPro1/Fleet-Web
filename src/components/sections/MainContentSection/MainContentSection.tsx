import {
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
  StarIcon,
} from "lucide-react";
import React, { useEffect, useState, useRef, ReactNode } from "react";
import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Card, CardContent } from "../../ui/card";
import { useRouter } from "next/router";
import axiosInstance from "@/service/api";

// Auto-scrolling carousel component
const CarouselScroller: React.FC<{children: ReactNode}> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;
    
    // Force a reflow to ensure scrollWidth is calculated correctly
    scrollContainer.scrollLeft = 0;
    
    // Ensure we have enough content to scroll
    const contentWidth = scrollContainer.scrollWidth;
    const containerWidth = scrollContainer.clientWidth;
    
    // Only auto-scroll if there's overflow content
    if (contentWidth <= containerWidth) return;
    
    // Initialize position and speed
    let position = 0;
    const speed = 1; // pixels per frame
    let animationFrameId: number;
    let isPaused = false;
    
    const scroll = () => {
      if (!scrollContainer || isPaused) return;
      
      // Increment position and apply it
      position = (position + speed) % (contentWidth / 2);
      scrollContainer.scrollLeft = position;
      
      // Continue animation loop
      animationFrameId = requestAnimationFrame(scroll);
    };
    
    // Start scrolling animation
    animationFrameId = requestAnimationFrame(scroll);
    
    // Pause on hover/touch
    const pauseScroll = () => {
      isPaused = true;
    };
    
    // Resume on mouse leave/touch end
    const resumeScroll = () => {
      isPaused = false;
      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(scroll);
      }
    };
    
    // Add event listeners
    scrollContainer.addEventListener('mouseenter', pauseScroll);
    scrollContainer.addEventListener('touchstart', pauseScroll);
    scrollContainer.addEventListener('mouseleave', resumeScroll);
    scrollContainer.addEventListener('touchend', resumeScroll);
    
    // Clean up on component unmount
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      scrollContainer.removeEventListener('mouseenter', pauseScroll);
      scrollContainer.removeEventListener('touchstart', pauseScroll);
      scrollContainer.removeEventListener('mouseleave', resumeScroll);
      scrollContainer.removeEventListener('touchend', resumeScroll);
    };
  }, []);
  
  return <div ref={scrollRef} className="overflow-hidden">{children}</div>;
};

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

const partnerLogos = [
  { src: "/assets/images/5f7d102e662c0b5e1078ab62-stgeorge-p-500.png", width: "w-[152px]" },
  { src: "/assets/images/anz-2-logo-png-transparent.png", width: "w-[145px]" },
  { src: "/assets/images/bank-of-melbourne-seeklogo.png", width: "w-[171px]" },
  { src: "/assets/images/bank-sa-logo-svg.png", width: "w-[100px]" },
  { src: "/assets/images/macquarie-group-logo-svg.png", width: "w-[232px]" },
  { src: "/assets/images/national-australia-bank-svg.png", width: "w-[115px]" },
  { src: "/assets/images/westpac-logo-svg.png", width: "w-[125px]" },
];


const VehicleCard = ({
  image,
  name = "Toyota Corolla Cross",
  type = "SUV",
  fuel = "Petrol, Hybrid",
  price = "288",
  width = "w-full",
  router,
  id,
  tags = [],
}: { 
  image: string; 
  name?: string;
  type?: string;
  fuel?: string;
  price?: string;
  width?: string; 
  router?: any;
  id?: string;
  tags?: string[];
}) => {
  // Check if image is a URL or a CSS class
  const isImageUrl = image && (image.startsWith('http') || image.startsWith('/'));
  
  return (
  <Card
    className={`${width} h-full border border-solid shadow-sm overflow-hidden rounded-md`}
  >
    <CardContent className="flex relative bg-white flex-col items-center gap-4 pt-8 pb-4 px-4">
      {isImageUrl ? (
        <img 
          src={image} 
          alt={name}
          className="h-[200px] w-full rounded-md object-contain object-center"
          onError={(e) => {
            e.currentTarget.src = "/assets/images/no-image.png";
          }}
        />
      ) : (
        <div
          className={`h-[200px] ${image} w-full rounded-md bg-contain bg-center`}
        />
      )}

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 w-9 h-9 bg-gray-50 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 z-10"
      >
        <HeartIcon className="w-4 h-4" />
      </Button>

      <Badge className="absolute top-4 left-4 bg-emerald-50 hover:bg-emerald-50 text-emerald-800 gap-1 px-2 py-0.5">
        <StarIcon className="w-3 h-3 fill-current" />
        <span className="font-medium text-xs">
          Trending
        </span>
      </Badge>

      <div className="flex flex-col items-start gap-3 w-full">
        <h3 className="font-semibold text-[#0b1c31] text-xl md:text-2xl">
          {name}
        </h3>

        <div className="flex flex-wrap items-center gap-2 w-full">

           {tags && tags.length > 0 && tags.map((tag, index) => <Badge key={index} className="bg-[#c70036] hover:bg-[#c70036] text-white gap-1 px-1.5 py-0.5">
            <span className="font-medium text-xs">
              {tag}
            </span>
          </Badge>)}


          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {type}
          </span>

          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {fuel}
          </span>
        </div>
      </div>

      <div className="flex items-end gap-3 p-3 w-full bg-gray-50 rounded mt-2">
        <div className="flex flex-col h-12 items-start gap-1 flex-1">
          <div className="font-medium text-[#4a5565] text-xs">
            STARTING AT
          </div>

          <div className="flex items-end gap-1.5 w-full">
            <div className="font-semibold text-[#c70036] text-2xl md:text-3xl">
              ${price}
            </div>

            <div className="font-medium text-[#4a5565] text-xs self-end mb-1">
              WEEKLY
            </div>
          </div>
        </div>

        <Button 
        onClick={() => router.push('/inventory/' + id)}
        className="h-auto bg-[#194170] hover:bg-[#194170]/90 rounded shadow-sm gap-1.5 px-3 py-2">
          <span className="font-medium text-white text-xs md:text-sm">
            Get A Quote
          </span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
        </Button>
      </div>
    </CardContent>
  </Card>
  );
};

const SmallVehicleCard = ({ 
  image,
  name = "Toyota Corolla Cross",
  type = "SUV",
  fuel = "Petrol, Hybrid",
  price = "288",
  router,
  id,
  tags = [],
}: { 
  image: string;
  name?: string;
  type?: string;
  fuel?: string;
  price?: string;
  router?: any;
  id?: string;
  tags?: string[];
}) => {
  // Check if image is a URL or a CSS class
  const isImageUrl = image && (image.startsWith('http') || image.startsWith('/'));
  
  return (
  <Card className="w-full border border-solid shadow-sm h-full overflow-hidden rounded-md">
    <CardContent className="flex relative bg-white flex-col items-center gap-4 pt-8 pb-4 px-4">
      {isImageUrl ? (
        <img 
          src={image} 
          alt={name}
          className="h-[180px] w-full rounded-md object-cover object-center"
          onError={(e) => {
            e.currentTarget.src = "/assets/images/no-image.png";
          }}
        />
      ) : (
        <div
          className={`h-[180px] ${image} w-full rounded-md bg-cover bg-center`}
        />
      )}

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 w-9 h-9 bg-gray-50 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 z-10"
      >
        <HeartIcon className="w-4 h-4" />
      </Button>

      <Badge className="absolute top-4 left-4 bg-emerald-50 hover:bg-emerald-50 text-emerald-800 gap-1 px-2 py-0.5">
        <StarIcon className="w-3 h-3 fill-current" />
        <span className="font-medium text-xs">
          Trending
        </span>
      </Badge>

      <div className="flex flex-col items-start gap-3 w-full">
        <h3 className="font-semibold text-[#0b1c31] text-xl">
          {name}
        </h3>

        <div className="flex flex-wrap items-center gap-2 w-full">
          {tags && tags.length > 0 && tags.map((tag, index) => <Badge key={index} className="bg-[#c70036] hover:bg-[#c70036] text-white gap-1 px-1.5 py-0.5">
            <span className="font-medium text-xs">
              {tag}
            </span>
          </Badge>)}

          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {type}
          </span>

          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {fuel}
          </span>
        </div>
      </div>

      <div className="flex items-end gap-3 p-3 w-full bg-gray-50 rounded mt-2">
        <div className="flex flex-col h-12 items-start gap-1 flex-1">
          <div className="font-medium text-[#4a5565] text-xs">
            STARTING AT
          </div>

          <div className="flex items-end gap-1.5 w-full">
            <div className="font-semibold text-[#c70036] text-2xl md:text-3xl">
              ${price}
            </div>

            <div className="font-medium text-[#4a5565] text-xs self-end mb-1">
              WEEKLY
            </div>
          </div>
        </div>

        <Button 
        onClick={() => router.push('/inventory/' + id)}
        className="h-auto bg-[#194170] hover:bg-[#194170]/90 rounded shadow-sm gap-1.5 px-3 py-2">
          <span className="font-medium text-white text-xs">
            Get A Quote
          </span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
        </Button>
      </div>
    </CardContent>
  </Card>
  );
};

const TinyVehicleCard = ({ 
  image,
  name = "Toyota Corolla Cross",
  type = "SUV",
  fuel = "Petrol, Hybrid",
  price = "288",
  router,
  tags = [],
  id,
}: { 
  image: string;
  name?: string;
  type?: string;
  fuel?: string;
  price?: string;
  router?: any;
  id?: string;
  tags?: string[];
}) => {
  // Check if image is a URL or a CSS class
  const isImageUrl = image && (image.startsWith('http') || image.startsWith('/'));
  
  return (
  <Card className="w-full border border-solid shadow-sm h-full overflow-hidden rounded-md">
    <CardContent className="flex relative bg-white flex-col items-center gap-4 pt-8 pb-4 px-4">
      {isImageUrl ? (
        <img 
          src={image} 
          alt={name}
          className="h-[180px] w-full rounded-md object-cover object-center"
          onError={(e) => {
            e.currentTarget.src = "/assets/images/no-image.png";
          }}
        />
      ) : (
        <div
          className={`h-[180px] ${image} w-full rounded-md bg-cover bg-center`}
        />
      )}

      <Button
        variant="ghost"
        size="icon"
        className="absolute top-4 right-4 w-9 h-9 bg-gray-50 rounded-full border border-gray-200 shadow-sm hover:bg-gray-100 z-10"
      >
        <HeartIcon className="w-4 h-4" />
      </Button>

      <Badge className="absolute top-4 left-4 bg-emerald-50 hover:bg-emerald-50 text-emerald-800 gap-1 px-2 py-0.5">
        <StarIcon className="w-3 h-3 fill-current" />
        <span className="font-medium text-xs">
          Trending
        </span>
      </Badge>

      <div className="flex flex-col items-start gap-3 w-full">
        <h3 className="font-semibold text-[#0b1c31] text-xl">
          {name}
        </h3>

        <div className="flex flex-wrap items-center gap-2 w-full">
          {tags && tags.length > 0 && tags.map((tag, index) => <Badge key={index} className="bg-[#c70036] hover:bg-[#c70036] text-white gap-1 px-1.5 py-0.5">
            <span className="font-medium text-xs">
              {tag}
            </span>
          </Badge>)}

          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {type}
          </span>

          <div className="w-1 h-1 bg-[#b3ceee] rounded-full" />

          <span className="font-medium text-[#4a5565] text-xs">
            {fuel}
          </span>
        </div>
      </div>

      <div className="flex items-end gap-3 p-3 w-full bg-gray-50 rounded mt-2">
        <div className="flex flex-col h-12 items-start gap-1 flex-1">
          <div className="font-medium text-[#4a5565] text-xs">
            STARTING AT
          </div>

          <div className="flex items-end gap-1.5 w-full">
            <div className="font-semibold text-[#c70036] text-2xl md:text-3xl">
              ${price}
            </div>

            <div className="font-medium text-[#4a5565] text-xs self-end mb-1">
              WEEKLY
            </div>
          </div>
        </div>

        <Button 
        onClick={() => router.push('/inventory/' + id)}
        className="h-auto bg-[#194170] hover:bg-[#194170]/90 rounded shadow-sm gap-1.5 px-3 py-2">
          <span className="font-medium text-white text-xs">
            Get A Quote
          </span>
          <ArrowRightIcon className="w-3.5 h-3.5 text-white" />
        </Button>
      </div>
    </CardContent>
  </Card>
  );
};

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
      <div className="flex flex-col items-center justify-center gap-12 self-stretch w-full">
        <div className="flex flex-col items-start gap-6 self-stretch w-full">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 w-full">
            <h2 className="font-semibold text-[#101828] text-2xl md:text-3xl leading-tight">
              Unlock Limited-Time Leasing Deals on Cars, SUVs &amp; Fleets
            </h2>

            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => router.push("/inventory")}
                className="h-auto px-3 py-2 gap-1.5 hover:bg-transparent text-[#194170]"
              >
                <span className="font-medium text-sm">
                  View all
                </span>
              </Button>
              
          
            </div>
          </div>

          <div className="relative w-full">
            <div 
              id="main-vehicles-carousel"
              className="overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
            >
              <div className="flex gap-6 min-w-max">
                {offers.map((offer: any, index) => (
                  <div key={index} className="w-[350px] lg:w-[380px] flex-shrink-0">
                    <VehicleCard
                      image={offer.NVIC ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${offer.NVIC}` : "/assets/images/no-image.png"}
                      name={offer.title}
                      type={offer.bodyType}
                      fuel={offer.selectedVariant?.variant}
                      price={offer.selectedVariant.weeklyPrice}
                      router={router}
                      id={offer.slug}
                      tags={offer.tags}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Button 
        onClick={() => router.push("/inventory")}
        className="w-auto h-auto bg-[#194170] hover:bg-[#194170]/90 rounded shadow-sm gap-2 px-6 py-3 mt-4">
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

                  <div className="font-semibold text-[#101828] text-xl md:text-2xl text-center">
                    {step.title}
                  </div>
                </div>

                <img
                  className="h-[120px] md:h-[150px] w-auto object-contain"
                  alt={step.title}
                  src={step.image}
                />

                <p className="text-[#4a5565] text-base text-center">
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
          <h3 className="font-semibold text-[#101828] text-xl">Popular Brands</h3>
        </div>
        
        <CarouselScroller>
          <div className="pb-4 hide-scrollbar" id="brand-carousel">
            <div className="flex items-center gap-12 mt-4 px-2 animate-scroll">
              {/* First set of logos */}
              <img onClick={() => router.push('/inventory?brand=Tesla')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Tesla" src="/assets/images/brands/tesla.png" />
              <img onClick={() => router.push('/inventory?brand=Kia')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Kia" src="/assets/images/brands/kia.png" />
              <img onClick={() => router.push('/inventory?brand=BMW')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="BMW" src="/assets/images/brands/bmw.png" />
              <img onClick={() => router.push('/inventory?brand=Ram')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Ram" src="/assets/images/brands/ram.png" />
              <img onClick={() => router.push('/inventory?brand=Volvo')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Volvo" src="/assets/images/brands/volvo.png" />
              <img onClick={() => router.push('/inventory?brand=Ford')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Ford" src="/assets/images/brands/ford.png" />
              <img onClick={() => router.push('/inventory?brand=Nissan')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Nissan" src="/assets/images/brands/nissan.png" />
              <img onClick={() => router.push('/inventory?brand=Jeep')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Jeep" src="/assets/images/brands/jeep.png" />
              <img onClick={() => router.push('/inventory?brand=Volkswagen')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Volkswagen" src="/assets/images/brands/vv.png" />
              <img onClick={() => router.push('/inventory?brand=Hyundai')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Hyundai" src="/assets/images/brands/hyundai.png" />
              <img onClick={() => router.push('/inventory?brand=Mercedes-Benz')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Mercedes" src="/assets/images/brands/benz.png" />
                
              {/* Duplicate logos for seamless scrolling */}
              <img onClick={() => router.push('/inventory?brand=Tesla')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Tesla" src="/assets/images/brands/tesla.png" />
              <img onClick={() => router.push('/inventory?brand=Kia')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Kia" src="/assets/images/brands/kia.png" />
              <img onClick={() => router.push('/inventory?brand=BMW')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="BMW" src="/assets/images/brands/bmw.png" />
              <img onClick={() => router.push('/inventory?brand=Ram')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Ram" src="/assets/images/brands/ram.png" />
              <img onClick={() => router.push('/inventory?brand=Volvo')} 
                className="w-[100px] h-[40px] object-contain cursor-pointer" 
                alt="Volvo" src="/assets/images/brands/volvo.png" />
            </div>
          </div>
        </CarouselScroller>
        
        <style jsx global>{`
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
      </div>

      {/* Popular Hatchback section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
          <h2 className="font-semibold text-[#101828] text-2xl md:text-3xl">
            Popular Hatchback for Business Lease
          </h2>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/inventory")}
              className="h-auto px-3 py-2 hover:bg-transparent text-[#194170]"
            >
              <span className="font-medium text-sm">
                View all
              </span>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full"
                onClick={() => {
                  const container = document.getElementById('utes-carousel');
                  if (container) {
                    container.scrollBy({ left: -350, behavior: 'smooth' });
                  }
                }}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-[#101828] hover:bg-[#101828]/90 rounded-full"
                onClick={() => {
                  const container = document.getElementById('hatchback-carousel');
                  if (container) {
                    container.scrollBy({ left: 350, behavior: 'smooth' });
                  }
                }}
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div 
            id="hatchback-carousel"
            className="overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-6 min-w-max">
              {bodyTypeOffers['Popular Hatchback'].map((vehicle: any, index: number) => (
                <div key={index} className="w-[350px] flex-shrink-0">
                  <SmallVehicleCard 
                      image={vehicle.NVIC ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${vehicle.NVIC}` : "/assets/images/no-image.png"}
                      name={vehicle.title}
                      type={vehicle.bodyType}
                      fuel={vehicle.selectedVariant?.variant}
                      price={vehicle.selectedVariant.weeklyPrice}
                    router={router}
                      id={vehicle.slug}
                      tags={vehicle.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Product Offerings section */}
      <div className="flex flex-col w-full items-start gap-12">
        <div className="flex flex-col md:flex-row justify-between items-center w-full gap-6">
          <div className="flex flex-col items-center md:items-start gap-4 flex-1">
            <h2 className="font-semibold text-[#101828] text-3xl md:text-4xl text-center md:text-left">
              Product Offerings
            </h2>

            <p className="text-[#4a5565] text-lg text-center md:text-left">
              Choose the lease that fits your fleet and budget.
            </p>
          </div>

          <Button
            variant="ghost"
            onClick={() => router.push("/inventory")}
            className="h-auto px-3 py-2 hover:bg-transparent text-[#194170]"
          >
            <span className="font-medium text-sm">
              View all
            </span>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {productOfferings.map((product, index) => (
            <Card
              key={index}
              className="flex flex-col h-full border border-solid shadow-sm overflow-hidden"
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
              {partnerLogos.map((logo, index) => (
                <img
                  key={index}
                  className="h-8 md:h-10 w-auto max-w-[150px] object-contain flex-shrink-0"
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
              className="w-full border border-solid shadow-sm overflow-hidden h-full"
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
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
          <h2 className="font-semibold text-[#101828] text-2xl md:text-3xl">
            Popular Sedans for Business Lease
          </h2>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/inventory")}
              className="h-auto px-3 py-2 hover:bg-transparent text-[#194170]"
            >
              <span className="font-medium text-sm">
                View all
              </span>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full"
                onClick={() => {
                  const container = document.getElementById('suvs-carousel');
                  if (container) {
                    container.scrollBy({ left: -350, behavior: 'smooth' });
                  }
                }}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-[#101828] hover:bg-[#101828]/90 rounded-full"
                onClick={() => {
                  const container = document.getElementById('suvs-carousel');
                  if (container) {
                    container.scrollBy({ left: 350, behavior: 'smooth' });
                  }
                }}
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div 
            id="suvs-carousel"
            className="overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-6 min-w-max">
              {bodyTypeOffers['Popular Sedan'].map((vehicle: any, index: number) => (
                <div key={index} className="w-[350px] flex-shrink-0">
                  <TinyVehicleCard 
                    image={vehicle.NVIC ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${vehicle.NVIC}` : "/assets/images/no-image.png"}
                    name={vehicle.title}
                    type={vehicle.bodyType}
                    fuel={vehicle.selectedVariant?.variant}
                    price={vehicle?.selectedVariant?.weeklyPrice}
                    router={router}
                    id={vehicle.slug}
                    tags={vehicle.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Vans section */}
      <div className="flex flex-col items-start gap-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
          <h2 className="font-semibold text-[#101828] text-2xl md:text-3xl">
            Popular Vans for Business Lease
          </h2>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => router.push("/inventory")}
              className="h-auto px-3 py-2 hover:bg-transparent text-[#194170]"
            >
              <span className="font-medium text-sm">
                View all
              </span>
            </Button>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full"
                onClick={() => {
                  const container = document.getElementById('vans-carousel');
                  if (container) {
                    container.scrollBy({ left: -350, behavior: 'smooth' });
                  }
                }}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="w-9 h-9 bg-[#101828] hover:bg-[#101828]/90 rounded-full"
                onClick={() => {
                  const container = document.getElementById('vans-carousel');
                  if (container) {
                    container.scrollBy({ left: 350, behavior: 'smooth' });
                  }
                }}
              >
                <ChevronRightIcon className="w-5 h-5 text-white" />
              </Button>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <div 
            id="vans-carousel"
            className="overflow-x-auto pb-4 hide-scrollbar scroll-smooth"
          >
            <div className="flex gap-6 min-w-max">
              {bodyTypeOffers['Popular Van'].map((vehicle: any, index: number) => (
                <div key={index} className="w-[350px] flex-shrink-0">
                  <TinyVehicleCard 
                    image={vehicle.NVIC ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${vehicle.NVIC}` : "/assets/images/no-image.png"}
                    name={vehicle.title}
                    type={vehicle.bodyType}
                    fuel={vehicle.fuel}
                    price={vehicle?.selectedVariant?.weeklyPrice}
                    id={vehicle.slug}
                    router={router}
                    tags={vehicle.tags}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
