import PropTypes from "prop-types"
import { CustomSelect, MembersList, SearchBox } from "../../../../components"
import { Button } from "../../../../components/button"
import { data } from "../../../../testData"
import { FaPlus } from "react-icons/fa6"
import { AdminProfileImg, NotificationSvg } from "../../../../assets"
import { useEffect } from "react"
import { getAllStudents } from "../../../../api"
import { useStudentsList } from "../../../../states/students"

export const StudentsList = () => {

  const { studentsList, setStudentsList } = useStudentsList()

  useEffect(() => {
    const data = getAllStudents()
    if (data.success == true) {
      setStudentsList(data)
    }
  }, [])


  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <div className="flex flex-col">
          <div className="flex gap-5 items-center justify-end">
            <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
              <img src={NotificationSvg} className="size-[20px]" alt="notification icon" />
            </div>
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

          <Button
            link={"/admin/studentsList/addParents"}
            content={<AddBtn text={"Add Students"} />}
            className={
              "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>
        <div className="flex justify-between">
          <SearchBox width="w-[26rem]" placeholder="Search student by name or reg no" />
          <div className="flex gap-3 items-center">
            <p className="font-bold text-[#444444]">Filter by:</p>
            <CustomSelect index={1} query={"Class"} width={"6.8rem"} options={[]} />
            <CustomSelect index={2} query={"Gender"} width={"6.8rem"} options={[]} />
            <CustomSelect index={3} query={"Sort by"} width={"6.8rem"} options={[]} />
          </div>
        </div>

        <h2 className="text-2xl mt-4 font-bold text-[#1e1e1e]">Students List</h2>
        {studentsList.length < 1 ? (<MembersList data={studentsList} people={"Students"} />) : (

          <MembersList data={data} people={"Students d/b"} />
        )}
      </main>
    </section>
  )
}

const AddBtn = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <FaPlus />
      <p className="font-bold">{text}</p>
    </div>
  )
}

AddBtn.propTypes = {
  text: PropTypes.string,
}