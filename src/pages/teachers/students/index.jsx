import { TableModel, TeacherAvater } from "../../../components"
import styles from "./styles.module.css"
import { data } from "../../../testData"

export const TeachersStudents = () => {
  const onClick = (value) => {
    console.log(value)
    alert(`Wecome ${value.firstName}`)
  }

  return (
    <section
      className={`${styles.students_Container} bg-[#f4f4f4] h-full pb-8 overflow-auto px-0`}
    >
      <div className="flex w-full pr-4 sm:px-[3rem] pt-6 justify-end">
        <TeacherAvater />
      </div>

      <section className={`${styles.board_section} w-full`}>
        <TableModel
          myData={data}
          columns={columns}
          people={"Students"}
          searchValue={"firstName"}
          rowOnClick={onClick}
        >
          <h2 className="text-xl font-bold text-[#1e1e1e]">Students List</h2>
        </TableModel>
      </section>
    </section>
  )
}

const Remark = () => {
  const click = () => {
    alert("How far")
  }
  return (
    <p
      onClick={click}
      className="py-[6px] ml-[-30px] text-center rounded-lg bg-[#D0D4E7] text-[#132985] text-sm"
    >
      Remark
    </p>
  )
}

const columns = [
  {
    accessorKey: "regNo",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "otherName",
    header: "Other Name",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "class",
    header: "Class",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "regDate",
    header: "Remarks",
    // cell: (props) => <p>{props.getValue()}</p>,
    cell: Remark,
    enableSorting: false,
  },
]
