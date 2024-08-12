import "./App.css";
import Heading from "./components/Heading";
import Note from "./components/Note";
import Footer from "./components/Footer";
import CreateArea from "./components/CreateArea";
import { useState } from "react";

function App() {
  const [isClick, setIsClick] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  const [notes, setNotes] = useState([]);

  function handleTitleChange(ev) {
    setNote((prevState) => {
      return { ...prevState, title: ev.target.value };
    });
  }

  function handleContentChange(ev) {
    setNote((prevState) => {
      return { ...prevState, content: ev.target.value };
    });
  }

  function handleClick(ev) {
    note.title &&
      note.content &&
      setNotes((prevItem) => {
        return [...prevItem, note];
      });
    ev.preventDefault();
    setNote({
      title: "",
      content: "",
    });
  }

  function deleteNote(id) {
    setNotes((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }

  function expendNote() {
    setIsClick(true);
  }
  return (
    <div className="App">
      <Heading />
      <CreateArea
        handleContentChange={handleContentChange}
        handleTitleChange={handleTitleChange}
        handleClick={handleClick}
        note={note}
        notes={notes}
        isClick={isClick}
        expendNote={expendNote}
      />

      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item["title"]}
          content={item["content"]}
          deleteNote={deleteNote}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
