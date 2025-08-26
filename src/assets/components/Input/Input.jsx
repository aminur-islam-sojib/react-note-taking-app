import { useState } from 'react';
import { useAppContext } from '../../Contex/Contex';
const Input = () => {
  const [text, setText] = useState('');
  const { notes, setNotes } = useAppContext() || {};

  const addNote = () => {
    const trimmed = (text || '').trim();
    if (!trimmed || !setNotes) return; // nothing to add or context not available

    const newNote = {
      id: Date.now().toString() + Math.random().toString(36).slice(2, 8),
      text: trimmed,
      complete: false,
    };

    setNotes((prev) =>
      Array.isArray(prev) ? [...prev, newNote] : [...(notes || []), newNote]
    );
    setText('');
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') addNote();
  };

  const toggleComplete = (id) => {
    setNotes((prevNotes) =>
      (Array.isArray(prevNotes) ? prevNotes : notes || []).map((note) =>
        note.id === id ? { ...note, complete: !note.complete } : note
      )
    );
  };

  const deleteItem = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  return (
    <>
      <div className=" w-full mx-auto p-4 border border-gray-300 rounded-lg shadow-md max-w-md">
        <h1 className=" text-xl font-bold mb-2">Add Your Note Here</h1>
        <div className="flex gap-2">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Type here"
              className="input focus-visible:outline-0 w-full"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={onKeyDown}
            />
          </div>
          <div>
            <button className="btn btn-primary" onClick={addNote}>
              Add
            </button>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-5 gap-1.5">
        {Array.isArray(notes) && notes.length > 0 ? (
          notes.map((note) => (
            <div
              key={note.id}
              className=" border-2 p-3 rounded-xl bg-yellow-200 border-green-500"
            >
              <div className=" flex gap-2 justify-center align-middle items-center">
                <input
                  type="checkbox"
                  className="checkbox checkbox-accent"
                  onChange={() => toggleComplete(note.id)}
                  id={note.id}
                  checked={!!note.complete}
                  readOnly={false}
                />{' '}
                <label
                  htmlFor={note.id}
                  className={
                    note.complete
                      ? 'line-through text-gray-500  text-xl font-medium'
                      : ' text-xl font-medium'
                  }
                >
                  {note.text}
                </label>
                <button
                  className="btn btn-error cursor-pointer"
                  onClick={() => deleteItem(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No notes add here</p>
        )}
      </div>
    </>
  );
};

export default Input;
