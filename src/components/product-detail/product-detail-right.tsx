import { useState, useEffect } from "react";
import styles from "../../styles/productDetail/productDetail.module.scss";
import Icons from "../common/icons/Icons";
import CButton from "../common/form/Button";
import Modal from "../common/modal/Modal";
import InquiryModal from "./InquiryModal";

type Variation = {
  variation_id: number;
  trim_name?: string;
  transmission?: string;
  fuel_type?: string;
  engine_description?: string;
  power_kw?: number;
  torque_nm?: number;
  fuel_efficiency?: number;
  wheels_driven?: string;
  body_shape?: string;
  seats?: string;
  doors?: number;
  price?: string;
  old_price?: string;
  generalInfo: {
    label: string;
    values: string[];
  }[];
};

type VehicleData = {
  title: string;
  brand: string;
  // generalInfo: {
  //   label: string;
  //   values: string[];
  // }[];
  featured_image?: string;
  safetyInfo: {
    label: string;
    values: string[];
  }[];
  variations: Variation[];
  primaryPrice: {
    price?: string;
    old_price?: string;
  };
};

export default function ProductDetailRight({ vehicle }: { vehicle: VehicleData }) {
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [activeTab, setActiveTab] = useState("Weekly");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const models = vehicle.variations.map((v) => v.trim_name || "Base Model");

  useEffect(() => {
    if (models.length > 0 && !selectedModel) {
      setSelectedModel(models[0]);
    }
  }, [models]);

  const selectedVariation = vehicle.variations.find((v) => v.trim_name === selectedModel);

  const tabs = ["Weekly", "Fortnightly", "Monthly"];

  //const weeklyPrice = selectedVariation?.price || vehicle.primaryPrice.price || "0.00";

  const weeklyPrice = parseFloat(selectedVariation?.price || vehicle.primaryPrice.price || "0.00") || 0.00;

  const pricing: any = {
    Weekly: weeklyPrice.toFixed(2),
    Fortnightly: (weeklyPrice * 2).toFixed(2),
    Monthly: (weeklyPrice * 4).toFixed(2),
  };

  return (
    <div className={`w-full flex flex-col lg:flex-row gap-8 ${styles.productDetailRight}`}>
      {/* Left Side */}
      <div className="w-full lg:w-1/2 order-2 lg:order-1 space-y-6">
        <h3 className="text-xl font-semibold">Compare {vehicle.title} models</h3>

        {/* Model Dropdown */}
        <div>
          <label className="block mb-1 text-sm font-medium">Model</label>
          <select
            value={selectedModel}
            onChange={(e) => setSelectedModel(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
          >
            {models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
        </div>

        {/* Card 1: Summary */}
        <div className="border rounded-xl p-4 shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            {/* Left: Price */}
            <div className="space-y-2">
              <p className="text-2xl font-bold">
                <span className="text-customRed-500">${weeklyPrice} </span>
                <span className="text-sm font-medium text-gray-600">/ week</span>
              </p>
              <p className="text-sm text-gray-500">Estimated drive away price</p>
              <div className="inline-block bg-customRed-500 text-white text-xs font-medium px-2 py-1 rounded">
                Limited-time deal
              </div>
            </div>



            {/* Right: Model Info */}
            <div className="space-y-2 text-right sm:text-left">
              <h4 className="text-lg font-semibold">{vehicle.title} - {selectedModel}</h4>
              <span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                Selected
              </span>
            </div>
          </div>
        </div>

        {/* Card 2: General Info */}
        <div className="border rounded-xl p-4 space-y-4 shadow-sm">
          <h4 className="text-lg font-semibold">General Information</h4>
          <div className="space-y-4 text-sm">
            {selectedVariation?.generalInfo.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row justify-between gap-2 pb-2 ${index !== selectedVariation.generalInfo.length - 1 ? "border-b" : ""
                  }`}
              >
                <span className="text-gray-700 md:w-[50%]">{item.label}</span>
                <div className="flex flex-wrap gap-2">
                  {item.values.map((val, i) => (
                    <div
                      key={i}
                      className="bg-[#fafafa] rounded-[5px] py-1 px-2 text-xs text-gray-800"
                    >
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Safety & Warranty */}
        <div className="border rounded-xl p-4 space-y-4 shadow-sm">
          <h4 className="text-lg font-semibold">Safety & Warranty</h4>
          <div className="space-y-4 text-sm">
            {vehicle.safetyInfo.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row justify-between gap-2 pb-2 ${index !== vehicle.safetyInfo.length - 1 ? "border-b" : ""
                  }`}
              >
                <span className="text-gray-700 md:w-[50%]">{item.label}</span>
                <div className="flex flex-wrap gap-2">
                  {item.values.map((val, i) => (
                    <div
                      key={i}
                      className="bg-[#fafafa] rounded-[5px] py-1 px-2 text-xs text-gray-800"
                    >
                      {val}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full lg:w-1/2 order-1 lg:order-2">
        <div className="bg-[#f9f9fb] p-4 rounded-md lg:sticky lg:top-[100px]">
          <h2 className="text-2xl font-semibold mb-2">Lock in Your {vehicle.title} Lease Today</h2>
          <p className="text-gray-600 mb-6">Explore your pricing structure</p>

          {/* Model Dropdown */}
          <div className="mb-6">
            <label className="block mb-1 text-sm font-medium">Model</label>
            <select
              value={selectedModel}
              onChange={(e) => setSelectedModel(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:ring-blue-300"
            >
              {models.map((model) => (
                <option key={model} value={model}>{model}</option>
              ))}
            </select>
          </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6 border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-2 text-sm w-full font-medium border-b-[5px] transition ${activeTab === tab
                  ? "border-customBlue-500 text-customBlue-500"
                  : "border-transparent text-gray-500 hover:text-black"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Pricing Details */}

          <div className="space-y-3">
            <p className="text-3xl font-bold text-customRed-500">
              ${pricing[activeTab]}
              <span className="text-base font-medium text-gray-600">/ week</span>
            </p>
            <p className="text-sm text-gray-500">Estimated drive away price</p>
            <div className="inline-block bg-customRed-500 text-white text-xs font-medium px-2 py-1 rounded">
              Limited-time deal
            </div>

            <CButton
              onClick={() => setIsModalOpen(true)}
              className="hidden md:flex group w-full"
              label={
                <span className="flex justify-center items-center">
                  Get An Offer
                  <Icons
                    name="right"
                    className="ml-2 w-5 h-5 text-white transition-transform duration-300 group-hover:animate-slide-in-left"
                  />
                </span>
              }
              variant="blue"
            />
          </div>

          <InquiryModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            vehicle={
              {
                brand: vehicle.brand,
                vehicle: vehicle.title + " || " + selectedModel,
                featured_image: vehicle.featured_image,
                weeklyPrice: weeklyPrice
              }
            }
          />

        </div>
      </div>
    </div>
  );
}
