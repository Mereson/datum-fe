import { Edit, ProfileImage, SchoolGirl } from "../../../assets"
import design from "./style.module.css"
import PropTypes from "prop-types"
import { BackIcon, StudentIcon } from "../../../components"
import { useStudentsData } from "../../../states/students"

export const StudentProfile = () => {
  const { studentsData } = useStudentsData()
  const parent = studentsData.parent
  const student = studentsData.parent.students[0]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toISOString().split("T")[0]
  }

  const studentDOB = formatDate(student.dateOfBirth)

  return (
    <section className=" bg-[#f4f4f4] w-full h-full overflow-auto pt-8 sm:px-[6.25rem] ">
      <div className="flex justify-between">
        <BackIcon link={"/students/dashboard"} />
        <StudentIcon />
      </div>
      {/* This is the div containing the main  */}

      <main className="mt-[50px] bg-[#fafafa]">
        {/* This is the div containing the profile picture and the picture frame */}
        <div>
          <figure className="pb-[1.313rem] flex relative ">
            <img className="" src={ProfileImage} alt="Profile-Picture-Frame" />
            <img
              className={`${design.image} rounded-full absolute w-40 h-40 top-[42px] left-[44px]`}
              src={SchoolGirl}
              alt="Schoolchild-Image"
            />
          </figure>
          <div className="flex justify-end">
            <div className="flex justify-between w-[80%] pr-8">
              <div>
                <h4 className="text-[22px] font-normal ">{`${student.firstName} ${student.surName}`}</h4>
                <p> Student </p>
              </div>

              <figure>
                <img src={Edit} alt="EditButton" />
              </figure>
            </div>
          </div>
        </div>

        <main className="grid grid-cols-1 sm:grid-cols-2  text-[#1E1E1E] pt-[25px] pl-8 pb-8">
          <div className=" grid gap-7">
            <h3 className="text-[22px] font-bold"> Student Info </h3>
            <StudentInfo title={"Surname"} content={student.surName} />
            <StudentInfo title={"First Name"} content={student.firstName} />
            <StudentInfo title={"Other Name"} content={student.otherName} />
            <StudentInfo title={"Gender"} content={student.gender} />
            <StudentInfo title={"Date Of Birth"} content={studentDOB} />
            <StudentInfo title={"Blood Group"} content={student.bloodGroup} />
            <StudentInfo title={"Term"} content={student.term} />
            <StudentInfo
              title={"Class"}
              content={`${student.class} ${student.classTier}`}
            />
            <StudentInfo
              title={"Previous School"}
              content={student.previousSchool}
            />
          </div>

          <div className="grid gap-7 ">
            <h3 className="text-[22px] font-bold"> Parent Info </h3>
            <StudentInfo title={"Surname"} content={parent.surName} />
            <StudentInfo title={"First Name"} content={parent.firstName} />
            <StudentInfo title={"Other Name"} content={parent.otherName} />
            <StudentInfo title={"Email"} content={parent.email} />
            <StudentInfo title={"Address"} content={student.address} />
            <StudentInfo title={"Phone Number"} content={parent.phoneNumber} />
            <StudentInfo title={"Relationship"} content={parent.relationship} />
            <StudentInfo
              title={"State Of Origin"}
              content={student.stateOfOrigin}
            />
            <StudentInfo
              title={"L. G. Of Origin"}
              content={student.localGovernment}
            />
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
