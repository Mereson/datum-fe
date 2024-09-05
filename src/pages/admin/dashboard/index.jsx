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
    <section className="flex w-[100%] h-[100%] bg-[#f4f4f4] justify-between">
      <section
        className={`${styles.scrollbar} px-[80px] pt-[70px] pb-[30px] overflow-auto grid grid-cols-2 gap-[45px] w-[71%]`}
      >
        <WelcomeBox avatar={HeroLady} bg={"bg-[#132985]"} admin />
        <MembersGrid />
        <div className="col-span-2 grid grid-cols-2 gap-8">
          <AsAttendanceView />
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
          <TableModel
            myData={paymentsData}
            columns={columns}
            justTable
            pageSize={"4"}
          />
        </section>
      </section>
      <ActivitySection name={"Mrs Nkechi Nduka"} img={AdminProfileImg} />
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
