import {
    ArrowRightIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    HeartIcon,
    HomeIcon,
    StarIcon,
    XIcon,
  } from "lucide-react";
  import React, { useEffect, useState } from "react";
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
import axiosInstance from "@/service/api";
import { VehicleCard } from "@/components/vehicle-card";


const LimitedTime = (): JSX.Element => {
  const [limitedDealsEnabled, setLimitedDealsEnabled] = useState<boolean>(true);
  const [sortOption, setSortOption] = useState<string>("recent");
  const router = useRouter();
  const [brands, setBrands] = useState([]);
  const [bodyType, setBodyType] = useState([]);
  const [cars, setCars] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  
  // Filter states
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [selectedBodyType, setSelectedBodyType] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");


  useEffect(()=>{
    getBrands();
    getBodyTypes();
    getCars();
  },[page, limitedDealsEnabled, selectedBrand, selectedBodyType, priceRange])

  const getBrands = () => {
    axiosInstance.get('/v1/car-brands')
      .then(response => {
        console.log(response.data);
        setBrands(response.data);;
      })
      .catch(error => {
        console.error('Error fetching brands:', error);
      });
  }

  const getBodyTypes = () => {
    axiosInstance.get('/v1/body-types')
      .then(response => {
        console.log(response.data);
        setBodyType(response.data);
      })
      .catch(error => {
        console.error('Error fetching body types:', error);
      });
  }

  const getCars = () => {
    // Build query parameters
    const params = new URLSearchParams();
    
    // Add basic pagination params
    params.append('page', page.toString());
    params.append('limit', '10');
    
    // Add filter params if they exist
    if (limitedDealsEnabled) {
      params.append('tags', 'Limited Time Offer');
    }
    
    if (selectedBrand) {
      params.append('brand', selectedBrand);
    }
    
    if (selectedBodyType) {
      params.append('bodyType', selectedBodyType);
    }
    
    // Handle price range
    if (priceRange) {
      const [min, max] = getPriceRangeValues(priceRange);
      if (min) params.append('weeklyMin', min);
      if (max) params.append('weeklyMax', max);
    }
    
    // Make the API call
    axiosInstance.get(`/v1/cars/search?${params.toString()}`)
      .then(response => {
        console.log(response.data);
        setCars(response.data.data || []);
        setTotalItems(response.data.total || 0);
        setTotalPages(response.data.totalPages || 1);
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
      });
  }
  
  // Helper function to extract min and max values from price range
  const getPriceRangeValues = (range: string): [string, string] => {
    switch (range) {
      case '0-200':
        return ['0', '200'];
      case '200-400':
        return ['200', '400'];
      case '400+':
        return ['400', ''];
      default:
        return ['', ''];
    }
  }
  
  // Reset all filters
  const resetFilters = () => {
    setLimitedDealsEnabled(false);
    setSelectedBrand('');
    setSelectedBodyType('');
    setPriceRange('');
    setPage(1);
  }



  const AppliedFilters = () => {
    return (
      <div className="flex flex-col  w-full lg:flex-row items-start gap-2">
        {limitedDealsEnabled && (
          <span className="font-figtree w-full lg:w-auto lg:min-w-[150px] font-medium bg-[#c70036] p-2 text-white text-sm tracking-[0] leading-5 flex items-center justify-between gap-2 rounded">
            Limited-time deals
            <XIcon onClick={() => setLimitedDealsEnabled(false)} className="w-4 h-4 cursor-pointer" />
          </span>
        )}
        {selectedBrand && (
          <span className="font-figtree w-full lg:w-auto lg:min-w-[150px] font-medium bg-[#c70036] p-2 text-white text-sm tracking-[0] leading-5 flex items-center justify-between gap-2 rounded">
            {selectedBrand}
            <XIcon onClick={() => setSelectedBrand('')} className="w-4 h-4 cursor-pointer" />
          </span>
        )}
        {selectedBodyType && (
          <span className="font-figtree w-full lg:w-auto lg:min-w-[150px] font-medium bg-[#c70036] p-2 text-white text-sm tracking-[0] leading-5 flex items-center justify-between gap-2 rounded">
            {selectedBodyType}
            <XIcon onClick={() => setSelectedBodyType('')} className="w-4 h-4 cursor-pointer" />
          </span>
        )}
        {priceRange && (
          <span className="font-figtree w-full lg:w-auto lg:min-w-[150px] font-medium bg-[#c70036] p-2 text-white text-sm tracking-[0] leading-5 flex items-center justify-between gap-2 rounded">
            {priceRange}
            <XIcon onClick={() => setPriceRange('')} className="w-4 h-4 cursor-pointer" />
          </span>
        )}
      </div>
    );
  }


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
                      <span className="font-figtree font-semibold text-[#8B0836] text-sm tracking-[0] leading-5">
                        Limited-time deals
                      </span>
                    </div>
  
                    <Select value={selectedBrand} onValueChange={setSelectedBrand}>
                      <SelectTrigger className="w-full bg-white rounded border border-solid shadow-shadow-xs h-10">
                        <SelectValue
                          placeholder="Brand"
                          className="font-figtree font-normal text-[#101828] text-sm tracking-[0] leading-5"
                        />
                      </SelectTrigger>
                      <SelectContent className="font-figtree">
                        {brands.map((brand: any) => (
                          <SelectItem key={brand.id} value={brand.name}>
                            {brand.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
  
                    <Select value={selectedBodyType} onValueChange={setSelectedBodyType}>
                      <SelectTrigger className="w-full bg-white rounded border border-solid shadow-shadow-xs h-10">
                        <SelectValue
                          placeholder="Body type"
                          className="font-figtree font-normal text-[#101828] text-sm tracking-[0] leading-5"
                        />
                      </SelectTrigger>
                      <SelectContent>
                        {bodyType.map((body: any) => (
                          <SelectItem key={body.name} value={body.name}>
                            {body.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
  
                    <Select value={priceRange} onValueChange={setPriceRange}>
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
                  
                        <div className="flex flex-col lg:flex-row justify-between items-center w-full">
                                      {AppliedFilters()}
                                      <Button 
                                        variant="outline" 
                                        onClick={resetFilters}
                                        className="bg-white lg:w-auto w-full mt-2 lg:mt-0 rounded border border-solid shadow-shadow-xs">
                                        Reset Filters
                                      </Button>
                                    </div>
                        
                </div>
              </CardContent>
            </Card>
  
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full space-y-3 md:space-y-0 py-2 md:py-0">
              <span className="font-figtree font-medium text-[#194170] text-sm tracking-[0] leading-5">
                {totalItems} limited time deals available
              </span>
{/*   
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
              </Select> */}
            </div>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {cars.map((vehicle: any) => (
              <VehicleCard
                key={vehicle.id}
                image={vehicle.NVIC ? `https://api-dev.fleetleasingaustralia.com.au/api/v1/glass-guide/image/${vehicle.NVIC}` : "/assets/images/no-image.png"}
                name={vehicle.name}
                type={vehicle.type}
                fuel={vehicle.selectedVariant?.variant}
                price={vehicle.price}
                router={router}
                id={vehicle.slug}
                tags={vehicle?.tags?.filter((tag: any) => tag.includes('Limited Time')).length > 0 ? ['Limited Time Offer'] : []}
              />
            ))}
          </div>
        </div>
  
           <div className="flex flex-col items-center justify-center gap-4 md:gap-[18px] mt-4 md:mt-0">
                 <span className="font-figtree font-normal text-[#4a5565] text-sm text-center tracking-[0] leading-4">
                   Showing {cars?.length > 0 ? ((page - 1) * 10) + 1 : 0} to {((page - 1) * 10) + cars?.length} of {totalItems} vehicles
                 </span>
         
                 <div className="flex flex-wrap items-center justify-center shadow-shadow-xs overflow-x-auto py-2">
                   {/* Previous Page Button */}
                   <Button
                     variant="outline"
                     size="icon"
                     className="w-8 md:w-9 h-8 md:h-9 bg-white rounded-[4px_0px_0px_4px] border border-solid"
                     onClick={() => page > 1 && setPage(page - 1)}
                     disabled={page <= 1}
                   >
                     <ChevronLeftIcon className="w-4 h-4" />
                   </Button>
       
                   {/* Dynamic Page Numbers */}
                   {(() => {
                     const pageButtons = [];
                     const maxVisiblePages = 5;
                     let startPage = 1;
                     let endPage = totalPages;
                     
                     // Calculate visible page range
                     if (totalPages > maxVisiblePages) {
                       const middlePage = Math.floor(maxVisiblePages / 2);
                       
                       if (page <= middlePage + 1) {
                         // Near the start
                         endPage = maxVisiblePages;
                       } else if (page >= totalPages - middlePage) {
                         // Near the end
                         startPage = totalPages - maxVisiblePages + 1;
                       } else {
                         // Middle
                         startPage = page - middlePage;
                         endPage = page + middlePage;
                       }
                     }
                     
                     // First page
                     if (startPage > 1) {
                       pageButtons.push(
                         <Button
                           key="page-1"
                           variant="outline"
                           className={`w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px ${1 === page ? 'bg-gray-50' : 'bg-white'} border border-solid`}
                           onClick={() => setPage(1)}
                         >
                           <span className={`font-medium ${1 === page ? 'text-[#194170]' : 'text-[#4a5565]'} leading-5 font-figtree text-sm tracking-[0]`}>
                             1
                           </span>
                         </Button>
                       );
                       
                       // Ellipsis after first page if needed
                       if (startPage > 2) {
                         pageButtons.push(
                           <Button
                             key="ellipsis-1"
                             variant="outline"
                             className="w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px bg-white border border-solid"
                             disabled
                           >
                             <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                               ...
                             </span>
                           </Button>
                         );
                       }
                     }
                     
                     // Page numbers
                     for (let i = startPage; i <= endPage; i++) {
                       // Skip first and last page if they're shown separately
                       if ((i === 1 && startPage > 1) || (i === totalPages && endPage < totalPages)) {
                         continue;
                       }
                       
                       pageButtons.push(
                         <Button
                           key={`page-${i}`}
                           variant="outline"
                           className={`w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px ${i === page ? 'bg-gray-50' : 'bg-white'} border border-solid`}
                           onClick={() => setPage(i)}
                         >
                           <span className={`font-medium ${i === page ? 'text-[#194170]' : 'text-[#4a5565]'} leading-5 font-figtree text-sm tracking-[0]`}>
                             {i}
                           </span>
                         </Button>
                       );
                     }
                     
                     // Ellipsis before last page if needed
                     if (endPage < totalPages - 1) {
                       pageButtons.push(
                         <Button
                           key="ellipsis-2"
                           variant="outline"
                           className="w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px bg-white border border-solid"
                           disabled
                         >
                           <span className="font-medium text-[#4a5565] leading-5 font-figtree text-sm tracking-[0]">
                             ...
                           </span>
                         </Button>
                       );
                     }
                     
                     // Last page
                     if (endPage < totalPages) {
                       pageButtons.push(
                         <Button
                           key={`page-${totalPages}`}
                           variant="outline"
                           className={`w-8 md:w-9 h-auto gap-1.5 px-2 md:px-3 py-1.5 md:py-2 -ml-px ${totalPages === page ? 'bg-gray-50' : 'bg-white'} border border-solid`}
                           onClick={() => setPage(totalPages)}
                         >
                           <span className={`font-medium ${totalPages === page ? 'text-[#194170]' : 'text-[#4a5565]'} leading-5 font-figtree text-sm tracking-[0]`}>
                             {totalPages}
                           </span>
                         </Button>
                       );
                     }
                     
                     return pageButtons;
                   })()} 
       
                   {/* Next Page Button */}
                   <Button
                     variant="outline"
                     size="icon"
                     className="w-8 md:w-9 h-8 md:h-9 -ml-px bg-white rounded-[0px_4px_4px_0px] border border-solid"
                     onClick={() => page < totalPages && setPage(page + 1)}
                     disabled={page >= totalPages}
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


  export default LimitedTime;
  LimitedTime.Layout = "Default";
  
  

  