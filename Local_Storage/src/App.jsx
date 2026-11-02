import { useState } from "react";

function App() {
  const [name, setName] = useState(
    () => localStorage.getItem("name") || ""
  );

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSave = () => {
    localStorage.setItem("name", name);
  };

  return (
    <div>
      <input
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <button onClick={handleSave}>
        Save Name
      </button>

      <h2>Hello, {name}</h2>
    </div>
  );
}

export default App;