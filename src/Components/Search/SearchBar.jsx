import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
const StyledInput = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  margin-top: 5px;
  backgorund-color: yellow;
  margin-bottom: 5px;
  width: ${(props) => props.width || "100%"};
`;

const SearchIcon = styled(SearchRoundedIcon)`
  position: absolute;
  right: 18px;
  cursor: pointer;
`;

const SearchBar = ({
  width,
  placeholder,
  updateChange,
  searchInputValue = "",
}) => {
  const [searchVal, setSearchVal] = useState(searchInputValue);

  useEffect(() => {
    updateChange(searchVal);
  }, [searchVal]);
  return (
    <>
      <StyledInput width={width}>
        <TextField
          fullWidth
          placeholder={placeholder}
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
          InputProps={{
            sx: { borderRadius: 10, backgroundColor: "lightgray" },
            endAdornment: <SearchIcon sx={{ color: "gray" }} />,
          }}
        />
      </StyledInput>
    </>
  );
};

export default SearchBar;
