import React, { Fragment } from "react";
import { checkBudget } from "../helpers"

const BudgetControl = ({budget, remaining}) => (
    <Fragment>
        <div className="alert alert-primary">
            Budget: $ {budget}
        </div>
        <div className={checkBudget(budget, remaining)}>
            Remaining: $ {remaining}
        </div>
    </Fragment>
)

export default BudgetControl;