import React, { type FC } from "react";

interface ButtonProps {
  placeholder: string;
  type: "submit" | "button" | "reset" | undefined;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Button: FC<ButtonProps> = (props) => {
  return (
    <button
      type={props.type}
      className="w-fit rounded-lg bg-rose-400 px-14 py-3 text-lg text-white"
    >
      {props.placeholder}
    </button>
  );
};

export default Button;
