import { TableModel } from "../../../components"
import { data } from "../../../testData"
import { Button } from "../../../components/button"
import { SchoolTeacher } from "../../../assets"

export const UploadResult = () => {
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
          <div className="text-[15px]">
            <p className="font-bold">Okafor Chinyere</p>
            <p>Teacher</p>
          </div>
        </div>
      </div>

      <Button
        link={"/teacher/uploadresult/uploadresult1"}
        type="submit"
        content="Upload result"
        className={
          "bg-[#132985] sm:w-[20%] px-4 py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
        }
      />
      <section className="w-full">
        <TableModel
          myData={data}
          columns={columns}
          people={"Students"}
          searchValue={"firstName"}
          rowOnClick={onclick}
        >
          {/* <h2 className="text-xl font-bold text-[#1e1e1e]">Students List</h2> */}
        </TableModel>
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
