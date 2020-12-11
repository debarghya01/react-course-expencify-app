import React from 'react';
import ReactDOM from 'react-dom';
import ExpensList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';


const ExpenseDashboardPage = () => {
    return(
        <div>
            <ExpenseListFilters />
            <ExpensList />
        </div>
    )
}

export default ExpenseDashboardPage;