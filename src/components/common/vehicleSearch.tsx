import React, { useState, useEffect } from "react";
import Link from "next/link";
import { callMiddlewareApi } from "@/components/utils/api";
import CButton from "./form/Button";

type Vehicle = {
    id: string;
    brand?: string;
    title?: string;
    slug?: string;
    modelYear?: string;
};

const VehicleSearch: React.FC = () => {
    const [brands, setBrands] = useState<string[]>([]);
    const [selectedBrand, setSelectedBrand] = useState("");
    const [title, setTitle] = useState("");
    const [modelYear, setModelYear] = useState("");
    const [vehicles, setVehicles] = useState<Vehicle[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [searchTriggered, setSearchTriggered] = useState(false);

    useEffect(() => {
        setBrands([
            "Toyota", "Honda", "BMW", "Audi", "Ford",
            "Tesla", "Hyundai", "Nissan", "Chevrolet", "Kia"
        ]);
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSearchTriggered(true);
        setLoading(true);
        setError(null);

        try {
            const queryParams: Record<string, string> = {};
            if (selectedBrand) queryParams.brand = selectedBrand;
            if (title) queryParams.title = title;
            if (modelYear) queryParams.year = modelYear;

            const result = await callMiddlewareApi({
                targetEndpoint: "search/getVehicles",
                payload: {
                    query: queryParams,
                },
            });

            if (result.success) {
                setVehicles(result.data.vehicles?.slice(0, 10) || []);
            } else {
                setError(result.message || "Failed to fetch vehicles.");
            }
        } catch (err) {
            console.error(err);
            setError("Unexpected error occurred.");
        } finally {
            setLoading(false);
        }
    };

    const handleReset = () => {
        setSelectedBrand("");
        setTitle("");
        setModelYear("");
        setVehicles([]);
        setSearchTriggered(false);
        setError(null);
        setLoading(false);
    };
    const [isFocused, setIsFocused] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);

    return (


        <section className="relative VehicleSearch pb-[50px]">
            {showOverlay && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 pointer-events-none transition-opacity duration-1000"></div>
            )}

            <div className="relative z-40">
                <div className="xsection  py-10 px-6 lg:px-6">
                    <div className="relative xcontainer xmx-auto max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-wrap gap-4 items-end justify-between"
                        >
                            {/* Brand Dropdown */}
                            <div className="flex-1 min-w-[150px]">
                                <label className="block text-sm font-semibold mb-1 text-black">Brand</label>
                                <select
                                    value={selectedBrand}
                                    onChange={(e) => {
                                        setSelectedBrand(e.target.value);
                                        setShowOverlay(true);
                                    }}
                                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">All Brands</option>
                                    {brands.map((b) => (
                                        <option key={b} value={b}>{b}</option>
                                    ))}
                                </select>
                            </div>

                            {/* Title Input */}
                            <div className="flex-1 min-w-[200px]">
                                <label className="block text-sm font-semibold mb-1 text-black">Model Name</label>
                                <input
                                    type="text"
                                    value={title}
                                    onChange={(e) => {
                                        setTitle(e.target.value);
                                        setShowOverlay(true);
                                    }}
                                    onFocus={() => setShowOverlay(true)}
                                    onBlur={() => setShowOverlay(false)}
                                    placeholder="e.g. Corolla"
                                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            {/* Model Year Dropdown */}
                            {/* <div className="flex-1 min-w-[120px]">
                                <label className="block text-sm font-semibold mb-1 text-black">Model Year</label>
                                <select
                                    value={modelYear}
                                    onChange={(e) => {
                                        setModelYear(e.target.value);
                                        setShowOverlay(true);
                                    }}
                                    className="w-full px-3 py-2 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Any Year</option>
                                    {Array.from({ length: 20 }, (_, i) => {
                                        const year = new Date().getFullYear() - i;
                                        return <option key={year} value={year}>{year}</option>;
                                    })}
                                </select>
                            </div> */}

                            {/* Buttons */}
                            <div className="flex-shrink-0 flex gap-2">
                                <CButton onClick={() => setShowOverlay(true)} label={loading ? "Searching..." : "Search"} variant="blue" />
                                {/* 
                                <button
                                    type="submit"
                                    onClick={() => setShowOverlay(true)}
                                    disabled={loading}
                                    className={`px-5 py-2 rounded-lg text-white font-semibold text-sm transition ${loading ? "bg-blue-300 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                                        }`}
                                >
                                    {loading ? "Searching..." : "Search"}
                                </button> */}
                                <CButton
                                    onClick={() => {
                                        handleReset();
                                        setShowOverlay(false);
                                    }}
                                    label="Reset" variant="transparent-blue" />
                                {/* <button
                                    type="button"
                                    onClick={() => {
                                        handleReset();
                                        setShowOverlay(false);
                                    }}

                                    className="px-5 py-2 rounded-lg text-sm font-semibold border border-gray-300 hover:bg-gray-100"
                                >
                                    Reset
                                </button> */}
                            </div>
                        </form>

                        {/* Results */}
                        {searchTriggered && vehicles.length > 0 && (
                            <div className="absolute top-[99%] left-0 w-full bg-white rounded-lg shadow-lg z-40 border mt-2">
                                {vehicles.map((veh, i) => (
                                    <div
                                        key={veh.id || i}
                                        className="p-4 border rounded-lg hover:shadow-md transition"
                                    >
                                        <Link href={`/models/${veh.slug}`}>
                                            <h3 className="font-semibold text-lg">{veh.title || "Untitled"}</h3>
                                            {veh.brand && (
                                                <p className="text-gray-600 text-sm">Brand: {veh.brand}</p>
                                            )}
                                            {veh.modelYear && (
                                                <p className="text-gray-600 text-sm">Year: {veh.modelYear}</p>
                                            )}
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        )}

                        {searchTriggered && !loading && vehicles.length === 0 && (
                            <p className="text-gray-500 text-center mt-4">No vehicles found</p>
                        )}

                        {error && <p className="text-red-500 text-sm text-center mt-4">{error}</p>}
                    </div>
                </div>
            </div>
        </section>


    );
};

export default VehicleSearch;
