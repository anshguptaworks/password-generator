"use client";

import React, { useState } from "react";
import Checkbox from "@/components/checkbox/Checkbox";
import Input from "@/components/input";
import RangeSlider from "@/components/rangeSlider/RangeSlider";
import { checkboxConfig } from "./config";
import cx from "classnames";
import Logo from "../assets/images/logo.png";
import Image from "next/image";

interface CheckboxStates {
  numbers: boolean;
  lowercase: boolean;
  uppercase: boolean;
  symbols: boolean;
  [key: string]: boolean;
}

type PasswordStrengthParams = {
  checkboxStates: CheckboxStates;
  passwordLength: number;
};

const Home = () => {
  const [password, setPassword] = useState("PASSWORD");
  const [passwordLength, setPasswordLength] = useState(10);
  const [strengthLevel, setStrengthLevel] = useState("very weak");

  const [checkboxStates, setCheckboxStates] = useState<CheckboxStates>(
    checkboxConfig.reduce(
      (acc, item) => ({
        ...acc,
        [item.value]: item.value === "uppercase" ? true : false,
      }),
      {} as CheckboxStates
    )
  );

  const generatePassword = () => {
    let newPassword = "";
    let allowedChars = "";

    if (checkboxStates.numbers) allowedChars += "0123456789";
    if (checkboxStates.lowercase) allowedChars += "abcdefghijklmnopqrstuvwxyz";
    if (checkboxStates.uppercase) allowedChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (checkboxStates.symbols) allowedChars += "!@#$%^&*()_+-=[]{};:,.<>?";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += allowedChars.charAt(
        Math.floor(Math.random() * allowedChars.length)
      );
    }

    setPassword(newPassword);
    setStrengthLevel(
      passwordStrength({
        checkboxStates: checkboxStates,
        passwordLength: passwordLength,
      })
    );
  };

  const handlePasswordChange = (e: { target: { value: string } }) => {
    setPassword(e.target.value);
  };

  const handlePasswordLengthChange = (value: number) => {
    setPasswordLength(value);
  };

  const handleCheckboxChange = (value: keyof CheckboxStates) => {
    setCheckboxStates((prevStates) => ({
      ...prevStates,
      [value]: !prevStates[value],
    }));
  };

  const handleGeneratePassword = () => {
    generatePassword();
  };

  const passwordStrength = ({
    checkboxStates,
    passwordLength,
  }: PasswordStrengthParams) => {
    const complexity = Object.values(checkboxStates).filter(Boolean).length;

    if (passwordLength >= 20 && complexity === 4) {
      return "very strong";
    } else if (passwordLength >= 16 && complexity >= 3) {
      return "strong";
    } else if (passwordLength >= 12 && complexity >= 2) {
      return "medium";
    } else if (passwordLength >= 8 && complexity >= 1) {
      return "weak";
    }
    return "very weak";
  };

  return (
    <div className="flex justify-center max-w-80 md:max-w-2xl m-auto flex-col h-[90vh] sm:h-screen items-center">
      <Image className="duration-500 ease-in-out" src={Logo} alt="logo" />

      <div className="flex justify-center gap-6 flex-col w-full mt-12 md:mt-24">
        <Input onChange={handlePasswordChange} value={password} />

        <div>
          <h2 className="text-center mb-2 font-semibold">
            Password Length : {passwordLength}
          </h2>
          <RangeSlider
            onChange={(e: { target: { value: string } }) =>
              handlePasswordLengthChange(Number(e.target.value))
            }
            max={20}
            value={passwordLength}
          />
        </div>

        {checkboxConfig.map((item) => (
          <Checkbox
            key={item.value}
            value={item.value}
            label={item.label}
            checked={checkboxStates[item.value]}
            onChange={() => handleCheckboxChange(item.value)}
          />
        ))}

        <div className="flex justify-between items-center w-full">
          Strength
          <div
            className={cx("w-4 h-4 rounded-full", {
              "bg-red-500": strengthLevel === "very weak",
              "bg-orange-400": strengthLevel === "weak",
              "bg-yellow-400": strengthLevel === "medium",
              "bg-green-500": strengthLevel === "strong",
              "bg-blue-500": strengthLevel === "very strong",
            })}
          />
        </div>

        <button
          onClick={handleGeneratePassword}
          className="w-full p-4 mt-8 text-white bg-blue-500 rounded-md hover:bg-blue-600 outline-none"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};

export default Home;
