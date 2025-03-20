"use client";

import React from "react";
import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";

interface CustomPhoneInputProps {
  value: Value;
  onChange: (value: Value) => void;
  error?: string;
}

const CustomPhoneInput: React.FC<CustomPhoneInputProps> = ({ value, onChange, error, ...props }) => {
  return (
    <div>
      <PhoneInput
        international
        defaultCountry="FR"
        value={value}
        onChange={onChange}
        {...props}
        className={`border rounded-md p-2 ${error ? "border-red-500" : "border-gray-300"}`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default CustomPhoneInput;