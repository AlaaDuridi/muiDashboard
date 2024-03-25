import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

const BasicMenu = ({
  anchorEl,
  open,
  handleClose,
  notifications,
}: BasicMenuProps) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      {notifications.map((notification) => (
        <MenuItem key={notification.id} onClick={handleClose}>
          {notification.label}
        </MenuItem>
      ))}
    </Menu>
  );
};

interface BasicMenuProps {
  anchorEl: null | HTMLElement;
  open: boolean;
  handleClose: () => void;
  notifications: { id: number; label: string }[];
}

export default BasicMenu;
