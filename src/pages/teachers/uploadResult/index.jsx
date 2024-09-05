import { AddBtn, MockTableLayout, TableModel } from "../../../components"
import { Button } from "../../../components/button"
import { getAllResults } from "../../../api"
import { useQuery } from "@tanstack/react-query"
import { SchoolTeacher } from "../../../assets"

export const UploadResult = () => {
  const query = useQuery({ queryKey: ["Result"], queryFn: getAllResults })

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    console.log(query.data)
  }

  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 pl-4 sm:px-[6.25rem] pb-7 sm:pb-[9.563rem]">
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
      <section className="w-full overflow-x-auto">
        {query.isSuccess && (
          <TableModel
            myData={query.data}
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
const columns = [
  {
    accessorKey: "studentId",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "surName",
    header: "Surname",
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
    accessorKey: "subject",
    header: "Subject",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "assessment",
    header: "Assessment",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "exam",
    header: "Exam",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
]
