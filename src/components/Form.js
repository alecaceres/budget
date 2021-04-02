import React, {useState} from "react";
import Error from "./Error";
import shortid from "shortid";

const Form = ({setExpense, setCreateExpense}) => {

    // setting states
    const [name, setName] = useState('');
    const [qty, setQty] = useState(0);
    const [error, setError] = useState(false);

    // when adding a new expense
    const addExpense = e => {
        e.preventDefault();

        // validation
        if (qty < 1 || isNaN(qty) || name.trim() === "") {
            setError(true);
            return;
        }

        setError(false);


        // building expense
        const expense = {
            name,
            qty,
            id: shortid.generate()
        }

        console.log("gasto", expense)

        // passing expense to main component
        setExpense(expense);
        setCreateExpense(true);

        // resetting form
        setName('');
        setQty(0);
    }

    return (
        <form
            onSubmit={addExpense} >
            <h2>Add your expenses here</h2>

            { error ? <Error message="Both fields are required or wrong budget"/> : null }
            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="e.g. food"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
            </div>
            <div className="campo">
                <label>Expense quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="e.g. 300"
                    value={qty}
                    onChange={e=>parseInt(setQty(e.target.value))}
                />
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Add Expense"
            />
        </form>
    )
}

export default Form