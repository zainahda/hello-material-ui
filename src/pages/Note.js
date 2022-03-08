import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "@mui/material";
import NotesCard from "../components/NotesCard";
import Masonry from "react-masonry-css";

const Note = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    reloadData();
  }, []);

  const reloadData = () => {
    axios.get(`http://localhost:3004/notes`).then((res) => {
      setNotes(res.data);
    });
  };

  const handleRemove = async (id) => {
    await axios.delete("http://localhost:3004/notes/" + id);

    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };
    const breakpoints ={
      default: 3,
      1100: 2,
      700: 1
    }
  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div item key={note.id} xs={12} md={3} lg={4}>
            <NotesCard note={note} handleRemove={handleRemove} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Note;
