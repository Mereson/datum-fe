import { AdminProfileImg } from "../../../assets"
import {
  ActivitySection,
  AsAttendanceView,
  CustomSelect,
  MembersGrid,
  SearchBox,
  StudentsDemography,
} from "../../../components"

import styles from "./style.module.css"

export const AdminDashboard = () => {
  return (
    <section className="flex w-[100%] h-[100%] bg-[#f4f4f4] justify-between">
      <section
        className={`${styles.scrollbar} pr-[75px] pl-[86px] overflow-auto grid grid-cols-2 gap-12 w-[71%]`}
      >
        <SearchBox />
        <MembersGrid />
        <div className="col-span-2 grid grid-cols-2 gap-3">
          <StudentsDemography />
          <AsAttendanceView />
        </div>
        <section className="col-span-2 bg-[#fafafa] px-6 pt-4 rounded-2xl">
          <div className="flex justify-between pb-6">
            <h3 className="font-bold text-xl">Students List</h3>{" "}
            <CustomSelect
              query={"SSS 1"}
              options={classes}
              index={2}
              width="w-[5rem]"
              padding="px-[10px] py-[8px]"
            />
          </div>
          <div>
            <table className="w-50%  border-collapse mb-5 ">
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Reg No</th>
                  <th>Full Name</th>
                  <th>Gender</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody className="shadow-md">
                {studentsList.map((list, index) => (
                  <tr
                    key={list.id}
                    style={{
                      backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#fff",
                    }}
                  >
                    <td>{index + 1}</td>
                    <td>{list.regNo}</td>
                    <td>{list.fullName}</td>
                    <td>{list.gender}</td>
                    <td>{list.class}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </section>
      <ActivitySection name={"Mrs Nkechi Nduka"} img={AdminProfileImg} />
    </section>
  )
}

const classes = ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"]

const studentsList = [
  {
    id: 1,
    regNo: "001",
    fullName: "Okafor Chinaza",
    gender: "Female",
    class: "SS1 A",
  },
  {
    id: 2,
    regNo: "002",
    fullName: "Edeh Nnaemeka",
    gender: "Male",
    class: "SS1 A",
  },
  {
    id: 3,
    regNo: "003",
    fullName: "Eneh Maria",
    gender: "Female",
    class: "SS1 A",
  },
  {
    id: 4,
    regNo: "004",
    fullName: "Odoh Christian",
    gender: "Male",
    class: "SS1 A",
  },
]
