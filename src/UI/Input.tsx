import React, { type FC } from "react";

interface InputProps {
  placeholder: string;
  value: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = (props) => {
  return (
    <input
      {...props}
      value={props.value}
      className="w-72 rounded-lg px-4 py-3 text-lg text-gray-700"
    />
  );
};

export default Input;
