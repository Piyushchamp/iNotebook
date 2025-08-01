import React, { useContext } from "react";
import NoteContext from "../context/notes/NoteContext.js";

const Noteitem = (props) => {
  const context = useContext(NoteContext);
  const { deletenote } = context;

  // ✅ Destructure the correct prop
  const { note, updateNote } = props;

  return (
    <div className="col-md-3 my-2">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i
            className="fa-solid fa-trash mx-2"
            onClick={() => {
              deletenote(note._id);
              props.showalert("Deleted successfully", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onClick={() => {
              updateNote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
