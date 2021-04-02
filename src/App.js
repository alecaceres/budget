import React, { useState } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  // state definition
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
 
  // adding a new expense
  const addNewExpense = expense => {
    setExpenses([
      ...expenses,
      expense
    ])
  }
  return (
    <div className="container">
      <header>
        <h1>Weekly Expenses</h1>
        <div className="contenido-principal contenido">
          { showQuestion ?
            <Question
              setBudget={setBudget}
              setRemaining={setRemaining}
              setShowQuestion={setShowQuestion}
              />
            :
            <div className="row">
              <div className="one-half column">
                <Form
                addNewExpense={addNewExpense}/>
              </div>
              <div className="one-half column">
                <List
                  expenses={expenses}/>
              </div>
            </div>
          }
          
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
