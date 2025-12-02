'use client'
import React from "react";
import { MainContentSection } from "@/components/sections/MainContentSection/MainContentSection";
import { VehicleDisplaySection } from "@/components/sections/VehicleDisplaySection/VehicleDisplaySection";
import SEO from "@/components/common/SEO";

export const DesktopHomepage = (): JSX.Element => {
  return (
    <div className="flex flex-col w-full bg-gray-50 min-h-screen overflow-x-hidden">
      <SEO 
        title="Fleet Leasing Australia - Find Your Perfect Vehicle | Quality Fleet Management Solutions"
        description="Discover a wide range of quality vehicles for your personal or business needs. Fleet Leasing Australia offers expert fleet management solutions and exceptional customer service."
        keywords="fleet management, vehicle leasing, car rental, trucks, vans, commercial vehicles, fleet solutions"
        ogImage="https://fleetleasingaustralia.com/images/homepage-og.jpg"
      />
  
      {/* Main content container with proper max-width */}
      <div className="flex flex-col items-center w-full">
        {/* Hero section with vehicle search */}
        <VehicleDisplaySection />
        
        {/* Main content with cards and vehicle listings */}
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 overflow-hidden">
          <MainContentSection />
        </div>
      </div>
      
  
    </div>
  );
};



export default DesktopHomepage;
DesktopHomepage.Layout = "Default";

