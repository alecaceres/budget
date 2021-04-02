import react, { Fragment, useState } from "react";

const Question = () => {
  // defining states
  const  [qty, setQty] = useState(0);

  // change handler
  const defineBudget = e => {
    setQty(parseInt(e.target.value));
  }

  // on submit
  const addBudget = e => {
      e.preventDefault();

      // validation

      // on validation success
  }

    return (
        <Fragment>
            <h2>Add your budget</h2>

            <form
                onSubmit={addBudget}
            >
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Your badget"
                    onChange={defineBudget}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Set budget"
                />
            </form>
        </Fragment>
    )
}

export default Question