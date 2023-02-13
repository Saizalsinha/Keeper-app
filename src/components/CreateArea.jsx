import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea(props) {
    const [isClicked,setIsClick]=useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(event) {
    props.onAdd(note);
    event.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }
  return (
    <div>
      <form className="create-note">
      {isClicked && <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
        />}
        
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isClicked?"3":"1"}
          onChange={handleChange}
          onClick={()=>setIsClick(true)}
          value={note.content}
        />
        <Zoom in={isClicked}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
