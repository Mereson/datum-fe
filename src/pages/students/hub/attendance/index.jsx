import PropTypes from "prop-types"
import { absent, present } from "../../../../assets"
import { BackIcon, StudentIcon, TableModel } from "../../../../components"
import { studentsAttendance } from "../../../../testData"

export const StudentsAttendancePage = () => {
  return (
    <section className="w-full sm:px-[5rem] bg-[#f4f4f4] h-full pt-8 pb-36 sm:pb-14 overflow-auto px-6">
      <div className="flex justify-between pb-16 sm:pb-14">
        <BackIcon link={"/students/hub"} />
        <StudentIcon />
      </div>
      <h2 className="pb-[51px]  text-xl sm:text-2xl">My Attendance</h2>
      <div className="overflow-x-auto">
        <TableModel
          myData={studentsAttendance}
          columns={columns}
          people={"Students Attendance"}
          justTable={true}
        />
      </div>
    </section>
  )
}

const AttendanceStatus = ({ getValue }) => {
  const status = getValue()

  const renderAttendance = (status) => {
    if (status == "Present") {
      return <img src={present} alt="image" />
    } else if (status == "Absent") {
      return <img src={absent} alt="image" />
    } else if (status === "Null" || status === undefined) {
      return <span>—</span> // For 'Null' or undefined
    } else {
      return <span>__</span> // For any unexpected value
    }
  }

  const newStatus = renderAttendance(status)

  return <div>{newStatus}</div>
}

AttendanceStatus.propTypes = {
  getValue: PropTypes.func,
}

const columns = [
  {
    accessorKey: "weeks",
    header: "Weeks",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "mon",
    header: "Mon",
    cell: AttendanceStatus,
    enableSorting: false,
  },
  {
    accessorKey: "tue",
    header: "Tue",
    cell: AttendanceStatus,
    enableSorting: false,
  },
  {
    accessorKey: "wed",
    header: "Wed",
    cell: AttendanceStatus,
    enableSorting: false,
  },
  {
    accessorKey: "thur",
    header: "Thur",
    cell: AttendanceStatus,
    enableSorting: false,
  },
  {
    accessorKey: "fri",
    header: "Fri",
    cell: AttendanceStatus,
    enableSorting: false,
  },
  {
    accessorKey: "sat",
    header: "Sat",
    cell: AttendanceStatus,
    enableSorting: false,
  },
  {
    accessorKey: "sun",
    header: "Sun",
    cell: AttendanceStatus,
    enableSorting: false,
  },
]
