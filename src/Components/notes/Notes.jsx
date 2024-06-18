import React, { useEffect } from "react";
import { Box, Grid, styled } from "@mui/material";
import { useDataContext } from "../../context/DataContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db, useFirebase } from "../../firebase";
import Form from "./Form";
import Note from "./Note";
import EmptyNotes from "./EmptyNotes";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const Notes = () => {
  const { currentUser } = useFirebase();
  const { notes, setNotes } = useDataContext();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ width: "100%", p: 3 }}>
        <DrawerHeader></DrawerHeader>
        <Form />
        {notes.length > 0 ? (
          <Grid container>
            {notes.map((note) => (
              <Grid item key={note.id} sx={{ marginTop: "16px" }}>
                <Note note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <EmptyNotes />
        )}
      </Box>
    </Box>
  );
};

export default Notes;
