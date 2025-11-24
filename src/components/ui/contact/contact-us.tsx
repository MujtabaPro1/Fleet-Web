import { ArrowRightIcon, Loader2 } from "lucide-react";
import React, { useState } from "react";
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
import { Alert } from "../alert";
import axios from "axios";
import axiosInstance from "@/service/api";

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

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  subject: string;
  message: string;
  source?: string;
  termsAccepted: boolean;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  message?: string;
  termsAccepted?: string;
}

export const ContactUsSection = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "Partnership Inquiry",
    message: "",
    source: "",
    termsAccepted: false,
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alert, setAlert] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+?[0-9\s\-\(\)]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Please enter a valid phone number";
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }
    
    if (!formData.termsAccepted) {
      newErrors.termsAccepted = "You must accept the terms of service";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, source: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, termsAccepted: checked }));
    if (errors.termsAccepted) {
      setErrors(prev => ({ ...prev, termsAccepted: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setAlert(null);
    
    try {
      const response = await axiosInstance.post('/1.0/contact', {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message
      });
      
      setAlert({ 
        type: "success", 
        message: "Thank you for your message. We'll get back to you soon!" 
      });
      
      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "Partnership Inquiry",
        message: "",
        source: "",
        termsAccepted: false,
      });
    } catch (error) {
      setAlert({ 
        type: "error", 
        message: "There was an error sending your message. Please try again." 
      });
      console.error("Contact form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <section className="flex flex-col md:flex-row w-full items-start justify-center bg-white">
      <div className="flex flex-col items-start gap-16 px-4 sm:px-8 md:px-[8rem] py-16 md:py-24 flex-1 self-stretch bg-gray-50 overflow-hidden relative">
        <img
          className="absolute top-[-346px] left-[-254px] w-[1310px] h-[1307px]"
          alt="Pattern"
          src="/pattern.svg"
        />

        <div className="flex flex-col w-full max-w-[466px] items-start gap-6 relative z-10">
          <h2 className="self-stretch font-figtree font-semibold text-[#101828] text-4xl tracking-[-0.40px] leading-[45px]">
            Get in Touch with Our Team
          </h2>

          <p className="self-stretch font-figtree font-normal text-[#4a5565] text-lg tracking-[0] leading-7">
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
                  <div className="self-stretch font-figtree font-medium text-[#101828] text-base tracking-[0] leading-4">
                    {info.title}
                  </div>

                  <div className="self-stretch font-figtree font-semibold text-[#194170] text-sm tracking-[0] leading-5">
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
        <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-[576px] items-start gap-6">
          <div className="flex flex-col items-start justify-center pt-0 pb-[18px] px-0 self-stretch w-full border-b border-gray-300">
            <h2 className="self-stretch font-figtree font-medium text-[#c70036] text-3xl tracking-[0] leading-7">
              Need Help? Connect with Us
            </h2>
          </div>

          {alert && (
            <Alert 
              type={alert.type} 
              message={alert.message} 
              className="w-full" 
              onClose={() => setAlert(null)}
            />
          )}

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Name<span className="text-[#c70036]">*</span>
            </Label>

            <Input
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full bg-white rounded border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} shadow-shadow-xs px-3 py-2.5 font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
            />
            {errors.fullName && (
              <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Phone number<span className="text-[#c70036]">*</span>
            </Label>

            <Input
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder="+966512345678"
              className={`w-full bg-white rounded border ${errors.phoneNumber ? 'border-red-500' : 'border-gray-300'} shadow-shadow-xs px-3 py-2.5 font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5`}
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Email<span className="text-[#c70036]">*</span>
            </Label>

            <div className={`flex items-center gap-2 px-3 py-2.5 w-full bg-white rounded border ${errors.email ? 'border-red-500' : 'border-gray-300'} shadow-shadow-xs`}>
              <img className="w-4 h-4" alt="Envelope" src="../../../assets/images/svg/message-input.svg" />

              <Input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@company.com"
                className="flex-1 border-0 p-0 shadow-none font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5 focus-visible:ring-0"
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
            </div>
  

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5">
              Your message<span className="text-[#c70036]">*</span>
            </Label>

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className={`h-[204px] w-full bg-gray-50 rounded border ${errors.message ? 'border-red-500' : 'border-gray-300'} shadow-shadow-xs p-3.5 font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5 resize-none`}
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
            <Label className="font-figtree font-medium text-[#101828] text-sm tracking-[0] leading-5">
              How did you find us?
            </Label>

            <Select onValueChange={handleSelectChange} value={formData.source}>
              <SelectTrigger className="w-full bg-white rounded border border-gray-300 shadow-shadow-xs px-3 py-2.5 font-figtree font-normal text-[#6a7282] text-sm tracking-[0] leading-5">
                <SelectValue placeholder="Select an answer" />
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
              checked={formData.termsAccepted}
              onCheckedChange={handleCheckboxChange}
              className={`w-[18px] h-[18px] bg-gray-50 rounded border ${errors.termsAccepted ? 'border-red-500' : 'border-gray-300'}`}
            />

            <div className="flex flex-col flex-1">
              <Label
                htmlFor="terms"
                className="flex-1 font-figtree font-normal text-sm tracking-[0] leading-4 cursor-pointer"
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
              {errors.termsAccepted && (
                <p className="text-red-500 text-xs mt-1">{errors.termsAccepted}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4 pt-6 pb-0 px-0 self-stretch w-full border-t border-gray-300">
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-auto px-6 py-3.5 bg-[#194170] hover:bg-[#194170]/90 rounded shadow-shadow-xs font-figtree font-medium text-white text-base tracking-[0] leading-6"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 mr-1.5 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit
                  <ArrowRightIcon className="w-5 h-5 ml-1.5" />
                </>
              )}
            </Button>
          </div>
          </form>
          
        </div>
        
  
  
    </section>
  );
};
