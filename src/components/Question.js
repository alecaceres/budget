import react, { Fragment, useState } from "react";
import Error from "./Error";

const Question = () => {

  // defining states
  const [qty, setQty] = useState(0);
  const [error, setError] = useState(false); 

  // change handler
  const defineBudget = e => {
    setQty(parseInt(e.target.value));
  }

  // on submit
  const addBudget = e => {
      e.preventDefault();

      // validation
      if(qty < 1 || isNaN(qty)){
          setError(true);
          return;
      }

      // on validation success
      setError(false);

  }

    return (
        <Fragment>
            <h2>Add your budget</h2>

            { error ? <Error message="The budget is wrong"/> : null}

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