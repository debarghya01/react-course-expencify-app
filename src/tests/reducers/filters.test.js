import { TestScheduler } from 'jest';
import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('testing filterReducer with default', () => {
    const state=filtersReducer(undefined, '@@INIT')
    expect(state).toEqual({
        text : '',
        sortBy : 'date',
        startDate : moment().startOf('month'),
        endDate : moment().endOf('month')
    })
})

test('testing sort by amount', () => {
    const state=filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toEqual('amount')
})

test('testing sort by date', () => {
    const currentState = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate : undefined
    }
    const state = filtersReducer(undefined, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toEqual('date')
})

test('testing setting text filter', () => {
    const action={
        type: 'SET_TEXT_FILTER',
        textFilter: 'rent'
    }
    const state=filtersReducer(undefined, action)
    expect(state.text).toEqual('rent')
})

test('testing startDate filter', () => {
    const action={
        type: 'SET_START_DATE',
        startDate: moment(0)
    }
    const state=filtersReducer(undefined, action)
    expect(state.startDate).toEqual(moment(0))
})

test('testing endDate filter', () => {
    const action={
        type: 'SET_END_DATE',
        endDate: moment(0)
    }
    const state=filtersReducer(undefined, action)
    expect(state.endDate).toEqual(moment(0))
})