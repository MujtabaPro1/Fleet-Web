import React from 'react';
import styles from './pagination.module.scss';
import GetLang from '@/hooks/getLang';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const lang = GetLang();

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    return (
        <div className={`${styles.paginationWrapper} w-full`}>
            <div className="flex items-center justify-between border-gray-200 bg-white px-4 py-3 sm:px-6">
                <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between w-full">
                    <div className='w-full text-center'>
                        <nav className="isolate inline-flex -space-x-px rounded-md" aria-label="Pagination">
                            <button
                                onClick={handlePrevious}
                                disabled={currentPage === 1}
                                className={` ${currentPage === 1 ? "text-gray-400" : ""} relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20`}
                            >
                                Previous
                            </button>

                            {pageNumbers.map((page) => (
                                <button
                                    key={page}
                                    onClick={() => onPageChange(page)}
                                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 ${currentPage === page ? styles.active : ''
                                        }`}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className={` ${currentPage === totalPages ? "text-gray-400" : ""}  relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20`}
                            >
                                Next
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
