import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import {
  ArchiveOutlined as Archive,
  DeleteOutlined as Delete,
} from "@mui/icons-material";
import { useDataContext } from "../../context/DataContext";
import { useLocation } from "react-router-dom";
import RestoreFromTrashIcon from "@mui/icons-material/RestoreFromTrash";

const StyledCard = styled(Card)`
  width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
`;
const Note = ({ note }) => {
  const {
    handleDeleteNote,
    handleArchiveNote,
    handleUnArchiveNote,
    handleRestoreNote,
  } = useDataContext();
  const location = useLocation();
  const handleArchive = (note) => {
    if (location.pathname === "/archive") {
      handleUnArchiveNote(note);
    } else {
      handleArchiveNote(note);
    }
  };
  const handleDelete = (note) => {
    if (location.pathname === "/delete") {
      handleRestoreNote(note);
    } else {
      handleDeleteNote(note);
    }
  };

  return (
    <StyledCard>
      <CardContent>
        <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
          {note.heading}
        </Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <Tooltip
          title={`${
            location.pathname === "/archive" ? "Unarchive" : "Archive"
          }`}
        >
          <Archive
            fontSize="medium"
            sx={{ marginLeft: "auto", color: "#757575", cursor: "pointer" }}
            onClick={() => handleArchive(note)}
          />
        </Tooltip>
        <Tooltip
          title={`${location.pathname === "/delete" ? "Restore" : "Delete"}`}
        >
          {location.pathname === "/delete" ? (
            <RestoreFromTrashIcon
              fontSize="medium"
              sx={{ color: "#757575", cursor: "pointer" }}
              onClick={() => handleDelete(note)}
            />
          ) : (
            <Delete
              fontSize="medium"
              sx={{ color: "#757575", cursor: "pointer" }}
              onClick={() => handleDelete(note)}
            />
          )}
        </Tooltip>
      </CardActions>
    </StyledCard>
  );
};

export default Note;
