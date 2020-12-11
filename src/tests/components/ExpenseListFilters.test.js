import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate, wrapper;
beforeEach(() => {
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    setTextFilter = jest.fn();
    sortByAmount  = jest.fn();
    sortByDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        />)
})

test('to render ExpenseListFilters with filters', () => {
    expect(wrapper).toMatchSnapshot()
})

test('to render ExpenseListFilters with alt filters', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('testing text change', () => {
    const value= 'Testing filter'
    wrapper.find('input').simulate('change', {target: {value}})
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('testing sort by date',() => {
    const value='date'
    wrapper.find('select').simulate('change',{target:{value}} )
    expect(sortByDate).toHaveBeenCalled()
})

test('testing sort by amount',() => {
    const value='amount'
    wrapper.find('select').simulate('change',{target:{value}} )
    expect(sortByAmount).toHaveBeenCalled()
})

test('testing date change',() => {
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate: altFilters.startDate, endDate: altFilters.endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate)
})

test('testing focus change',() => {
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('endDate')
    expect(wrapper.state('calendarFocused')).toBe('endDate')
})
