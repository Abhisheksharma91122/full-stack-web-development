import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const colors = [
    { name: "Red", value: "red" },
    { name: "Green", value: "green" },
    { name: "Blue", value: "blue" },
  ];

  const changeColor = (color) => {
    setColor(color);
  };
  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold">Current Color: {color}</h1>

      {/* Fixed Bottom Buttons */}
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 flex gap-4 bg-gray-800 p-4 rounded-full">
        {colors.map((item) => (
          <button
            key={item.name}
            onClick={() => changeColor(item.value)}
            className="px-6 py-3 rounded-full text-white font-semibold cursor-pointer"
            style={{ backgroundColor: item.value }}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
