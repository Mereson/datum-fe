import { Arrow, NotificationSvg, TeacherHeroImg } from "../../../assets"
import { Dropdown } from "../../../components"
import { Button } from "../../../components/button"

export const UploadResult1 = () => {
  return (
    <section className="w-full pb-8 overflow-auto bg-[#f4f4f4]">
      <section className="flex gap-5 items-center justify-end pt-8 pr-20">
        <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
          <img
            src={NotificationSvg}
            className="size-[20px]"
            alt="notification icon"
          />
        </div>
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

      <div className="flex gap-3 pl-[108px] pb-12 pt-[18px]">
        <img className=" text-[#132985]" src={Arrow} alt="Go Back" />
        <p className="text-[#132985] font-bold text-base"> Back </p>
      </div>

      <section className=" pl-[102px] pt-7 w-[75%] h-[576px]">
        <h2 className="text-left text-[32px] font-semibold text-[#696969] pb-8">
          Upload Result
        </h2>

        <div className="grid grid-cols-2 gap-6">
          {options.map(({ id, name, query, items }) => (
            <Dropdown
              key={id}
              id={id}
              name={name}
              query={query}
              items={items}
            />
          ))}
        </div>

        <div className="w-[100%] h-36 my-10 bg-[#ECECEC] rounded-lg items-center justify-center flex flex-col relative cursor-pointer">
          <input
            className="absolute w-[100%] h-[100%] cursor-pointer"
            type="file"
            accept=".csv"
          />
          <p>
            Drag your CSV file here or
            <span className="cursor-pointer "> Upload from here</span>
          </p>
        </div>
        <div className="pl-52">
          <Button
            link={"/students/checkResults/resultAnalysis"}
            content="Submit"
            className={
              "bg-[#132985] w-[30%] py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>
      </section>
    </section>
  )
}

const options = [
  {
    id: 1,
    name: "Class",
    query: "Select Class",
    items: ["JSS 1", "JSS 2", "JSS 3", "SSS 1", "SSS 2", "SSS 3"],
  },
  {
    id: 2,
    name: "Subject",
    query: "Select subject",
    items: [
      "English",
      "Mathematics",
      "Biology",
      "Physics",
      "Chemistry",
      "Geography",
      "Agriculture",
      "Igbo Language",
      "CRS",
      "Civic Education",
      "Computer Science",
      "Health Science",
    ],
  },
  {
    id: 3,
    name: "Session",
    query: "Select session",
    items: ["2021/2022", "2022/2023", "2023/2024"],
  },
  {
    id: 4,
    name: "Term",
    query: "Select Term",
    items: ["First term", "Second term", "Third term"],
  },
]
