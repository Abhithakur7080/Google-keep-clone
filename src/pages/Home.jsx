import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import SwipeDrawer from "../Components/DrawerSidebar/SwipeDrawer";
import Notes from "../Components/notes/Notes";
import Archives from "../Components/archieves/Archives";
import DeleteNotes from "../Components/delete/DeleteNotes";

const Home = () => {
  return (
    <Box style={{ display: "flex", width: "100%" }}>
      
        <SwipeDrawer />
        <Routes>
          <Route path="/" element={<Notes />} />
          <Route path="/archive" element={<Archives />} />
          <Route path="/delete" element={<DeleteNotes />} />
        </Routes>
    </Box>
  );
};

export default Home;
