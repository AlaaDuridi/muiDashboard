import BasicSnackbar from "../../components/common/BasicSnackbar/BasicSnackbar";
import CommonButton from "../../components/common/CommonButton/CommonButton";
import GridWrapper from "../../components/common/GridWrapper/GridWrapper";
import Loading from "../../components/common/Loading/Loading";
import { useState, useEffect } from "react";

const Storage = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GridWrapper>
      This is storage page.
      {loading ? (
        <Loading>
          <CommonButton variant="contained" onClick={handleClick}>
            Open success snackbar
          </CommonButton>
        </Loading>
      ) : (
        <CommonButton variant="contained" onClick={handleClick}>
          Open success snackbar
        </CommonButton>
      )}
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
