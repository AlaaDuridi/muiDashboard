import CommonButton from "../common/CommonButton.tsx";
import NotificationBell from "../Notifications/NotificationBell.tsx";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import HelpIcon from "@mui/icons-material/Help";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";

const Header = ({ title }: HeaderProps) => {
  const HEADER_STYLES = {
    wrapper: {
      backgroundColor: "#009be5",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: "20px",
    },
    topRow: {
      dsiplay: "flex",
      flexDirection: "row",
      justifyContent: "end",
      alignItems: "center",
      marginBottom: "20px",
      "*": {
        marginRight: "5px",
      },
    },
    middleRow: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "20px",
      marginLeft: "320px",
    },
    link: {
      fontWeight: "500",
      color: "rgba(255,255,255,0.7)",
      "&:hover": {
        color: "#fff",
        cursor: "pointer",
      },
    },
    webButton: {
      marginRight: "5px",
    },
  };

  return (
    <Box sx={HEADER_STYLES.wrapper}>
      <Box sx={HEADER_STYLES.topRow}>
        <Typography sx={HEADER_STYLES.link}>Go to docs</Typography>
        <NotificationBell iconColor="default" />
        <Avatar src="https://mui.com/static/images/avatar/2.jpg"></Avatar>
      </Box>
      <div>
        <Typography>{title}</Typography>
        <CommonButton variant="outlined">Web Setup</CommonButton>
        <Tooltip title="help">
          <IconButton>
            <HelpIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Box>
  );
};
interface HeaderProps {
  title: string;
}
export default Header;
