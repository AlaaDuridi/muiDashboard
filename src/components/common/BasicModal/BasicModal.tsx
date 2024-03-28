import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

import { modalStyles } from "./styles.ts";

import CommonButton from "../CommonButton/CommonButton.tsx";

const BasicModal = ({
  open,
  onClose,
  title,
  subTitle,
  content,
  onSubmit,
}: BasicModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={modalStyles.wrapper}>
        <Typography variant="h6" component="h2">
          {title}
        </Typography>
        <Typography sx={{ mt: 2 }}>{subTitle}</Typography>
        {content}
        <Box sx={modalStyles.buttons}>
          <CommonButton variant="contained" onClick={onSubmit}>
            Submit
          </CommonButton>
          <CommonButton onClick={onClose}>Cancel</CommonButton>
        </Box>
      </Box>
    </Modal>
  );
};
interface BasicModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  subTitle: string;
  content: JSX.Element;
  onSubmit: () => void;
}

export default BasicModal;
