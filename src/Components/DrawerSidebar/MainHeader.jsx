import React, { useState } from "react";
import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useFirebase } from "../../firebase";
import MenuIcon from "@mui/icons-material/Menu";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Header = styled(AppBar)`
  z-index: 1201;
  background: #fff;
  height: 70px;
  box-shadow: inset 0 -1px 0 0 #dadce0;
`;
const Heading = styled(Typography)`
  color: #5f6368;
  font-size: 24px;
  margin-left: 25px;
`;
const Items = styled(MenuItem)`
  display: flex;
  justify-content: flex-start;
`;

const MainHeader = ({ handleDrawer, open }) => {
  const { currentUser, logout } = useFirebase();
  const [openProfile, setOpenProfile] = useState(false);
  const logo =
    "https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png";
  const handleOpen = (e) => {
    setOpenProfile(e.currentTarget);
  };
  const handleClose = () => {
    setOpenProfile(false);
  };
  return (
    <Header open={open}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawer}
          edge="start"
          sx={{
            marginRight: "20px",
          }}
        >
          <MenuIcon />
        </IconButton>
        <img src={logo} alt="logo" style={{ width: 45 }} />
        <Heading>Keep</Heading>
        <Box
          onClick={handleOpen}
          sx={{ marginLeft: "auto", marginRight: "20px" }}
        >
          <Avatar alt={currentUser.displayName} src={currentUser.photoURL} />
        </Box>
        <Menu
          anchorEl={openProfile}
          open={Boolean(openProfile)}
          onClose={handleClose}
        >
          <Items onClick={logout}>
            <PowerSettingsNewIcon color="inherit" fontSize="small" />
            <Typography style={{ marginLeft: 8 }}>Logout</Typography>
          </Items>
        </Menu>
      </Toolbar>
    </Header>
  );
};

export default MainHeader;
