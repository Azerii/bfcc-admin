
import {
  format
} from 'date-fns'
import ColumnFilter from './ColumnFilter'
export const COLUMNS = [
  {
    Header: 'Id',
    Footer: 'Id',
    accessor:'id',
    Filter: ColumnFilter,
    disableFilters:true
  },
  {
    Footer: 'First Name',
    Header: 'First Name',
    accessor:'first_name',
    Filter: ColumnFilter,
    disableFilters:true
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor:'last_name',
    Filter: ColumnFilter,
    disableFilters:true
  },
  {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor:'date of birth',
    Cell:({value}) => { return format(new Date(value),'dd/mm/yyyy')},
    Filter: ColumnFilter,
    disableFilters:true
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor:'country',
    Filter: ColumnFilter,
    disableFilters:true
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor:'phone',
    Filter: ColumnFilter,
    disableFilters:true
  },
]


export const GROUPED_COLUMNS = [
    {
    Header: 'Id',
    Footer: 'Id',
    accessor:'id'
  },
  {
    Header:'Name',
    Footer: 'Name',
    columns: [
        {
    Footer: 'First Name',
    Header: 'First Name',
    accessor:'first_name'
  },
  {
    Header: 'Last Name',
    Footer: 'Last Name',
    accessor:'last_name'
  },
    ]
  },
  {
    Header:'Info',
    Footer: 'Info',
    columns: [
        {
    Header: 'Date of Birth',
    Footer: 'Date of Birth',
    accessor:'date of birth'
  },
  {
    Header: 'Country',
    Footer: 'Country',
    accessor:'country'
  },
  {
    Header: 'Phone',
    Footer: 'Phone',
    accessor:'phone'
  },
    ]
  }
]
