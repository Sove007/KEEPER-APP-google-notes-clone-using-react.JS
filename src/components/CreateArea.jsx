import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';


function CreateArea(props) {

  const [isExpendable, setIsExpendable] = useState(false)

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expend() {
    setIsExpendable(true)
  }

  return (
    <div>
    
      <form className="create-note">
       {isExpendable &&  <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expend}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpendable ? 3 : 1}
        />

<Zoom in={isExpendable}>

        <Fab onClick={submitNote}>
        <AddIcon/>
        </Fab>
</Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
