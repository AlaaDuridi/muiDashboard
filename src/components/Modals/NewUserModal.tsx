import BasicModal from "../common/BasicModal/BasicModal";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

import { User } from "../../interfaces/User.ts";

interface NewUserModalProps {
  open: boolean;
  onClose: () => void;
  addNewUser: (data: User) => void;
}

const defaultInputValues: User = {
  userId: "",
  email: "",
  phoneNumber: "",
};

const NewUserModal = ({ open, onClose, addNewUser }: NewUserModalProps) => {
  const [values, setValues] = useState<User>(defaultInputValues);

  const modalStyles = {
    inputFields: {
      display: "flex",
      flexDirection: "column",
      marginTop: "20px",
      marginBottom: "15px",
      ".MuiFormControl-root": {
        marginBottom: "20px",
      },
    },
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validationSchema = Yup.object().shape({
    userId: Yup.string()
      .required("User ID is required")
      .min(6, "User ID must be at least 6 characters"),
    email: Yup.string()
      .required("Email is required")
      .email("Email is invalid."),
    phoneNumber: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<User>({
    resolver: yupResolver(validationSchema),
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (open) setValues(defaultInputValues);
  }, [open]);

  const getContent = () => (
    <Box sx={modalStyles.inputFields}>
      <TextField
        placeholder="User ID"
        label="User ID"
        required
        {...register("userId")}
        error={!!errors.userId}
        helperText={errors.userId?.message}
        value={values.userId}
        onChange={handleChange}
      />
      <TextField
        placeholder="Email"
        label="Email"
        required
        {...register("email")}
        error={!!errors.email}
        helperText={errors.email?.message}
        value={values.email}
        onChange={handleChange}
      />
      <TextField
        placeholder="Phone number"
        label="Phone number"
        required
        {...register("phoneNumber")}
        error={!!errors.phoneNumber}
        helperText={errors.phoneNumber?.message}
        value={values.phoneNumber}
        onChange={handleChange}
      />
    </Box>
  );

  return (
    <BasicModal
      open={open}
      onClose={onClose}
      title="New user"
      subTitle="Fill out inputs and hit 'submit' button."
      content={getContent()}
      onSubmit={handleSubmit(addNewUser)}
    />
  );
};

export default NewUserModal;
