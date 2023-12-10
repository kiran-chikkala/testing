import React from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const StyleInput = styled.div`
  width: ${(props) => props.width};
  padding: 10px 0px 0px 5px;
  border: none;
  outline: none;
`;

const RoundedSearch = ({ width, placeholder }) => {
  return (
    <StyleInput width={width}>
      <TextField
        fullWidth
        placeholder={placeholder}
        sx={{ position: "relative", padding: "5px" }}
        InputProps={{ sx: { borderRadius: 10 } }}
      />
      <SearchRoundedIcon
        sx={{
          position: "absolute",
          zIndex: 1,
          display: "inline-block",
          top: "28px",
          right: {
            xl: "79px",
            xs: "30px",
          },
        }}
      />
    </StyleInput>
  );
};

export default RoundedSearch;
