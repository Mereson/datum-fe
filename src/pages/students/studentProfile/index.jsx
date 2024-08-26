import {
  Edit,
  NotificationSvg,
  ProfileImage,
  SchoolChild,
  SchoolGirl,
} from "../../../assets"
import { SearchBox } from "../../../components"
import design from "./style.module.css"
import PropTypes from "prop-types"

export const StudentProfile = () => {
  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] ">
      <div className="flex justify-between">
        <div className="w-[70%]">
          <SearchBox />
        </div>

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
              <img className="rounded-full" src={SchoolChild} alt="" />
            </figure>
            <div className="text-[15px]">
              <p className="font-bold">Ene Maria</p>
              <p>Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* This is the div containing the main  */}

      <main className="mt-[4.625rem] bg-[#fafafa]">
        {/* This is the div containing the profile picture and the picture frame */}
        <div>
          <figure className="pb-[1.313rem]  flex relative ">
            <img src={ProfileImage} alt="Profile-Picture-Frame" />
            <img
              className={`${design.image} rounded-full absolute w-40 h-40 top-[42px] left-[44px]`}
              src={SchoolGirl}
              alt="Schoolchild-Image"
            />
          </figure>
          <div className="flex justify-end">
            <div className="flex justify-between w-[80%] pr-8">
              <div>
                <h4 className="text-[24px] font-normal ">Ene Maria</h4>
                <p> Student </p>
              </div>

              <figure>
                <img src={Edit} alt="EditButton" />
              </figure>
            </div>
          </div>
        </div>

        <main className="grid grid-cols-2  text-[#1E1E1E] pt-[25px] pl-8 pb-8">
          <div className=" grid gap-7">
            <h3 className="text-2xl font-bold"> Student Info </h3>
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
            <h3 className="text-2xl font-bold"> Parent Info </h3>
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
    <div className="flex gap-4 text-[18px] text-[#1e1e1e]">
      <p className="w-[142px]">{title}:</p>
      <p className="w-[241px] font-bold">{content}</p>
    </div>
  )
}

StudentInfo.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}
