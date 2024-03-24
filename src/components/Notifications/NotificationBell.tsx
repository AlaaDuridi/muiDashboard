import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const NotificationBell = ({
  iconColor,
  badgeContent,
}: NotificationBellProps) => {
  const NEW_NOTIFICATION = `You have ${badgeContent} new notification!`;
  const NO_NOTIFICATION = "You have no new notification!";

  return (
    <Tooltip title={badgeContent ? NEW_NOTIFICATION : NO_NOTIFICATION}>
      <IconButton color={iconColor}>
        <Badge badgeContent={badgeContent} color="error">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </Tooltip>
  );
};

interface NotificationBellProps {
  iconColor: "inherit" | "primary" | "secondary" | "default";
  badgeContent: number;
}

export default NotificationBell;
