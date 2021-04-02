import { useState } from "react";
import Question from "./components/Question";

function App() {
  // state definition
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="contenido-principal contenido">
          <Question
            setBudget={setBudget}
            setRemaining={setRemaining}
            />
        </div>
      </header>
    </div>
  );
}

export default App;
