import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  function decreaseHandler() {
    setCount(count - 1);
  }
  function increaseHandler() {
    setCount(count + 1);
  }
  function resetHandler() {
    setCount(0);
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-2xl font-bold mb-4">Increment and Decrement</div>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={decreaseHandler}
        >
          -
        </button>
        <div className="text-2xl font-bold">{count}</div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md"
          onClick={increaseHandler}
        >
          +
        </button>
      </div>
      <div className="mt-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white rounded-md"
          onClick={resetHandler}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
