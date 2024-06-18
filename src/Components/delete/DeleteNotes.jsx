import React, { useEffect } from "react";
import { Box, Grid, styled } from "@mui/material";
import { useDataContext } from "../../context/DataContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db, useFirebase } from "../../firebase";
import Note from "../notes/Note";
import EmptyTrash from "./EmptyTrash";

const DrawerHeader = styled("div")(({ theme }) => ({
  ...theme.mixins.toolbar,
}));

const DeleteNotes = () => {
  const { currentUser } = useFirebase()
  const { deletedNotes, setDeletedNotes } = useDataContext();
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ width: "100%", p: 3 }}>
        <DrawerHeader></DrawerHeader>
       {
        deletedNotes.length > 0 ? 
        (
            <Grid container>
            {deletedNotes.map((note) => (
              <Grid item key={note.id} sx={{marginTop: "16px"}}>
                <Note  note={note} />
              </Grid>
            ))}
          </Grid>
        ) : (
            <EmptyTrash/>
        )
       }
      </Box>
    </Box>
  );
};

export default DeleteNotes;
