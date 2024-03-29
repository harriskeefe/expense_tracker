import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
/*
    We want to change the title of the item
    the onClick prop in the button component is clicked
    this prop points to the function clickHandler
    when clickHandler is pointed to, the setTitle function is used to change the value through useState
    useState is a hook that has a value and a setValue in the destructured array
    useState also has an initial value which is defined before the page renders
    the initial value is the current state and the function that is pointed to "sets" a new value when the button is clicked
*/