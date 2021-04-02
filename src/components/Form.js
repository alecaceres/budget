import React, {useState} from "react";

const Form = () => {
    return (
        <form>
            <h2>Add your expenses here</h2>

            <div className="campo">
                <label>Expense name</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="e.g. food"
                />
            </div>
            <div className="campo">
                <label>Expense quantity</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="e.g. 300"
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