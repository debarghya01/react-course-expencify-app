
const getExpenseTotal = (expensesArrayObject) => {
    if (expensesArrayObject.length === 0 ) {
        return 0;
    }else {
        const expensesArray = expensesArrayObject.map(
            (expense) => expense.amount 
            )
        const reducer = (accumulator, currentValue) => {
            return(
                accumulator + currentValue
            )
        } 
        const totalExpense = expensesArray.reduce(reducer);
        return totalExpense; 
    }

}

export default getExpenseTotal;