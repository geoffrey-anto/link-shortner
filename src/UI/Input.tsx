import React, { type FC } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  max?: number;
  min?: number;
}

const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      value={props.value}
      maxLength={props.max}
      minLength={props.min}
      className="w-72 rounded-lg px-4 py-3 text-lg text-gray-700"
    />
  );
};

export default Input;
