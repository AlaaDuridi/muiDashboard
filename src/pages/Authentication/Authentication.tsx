import Grid from "@mui/material/Grid";
import CommonButton from "../../components/common/CommonButton";
const Authentication = () => {
  const BUTTON_STYLES = {
    fontSize: "0.875rem",
    fontWeight: 600,
    textTransform: "capitalize",
    borderRadius: 2.5,
    "&.MuiButton-contained": {
      backgroundColor: "#009be5",
      "&:hover": {
        backgroundColor: "#006db3",
      },
    },
    "&.MuiButton-outlined": {
      color: "#fff",
      borderColor: "#fff",
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
  return (
    <Grid item xs={8}>
      This is authentication page.
      <CommonButton sx={BUTTON_STYLES} variant="contained">
        Add user
      </CommonButton>
      <CommonButton sx={BUTTON_STYLES} variant="outlined">
        Add user
      </CommonButton>
    </Grid>
  );
};

export default Authentication;
