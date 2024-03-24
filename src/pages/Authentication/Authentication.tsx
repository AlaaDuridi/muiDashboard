import Grid from "@mui/material/Grid";
import NotificationBell from "../../components/Notifications/NotificationBell";
const Authentication = () => {
  return (
    <Grid item xs={8}>
      This is authentication page.
      <NotificationBell iconColor="primary" badgeContent={0} />
    </Grid>
  );
};

export default Authentication;
