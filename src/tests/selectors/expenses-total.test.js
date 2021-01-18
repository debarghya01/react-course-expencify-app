import getExpenseTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('testing selectExpenseTotal empty test', () => {
    const total = getExpenseTotal([]);
    expect(total).toBe(0)
});

test('testing selectExpenseTotal', () => {
    const total = getExpenseTotal(expenses);
    expect(total).toBe(167900);
});
