// import React from 'react';

import type { ReactElement } from "react";

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement
  endIcon?: ReactElement;
  onClick?: () => void;
}

const VariantStyle = {
  "primary": "bg-light-purple font-quicksand text-dark-purple",
  "secondary": "bg-dark-purple font-quicksand font-semibold text-white"
}

const sizeStyle = {
  "sm": "text-sm py-1.5 px-3",
  "md": "text-xl py-1.5 px-4",
  "lg": "text-2xl px-1.5 py-8"
}

const defaultStyle = "rounded-md p-2 flex cursor-pointer";

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className={`${VariantStyle[props.variant]} ${sizeStyle[props.size]} ${defaultStyle}`}>
      {props.startIcon ? 
        <div className="pr-1.5 flex justify-center items-center">
          {props.startIcon}
          </div> 
        : null} 
      {props.text}
    </button>
  );
};

export default Button;