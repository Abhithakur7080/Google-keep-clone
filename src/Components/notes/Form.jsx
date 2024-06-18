import React, { useRef, useState } from "react";
import { Box, ClickAwayListener, TextField, styled } from "@mui/material";
import { useDataContext } from "../../context/DataContext";
import { v4 as uuid } from "uuid";
import { useFirebase } from "../../firebase";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 600px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3), 0 2px 2px rgba(60, 64, 67, 0.5);
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  margin: auto;
  min-height: 30px;
`;

const Form = () => {
  const [showTextField, setShowField] = useState(false);
  const [addNote, setAddNote] = useState({
    id: uuid(),
    heading: "",
    text: "",
  });

  const { setNotes, notes } = useDataContext();
  const { updateDataFromFirestore, currentUser } = useFirebase();
  const containerRef = useRef();

  const toggleTextField = () => {
    setShowField(true);
    containerRef.current.style.minHeight = "70px";
  };
  const handleClear = () => {
    setAddNote({
      id: uuid(),
      heading: "",
      text: "",
    });
  };
  const handleClickAway = async () => {
    setShowField(false);
    containerRef.current.style.minHeight = "30px";
    if (addNote.heading || addNote.text) {
      setNotes((prev) => [addNote, ...prev]);
      await updateDataFromFirestore("users", currentUser.uid, {
        notes: [addNote, ...notes],
      });
      handleClear();
    }
  };
  const onTextChange = (e) => {
    setAddNote({ ...addNote, [e.target.name]: e.target.value });
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
        {showTextField && (
          <TextField
            value={addNote.heading}
            placeholder="Title"
            variant="standard"
            InputProps={{ disableUnderline: true }}
            style={{ marginBottom: 10 }}
            onChange={(e) => onTextChange(e)}
            name="heading"
          />
        )}
        <TextField
          value={addNote.text}
          placeholder="Take a note"
          multiline
          variant="standard"
          maxRows={Infinity}
          InputProps={{ disableUnderline: true }}
          onClick={toggleTextField}
          onChange={(e) => onTextChange(e)}
          name="text"
        />
      </Container>
    </ClickAwayListener>
  );
};

export default Form;
