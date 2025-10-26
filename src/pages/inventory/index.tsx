import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HeartIcon,
    HomeIcon,
    StarIcon,
  } from "lucide-react";
  import React, { useState } from "react";
  import { Badge } from "@/components/ui/badge";
  import { Button } from "@/components/ui/button";
  import { Card, CardContent } from "@/components/ui/card";
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select";
  import { Switch } from "@/components/ui/switch";
import SiteFooterSection from "@/components/footer/footer";
import { useRouter } from "next/navigation";

  const vehicleData = [
    { id: 1, image: "/assets/images/car-image.png" },
    { id: 2, image: "/assets/images/car-image.png" },
    { id: 3, image: "/assets/images/car-image.png" },
    { id: 4, image: "/assets/images/car-image.png" },
    { id: 5, image: "/assets/images/car-image.png" },
    { id: 6, image: "/assets/images/car-image.png" },
    { id: 7, image: "/assets/images/car-image.png" },
    { id: 8, image: "/assets/images/car-image.png" },
    { id: 9, image: "/assets/images/car-image.png" },
    { id: 10, image: "/assets/images/car-image.png" },
    { id: 11, image: "/assets/images/car-image.png" },
    { id: 12, image: "/assets/images/car-image.png" },
  ];
  
const InventorySection = (): JSX.Element => {
  const [limitedDealsEnabled, setLimitedDealsEnabled] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<string>("recent");
  const router = useRouter();
    return (

        <>
      <div className="bg-[#f9fafb] pt-6 md:pt-12 pb-6 md:pb-12">
      <section className="container flex flex-col w-full items-center justify-center gap-4 md:gap-6 px-3 md:px-4">
        <div className="flex flex-col items-start gap-4 w-full">
          <div className="flex flex-col w-full items-start gap-5">
            <Card className="w-full bg-white rounded border border-solid shadow-shadow-xs">
              <CardContent className="p-3 md:p-4">
                <div className="flex flex-col items-start gap-6 md:gap-8 pb-4 md:pb-[18px] border-b border-solid border-gray-100">
                  <nav className="flex flex-col items-start gap-6 w-full">
                    <div className="inline-flex items-center gap-2.5 rounded-md">
                      <div className="inline-flex items-center gap-1.5 rounded-md">
                        <HomeIcon className="w-4 h-4 text-[#4a5565]" />
                        <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                          Home
                        </span>
                        <ChevronRightIcon className="w-3.5 h-3.5 text-[#4a5565]" />
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-md">
                        <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                          Fleet Inventory
                        </span>
                      </div>
                    </div>
  
                    <div className="flex flex-col items-start gap-2 w-full">
                      <h1 className="font-figtree font-semibold text-[#101828] text-2xl md:text-3xl tracking-[0] leading-7 md:leading-8">
                        Browse Our Business Fleet Leasing Inventory
                      </h1>
                      <p className="font-figtree font-normal text-[#4a5565] text-base md:text-lg tracking-[0] leading-6 md:leading-7">
                        Build a fleet that drives your business forward.
                      </p>
                    </div>
                  </nav>
                </div>
  
                <div className="flex flex-col items-start gap-6 md:gap-9 py-4 md:py-[18px] border-b border-solid border-gray-100">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full">
                    <div className="flex items-center gap-2 px-3 py-2.5 bg-white rounded border border-solid shadow-shadow-xs w-full md:w-auto">
                      <Switch 
                        checked={limitedDealsEnabled}
                        onCheckedChange={setLimitedDealsEnabled}
                      />
                      <span className="font-figtree font-semibold text-[#101828] text-sm tracking-[0] leading-5">
                        Limited-time deals (33)
                      </span>
                    </div>
  
                    <Select>
                      <SelectTrigger className="w-full bg-white rounded border border-solid shadow-shadow-xs h-10">
                        <SelectValue
                          placeholder="Brand"
                          className="font-figtree font-normal text-[#101828] text-sm tracking-[0] leading-5"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="toyota">Toyota</SelectItem>
                        <SelectItem value="honda">Honda</SelectItem>
                        <SelectItem value="ford">Ford</SelectItem>
                      </SelectContent>
                    </Select>
  
                    <Select>
                      <SelectTrigger className="w-full bg-white rounded border border-solid shadow-shadow-xs h-10">
                        <SelectValue
                          placeholder="Body type"
                          className="font-figtree font-normal text-[#101828] text-sm tracking-[0] leading-5"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="suv">SUV</SelectItem>
                        <SelectItem value="sedan">Sedan</SelectItem>
                        <SelectItem value="truck">Truck</SelectItem>
                      </SelectContent>
                    </Select>
  
                    <Select>
                      <SelectTrigger className="w-full bg-white rounded border border-solid shadow-shadow-xs h-10">
                        <SelectValue
                          placeholder="Price per week"
                          className="font-figtree font-normal text-[#101828] text-sm tracking-[0] leading-5"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="0-200">$0 - $200</SelectItem>
                        <SelectItem value="200-400">$200 - $400</SelectItem>
                        <SelectItem value="400+">$400+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
  
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full space-y-3 md:space-y-0 py-2 md:py-0">
              <span className="font-figtree font-medium text-[#194170] text-sm tracking-[0] leading-5">
                450 leasing deals available
              </span>
  
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-full md:w-auto bg-white rounded border border-solid shadow-shadow-xs h-9 px-3">
                  <div className="flex items-center gap-1">
                    <span className="font-figtree font-normal text-[#4a5565] text-sm tracking-[0] leading-5">
                      Sort by:
                    </span>
                    <span className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5 pl-2 pr-2">
                      {sortOption === 'recent' ? 'Recently added' : 
                       sortOption === 'price-low' ? 'Price: Low to High' : 
                       'Price: High to Low'}
                    </span>
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recent">Recently added</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {vehicleData.map((vehicle) => (
              <Card
                key={vehicle.id}
                className="relative bg-white rounded border border-solid shadow-shadow-sm"
              >
                <CardContent className="flex flex-col items-center gap-2 md:gap-[18px] pt-6 md:pt-12 pb-3 md:pb-4 px-3 md:px-4">
                  <div
                    className="w-full h-[160px] md:h-[200.02px] rounded-[10.39px] bg-cover bg-center"
                    style={{ backgroundImage: `url(${vehicle.image})` }}
                  />
  
                  <Button
                    variant="outline"
                    size="icon"
                    className="absolute top-2 md:top-4 right-2 md:right-4 w-8 h-8 md:w-10 md:h-10 bg-gray-50 rounded border border-solid shadow-shadow-xs"
                  >
                    <HeartIcon className="w-5 h-5" />
                  </Button>
  
                  <Badge className="absolute top-2 md:top-[15px] left-2 md:left-[15px] inline-flex items-center justify-center gap-1.5 px-2 py-1 bg-emerald-50 rounded border-0 hover:bg-emerald-50">
                    <StarIcon className="w-3.5 h-3.5 fill-[#004f3b] text-[#004f3b]" />
                    <span className="font-medium text-[#004f3b] text-center leading-4 font-figtree text-sm tracking-[0]">
                      Trending
                    </span>
                  </Badge>
  
                  <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
                    <h3 className="font-figtree font-semibold text-[#0b1c31] text-lg md:text-2xl tracking-[0] leading-6">
                      Toyota Corolla Cross
                    </h3>
  
                    <div className="flex flex-wrap items-center gap-2 w-full">
                      <Badge className="inline-flex items-center justify-center gap-1 px-1.5 py-0.5 bg-[#c70036] rounded border-0 hover:bg-[#c70036]">
                        <span className="font-medium text-white text-center leading-4 font-figtree text-sm tracking-[0]">
                          Limited-time deal
                        </span>
                      </Badge>
  
                      <div className="w-[3px] h-[3px] bg-[#b3ceee] rounded-[1.5px]" />
  
                      <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-5">
                        SUV
                      </span>
  
                      <div className="w-[3px] h-[3px] bg-[#b3ceee] rounded-[1.5px]" />
  
                      <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-5">
                        Petrol, Hybrid
                      </span>
                    </div>
                  </div>
  
                  <div className="flex flex-col md:flex-row items-start md:items-end gap-2 md:gap-3 p-2 md:p-3 w-full bg-gray-50 rounded">
                    <div className="flex flex-col h-12 items-start gap-1 flex-1">
                      <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-4">
                        STARTING AT
                      </span>
  
                      <div className="flex items-end gap-1.5 w-full">
                        <span className="font-figtree font-semibold text-[#c70036] text-2xl md:text-3xl tracking-[0.80px] leading-7">
                          $288
                        </span>
  
                        <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0.40px] leading-4">
                          WEEKLY
                        </span>
                      </div>
                    </div>
  
                    <Button
                    onClick={() => router.push(`/inventory/${vehicle.id}`)}
                    className="w-full md:w-[140px] gap-1.5 px-4 py-2.5 bg-[#194170] rounded shadow-shadow-xs hover:bg-[#194170]/90 h-auto mt-2 md:mt-0">
                      <span className="font-figtree font-medium text-white text-sm tracking-[0] leading-5">
                        Get A Quote
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-white" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
  
        <div className="flex flex-col items-center justify-center gap-4 md:gap-[18px] mt-4 md:mt-0">
          <span className="font-figtree font-normal text-[#4a5565] text-sm text-center tracking-[0] leading-4">
            Showing 1 to 12 of 450 vehicles
          </span>
  
          <div className="flex flex-wrap items-center justify-center shadow-shadow-xs overflow-x-auto py-2">
            <Button
              variant="outline"
              size="icon"
              className="w-8 md:w-9 h-8 md:h-9 bg-white rounded-[4px_0px_0px_4px] border border-solid"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </Button>
  
            <Button
              variant="outline"
              className="w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px bg-white border border-solid"
            >
              <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                1
              </span>
            </Button>
  
            <Button
              variant="outline"
              className="w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px bg-white border border-solid"
            >
              <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                2
              </span>
            </Button>
  
            <Button
              variant="outline"
              className="w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px bg-gray-50 border border-solid"
            >
              <span className="font-medium text-[#194170] leading-5 font-figtree text-sm tracking-[0]">
                3
              </span>
            </Button>
  
            <Button
              variant="outline"
              className="w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px bg-white border border-solid"
            >
              <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                ...
              </span>
            </Button>
  
            <Button
              variant="outline"
              className="h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px bg-white border border-solid"
            >
              <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                38
              </span>
            </Button>
  
            <Button
              variant="outline"
              size="icon"
              className="w-8 md:w-9 h-8 md:h-9 -ml-px bg-white rounded-[0px_4px_4px_0px] border border-solid"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>
      </div>


      </>
    );
};


  export default InventorySection;
  InventorySection.Layout = "Default";
  
  

  