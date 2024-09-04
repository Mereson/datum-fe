import { AddBtn, TableModel, TeacherAvater } from "../../../components"
import { data } from "../../../testData"
import { Button } from "../../../components/button"

export const UploadResult = () => {
  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] pb-[9.563rem]">
      <div className="flex gap-5 items-center justify-end">
        <TeacherAvater />
      </div>

      {/* This is the div for the upload result */}

      <Button
        link={"/teacher/uploadresult/uploadresult1"}
        content={<AddBtn text={"Upload Result"} />}
        className={
          "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
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
