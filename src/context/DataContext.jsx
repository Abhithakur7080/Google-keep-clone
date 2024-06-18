import { createContext, useContext, useEffect, useState } from "react";
import { db, useFirebase } from "../firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const { currentUser, updateDataFromFirestore } = useFirebase();
  const [notes, setNotes] = useState([]);
  const [archiveNotes, setArchiveNotes] = useState([]);
  const [deletedNotes, setDeletedNotes] = useState([]);
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  const fetchdata = onSnapshot(doc(db, "users", currentUser.uid), (doc) => {
    if (doc.exists()) {
      setNotes(doc.data().notes);
      setArchiveNotes(doc.data().archives);

      const currentTime = new Date();
      const deletedData = doc.data().deleted || []
      const updatedDeleted = deletedData.filter((n) => {
        if (n.expiresAt) {
          return new Date(n.expiresAt) > currentTime;
        }
        return true;
      });
      setDeletedNotes(updatedDeleted);
    }
  });
  const handleArchiveNote = async (note) => {
    fetchdata();
    const updatedNotes = notes.filter((n) => n.id !== note.id);
    setNotes(updatedNotes);
    setArchiveNotes((prev) => [...prev, note]);
    await updateDataFromFirestore("users", currentUser.uid, {
      notes: updatedNotes,
      archives: [note, ...archiveNotes],
    });
  };
  const handleUnArchiveNote = async (note) => {
    fetchdata();
    const updatedNotes = archiveNotes.filter((n) => n.id !== note.id);
    setArchiveNotes(updatedNotes);
    setNotes((prev) => [...prev, note]);
    await updateDataFromFirestore("users", currentUser.uid, {
      notes: [note, ...notes],
      archives: updatedNotes,
    });
  };
  const handleDeleteNote = async (note) => {
    fetchdata();
    const updatedNotes = notes.filter((n) => n.id !== note.id);
    setNotes(updatedNotes);
    //delete time
    const deletionTime = new Date();
    const expirationTime = new Date();
    expirationTime.setDate(deletionTime.getDate() + 7);
    //update note
    const noteWithDeletionTime = {
      ...note,
      deletedAt: deletionTime.toISOString(),
      expiresAt: expirationTime.toISOString(),
    };
    setDeletedNotes((prev) => [...prev, noteWithDeletionTime]);
    await updateDataFromFirestore("users", currentUser.uid, {
      notes: updatedNotes,
      deleted: [note, ...deletedNotes],
    });
  };
  const handleRestoreNote = async (note) => {
    fetchdata();
    const updatedNotes = deletedNotes.filter((n) => n.id !== note.id);
    setDeletedNotes(updatedNotes);
    setNotes((prev) => [...prev, note]);
    await updateDataFromFirestore("users", currentUser.uid, {
      deleted: updatedNotes,
      notes: [note, ...notes],
    });
  };
  return (
    <DataContext.Provider
      value={{
        notes,
        setNotes,
        archiveNotes,
        deletedNotes,
        handleArchiveNote,
        handleDeleteNote,
        handleUnArchiveNote,
        handleRestoreNote,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => useContext(DataContext);

export default DataProvider;
