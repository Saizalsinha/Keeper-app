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

  function deleteNote(id) {
    setNoteList(prevValue=>{
      return noteList.filter((noteItem,index)=>{
        return index!==id;
      })
    })
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {noteList.map((noteItem, index) => {
        console.log(noteItem);
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
