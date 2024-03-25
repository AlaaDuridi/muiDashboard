import CommonButton from "../common/CommonButton.tsx";
import NotificationBell from "../Notifications/NotificationBell.tsx";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import { Typography } from "@mui/material";
const Header = ({ title }: HeaderProps) => {
  return (
    <>
      <CommonButton>Go to docs</CommonButton>
      <NotificationBell iconColor="primary" />
      <Avatar src="https://mui.com/static/images/avatar/2.jpg"></Avatar>
      <div>
        <Typography>{title}</Typography>
        <CommonButton variant="outlined">Web Setup</CommonButton>
        <Tooltip title="help">
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};
interface HeaderProps {
  title: string;
}
export default Header;
