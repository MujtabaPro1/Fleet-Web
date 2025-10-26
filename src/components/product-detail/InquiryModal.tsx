import React, { useState } from 'react';
import Modal from '../common/modal/Modal';
// import EmailHelper from '../utils/EmailHelper';
import Image from 'next/image';
import CButton from '../common/form/Button';
import Icons from '../common/icons/Icons';

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

interface InquiryModalProps {
    isOpen: boolean;
    onClose: () => void;
    vehicle?: {
        brand?: string;
        vehicle?: string;
        featured_image?: string;
        weeklyPrice?: number;
    };
}

const InquiryModal: React.FC<InquiryModalProps> = ({ isOpen, onClose, vehicle }) => {
    const [form, setForm] = useState({
        name: '',
        phone: '',
        email: '',
        state: '',
        business: '',
        allowance: '',
        tradeIn: '',
        testDrive: '',
        howFound: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch('/api/email/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ form, vehicle }),
            });

            if (!response.ok) throw new Error('Failed to send email');

            alert('Inquiry sent!');
            onClose();
        } catch (err) {
            console.error(err);
            alert('Email sending failed.');
        }
    };


    return (
        <>
            {isOpen &&

                <Modal
                    headerContent={
                        <button
                            onClick={onClose}
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        >
                            Close
                        </button>
                    }
                    isOpen={isOpen}
                    onClose={onClose}
                    title="Send Vehicle Inquiry"
                    id="InquiryModal"
                    footerContent={

                        <CButton
                            onClick={handleSave}
                            className="hidden md:flex group w-auto"
                            label={
                                <span className="flex justify-center items-center">
                                    Send Inquiry
                                    <Icons
                                        name="right"
                                        className="ml-2 w-5 h-5 text-white transition-transform duration-300 group-hover:animate-slide-in-left"
                                    />
                                </span>
                            }
                            variant="blue"
                        />
                        // <button
                        //     onClick={handleSave}
                        //     className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                        // >
                        //     Send Inquiry
                        // </button>
                    }
                >
                    <>
                        <div className="grid md:grid-cols-2 gap-6 relative">
                            {/* Vehicle Details */}
                            <div className="space-y-2 ">

                                {/* Vehicle Summary Card */}
                                {vehicle && (
                                    <div className='lg:sticky lg:top-[10px]'>
                                        <h3 className="text-lg font-semibold text-gray-800">Vehicle Info</h3>
                                        <div className="border rounded-xl p-4 shadow-sm ">

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                                                {/* Left: Price */}
                                                <div className="space-y-2">
                                                    <div className="space-y-2 text-right sm:text-left">
                                                        <h4 className="text-lg font-semibold">{vehicle.vehicle}</h4>
                                                        <span className="inline-block text-xs bg-green-100 text-green-800 px-2 py-1 rounded">
                                                            Selected
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <p className="text-2xl font-bold">
                                                            <span className="text-customRed-500">
                                                                ${vehicle.weeklyPrice}
                                                            </span>
                                                            <span className="text-sm font-medium text-gray-600">
                                                                / week
                                                            </span>
                                                        </p>
                                                        <p className="text-sm text-gray-500">Estimated drive away price</p>
                                                        <div className="inline-block bg-customRed-500 text-white text-xs font-medium px-2 py-1 rounded">
                                                            Limited-time deal
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Right: Model Info */}
                                                <div className=''>
                                                    <Image
                                                        src={vehicle.featured_image || ""}
                                                        alt="Main image"
                                                        width={200}
                                                        height={200}
                                                        className="object-contain"
                                                        sizes="(max-width: 400px) 400px, 400px"
                                                    />
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )}




                            </div>

                            {/* Inquiry Form */}
                            <form className="space-y-6">
                                {/* Text Inputs */}
                                {[
                                    { label: 'Name *', name: 'name', type: 'text', placeholder: 'Jane Smith' },
                                    { label: 'Phone number *', name: 'phone', type: 'tel', placeholder: '(000) 000 0000' },
                                    { label: 'Work email *', name: 'email', type: 'email', placeholder: 'name@email.com' },
                                    { label: 'Business Name or ABN', name: 'business', type: 'text', placeholder: '000 0000' },
                                ].map(({ label, name, type, placeholder }) => (
                                    <div key={name} className="relative">
                                        <input
                                            type={type}
                                            name={name}
                                            id={name}
                                            value={form[name as keyof typeof form]}
                                            onChange={handleChange}
                                            placeholder={placeholder}
                                            className="px-2 pt-2.5 peer h-14 bg-white w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-customBlue-500"
                                        />
                                        <label
                                            htmlFor={name}
                                            className="absolute left-2 -top-0 text-sm text-customBlue-500 peer-placeholder-shown:text-base 
                                            font-medium peer-placeholder-shown:text-customBlue-500 peer-placeholder-shown:top-2 transition-all"
                                        >
                                            {label}
                                        </label>
                                    </div>
                                ))}

                                {/* State Select */}
                                <div className="relative">
                                    <select
                                        name="state"
                                        value={form.state}
                                        onChange={handleChange}
                                        className="w-full border-b-2 h-14 bg-white px-2 pt-2.5 border-gray-300 text-gray-900 h-12 bg-transparent focus:outline-none focus:border-customBlue-500"
                                    >
                                        <option value="">State</option>
                                        <option value="NSW">New South Wales</option>
                                        <option value="VIC">Victoria</option>
                                        <option value="QLD">Queensland</option>
                                        <option value="WA">Western Australia</option>
                                        <option value="SA">South Australia</option>
                                        <option value="TAS">Tasmania</option>
                                        <option value="ACT">ACT</option>
                                        <option value="NT">Northern Territory</option>
                                    </select>
                                    <label className="absolute left-2 -top-0 text-sm font-medium text-customBlue-500">State *</label>
                                </div>

                                {/* Radio Groups */}
                                {[
                                    { label: 'Do you have vehicle allowance?', name: 'allowance' },
                                    { label: 'Do you have a vehicle to trade?', name: 'tradeIn' },
                                    { label: 'Book a test drive?', name: 'testDrive' },
                                ].map(({ label, name }) => (
                                    <div key={name} className="space-y-2">
                                        <p className="text-sm font-medium text-gray-700">{label}</p>
                                        <div className="flex gap-6">
                                            {['Yes', 'No'].map((option) => (
                                                <label key={option} className="inline-flex items-center">
                                                    <input
                                                        type="radio"
                                                        name={name}
                                                        value={option}
                                                        checked={form[name as keyof typeof form] === option}
                                                        onChange={handleChange}
                                                        className="form-radio text-customBlue-500"
                                                    />
                                                    <span className="ml-2">{option}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}

                                {/* How did you find us? */}
                                <div className="relative">
                                    <select
                                        name="howFound"
                                        value={form.howFound}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-300 text-gray-900 h-12 bg-transparent focus:outline-none focus:border-customBlue-500"
                                    >
                                        <option value="">Example</option>
                                        <option value="google">Google</option>
                                        <option value="social">Social Media</option>
                                        <option value="referral">Referral</option>
                                        <option value="ad">Online Ads</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <label className="absolute left-0 -top-3.5 text-sm text-gray-600">
                                        How did you find us?
                                    </label>
                                </div>

                                {/* Privacy Notice */}
                                <p className="text-xs text-gray-600">
                                    By submitting this, I confirm that I have read and understood the{' '}
                                    <a href="/privacy" className="text-customBlue-500 underline">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </form>
                        </div>
                    </>
                </Modal>

            }
        </>
    );
};

export default InquiryModal;
