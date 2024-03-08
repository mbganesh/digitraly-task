import { Box, Typography } from "@mui/material";
import ProfileModal from "components/ProfileModal";
import UserTable from "components/UserTable";
import React, { useState } from "react";

const HomePage = ({ open, setOpen }) => {

  const [updateUser , setUpdateUser] = useState('')

  return (
    <Box>
      <Typography variant="h4" textAlign="center" p={1} color="#025896">
        User Data
      </Typography>
      <UserTable open={open} setOpen={setOpen} setUpdateUser={setUpdateUser} />
      <ProfileModal open={open} setOpen={setOpen} updateUser={updateUser} setUpdateUser={setUpdateUser} />
    </Box>
  );
};

export default HomePage;
