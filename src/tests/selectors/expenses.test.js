import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';

test('Testing selector getVisibleExpenses for text filter', () => {
    const filters={
        text:'e',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[1]])
}
)

test('testing selector getVisibleExpenses wiith startdate', () => {

    const filters={
        text: '',
        sortBy:'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses(expenses, filters)
    expect(result).toEqual([expenses[2], expenses[0]])
})

test('testing selector getVisibleExpenses with endDate', () => {
  const filters={
      text: '',
      sortBy: 'date',
      startDate: undefined,
      endDate: moment(0).add(2, 'days')
  }  
  const result=getVisibleExpenses(expenses,filters)
  expect(result).toEqual([expenses[0], expenses[1]])
})

test('testing selector getVisisbleExpenses with sort by date', () => {
    const filters={
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result=getVisibleExpenses(expenses,filters)
    expect(result).toEqual([expenses[2], expenses[0], expenses[1]])
})

test('testing selector getVisisbleExpenses with sort by amount', () => {
    const filters={
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result=getVisibleExpenses(expenses,filters)
    expect(result).toEqual([expenses[1], expenses[2], expenses[0]])
})