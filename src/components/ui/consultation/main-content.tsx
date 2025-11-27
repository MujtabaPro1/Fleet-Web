import { ArrowRightIcon, Building2Icon, CheckCircle2Icon, InfoIcon, Loader2Icon } from "lucide-react";
import React, { useState, FormEvent, useEffect } from "react";
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
import axiosInstance from "@/service/api";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

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
  const searchParams = useSearchParams();
  const [fleetSolutions, setFleetSolutions] = useState<{
    id: string;
    title: string;
    description: string;
    selected: boolean;
  }[]>([
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
  ]);

  // Form state
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [business, setBusiness] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [employees, setEmployees] = useState<string>("");
  const [fleetSize, setFleetSize] = useState<string>("");
  const [helpMessage, setHelpMessage] = useState<string>("");
  const [howFoundUs, setHowFoundUs] = useState<string>("");
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  
  // Form submission state
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  // Form validation
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();


  useEffect(()=>{
      if(searchParams.get("scrollTo") === "consultation"){
          document.getElementById("consultation-form")?.scrollIntoView({ behavior: "smooth" });
      }
  },[])

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!fleetSolutions.some(solution => solution.selected)) {
      newErrors.fleetSolution = "Please select a fleet solution";
    }
    
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!business.trim()) {
      newErrors.business = "Business name or ABN is required";
    }
    
    if (!state) {
      newErrors.state = "Please select a state";
    }
    
    if (getSelectedItem()?.title === "Fleet Leasing" && !employees) {
      newErrors.employees = "Please select number of employees";
    }
    
    if (getSelectedItem()?.title === "Fleet Finance" && !fleetSize) {
      newErrors.fleetSize = "Please select fleet size";
    }
    
    if (!helpMessage.trim()) {
      newErrors.helpMessage = "Please tell us how we can help you";
    }
    
    if (!termsAccepted) {
      newErrors.terms = "You must accept the terms of service";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const selectedSolution = fleetSolutions.find(solution => solution.selected);
      
      const consultationData = {
        fleetSolution: selectedSolution?.title || "",
        name: name,
        phone: phone,
        workEmail: email,
        businessOrAbn: business,
        state: state,
        noOfEmployees: employees,
        fleetSize: fleetSize,
        helpMessage: helpMessage,
        howFoundUs: howFoundUs || ""
      };
      
      await axiosInstance.post('v1/consultation/submit', consultationData).then((response) => {
        setSubmitSuccess(true);

          // Reset form
          setName("");
          setPhone("");
          setEmail("");
          setBusiness("");
          setState("");
          setEmployees("");
          setFleetSize("");
          setHelpMessage("");
          setHowFoundUs("");
          setTermsAccepted(false);

      }).catch((error) => {
        setSubmitError(error.message);
        setIsSubmitting(false);
      });
      
 
      
    } catch (error) {
      console.error("Error submitting consultation:", error);
      setSubmitError("There was an error submitting your consultation. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const getSelectedItem = () => {
    return fleetSolutions.find(solution => solution.selected);
  };

  return (
    <section className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16 px-4 sm:px-8 px-0 lg:px-16 py-8 lg:py-12 w-full bg-[#fafcfe]">
      <div className="flex flex-col w-full lg:w-[466px] items-start gap-6">
        <h2 
        className="self-stretch font-figtree font-semibold text-[#101828] text-4xl tracking-[-0.40px] leading-[45px]">
          Ready to Get Started?
        </h2>

        <p className="self-stretch font-figtree font-normal text-[#4a5565] text-lg tracking-[0] leading-7">
          Your free consultation is quick, friendly, and packed with value — no
          sales pitch, just practical advice from real fleet experts.
        </p>

        <Button
        onClick={() => {
           window.location.href = "tel:1300352352";
        }}
        className="h-auto px-3 py-2 self-stretch w-full bg-[#194170] hover:bg-[#194170]/90 items-center justify-center gap-1.5 rounded shadow-shadow-xs">
          <span className="font-figtree font-medium text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
            Talk to a Fleet Specialist – 1300 FLA FLA
          </span>
          <ArrowRightIcon className="w-4 h-4 text-white" />
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
                  <div className="self-stretch font-figtree font-medium text-[#101828] text-base tracking-[0] leading-4">
                    {info.title}
                  </div>
                  <div className="self-stretch font-figtree font-semibold text-[#194170] text-sm tracking-[0] leading-5">
                    {info.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Card id="consultation-form" className="flex flex-col items-start gap-6 p-6 flex-1 bg-white rounded-xl border border-[#e5e7eb]">
        <CardHeader className="p-0 pb-[18px] border-b border-[#e5e7eb] w-full">
          <CardTitle className="font-figtree font-medium text-[#c70036] text-3xl tracking-[0] leading-7">
            Book a Free Consultation
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 flex flex-col items-start gap-7 w-full">
          <div className="flex flex-col items-start justify-center gap-2.5 w-full">

         
            
            <Label className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Select a fleet solution<span className="text-[#c70036]">*</span>
            </Label>

            <div className="flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start gap-7 w-full">
              {fleetSolutions.map((solution) => (
                <Button
                  key={solution.id}
                  onClick={() => {
                    solution.selected = !solution.selected;
                    fleetSolutions.forEach((sol) => {
                      if (sol.id !== solution.id) {
                        sol.selected = false;
                      }
                    });
                    setFleetSolutions([...fleetSolutions]);
                  }}

                  variant={solution.selected ? "default" : "outline"}
                  className={`h-auto px-4 py-2.5 flex-1 items-center justify-center gap-1.5 rounded shadow-shadow-xs ${
                    solution.selected
                      ? "bg-[#194170] hover:bg-[#194170]/90 text-white"
                      : "bg-gray-50 hover:bg-gray-100 border border-[#e5e7eb]"
                  }`}
                >
                  <div className="font-figtree font-normal text-sm text-center tracking-[0] leading-[14px]">
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
              className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
            >
              Name<span className="text-[#c70036]">*</span>
            </Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className={`w-full px-3 py-2.5 bg-white rounded border ${errors.name ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-7 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="phone"
                className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Phone number<span className="text-[#c70036]">*</span>
              </Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+61412345678"
                className={`w-full px-3 py-2.5 bg-white rounded border ${errors.phone ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="email"
                className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Work email<span className="text-[#c70036]">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.smith@company.com"
                className={`w-full px-3 py-2.5 bg-white rounded border ${errors.email ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start gap-4 md:gap-7 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="business"
                className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Business name or ABN<span className="text-[#c70036]">*</span>
              </Label>
              <Input
                id="business"
                value={business}
                onChange={(e) => setBusiness(e.target.value)}
                placeholder="Company Pty Ltd / 123456789"
                className={`w-full px-3 py-2.5 bg-white rounded border ${errors.business ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
              />
              {errors.business && <p className="text-red-500 text-xs mt-1">{errors.business}</p>}
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="state"
                className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                State<span className="text-[#c70036]">*</span>
              </Label>
              <Select value={state} onValueChange={setState}>
                <SelectTrigger
                  id="state"
                  className={`w-full px-3 py-2.5 bg-white rounded border ${errors.state ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
                >
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="NSW">NSW</SelectItem>
                  <SelectItem value="VIC">VIC</SelectItem>
                  <SelectItem value="QLD">QLD</SelectItem>
                  <SelectItem value="WA">WA</SelectItem>
                  <SelectItem value="SA">SA</SelectItem>
                  <SelectItem value="TAS">TAS</SelectItem>
                  <SelectItem value="ACT">ACT</SelectItem>
                  <SelectItem value="NT">NT</SelectItem>
                </SelectContent>
              </Select>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
          </div>

         {getSelectedItem()?.title === "Fleet Finance" ? <div className="flex flex-col md:flex-row items-start gap-4 md:gap-7 w-full">
            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="employees"
                className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Number of employees<span className="text-[#c70036]">*</span>
              </Label>
              <Select value={employees} onValueChange={setEmployees}>
                <SelectTrigger
                  id="employees"
                  className={`w-full px-3 py-2.5 bg-white rounded border ${errors.employees ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
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
              {errors.employees && <p className="text-red-500 text-xs mt-1">{errors.employees}</p>}
            </div>

            <div className="flex flex-col items-start gap-2.5 w-full md:flex-1">
              <Label
                htmlFor="fleetSize"
                className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
              >
                Fleet Size<span className="text-[#c70036]">*</span>
              </Label>
              <Select value={fleetSize} onValueChange={setFleetSize}>
                <SelectTrigger
                  id="fleetSize"
                  className={`w-full px-3 py-2.5 bg-white rounded border ${errors.fleetSize ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
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
              {errors.fleetSize && <p className="text-red-500 text-xs mt-1">{errors.fleetSize}</p>}
            </div>
          </div>: <></>}

          <div className="flex flex-col items-start gap-2.5 w-full">
            <Label
              htmlFor="help"
              className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
            >
              How can we help you?<span className="text-[#c70036]">*</span>
            </Label>
            <Textarea
              id="help"
              value={helpMessage}
              onChange={(e) => setHelpMessage(e.target.value)}
              placeholder="We are looking to expand our fleet and want guidance on the best financing options."
              className={`flex-1 w-full p-3.5 bg-gray-50 rounded border ${errors.helpMessage ? 'border-red-500' : 'border-[#e5e7eb]'} shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5 resize-none`}
            />
            {errors.helpMessage && <p className="text-red-500 text-xs mt-1">{errors.helpMessage}</p>}
          </div>

          <div className="flex flex-col h-[70px] items-start gap-2.5 w-full">
            <Label
              htmlFor="find-us"
              className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5"
            >
              How did you find us?
            </Label>
            <Select value={howFoundUs} onValueChange={setHowFoundUs}>
              <SelectTrigger
                id="find-us"
                className="w-full px-3 py-2.5 bg-white rounded border border-[#e5e7eb] shadow-shadow-xs font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5"
              >
                <SelectValue placeholder="Select an answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Google Search">Search Engine</SelectItem>
                <SelectItem value="Social Media">Social Media</SelectItem>
                <SelectItem value="Referral">Referral</SelectItem>
                <SelectItem value="Advertisement">Advertisement</SelectItem>
                <SelectItem value="Other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-start gap-2.5">
            <Checkbox
              id="terms"
              checked={termsAccepted}
              onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
              className={`w-[18px] h-[18px] bg-gray-50 rounded border ${errors.terms ? 'border-red-500' : 'border-[#e5e7eb]'}`}
            />
            <Label
              htmlFor="terms"
              className="font-figtree font-normal text-sm tracking-[0] leading-4 cursor-pointer"
            >
              <span className="text-[#4a5565]">
                By submitting this form, you confirm that you have read and
                agree to the
              </span>
              <span 
               onClick={() => {
                 router.push('/terms');
               }}
              className="text-[#101828] underline cursor-pointer">
                {" "}
                Terms of Service
              </span>
            </Label>
          </div>

          {submitSuccess ? (
            <div className="flex flex-col items-center gap-4 pt-6 w-full border-t border-[#e5e7eb]">
              <div className="flex items-center gap-2 text-green-600">
                <CheckCircle2Icon className="w-5 h-5" />
                <span className="font-figtree font-medium text-base">Consultation submitted successfully</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4 pt-6 w-full border-t border-[#e5e7eb]">
              {submitError && (
                <div className="text-red-500 text-sm mb-2">
                  {submitError}
                </div>
              )}
              <Button 
                onClick={handleSubmit} 
                disabled={isSubmitting || !termsAccepted}
                className="h-auto px-6 py-3.5 flex-1 bg-[#194170] hover:bg-[#194170]/90 items-center justify-center gap-1.5 rounded shadow-shadow-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2Icon className="w-5 h-5 text-white animate-spin mr-2" />
                    <span className="font-figtree font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      Submitting...
                    </span>
                  </>
                ) : (
                  <>
                    <span className="font-figtree font-medium text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                      Submit
                    </span>
                    <ArrowRightIcon className="w-5 h-5 text-white" />
                  </>
                )}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </section>
  );
};
