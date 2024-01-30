import React from "react";

interface RangeSliderProps {
  value: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

const RangeSlider = ({ value, onChange, max, min = 6 }: RangeSliderProps) => {
  return (
    <div>
      <input
        min={min}
        max={max}
        type="range"
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />

      <div className="flex justify-between mt-2">
        <span>{min}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};

export default RangeSlider;
