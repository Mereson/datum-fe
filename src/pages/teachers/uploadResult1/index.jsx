import { SchoolTeacher } from "../../../assets"
import { BackIcon, Dropdown } from "../../../components"
import { Button } from "../../../components/button"

export const UploadResult1 = () => {
  return (
    <section className="w-full pt-6 sm:px-[6rem] overflow-auto bg-[#f4f4f4]">
      <div className="flex justify-between pb-14 px-3">
        <BackIcon link={"/teacher/uploadresult"} />

        <div className="flex gap-5 items-center justify-end">
          <div
            onClick={onclick}
            className="flex gap-2 cursor-pointer items-center"
          >
            <figure className="size-[50px] rounded-full">
              <img
                className="rounded-full"
                src={SchoolTeacher}
                alt="student image"
              />
            </figure>
            <div className="text-[15px]">
              <p className="font-bold">Okafor Chinyere</p>
              <p>Teacher</p>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full grid place-items-center">
        <section className=" w-[85%] h-[576px]">
          <h2 className=" text-center sm:text-left text-2xl sm:text-[32px] font-semibold text-[#696969] pt-5 pb-8">
            Upload Result
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
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

          <div className="w-[100%] h-36 my-10 pt-3 bg-[#ECECEC] rounded-lg items-center justify-center flex flex-col relative cursor-pointer">
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
          <div className="sm:pl-[40%] w-40% px-24 pb-8">
            <Button
              content="Submit"
              className={
                "bg-[#132985] w-full sm:w-[30%] py-[8px] mt-3 sm:mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
              }
            />
          </div>
        </section>
      </main>
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
