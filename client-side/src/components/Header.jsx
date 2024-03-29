import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";


import Person3Icon from '@mui/icons-material/Person3';

const Header = ({ setOpen, open }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Digitraly
          </Typography>
          <Button
            color="secondary"
            variant="contained"
            startIcon={<Person3Icon />}
            sx={{
              textTransform: "none",
            }}
            onClick={() => setOpen(!open)}
          >
            New Profile
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
