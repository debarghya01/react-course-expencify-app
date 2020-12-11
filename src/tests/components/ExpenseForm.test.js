import React from 'react';
import ExpenseForm from '../../components/ExpenseForm';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';
import moment from 'moment';
    
test('testing expense from without data', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
})

test('testing expense from with data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}
        onSubmit={(expense) => {
            console.log('expense updated')
            props.dispatch(editExpense(props.expense.id, expense))
            props.history.push('/')
        }}/>)
    expect(wrapper).toMatchSnapshot()
})

test('testing expense from with bad data', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    } )
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('testing description change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: {
            value: 'Text expense'
        }
    })
    expect(wrapper.state('description')).toBe('Text expense')
})

test('testing note change', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change', {
        target: {
            value: 'new note'
        }
    })
    expect(wrapper.state('note')).toBe('new note')
})

test('testing amount change withh valid data', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: '23.50'
        }
    })
    expect(wrapper.state('amount')).toBe('23.50')
})

test('testing amount change withh invalid data', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target: {
            value: '12.333'
        }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('Testing on submit prop function with valid argument', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow (<ExpenseForm expense={expenses[0]} 
        onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        createdAt: expenses[0].createdAt.valueOf(),
        note: expenses[0].note
    })
})

test('testing createdAt', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toBe(now)
})

test('test calendar focus to true', () => {
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('withStyles(SingleDatePicker)').prop('onFocusChange')({
        focused: true
    })
    expect(wrapper.state('calendarFocused')).toBe(true)
})