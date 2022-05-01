import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpenseHandler(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;

/**
 * we need to communicate up components to eventually get to the App component
 * in order to get the user input from the ExpenseForm
 * To do this, we pass a prop to the <ExpenseForm /> that retrieves the object from the form
 * in ExpenseForm.jsx, we pass a prop object as parameter and use prop.onSaveExpenseData
 * prop.onSaveExpenseData is still set to the saveExpenseDataHandler in this file 
 * we this pass the expenseData object as a parameter in the prop in ExpenseForm.jsx (props.onSaveExpenseData(expenseData))
 * when we come back to NewExpense.jsx, saveExpenseDataHandler takes the expenseData object because if we log expenseData to the console, its submitted under NewExpense.jsx
 * 
 */