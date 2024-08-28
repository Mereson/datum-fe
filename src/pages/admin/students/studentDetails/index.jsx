import PropTypes from "prop-types"
import { Edit, ProfileImage, SchoolGirl } from "../../../../assets"
import { useEffect } from "react"
import { useStudentsList } from "../../../../states/students"

export const StudentDetailsAdmin = () => {
  const { studentsIdData } = useStudentsList()

  useEffect(() => {
    console.log(studentsIdData)
  }, [])

  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] ">
      {/* This is the div containing the main  */}

      <main className="mt-[1.725rem] bg-[#fafafa]">
        {/* This is the div containing the profile picture and the picture frame */}
        <div>
          <figure className="pb-[1.313rem]  flex relative ">
            <img src={ProfileImage} alt="Profile-Picture-Frame" />
            <img
              className={`border-8 border-[#f4f4f4] rounded-full absolute w-40 h-40 top-[42px] left-[44px]`}
                src={SchoolGirl}
            //   src={studentsIdData.picture}
              alt="Schoolchild-Image"
            />
          </figure>
          <div className="flex justify-end">
            <div className="flex justify-between w-[80%] pr-8">
              <div>
                <h4 className="text-[22px] font-normal ">Ene Maria</h4>
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
            <h3 className="text-[22px] font-bold"> Student Info </h3>
            <StudentInfo title={"Surname"} content={studentsIdData.surName} />
            <StudentInfo
              title={"First Name"}
              content={studentsIdData.firstName}
            />
            <StudentInfo
              title={"Other Name"}
              content={studentsIdData.otherName}
            />
            <StudentInfo title={"Gender"} content={studentsIdData.gender} />
            <StudentInfo
              title={"Date Of Birth"}
              content={studentsIdData.dateOfBirth.slice(0, 10)}
            />
            <StudentInfo
              title={"Blood Group"}
              content={studentsIdData.bloodGroup}
            />
            <StudentInfo title={"Term"} content={studentsIdData.surName} />
            <StudentInfo
              title={"Class"}
              content={`${studentsIdData.class} ${studentsIdData.classTier}`}
            />
            <StudentInfo
              title={"Previous School"}
              content={studentsIdData.previousSchool}
            />
          </div>

          <div className="grid gap-7 ">
            <h3 className="text-[22px] font-bold"> Parent Info </h3>
            <StudentInfo title={"Surname"} content={studentsIdData.parent.surName} />
            <StudentInfo title={"First Name"} content={studentsIdData.parent.firstName} />
            <StudentInfo title={"Other Name"} content={studentsIdData.parent.otherName} />
            <StudentInfo title={"Email"} content={studentsIdData.parent.email} />
            <StudentInfo
              title={"Address"}
              content={"No 12 Achi Street Enugu"}
            />
            <StudentInfo title={"Phone Number"} content={studentsIdData.parent.phoneNumber} />
            <StudentInfo title={"Relationship"} content={studentsIdData.parent.relationship} />
            <StudentInfo title={"State Of Origin"} content={studentsIdData.stateOfOrigin} />
            <StudentInfo title={"L. G. Of Origin"} content={studentsIdData.localGovernment} />
          </div>
        </main>
      </main>
    </section>
  )
}

StudentDetailsAdmin.propTypes = {}

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
