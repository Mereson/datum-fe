import { NotificationSvg, SchoolChild } from "../../../assets"
import { SearchBox } from "../../../components"

export const StudentProfile = () => {
  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] pb-[9.563rem]">
      <div className="flex justify-between">
        <div className="w-[60%]">
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

      <main className="flex text-[#1E1E1E] justify-evenly">
        <div className=" flex-col gap-y-7">
          <h2 className="text-2xl font-bold"> Student Info </h2>
          <p className="flex">
            Surname: <p className="text-lg font-bold">Ene</p>
          </p>
          <p className="flex">
            First Name: <p className="text-lg font-bold"> Maria </p>
          </p>
          <p className="flex">
            Other Name: <p className="text-lg font-bold"> Chidimma </p>
          </p>
          <p className="flex">
            Gender: <p className="text-lg font-bold"> Female</p>
          </p>
          <p className="flex">
            Date Of Birth: <p className="text-lg font-bold"> 26 - 09 -2010</p>
          </p>
          <p className="flex">
            Blood Group: <p className="text-lg font-bold"> O+ </p>
          </p>
          <p className="flex">
            Term: <p className="text-lg font-bold"> First Term </p>
          </p>
          <p className="flex">
            Class: <p className="text-lg font-bold"> SSS1A </p>
          </p>
          <p className="flex">
            Previous School:
            <p className="text-lg font-bold">
              Spring Of Life International School
            </p>
          </p>
        </div>

        <div className="flex-col gap-y-[34px]">
          <h2 className="text-2xl font-bold"> Parent Info </h2>
          <p className="flex">
            Surname: <p className="text-lg font-bold">Ene</p>
          </p>
          <p className="flex">
            First Name: <p className="text-lg font-bold"> Ikechukwu </p>
          </p>
          <p className="flex">
            Other Name: <p className="text-lg font-bold"> Charles </p>
          </p>
          <p className="flex">
            Email: <p className="text-lg font-bold"> eneikechukwu@gmail.com </p>
          </p>
          <p className="flex">
            Address:
            <p className="text-lg font-bold"> No 12 Achi Street Enugu </p>
          </p>
          <p className="flex">
            Phone Number : <p className="text-lg font-bold"> 09130590413 </p>
          </p>
          <p className="flex">
            Relationship: <p className="text-lg font-bold"> Father </p>
          </p>
          <p className="flex">
            State Of Origin : <p className="text-lg font-bold"> Enugu </p>
          </p>
          <p className="flex">
            L.G Of Origin : <p className="text-lg font-bold"> Enugu North </p>
          </p>
        </div>
      </main>
    </section>
  )
}
