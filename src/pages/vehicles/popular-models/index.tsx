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
import { useRouter } from "next/router";
import axiosInstance from "@/service/api";
import { useEffect } from "react";
import { VehicleCard } from "@/components/vehicle-card";
import { VehiclesCarousel } from "@/components/carousels/VehiclesCarousel";
import Head from 'next/head';



const PopularModelsSection = (): JSX.Element => {
const [selectedFilter, setSelectedFilter] = useState<string>("");
const router = useRouter();

const [bodyTypes, setBodyTypes] = useState<string[]>([]);


  const [cars, setCars] = useState<any>([]);

  useEffect(() => {
    // Only fetch body types on initial mount
    getBodyTypes();
  }, []);

  // This effect will run when selectedFilter changes
  useEffect(() => {
    // Only call getCars if selectedFilter has a value
    if (selectedFilter) {
      getCars();
    }
  }, [selectedFilter]);

  const getBodyTypes = () => {
    axiosInstance.get(`/v1/body-types`)
      .then(response => {
        console.log('Body types data:', response.data);
        setBodyTypes(response.data || []);
        // Set the filter after we have the body types
        // Use setTimeout to ensure this happens in the next event loop
        // after the bodyTypes state has been updated
        setTimeout(() => {
          setSelectedFilter('Ute');
        }, 0);
      })
      .catch(error => {
        console.error('Error fetching body types:', error);
      });
  }
    
  const getCars = () => {
    // Don't proceed if selectedFilter is empty
    if (!selectedFilter) {
      return;
    }

    // Build query parameters
    const params = new URLSearchParams();
    
    // Format the tag based on the selected filter
    const tags = selectedFilter === 'Ute' ? 'Popular Utes' : `Popular ${selectedFilter}`;
    console.log('Searching with tags:', tags);
    
    // Add basic pagination params
    params.append('page', '1');
    params.append('limit', '12');
    params.append('tags', tags);
    
    console.log('API query params:', params.toString());
    
    // Clear previous cars before making the new request
    setCars([]);
    
    // Make the API call
    axiosInstance.get(`/v1/cars/search?${params.toString()}`)
      .then(response => {
        const carsData = response.data.data || [];
        console.log(`Found ${carsData.length} cars for ${selectedFilter}:`, carsData);
        
        // Update the cars state with the new data
        setCars(carsData);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        // Clear cars on error
        setCars([]);
      });
  }
  



const handleFilterClick = (filter: string) => {
  console.log(filter, selectedFilter);
  if (selectedFilter == filter) {
    setSelectedFilter(""); // Deselect if already selected
  } else {
    setSelectedFilter(filter);
  }
};

// We're already filtering by tag in the API call, so we don't need to filter again
// Just use the cars directly from the API response
const filteredCars = cars;

const Content = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-start gap-6 w-full mt-6">
    <div className="relative w-full">
        <VehiclesCarousel
                 title={title}
                 actionLabel="View all"
                 onAction={() => router.push("/inventory")}
                 cars={filteredCars}
                 showMultipleColumns={true}
                 getCardKey={(car: any) => car?.NVIC || car?.id || car?.title}
                 renderCard={(car: any) => (
                           <VehicleCard
                     image={
                       car?.NVIC
                         ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${car.NVIC}`
                         : "/assets/images/no-image.png"
                     }
                     name={car?.title}
                     type={car?.bodyType}
                     fuel={car?.selectedVariant?.variant}
                     price={car?.selectedVariant?.weeklyPrice}
                             router={router}
                     id={car?.slug}
                     isTrending={car?.tags?.filter((tag: string) =>
                         tag.toLowerCase().includes("trending")
                       )?.length > 0}
                     tags={
                       car?.tags?.filter((tag: string) =>
                         tag.toLowerCase().includes("limited")
                       ) ?? car?.tags
                     }
                   />
                 )}
               />
       
    </div>
</div>
  )
}

  return (
      <>
      <Head>
        <title>Popular Models</title>
      </Head>
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
                Our most popular leased based on sales. Updated frequently.
                </p>
              </div>

              <div className="flex flex-col gap-6 w-full max-w-full border-t border-gray-200 pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4">
                    {bodyTypes.map((type: any) => (
                      <Button 
                        key={type.uid}
                        variant="outline" 
                        className={`h-[40px] w-[160px] px-4 py-2 border rounded-md text-sm font-medium shadow-sm transition-colors ${selectedFilter === type.name ? 'bg-[#194170] text-white border-[#194170]' : 'bg-[#F9FAFB] border-[#E5E7EB] text-[#4a5565] hover:bg-[#F3F4F6]'}`}
                        onClick={() => handleFilterClick(type.name)}
                      >
                        {type.name}
                      </Button>
                    ))}
                  </div>
                </div>
                
              </div>
            </div>

          
          </div>
        </section>

        </div>
        <Content title={`Popular ${selectedFilter ? selectedFilter : 'Models'} for Business Lease`}/>
       
      </div>


    </section>
    </div>


    </>
  );
};


export default PopularModelsSection;
PopularModelsSection.Layout = "Default";



