import React from "react";

export default function NewSearch() {
    return (
        <div className="opacity-100">
            <form
                className="bg-white rounded-2xl shadow-[0_1px_20px_rgba(0,0,0,0.03)] w-full flex flex-row justify-end items-end gap-2.5 p-5 relative overflow-hidden"
                aria-label="Search form"
            >
                {/* Brand Section */}
                <div className="flex flex-col flex-1 opacity-100">
                    <div className="flex flex-col justify-start flex-shrink-0 text-black font-semibold text-[15px] leading-[1.4em] tracking-tight mb-2">
                        Brand
                    </div>
                    <div className="w-full opacity-100">
                        <div className="border border-gray-200 rounded-lg w-full flex items-center justify-between px-3 py-2 cursor-pointer opacity-100">
                            <p className="text-gray-500 text-sm">All brand</p>
                            <div className="w-5 h-5 flex-shrink-0 text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-full h-full"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <polyline points="208 96 128 176 48 96" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Body Type Section */}
                <div className="flex flex-col flex-1 opacity-100">
                    <div className="flex flex-col justify-start flex-shrink-0 text-black font-semibold text-[15px] leading-[1.4em] tracking-tight mb-2">
                        Body Type
                    </div>
                    <div className="w-full opacity-100">
                        <div className="border border-gray-200 rounded-lg w-full flex items-center justify-between px-3 py-2 cursor-pointer opacity-100">
                            <p className="text-gray-500 text-sm">All body types</p>
                            <div className="w-5 h-5 flex-shrink-0 text-gray-500">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 256 256"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="24"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="w-full h-full"
                                    aria-hidden="true"
                                    focusable="false"
                                >
                                    <polyline points="208 96 128 176 48 96" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Search Button */}
                <button
                    type="submit"
                    className="bg-blue-600 rounded-xl px-5 py-2.5 flex items-center gap-2.5 text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    tabIndex={0}
                    aria-label="Search"
                >
                    <span>Search</span>
                    <div className="w-6 h-6 flex-shrink-0">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 256 256"
                            fill="currentColor"
                            className="w-full h-full"
                            aria-hidden="true"
                            focusable="false"
                        >
                            <path d="M232.49,215.51,185,168a92.12,92.12,0,1,0-17,17l47.53,47.54a12,12,0,0,0,17-17ZM44,112a68,68,0,1,1,68,68A68.07,68.07,0,0,1,44,112Z" />
                        </svg>
                    </div>
                </button>
            </form>
        </div>
    );
}
