import { forwardRef, ForwardedRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { SnackbarCloseReason } from "@mui/material/Snackbar";

const Alert = forwardRef(function Alert(
  props: AlertProps,
  ref: ForwardedRef<HTMLDivElement>
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const BasicSnackbar = ({ open, onClose, severity, message }: SnackbarProps) => {
  return (
    <>
      <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
        <Alert onClose={onClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
interface SnackbarProps {
  open: boolean;
  onClose: (
    event?: Event | React.SyntheticEvent<Element, Event>,
    reason?: SnackbarCloseReason
  ) => void;
  severity: "error" | "success" | "info" | "warning" | "error";
  message: string;
}

export default BasicSnackbar;
