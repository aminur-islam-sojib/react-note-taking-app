const Input = () => {
  return (
    <>
      <div className=" w-full mx-auto p-4 border border-gray-300 rounded-lg shadow-md max-w-md">
        <h1 className=" text-xl font-bold mb-2">Add Your Not Here</h1>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input focus-visible:outline-0"
          />
          <button className="btn btn-primary">Primary</button>
        </div>
      </div>
    </>
  );
};

export default Input;
