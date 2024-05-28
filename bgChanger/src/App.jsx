import { useState } from "react";
import "./App.css";

function App() {
  const [Color, setColor] = useState("black");

  return (
    <div
      className="w-full h-screen duration-200 "
      style={{ backgroundColor: Color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button onClick={()=>setColor("#987070")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#987070" }}
          >Redish Peach</button>
          <button onClick={()=>setColor("#43766C")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#43766C" }}
          >Beetle Green</button>
          <button onClick={()=>setColor("#7D6E83")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#7D6E83" }}
          >Purple Grey</button>
          <button onClick={()=>setColor("#E1AFD1")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#E1AFD1" }}
          >Pink Pearl</button>
          <button onClick={()=>setColor("#67729D")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#67729D" }}
          >Slate Blue</button>
          <button onClick={()=>setColor("#AF8F6F")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#AF8F6F" }}
          >Donkey Brown</button>
          <button onClick={()=>setColor("#D1D8C5")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "#D1D8C5" }}
          >White Smoke</button>
        </div>
      </div>
    </div>
  );
}

export default App;
