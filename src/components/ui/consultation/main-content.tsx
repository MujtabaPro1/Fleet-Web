import { ArrowRightIcon, Building2Icon, InfoIcon } from "lucide-react";
import React from "react";
import { Button } from "../button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../card";
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
import { Textarea } from "../textarea";

const fleetSolutions = [
  {
    id: "fleet-finance",
    title: "Fleet Finance",
    description: "Vehicle funding for your business fleet",
    selected: true,
  },
  {
    id: "business-finance",
    title: "Business Finance",
    description: "Loans and leasing for business growth and assets",
    selected: false,
  },
];

const contactInfo = [
  {
    icon: Building2Icon,
    title: "Hours of Operations",
    detail: "Monday to Friday - 9 am to 5 pm",
  },
  {
    icon: InfoIcon,
    title: "Information & Sales",
    detail: "contact@fleetleasingaustralia.com.au",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 px-4 sm:px-8 md:px-12 lg:px-16 py-8 lg:py-12 w-full bg-[#fafcfe]">
      <div className="flex flex-col w-full lg:w-[466px] items-start gap-6">
        <h2 className="self-stretch [font-family:'Figtree',Helvetica] font-semibold text-[#101828] text-4xl tracking-[-0.40px] leading-[45px]">
          Ready to Get Started?
        </h2>

        <p className="self-stretch [font-family:'Figtree',Helvetica] font-normal text-[#4a5565] text-lg tracking-[0] leading-7">
          Your free consultation is quick, friendly, and packed with value — no
          sales pitch, just practical advice from real fleet experts.
        </p>

        <Button className="h-auto px-3 py-2 self-stretch w-full bg-[#194170] hover:bg-[#194170]/90 items-center justify-center gap-1.5 rounded shadow-shadow-xs">
          <span className="[font-family:'Figtree',Helvetica] font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
            Talk to a Fleet Specialist – 1300 FLA FLA
          </span>
          <ArrowRightIcon className="w-4 h-4" />
        </Button>

        <div className="flex flex-col items-start gap-6 px-0 py-6 self-stretch w-full border-t border-b border-[#e5e7eb]">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-2 self-stretch w-full"
              >
                <IconComponent className="w-5 h-5 text-[#101828] flex-shrink-0" />
                <div className="flex flex-col items-start gap-1.5 flex-1">
                  <div className="self-stretch [font-family:'Figtree',Helvetica] font-medium text-[#101828] text-base tracking-[0] leading-4">
                    {info.title}
                  </div>
                  <div className="self-stretch [font-family:'Figtree',Helvetica] font-semibold text-[#194170] text-sm tracking-[0] leading-5">
                    {info.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Card className="flex flex-col items-start gap-6 p-6 flex-1 bg-white rounded-xl border border-[#e5e7eb]">
        <CardHeader className="p-0 pb-[18px] border-b border-[#e5e7eb] w-full">
          <CardTitle className="[font-family:'Figtree',Helvetica] font-medium text-[#c70036] text-3xl tracking-[0] leading-7">
            Book a Free Consultation
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 flex flex-col items-start gap-7 w-full">
          <div className="flex flex-col items-start justify-center gap-2.5 w-full">
            <Label className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Select a fleet solution<span className="text-[#c70036]">*</span>
            </Label>

            <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start gap-7 w-full">
              {fleetSolutions.map((solution) => (
                <Button
                  key={solution.id}
                  variant={solution.selected ? "default" : "outline"}
                  className={`h-auto px-4 py-2.5 flex-1 items-center justify-center gap-1.5 rounded shadow-shadow-xs ${
                    solution.selected
                      ? "bg-[#194170] hover:bg-[#194170]/90 text-white"
                      : "bg-gray-50 hover:bg-gray-100 border border-[#e5e7eb]"
                  }`}
                >
                  <div className="[font-family:'Figtree',Helvetica] font-normal text-sm text-center tracking-[0] leading-[14px]">
                    <span
                      className={`font-medium leading-[0.1px] ${solution.selected ? "text-white" : "text-[#4a5565] underline"}`}
                    >
                      {solution.title}
                      <br />
                    </span>
                    <span
                      className={`text-xs leading-5 ${solution.selected ? "text-white" : "text-[#4a5565]"}`}
                    >
                      {solution.description}
                    </span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 w-full">
            <Label
              htmlFor="name"
              className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
            >
              Name<span className="text-[#c70036]">*</span>
            </Label>
            <Input
              id="name"
              defaultValue="Jane Smith"
              className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
            />
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-7 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="phone"
                className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Phone number<span className="text-[#c70036]">*</span>
              </Label>
              <Input
                id="phone"
                defaultValue="(000) 000-0000"
                className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
              />
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="email"
                className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Work email<span className="text-[#c70036]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                defaultValue="name@example.com"
                className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-7 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="business"
                className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Bussiness name or ABN<span className="text-[#c70036]">*</span>
              </Label>
              <Input
                id="business"
                defaultValue="e.g. Smith Pty Ltd or 12 345 678 901"
                className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
              />
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="state"
                className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                State<span className="text-[#c70036]">*</span>
              </Label>
              <Select>
                <SelectTrigger
                  id="state"
                  className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
                >
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nsw">NSW</SelectItem>
                  <SelectItem value="vic">VIC</SelectItem>
                  <SelectItem value="qld">QLD</SelectItem>
                  <SelectItem value="wa">WA</SelectItem>
                  <SelectItem value="sa">SA</SelectItem>
                  <SelectItem value="tas">TAS</SelectItem>
                  <SelectItem value="act">ACT</SelectItem>
                  <SelectItem value="nt">NT</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-7 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="employees"
                className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Number of employees<span className="text-[#c70036]">*</span>
              </Label>
              <Select>
                <SelectTrigger
                  id="employees"
                  className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
                >
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10</SelectItem>
                  <SelectItem value="11-50">11-50</SelectItem>
                  <SelectItem value="51-200">51-200</SelectItem>
                  <SelectItem value="201-500">201-500</SelectItem>
                  <SelectItem value="500+">500+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="fleet-size"
                className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Fleet Size<span className="text-[#c70036]">*</span>
              </Label>
              <Select>
                <SelectTrigger
                  id="fleet-size"
                  className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
                >
                  <SelectValue placeholder="Select a range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5</SelectItem>
                  <SelectItem value="6-10">6-10</SelectItem>
                  <SelectItem value="11-25">11-25</SelectItem>
                  <SelectItem value="26-50">26-50</SelectItem>
                  <SelectItem value="50+">50+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col h-28 items-start gap-2.5 w-full">
            <Label
              htmlFor="help"
              className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
            >
              How can we help you?<span className="text-[#c70036]">*</span>
            </Label>
            <Textarea
              id="help"
              placeholder="Write text here ..."
              className="flex-1 w-full p-3.5 bg-gray-50 rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5 resize-none"
            />
          </div>

          <div className="flex flex-col h-[70px] items-start gap-2.5 w-full">
            <Label
              htmlFor="find-us"
              className="[font-family:'Figtree',Helvetica] font-medium text-[#101828] text-sm tracking-[0] leading-5"
            >
              How did you find us?
            </Label>
            <Select>
              <SelectTrigger
                id="find-us"
                className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs [font-family:'Figtree',Helvetica] font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
              >
                <SelectValue placeholder="Select a answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="search">Search Engine</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="advertisement">Advertisement</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-2.5">
            <Checkbox
              id="terms"
              className="w-[18px] h-[18px] bg-gray-50 rounded border border-[#e5e7eb]"
            />
            <Label
              htmlFor="terms"
              className="[font-family:'Figtree',Helvetica] font-normal text-sm tracking-[0] leading-4 cursor-pointer"
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

          <div className="flex items-center gap-4 pt-6 w-full border-t border-[#e5e7eb]">
            <Button className="h-auto px-6 py-3.5 flex-1 bg-[#194170] hover:bg-[#194170]/90 items-center justify-center gap-1.5 rounded shadow-shadow-xs">
              <span className="[font-family:'Figtree',Helvetica] font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                Submit
              </span>
              <ArrowRightIcon className="w-5 h-5" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
