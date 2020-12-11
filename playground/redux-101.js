import {createStore} from 'redux';


const incrementCount = ({incrementBy = 1} = {}) => {
    return({
        type: 'INCREMENT',
        incrementBy
    })
}

const decrementCount = ({decrementBy = 1} = {}) => {
    return({
        type: 'DECREMENT',
        decrementBy
    })
}

const resetCount = () => {
    return({
        type: 'RESET',
    })
}

const setCount = ({count = 0} = {}) => {
    return({
        type: 'SET',
        count: count
    })
}

//reducer

const countReducer = (state = {count: 0}, action) => {
    const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1
    switch (action.type) {
        case 'INCREMENT': 
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT' : 
            return {
                count: state.count - decrementBy
            }
        
        case 'RESET' :
            return {
                count: 0
            }
        case 'SET' :
            return {
                count: action.count
            }
        default:
            return state

    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
})


// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// })
// store.dispatch({
//     type: 'INCREMENT'
// })

//unsubscribe();

// store.dispatch({
//     type: 'RESET'
// })
// store.dispatch({
//     type: 'DECREMENT'
// })

// store.dispatch({
//     type: 'DECREMENT',
//     decrementBy: 5
// })

// store.dispatch({
//     type: 'SET',
//     count: 101
// })


store.dispatch(incrementCount({incrementBy: 10}))
store.dispatch(incrementCount())


store.dispatch(resetCount())
store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(decrementCount())

store.dispatch(setCount({count: 201}))