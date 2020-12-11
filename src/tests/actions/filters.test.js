import moment from 'moment';
import {
    setStartDate,
    setEndDate, 
    setTextFilter,
    sortByAmount, 
    sortByDate
        } from '../../actions/filetrs';

test('Test setStartDate action generator', () => {
    const action=setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate:moment(0)
    })
})

test('Test SetEndDate action generator', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Test setTextFilter action generator with value', () => {
    const action = setTextFilter('Rent')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        textFilter: 'Rent'
    })
})

test('Test setTextFilter action generator with default', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        textFilter: ''
    })
})

test('Test sortByAmount action object', () => {
    const action=sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Test sortByDate action object', () => {
    const action=sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
