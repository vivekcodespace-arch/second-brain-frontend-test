// import React from 'react';

interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;


}

const Button = (props: ButtonProps) => {
  return (
    <button onClick={props.onClick} className="text-brand-blue font-quicksand">{props.text}</button>
  );
};

export default Button;