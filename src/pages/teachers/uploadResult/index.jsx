import { Link } from "react-router-dom"
import { NotificationSvg, TeacherHeroImg } from "../../../assets"
import { FormButton, TableModel } from "../../../components"
import { data } from "../../../testData"
// import { SearchBox } from "../../../components"

export const UploadResult = () => {
  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] pb-[9.563rem]">
      <div>
        <div className="flex gap-5 items-center justify-end">
          <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
            <img
              src={NotificationSvg}
              className="size-[20px]"
              alt="notification icon"
            />
          </div>
          <div className="flex gap-2 items-center">
            <figure className="size-[50px] rounded-full">
              <img className="rounded-full" src={TeacherHeroImg} alt="" />
            </figure>
            <div className="text-[15px]">
              <p className="font-bold"> Okafor Chinyere </p>
              <p>Teacher</p>
            </div>
          </div>
        </div>
      </div>

      {/* This is the div for the upload result */}
      <Link to="/teacher/uploadresult1">
        <FormButton
          type="submit"
          content="Upload result"
          className={
            "bg-[#132985] w-[20%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
          }
        />
      </Link>

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
      {/* <section className="flex">
        <SearchBox className="w-[40%]" />

        <Dropdown className="w-[10%]" />

        <Dropdown className="w-[10%]" />

        <Dropdown className="w-[10%]" />
      </section> */}
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
    header: "Remarks",
    // cell: (props) => <p>{props.getValue()}</p>,
    // cell: Remark,
  },
]
