import { useState, useCallback, useEffect, useRef } from "react";
function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false);

  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (specialCharAllowed) str += "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, specialCharAllowed]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, specialCharAllowed]);

  const copyPassword = () => {
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-800 p-6 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-white text-center mb-6">
          Password Generator
        </h1>

        <div className="flex mb-6">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-4 py-3 rounded-l-lg bg-gray-700 text-white outline-none"
            ref={passwordRef}
          />

          <button
            onClick={copyPassword}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-r-lg cursor-pointer"
          >
            Copy
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-white">
          <div className="flex items-center gap-3">
            <label className="font-medium">Length: {length}</label>

            <input
              type="range"
              min="6"
              max="100"
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="cursor-pointer"
            />
          </div>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={numberAllowed}
              onChange={(e) => setNumberAllowed(e.target.checked)}
              className="w-4 h-4"
            />

            <span>Number</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={specialCharAllowed}
              onChange={(e) => setSpecialCharAllowed(e.target.checked)}
              className="w-4 h-4"
            />

            <span>Special Character</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
