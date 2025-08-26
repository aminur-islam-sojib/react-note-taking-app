import { useState } from 'react';
import { useAppContext } from '../../Contex/Contex';
const Input = () => {
  const [text, setText] = useState('');
  const [notes, setNotes] = useAppContext() || [];

  const addNote = () => {
    const trimmed = (text || '').trim();
    if (!trimmed || !setNotes) return; // nothing to add or context not available

    const newNote = {
      id: Date.now(),
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
    </>
  );
};

export default Input;
