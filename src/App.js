import React, { useState, useEffect } from "react";
import Question from "./components/Question";
import Form from "./components/Form";
import List from "./components/List";
import BudgetControl from "./components/BudgetControl";

function App() {
  // state definition
  const [budget, setBudget] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [showQuestion, setShowQuestion] = useState(true);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [createExpense, setCreateExpense] = useState(false);

  // useEffect that updates remaining
  useEffect(() => {
    if (createExpense){
      setExpenses([
        ...expenses,
        expense
      ])
    }

    // substracting from the current budget
    const remainingBudget = remaining - expense.qty;
    setRemaining(remainingBudget);

    setCreateExpense(false);
  }, [expense])
 
  // adding a new expense
  const addNewExpense = expense => {
    
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
                setExpense={setExpense}
                setCreateExpense={setCreateExpense}/>
              </div>
              <div className="one-half column">
                <List
                  expenses={expenses}
                />
                <BudgetControl
                budget={budget}
                remaining={remaining}
                />
              </div>
            </div>
          }
          
          
          
        </div>
      </header>
    </div>
  );
}

export default App;
