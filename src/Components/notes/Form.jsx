import { Box, ClickAwayListener, TextField, styled } from "@mui/material";
import React, { useRef, useState } from "react";

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
  const containerRef = useRef()

  const toggleTextField = () => {
    setShowField(true)
    containerRef.current.style.minHeight = '70px'
  }
  const handleClickAway = () => {
    setShowField(false)
    containerRef.current.style.minHeight = '30px'
  }
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
        <Container ref={containerRef}>
      {showTextField && (
        <TextField
          placeholder="Title"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          style={{ marginBottom: 10 }}
          
        />
      )}
      <TextField
        placeholder="Take a note"
        multiline
        variant="standard"
        maxRows={Infinity}
        InputProps={{ disableUnderline: true }}
        onClick={toggleTextField}
      />
    </Container>
    </ClickAwayListener>
  );
};

export default Form;
