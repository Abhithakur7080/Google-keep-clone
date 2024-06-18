import { Box, Grid, styled } from "@mui/material";
import React from "react";
import Form from "./Form";
import { useDataContext } from "../../context/DataContext";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { notes } = useDataContext();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ width: "100%", p: 3 }}>
        <DrawerHeader></DrawerHeader>
        <Form />
       {
        notes.length > 0 ? 
        (
            <Grid container>
            {notes.map((note) => (
              <Grid item key={note.id} sx={{marginTop: "16px"}}>
                <Note  note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
            <EmptyNotes/>
        )
       }
      </Box>
    </Box>
  );
};

export default Notes;
