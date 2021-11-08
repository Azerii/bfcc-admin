import MOCK_DATA from "./MOCK_DATA.json";


export const REPORT_COLUMNS = [
  {
    Header: "Subject",
    accessor: "english",
  },
  {
    Header: "Score",
    accessor: "score",
  },
  {
    Header: "Total marks",
    accessor: "",
  },

  {
    Header: "Grade",
    accessor: "",
    Cell: () => { return "A" }
  },
];

