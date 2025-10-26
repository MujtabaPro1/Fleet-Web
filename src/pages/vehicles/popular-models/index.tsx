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
import { Label } from "@/components/ui/label";
import { SearchIcon, XIcon } from "lucide-react";
import { SmallVehicleCard } from "@/components/small-vehicle-card";


const utesVehicles = [
  { 
    image: "bg-[url(/assets/images/car-image.png)]",
    name: "Ford Ranger",
    type: "Ute",
    fuel: "Diesel",
    price: "315"
  },
  { 
    image: "bg-[url(/assets/images/car-image.png)]",
    name: "Toyota Hilux",
    type: "Ute",
    fuel: "Diesel",
    price: "325"
  },
  { 
    image: "bg-[url(/assets/images/car-image.png)]",
    name: "Mitsubishi Triton",
    type: "Ute",
    fuel: "Diesel",
    price: "305"
  },
  { 
    image: "bg-[url(/assets/images/car-image.png)]",
    name: "Isuzu D-Max",
    type: "Ute",
    fuel: "Diesel",
    price: "310"
  },
  { 
    image: "bg-[url(/assets/images/car-image.png)]",
    name: "Mazda BT-50",
    type: "Ute",
    fuel: "Diesel",
    price: "300"
  },
  { 
    image: "bg-[url(/assets/images/car-image.png)]",
    name: "Nissan Navara",
    type: "Ute",
    fuel: "Diesel",
    price: "295"
  },
];


const PopularModelsSection = (): JSX.Element => {
const [limitedDealsEnabled, setLimitedDealsEnabled] = useState<boolean>(true);
const [sortOption, setSortOption] = useState<string>("recent");
const [selectedFilter, setSelectedFilter] = useState<string>("");
const [searchQuery, setSearchQuery] = useState<string>("");

const bodyTypes = ["Utes", "SUVs", "Vans", "Mini bus", "Sedans", "Hatchback", "Coupe"];

const handleFilterClick = (filter: string) => {
  if (selectedFilter === filter) {
    setSelectedFilter(""); // Deselect if already selected
  } else {
    setSelectedFilter(filter);
  }
};

const Content = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-start gap-6 w-full mt-6">
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4">
      <h2 className="font-semibold text-[#101828] text-xl md:text-2xl">
         {title}
      </h2>

      <div className="flex items-center gap-4">
        <Button
          variant="ghost"
          className="h-auto px-0 lg:px-3 py-0 lg:py-2 hover:bg-transparent text-[#194170]"
        >
          <span className="font-medium text-sm">
            View all
          </span>
        </Button>

        <div className="hidden lg:flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 bg-[#101828] hover:bg-[#101828]/90 rounded-full"
          >
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </Button>
        </div>
      </div>
    </div>

    <div className="relative w-full">
      <div className="overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-6 min-w-max">
          {utesVehicles.map((vehicle, index) => (
            <div key={index} className="w-[350px] flex-shrink-0">
              <SmallVehicleCard 
                image={vehicle.image}
                name={vehicle.name}
                type={vehicle.type}
                fuel={vehicle.fuel}
                price={vehicle.price}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex lg:hidden justify-center items-center gap-2 mt-6">
          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 bg-gray-100 hover:bg-gray-200 rounded-full"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="w-9 h-9 bg-[#101828] hover:bg-[#101828]/90 rounded-full"
          >
            <ChevronRightIcon className="w-5 h-5 text-white" />
          </Button>
        </div>
    </div>
</div>
  )
}

  return (
      <>
    <div className="bg-[#f9fafb] pt-6 md:pt-12 pb-6 md:pb-12">
    <section className="container flex flex-col w-full items-center justify-center gap-4 md:gap-6 px-3 md:px-4">
      <div className="flex flex-col items-start gap-4 w-full">
        <div className="flex flex-col w-full items-start gap-5">
          
          <section className="flex flex-col items-center w-full ">
          <div className="flex flex-col items-center w-full max-w-full mx-auto px-4 md:px-6 lg:px-8 bg-white rounded-lg border border-gray-200 shadow-sm relative overflow-visible">
            <div className="flex flex-col items-center justify-center gap-8 py-10 md:py-12 w-full max-w-full">
              <div className="flex flex-col items-center justify-center gap-6">
                <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight">
                  <span className="text-[#101828]">
                  Fleet Leasing Australia’s
                  </span>
                  <br />
                  <span className="text-[#c70036]">
                  Most Popular Business Fleet Models
                  </span>
                </h1>

                <p className="text-base text-[#4a5565] text-center max-w-[600px] mx-auto">
                Our most popular leased based on sales. Updated frequently..
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full max-w-full border-t border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                    {bodyTypes.map((type) => (
                      <Button 
                        key={type}
                        variant="outline" 
                        className={`h-[40px] w-[160px] px-4 py-2 border rounded-md text-sm font-medium shadow-sm transition-colors ${selectedFilter === type ? 'bg-[#194170] text-white border-[#194170]' : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#4a5565] hover:bg-[#F3F4F6]'}`}
                        onClick={() => handleFilterClick(type)}
                      >
                        {type}
                      </Button>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>

          
          </div>
        </section>

        </div>

         
    
          

          <Content title="Popular Utes for Business Lease"/>
          <Content title="Popular SUVs for Business Lease"/> 
          <Content title="Popular Vans for Business Lease"/>
          <Content title="Popular Mini Bus for Business Lease" />
          <Content title="Popular Sedans for Business Lease" />
          <Content title="Popular Hatchbacks for Business Lease" />
          <Content title="Popular Coupe for Business Lease" />

      
      </div>


    </section>
    </div>


    </>
  );
};


export default PopularModelsSection;
PopularModelsSection.Layout = "Default";



