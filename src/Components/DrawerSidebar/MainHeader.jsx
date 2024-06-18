import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";

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

const MainHeader = ({ handleDrawer, open }) => {
  const logo =
    "https://www.gstatic.com/images/branding/product/2x/keep_2020q4_48dp.png";
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
        <img src={logo} alt="logo" style={{ width: 30 }} />
        <Heading>Keep</Heading>
      </Toolbar>
    </Header>
  );
};

export default MainHeader;
