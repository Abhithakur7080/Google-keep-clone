import React from "react";
import { Box, Grid, styled } from "@mui/material";
import { useDataContext } from "../../context/DataContext";
import EmptyArchives from "./EmptyArchives";
import Note from "../notes/Note";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = useDataContext();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ width: "100%", p: 3 }}>
        <DrawerHeader></DrawerHeader>
       {
        archiveNotes.length > 0 ? 
        (
            <Grid container>
            {archiveNotes.map((note) => (
              <Grid item key={note.id} sx={{marginTop: "16px"}}>
                <Note  note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
            <EmptyArchives/>
        )
       }
      </Box>
    </Box>
  );
};

export default Archives;
