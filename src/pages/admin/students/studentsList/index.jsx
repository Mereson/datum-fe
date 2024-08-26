import PropTypes from "prop-types"
import {
  CustomSelect,
  MembersList,
  SearchBox,
  TableModel,
} from "../../../../components"
import { Button } from "../../../../components/button"
import { data } from "../../../../testData"
import { FaPlus } from "react-icons/fa6"
import { AdminProfileImg, NotificationSvg } from "../../../../assets"
import { useEffect } from "react"
import { getAllStudents } from "../../../../api"
import { useStudentsList } from "../../../../states/students"

export const StudentsList = () => {
  const { studentsList, setStudentsList, setStudentsData } = useStudentsList()

  useEffect(() => {
    const getData = async () => {
      const studentData = await getAllStudents()

      const newData = formattedData(studentData)

      setStudentsData(studentData)

      setStudentsList(newData)
      console.log(newData)
    }
    getData()
  }, [])


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
        {studentsList.length >= 3 ? (
          <section className="grid gap-4">
            <TableModel
              myData={studentsList}
              columns={columns}
              people={"Students"}
              // searchValue={"Class"}
              searchFields={["Surname", "First Name", "Class"]}
            >
              <h2 className="text-2xl mt-4 font-bold text-[#1e1e1e]">
                Students List
              </h2>
            </TableModel>
            {/* <MembersList data={studentsList} people={"Students"} /> */}
          </section>
        ) : (
          <section className="grid gap-4">
            <div className="flex justify-between">
              <SearchBox
                width="w-[20rem] xl:w-[25rem]"
                placeholder="Search student by name or reg no"
              />
              <div className="flex gap-3 items-center">
                <p className="font-bold text-[#444444]">Filter by:</p>
                <CustomSelect
                  index={1}
                  query={"Class"}
                  width={"6.8rem"}
                  options={[]}
                />
                <CustomSelect
                  index={2}
                  query={"Gender"}
                  width={"6.8rem"}
                  options={[]}
                />
                <CustomSelect
                  index={3}
                  query={"Sort by"}
                  width={"6.8rem"}
                  options={[]}
                />
              </div>
            </div>

            <h2 className="text-2xl mt-4 font-bold text-[#1e1e1e]">
              Students List
            </h2>
            <MembersList data={data} people={"Students d/b"} />
          </section>
        )}
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
    "Surname": student.surName,
    "First Name": student.firstName,
    "Other Name": student.otherName,
    "Gender": student.gender,
    "Class": `${student.class} ${" "} ${student.classTier}`,
    "Reg Date": student.enrollmentDate.slice(0, 10),
  }))
}

const columns = [
  {
    accessorKey: "Reg No",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "First Name",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Other Name",
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
    accessorKey: "Reg Date",
    header: "Reg Date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
]
