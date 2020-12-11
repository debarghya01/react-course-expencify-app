import React from 'react';
import {AddExpensePage} from '../../components/AddExpensePage';
import {shallow} from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import Expenses from '../fixtures/expenses';

let addExpense, history, wrapper;
beforeEach(() => {
    addExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />)
}) 
test('Testing add expense page render', () => {
        expect(wrapper).toMatchSnapshot()
})

test('Testing add expense page render with callback test', () => {
    wrapper.find(ExpenseForm).prop('onSubmit')(Expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(Expenses[0])
})
