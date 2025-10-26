import React, { useState } from 'react';

type PriceSliderProps = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    onChange?: (value: number) => void;
    onInput?: (value: number) => void;
    onMouseDown?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onMouseUp?: (e: React.MouseEvent<HTMLInputElement>) => void;
    onDragEnd?: () => void; // 👈 custom unified drag-end callback
};

const PriceSlider: React.FC<PriceSliderProps> = ({
    value,
    min = 0,
    max = 500,
    step = 1,
    onChange,
    onInput,
    onMouseDown,
    onMouseUp,
    onDragEnd,
}) => {
    const [internalValue, setInternalValue] = useState<number>(value ?? min);

    const currentValue = value ?? internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = Number(e.target.value);
        if (value === undefined) {
            setInternalValue(newValue);
        }
        onChange?.(newValue);
    };

    const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = Number(e.currentTarget.value);
        onInput?.(newValue);
    };

    const handleDragEnd = () => {
        onDragEnd?.();
    };

    return (
        <div className="w-full max-w-md mx-auto p-0">
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={currentValue}
                onChange={handleChange}
                onInput={handleInput}
                onMouseDown={onMouseDown}
                onMouseUp={(e) => {
                    onMouseUp?.(e);
                    handleDragEnd(); // call drag end on desktop
                }}
                onTouchEnd={handleDragEnd} // call drag end on mobile
                className="w-full h-[2px] bg-gray-200 appearance-none cursor-pointer accent-customBlue-500"
            />
            <label className="block mt-1 text-lg font-medium text-[#333333]">
                <span>${currentValue}</span> per week
            </label>
        </div>
    );
};

export default PriceSlider;
