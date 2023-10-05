import React, { ClassAttributes, InputHTMLAttributes, forwardRef } from "react";

interface Props
  extends InputHTMLAttributes<HTMLInputElement>,
    ClassAttributes<HTMLInputElement> {
  isLoading?: boolean;
}
const Input = forwardRef(function ({
  className,
  isLoading,
  disabled,
  children,
  ...props
}: Props) {
  return (
    <>
      <input
        {...props}
        disabled={isLoading}
        className={`input join-item input-bordered ${className}`}
      />
    </>
  );
});

export default Input;
