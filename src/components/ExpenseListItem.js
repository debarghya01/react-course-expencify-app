import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = (props) => {
    const cretedAtFormatted = moment(props.createdAt).format("Do MMMM YYYY")
    const amountFormatted = numeral(props.amount/100).format('$0,0.00');
    return(
        <div>
            <Link to={`/edit/${props.id}`} ><p>  {`Expense ${props.description}`}</p> </Link> 
                <p>{`${amountFormatted} 
                ${cretedAtFormatted}`} </p> 

        </div>
    )
}

export default ExpenseListItem;
