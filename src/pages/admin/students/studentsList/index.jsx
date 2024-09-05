import PropTypes from "prop-types"
import { MockTableLayout, TableModel } from "../../../../components"
import { Button } from "../../../../components/button"
import { FaPlus } from "react-icons/fa6"
import { AdminProfileImg, NotificationSvg } from "../../../../assets"
import { getAllStudents, getStudentById } from "../../../../api"
import { useStudentsList } from "../../../../states/students"
import { useNavigate } from "react-router-dom"
import { useQuery } from "@tanstack/react-query"

export const StudentsList = () => {
  const { setStudentsIdData } = useStudentsList()

  const navigate = useNavigate()

  const query = useQuery({ queryKey: ["Students"], queryFn: getAllStudents })

  let newData

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    newData = formattedData(query.data)
  }

  const rowOnClick = async (row) => {
    const studentId = row["Reg No"]
    const data = await getStudentById(studentId)
    setStudentsIdData(data)
    navigate("/admin/studentsList/studentsDetail")
  }

  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <div className="flex flex-col">
          <div className="flex gap-5 items-center justify-end">
            <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
              <img
                src={NotificationSvg}
                className="size-[20px]"
                alt="notification icon"
              />
            </div>
            <div className="flex gap-2 items-center">
              <figure className="size-[50px] rounded-full">
                <img src={AdminProfileImg} alt="" />
              </figure>
              <div className="text-[15px]">
                <p className="font-bold">Nkechi Nduka</p>
                <p>Admin</p>
              </div>
            </div>
          </div>

          <Button
            link={"/admin/studentsList/addParents"}
            content={<AddBtn text={"Add Students"} />}
            className={
              "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>

        <section>
          {query.isSuccess && (
            <TableModel
              myData={newData}
              columns={columns}
              people={"Students"}
              searchValue={"Surname"}
              rowOnClick={rowOnClick}
            >
              <h2 className="text-2xl font-bold text-[#1e1e1e]">
                Students List
              </h2>
            </TableModel>
          )}
        </section>
        {query.isLoading && (
          <MockTableLayout title={"Students List"} isLoading />
        )}
        {query.isError && <MockTableLayout title={"Students List"} />}
      </main>
    </section>
  )
}

const AddBtn = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <FaPlus />
      <p className="font-bold">{text}</p>
    </div>
  )
}

AddBtn.propTypes = {
  text: PropTypes.string,
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
    accessorKey: "Reg Date",
    header: "Reg Date",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]
