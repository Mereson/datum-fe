import { AddBtn, BackIcon, TableModel } from "../../../../components"
import { Button } from "../../../../components/button"
import { data } from "../../../../testData"
import { AdminProfileImg } from "../../../../assets"

export const TeachersList = () => {
  return (
    <section className="w-full h-full sm:px-[5rem] bg-[#f4f4f4] pl-4 pt-8 pb-40 sm:pb-14 overflow-auto">
      <main className="grid gap-4 ">
        <div className="flex flex-col">
          <div className="flex gap-5 items-center justify-between pb-10">
            <BackIcon link={"/admin/dashboard"} />
            <div className="flex gap-2 items-center">
              <figure className="size-[50px] rounded-full">
                <img src={AdminProfileImg} alt="" />
              </figure>
              <div className="text-[15px] pr-2">
                <p className="font-bold">Nkechi Nduka</p>
                <p>Admin</p>
              </div>
            </div>
          </div>

          <Button
            link={"/admin/teachers/addTeacher"}
            content={<AddBtn text={"Add Teacher"} />}
            className={
              "bg-[#132985] sm:w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>

        <section>
          <TableModel
            myData={data}
            columns={columns}
            people={"Teachers"}
            searchValue={"First Name"}
          >
            <h2 className="text-2xl font-bold text-[#1e1e1e]">Teachers List</h2>
          </TableModel>
        </section>
      </main>
    </section>
  )
}

const columns = [
  {
    accessorKey: "regNo",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "otherName",
    header: "Other Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "class",
    header: "Class",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "regDate",
    header: "Reg Date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
]
