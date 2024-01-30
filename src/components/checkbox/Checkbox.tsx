import React from "react";

interface CheckboxProps {
  label: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
}

const Checkbox = ({ label, value, onChange, checked }: CheckboxProps) => {
  return (
    <div>
      <div className="flex items-center">
        <input
          checked={checked}
          type="checkbox"
          onChange={onChange}
          value={value}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded"
        />
        <label
          htmlFor="checked-checkbox"
          className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
