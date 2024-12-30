import { useState } from "react";
import { DatePicker } from "antd";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <DatePicker />;
      </div>
      Hello man i am new here
    </>
  );
}

export default App;
