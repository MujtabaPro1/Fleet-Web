import {
    ArrowRightIcon,
    CheckCircle2Icon,
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
  import React, { useEffect, useState } from "react";
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
import Head from 'next/head';


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

// useState already imported with React
import axiosInstance from "@/service/api";
import { useSearchParams } from "next/navigation";
import { VehicleCard } from "@/components/vehicle-card";
import { VehiclesCarousel } from "@/components/carousels/VehiclesCarousel";

  
  // Breadcrumb items will be defined inside the component

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
    image: '/assets/images/steps/pre-approval.png',
      description:
        "CheckIcon your eligibility and proposal in minutes. Perfect for ABN holders; get clarity on available finance and lease options before you commit.",
    },
    {
      step: "Step 2",
      title: "Vehicle Sourcing & Procurement",
    image: '/assets/images/steps/procurement.png',
      description:
        "We source vehicles directly from our dealer network, securing fleet discounts to maximise your savings. Our commercial partnerships ensure ABN holders get access to pricing usually reserved for large fleets.",
    },
    {
      step: "Step 3",
      title: "Finance and Leasing Application",
      image: '/assets/images/steps/finance-leasing-application.png',
      description:
        "Our finance and leasing team handles the paperwork and submits your application directly to leading lenders, saving you time and hassle.",
    },
    {
      step: "Step 4",
      title: "Settlement & Drive Away",
      image: '/assets/images/steps/settlement.png',
      description:
        "Once approved, we finalise the paperwork and arrange delivery so you can hit the road without delays. Whether it's a single vehicle or a growing fleet, we scale the settlement process to match your business needs.",
    },
  ];



  

  const CarDetail: MyPage = () => {
    const router = useRouter();
    const { carID } = router.query;
    const params = useSearchParams();
  
    // Tab functionality
    useEffect(() => {
      const tabs = document.querySelectorAll('#vehicle-tabs button');
      const tabContents = document.querySelectorAll('#vehicle-tab-content > div');
      
      const handleTabClick = (e: Event) => {
        const tab = e.currentTarget as HTMLElement;
        
        // Hide all tab contents
        tabContents.forEach(content => {
          content.classList.add('hidden');
          content.classList.remove('flex');
        });
        
        // Remove active state from all tabs
        tabs.forEach(t => {
          t.classList.remove('border-[#194170]');
          t.classList.add('border-transparent');
          t.setAttribute('aria-selected', 'false');
        });
        
        // Set active tab
        tab.classList.remove('border-transparent');
        tab.classList.add('border-[#194170]');
        tab.setAttribute('aria-selected', 'true');
        
        // Show selected tab content
        const tabId = tab.getAttribute('aria-controls');
        if (tabId) {
          const tabContent = document.getElementById(tabId);
          if (tabContent) {
            tabContent.classList.remove('hidden');
            tabContent.classList.add('flex');
          }
        }
      };
      
      tabs.forEach(tab => {
        tab.addEventListener('click', handleTabClick);
      });
      
      return () => {
        tabs.forEach(tab => {
          tab.removeEventListener('click', handleTabClick);
        });
      };
    }, []);
    
    // Accordion toggle functionality
    const toggleAccordion = (e: React.MouseEvent<HTMLButtonElement>) => {
      const content = e.currentTarget.nextElementSibling as HTMLElement;
      const icon = e.currentTarget.querySelector('svg');
      if (content && icon) {
        const isHidden = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        
        // Reset rotation classes
        icon.classList.remove('rotate-90', 'rotate-270');
        
        // Apply appropriate rotation
        if (isHidden) {
          // Opening the accordion - point up
          icon.classList.add('rotate-270');
        } else {
          // Closing the accordion - point down
          icon.classList.add('rotate-90');
        }
      }
    };
  
    const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
    const [car, setCar] = useState<any>(null);
    
    // Dynamic breadcrumb items based on car data
    const breadcrumbItems = React.useMemo(() => [
      { label: "Home", icon: HomeIcon },
      { label: "Fleet Inventory" },
      car?.brand?.name ? { label: car.brand.name } : null,
      car?.modelName ? { label: car.modelName } : null,
    ].filter(Boolean), [car?.brand?.name, car?.modelName]);
    const [selectedVariant, setSelectedVariant] = useState<any>(null);
    const [selectedFrequency, setSelectedFrequency] = useState("weekly");
    const [similarCars, setSimilarCars] = useState<any>([]);

    useEffect(()=>{
      const slug = params.get('inventoryId');
      if (slug) {
        console.log('slug', slug);
        getCarDetails(slug);
      }
    },[params])

    const getCarDetails = (inventoryId: string) => {
      axiosInstance.get(`/v1/cars/slug/${inventoryId}`).then((response) => {
        console.log(response.data);
        setCar(response.data);
        // Set the first variant as the selected variant if available
        if (response.data?.variants && response.data.variants.length > 0) {
          setSelectedVariant(response.data.variants[0]);
        }
        getSelectedBodyTypeSimilarCars(response.data.bodyType);
      }).catch((error) => {
        console.error('Error fetching car details:', error);
      });
    }

    const getSelectedBodyTypeSimilarCars = (bodyType: string) => {
      const params = new URLSearchParams();
      params.append('bodyType', bodyType);
      params.append('page', '1');
      params.append('limit', '6');
      axiosInstance.get(`/v1/cars/search?${params.toString()}`).then((response) => {
        console.log(response.data);
        setSimilarCars(response.data.data);
      }).catch((error) => {
        console.error('Error fetching similar cars:', error);
      });
    }

    const isLimitedDeal = () => {
      return car?.tags && car?.tags.length > 0 && car?.tags?.filter((tag: string) => tag.toLowerCase().includes("limited")).length > 0;
    }

    
    return (
      <>
      <Head>
        {car ? <title>Fleet Inventory {car?.brand?.name ? `| ${car?.brand?.name}` : ''} {car?.modelName ? ` ${car?.modelName}` : ''}</title> : <title>Fleet Inventory</title>}
      </Head>
      <div className="flex flex-col items-center gap-8 bg-gray-50 overflow-hidden">

<main className="flex flex-col max-w-full lg:max-w-[1280px] pt-[40px] items-center gap-6 md:gap-10 px-3 md:px-4">
        <div className="flex flex-col items-start gap-8 relative max-w-[1280px] px-0 lg:px-2">
          <div className="w-full overflow-x-auto pl-4 lg:pl-0">
            {/* First line: Home > Fleet Inventory */}
            <Breadcrumb className="mb-1">
              <BreadcrumbList className="flex items-center gap-3 md:gap-2.5 min-w-max py-1">
                <BreadcrumbItem className="flex items-center gap-2 md:gap-1.5">
                  <HomeIcon className="w-4 h-4" />
                  <BreadcrumbLink href="/" className="font-medium text-[#194170] text-sm leading-5 font-figtree whitespace-nowrap px-0.5">
                    {'Home'.toUpperCase()}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="mx-1">
                  <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                </BreadcrumbSeparator>
                <BreadcrumbItem className="flex items-center gap-2 md:gap-1.5">
                  <BreadcrumbLink href="/inventory" className="font-medium text-[#194170] text-sm leading-5 font-figtree whitespace-nowrap px-0.5">
                    {'Fleet Inventory'.toUpperCase()}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                    <BreadcrumbSeparator className="mx-1 hidden lg:block">
                            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                          </BreadcrumbSeparator>
                <div className="hidden lg:block">
                  
                   {(car?.brand?.name || car?.modelName) && (
              <Breadcrumb>
                <BreadcrumbList className="flex items-center gap-3 md:gap-2.5 min-w-max py-1">
                  {car?.brand?.name && (
                    <>
                      <BreadcrumbItem className="flex items-center gap-2 md:gap-1.5">
                        <BreadcrumbLink href={`/inventory?brand=${car.brand.name}`} className="font-medium text-[#194170] text-sm leading-5 font-figtree whitespace-nowrap px-0.5">
                          {car.brand.name}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {car?.modelName && (
                        <>
                          <BreadcrumbSeparator className="mx-1">
                            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                          </BreadcrumbSeparator>
                          <BreadcrumbItem className="flex items-center gap-2 md:gap-1.5">
                            <BreadcrumbLink className="font-medium text-[#194170] text-sm leading-5 font-figtree whitespace-nowrap px-0.5">
                              {car.modelName}
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                        </>
                      )}
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            )}
                  
                </div>
              </BreadcrumbList>
              
            </Breadcrumb>
            
            {/* Second line: Brand > Model */}
            {(car?.brand?.name || car?.modelName) && (
              <Breadcrumb className="block lg:hidden">
                <BreadcrumbList className="flex items-center gap-3 md:gap-2.5 min-w-max py-1">
                  {car?.brand?.name && (
                    <>
                      <BreadcrumbItem className="flex items-center gap-2 md:gap-1.5">
                        <BreadcrumbLink href={`/inventory?brand=${car.brand.name}`} className="font-medium text-[#194170] text-sm leading-5 font-figtree whitespace-nowrap px-0.5">
                          {car.brand.name}
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      {car?.modelName && (
                        <>
                          <BreadcrumbSeparator className="mx-1">
                            <ChevronRightIcon className="w-4 h-4 text-gray-400" />
                          </BreadcrumbSeparator>
                          <BreadcrumbItem className="flex items-center gap-2 md:gap-1.5">
                            <BreadcrumbLink className="font-medium text-[#194170] text-sm leading-5 font-figtree whitespace-nowrap px-0.5">
                              {car.modelName}
                            </BreadcrumbLink>
                          </BreadcrumbItem>
                        </>
                      )}
                    </>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            )}
          </div>
  
          <div className="flex flex-col lg:flex-row w-full items-start gap-4">
            <div className="flex flex-col w-full lg:w-[70%] items-start gap-6">
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex flex-col items-start gap-5 sm:gap-7 p-4 sm:p-6 bg-white">
                  <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                    <div className="flex flex-col items-start gap-2 flex-1">
                      <h1 className="font-figtree font-semibold text-[#000] text-2xl lg:text-3xl leading-8">
                        {car?.brand?.name} {car?.modelName} LEASING
                      </h1>
                      <p className="font-figtree font-normal text-[#4a5565] text-md lg:text-xl leading-5">
                        Drive your business forward with smarter leasing and
                        finance
                      </p>
                    </div>
                  </div>
                  <div className="w-full">
                    <div className="flex-1 h-[300px] md:h-[400px] bg-white rounded overflow-hidden">
                      <img
                        className="w-full h-full object-contain"
                        alt="Vehicle images"
                        src={car?.NVIC ? `https://api.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${car?.NVIC}` : "/assets/images/no-image.png"}
                        onError={(e) => {
                          e.currentTarget.src = "/assets/images/no-image.png";
                        }}
                      />
                    </div>
              
                  </div>
                </CardContent>
              </Card>
  
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6 bg-white">
                  <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                    <h2 className="font-figtree font-medium text-[#000] text-2xl leading-7">
                      See All Available Variants Below
                    </h2>
                  </div>
  
                  <div className="flex flex-col items-start justify-center gap-3 w-full">
                    <h3 className="font-figtree font-medium text-[#194170] text-lg leading-6">
                      Select a Variant
                    </h3>
                    <div className="flex flex-wrap items-start gap-3 w-full">
                      {car?.variants && car.variants.map((variant: any, index: number) => (
                        <Button
                          key={variant.uid}
                          variant={selectedVariant?.uid === variant.uid ? "default" : "outline"}
                          className={`h-auto w-full sm:w-auto flex-1 sm:flex-none px-3 py-2 ${
                            selectedVariant?.uid === variant.uid
                              ? "bg-[#194170] text-white shadow-shadow-xs"
                              : "bg-gray-50 text-[#4a5565] border-solid shadow-shadow-xs"
                          }`}
                          onClick={() => setSelectedVariant(variant)}
                        >
                          <span
                            className={`font-medium text-sm leading-5 font-figtree ${selectedVariant?.uid === variant.uid ? "underline" : ""}`}
                          >
                            {variant.variant || variant.baseVariant}
                          </span>
                        </Button>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

               <div className="flex lg:hidden flex-col items-start gap-6 w-full lg:w-[30%]">
              <Card className="w-full border-solid shadow-shadow-sm bg-white">
                <CardContent className="flex flex-col items-start gap-9 p-4">
                  <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                    <h2 className="flex-1 font-figtree font-medium text-[#000] text-xl leading-7">
                      Compare Payment Frequency Options
                    </h2>
                  </div>
  
                  <div className="flex flex-col items-start gap-5 w-full">
                    <ToggleGroup
                      type="single"
                      value={selectedFrequency}
                      onValueChange={(value) => {
                        if (value) setSelectedFrequency(value);
                      }}
                      defaultValue="weekly"
                      className="flex flex-row items-center gap-px w-full bg-white rounded overflow-hidden border border-solid shadow-shadow-xs"
                    >
                      {paymentFrequencies.map((freq) => (
                        <ToggleGroupItem
                          key={freq.id}
                          value={freq.id}
                          className={`flex-1 w-full sm:w-auto gap-1.5 px-4 py-2.5 ${
                            selectedFrequency === freq.id
                              ? "bg-[#194170] text-white border-r border-solid shadow-shadow-xs"
                              : "border-r border-solid"
                          } data-[state=on]:bg-[#194170] data-[state=on]:text-white`}
                        >
                          <span className="font-medium text-sm leading-5 font-figtree">
                            {freq.label}
                          </span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
  
                    <div className="flex flex-col items-start gap-2 w-full">
                      <div className="flex flex-col justify-start items-start gap-3 sm:gap-6 w-full">
                        <div className="flex items-end gap-1.5">
                          <span className="font-figtree font-semibold text-[#c70036] text-4xl tracking-[0.80px] leading-9">
                            ${selectedFrequency === "weekly" 
                              ? selectedVariant?.weeklyPrice 
                              : selectedFrequency === "fortnightly" 
                                ? selectedVariant?.fortnightlyPrice 
                                : selectedVariant?.monthlyPrice || "--"}
                          </span>
                          <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-4">
                            PER {selectedFrequency.toUpperCase().replace("LY", "")}LY*
                          </span>
                        </div>
                        {isLimitedDeal() && <Badge className="bg-[#c70036] text-white px-1.5 py-0.5 h-auto">
                          <span className="font-medium text-sm text-center leading-4 font-figtree">
                             Limited-time deal
                          </span>
                        </Badge>}
                      </div>
  
                      <div className="flex items-start gap-2 w-full">
                        <span className="font-figtree font-normal text-[#6a7282] text-sm leading-5">
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
                        <span className="font-medium text-white text-base leading-6 font-figtree">
                          Get A Quote
                        </span>
                        <ArrowRightIcon className="w-5 h-5 text-white" />
                      </Button>
  
                      <Button
                        variant="outline"
                        onClick={() => window.open('tel:1300352287', '_self')}
                        className="h-auto flex-1 lg:w-auto w-full gap-1.5 px-6 py-3.5 bg-gray-50 rounded border-solid shadow-shadow-xs"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        <span className="font-medium text-[#4a5565] text-base leading-6 font-figtree">
                          1300 352 287
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
  
            </div>
  
              <Card className="w-full border-solid shadow-shadow-sm">
                <CardContent className="flex bg-white flex-col items-start gap-4 sm:gap-6 p-4 sm:p-6">



                  <div className="mb-4 border-b border-solid">
                    <ul className="flex w-[380px] lg:w-full overflow-x-auto md:overflow-visible -mb-px" id="vehicle-tabs" role="tablist">
                      <li className="me-2" role="presentation">
                        <button 
                          className="flex items-center gap-1 sm:gap-2 pt-3 pb-3 px-4 border-b-[3px] border-[#194170] bg-transparent rounded-none whitespace-nowrap text-sm sm:text-base font-medium font-figtree text-gray-700" 
                          id="specs-tab" 
                          data-tabs-target="#specs" 
                          type="button" 
                          role="tab" 
                          aria-controls="specs" 
                          aria-selected="true"
                        >
                          <FileTextIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                          Vehicle Specs
                        </button>
                      </li>
                      <li className="me-2" role="presentation">
                        <button 
                          className="flex items-center gap-1 sm:gap-2 pt-3 pb-3 px-4 border-b-[3px] border-transparent bg-transparent rounded-none whitespace-nowrap text-sm sm:text-base font-medium font-figtree text-gray-700" 
                          id="finance-tab" 
                          data-tabs-target="#finance" 
                          type="button" 
                          role="tab" 
                          aria-controls="finance" 
                          aria-selected="false"
                        >
                          <StarIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                          Finance &amp; Leasing Options
                        </button>
                      </li>
                      <li className="me-2" role="presentation">
                        <button 
                          className="flex items-center gap-1 sm:gap-2 pt-3 pb-3 px-4 border-b-[3px] border-transparent bg-transparent rounded-none whitespace-nowrap text-sm sm:text-base font-medium font-figtree text-gray-700" 
                          id="questions-tab" 
                          data-tabs-target="#questions" 
                          type="button" 
                          role="tab" 
                          aria-controls="questions" 
                          aria-selected="false"
                        >
                          <HelpCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                          Common Questions
                        </button>
                      </li>
                      <li className="me-2" role="presentation">
                        <button 
                          className="flex items-center gap-1 sm:gap-2 pt-3 pb-3 px-4 border-b-[3px] border-transparent bg-transparent rounded-none whitespace-nowrap text-sm sm:text-base font-medium font-figtree text-gray-700" 
                          id="consultation-tab" 
                          data-tabs-target="#consultation" 
                          type="button" 
                          role="tab" 
                          aria-controls="consultation" 
                          aria-selected="false"
                        >
                          <ReceiptIcon className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                          Free Consultation
                        </button>
                      </li>
                    </ul>
                  </div>
                  
                  <div id="vehicle-tab-content" className="w-full">
                    <div className="flex flex-col gap-6 mt-8 sm:gap-8 md:gap-10" id="specs" role="tabpanel" aria-labelledby="specs-tab">
                      <div className="flex flex-col items-start gap-4 w-full">
                        <h3 className="font-figtree font-semibold text-[#194170] text-base sm:text-lg md:text-xl leading-6 mt-2">
                          Vehicle Basics
                        </h3>
                      
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 w-full">
                          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex flex-col gap-1">
                              <p className="font-medium text-[#101828] text-base sm:text-lg leading-6 font-figtree">
                                {selectedVariant?.bodyType || car?.bodyType || ""}
                              </p>
                              <p className="font-normal text-[#4a5565] text-sm sm:text-base leading-5 font-figtree">
                                Body type
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex flex-col gap-1">
                              <p className="font-medium text-[#101828] text-base sm:text-lg leading-6 font-figtree">
                                {selectedVariant?.transmission?.includes("AWD") ? "AWD" : "2WD (Front Wheel Drive)"}
                              </p>
                              <p className="font-normal text-[#4a5565] text-sm sm:text-base leading-5 font-figtree">
                                Drive type
                              </p>
                            </div>
                          </div>
                          
                          <div className="bg-white p-4 sm:p-5 md:p-6 rounded-lg border border-gray-200 shadow-sm">
                            <div className="flex flex-col gap-1">
                              <p className="font-medium text-[#101828] text-base sm:text-lg leading-6 font-figtree">
                                {selectedVariant?.engine || "Unleaded Petrol"}
                              </p>
                              <p className="font-normal text-[#4a5565] text-sm sm:text-base leading-5 font-figtree">
                                Fuel type
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 w-full">
                          <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-6 mb-4">
                            Engine and Performance
                          </h3>
                          <div className="w-full">
                            <div className="flex flex-col w-full divide-y divide-gray-200">
                              <div className="flex justify-between py-4">
                                <span className="font-figtree text-gray-700">Engine</span>
                                <span className="font-figtree font-medium text-right">{selectedVariant?.engine || "N/A"}</span>
                              </div>
                              <div className="flex justify-between py-4">
                                <span className="font-figtree text-gray-700">Transmission</span>
                                <span className="font-figtree font-medium text-right">{selectedVariant?.transmission || "N/A"}</span>
                              </div>
                              <div className="flex justify-between py-4">
                                <span className="font-figtree text-gray-700">Power / Torque</span>
                                <span className="font-figtree font-medium text-right">{selectedVariant?.power || "N/A"}</span>
                              </div>
                              <div className="flex justify-between py-4">
                                <span className="font-figtree text-gray-700">Fuel Efficiency</span>
                                <span className="font-figtree font-medium text-right">{selectedVariant?.fuelEfficiency || "N/A"}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="border-t border-gray-200 pt-4 mt-4 w-full">
                          <h3 className="font-figtree font-semibold text-[#194170] text-xl leading-6 mb-4">
                            Safety & Warranty
                          </h3>
                          <div className="w-full">
                            <div className="flex flex-col w-full divide-y divide-gray-200">
                              <div className="flex justify-between py-4">
                                <span className="font-figtree text-gray-700">ANCAP Safety Rating</span>
                                <span className="font-figtree font-medium text-right flex items-center">
                                  {selectedVariant?.ancapRating ? selectedVariant.ancapRating : "N/A"}
                                </span>
                              </div>
                              <div className="flex justify-between py-4">
                                <span className="font-figtree text-gray-700">Warranty</span>
                                <span className="font-figtree font-medium text-right">{selectedVariant?.warranty || "N/A"}</span>
                              </div>
                              <div className="flex justify-between py-4">
                                <span className="font-figtree text-gray-700">Service Interval</span>
                                <span className="font-figtree font-medium text-right">{selectedVariant?.serviceInterval || "N/A"}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                      </div>
                    </div>
                    
                    <div className="hidden flex-col gap-6 mt-8 sm:gap-8 md:gap-10" id="finance" role="tabpanel" aria-labelledby="finance-tab">
  <div className="flex flex-col items-start gap-4 w-full">
    <h2 className="font-figtree font-semibold text-[#194170] text-xl sm:text-2xl md:text-3xl leading-tight">
      Choose the right finance and leasing structure for your business.
    </h2>
    <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
      Fleet Leasing Australia offers a range of flexible finance and leasing products designed to suit different business needs and budgets. Whether you&apos;re a sole trader, partnership, or established company, our specialists can help tailor the best structure for your cash flow and tax position.
    </p>
  </div>
  
  <div className="flex flex-col items-start gap-4 w-full">
    <h3 className="font-figtree font-semibold text-[#194170] text-lg leading-6">
      Products Available
    </h3>
    
    <div className="grid grid-cols-1 gap-6 w-full">
      <div className="flex flex-col sm:flex-row items-start gap-2 lg:gap-4 ">
        <div className="w-full sm:w-1/3">
          <h4 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
            Chattel Mortgage
          </h4>
        </div>
        <div className="w-full sm:w-2/3">
          <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
            Own the vehicle from day one while spreading payments over time. Interest and depreciation may be tax-deductible.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start gap-2 lg:gap-4">
        <div className="w-full sm:w-1/3">
          <h4 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
            Finance Lease
          </h4>
        </div>
        <div className="w-full sm:w-2/3">
          <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
            Lease the vehicle for a fixed term with predictable monthly repayments; option to purchase at the end.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start gap-2 lg:gap-4">
        <div className="w-full sm:w-1/3">
          <h4 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
            Operating Lease
          </h4>
        </div>
        <div className="w-full sm:w-2/3">
          <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
            Drive new vehicles without ownership risk. Ideal for businesses wanting to keep assets off the balance sheet.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="w-full sm:w-1/3">
          <h4 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
            Fleet Finance
          </h4>
        </div>
        <div className="w-full sm:w-2/3">
          <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
            Bundle multiple vehicles or assets into one simple finance plan.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
                    
                    <div className="hidden flex-col gap-6 mt-8 sm:gap-8 md:gap-10" id="questions" role="tabpanel" aria-labelledby="questions-tab">
                        <div className="flex flex-col items-start gap-4 w-full">
                          <h2 className="font-figtree font-semibold text-[#194170] text-xl sm:text-2xl md:text-3xl leading-tight">
                            Common Questions
                          </h2>
                          <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                            Find answers to frequently asked questions about leasing this vehicle.
                          </p>
                        </div>
                        
                        <div className="flex flex-col items-start gap-4 w-full" id="accordion-questions">
                          <div className="w-full">
                            <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
                              <button 
                                className="flex items-center bg-gray-100 justify-between w-full p-4 text-left" 
                                onClick={toggleAccordion}
                              >
                                <h3 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
                                  What information do I need for a leasing application?
                                </h3>
                                <ChevronRightIcon className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
                              </button>
                              <div className="pt-4 p-4 hidden bg-white">
                                <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                                  Typically, we&apos;ll need your ABN, business details, driver&apos;s licence, and a brief overview of your vehicle needs. For larger fleets, we may request financials — but for leases under $250K, no financials are required.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          
                          <div className="w-full">
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                              <button 
                                className="flex items-center justify-between  bg-gray-100  w-full p-4 text-left" 
                                onClick={toggleAccordion}
                              >
                                <h3 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
                                  How long does approval take?
                                </h3>
                                <ChevronRightIcon className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
                              </button>
                             <div className="pt-4 p-4 hidden bg-white">
                                <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                                  Most applications are approved within 24 hours, depending on the lender and product type.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="w-full">
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                              <button 
                                className="flex items-center justify-between  bg-gray-100   w-full p-4 text-left" 
                                onClick={toggleAccordion}
                              >
                                <h3 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
                                  Can I lease as a sole trader or small business?
                                </h3>
                                <ChevronRightIcon className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
                              </button>
                            <div className="pt-4 p-4 hidden bg-white">
                                <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                                  Absolutely. Fleet Leasing Australia works with sole traders, partnerships, and SMEs across Australia.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="w-full">
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                              <button 
                                className="flex items-center justify-between bg-gray-100 w-full p-4 text-left" 
                                onClick={toggleAccordion}
                              >
                                <h3 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
                                  What happens at the end of the lease or finance term?
                                </h3>
                                <ChevronRightIcon className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
                              </button>
                          <div className="pt-4 p-4 hidden bg-white">
                                <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                                  You can refinance, upgrade, or purchase the vehicle outright, depending on your agreement.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="w-full">
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                              <button 
                                className="flex items-center justify-between bg-gray-100 w-full p-4 text-left" 
                                onClick={toggleAccordion}
                              >
                                <h3 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
                                  Are lease payments tax-deductible?
                                </h3>
                                <ChevronRightIcon className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
                              </button>
                             <div className="pt-4 p-4 hidden bg-white">
                                <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                                  In most cases, yes especially when vehicles are used for business purposes. Speak with your accountant for personalised advice.
                                </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="w-full">
                            <div className="bg-gray-50 rounded-lg overflow-hidden">
                              <button 
                                className="flex items-center justify-between  bg-gray-100  w-full p-4 text-left" 
                                onClick={toggleAccordion}
                              >
                                <h3 className="font-figtree font-medium text-[#101828] text-base sm:text-lg leading-6">
                                  Can I include maintenance or insurance in the lease?
                                </h3>
                                <ChevronRightIcon className="w-5 h-5 transform rotate-90 transition-transform duration-200" />
                              </button>
                              <div className="pt-4 p-4 hidden bg-white">
                                <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                                  Yes. We can bundle Rego, Servicing, Tyres, Maintenance, Insurance, and even fuel cards into your monthly payments.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                   <div className="hidden flex-col gap-6 mt-8 sm:gap-8 md:gap-10" id="consultation" role="tabpanel" aria-labelledby="consultation-tab">
                      <div className="flex flex-col items-start gap-4 w-full">
                        <h2 className="font-figtree font-semibold text-[#194170] text-xl sm:text-2xl md:text-3xl leading-tight">
                          Not sure which finance or leasing product suits your business?
                        </h2>
                        <p className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                          Book a free, no-obligation consultation with one of our fleet leasing specialists. We&apos;ll review your existing business fleet, vehicle usage, and cash-flow goals to recommend the most effective leasing/finance strategy.
                        </p>
                      </div>
                      
                      <div className="flex flex-col items-start gap-4 w-full">
                        <ol className="list-decimal pl-5 space-y-2">
                          <li className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                            One-on-one advice from experienced leasing experts
                          </li>
                          <li className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                            Quick assessment of eligibility and pre-approval options
                          </li>
                          <li className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                            Fleet sourcing guidance including reviewing your existing fleet
                          </li>
                          <li className="text-[#4a5565] text-sm sm:text-base leading-5 sm:leading-6">
                            Transparent pricing with no hidden fees
                          </li>
                        </ol>
                      </div>
                      
                      <div className="w-full">
                        <Button 
                          onClick={()=>{
                            router.push('/services/consultation');
                          }}
                          className="h-auto w-full gap-1.5 px-6 py-3.5 bg-[#194170] rounded shadow-shadow-xs"
                        >
                          <span className="font-medium text-white text-base leading-6 font-figtree">
                            Book A Free Consultation
                          </span>
                          <ArrowRightIcon className="w-5 h-5 text-white" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Client-side JavaScript for tabs */}

                </CardContent>
              </Card>
            </div>
  
            <div className="hidden lg:flex flex-col items-start gap-6 w-full lg:w-[30%]">
              <Card id="quote" className="w-full border-solid shadow-shadow-sm bg-white">
                <CardContent className="flex flex-col items-start gap-9 p-4">
                  <div className="flex items-center gap-6 pt-0 pb-3 px-0 w-full border-b border-solid">
                    <h2 className="flex-1 font-figtree font-medium text-[#000] text-xl leading-7">
                      Compare Payment Frequency Options
                    </h2>
                  </div>
  
                  <div className="flex flex-col items-start gap-5 w-full">
                    <ToggleGroup
                      type="single"
                      value={selectedFrequency}
                      onValueChange={(value) => {
                        if (value) setSelectedFrequency(value);
                      }}
                      defaultValue="weekly"
                      className="flex flex-col sm:flex-row items-center gap-px w-full bg-white rounded overflow-hidden border border-solid shadow-shadow-xs"
                    >
                      {paymentFrequencies.map((freq) => (
                        <ToggleGroupItem
                          key={freq.id}
                          value={freq.id}
                          className={`flex-1 w-full sm:w-auto gap-1.5 px-4 py-2.5 ${
                            selectedFrequency === freq.id
                              ? "bg-[#194170] text-white border-r border-solid shadow-shadow-xs"
                              : "border-r border-solid"
                          } data-[state=on]:bg-[#194170] data-[state=on]:text-white`}
                        >
                          <span className="font-medium text-sm leading-5 font-figtree">
                            {freq.label}
                          </span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
  
                    <div className="flex flex-col items-start gap-2 w-full">
                      <div className="flex flex-col justify-start items-start gap-3 sm:gap-6 w-full">
                        <div className="flex items-end gap-1.5">
                          <span className="font-figtree font-semibold text-[#c70036] text-4xl tracking-[0.80px] leading-9">
                            ${selectedFrequency === "weekly" 
                              ? selectedVariant?.weeklyPrice 
                              : selectedFrequency === "fortnightly" 
                                ? selectedVariant?.fortnightlyPrice 
                                : selectedVariant?.monthlyPrice || "--"}
                          </span>
                          <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-4">
                            PER {selectedFrequency.toUpperCase().replace("LY", "")}LY*
                          </span>
                        </div>
                        {isLimitedDeal() && <Badge className="bg-[#c70036] text-white px-1.5 py-0.5 h-auto">
                          <span className="font-medium text-sm text-center leading-4 font-figtree">
                             Limited-time deal
                          </span>
                        </Badge>}
                      </div>
  
                      <div className="flex items-start gap-2 w-full">
                        <span className="font-figtree font-normal text-[#6a7282] text-sm leading-5">
                          Based on estimated drive-away price*
                        </span>
                        <InfoIcon className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
  
                  <div className="flex items-center gap-6 w-full">
                    <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 flex-1 w-full">
                      <Button 
                        className="h-auto flex-1 lg:w-auto w-full gap-1.5 px-2 py-3.5 bg-[#194170] rounded shadow-shadow-xs"
                        onClick={() => setQuoteDialogOpen(true)}
                      >
                        <span className="font-medium text-white text-base leading-6 font-figtree">
                          Get A Quote
                        </span>
                        <ArrowRightIcon className="w-5 h-5 text-white" />
                      </Button>
  
                      <Button
                        variant="outline"
                        onClick={() => window.open('tel:1300352287', '_self')}
                        className="h-auto flex-1 lg:w-auto w-full gap-1.5 px-2 py-3.5 bg-gray-50 rounded border-solid shadow-shadow-xs"
                      >
                        <PhoneIcon className="w-5 h-5" />
                        <span className="font-medium text-[#4a5565] text-base leading-6 font-figtree">
                          1300 352 287
                        </span>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
  
              <Card className="w-full border-solid shadow-shadow-sm bg-white">
                <CardContent className="flex flex-col items-start gap-5 sm:gap-7 p-4 sm:p-6">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex flex-col items-start justify-center gap-2 pt-0 pb-3 px-0 border-b border-solid w-full">
                      <h2 className="font-figtree font-medium text-[#000] text-2xl leading-7">
                        Flexible commercial leasing &amp; finance solutions
                      </h2>
                    </div>
                  </div>
  
                  <div className="flex flex-col items-start gap-4 w-full">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-4 w-full">
                        <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded">
                          <CheckCircle2Icon
                           fill="#007A55"
                          className="w-5 h-5 text-[#fff]" />
                        </div>
                        <span className="font-figtree font-medium text-[#101828] text-md leading-5">
                          {benefit.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex lg:hidden flex-col items-start gap-6 w-full lg:w-[30%]">
              <Card className="w-full border-solid shadow-shadow-sm bg-white">
                <CardContent className="flex flex-col items-start gap-5 sm:gap-7 p-4 sm:p-6">
                  <div className="flex flex-col items-start gap-2 w-full">
                    <div className="flex flex-col items-start justify-center gap-2 pt-0 pb-3 px-0 border-b border-solid w-full">
                      <h2 className="font-figtree font-medium text-[#000] text-2xl leading-7">
                        Flexible commercial leasing &amp; finance solutions
                      </h2>
                    </div>
                  </div>
  
                  <div className="flex flex-col items-start gap-4 w-full">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-4 w-full">
                        <div className="flex w-9 h-9 items-center justify-center bg-gray-100 rounded">
                          <CheckCircle2Icon
                           fill="#007A55"
                          className="w-5 h-5 text-[#fff]" />
                        </div>
                        <span className="font-figtree font-medium text-[#101828] text-md leading-5">
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
              <h2 className="font-figtree font-semibold text-white text-3xl leading-8">
                Smarter Leasing. Bigger Savings. Faster Approvals.
              </h2>
              <p className="font-figtree font-medium text-white text-lg leading-5">
                For Sole Traders, Partnerships, Companies, Non-for-profits &amp;
                Government.
              </p>
            </div>
            <Button
              variant="outline"
              onClick={() => {
                router.push(`/services/consultation`);
              }}
              className="h-auto w-full md:w-60 gap-1.5 px-4 py-2.5 bg-gray-50 rounded border-solid shadow-shadow-xs"
            >
              <span className="font-medium text-[#4a5565] text-sm leading-5 font-figtree">
              Free Consultation
              </span>
              <ArrowRightIcon className="w-4 h-4" />
            </Button>
          </CardContent>
        </Card>
  
        <div className="flex flex-col w-full items-start gap-[25px]">
          <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-10 w-full">
            <div className="flex flex-col w-full lg:w-[643px] items-start gap-10">
              <div className="flex flex-col items-start gap-4 w-full">
                <h2 className="font-figtree font-semibold text-[#101828] text-3xl tracking-[-0.40px] leading-[37.5px]">
                  Why Businesses Trust Fleet Leasing Australia?
                </h2>
                <p className="font-figtree font-normal text-[#4a5565] text-base leading-6">
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
                      <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6 bg-white overflow-hidden">
                        <div className="flex w-9 h-9 items-center justify-center bg-[#ecf3fb] rounded">
                          <img
                            className="w-5 h-5"
                            alt="Feature icon"
                            src={feature.icon}
                          />
                        </div>
                        <h3 className="text-[#101828] text-xl leading-[25px] font-figtree font-semibold">
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
                      <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6 bg-white overflow-hidden">
                        <div className="flex w-9 h-9 items-center justify-center bg-[#ecf3fb] rounded">
                          <img
                            className="w-5 h-5"
                            alt="Feature icon"
                            src={feature.icon}
                          />
                        </div>
                        <h3 className="text-[#101828] text-xl leading-[25px] font-figtree font-semibold">
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
                      <CardContent className="flex flex-col items-start gap-4 p-4 sm:p-6 bg-white overflow-hidden">
                        <div className="flex w-9 h-9 items-center justify-center bg-[#ecf3fb] rounded">
                          <img
                            className="w-5 h-5"
                            alt="Feature icon"
                            src={feature.icon}
                          />
                        </div>
                        <h3 className="text-[#101828] text-xl leading-[25px] font-figtree font-semibold">
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
          </div>
        </div>
  
            <div className="flex flex-col w-full items-start gap-12 mt-[40px] mb-[40px]">
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
  
        <VehiclesCarousel
                  title="Explore Similar Vehicles for Business Lease"
                  actionLabel="View all"
                  onAction={()=>{}}
                  cars={similarCars}
                  showMultipleColumns={true}
                  getCardKey={(offer: any) => offer?.slug || offer?.id || offer?.title}
                  renderCard={(offer: any) => (
                            <VehicleCard
                      image={
                        offer?.NVIC
                          ? `https://api.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${offer.NVIC}`
                          : "/assets/images/no-image.png"
                      }
                      name={offer?.title}
                      type={offer?.bodyType}
                      fuel={offer?.selectedVariant?.variant}
                      price={offer?.selectedVariant?.weeklyPrice}
                              router={router}
                      id={offer?.slug}
                      tags={
                        offer?.tags?.filter((tag: string) =>
                          tag.toLowerCase().includes("limited")
                        ) ?? offer?.tags
                      }
                    />
                  )}
                />

        </div>
        </main>
        {/* Quote Request Dialog */}
        <QuoteRequestDialog 
          open={quoteDialogOpen} 
          onOpenChange={setQuoteDialogOpen} 
          vehicleName={car ? `${car.brand?.name} ${car.modelName}` : ""}
          selectedVariant={selectedVariant?.uid}
          variants={car?.variants ? car.variants.map((v: any) => ({ id: v.uid, name: v.variant || v.baseVariant })) : []}
        />
      </div>
      </>
    );
  };
  

export default CarDetail;
CarDetail.Layout = 'Default';
