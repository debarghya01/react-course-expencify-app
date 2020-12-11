'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SplitWise = function (_React$Component) {
    _inherits(SplitWise, _React$Component);

    function SplitWise(props) {
        _classCallCheck(this, SplitWise);

        var _this = _possibleConstructorReturn(this, (SplitWise.__proto__ || Object.getPrototypeOf(SplitWise)).call(this, props));

        _this.removeAll = _this.removeAll.bind(_this);
        _this.addExpense = _this.addExpense.bind(_this);
        _this.removeOne = _this.removeOne.bind(_this);
        _this.state = {
            title: 'Splitwise App',
            expenses: props.expenses
        };
        return _this;
    }

    _createClass(SplitWise, [{
        key: 'removeAll',
        value: function removeAll() {
            console.log('remove all pressed');
            this.setState(function () {
                return {
                    expenses: []
                };
            });
        }
    }, {
        key: 'addExpense',
        value: function addExpense(expense) {

            this.setState(function (prevState) {
                return {
                    expenses: prevState.expenses.concat(expense)
                };
            });
        }
    }, {
        key: 'removeOne',
        value: function removeOne(delExpense) {
            this.setState(function (prevState) {
                return {
                    expenses: prevState.expenses.filter(function (expense) {
                        return delExpense != expense;
                    })
                };
            });
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            try {
                var jsonChar = localStorage.getItem('expense');
                var jsonExpenses = JSON.parse(jsonChar);
                this.setState(function () {
                    return {
                        expenses: jsonExpenses
                    };
                });
            } catch (e) {}
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {
            if (prevState.expenses.length != this.state.expenses.length) {
                var json = JSON.stringify(this.state.expenses);
                localStorage.setItem('expense', json);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            console.log('from SplitWise');

            return React.createElement(
                'div',
                null,
                React.createElement(Header, { title: this.state.title }),
                React.createElement(ShowList, { expenses: this.state.expenses, removeAllFunction: this.removeAll,
                    removeOne: this.removeOne }),
                React.createElement(AddExpense, { addExpense: this.addExpense })
            );
        }
    }]);

    return SplitWise;
}(React.Component);

SplitWise.defaultProps = {
    expenses: ['Expense1', 'Expense2']
};

var Header = function Header(props) {

    console.log('from header');
    return React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            props.title
        )
    );
};

var AddExpense = function (_React$Component2) {
    _inherits(AddExpense, _React$Component2);

    function AddExpense(props) {
        _classCallCheck(this, AddExpense);

        var _this2 = _possibleConstructorReturn(this, (AddExpense.__proto__ || Object.getPrototypeOf(AddExpense)).call(this, props));

        _this2.addExpenseToList = _this2.addExpenseToList.bind(_this2);
        return _this2;
    }

    _createClass(AddExpense, [{
        key: 'addExpenseToList',
        value: function addExpenseToList(e) {
            e.preventDefault();
            var newExpense = e.target.elements.expense.value;
            e.target.elements.expense.value = '';

            this.props.addExpense(newExpense);
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(
                    'form',
                    { onSubmit: this.addExpenseToList },
                    React.createElement('input', { type: 'text', name: 'expense' }),
                    React.createElement(
                        'button',
                        null,
                        'Add new expense'
                    )
                )
            );
        }
    }]);

    return AddExpense;
}(React.Component);

var ShowList = function (_React$Component3) {
    _inherits(ShowList, _React$Component3);

    function ShowList() {
        _classCallCheck(this, ShowList);

        return _possibleConstructorReturn(this, (ShowList.__proto__ || Object.getPrototypeOf(ShowList)).apply(this, arguments));
    }

    _createClass(ShowList, [{
        key: 'render',
        value: function render() {
            var _this4 = this;

            console.log('from Showlist');

            return React.createElement(
                'div',
                null,
                React.createElement(
                    'ol',
                    null,
                    this.props.expenses.map(function (expense, index) {
                        return React.createElement(
                            'li',
                            { key: index },
                            React.createElement(ShowOne, { expense: expense, removeOne: _this4.props.removeOne })
                        );
                    })
                ),
                React.createElement(
                    'button',
                    { onClick: this.props.removeAllFunction },
                    'Remove all expenses !!!'
                )
            );
        }
    }]);

    return ShowList;
}(React.Component);

var ShowOne = function ShowOne(props) {
    return React.createElement(
        'div',
        null,
        props.expense,
        React.createElement(
            'button',
            { onClick: function onClick(e) {
                    props.removeOne(props.expense);
                } },
            'Remove '
        )
    );
};
var jsx = React.createElement(
    'div',
    null,
    React.createElement(SplitWise, null)
);

var appRoot = document.getElementById('app');
ReactDOM.render(jsx, appRoot);
