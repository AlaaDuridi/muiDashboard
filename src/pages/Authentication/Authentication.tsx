import RefreshIcon from "@mui/icons-material/Refresh";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useState } from "react";
import BasicCard from "../../components/common/BasicCard/BasicCard.tsx";
import SearchBar from "../../components/common/SearchBar/SearchBar.tsx";
import CommonButton from "../../components/common/CommonButton/CommonButton.tsx";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper.tsx";
import NewUserModal from "../../components/Modals/NewUserModal.tsx";
import { cardHeaderStyles } from "./styles.ts";
import { User } from "../../interfaces/User.ts";
import UserTable from "../../components/UserTable/UserTable.tsx";
const Authentication = () => {
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);
  const [searchResults] = useState<User[]>(users);

  console.log(users);
  const getHeader = () => {
    const handleSearch = (value: string) => {
      filterData(value);
    };

    const filterData = (value: string) => {
      const lowercasedValue = value.toLowerCase().trim();
      if (lowercasedValue === "") {
        setUsers(searchResults);
      } else {
        const filteredData = searchResults.filter((item: User) => {
          return Object.keys(item).some((key) =>
            item[key]?.toString().toLowerCase().includes(lowercasedValue)
          );
        });
        setUsers(filteredData);
      }
    };

    const addUser = () => {
      setOpen(true);
    };

    return (
      <div>
        <Box sx={cardHeaderStyles.wrapper}>
          <SearchBar
            placeholder="Search by email address, phone number, or user UID"
            onChange={(event) => handleSearch(event.target.value)}
            searchBarWidth="720px"
          />
          <Box>
            <CommonButton
              variant="contained"
              onClick={addUser}
              size="large"
              sx={cardHeaderStyles.addUserButton}
            >
              Add user
            </CommonButton>
            <IconButton>
              <RefreshIcon />
            </IconButton>
          </Box>
        </Box>
      </div>
    );
  };

  const addNewUser = (data: User) => {
    users.push({ ...data });
    setOpen(false);
  };

  const getContent = () => <UserTable />;

  return (
    <GridWrapper>
      <BasicCard header={getHeader()} content={getContent()} />
      <NewUserModal
        open={open}
        onClose={() => setOpen(false)}
        addNewUser={addNewUser}
      />
    </GridWrapper>
  );
};

export default Authentication;
