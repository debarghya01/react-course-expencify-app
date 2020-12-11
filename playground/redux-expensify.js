import {createStore, combineReducers} from 'redux';
import { v4 as uuidv4 } from 'uuid';

const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type) {
        case 'ADD_EXPENSE':
//            return state.concat(action.expense)
            return (
                [
                    ...state,
                    action.expense
                ]
            )
        case 'REMOVE_EXPENSE':
            return (
                state.filter((expense) => {
                    return expense.id != action.id
                })
            )
        case 'EDIT_EXPENSE':
            return (
                state.map((expense) => {
                    if (expense.id === action.id) {
                        return (
                            {...expense, ...action.updates}
                        )
                    }
                    else {
                        return expense
                    }
                }

                )
            )
        default:
            return state
    }
}

const filtersReducerDefaultSate = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}
const filtersReducer = (state = filtersReducerDefaultSate, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER' :
            return(
                {
                    ...state,
                    text: action.textFilter
                }
            )
        case 'SORT_BY_AMOUNT':
            return(
                {
                    ...state,
                    sortBy: 'amount'
                }
            )
            case 'SORT_BY_DATE':
                return(
                    {
                        ...state,
                        sortBy: 'date'
                    }
                )
            case 'SET_START_DATE':
                return(
                    {
                        ...state,
                        startDate: action.startDate
                    }
                )
                case 'SET_END_DATE':
                    return(
                        {
                            ...state,
                            endDate: action.endDate
                        }
                    )
        default:
            return state
    }
} 

const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
)

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate
        const lowerCaseDescription = expense.description.toLowerCase()
        const lowerCaseText = text.toLowerCase()
        const textMatch = lowerCaseText.length === 0 || lowerCaseDescription.includes(lowerCaseText)


        return startDateMatch && endDateMatch && textMatch
    }).sort((a,b) => {
        if(sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1
        }else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1
        }

    })
}
store.subscribe(() => {
    const state = store.getState()
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
    console.log(visibleExpenses)
})


const addExpense = (
    {description = '',
     note = '', 
     amount = 0, 
     createdAt = 0
    } = {}) => {
    return(
        {
            type: 'ADD_EXPENSE',
            expense: {
                id: uuidv4(),
                description,
                note,
                amount,
                createdAt
            }
            
        }
    )
}

const removeExpense = ({id} = {}) => {
    return(
        {
            type: 'REMOVE_EXPENSE',
            id
        }
    )
}

const editExpense = (id, updates) => {
    return(
        {
            type: 'EDIT_EXPENSE',
            id,
            updates
        }
    )
}

const setTextFilter = (textFilter = '') => {
    return({
        type: 'SET_TEXT_FILTER',
        textFilter
    })
}

const sortByAmount = () => {
    return(
        {
            type: 'SORT_BY_AMOUNT'
        }
    )
}

const sortByDate = () => {
    return(
        {
            type: 'SORT_BY_DATE'
        }
    )
}

const setStartDate = (startDate) => {
    return (
        {
            type: 'SET_START_DATE',
            startDate
        }
    )
}

const setEndDate = (endDate) => {
    return(
        {
            type: 'SET_END_DATE',
            endDate
        }
    )
}

const expenseOne = store.dispatch(addExpense({description: 'Rent', amount : 132800, createdAt: -10000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount : 250, createdAt:  10000}))
// const removeExpenseOne = store.dispatch(removeExpense({id: expenseOne.expense.id}))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 350}))
//  store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter())
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
// store.dispatch(setStartDate(100));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1));

const demoState= {
    expenses : [
        {
            id: 'urygiebrnrlgbn',
            description: 'nov rent',
            note: 'rent for nov',
            amount: 132800,
            createdAt: 0
        }
    ],
    filter : {
        text: 'rent',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
}

// const user = {
//     name: 'deb',
//     age: 33
// }

// console.log({...user, location: 'Florida'})