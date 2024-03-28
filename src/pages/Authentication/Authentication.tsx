import { Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

import BasicCard from "../../components/common/BasicCard/BasicCard.tsx";
import SearchBar from "../../components/common/SearchBar/SearchBar.tsx";
import CommonButton from "../../components/common/CommonButton/CommonButton.tsx";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper.tsx";
import { cardHeaderStyles } from "./styles.ts";

const Authentication = () => {
  const getHeader = () => {
    const addUser = () => {
      console.log("Add User");
    };
    const handleChange = (value: string) => {
      console.log(value);
    };

    return (
      <Box sx={cardHeaderStyles.wrapper}>
        <SearchBar
          placeholder="Search by email address, phone number, or user UID"
          onChange={(event) => handleChange(event.target.value)}
          searchBarWidth="720px"
        />
        <Box>
          <CommonButton
            variant="contained"
            onClick={addUser}
            size="large"
            sx={cardHeaderStyles.addUserButton}
          >
            Add User
          </CommonButton>
          <IconButton>
            <RefreshIcon />
          </IconButton>
        </Box>
      </Box>
    );
  };

  const getContent = () => (
    <Typography
      align="center"
      sx={{
        margin: "40px 16px",
        color: "rgba(0, 0, 0, 0.6)",
        fontSize: "1.3rem",
      }}
    >
      No users for this project yet
    </Typography>
  );
  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
    </GridWrapper>
  );
};

export default Authentication;
