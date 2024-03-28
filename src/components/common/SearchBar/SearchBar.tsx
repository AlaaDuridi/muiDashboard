import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import Box from "@mui/material/Box";

import React from "react";

const SearchBar = ({
  placeholder,
  onChange,
  searchBarWidth,
}: SearchBarProps) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <SearchIcon sx={{ marginRight: "10px" }} />
      <Input
        placeholder={placeholder}
        onChange={onChange}
        sx={{
          width: searchBarWidth,
          color: "rgba(0, 0, 0, 0.6)",
          fontSize: "1.1rem",
        }}
        disableUnderline
      />
    </Box>
  );
};

interface SearchBarProps {
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchBarWidth: string;
}
export default SearchBar;
