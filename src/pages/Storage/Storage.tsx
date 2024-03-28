import BasicSnackbar from "../../components/common/BasicSnackbar/BasicSnackbar";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import { useState } from "react";

const Storage = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: Event | React.SyntheticEvent<Element, Event>,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <GridWrapper>
      This is storage page.
      <CommonButton variant="contained" onClick={handleClick}>
        Open Success snackbar
      </CommonButton>
      <BasicSnackbar
        open={open}
        onClose={handleClose}
        severity="success"
        message="Success msg"
      />
    </GridWrapper>
  );
};

export default Storage;
