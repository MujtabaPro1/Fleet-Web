import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Input } from "../input";
import { Label } from "../label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";
import { Separator } from "../separator";
import { Textarea } from "../textarea";

const contactInfo = [
  {
    icon: "../../../assets/images/svg/building.svg",
    title: "Hours of Operations",
    detail: "Monday to Friday - 9 am to 5 pm",
  },
  {
    icon: "../../../assets/images/svg/info.svg",
    title: "Information & Sales",
    detail: "contact@fleetleasingaustralia.com.au",
  },
  {
    icon: "../../../assets/images/svg/phone.svg",
    title: "Contact",
    detail: "1300 FLA FLA (352 352)",
  },
];

export const ContactUsSection = (): JSX.Element => {
  return (
    <section className="flex flex-col md:flex-row w-full items-start justify-center bg-white">
      <div className="flex flex-col items-start gap-16 px-4 sm:px-8 md:px-[8rem] py-16 md:py-24 flex-1 self-stretch bg-gray-50 overflow-hidden relative">
        <img
          className="absolute top-[-346px] left-[-254px] w-[1310px] h-[1307px]"
          alt="Pattern"
          src="/pattern.svg"
        />

        <div className="flex flex-col w-full max-w-[466px] items-start gap-6 relative z-10">
          <h2 className="self-stretch [font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-4xl tracking-[-0.40px] leading-[45px]">
            Get in Touch with Our Team
          </h2>

          <p className="self-stretch [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-7">
            We&apos;re here to answer your questions, discuss opportunities, or
            help you find the right solution.
          </p>

          <div className="flex flex-col items-start gap-6 px-0 py-6 self-stretch w-full border-t border-b border-gray-300">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="flex items-start gap-2 self-stretch w-full"
              >
                <img
                  className="w-5 h-5 flex-shrink-0"
                  alt={info.title}
                  src={info.icon}
                />

                <div className="flex flex-col items-start gap-1.5 flex-1">
                  <div className="self-stretch [font-family:'Figtree',Helvetica] font-medium text-[#101828] text-base tracking-[0] leading-4">
                    {info.title}
                  </div>

                  <div className="self-stretch [font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-sm tracking-[0] leading-5">
                    {info.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Separator orientation="vertical" className="h-auto hidden md:block" />

      <div className="flex flex-col items-center justify-center gap-16 px-4 sm:px-8 md:px-16 py-16 md:py-24 flex-1 self-stretch">
        <div className="flex flex-col w-full max-w-[576px] items-start gap-6">
          <div className="flex flex-col items-start justify-center pt-0 pb-[18px] px-0 self-stretch w-full border-b border-gray-300">
            <h2 className="self-stretch [font-family:'Figtree',Helvetica] font-medium text-[#c70036] text-3xl tracking-[0] leading-7">
              Need Help? Connect with Us
            </h2>
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Name<span className="text-[#c70036]">*</span>
            </Label>

            <Input
              defaultValue="Jane Smith"
              className="w-full bg-white rounded border border-gray-300 shadow-shadow-xs px-3 py-2.5 [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
            />
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Phone number<span className="text-[#c70036]">*</span>
            </Label>

            <Input
              defaultValue="(000) 000-0000"
              className="w-full bg-white rounded border border-gray-300 shadow-shadow-xs px-3 py-2.5 [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
            />
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Email<span className="text-[#c70036]">*</span>
            </Label>

            <div className="flex items-center gap-2 px-3 py-2.5 w-full bg-white rounded border border-gray-300 shadow-shadow-xs">
              <img className="w-4 h-4" alt="Envelope" src="../../../assets/images/svg/message-input.svg" />

              <Input
                defaultValue="name@company.com"
                className="flex-1 border-0 p-0 shadow-none [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5 focus-visible:ring-0"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Your message<span className="text-[#c70036]">*</span>
            </Label>

            <Textarea
              defaultValue="Write text here ..."
              className="h-[204px] w-full bg-gray-50 rounded border border-gray-300 shadow-shadow-xs p-3.5 [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5 resize-none"
            />
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5">
              How did you find us?
            </Label>

            <Select>
              <SelectTrigger className="w-full bg-white rounded border border-gray-300 shadow-shadow-xs px-3 py-2.5 [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5">
                <SelectValue placeholder="Select a answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="search">Search Engine</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-2.5 self-stretch w-full">
            <Checkbox
              id="terms"
              className="w-[18px] h-[18px] bg-gray-50 rounded border border-gray-300"
            />

            <Label
              htmlFor="terms"
              className="flex-1 [font-family:'Figtree',Helvetica] font-normal text-sm tracking-[0] leading-4 cursor-pointer"
            >
              <span className="text-[#4a5565]">
                By submitting this form, you confirm that you have read and
                agree to the
              </span>
              <span className="text-[#101828] underline">
                {" "}
                Terms of Service
              </span>
            </Label>
          </div>

          <div className="flex items-center gap-4 pt-6 pb-0 px-0 self-stretch w-full border-t border-gray-300">
            <Button className="flex-1 h-auto px-6 py-3.5 bg-[#194170] hover:bg-[#194170]/90 rounded shadow-shadow-xs [font-family:'Figtree',Helvetica] font-medium text-white text-base tracking-[0] leading-6">
              Submit
              <ArrowRightIcon className="w-5 h-5 ml-1.5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
