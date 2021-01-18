import React from 'react';
import {connect} from 'react-redux';
import numeral from 'numeral';
import getVisibleExpenses from './../selectors/expenses';
import getExpenseTotal from './../selectors/expenses-total';

export const ExpenseSummary = (props) => {
    return(
        <div>
            <h2>
                {`Viewing ${props.count} expenses totaling ${props.amount}`} 
            </h2>
        </div>
    )
} 

const mapStateToProps = (state) => {
    const expenses = getVisibleExpenses(state.expenses, state.filters)
    let total = getExpenseTotal(expenses)
    total = total/100;
    const formatedTotal = numeral(total).format('$0,0.00');
    return(
        {
            count: expenses.length,
            amount: formatedTotal
        }
    )
}

const ConnectedExpenseSummary = connect(mapStateToProps)(ExpenseSummary);
export default ConnectedExpenseSummary;