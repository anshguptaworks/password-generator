import React, { useState } from "react";

interface TooltipProps {
  label: string;
  children: React.ReactNode;
}

const Tooltip = ({ children, label }: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
    setTimeout(() => setVisible(false), 2000);
  };

  return (
    <div onClick={toggleVisibility} className="relative flex justify-center">
      {children}
      {visible && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 px-3 py-1 bg-slate-600 text-white rounded text-sm z-10">
          {label}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
