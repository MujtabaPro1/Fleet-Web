import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const truckIcon = "/assets/images/svg/truck.svg";
const cardIcon = "/assets/images/svg/card.svg";
const contactIcon = "/assets/images/svg/contact.svg";
const calendarIcon = "/assets/images/svg/calendar-month.svg";
const phoneIcon = "/assets/images/svg/phone.svg";
const envelopeIcon = "/assets/images/svg/envelope.svg";

const facebookIcon = "/assets/images/svg/facebook.svg";
const xIcon = "/assets/images/svg/X.svg";
const linkedinIcon = "/assets/images/svg/linkedin.svg";
import { useRouter } from "next/navigation";

const topCards = [
  {
    icon: truckIcon,
    title: "Explore Our Fleet Inventory",
    description:
      "Discover a wide range of vehicles tailored for your business needs.",
    links: [
      { text: "Browse inventory", href: "/inventory" },
      { text: "Explore by brands & body type", href: "/explore" },
    ],
  },
  {
    icon: cardIcon,
    title: "Leasing & Finance Options",
    description:
      "Flexible solutions to help you acquire and manage your fleet with ease.",
    links: [
      { text: "Explore options", href: "/products/fleet-finance" },
      { text: "Free fleet consultation", href: "/services/consultation" },
    ],
  },
  {
    icon: contactIcon,
    title: "Contact Us",
    description: "Your partner in fleet leasing, every step of the way",
    contactInfo: [
      { icon: calendarIcon, text: "Monday to Friday - 9 am to 5 pm" },
      { icon: phoneIcon, text: "1300 352 287" },
      { icon: envelopeIcon, text: "support@fleetleasingaustralia.com.au" },
    ],
  },
];

const footerColumns = [
  {
    title: "Fleet Inventory",
    links: [
      "Popular Models",
      "Limited-Time Deals",
      "Explore by Brand",
      "Explore by Body Type",
    ],
    urls: [
      "/vehicles/popular-models",
      "/deals/limited-time",
      "/explore",
      "/explore-body",
    ]
  },
  {
    title: "Fleet Leasing & Finance",
    links: [
      "Procurement & Sourcing",
      "Maintenance & Servicing",
      "Fuel Cards & Insurance",
      "Free Fleet Consultation",
    ],
    urls: [
      "/products/fleet-finance",
      "/products/fleet-finance",
      "/products/fleet-finance",
      "/services/consultation",
    ]
  },
  {
    title: "Business Finance",
    links: [
      "Commercial Term Loan",
      "Line of Credit",
      "Working Capital",
      "Invoice Financing",
      "Overdraft Facility",
    ],
    urls: [
      "/products/business-finance",
      "/products/business-finance",
      "/products/business-finance",
      "/products/business-finance",
      "/products/business-finance",
    ]
  },
  {
    title: "Company",
    links: ["About us", "Blog & news", "FAQs", "Contact us"],
    urls: [
      "/about",
      "/resources/blog",
      "/resources/faqs",
      "/about/contact",
    ]
  },
];

const socialIcons = [
  { icon: facebookIcon, alt: "Facebook" },
  { icon: xIcon, alt: "X" },
  { icon: linkedinIcon, alt: "Linkedin" },
];

export const SiteFooterSection = (): JSX.Element => {
  const router = useRouter();
  return (
    <footer className="flex flex-col items-center pt-5 pb-0 px-4 sm:px-6 w-full bg-white">
      <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16 pt-0 pb-8 px-0 border-b border-gray-100 w-full max-w-[1280px] overflow-hidden">
        {topCards.map((card, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-80 lg:w-96 items-start gap-[18px]"
          >
            <div className="inline-flex items-center gap-[9.4px] p-2 bg-[#ecf3fb] rounded-[3.76px]">
              <img
                className="w-[26px] h-[26px]"
                alt={card.title}
                src={card.icon}
              />
            </div>

            <div className="flex flex-col items-start gap-4 w-full">
              <div className="flex flex-col items-start gap-1 w-full">
                <div className="font-figtree font-semibold text-[#101828] text-lg tracking-[0] leading-6">
                  {card.title}
                </div>

                <div className="h-10 font-figtree font-normal text-[#4a5565] text-sm tracking-[0] leading-5">
                  {card.description}
                </div>
              </div>

              <div className="flex flex-col items-start gap-2 w-full">
                {card.links &&
                  card.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      variant="link"
                      onClick={() => router.push(link.href)}
                      className="flex items-center gap-1.5 w-full justify-start p-0 h-auto"
                    >
                      <span className="font-figtree font-semibold text-[#194170] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        {link.text}
                      </span>
                      <ArrowRightIcon className="w-4 h-4 text-[#194170]" />
                    </Button>
                  ))}
                {card.contactInfo &&
                  card.contactInfo.map((info, infoIndex) => (
                    <div
                      key={infoIndex}
                      className="flex items-center gap-1.5 w-full"
                    >
                      <img
                        className="w-4 h-4"
                        alt={info.text}
                        src={info.icon}
                      />
                      <div className="font-figtree font-semibold text-[#194170] text-sm tracking-[0] leading-5 whitespace-nowrap">
                        {info.text}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col w-full max-w-[1280px] items-start gap-12 px-0 py-8 overflow-hidden">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-10 lg:gap-14 w-full">
          <div className="flex flex-col w-full md:w-[280px] lg:w-[343px] items-start gap-6 mb-8 md:mb-0">
            <img
              className="w-[160.61px] h-[58.62px]"
              alt="Logo"
              src="/assets/images/logo.png"
            />

            <p className="font-figtree font-normal text-[#4a5565] text-base tracking-[0] leading-6">
              We provides flexible vehicle finance and leasing solutions for
              businesses, helping them manage fleets cost-effectively with
              competitive rates and no large upfront costs.
            </p>

            <div className="inline-flex items-center gap-4">
              {socialIcons.map((social, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="w-5 h-5 p-0"
                >
                  <img className="w-5 h-5" alt={social.alt} src={social.icon} />
                </Button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-8 gap-x-4 sm:gap-x-6 md:flex md:items-start md:justify-between md:flex-1">
            {footerColumns.map((column, index) => (
              <div
                key={index}
                className="inline-flex flex-col items-start gap-3 sm:gap-5"
              >
                <div className="font-figtree font-medium text-[#194170] text-base tracking-[0] leading-4 whitespace-nowrap">
                  {column.title}
                </div>

                <div className="inline-flex flex-col items-start gap-4">
                  {column.links.map((link, linkIndex) => (
                    <Button
                      key={linkIndex}
                      onClick={() => {
                        router.push(column.urls[linkIndex])
                      }}
                      variant="link"
                      className="p-0 h-auto font-figtree font-normal text-[#4a5565] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 whitespace-nowrap"
                    >
                      {link}
                    </Button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full border-t border-gray-100 pt-8">
          <p className="text-[#4A5565]">All figures are based on indicative business finance or operating lease calculations arranged through Fleet Leasing Australia for approved ABN holders and company applicants. Pricing is based on a no-deposit, drive-away structure that includes GST, Stamp Duty, and 1 year Registration, over a 60-month term with a 30% residual value. Calculations are derived from business fleet pricing with unlimited kilometres and assume a standard manufacturer specification without optional extras or accessories. Repayments are calculated using current market interest rates and may vary depending on individual lender assessment, applicant credit profile, vehicle selection, and any applicable fees and charges. Vehicle pricing is indicative only and subject to vehicle availability, location, and final dealer quotation. All new vehicles are supplied and delivered through accredited national dealer partners, subject to stock availability and lead times. Trade-ins are accepted and subject to independent valuation. Vehicle images are for illustration purposes only and may differ from the actual model offered. Information, pricing, and offers displayed on this website are current at the time of publication and are subject to change without notice. All applications for credit are subject to lender eligibility and credit approval criteria, and terms, conditions, fees, and charges apply. The information provided is of a general nature only and does not constitute financial or tax advice. It does not take into account your personal objectives, financial situation, or needs. We recommend seeking independent financial and taxation advice before making any decision regarding a finance or leasing product. Fleet Leasing Australia may receive financial benefits from lenders, insurers, or suppliers in connection with its products and services.</p>
        </div>

        <div className="flex flex-col lg:flex-row justify-between pt-8 pb-0 px-0 w-full border-t border-gray-100">
          <div className="w-full font-figtree font-normal text-[#4A5565] text-sm sm:text-base text-start sm:tracking-[0] leading-5 sm:leading-6 [font-style:normal]">
            © FLA Group Holdings Pty Ltd T/A Fleet Leasing Australia (ABN 74 692 369 565)
          </div>

          <div className="flex items-center justify-start lg:justify-end gap-4 w-full">
            <Button
              variant="link"
              onClick={() => router.push("/privacy-policy")}
              className="p-0 hvauto font-figtree font-normal text-[#4a5565] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 whitespace-nowrap"
            >
              Privacy policy
            </Button>

            <Button
              variant="link"
              onClick={() => router.push("/terms")}
              className="p-0 h-auto font-figtree font-normal text-[#4a5565] text-sm sm:text-base tracking-[0] leading-5 sm:leading-6 whitespace-nowrap"
            >
              Terms & conditions
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default SiteFooterSection;
