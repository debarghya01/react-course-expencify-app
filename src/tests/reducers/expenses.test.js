import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test ('testing default state of expenses', () => {
    const state = expensesReducer(undefined, '@@INIT')
    expect(state).toEqual([])
})

test('testing remove expense with valid id',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('testing remove expense with valid id',() => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '0'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('testing add expense', () => {
    const expense =   {
        id: '3',
        description: 'Car wash',
        note: 'This is for car wash', 
        amount: 2500, 
        createdAt: 450000
   }
   const action = {
       type: 'ADD_EXPENSE',
       expense
   }
   const state = expensesReducer(expenses, action)
   expect(state).toEqual([...expenses, expense])
})

test('edit expense with valid data', () => {
    const updates = {
        amount: 112800
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '2',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], {
        id: '2',
        description: 'Rent',
        note: '',
        amount: 112800,
        createdAt: moment(0).subtract(4,'days')
    }, expenses[2]])
})

test('edit expense with invalid data', () => {
    const updates = {
        amount: 112800
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})
