import React from 'react';
import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    );
}

export default Card;
//the value of the children prop is the content between the opening and closing tag of the <Card/> in ExpenseItem
//the Card component is being used as a container in the ExpenseItem component
/*
    custom components like card.jsx only support what you tell them to support 
    so if run the program it will only render the css passed to the card component 
    so we need to add other classNames from the component the card is wrapping by using a constant variable
*/
