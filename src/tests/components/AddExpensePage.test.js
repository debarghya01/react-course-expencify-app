import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import Expenses from '../fixtures/expenses';

let startAddExpense, history, wrapper;
beforeEach(() => {
    startAddExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history} />)
}) 
test('Testing add expense page render', () => {
        expect(wrapper).toMatchSnapshot()
})

test('Testing add expense page render with callback test', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(Expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startAddExpense).toHaveBeenLastCalledWith(Expenses[0])
})
