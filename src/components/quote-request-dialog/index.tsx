import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, CheckIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface QuoteRequestDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  vehicleName?: string;
  selectedVariant?: string;
  variants?: Array<{id: string; name: string}>;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  state: string;
  businessName: string;
  hasAllowance: boolean | null;
  hasTrade: boolean | null;
  referral: string;
}

export function QuoteRequestDialog({
  open,
  onOpenChange,
  vehicleName = "Vehicle",
  selectedVariant,
  variants = [],
}: QuoteRequestDialogProps) {
  const [selectedVariants, setSelectedVariants] = React.useState<string[]>(
    selectedVariant ? [selectedVariant] : []
  );
  
  const [formState, setFormState] = React.useState<FormState>({
    name: "",
    email: "",
    phone: "",
    state: "",
    businessName: "",
    hasAllowance: null,
    hasTrade: null,
    referral: "",
  });
  
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormState, string>>>({});

  const handleVariantToggle = (variantId: string) => {
    if (selectedVariants.includes(variantId)) {
      setSelectedVariants(selectedVariants.filter(id => id !== variantId));
    } else {
      setSelectedVariants([...selectedVariants, variantId]);
    }
  };
  
  const handleInputChange = (field: keyof FormState, value: string) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when field is edited
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  
  const handleBooleanChange = (field: 'hasAllowance' | 'hasTrade', value: boolean) => {
    setFormState(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when field is edited
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormState, string>> = {};
    
    if (!formState.name.trim()) newErrors.name = "Name is required";
    if (!formState.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formState.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formState.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formState.state) newErrors.state = "State is required";
    if (!formState.businessName.trim()) newErrors.businessName = "Business name or ABN is required";
    if (formState.hasAllowance === null) newErrors.hasAllowance = "Please select an option";
    if (formState.hasTrade === null) newErrors.hasTrade = "Please select an option";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Form is valid, proceed with submission
      console.log("Form submitted:", { ...formState, selectedVariants });
      // TODO: Add actual form submission logic here
      
      // Close dialog after successful submission
      onOpenChange(false);
    }
  };
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-full sm:w-auto sm:max-w-[500px] bg-white p-0 gap-0 lg:max-h-[90vh] max-h-screen overflow-y-auto">
        <DialogHeader className="p-6 pb-0 sticky top-0 bg-white z-10 shadow-sm">
          <div className="flex justify-between items-start">
            <DialogTitle className="text-lg lg:text-2xl font-semibold text-[#c70036]">
              Get Your {vehicleName} Lease Quote
            </DialogTitle>
            <DialogClose className="w-8 h-8 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 flex items-center justify-center">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="p-6 pb-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                id="name"
                placeholder="Jane Smith"
                className={cn("w-full", errors.name && "border-red-500")}
                value={formState.name}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("name", e.target.value)}
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Work email <span className="text-red-500">*</span>
              </label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                className={cn("w-full", errors.email && "border-red-500")}
                value={formState.email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("email", e.target.value)}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone number <span className="text-red-500">*</span>
              </label>
              <Input
                id="phone"
                placeholder="(000) 000-0000"
                className={cn("w-full", errors.phone && "border-red-500")}
                value={formState.phone}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("phone", e.target.value)}
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="state" className="block text-sm font-medium mb-1">
                State <span className="text-red-500">*</span>
              </label>
              <Select 
                value={formState.state} 
                onValueChange={(value) => handleInputChange("state", value)}
              >
                <SelectTrigger className={cn("w-full", errors.state && "border-red-500")}>
                  <SelectValue placeholder="Select a state" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="nsw">New South Wales</SelectItem>
                  <SelectItem value="vic">Victoria</SelectItem>
                  <SelectItem value="qld">Queensland</SelectItem>
                  <SelectItem value="wa">Western Australia</SelectItem>
                  <SelectItem value="sa">South Australia</SelectItem>
                  <SelectItem value="tas">Tasmania</SelectItem>
                  <SelectItem value="act">Australian Capital Territory</SelectItem>
                  <SelectItem value="nt">Northern Territory</SelectItem>
                </SelectContent>
              </Select>
              {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="business-name" className="block text-sm font-medium mb-1">
              Business name or ABN <span className="text-red-500">*</span>
            </label>
            <Input
              id="business-name"
              placeholder="e.g. Smith Pty Ltd or 12 345 678 901"
              className={cn("w-full", errors.businessName && "border-red-500")}
              value={formState.businessName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleInputChange("businessName", e.target.value)}
            />
            {errors.businessName && <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Do you have a vehicle allowance? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "flex-1", 
                    formState.hasAllowance === true && "bg-[#194170] text-white"
                  )}
                  onClick={() => handleBooleanChange("hasAllowance", true)}
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "flex-1", 
                    formState.hasAllowance === false && "bg-[#194170] text-white"
                  )}
                  onClick={() => handleBooleanChange("hasAllowance", false)}
                >
                  No
                </Button>
              </div>
              {errors.hasAllowance && <p className="text-red-500 text-xs mt-1">{errors.hasAllowance}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">
                Do you have a vehicle to trade? <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "flex-1", 
                    formState.hasTrade === true && "bg-[#194170] text-white"
                  )}
                  onClick={() => handleBooleanChange("hasTrade", true)}
                >
                  Yes
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className={cn(
                    "flex-1", 
                    formState.hasTrade === false && "bg-[#194170] text-white"
                  )}
                  onClick={() => handleBooleanChange("hasTrade", false)}
                >
                  No
                </Button>
              </div>
              {errors.hasTrade && <p className="text-red-500 text-xs mt-1">{errors.hasTrade}</p>}
            </div>
          </div>

          {variants.length > 0 && (
            <div>
              <label className="block text-sm font-medium mb-1">
                Are you interested in more than one variant?
              </label>
              <p className="text-sm text-gray-500 mb-2">Select all the variants of interest</p>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                {variants.map((variant) => {
                  const isSelected = selectedVariants.includes(variant.id);
                  return (
                    <Button
                      key={variant.id}
                      type="button"
                      variant="outline"
                      className={cn(
                        "justify-start",
                        isSelected && "bg-[#194170] text-white"
                      )}
                      onClick={() => handleVariantToggle(variant.id)}
                    >
                      <div className="flex items-center w-full">
                        <span className="flex-1 text-left">{variant.name}</span>
                        {isSelected && <CheckIcon className="h-4 w-4 ml-2" />}
                      </div>
                    </Button>
                  );
                })}
              </div>
            </div>
          )}

          <div>
            <label htmlFor="referral" className="block text-sm font-medium mb-1">
              How did you find us?
            </label>
            <Select 
              value={formState.referral} 
              onValueChange={(value) => handleInputChange("referral", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select an answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="google">Google Search</SelectItem>
                <SelectItem value="social">Social Media</SelectItem>
                <SelectItem value="referral">Referral</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button 
            type="submit" 
            className="w-full text-white bg-[#194170] hover:bg-[#194170]/90 h-auto py-3.5"
          >
            Get a Quote
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
