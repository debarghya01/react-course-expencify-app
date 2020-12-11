import {addExpense , removeExpense, editExpense} from '../../actions/expenses';

test('testing removeExpense action generator', () => {
    expect(removeExpense({id: 'abcd1234'})).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'abcd1234'
    })
})

test ('testing editExpense action generator', () => {
    expect(editExpense('abcd123', {note: 'new note'})).
    toEqual({
        type: 'EDIT_EXPENSE',
        id: 'abcd123',
        updates: {note: 'new note'}
    })
})

test ('testing addExpense action object with provided value', () => {
    const expenseData = {
        description: 'New expense',
        note: 'testing expense',
        amount: 132800,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {...expenseData,
         id: expect.any(String)
        }
    })
})

test('testing addExpense action object with default date',() => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '', 
            amount: 0, 
            createdAt: 0
        }
       
    })
})