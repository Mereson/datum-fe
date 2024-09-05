import { AddBtn, MockTableLayout, TableModel } from "../../../components"
import { Button } from "../../../components/button"
import { getAllResults } from "../../../api"
import { useQuery } from "@tanstack/react-query"
import { SchoolTeacher } from "../../../assets"

export const UploadResult = () => {
  const query = useQuery({ queryKey: ["Results"], queryFn: getAllResults })

  if (query.isError) {
    console.log(query.error.message)
  }

  let newData

  if (query.isSuccess) {
    console.log(query.data)
    newData = formattedData(query.data)
  }

  return (
    <section className=" bg-[#f4f4f4] w-full h-full overflow-auto pt-8 pl-4 sm:px-[6.25rem] pb-7 sm:pb-[9.563rem]">
      <div className="flex gap-5 items-center justify-end">
        <div
          onClick={onclick}
          className="flex gap-2 cursor-pointer items-center"
        >
          <figure className="size-[50px] rounded-full">
            <img
              className="rounded-full"
              src={SchoolTeacher}
              alt="student image"
            />
          </figure>
          <div className="text-[15px pr-4]">
            <p className="font-bold">Okafor Chinyere</p>
            <p>Teacher</p>
          </div>
        </div>
      </div>

      <Button
        link={"/teacher/uploadresult/uploadresult1"}
        content={<AddBtn text={"Upload Result"} />}
        className={
          "bg-[#132985] sm:w-[20%] px-4 py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
        }
      />

      <section>
        {query.isSuccess && (
          <TableModel
            myData={newData}
            columns={columns}
            people={"Teachers"}
            searchValue={"First Name"}
          >
            <h2 className="text-2xl font-bold text-[#1e1e1e]">Teachers List</h2>
          </TableModel>
        )}

        {query.isLoading && (
          <MockTableLayout title={"Teachers List"} isLoading />
        )}
        {query.isError && <MockTableLayout title={"Teachers List"} />}
      </section>
    </section>
  )
}

const formattedData = (data) => {
  return data.map((student) => ({
    id: student.studentId,
    "Student Name": `${student.surName} ${student.firstName}`,
    Subject: student.subject,
    Assesment: student.assignment,
    Exam: student.exam,
    Total: student.total,
    Grade: student.grade,
  }))
}

const columns = [
  {
    accessorKey: "id",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Student Name",
    header: "Student Name",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Subject",
    header: "Subject",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Assesment",
    header: "Assesment",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Exam",
    header: "Exam",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Total",
    header: "Total",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Grade",
    header: "Grade",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]
