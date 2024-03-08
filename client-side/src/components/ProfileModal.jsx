import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Controller, useForm } from "react-hook-form";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import AddIcon from "@mui/icons-material/Add";

import CancelIcon from "@mui/icons-material/Cancel";
import { toast } from "react-toastify";
import { useAddUser } from "ApiHelper";
import { useGtUser } from "../ApiHelper";
import { useEffect } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

var defaultValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
};

const ProfileModal = ({ open, setOpen, updateUser, setUpdateUser }) => {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const addUserMutation = useAddUser();
  const getUserMutation = useGtUser();

  console.log("updateUserupdateUser", updateUser);

  const { control, handleSubmit, setError, reset } = useForm({
    reValidateMode: "onChange",
    defaultValues,
  });

  const handleOnSubmit = async ({
    firstName,
    lastName,
    phone,
    address,
    email,
    city,
  }) => {
    console.table({
      firstName,
      lastName,
      phone,
      address,
      email,
      city,
    });

    // if (!userNumber) {
    //   setError("userNumber", {
    //     type: "custom",
    //     message: "Please enter user phone number",
    //   });
    //   return;
    // }
    let result = await addUserMutation.mutateAsync({
      firstName,
      lastName,
      phone,
      address,
      email,
      city,
    });

    if (!result?.data?.status) {
      toast.error(result?.data?.message);
      return;
    }

    toast.success("User Added Successfully");
    reset(defaultValues);
    handleClose();
  };

  const handleCancelBtn = () => {
    reset(defaultValues);
    handleClose();
  };

  const getUserData = async () => {
    if (updateUser) {
      let result = (await getUserMutation.mutateAsync({ _id: updateUser })).data;
      console.log(result, "result");
      reset(result?.data?.data);
    }
  };
  useEffect(() => {
    if (updateUser !== '') {
      console.log("is already");
      getUserData();
    }
  }, []);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => {
          handleClose();
          setUpdateUser("");
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        backdrop="static"
      >
        <Box sx={style}>
          <Typography variant="h6" gutterBottom>
            {`${updateUser ? "Update Profile" : "Create Profile"}`}
          </Typography>
          <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <Controller
                  name={"firstName"}
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      required
                      autoFocus
                      id="firstName"
                      name="firstName"
                      label="First name"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Controller
                  name="lastName"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      required
                      id="lastName"
                      name="lastName"
                      label="Last name"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="email"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      required
                      id="email"
                      name="email"
                      label="Email Address"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      required
                      id="address"
                      name="address"
                      label="Address"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <Controller
                  name="phone"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      required
                      id="phone"
                      name="phone"
                      label="Phone Number"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
              <TextField
                id="state"
                name="state"
                label="State/Province/Region"
                fullWidth
                variant="standard"
              />
            </Grid> */}
              <Grid item xs={12} sm={6}>
                <Controller
                  name="city"
                  control={control}
                  render={({
                    field: { onChange, value },
                    fieldState: { error },
                  }) => (
                    <TextField
                      helperText={error ? error.message : null}
                      required
                      id="city"
                      name="city"
                      label="City"
                      error={!!error}
                      onChange={onChange}
                      value={value}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                    />
                  )}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
              <TextField
                required
                id="country"
                name="country"
                label="Country"
                fullWidth
                autoComplete="shipping country"
                variant="standard"
              />
            </Grid> */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 5,
                  padding: "10px",
                  margin: "10px 5px 0px 5px",
                }}
              >
                <Button
                  sx={{ textTransform: "none" }}
                  variant="contained"
                  color="success"
                  endIcon={<AddIcon />}
                  type="submit"
                >
                  {updateUser ? "Update" : "Create"}
                </Button>
                <Button
                  sx={{ textTransform: "none" }}
                  variant="outlined"
                  color="error"
                  endIcon={<CancelIcon />}
                  onClick={() => handleCancelBtn()}
                >
                  Cancel
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileModal;
