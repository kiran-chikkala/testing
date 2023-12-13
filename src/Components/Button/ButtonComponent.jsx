import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import PropTypes from "prop-types";
// import "./button.css";

const ButtonComponent = (props) => {
  const { label, variant, size, loading, disabled, handleClick } = props;
  return (
    <div>
      <LoadingButton
        variant={variant}
        size={size}
        className="button-default-style "
        loading={loading}
        disabled={disabled}
        disableElevation
        disableRipple
        onClick={() => handleClick()}
      >
        {label}
      </LoadingButton>
    </div>
  );
};
ButtonComponent.prototype = {
  variant: PropTypes.string,
  size: PropTypes.string,
  label: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default ButtonComponent;
