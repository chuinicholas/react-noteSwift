import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function CreateArea({
  handleClick,
  handleContentChange,
  handleTitleChange,
  note,
  notes,
  isClick,
  expendNote,
}) {
  return (
    <div>
      <form className="create-note">
        {isClick && (
          <input
            value={note["title"]}
            onChange={handleTitleChange}
            name="title"
            placeholder="Title"
          />
        )}
        <textarea
          onClick={expendNote}
          value={note["content"]}
          onChange={handleContentChange}
          name="content"
          placeholder="Take a note..."
          rows={isClick ? "3" : "1"}
        />
        {isClick && (
          <Zoom in={isClick ? true : false}>
            <Fab
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              onClick={handleClick}
            >
              <AddIcon className="addBtn" />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
