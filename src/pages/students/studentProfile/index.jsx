import { useEffect } from "react"
import { ProfileImage, SchoolGirl } from "../../../assets"
import design from "./style.module.css"
import PropTypes from "prop-types"
import { useStudentsList } from "../../../states/students"
import { StudentIcon } from "../../../components"

export const StudentProfile = () => {
  const { studentsIdData } = useStudentsList()

  useEffect(() => {
    console.log(studentsIdData)
  }, [])

  return (
    <section className=" bg-[#f4f4f4] w-full h-full overflow-auto pb-24 sm:pt-8 sm:px-[6.25rem] ">
      <main className="mt-[1.725rem] bg-[#f4f4f4] sm:bg-[#fafafa]">
        {/* This is the div containing the profile picture and the picture frame */}
        <div>
          <div className="sm:hidden flex justify-end pr-4 sm:pt-6 sm:pb-14">
            <StudentIcon />
          </div>
          <figure className="pb-[1.313rem] hidden sm:block flex relative ">
            <img src={ProfileImage} alt="Profile-Picture-Frame" />
            <img
              className={`${design.image} hidden sm:block rounded-full absolute w-40 h-40 top-[42px] left-[44px]`}
              src={SchoolGirl}
              alt="Schoolchild-Image"
            />
          </figure>
          <div className="flex justify-end">
            <div className="flex justify-between w-[80%] pr-8">
              <div>
                <h4 className=" hidden sm:block text-[22px] font-normal ">
                  Ene Maria
                </h4>
                <p className="hidden sm:block"> Student </p>
              </div>
            </div>
          </div>
        </div>

        <main className="grid sm:grid-cols-2  text-[#1E1E1E] pt-[25px] pl-8 pb-8">
          <div className=" grid gap-7">
            <h3 className="text-[22px] font-bold"> Student Info </h3>
            <StudentInfo title={"Surname"} content={"Ene"} />
            <StudentInfo title={"First Name"} content={"Maria"} />
            <StudentInfo title={"Other Name"} content={"Chidimma"} />
            <StudentInfo title={"Gender"} content={"Female"} />
            <StudentInfo title={"Date Of Birth"} content={"26-09-2010"} />
            <StudentInfo title={"Blood Group"} content={"O+"} />
            <StudentInfo title={"Term"} content={"First Term"} />
            <StudentInfo title={"Class"} content={"SSS1A"} />
            <StudentInfo
              title={"Previous School"}
              content={"Spring Of Life International School"}
            />
          </div>

          <div className="grid gap-7 ">
            <h3 className="text-[22px] font-bold"> Parent Info </h3>
            <StudentInfo title={"Surname"} content={"Ene"} />
            <StudentInfo title={"First Name"} content={"Ikechukwu"} />
            <StudentInfo title={"Other Name"} content={"Charles"} />
            <StudentInfo title={"Email"} content={"eneikechukwu@gmail.com"} />
            <StudentInfo
              title={"Address"}
              content={"No 12 Achi Street Enugu"}
            />
            <StudentInfo title={"Phone Number"} content={"09130590413"} />
            <StudentInfo title={"Relationship"} content={"Father"} />
            <StudentInfo title={"State Of Origin"} content={"Enugu"} />
            <StudentInfo title={"L. G. Of Origin"} content={"Enugu North"} />
          </div>
        </main>
      </main>
    </section>
  )
}

const StudentInfo = ({ title, content }) => {
  return (
    <div className="flex gap-4 text-[17px] text-[#1e1e1e]">
      <p className="w-[142px]">{title}:</p>
      <p className="w-[241px] font-bold">{content}</p>
    </div>
  )
}

StudentInfo.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}
