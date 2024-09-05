import { TeacherHeroImg } from "../../../assets"
import styles from "./style.module.css"

export const Scheme = () => {
  return (
    <section className="bg-[#f4f4f4] w-full h-full overflow-auto pb-8">
      <div className={styles["scheme-container"]}>
        <section className="flex gap-5 justify-end pt-8 sm:pr-20 w-full">
          <div className="flex gap-2 items-center">
            <figure className="size-[50px] rounded-full">
              <img className="rounded-full" src={TeacherHeroImg} alt="" />
            </figure>
            <div className="text-[15px]">
              <p className="font-bold"> Okafor Chinyere </p>
              <p>Student</p>
            </div>
          </div>
        </section>

        <h2 className="font-normal pt-14 text-xl sm:text-2xl py-[44px]">
          English Scheme of Work
        </h2>
        <table className={styles["scheme-table"]}>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.className}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
const data = [
  { id: "001", className: "JSS1" },
  { id: "002", className: "JSS2" },
  { id: "003", className: "JSS3" },
  { id: "004", className: "SSS1" },
  { id: "005", className: "SSS2" },
  { id: "006", className: "SSS3" },
]
