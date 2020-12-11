import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(<EditExpensePage 
        expense={expenses[0]}
        editExpense={editExpense} 
        removeExpense={removeExpense} 
        history={history} />)
})

test('testing Edit Expense Page rendering', () => {
    expect(wrapper).toMatchSnapshot()
 })

test('testing Edit Expense Page rendering with editExpense spies', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('testing Edit Expense Page rendering with removeExpense spies', () => {
    wrapper.find('button').simulate('click')
    expect(removeExpense).toHaveBeenLastCalledWith({id: expenses[0].id})
    expect(history.push).toHaveBeenLastCalledWith('/')
})