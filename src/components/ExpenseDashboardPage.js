import React from 'react';
import ReactDOM from 'react-dom';
import ExpensList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpenseSummary from './../components/ExpenseSummary';

const ExpenseDashboardPage = () => {
    return(
        <div>
            <ExpenseSummary />
            <ExpenseListFilters />
            <ExpensList />
        </div>
    )
}

export default ExpenseDashboardPage;