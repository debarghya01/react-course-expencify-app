import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = (props) => {
    
    return(
        <div>
            <Link to={`/edit/${props.id}`} ><p>  {`Expense ${props.description}`}</p> </Link> <p>{`${props.amount} ${props.createdAt}`} </p> 

        </div>
    )
}

export default ExpenseListItem;
