import {
  ActivitySection,
  AttendanceBarChart,
  WelcomeBox,
} from "../../../components"
import { HeroLady, SchoolTeacher } from "../../../assets"
import styles from "./styles.module.css"
import MyChart from "./PieChart"
// import AttendanceChart from "./AttendanceChart"

export const TeachersDashboard = () => {
  return (
    <section className={`${styles.teacher_Container} w-full`}>
      <section
        className={`${styles.board_section} ${styles.scrollbar} pt-[70px] sm:w-[71%]`}
      >
        <WelcomeBox avatar={HeroLady} bg={"bg-[#132985]"} teacher />

        <div className={styles.timeline_panel}>
          <div className={styles.timeline_card}>
            <h1>Today’s Timetable</h1>
            <div className={styles.time_card}>
              <div className={styles.left}>
                <h1 className="font-bold">1st class</h1>
                <p>SSS1A</p>
              </div>
              <div className={styles.right}>
                <h1>8:00am - 8:40am</h1>
              </div>
            </div>
            <div className={styles.time_card}>
              <div className={styles.left}>
                <h1 className="font-bold">2nd class</h1>
                <p>SSS1B</p>
              </div>
              <div className={styles.right}>
                <h1>8:40am - 9:20am</h1>
              </div>
            </div>
            <div className={styles.time_card}>
              <div className={styles.left}>
                <h1 className="font-bold">3rd class</h1>
                <p>SSS1D</p>
              </div>
              <div className={styles.right}>
                <h1>9:20am - 10:00am</h1>
              </div>
            </div>
          </div>
          <div className={`${styles.timeline_card} grid place-items-center`}>
            <h1>Total Number Of Student In SSS1</h1>
            <div className={styles.piechart}>
              <MyChart />
            </div>
          </div>
        </div>

        <div className="group col-span-2 mt-2 py-4 bg-[#fafafa] h-[292px] shadow-sm rounded-2xl cursor-pointer">
          <div className="px-8 flex justify-between">
            <h3 className=" text-lg font-bold">Subject Attendance</h3>
            <div className="text-[10px] text-[#191919] font-normal">
              <p className="flex items-center text-center gap-2">
                <p className="size-2 rounded-full bg-[#132985]"></p>
                <p>Present</p>
              </p>
              <p className="flex items-center text-center gap-2">
                <p className="size-2 rounded-full bg-[#8884d8]"></p>
                <p>Absent</p>
              </p>
            </div>
          </div>
          <AttendanceBarChart data={attendance} />
        </div>
        {/*         
        <div className={styles.attendance_chart}>
          <AttendanceChart />
        </div> */}
      </section>

      <ActivitySection img={SchoolTeacher} name={"Mrs Chinyere"} />
    </section>
  )
}

const attendance = [
  {
    subject: "Eng",
    present: 98,
    absent: 2,
  },
  {
    subject: "Maths",
    present: 60,
    absent: 40,
  },
  {
    subject: "Bio",
    present: 70,
    absent: 30,
  },
  {
    subject: "Phy",
    present: 25,
    absent: 75,
  },
  {
    subject: "Chem",
    present: 70,
    absent: 30,
  },
  {
    subject: "Geo",
    present: 60,
    absent: 40,
  },
]
