import React from 'react';
import CButton from '../common/form/Button';

type AdsProps = {
    className?: string;
};

const Ads: React.FC<AdsProps> = ({ className = '' }) => {
    return (
        <div className={` xflex xflex-col xsm:flex-row items-center justify-between gap-4 px-5 xpy-4 bg-white  `}>
            <div className={`container rounded-lg  ${className}`}>
                <div className='py-5  flex justify-between'>
                    <input
                        type="text"
                        placeholder="Not sure what you're looking for?"
                        className="text-xl sm:text-2xl w-full sm:w-[80%] bg-transparent border-0 outline-0 h-14 sm:h-16 px-4 sm:px-5 placeholder-white text-white font-semibold"
                    />
                    <CButton label="Search" variant="transparent-blue" />
                </div>
            </div>
        </div>
    );
};

export default Ads;
