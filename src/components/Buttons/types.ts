import React from "react";

export type ButtonProps = {
  size?: "small" | "medium" | "large";
  styletype?: "primary" | "secondary" | "secondary_link" | "secondary_icon";
  type?: "submit" | "button" | "reset";
  border?: boolean;
  children: JSX.Element | string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  plusIcon?: boolean;
  downloadIcon?: boolean;
};
