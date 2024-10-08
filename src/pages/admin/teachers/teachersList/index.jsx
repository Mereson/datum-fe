import { useQuery } from "@tanstack/react-query"
import {
  AddBtn,
  AdminIcon,
  MockTableLayout,
  TableModel,
} from "../../../../components"
import { Button } from "../../../../components/button"
import { getAllTeachers } from "../../../../api"
import { useTeachersData } from "../../../../states/teachers"

export const TeachersList = () => {
  const query = useQuery({ queryKey: ["Teachers"], queryFn: getAllTeachers })
  const { setTeachersData } = useTeachersData()

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    console.log(query.data)
  }

  const rowOnClick = (row) => {
    console.log(row)
    setTeachersData(row)
  }

  return (
    <section className="w-full h-full sm:px-[5rem] bg-[#f4f4f4] pl-4 pt-8 pb-40 sm:pb-14 overflow-auto">
      <main className="grid gap-4 ">
        <div className="flex flex-col">
          <AdminIcon />
          <Button
            link={"/admin/teachers/addTeacher"}
            content={<AddBtn text={"Add Teacher"} />}
            className={
              "bg-[#132985] sm:w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>

        <section>
          {query.isSuccess && (
            <TableModel
              myData={query.data}
              columns={columns}
              people={"Teachers"}
              searchValue={"First Name"}
              rowOnClick={rowOnClick}
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
      </main>
    </section>
  )
}

const columns = [
  {
    accessorKey: "id",
    header: "Teachers Id",
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
    accessorKey: "employmentRole",
    header: "Subjects",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]
