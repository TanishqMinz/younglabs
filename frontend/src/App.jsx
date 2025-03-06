import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const getGreeting = async () => {
    if (!name.trim()) {
      setMessage("Name is required.");
      return;
    }
    try {
      const response = await fetch(`https://younglabs-backend-alpha.vercel.app/api/greet?name=${name}`);
      const data = await response.json();
      setMessage(data.message || data.error);
    } catch (error) {
      setMessage("Error fetching greeting.", error);
    }
  };

  return (   
    <div className="flex justify-center items-center min-h-screen ">
      <div className="flex flex-col items-center gap-4 p-10 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold">Greeting App</h1>
        <input
          type="text"
          placeholder="Enter your name"
          className="border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={getGreeting}>
          Get Greeting
        </button>
        {message && <p className="text-lg">{message}</p>}
      </div>
    </div>
  );
}

export default App;
