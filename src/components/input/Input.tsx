"use client";
import { getIcons } from "@/assets";
import { IconsType } from "@/assets/types";
import React, { useState } from "react";
import Tooltip from "../tooltip";

interface InputProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ onChange, value }: InputProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleCopyPassword = () => {
    navigator.clipboard.writeText(value || "");
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 2000);
  };
  return (
    <div className="flex justify-between items-center flex-row px-5 border-none rounded-lg bg-slate-900 outline-none">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="block w-full p-4 pl-0 pr-10 text-sm text-white  border-none bg-slate-900 outline-none cursor-not-allowed"
        placeholder="Password"
        disabled
      />

      <Tooltip label="Copied!">
        <button onClick={handleCopyPassword} className="border-none bg-none">
          {getIcons(IconsType.copy, {
            pathClassName: "fill-white",
          })}
        </button>
      </Tooltip>
    </div>
  );
};

export default Input;
