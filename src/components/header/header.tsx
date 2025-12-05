import { ArrowRightIcon, HeartIcon, MenuIcon, PhoneIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { useRouter, usePathname } from "next/navigation";

const navigationItems = [
  { label: "Limited-time deals", link: "/deals/limited-time" },
  { label: "Popular models", link: "/vehicles/popular-models" },
  { label: "Explore by brands", link: "/explore" },
  { label: "Explore by body type", link: "/explore-body" },
  { label: "Fleet Finance & Leasing", link: "/products/fleet-finance" },
  { label: "Business Finance", link: "/products/business-finance" },
  { label: "About us", link: "/about" },
];

export const NavigationBarSection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  return (
    <nav className="flex flex-col items-start w-full border-b relative">
      <div className="flex flex-col items-center justify-center p-4 bg-white border-b w-full">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-2 sm:px-4">
          <img
            onClick={() => router.push("/")}
            className="w-[90px] sm:w-[109.59px] h-8 sm:h-10 cursor-pointer"
            alt="Logo NEW"
            src="/assets/images/logo.png"
          />


          <div className="inline-flex items-center gap-2 sm:gap-5">
            {/* <Button
              variant="outline"
              onClick={()=>{
                router.push('/wishlist')
              }}
              className="hidden sm:inline-flex items-center justify-center gap-1.5 px-3 py-2 h-auto bg-gray-50 rounded border border-solid shadow-shadow-xs"
            >
              <HeartIcon className="w-4 h-4" fill="red"  stroke="red" />
              <span className="font-figtree font-medium text-[#4a5565] text-sm tracking-[0] leading-5 whitespace-nowrap">
                Favourites (5)
              </span>
            </Button> */}

            <Button 
            onClick={()=>{
              router.push('/services/consultation')
            }}
            className="mr-[50px] lg:mr-0 lg:ml-0 inline-flex items-center justify-center gap-1.5 px-3 py-2 h-auto bg-[#194170] rounded shadow-shadow-xs hover:bg-[#194170]/90">
              <span className="font-figtree font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                Free consultation
              </span>
              <ArrowRightIcon className="w-4 h-4 text-white" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className="sm:hidden absolute right-4 top-4 z-[9999]">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="h-10 w-10 bg-gray-100 rounded-md border border-gray-200"
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden fixed inset-0 z-[999] bg-white pt-16 px-4">
          <div className="flex flex-col space-y-4">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-start p-2 border-b border-gray-100"
                onClick={() => {
                  router.push(item.link)
                  setMobileMenuOpen(false)
                }}
              >
                <span className={`font-medium ${pathname === item.link ? 'text-[#194170] font-semibold' : 'text-[#4a5565]'} text-base`}>
                  {item.label}
                </span>
              </div>
            ))}
            <div className="mt-4 flex items-center gap-1.5 justify-center  pt-4">
              <PhoneIcon className="w-[18px] h-[18px] text-[#4a5565]" />
              <span className="font-medium text-[#4a5565] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
                1300 FLA AUS (1300 352 287)
              </span>
            </div>
            {/* <Button
              variant="outline"
              className="flex items-center justify-center gap-1.5 mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <HeartIcon className="w-4 h-4" fill="red" stroke="currentColor" />
              <span className="font-medium text-[#4a5565] text-sm">
                Favourites (5)
              </span>
            </Button> */}
          </div>
        </div>
      )}

      <div className="hidden sm:flex items-center justify-center w-full bg-white border-b">
        <div className="flex w-full max-w-[1280px] items-center justify-between px-3 sm:px-4 py-3">
          <div className="flex items-center gap-4 md:gap-5 lg:gap-6 flex-1 overflow-x-auto whitespace-nowrap  pb-[10px] lg:pb-0 pt-[10px] lg:pt-0">
            {navigationItems.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.link)}
                className="flex items-center gap-1.5 rounded-md cursor-pointer transition-opacity"
              >
                <span className={`font-figtree hover:text-[#194170] font-medium ${pathname === item.link ? 'text-[#194170] font-semibold' : 'text-[#4a5565]'} text-lg md:text-sm tracking-[0] leading-5 whitespace-nowrap`}>
                  {item.label}
                </span>
              </div>
            ))}
          </div>

          <div 
          onClick={()=>{
            window.location.href = "tel:1300352287"
          }}
          className="hidden lg:inline-flex items-center gap-1.5 cursor-pointer">
            <PhoneIcon className="w-[18px] h-[18px] text-[#4a5565]" />
            <span className="mt-[-1.00px] font-figtree font-medium text-[#4a5565] text-sm text-center tracking-[0] leading-5 whitespace-nowrap">
              1300 FLA AUS (1300 352 287)
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBarSection;

