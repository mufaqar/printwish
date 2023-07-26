import React, { ChangeEvent, FC, useCallback, useEffect, useState, useRef } from 'react';
import { BsChevronUp, BsChevronDown } from 'react-icons/bs';

interface MultiRangeSliderProps {
    min: number;
    max: number;
}

const PriceFilter: FC<MultiRangeSliderProps> = ({ min, max }) => {
    const [open, setOpen] = useState(false)
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef(min);
    const maxValRef = useRef(max);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback((value: number) =>
        Math.round(((value - min) / (max - min)) * 100), [min, max])

    // Set width of the range to decrease from the left side
    useEffect(() => {
        const minPercent = getPercent(minVal);
        const maxPercent = getPercent(maxValRef.current);

        if (range.current) {
            range.current.style.left = `${minPercent}%`;
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        const minPercent = getPercent(minValRef.current);
        const maxPercent = getPercent(maxVal);

        if (range.current) {
            range.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [maxVal, getPercent]);

    return (
        <div className='border-b'>
            <div onClick={() => setOpen(!open)} className='flex justify-between items-center cursor-pointer'>
                <h3 className='text-lg font-semibold font-opensans text-accent mb-3'>
                    Price
                </h3>
                {
                    open ? (
                        <BsChevronUp size={16} />
                    ) : (
                        <BsChevronDown size={16} />
                    )
                }
            </div>
            <div className={`price-filter mb-5 ${open ? 'block sm:mb-16 mb-24' : 'hidden'}`}>
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={minVal}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.min(Number(event.target.value), maxVal - 1);
                        setMinVal(value);
                        minValRef.current = value;
                    }}
                    className="thumb thumb--left"
                />
                <input
                    type="range"
                    min={min}
                    max={max}
                    value={maxVal}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                        const value = Math.max(Number(event.target.value), minVal + 1);
                        setMaxVal(value);
                        maxValRef.current = value;
                    }}
                    className="thumb thumb--right"
                />
                <div className="slider relative">
                    <div className="slider__track"></div>
                    <div ref={range} className="slider__range"></div>
                    <div className="slider__left-value text-base font-medium text-accent border-2 border-background px-3 py-1 rounded-sm">£{minVal}</div>
                    <div className="slider__right-value text-base font-medium text-accent border-2 border-background px-3 py-1 rounded-sm">£{maxVal}</div>
                </div>
            </div>
        </div>
    );
};

export default PriceFilter;