import { MockTableLayout, TableModel, TeacherAvater } from "../../../components"
import styles from "./styles.module.css"
import { useStudentsList } from "../../../states/students"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"
import { getAllStudents, getStudentById } from "../../../api"

export const TeachersStudents = () => {
  const { setStudentsIdData } = useStudentsList()

  const query = useQuery({ queryKey: ["Students"], queryFn: getAllStudents })

  let newData

  if (query.isError) {
    console.log(query.error.message)
    // return <h2 className=" text-[#6270AE] pb-4">{query.error}</h2>
  }

  if (query.isSuccess) {
    newData = formattedData(query.data)
  }

  const rowOnClick = async (row) => {
    const studentId = row["Reg No"]
    const data = await getStudentById(studentId)
    setStudentsIdData(data)
    console.log(data)
  }

  return (
    <section
      className={`${styles.students_Container} bg-[#f4f4f4] sm:px-24 h-full pb-8 overflow-auto px-0`}
    >
      <div className="flex w-full pr-4 sm:px-[3rem] pt-6 justify-end">
        <TeacherAvater />
      </div>

      <section className={`${styles.board_section} w-full`}>
        {query.isSuccess && (
          <TableModel
            myData={newData}
            columns={columns}
            people={"Students"}
            searchValue={"Surname"}
            rowOnClick={rowOnClick}
          >
            <h2 className="text-2xl font-bold text-[#1e1e1e]">Students List</h2>
          </TableModel>
        )}
      </section>
      {query.isLoading && <MockTableLayout title={"Students List"} isLoading />}
      {query.isError && <MockTableLayout title={"Students List"} />}
    </section>
  )
}

const Remark = () => {
  const navigate = useNavigate()

  const click = () => {
    navigate("/teacher/remark")
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

const formattedData = (data) => {
  return data.map((student) => ({
    "Reg No": student.id,
    Surname: student.surName,
    "First Name": student.firstName,
    "Other Name": student.otherName,
    Gender: student.gender,
    Class: `${student.class} ${" "} ${student.classTier}`,
    "Reg Date": student.enrollmentDate.slice(0, 10),
  }))
}

const columns = [
  {
    accessorKey: "Reg No",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "First Name",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Other Name",
    header: "Other Name",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Gender",
    header: "Gender",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Class",
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
