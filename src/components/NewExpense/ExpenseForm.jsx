import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState(' ');
    const [enteredAmount, setEnteredAmount] = useState(' ');
    const [enteredDate, setEnteredDate] = useState(' ');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" step="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
/**
 * this is the form the user fills out for expenses
 * there are 3 inputs
 * each input has a onChange function which acts as an eventHandler when the user places a value in input field
 * in order for the user input to be stored, we need to useState
 * each eventHandler, each onChange() for the input field has a useState hook that will help store the values inputted by the user
    useState hook is destructured
    in the array, the first variable is the current state, the variable in the array is used to set the value of new state
    they are set equal to the useStates initial value which in this case is an empty string
 * each eventHandler function created comes within react comes with a event object from the DOM
 * this event object stores the value on the input through event.target.value from the browser (inspect in chrome to see)
 * for each eventHandler function, the set state is set to the event.target.value making that value the new state
 * when the state changes, the new state values are logged into an object in the submitHandler()
    the submitHandler() is triggers when the submit button is clicked
    this function takes in the event object that by default comes with every function in react
    event.preventDefault() prevents default behavior of refreshing which allows values to be stored
    the values are stored into an object called expenseData
    to clear the input that the user entered, submitHandler sets the setState functions to an empty string
    then in the input field we set the current state to the current state which is how we store the user input.....this is two way binding
    two way binding allows us to store the object and clear the inputs simultaneously   
  * now this expenseData object will go in the newExpense object
 */