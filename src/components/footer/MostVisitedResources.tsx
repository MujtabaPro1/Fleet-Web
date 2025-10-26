'use client';

import { useState } from 'react';
import CButton from '../common/form/Button';
import Icons from '../common/icons/Icons';

type ResourceItem = {
    title: string;
    description: string;
    link: string;
};

type ResourceCategory = {
    name: string;
    items: ResourceItem[];
};

const data: ResourceCategory[] = [
    {
        name: 'Financing Solution',
        items: [
            { title: 'Finance Lease', description: 'Long-term business leasing',
                link: '/products/fleet-leasing/finance-lease'
             },
            { title: 'Operating Lease', description: 'Vehicle and equipment lease',
                link: '/products/fleet-leasing/operating-lease'
             },
            { title: 'Chattel Mortgage', description: 'Asset financing for business',
                link: '/products/fleet-leasing/chattel-mortgage'
             },
            { title: 'Commercial Term Loans', description: 'Business loans for growth',
                link: '/products/fleet-leasing/commercial-term-loans'
             },
            { title: 'Line of Credit', description: 'Flexible business funding',
                link: '/products/fleet-leasing/line-of-credit'
             },
            { title: 'Working Capital', description: 'Finance daily operations',
                link: '/products/fleet-leasing/working-capital'
             },
            { title: 'Invoice Financing', description: 'Unlock cash from invoices',
                link: '/products/fleet-leasing/invoice-financing'
             },
            { title: 'Overdraft Facility', description: 'Extra funds when needed',
                link: '/products/fleet-leasing/overdraft-facility'
             },
            { title: 'Free Fleet Consultation', description: 'Expert advice for business owners',
                link: '/products/fleet-leasing/free-fleet-consultation'
             },
        ],
    },
    {
        name: 'Popular Use Models',
        items: [
            { title: 'Ford Ranger', description: 'Best ute leasing deals',
                link: '/vehicles/model/ford-ranger'
             },
            { title: 'Toyota HiLux', description: 'Best ute leasing deals',
                link: '/vehicles/model/toyota-hilux'
             },
            { title: 'Isuzu D-Max', description: 'Best ute leasing deals',
                link: '/vehicles/model/isuzu-d-max'
             },
            { title: 'BYD Shark 6', description: 'Best ute leasing deals',
                link: '/vehicles/model/byd-shark-6'
             },
            { title: 'Mitsubishi Triton', description: 'Best ute leasing deals',
                link: '/vehicles/model/mitsubishi-triton'
             },
            { title: 'Mazda BT-50', description: 'Best ute leasing deals',
                link: '/vehicles/model/mazda-bt-50'
             },
            { title: 'Toyota LandCruiser Ute', description: 'Best ute leasing deals',
                link: '/vehicles/model/toyota-landcruiser-ute'
             },
            { title: 'Nissan Navara', description: 'Best ute leasing deals',
                link: '/vehicles/model/nissan-navara'
             },
            { title: 'GWM Cannon', description: 'Best ute leasing deals',
                link: '/vehicles/model/gwm-cannon'
             },
            { title: 'Volkswagen Amarok', description: 'Best ute leasing deals',
                link: '/vehicles/model/volkswagen-amarok'
             },
        ],
    },
    {
        name: 'Popular Van Models',
        items: [
            { title: 'Toyota HiAce', description: 'Best van leasing deals',
                link: '/vehicles/model/toyota-hiace'
             },
            { title: 'Ford Transit Custom', description: 'Best van leasing deals',
                link: '/vehicles/model/ford-transit-custom'
             },
            { title: 'Mercedes-Benz Sprinter', description: 'Best van leasing deals',
                link: '/vehicles/model/mercedes-benz-sprinter'
             },
            { title: 'Volkswagen Transporter', description: 'Best van leasing deals',
                link: '/vehicles/model/volkswagen-transporter'
             },
            { title: 'Hyundai iLoad', description: 'Best van leasing deals',
                link: '/vehicles/model/hyundai-iload'
             },
            { title: 'LDV Deliver 9', description: 'Best van leasing deals',
                link: '/vehicles/model/ldv-deliver-9'
             },
            { title: 'Renault Kangoo', description: 'Best van leasing deals',
                link: '/vehicles/model/renault-kangoo'
             },
            { title: 'Peugeot Expert', description: 'Best van leasing deals',
                link: '/vehicles/model/peugeot-expert'
             },
            { title: 'Citroën Dispatch', description: 'Best van leasing deals',
                link: '/vehicles/model/citroen-dispatch'
             },
            { title: 'Fiat Scudo', description: 'Best van leasing deals',
                link: '/vehicles/model/fiat-scudo'
             },
        ],
    },
    {
        name: 'Popular SUV Models',
        items: [
            { title: 'Toyota RAV4', description: 'Best SUV leasing deals',
                link: '/vehicles/model/toyota-rav4'
             },
            { title: 'Mazda CX-5', description: 'Best SUV leasing deals',
                link: '/vehicles/model/mazda-cx-5'
             },
            { title: 'Hyundai Tucson', description: 'Best SUV leasing deals',
                link: '/vehicles/model/hyundai-tucson'
             },
            { title: 'Kia Sportage', description: 'Best SUV leasing deals',
                link: '/vehicles/model/kia-sportage'
             },
            { title: 'Honda CR-V', description: 'Best SUV leasing deals',
                link: '/vehicles/model/honda-cr-v'
             },
            { title: 'Nissan X-Trail', description: 'Best SUV leasing deals',
                link: '/vehicles/model/nissan-x-trail'
             },
            { title: 'Mitsubishi Outlander', description: 'Best SUV leasing deals',
                link: '/vehicles/model/mitsubishi-outlander'
             },
            { title: 'Ford Everest', description: 'Best SUV leasing deals',
                link: '/vehicles/model/ford-everest'
             },
            { title: 'Toyota Prado', description: 'Best SUV leasing deals',
                link: '/vehicles/model/toyota-prado'
             },
            { title: 'Volkswagen Tiguan', description: 'Best SUV leasing deals',
                link: '/vehicles/model/volkswagen-tiguan'
             },
        ],
    },
];

export default function MostVisitedResources() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="bg-[#f9f9fb] w-full py-10 shadow-[1px_0px_20px_rgba(0,0,0,0.03)]">
            <div className='container'>
                <h2 className="text-2xl font-semibold text-left text-customBlue-500 mb-6">
                    Navigate Our Most-Visited Resources
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-start gap-4 mb-6 border-[#e5e5e590] border-b pb-3">
                    {data.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-4 py-2 text-sm border xrounded-full transition ${activeTab === index
                                ? 'bg-customBlue-500 text-white'
                                : 'border-customBlue-500 text-customBlue-500 hover:bg-customBlue-100'
                                }`}
                        >
                            {tab.name}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                <div className="grid md:grid-cols-4 gap-3 items-center">
                    {data[activeTab].items.map((item, idx) => (
                        <div
                        onClick={() => window.location.href = item.link}
                        key={idx} className="x p-2 xrounded-lg shadow-sm hover:shadow-md transition">
                            <h5 className="font-medium text-customBlue-500">{item.title}</h5>
                            <p className="text-sm text-[#404968] mt-0">{item.description}</p>
                        </div>
                    ))}
                    <div>
                        <CButton
                            className="hidden md:flex group"
                            label={
                                <span className="flex justify-center items-center">
                                    Explore Deals
                                    <Icons
                                        name="right"
                                        className="ml-2 w-5 h-5 text-white transition-transform duration-300 group-hover:animate-slide-in-left"
                                    />
                                </span>
                            }
                            variant="blue"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
