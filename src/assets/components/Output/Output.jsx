import { useAppContext } from '../../Contex/Contex1';

const Output = () => {
  const [notes, setNotes] = useAppContext();

  const toggleComplete = (id) => {
    setNotes((notes) =>
      notes.map((note) =>
        note.id === id ? { ...note, complete: !note.complete } : note
      )
    );
  };

  const deleteItem = (id) => {
    setNotes((notes) => notes.filter((note) => note.id !== id));
  };

  return (
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
  );
};

export default Output;
