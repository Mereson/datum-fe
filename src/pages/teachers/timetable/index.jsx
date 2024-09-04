import { Timetable } from "../../../assets"
import styles from "./styles.module.css"
import { TeacherAvater } from "../../../components/teachers/teacherAvater"

export const TeachersTimetable = () => {
  return (
    <section
      className={`${styles.students_Container} bg-[#f4f4f4] h-full sm:px-24 overflow-auto w-full`}
    >
      <div
        className={`${styles.timetable_header} sm:px-[4rem] pr-4 py-[1rem] flex items-center box-border`}
      >
        <div className="w-full">
          <TeacherAvater />
        </div>
      </div>
      <div className="pl-4 pt-7 pb-7 mt-4  sm:text-[20px] font-bold">
        My Timetable
      </div>
      <section className={`${styles.board_section} w-full px-4`}>
        <img src={Timetable} alt="" />
      </section>
    </section>
  )
}
