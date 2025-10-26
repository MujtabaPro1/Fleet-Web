// components/CButton.tsx
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
    label: React.ReactNode; // 👈 Allow JSX, not just string
    onClick?: () => void;
    href?: string;
    variant?: 'blue' | 'transparent-blue' | 'red' | 'transparent-red';
    className?: string;
};

const CButton: React.FC<ButtonProps> = ({
    label,
    onClick,
    href,
    variant = 'blue',
    className = '',
}) => {
    let baseClasses = 'inline-block px-3 py-2.5  text-center justify-center rounded font-medium transition-colors duration-200 ';

    // Apply variant styles
    switch (variant) {
        case 'blue':
            baseClasses += 'bg-customBlue-500 text-white hover:bg-customBlue-700 ';
            break;
        case 'transparent-blue':
            baseClasses += 'border border-[#0a0a0a1a] xborder-customBlue-500 text-customBlue-500 bg-white hover:bg-[#e8ecf0] -hover:bg-customBlue-100 ';
            break;
        case 'red':
            baseClasses += 'bg-customRed-500 text-white hover:bg-customRed-700 ';
            break;
        case 'transparent-red':
            baseClasses += 'border border-customRed-500 text-customRed-500 bg-white hover:bg-customRed-200 ';
            break;
        default:
            break;
    }

    baseClasses += className;

    if (href) {
        return (
            <Link href={href} className={baseClasses}>
                {label}
            </Link>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses}>
            {label}
        </button>
    );
};

export default CButton;
