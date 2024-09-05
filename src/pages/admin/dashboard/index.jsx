import { useNavigate } from "react-router-dom"
import { AdminProfileImg, HeroLady } from "../../../assets"
import {
  ActivitySection,
  AsAttendanceView,
  CustomSelect,
  MembersGrid,
  StudentsDemography,
  TableModel,
  WelcomeBox,
} from "../../../components"
import { paymentsData } from "../../../testData"
import { StatusCell } from "../payments"

import styles from "./style.module.css"

export const AdminDashboard = () => {
  const navigate = useNavigate()

  const onClick = () => {
    navigate("/admin/fees")
  }
  return (
    <section className="sm:flex w-full h-full sm:px-0 px-4 overflow-auto bg-[#f4f4f4] justify-between">
      <div className="sm:hidden flex gap-5 justify-end pb-5 pt-8">
        <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]"></div>
        <div className="flex gap-2 items-center">
          <figure className="size-[50px] rounded-full">
            <img src={AdminProfileImg} alt="" />
          </figure>
          <div className="text-[15px]">
            <p className="font-bold">Nkechi Nduka</p>
            <p>Admin</p>
          </div>
        </div>
      </div>
      <section
        className={`${styles.scrollbar} sm:px-[80px] pt-4 sm:pt-[70px] pb-[30px] overflow-auto grid grid-cols-2 gap-[45px] w-full sm:w-[71%]`}
      >
        <WelcomeBox avatar={HeroLady} bg={"bg-[#132985]"} admin />
        <MembersGrid />
        <div className="col-span-2">
          {/* <AsAttendanceView /> */}
          <StudentsDemography />
        </div>
        <section
          onClick={onClick}
          className="col-span-2 bg-[#fafafa] px-6 pt-4 pb-4 rounded-2xl"
        >
          <div className="flex justify-between items-center pb-6">
            <h3 className="font-bold text-xl">
              List Of Unpaid Fees For Student
            </h3>{" "}
            <CustomSelect
              query={"SSS 1"}
              options={classes}
              index={2}
              width="w-[5rem]"
              padding="px-[6px] py-[6px]"
            />
          </div>
          <div className="overflow-x-auto">
            <TableModel
              myData={paymentsData}
              columns={columns}
              justTable
              pageSize={"4"}
            />
          </div>
        </section>
      </section>
      <ActivitySection
        name={"Mrs Nkechi Nduka"}
        img={AdminProfileImg}
        path={"/students/studentProfile"}
      />
    </section>
  )
}

const classes = ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"]

const columns = [
  {
    accessorKey: "S/N",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "FirstName",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Class",
    header: "Class",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: StatusCell,
    enableSorting: false,
  },
]
