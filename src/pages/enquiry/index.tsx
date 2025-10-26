import Head from 'next/head';
import { MyPage } from '@/components/layouts/types';
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useState } from "react";

const EnquiryPage: MyPage = () => {
    const { t } = useTranslation("common");
    const metaTitle = t("enquiry.title");

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        business: '',
        allowance: '',
        tradeIn: '',
        testDrive: '',
        howFound: '',
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    return (
        <>
            <Head>
                <title>{`Fleet Leasing Australia | ${metaTitle}`}</title>
            </Head>

            <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
                <div className="max-w-3xl w-full bg-white shadow-lg rounded-lg p-8 space-y-6">
                    <div>
                        <h1 className="text-2xl font-semibold text-gray-800 mb-1">
                            Interested in the <span className="text-customRed-500">TOYOTA HILUX WORKMATE (4x2)</span>?
                        </h1>
                        <p className="text-gray-600 text-sm">Fleetplan Australia can help you with:</p>
                        <ul className="list-disc list-inside text-gray-600 text-sm mt-2 space-y-1">
                            <li>✔ Advise on vehicles and options extras</li>
                            <li>✔ Best finance and leasing options</li>
                            <li>✔ Trade-in valuations and test drive’s</li>
                        </ul>
                    </div>

                    <form className="space-y-6">
                        {/* Text Fields */}
                        {[
                            { label: "Name", name: "name", type: "text" },
                            { label: "Email", name: "email", type: "email" },
                            { label: "Phone Number", name: "phone", type: "tel" },
                            { label: "Business Name or ABN", name: "business", type: "text" },
                        ].map(({ label, name, type }) => (
                            <div key={name} className="relative">
                                <input
                                    type={type}
                                    name={name}
                                    id={name}
                                    value={form[name as keyof typeof form]}
                                    onChange={handleChange}
                                    className="peer h-12 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-customBlue-500"
                                    placeholder={label}
                                />
                                <label htmlFor={name} className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 transition-all">
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
                                className="w-full border-b-2 border-gray-300 text-gray-900 h-12 bg-transparent focus:outline-none focus:border-customBlue-500"
                            >
                                <option value="">Select State</option>
                                <option value="NSW">New South Wales</option>
                                <option value="VIC">Victoria</option>
                                <option value="QLD">Queensland</option>
                                <option value="WA">Western Australia</option>
                                <option value="SA">South Australia</option>
                                <option value="TAS">Tasmania</option>
                                <option value="ACT">ACT</option>
                                <option value="NT">Northern Territory</option>
                            </select>
                            <label className="absolute left-0 -top-3.5 text-sm text-gray-600">State</label>
                        </div>

                        {/* Radio Groups */}
                        {[
                            { label: "Do you have vehicle allowance?", name: "allowance" },
                            { label: "Do you have a vehicle to trade?", name: "tradeIn" },
                            { label: "Book a test drive?", name: "testDrive" },
                        ].map(({ label, name }) => (
                            <div key={name} className="space-y-2">
                                <p className="text-sm font-medium text-gray-700">{label}</p>
                                <div className="flex gap-6">
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name={name}
                                            value="Yes"
                                            checked={form[name as keyof typeof form] === "Yes"}
                                            onChange={handleChange}
                                            className="form-radio text-customBlue-500"
                                        />
                                        <span className="ml-2">Yes</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name={name}
                                            value="No"
                                            checked={form[name as keyof typeof form] === "No"}
                                            onChange={handleChange}
                                            className="form-radio text-customBlue-500"
                                        />
                                        <span className="ml-2">No</span>
                                    </label>
                                </div>
                            </div>
                        ))}

                        {/* How did you find us */}
                        <div className="relative">
                            <select
                                name="howFound"
                                value={form.howFound}
                                onChange={handleChange}
                                className="w-full border-b-2 border-gray-300 text-gray-900 h-12 bg-transparent focus:outline-none focus:border-customBlue-500"
                            >
                                <option value="">Please choose</option>
                                <option value="google">Google</option>
                                <option value="social">Social Media</option>
                                <option value="referral">Referral</option>
                                <option value="ad">Online Ads</option>
                                <option value="other">Other</option>
                            </select>
                            <label className="absolute left-0 -top-3.5 text-sm text-gray-600">How Did You Find Us</label>
                        </div>

                        {/* Terms */}
                        <p className="text-xs text-gray-600">
                            By submitting this form, I agree to the terms of FleetPlan Australia’s <a href="/privacy" className="text-customBlue-500 underline">Privacy Policy</a>. FOR BUSINESS USE
                        </p>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full py-3 bg-customBlue-500 text-white rounded-md hover:bg-customBlue-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export async function getStaticProps(context: any) {
    const { locale } = context;
    return {
        props: {
            ...(await serverSideTranslations(locale)),
        },
    };
}

export default EnquiryPage;
EnquiryPage.Layout = "Default";
