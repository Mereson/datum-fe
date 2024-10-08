import React from "react"
import { Activites, CustomCalendar, SearchBox } from "../../../components"
import { SchoolTeacher, HeroLady } from "../../../assets"
import styles from "./styles.module.css"
import MyChart from "./PieChart"
import AttendanceChart from "./AttendanceChart"

export const TeachersDashboard = () => {
  return (
    <section className={styles.teacher_Container}>
      <section className={styles.board_section}>
        <SearchBox />
        <div className={styles.teacher_hero}>
          <h1>Hello Chinyere</h1>
          <p>
            Ready to inspire and lead? Let’s make this term amazing together!
            Check your schedule, update your plans, and dive in.
          </p>
          <img src={HeroLady} alt="" className={styles.herolady} />
        </div>

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
          <div className={styles.timeline_card}>
            <h1>Total Number Of Student In SSS1</h1>
            <div className={styles.piechart}>
              <MyChart />
            </div>
          </div>
        </div>

        <div className={styles.attendance_chart}>
          <AttendanceChart />
        </div>
      </section>

      <section className={styles.activity_section}>
        <div className={styles.teacher_avata}>
          <img src={SchoolTeacher} alt="" />
          <h1>Okafor Chinyere</h1>
          <p>Edit Profile</p>
        </div>
        <div className={styles.activity}>
          <Activites />
        </div>

        <div className={styles.calender}>
          <CustomCalendar />
        </div>
      </section>
    </section>
  )
}
