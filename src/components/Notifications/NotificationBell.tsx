import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import BasicMenu from "../../components/common/BasicMenu.tsx";

import { useState } from "react";

const NotificationBell = ({ iconColor }: NotificationBellProps) => {
  const NOTIFICATIONS = [
    { id: 0, label: "First Notification" },
    { id: 1, label: "Second Notification" },
  ];
  const BADGE_CONTENT = NOTIFICATIONS.length;
  const NEW_NOTIFICATION = `You have ${BADGE_CONTENT} new notification!`;

  const NO_NOTIFICATION = "You have no new notification!";

  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Tooltip title={BADGE_CONTENT ? NEW_NOTIFICATION : NO_NOTIFICATION}>
        <IconButton
          color={iconColor}
          onClick={BADGE_CONTENT ? handleOpen : () => {}}
        >
          <Badge badgeContent={BADGE_CONTENT} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Tooltip>
      <BasicMenu
        open={open}
        anchorEl={anchorEl}
        handleClose={handleClose}
        notifications={NOTIFICATIONS}
      />
    </>
  );
};

interface NotificationBellProps {
  iconColor: "inherit" | "primary" | "secondary" | "default";
}

export default NotificationBell;
