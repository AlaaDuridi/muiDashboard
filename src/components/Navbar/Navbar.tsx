import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { MAIN_NAVBAR_LIST_ITEMS } from "./consts/navbarListItems";

import { NAV_BAR_STYLES } from "./styles.ts";

const Navbar = () => {
  return (
    <>
      {" "}
      <Drawer sx={NAV_BAR_STYLES.drawer} variant="permanent" anchor="left">
        <Toolbar />
        <Divider />
        <List>
          {MAIN_NAVBAR_LIST_ITEMS.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton>
                <ListItemIcon sx={NAV_BAR_STYLES.icons}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText sx={NAV_BAR_STYLES.text} primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </>
  );
};

export default Navbar;
