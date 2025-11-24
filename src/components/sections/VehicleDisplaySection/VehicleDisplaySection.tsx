'use client'
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "../../ui/button";
import { Label } from "../../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../ui/select";
import { useRouter } from "next/router";
import axiosInstance from "@/service/api";


export const VehicleDisplaySection = (): JSX.Element => {
  const router = useRouter();
  const [brands, setBrands] = useState<any[]>([]);
  const [bodyTypes, setBodyTypes] = useState<any[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedBodyType, setSelectedBodyType] = useState<string>("all");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Fetch brands
        const brandsResponse = await axiosInstance.get('/v1/car-brands');
        setBrands(brandsResponse.data || []);
        
        // Fetch body types
        const bodyTypesResponse = await axiosInstance.get('/v1/car-body-types/grouped-list');
        setBodyTypes(bodyTypesResponse.data || []);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle responsive banner image
  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };
    
    // Check on initial render
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const handleSearch = () => {
    const params = new URLSearchParams();
    
    if (selectedBrand && selectedBrand !== "all") {
      params.append('brand', selectedBrand);
    }
    
    if (selectedBodyType && selectedBodyType !== "all") {
      params.append('bodyType', selectedBodyType);
    }
    
    const queryString = params.toString();
    router.push(`/inventory${queryString ? `?${queryString}` : ''}`);
  };

  return (
    <section className="flex flex-col items-center w-full py-8 md:py-12">
      <div className="flex flex-col items-center w-full max-w-[750px] mx-auto px-4 md:px-6 lg:px-8 bg-white rounded-lg border border-gray-200 shadow-sm relative overflow-visible">
        <div className="flex flex-col items-center justify-center gap-8 py-10 md:py-12 w-full max-w-[800px]" style={{
          zIndex: 100
        }}>
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="text-4xl md:text-5xl font-semibold text-center leading-tight">
              <span className="text-[#101828]">
                Smarter Leasing. Bigger Saving.
              </span>
              <br />
              <span className="text-[#c70036]">
                Faster Approvals.
              </span>
            </h1>

            <p className="text-base text-[#4a5565] text-center max-w-[600px] mx-auto">
              Grow your fleet with quick approvals and finance options built for
              Australian businesses.
            </p>
          </div>

          <div className="flex flex-col gap-6 w-full max-w-[600px]">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full">
              <div className="flex flex-col w-full md:w-1/2 gap-2">
                <Label
                  htmlFor="vehicle-brand"
                  className="font-medium text-[#101828] text-sm"
                >
                  Vehicle brand
                </Label>
                {brands.length > 0 && <Select 
                value={selectedBrand} onValueChange={setSelectedBrand}>
                  <SelectTrigger
                    id="vehicle-brand"
                    placeholder="All brands"
                    className="w-full bg-white shadow-sm border border-gray-200"
                    disabled={isLoading}
                  >
                    <SelectValue placeholder="All brands" />
                  </SelectTrigger>
                  <SelectContent style={{
                    zIndex: 1000
                  }}>
                    <SelectItem value="all">All brands</SelectItem>
                    {brands.map((brand) => (
                      <SelectItem key={brand.uid} value={brand.name}>
                        {brand.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>}
              </div>

              <div className="flex flex-col w-full md:w-1/2 gap-2">
                <Label
                  htmlFor="body-type"
                  className="font-medium text-[#101828] text-sm"
                >
                  Body type
                </Label>
                {bodyTypes.length > 0 && <Select value={selectedBodyType} onValueChange={setSelectedBodyType}>
                  <SelectTrigger
                    id="body-type"
                    placeholder="All body types"
                    className="w-full bg-white shadow-sm border border-gray-200"
                    disabled={isLoading}
                  >
                    <SelectValue placeholder="All body types" />
                  </SelectTrigger>
                  <SelectContent style={{
                    zIndex: 1000
                  }}>
                    <SelectItem value="all">All body types</SelectItem>
                    {bodyTypes.map((bodyType) => (
                      <SelectItem key={bodyType.alternateName} value={bodyType.alternateName}>
                        {bodyType.alternateName}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>}
              </div>
            </div>

            <Button
            onClick={handleSearch}
            className="w-full h-auto bg-[#194170] hover:bg-[#194170]/90 shadow-sm py-3 gap-2 mt-2 cursor-pointer"
            disabled={isLoading}>
              <SearchIcon className="w-5 h-5 text-white" />
              <span className="font-medium text-white">
                {(selectedBrand && selectedBrand !== "all") || (selectedBodyType && selectedBodyType !== "all") ? 'Search vehicles' : 'Show all vehicles'}
              </span>
            </Button>
          </div>
        </div>

        <div className="w-full mt-8 md:mt-12 relative" style={{ height: '200px', marginBottom: '-40px' }}>
          <div 
            className="w-full h-[180px] md:h-[220px] flex items-end justify-center absolute bottom-0 left-0 right-0" 
            style={{
              backgroundImage: `url(/assets/images/${isSmallScreen ? 'banner-sm.png' : 'banner.png'})`,
              backgroundPosition: `${isSmallScreen ? 'center 60%' : 'center bottom'}`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              transform: `${isSmallScreen ? 'scale(1.2)' : 'scale(1.6)'}`, // Makes the image larger to extend outside the card
              transformOrigin: 'bottom center',
              zIndex: 10 // Ensures the image appears above other elements
            }}
          />
        </div>
      </div>
    </section>
  );
};
