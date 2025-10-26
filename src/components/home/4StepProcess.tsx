import React from 'react';
import Image from 'next/image';
import CButton from '../common/form/Button';

const steps = [
    {
        number: '01.',
        title: 'Pre-Approval',
        description:
            'Check your eligibility and proposal in minutes. Perfect for ABN holders; get clarity on available finance and lease options before you commit.',
    },
    {
        number: '02.',
        title: 'Vehicle Sourcing & Procurement',
        description:
            'We source vehicles directly from our dealer network, securing fleet discounts to maximise your savings. Our commercial partnerships ensure ABN holders get access to pricing usually reserved for large fleets.',
    },
    {
        number: '03.',
        title: 'Finance and Leasing Application',
        description:
            'Our finance and leasing team handles the paperwork and submits your application directly to leading lenders, saving you time and hassle.',
    },
    {
        number: '04.',
        title: 'Settlement & Drive Away',
        description:
            'Once approved, we finalise the paperwork and arrange delivery so you can hit the road without delays. Whether it’s a single vehicle or a growing fleet, we scale the settlement process to match your business needs.',
    },
];
const TickSVG = () => {
    return (
        <svg
            className="rounded-full text-white stroke-white p-1 w-5 h-5 text-[10px] bg-customRed-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            focusable="false"
        >
            <path
                d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"
                stroke="white"
                fill="none"
                strokeWidth="16"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};


export default function FourStepProcess() {
    return (
        <section className="bg-[#f5f5f5] text-[#333333] py-20 px-6 md:px-12">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row gap-20 pb-10 lg:pb-10">
                    {/* Text Left Side */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl text-[#171717] md:text-4xl font-medium mb-5 animate-slide-in-top">
                            A Simple 4-Step Process from Quote to Keys
                        </h2>
                        <p className="text-base mb-10 animate-slide-in-bottom">
                            Simple, flexible, and fast commercial finance and leasing solutions designed for ABN holders from pre-approval to drive away, we make the process seamless.
                        </p>

                        <ul className="space-y-6 mt-2 mb-[50px]">
                            {steps.map((step, index) => (
                                <li key={index} className="animate-slide-up-fade flex flex-col md:flex-row gap-5 items-start bg-white rounded-lg p-[20px]">
                                    <div className="text-[28px] font-medium min-w-[50px]">{step.number}</div>
                                    <div>
                                        <h3 className="text-2xl text-[#171717] font-medium mb-1">{step.title}</h3>
                                        <p className="text-md leading-relaxed">{step.description}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <CButton className='hover:underline' label={"Start my Pre-Approval"} variant="blue" />

                    </div>

                    {/* Right Side Images */}
                    <div className="md:w-1/2 relative flex justify-end mb-[50px] md:pb-0 py-[50px] md:py-[20px]">
                        {/* Image 1 */}
                        <div className="absolute top-[-50px] md:top-0 right-[-10px] w-[180px] md:w-[220px] z-10">
                            <Image
                                src="https://framerusercontent.com/images/ofCgKJjMhpf4ROOU0QzK7YESRF0.jpeg?scale-down-to=512&width=1024&height=1024"
                                alt="Step Image 1"
                                width={220}
                                height={220}
                                className="rounded-xl shadow-lg object-cover"
                            />
                            <div className="absolute top-[90px] shadow-md right-[80%] hidden lg:inline-flex items-center overflow-hidden rounded-full bg-white px-3 py-2.5 min-w-fit">
                                <TickSVG />
                                <span className=" text-black text-lg font-normal ml-2 whitespace-nowrap">
                                    Trusted Expertise
                                </span>
                            </div>
                        </div>




                        {/* Image 2 */}
                        <div className="relative md:absolute md:top-32 md:left-10 w-[100%] z-5 px-5 md:pl-0 md:pr-5">
                            <Image
                                src="https://framerusercontent.com/images/VtWjhxkGnoIASIVPDjGL2EbLjI.jpeg"
                                alt="Step Image 2"
                                width={500}
                                height={800}
                                className="min-h-[400px] lg:min-h-[700px] rounded-xl shadow-lg object-cover"
                            />
                            <div className="absolute top-[200px] shadow-md left-[-50px] hidden lg:inline-flex items-center overflow-hidden rounded-full bg-white px-3 py-2.5 min-w-fit">
                                <TickSVG />
                                <span className=" text-black text-lg font-normal ml-2 whitespace-nowrap">
                                    Tailored to You
                                </span>
                            </div>
                            <div className="absolute top-[45%] shadow-md right-[0px] hidden lg:inline-flex items-center overflow-hidden rounded-full bg-white px-3 py-2.5 min-w-fit">
                                <TickSVG />
                                <span className=" text-black text-lg font-normal ml-2 whitespace-nowrap">
                                    Seamless Process
                                </span>
                            </div>
                            <div className="absolute top-[70%] shadow-md left-[-50px] hidden lg:inline-flex items-center overflow-hidden rounded-full bg-white px-3 py-2.5 min-w-fit">
                                <TickSVG />
                                <span className=" text-black text-lg font-normal ml-2 whitespace-nowrap">
                                    Strong Market Insights
                                </span>
                            </div>
                            <div className="absolute top-[100%] shadow-md left-[150px] hidden lg:inline-flex items-center overflow-hidden rounded-full bg-white px-3 py-2.5 min-w-fit z-20">
                                <TickSVG />
                                <span className=" text-black text-lg font-normal ml-2 whitespace-nowrap">
                                    After-Sales Support
                                </span>
                            </div>
                        </div>

                        {/* Image 3 */}
                        <div className="absolute bottom-[-50px] lg:bottom-[50px] left-0 w-[180px] md:w-[220px] z-10">
                            <Image
                                src="https://framerusercontent.com/images/7tI5W746uay9yxT0e46Tgaz3p04.jpeg?scale-down-to=512&width=1024&height=1024"
                                alt="Step Image 3"
                                width={220}
                                height={220}
                                className="rounded-xl shadow-lg object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
