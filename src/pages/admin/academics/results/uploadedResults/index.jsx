import { useState } from "react"
import { AdminIcon, BackIcon, TableModel } from "../../../../../components"
import { resultsData } from "../../../../../testData"
import { useNavigate } from "react-router-dom"
import { AdminStudentsResultList } from "../studentResult"

export const AdminUploadedResults = () => {
  const [openTab, setOpenTab] = useState(true)
  const navigate = useNavigate()

  const handleTabSwitch = () => {
    setOpenTab((prevState) => !prevState)
  }

  const onClick = () => {
    navigate("/admin/academics/subjectResult")
  }

  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between pb-10">
            <div className="flex items-end">
              <BackIcon link={"/admin/academics"} />
            </div>
            <AdminIcon />
          </div>
          <div className=" flex gap-4 pt-3 font-semibold text-lg items-center">
            <p
              onClick={handleTabSwitch}
              className={`cursor-pointer ${
                openTab
                  ? "text-[#0D1B59] underline underline-offset-4"
                  : "text-[#132985]"
              } `}
            >
              Uploaded Results
            </p>
            <p
              onClick={handleTabSwitch}
              className={`cursor-pointer ${
                openTab
                  ? "text-[#132985]"
                  : "text-[#0D1B59] underline underline-offset-4 "
              } `}
            >
              Students Result
            </p>
          </div>
        </div>
        <div className="">
          {openTab ? (
            <TableModel
              myData={resultsData}
              columns={columns}
              searchValue={"Surname"}
              rowOnClick={onClick}
            />
          ) : (
            <AdminStudentsResultList />
          )}
        </div>
      </main>
    </section>
  )
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
