import {
    ArrowRightIcon,
    CheckIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    FileTextIcon,
    HeartIcon,
    HelpCircleIcon,
    HomeIcon,
    InfoIcon,
    PhoneIcon,
    ReceiptIcon,
    StarIcon,
  } from "lucide-react";
  import React from "react";
  import { Badge } from "@/components/ui/badge";
  import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
  } from "@/components/ui/tabs";
  import {
    ToggleGroup,
    ToggleGroupItem,
  } from "@/components/ui/toggle-group";
import { MyPage } from "@/components/layouts/types";
import { useRouter } from "next/router";
import { SmallVehicleCard } from "@/components/small-vehicle-card";
import { QuoteRequestDialog } from "@/components/quote-request-dialog";


const orderRideSvg = "/assets/images/svg/undraw_order-ride_4gaq.svg";
const confirmationSvg = "/assets/images/svg/undraw_confirmation_31jc.svg";
const orderCarSvg = "/assets/images/svg/undraw_order-a-car_x5mq.svg";
const fillFormsSvg = "/assets/images/svg/undraw_fill-forms_npwp.svg";



const trustSvg1 = "/assets/images/svg/trust/trust-1.svg";
const trustSvg2 = "/assets/images/svg/trust/trust-2.svg";
const trustSvg3 = "/assets/images/svg/trust/trust-3.svg";
const trustSvg4 = "/assets/images/svg/trust/trust-4.svg";
const trustSvg5 = "/assets/images/svg/trust/trust-5.svg";
const trustSvg6 = "/assets/images/svg/trust/trust-6.svg";

const starSvg = "/assets/images/svg/star-rating.svg";

import { useState } from "react";

  
  const breadcrumbItems = [
    { label: "Home", icon: HomeIcon },
    { label: "Fleet Inventory" },
    { label: "Hyundai" },
    { label: "Tucson" },
  ];
  
  const variants = [
    { id: "tuscon", label: "Tuscon", active: true },
    { id: "elite", label: "Elite", active: false },
    { id: "hybrid", label: "Hybrid", active: false },
    { id: "hybrid-elite", label: "Hybrid Elite", active: false },
    { id: "hybrid-premium", label: "Hybrid Premium", active: false },
  ];
  
  const vehicleBasics = [
    { title: "Wagon, 4 seats, 4 door", subtitle: "Body type" },
    { title: "2WD (Front Wheel Drive)", subtitle: "Drive type" },
    { title: "Unleaded Petrol", subtitle: "Fuel type" },
  ];
  
  const enginePerformance = [
    { label: "Engine", value: "Inline 4 Cylinders, 54" },
    { label: "Transmission", value: "6 speed, Automatic" },
    { label: "Power / Torque", value: "115 KW / 192 NM" },
    { label: "Fuel Efficiency", value: "8.10L / 100KM" },
  ];
  
  const safetyWarranty = [
    { label: "ANCAP Safety Rating", value: <img src={starSvg} alt="" />, rate: 3 },
    { label: "Warranty", value: "5 years / 999,000 km" },
    { label: "Service Interval", value: "12 months / 15,000 km" },
  ];
  
  const paymentFrequencies = [
    { id: "weekly", label: "Weekly", active: true },
    { id: "fortnightly", label: "Fortnightly", active: false },
    { id: "monthly", label: "Monthly", active: false },
  ];
  
  const benefits = [
    { text: "Fast 24-Hour Approvals*" },
    { text: "Zero Deposit Driveaway*" },
    { text: "No Financials Required (Up to $250K)*" },
  ];
  
  const trustFeatures = [
    { icon: trustSvg1, title: "Tailored Leasing & Finance Solutions" },
    { icon: trustSvg2, title: "Dedicated Fleet Leasing Specialists" },
    { icon: trustSvg3, title: "Nationwide Dealer Network" },
    { icon: trustSvg4, title: "Exclusive Fleet Pricing" },
    { icon: trustSvg5, title: "Average 24-Hour Approvals" },
    { icon: trustSvg6, title: "$0 Deposit Options" },
  ];
  
  const leasingSteps = [
    {
      step: "Step 1",
      title: "Pre-Approval",
      image: confirmationSvg,
      description:
        "CheckIcon your eligibility and proposal in minutes. Perfect for ABN holders; get clarity on available finance and lease options before you commit.",
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
  
  const similarVehicles = [
    {
      image: "/assets/images/car-image.png",
      title: "Toyota Corolla Cross",
      badge: "Trending",
      deal: "Limited-time deal",
      type: "SUV",
      fuel: "Petrol, Hybrid",
      price: "$288",
      frequency: "WEEKLY",
    },
    {
      image: "/assets/images/car-image.png",
      title: "Toyota Corolla Cross",
      badge: "Trending",
      deal: "Limited-time deal",
      type: "SUV",
      fuel: "Petrol, Hybrid",
      price: "$288",
      frequency: "WEEKLY",
    },
    {
      image: "/assets/images/car-image.png",
      title: "Toyota Corolla Cross",
      badge: "Trending",
      deal: "Limited-time deal",
      type: "SUV",
      fuel: "Petrol, Hybrid",
      price: "$288",
      frequency: "WEEKLY",
    },
    {
      image: "/assets/images/car-image.png",
      title: "Toyota Corolla Cross",
      badge: "Trending",
      deal: "Limited-time deal",
      type: "SUV",
      fuel: "Petrol, Hybrid",
      price: "$288",
      frequency: "WEEKLY",
    },
  ];
  
  const CarDetail: MyPage = () => {
    const router = useRouter();
    const { carID } = router.query;
    const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);  
    const [selectedVariant, setSelectedVariant] = useState(variants[0]);
    
    return (
        <div className="flex flex-col items-center gap-8 bg-gray-50 overflow-hidden">

<main className="flex flex-col max-w-full lg:max-w-[1280px] pt-[60px] md:pt-[80px] items-center gap-6 md:gap-10 px-3 md:px-4">
        <div className="flex flex-col items-start gap-8 relative">
          <Breadcrumb className="w-full overflow-x-auto pb-2">
            <BreadcrumbList className="flex items-center gap-2.5 min-w-max">
              {breadcrumbItems.map((item, index) => (
                <React.Fragment key={index}>
                  <BreadcrumbItem className="flex items-center gap-1.5">
                    {item.icon && <item.icon className="w-4 h-4" />}
                    <BreadcrumbLink className="font-medium text-[#194170] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                      {item.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator>
                      <ChevronRightIcon className="w-3.5 h-3.5" />
                    </BreadcrumbSeparator>
                  )}
                </React.Fragment>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
  
          <div className="flex flex-col lg:flex-row w-full items-start gap-6">
            <div className="flex flex-col flex-1 items-start gap-6">
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex flex-col items-start gap-5 sm:gap-7 p-4 sm:p-6">
                  <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <h1 className="[font-family:'Figtree',Helvetica] font-semibold text-[#c70036] text-3xl leading-8">
                        Hyundai Tucson Leasing
                      </h1>
                      <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg leading-5">
                        Drive your business forward with smarter leasing and
                        finance
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-3">
                    <div className="flex-1 h-[300px] md:h-[400px] bg-gray-100 rounded overflow-hidden">
                      <img
                        className="w-full h-full object-contain"
                        alt="Vehicle images"
                        src="/assets/images/dpv-banner.png"
                      />
                    </div>
                    <div className="flex flex-row md:flex-col gap-3 md:w-[100px] overflow-x-auto md:overflow-x-visible">
                      <div className="h-[80px] md:h-[128px] min-w-[80px] md:min-w-0 border-2 border-[#194170] rounded overflow-hidden cursor-pointer">
                        <img
                          className="w-full h-full object-contain"
                          alt="Vehicle front view"
                          src="/assets/images/dpv-banner.png"
                        />
                      </div>
                      <div className="h-[80px] md:h-[128px] min-w-[80px] md:min-w-0 border-2 border-transparent hover:border-[#194170] rounded overflow-hidden cursor-pointer transition-all">
                        <img
                          className="w-full h-full object-contain"
                          alt="Vehicle side view"
                          src="/assets/images/dpv-banner.png"
                        />
                      </div>
                      <div className="h-[80px] md:h-[128px] min-w-[80px] md:min-w-0 border-2 border-transparent hover:border-[#194170] rounded overflow-hidden cursor-pointer transition-all">
                        <img
                          className="w-full h-full object-contain"
                          alt="Vehicle rear view"
                          src="/assets/images/dpv-banner.png"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6">
                  <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                    <h2 className="[font-family:'Figtree',Helvetica] font-medium text-[#c70036] text-2xl leading-7">
                      See All Available Variants Below
                    </h2>
                  </div>
  
                  <div className="flex flex-col items-start justify-center gap-3 w-full">
                    <h3 className="[font-family:'Figtree',Helvetica] font-medium text-[#194170] text-lg leading-6">
                      Select a Variant
                    </h3>
                    <div className="flex flex-wrap items-start gap-3 w-full">
                      {variants.map((variant) => (
                        <Button
                          key={variant.id}
                          variant={variant.active ? "default" : "outline"}
                          className={`h-auto w-full sm:w-auto flex-1 sm:flex-none px-3 py-2 ${
                            variant.active
                              ? "bg-[#194170] text-white shadow-shadow-xs"
                              : "bg-gray-50 text-[#4a5565] border-solid shadow-shadow-xs"
                          }`}
                        >
                          <span
                            className={`font-medium text-sm leading-5 [font-family:'Figtree',Helvetica] ${variant.active ? "underline" : ""}`}
                          >
                            {variant.label}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6">
                  <Tabs defaultValue="specs" className="w-full">
                    <TabsList className="flex flex-wrap items-center gap-4 md:gap-6 w-full border-b border-solid bg-transparent h-auto p-0">
                      <TabsTrigger
                        value="specs"
                        className="flex items-center gap-1.5 pt-0 pb-4 px-0 border-b-2 border-transparent data-[state=active]:border-[#194170] bg-transparent rounded-none"
                      >
                        <FileTextIcon className="w-4 h-4" />
                        <span className="font-medium text-sm leading-5 [font-family:'Figtree',Helvetica]">
                          Vehicle Specs
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="finance"
                        className="flex items-center gap-1.5 pt-0 pb-4 px-0 border-b-2 border-transparent data-[state=active]:border-[#194170] bg-transparent rounded-none"
                      >
                        <StarIcon className="w-4 h-4" />
                        <span className="font-medium text-sm leading-5 [font-family:'Figtree',Helvetica]">
                          Finance &amp; Leasing Options
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="questions"
                        className="flex items-center gap-1.5 pt-0 pb-4 px-0 border-b-2 border-transparent data-[state=active]:border-[#194170] bg-transparent rounded-none"
                      >
                        <HelpCircleIcon className="w-4 h-4" />
                        <span className="font-medium text-sm leading-5 [font-family:'Figtree',Helvetica]">
                          Common Questions
                        </span>
                      </TabsTrigger>
                      <TabsTrigger
                        value="consultation"
                        className="flex items-center gap-1.5 pt-0 pb-4 px-0 border-b-2 border-transparent data-[state=active]:border-[#194170] bg-transparent rounded-none"
                      >
                        <ReceiptIcon className="w-4 h-4" />
                        <span className="font-medium text-sm leading-5 [font-family:'Figtree',Helvetica]">
                          Free Consultation
                        </span>
                      </TabsTrigger>
                    </TabsList>
  
                    <TabsContent
                      value="specs"
                      className="flex flex-col gap-3 mt-6"
                    >
                      <div className="flex items-center gap-6 w-full">
                        <h3 className="flex-1 [font-family:'Figtree',Helvetica] font-medium text-[#194170] text-base md:text-lg leading-6">
                          Vehicle Basics
                        </h3>
                      </div>
  
                      <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-[18px] w-full">
                        {vehicleBasics.map((basic, index) => (
                          <Card key={index} className="flex-1 border-solid">
                            <CardContent className="flex flex-col items-start gap-4 p-3">
                              <div className="flex flex-col items-start h-10">
                                <p className="font-medium text-[#101828] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                                  {basic.title}
                                </p>
                                <p className="font-normal text-[#4a5565] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                                  {basic.subtitle}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
  
                      <div className="flex flex-col items-start w-full mt-3">
                        <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                          <h3 className="flex-1 [font-family:'Figtree',Helvetica] font-medium text-[#194170] text-base md:text-lg leading-6">
                            Engine and Performance
                          </h3>
                        </div>
  
                        <div className="flex flex-col items-start w-full">
                          {enginePerformance.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col sm:flex-row sm:items-center justify-between px-0 py-2 w-full border-b border-solid border-gray-100 gap-1 sm:gap-0"
                            >
                              <span className="font-medium text-[#101828] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                                {item.label}
                              </span>
                              <span className="font-normal text-[#4a5565] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
  
                      <div className="flex flex-col items-start w-full mt-3">
                        <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                          <h3 className="flex-1 [font-family:'Figtree',Helvetica] font-medium text-[#194170] text-base md:text-lg leading-6">
                            Safety &amp; Warranty
                          </h3>
                        </div>
  
                        <div className="flex flex-col items-start w-full">
                          {safetyWarranty.map((item, index) => (
                            <div
                              key={index}
                              className="flex flex-col sm:flex-row sm:items-center justify-between px-0 py-2 w-full border-b border-solid border-gray-100 gap-1 sm:gap-0"
                            >
                              <span className="font-medium text-[#101828] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                                {item.label}
                              </span>
                              {item.value === "stars" ? (
                                <div className="flex items-center gap-1">
                                  {[...Array(item.rate)].map((_, i) => (
                                    <img
                                      key={i}
                                      className="w-4 h-4"
                                      alt="Star"
                                      src="/star.svg"
                                    />
                                  ))}
                                </div>
                              ) : (
                                <span className="font-normal text-[#4a5565] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                                  {item.value}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
  
            <div className="flex flex-col items-start gap-6 flex-1">
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex flex-col items-start gap-9 p-6">
                  <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                    <h2 className="flex-1 [font-family:'Figtree',Helvetica] font-medium text-[#c70036] text-2xl leading-7">
                      Compare Payment Frequency Options
                    </h2>
                  </div>
  
                  <div className="flex flex-col items-start gap-5 w-full">
                    <ToggleGroup
                      type="single"
                      defaultValue="weekly"
                      className="flex flex-col sm:flex-row items-center gap-px w-full bg-white rounded overflow-hidden border border-solid shadow-shadow-xs"
                    >
                      {paymentFrequencies.map((freq) => (
                        <ToggleGroupItem
                          key={freq.id}
                          value={freq.id}
                          className={`flex-1 w-full sm:w-auto gap-1.5 px-4 py-2.5 ${
                            freq.active
                              ? "bg-[#194170] text-white border-r border-solid shadow-shadow-xs"
                              : "border-r border-solid"
                          } data-[state=on]:bg-[#194170] data-[state=on]:text-white`}
                        >
                          <span className="font-medium text-sm leading-5 [font-family:'Figtree',Helvetica]">
                            {freq.label}
                          </span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
  
                    <div className="flex flex-col items-start gap-2 w-full">
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 w-full">
                        <div className="flex items-end gap-1.5">
                          <span className="[font-family:'Figtree',Helvetica] font-semibold text-[#c70036] text-4xl tracking-[0.80px] leading-9">
                            $266
                          </span>
                          <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-4">
                            PER WEEKLY*
                          </span>
                        </div>
                        <Badge className="bg-[#c70036] text-white px-1.5 py-0.5 h-auto">
                          <span className="font-medium text-sm text-center leading-4 [font-family:'Figtree',Helvetica]">
                            Limited-time deal
                          </span>
                        </Badge>
                      </div>
  
                      <div className="flex items-start gap-2 w-full">
                        <span className="[font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm leading-5">
                          Based on estimated drive-away price*
                        </span>
                        <InfoIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
  
                  <div className="flex items-center gap-6 w-full">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 flex-1 w-full">
                      <Button 
                        className="h-auto flex-1 lg:w-auto w-full gap-1.5 px-6 py-3.5 bg-[#194170] rounded shadow-shadow-xs"
                        onClick={() => setQuoteDialogOpen(true)}
                      >
                        <span className="font-medium text-white text-base leading-6 [font-family:'Figtree',Helvetica]">
                          Get A Quote
                        </span>
                        <ArrowRightIcon className="w-5 h-5 text-white" />
                      </Button>
  
                      <Button
                        variant="outline"
                        className="h-auto flex-1 lg:w-auto w-full gap-1.5 px-6 py-3.5 bg-gray-50 rounded border-solid shadow-shadow-xs"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        <span className="font-medium text-[#4a5565] text-base leading-6 [font-family:'Figtree',Helvetica]">
                          1300 352 352
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex flex-col items-start gap-5 sm:gap-7 p-4 sm:p-6">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex flex-col items-start justify-center gap-2 pt-0 pb-3 px-0 border-b border-solid w-full">
                      <h2 className="[font-family:'Figtree',Helvetica] font-medium text-[#c70036] text-2xl leading-7">
                        Flexible commerical leasing &amp; fiance solutions
                      </h2>
                    </div>
                  </div>
  
                  <div className="flex flex-col items-start gap-4 w-full">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-4 w-full">
                        <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded">
                          <CheckIcon className="w-5 h-5 text-[#194170]" />
                        </div>
                        <span className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-xl leading-5">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
  
        <Card className="w-full bg-[#194170] border-solid shadow-shadow-sm">
          <CardContent className="flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 sm:p-6">
            <div className="flex flex-col items-start gap-2 flex-1">
              <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-white text-3xl leading-8">
                Smarter Leasing. Bigger Savings. Faster Approvals.
              </h2>
              <p className="[font-family:'Figtree',Helvetica] font-medium text-white text-lg leading-5">
                For Sole Traders, Partnerships, Companies, Non-for-profits &amp;
                Government.
              </p>
            </div>
            <Button
              variant="outline"
              className="h-auto w-full md:w-60 gap-1.5 px-4 py-2.5 bg-gray-50 rounded border-solid shadow-shadow-xs"
            >
              <span className="font-medium text-[#4a5565] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                Get A Quote
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
  
        <div className="flex flex-col w-full items-start gap-[25px]">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 w-full">
            <div className="flex flex-col w-full lg:w-[643px] items-start gap-10">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-3xl tracking-[-0.40px] leading-[37.5px]">
                  Why Businesses Trust Fleet Leasing Australia?
                </h2>
                <p className="[font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-base leading-6">
                  We&apos;re more than a leasing company - we&apos;re your trusted
                  partner in building a smarter, more efficient fleet. From quick
                  approvals to exclusive fleet discounts, we make business leasing
                  simple and cost-effective.
                </p>
              </div>
  
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                  {trustFeatures.slice(0, 2).map((feature, index) => (
                    <Card
                      key={index}
                      className="flex-1  lg:w-auto w-full border-solid shadow-shadow-sm"
                    >
                      <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6">
                        <div className="flex w-9 h-9 items-center justify-center bg-[#ecf3fb] rounded">
                          <img
                            className="w-5 h-5"
                            alt="Feature icon"
                            src={feature.icon}
                          />
                        </div>
                        <h3 className="text-[#101828] text-xl leading-[25px] [font-family:'Figtree',Helvetica] font-semibold">
                          {feature.title}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
  
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                  {trustFeatures.slice(2, 4).map((feature, index) => (
                    <Card
                      key={index}
                      className="flex-1  lg:w-auto w-full border-solid shadow-shadow-sm"
                    >
                      <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6">
                        <div className="flex w-9 h-9 items-center justify-center bg-[#ecf3fb] rounded">
                          <img
                            className="w-5 h-5"
                            alt="Feature icon"
                            src={feature.icon}
                          />
                        </div>
                        <h3 className="text-[#101828] text-xl leading-[25px] [font-family:'Figtree',Helvetica] font-semibold">
                          {feature.title}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
  
                <div className="flex flex-col sm:flex-row items-start gap-4 w-full">
                  {trustFeatures.slice(4, 6).map((feature, index) => (
                    <Card
                      key={index}
                      className="flex-1 lg:w-auto w-full border-solid shadow-shadow-sm"
                    >
                      <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6">
                        <div className="flex w-9 h-9 items-center justify-center bg-[#ecf3fb] rounded">
                          <img
                            className="w-5 h-5"
                            alt="Feature icon"
                            src={feature.icon}
                          />
                        </div>
                        <h3 className="text-[#101828] text-xl leading-[25px] [font-family:'Figtree',Helvetica] font-semibold">
                          {feature.title}
                        </h3>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
  
            <div className="relative flex-1 self-stretch hidden lg:block">
              <img
                className="absolute top-[45px] left-[73px] w-[436px] h-[442px] rounded object-cover"
                alt="Business image"
                src="/assets/images/banner-trust.png"
              />
            </div>
            <div className="w-full h-[300px] lg:hidden rounded overflow-hidden my-4">
              <img
                className="w-full h-full object-cover"
                alt="Business image"
                src="/assets/images/banner-trust.png"
              />
            </div>
          </div>
        </div>
  
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
       
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                 {leasingSteps.map((step, index) => (
                   <Card
                     key={index}
                     className="border border-solid overflow-hidden h-full"
                   >
                     <CardContent className="flex bg-white flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 relative h-full">
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
  
        <div className="flex flex-col w-full items-start gap-7 pt-0 pb-16 px-0">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between w-full gap-3 sm:gap-0">
            <h2 className="[font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-3xl text-center leading-8">
              Explore Similar Utes for Business Lease
            </h2>
            <div className="flex w-full sm:w-auto items-center justify-between sm:justify-end gap-3">
              <Button 
              onClick={() => router.push("/explore")}
              variant="ghost" className="h-auto gap-1.5 px-3 py-2">
                <span className="font-medium text-[#194170] text-sm leading-5 [font-family:'Figtree',Helvetica]">
                  View all
                </span>
              </Button>
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[34px] h-[34px] bg-gray-100 rounded-full p-2.5"
                >
                          <ChevronLeftIcon className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-[34px] h-[34px] bg-[#101828] rounded-full p-2.5"
                >
                  <ChevronRightIcon className="w-5 h-5 text-white" />
                </Button>
              </div>
            </div>
          </div>
  
          {/* <div className="flex items-center gap-4 overflow-x-auto">
            {similarVehicles.map((vehicle, index) => (
              <Card
                key={index}
                className="flex-shrink-0 w-[390px] border-solid shadow-shadow-sm"
              >
                <CardContent className="flex bg-white flex-col items-center gap-[18px] pt-12 pb-4 px-4 relative">
                  <div
                    className="relative w-full h-[186.47px] rounded-[10.39px] bg-cover bg-[50%_50%]"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  />
  
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-4 right-4 w-10 h-10 bg-gray-50 border-solid shadow-shadow-xs"
                  >
                    <HeartIcon className="w-5 h-5" />
                  </Button>
  
                  <Badge className="absolute top-[15px] left-[15px] bg-emerald-50 text-[#004f3b] px-2 py-1 h-auto gap-1.5">
                    <img className="w-3.5 h-3.5" alt="Star" src="/assets/images/svg/star.svg" />
                    <span className="font-medium text-sm text-center leading-4 [font-family:'Figtree',Helvetica]">
                      {vehicle.badge}
                    </span>
                  </Badge>
  
                  <div className="flex flex-col items-start gap-3 w-full">
                    <h3 className="[font-family:'Figtree',Helvetica] font-semibold text-[#0b1c31] text-2xl leading-6">
                      {vehicle.title}
                    </h3>
  
                    <div className="flex items-center gap-2 w-full">
                      <Badge className="bg-[#c70036] text-white px-1.5 py-0.5 h-auto">
                        <span className="font-medium text-sm text-center leading-4 [font-family:'Figtree',Helvetica]">
                          {vehicle.deal}
                        </span>
                      </Badge>
                      <div className="w-[3px] h-[3px] bg-[#b3ceee] rounded-[1.5px]" />
                      <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-5">
                        {vehicle.type}
                      </span>
                      <div className="w-[3px] h-[3px] bg-[#b3ceee] rounded-[1.5px]" />
                      <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-5">
                        {vehicle.fuel}
                      </span>
                    </div>
                  </div>
  
                  <div className="flex items-end gap-3 p-3 w-full bg-gray-50 rounded">
                    <div className="flex flex-col h-12 items-start gap-1 flex-1">
                      <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-4">
                        STARTING AT
                      </span>
                      <div className="flex items-end gap-1.5 w-full">
                        <span className="[font-family:'Figtree',Helvetica] font-semibold text-[#c70036] text-3xl tracking-[0.80px] leading-7">
                          {vehicle.price}
                        </span>
                        <span className="[font-family:'Figtree',Helvetica] font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-4">
                          {vehicle.frequency}
                        </span>
                      </div>
                    </div>
  
                    <Button className="h-auto w-[140px] gap-1.5 px-4 py-2.5 bg-[#194170] rounded shadow-shadow-xs">
                      <span className="[font-family:'Figtree',Helvetica] font-medium text-white text-sm leading-5">
                        Get A Quote
                      </span>
                      <ArrowRightIcon className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div> */}

          <div className="relative w-full">
          <div className="overflow-x-auto pb-4 hide-scrollbar">
            <div className="flex gap-4 md:gap-6 min-w-max">
              {similarVehicles.map((vehicle, index) => (
                <div key={index} className="w-[320px] sm:w-[320px] md:w-[350px] flex-shrink-0">
                  <SmallVehicleCard 
                    image={'bg-[url(/assets/images/car-image.png)]'}
                    name={vehicle.title}
                    type={vehicle.type}
                    fuel={vehicle.fuel}
                    price={vehicle.price}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>



        </div>
        </main>
        {/* Quote Request Dialog */}
        <QuoteRequestDialog 
          open={quoteDialogOpen} 
          onOpenChange={setQuoteDialogOpen} 
          vehicleName="Hyundai Tucson"
          selectedVariant={selectedVariant.id}
          variants={variants.map(v => ({ id: v.id, name: v.label }))}
        />
      </div>
      
    );
  };
  

export default CarDetail;
CarDetail.Layout = 'Default';
