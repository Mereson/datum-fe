import PropTypes from "prop-types"
import { TableModel } from "../../../../../components"
import { resultsData } from "../../../../../testData"

export const AdminStudentsResultList = () => {
  return (
    <TableModel
      myData={resultsData}
      columns={columns}
      searchValue={"Surname"}
      people={"Students"}
      //   rowOnClick={onClick}
    />
  )
}

AdminStudentsResultList.propTypes = {
  getValue: PropTypes.func,
}

const columns = [
  {
    accessorKey: "S/N",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "FirstName",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "OtherName",
    header: "Other Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Gender",
    header: "Gender",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Class",
    header: "Class",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Subjects",
    header: "Subjects",
    cell: (props) => <p>{props.getValue()}</p>,
  },
]
