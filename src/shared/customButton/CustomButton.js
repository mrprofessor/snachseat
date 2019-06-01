import React from "react";
import Button from "react-bootstrap/Button";

const CustomButton = ({ label, variant, onClick, size = "sm" }) => {
  return (
    <Button variant={variant} onClick={onClick} size={size}>
      {label}
    </Button>
  );
};

export default CustomButton;
