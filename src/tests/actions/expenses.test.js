import {
    addExpense ,
    startAddExpense, 
    removeExpense, 
    editExpense} from '../../actions/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from './../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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
        expense: expenseData
        }
    )
})

test('should add expense to database & store', (done) => {
    const store=createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'this one is better',
        createdAt: 100
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
        })  
})

test('should add default expense to database & store', (done) => {
    const store=createMockStore({});
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                description : '',
                note: '',
                amount: 0,
                createdAt: 0
                }
            }
        )

        return database.ref(`expenses/${actions[0].expense.id}`).once('value')
        
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(
                {
                    description : '',
                    note: '',
                    amount: 0,
                    createdAt: 0
                }
            );
            done();
        })  
})



// test('testing addExpense action object with default date',() => {
//     const action = addExpense()
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '', 
//             amount: 0, 
//             createdAt: 0
//         }
       
//     })
// })