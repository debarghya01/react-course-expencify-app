import moment from 'moment';

export default [{
    id: '1',
    description: 'Gum',
    note: '',
    amount: 2300,
    createdAt: moment(0).valueOf()
},
{
    id: '2',
    description: 'Rent',
    note: '',
    amount: 132800,
    createdAt: moment(0).subtract(4,'days')
},
{
    id: '3',
    description: 'Credit card',
    note: '',
    amount: 32800,
    createdAt: moment(0).add(4, 'days')
}
]