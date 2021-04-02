import React from 'react';

const Expense = ({expense}) =>
(
    <li className="gastos">
        <p>
            {expense.name}

            <span className="gasto">$ {expense.qty}</span>
        </p>
    </li>
);

export default Expense;