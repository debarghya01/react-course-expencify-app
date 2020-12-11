import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import './styles/styles.scss';
import '../src/routers/AppRouter';
import AppRouter from '../src/routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filetrs';
import getVisibleExpenses from './selectors/expenses';
import {Provider} from 'react-redux';
import 'react-dates/lib/css/_datepicker.css';


const store = configureStore();
// store.subscribe(() => {
//     console.log(store.getState())    
// })


store.dispatch(addExpense(
        {
            description: 'Water Bill', 
            amount: 4500
        }
    )
)

store.dispatch(addExpense(
    {
        description: 'Rent', 
        amount: 132800
    }
)
)

store.dispatch(addExpense(
        {
            description: 'Gas Bill', 
            createdAt: 1000
        }
    )
)

// store.dispatch(setTextFilter('water'));

// setTimeout(() => (
//     store.dispatch(setTextFilter('bill'))
// ),3000)

const state = store.getState()
// console.log(getVisibleExpenses(state.expenses, state.filters));

const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
    
)
const appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);