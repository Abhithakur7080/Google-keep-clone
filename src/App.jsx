import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./Components/notes/Notes";
import Archives from "./Components/archieves/Archives";
import DeleteNotes from "./Components/delete/DeleteNotes";
import Login from "./pages/Login";
import DataProvider from "./context/DataContext";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <DataProvider>
              <Home />
            </DataProvider>
          }
        >
          <Route index element={<Notes />} />
          <Route path="archive" element={<Archives />} />
          <Route path="delete" element={<DeleteNotes />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
