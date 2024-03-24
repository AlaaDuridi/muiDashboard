import React from "react";
import Button from "@mui/material/Button";

const CommonButton = ({
  color,
  disabled,
  size,
  children,
  ...props
}: CommonButtonProps) => {
  return (
    <Button color={color} disabled={disabled} size={size} {...props}>
      {children}
    </Button>
  );
};

interface CommonButtonProps {
  children: React.ReactNode;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  sx?: object;
  variant?: "text" | "outlined" | "contained";
}

export default CommonButton;
