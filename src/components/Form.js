import React, {useState} from "react";

const Form = () => {

    // setting states
    const [name, setName] = useState('');
    const [qty, setQty] = useState(0);

    // when adding a new expense
    const addExpense = e => {
        e.preventDefault();

        // validation

        // building expense

        // passing expense to main component

        // resetting form
    }

    return (
        <form
            onSubmit={addExpense} >
            <h2>Add your expenses here</h2>

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