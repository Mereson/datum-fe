import { AddBtn, MockTableLayout, TableModel, TeacherAvater } from "../../../components"
import { Button } from "../../../components/button"
import { getAllResults } from "../../../api"
import { useQuery } from "@tanstack/react-query"

export const UploadResult = () => {

  const query = useQuery({ queryKey: ["Result"], queryFn: getAllResults })

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    console.log(query.data)
  }

  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] pb-[9.563rem]">
      <div className="flex gap-5 items-center justify-end">
        <TeacherAvater />
      </div>

      <Button
        link={"/teacher/uploadresult/uploadresult1"}
        content={<AddBtn text={"Upload Result"} />}
        className={
          "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
        }
      />

      <section className="w-full">
      {query.isSuccess && (
            <TableModel
              myData={query.data}
              columns={columns}
              people={"Teachers"}
              searchValue={"First Name"}
            >
              <h2 className="text-2xl font-bold text-[#1e1e1e]">
                Teachers List
              </h2>
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
    header: "Reg Date",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]
