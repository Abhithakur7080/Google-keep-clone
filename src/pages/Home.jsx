import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import SwipeDrawer from "../Components/DrawerSidebar/SwipeDrawer";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}> 
        <SwipeDrawer />
        <Outlet/>
    </Box>
  );
};

export default Home;
