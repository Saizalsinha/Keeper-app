import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteList, setNoteList] = useState([]);

  function addNote(note) {
    setNoteList((prevValue) => {
      return [...prevValue, note];
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((noteItem) => {
        console.log(noteItem);
        return (
          <Note key={1} title={noteItem.title} content={noteItem.content} />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
