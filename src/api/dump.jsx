import { paymentsData } from "../testData"
import StatusCell from "./api"
import { TableModel } from "../components/tables"

const columns = [
  {
    accessorKey: "S/N",
    header: "S/N",
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
    // cell: EditableCell,
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: StatusCell,
  },
]

export const Dump = () => {
  // return <TableModel myData={paymentsData} columns={columns} people={"Students"} />
  return <div>empty</div>
}
