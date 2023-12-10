import React from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import PropTypes from "prop-types";
import "./button.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple, lime, pink } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    primary: lime,
  },
});

const ButtonComponent = (props) => {
  const { label, variant, size, loading, disabled, handleClick } = props;
  return (
    <ThemeProvider theme={theme}>
      <div className={size}>
        <LoadingButton
          variant={variant}
          size={size}
          className={size}
          loading={loading}
          disabled={disabled}
          disableElevation
          disableRipple
          onClick={() => handleClick()}
        >
          {label}
        </LoadingButton>
      </div>
    </ThemeProvider>
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
