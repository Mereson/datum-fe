import { CustomSelect, StudentIcon } from "../../../components"
import { useState } from "react"
import { ResultAnalysis } from "../resultAnalysis"
import { useQuery } from "@tanstack/react-query"
import { getResultsById } from "../../../api"
import { useStudentsData } from "../../../states/students"

export const ViewResults = () => {
  const { studentsData } = useStudentsData()
  const [openTab, setOpenTab] = useState(1)
  const studentInfo = studentsData?.parent?.students[0]
  const [term, setTerm] = useState("FirstTerm")

  console.log(studentInfo.id, studentInfo.class, term)
  const query = useQuery({
    queryKey: ["StudentResult", studentInfo.id, studentInfo.class, term],
    queryFn: () =>
      getResultsById(studentInfo.id, studentInfo.class, studentInfo.term),
  })

  // console.log(studentsData)
  let newData

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    console.log(query.data)
    newData = formattedData(query.data.result)
  }

  const handleTabSwitch = (e) => {
    let { id } = e.target
    setOpenTab(id)

    if (id == "1") {
      setTerm("FirstTerm")
    }
    if (id == "2") {
      setTerm("SecondTerm")
    }
    if (id == "3") {
      setTerm("ThirdTerm")
    }
  }

  return (
    <section className="bg-[#f4f4f4] w-full h-full overflow-auto pt-8 px-[1.5rem] sm:px-[6.25rem] pb-[9.563rem]">
      <StudentIcon />
      <div className="flex flex-wrap gap-3 text-sm sm:text-base items-center justify-between pt-14 pb-8">
        <div className="flex gap-4 font-bold items-center">
          <p
            onClick={handleTabSwitch}
            id="1"
            className={`cursor-pointer ${
              openTab == 1
                ? "text-[#0D1B59] underline underline-offset-4"
                : "text-[#132985]"
            } `}
          >
            First Term
          </p>
          <p
            onClick={handleTabSwitch}
            id="2"
            className={`cursor-pointer ${
              openTab == 2
                ? "text-[#0D1B59] underline underline-offset-4 "
                : "text-[#132985]"
            } `}
          >
            Second Term
          </p>
          <p
            onClick={handleTabSwitch}
            id="3"
            className={`cursor-pointer ${
              openTab == 3
                ? "text-[#0D1B59] underline underline-offset-4 "
                : "text-[#132985]"
            } `}
          >
            Third
          </p>
        </div>

        <div className="flex gap-3 items-center">
          <p className="font-bold text-[#444444]">Filter by:</p>
          <CustomSelect
            index={1}
            query={"Class"}
            width={"6.8rem"}
            options={[]}
          />
        </div>
      </div>
      {openTab == 1 ? (
        <div className="overflow-x-auto">
          {query.isSuccess && (
            <ResultAnalysis data={newData} columns={columns} />
          )}
          {query.isError && (
            <p className=" text-[#6270AE] pb-4">Nothing to display</p>
          )}
          {query.isLoading && (
            <p className=" text-[#6270AE] pb-4">Loading...</p>
          )}
        </div>
      ) : openTab == 2 ? (
        <div className="overflow-x-auto">
          {query.isSuccess && (
            <ResultAnalysis data={newData} columns={columns} />
          )}
          {query.isError && (
            <p className=" text-[#6270AE] pb-4">Nothing to display</p>
          )}
          {query.isLoading && (
            <p className=" text-[#6270AE] pb-4">Loading...</p>
          )}
        </div>
      ) : (
        <div className="overflow-x-auto">
          {query.isSuccess && (
            <ResultAnalysis data={newData} columns={columns} />
          )}
          {query.isError && (
            <p className=" text-[#6270AE] pb-4">Nothing to display</p>
          )}
          {query.isLoading && (
            <p className=" text-[#6270AE] pb-4">Loading...</p>
          )}
        </div>
      )}
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
