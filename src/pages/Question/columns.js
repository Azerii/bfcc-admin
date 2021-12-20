import {
  format
} from 'date-fns';
export const COLUMNS = [
  {
    Header: "Question",
    accessor: "question",
  },
  {
    Header: "Class",
    accessor: "class",
  },
  {
    Header: "Answer",
    accessor: "answer",
  },
  {
    Header: "Points",
    accessor: "point",
  },

  {
    Header: "Date & time",
    accessor: "date",
    Cell:({value}) => { return format(new Date(value),'dd/mm/yyyy')}
  },
];