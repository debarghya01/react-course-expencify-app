import moment from 'moment';

const filters = {
    text : '',
    sortBy : 'date',
    startDate : undefined,
    endDate : undefined
}

const altFilters = {
    text : '',
    sortBy : 'date',
    startDate : moment().startOf('month'),
    endDate : moment().endOf('month')
}

export {filters, altFilters};
