import { useState } from "react"
import { AdminIcon, BackIcon, TableModel } from "../../../../../components"
import { resultsData } from "../../../../../testData"
import { useNavigate } from "react-router-dom"
import { AdminStudentsResultList } from "../studentResult"
import { getAllResults } from "../../../../../api"
import { useQuery } from "@tanstack/react-query"

export const AdminUploadedResults = () => {
  const [openTab, setOpenTab] = useState(true)
  const navigate = useNavigate()


  const query = useQuery({ queryKey: ["Results"], queryFn: getAllResults })

  let newData

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    console.log(query.data)
    newData = formattedData(query.data)
  }

  const onClick = () => {
    navigate("/admin/academics/subjectResult")
  }

  return (
    <section className="w-full h-full pl-4 sm:px-[5rem] bg-[#f4f4f4] pt-8 pb-40 sm:pb-14 overflow-auto">
      <main className="grid gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between pr-4 pb-10">
            <BackIcon link={"/admin/academics"} />

            <AdminIcon />
          </div>
          <div className=" flex gap-4 pt-3 font-semibold text-lg items-center">
            <p
              className={`cursor-pointer text-[#132985]`}
            >
              Uploaded Results
            </p>
            
          </div>
        </div>

        <section>
          {query.isSuccess && (
            <TableModel
              myData={newData}
              columns={columns}
              people={"Students"}
              searchValue={"Activity"}
              justTable={true}
              // rowOnClick={rowOnClick}
            />
          )}
          {query.isLoading && (
            <p className=" text-[#6270AE] pb-4">Loading...</p>
          )}
          {query.isError && (
            <p className=" text-[#6270AE] pb-4">Nothing to display</p>
          )}
        </section>
      </main>
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
