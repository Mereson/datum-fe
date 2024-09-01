import { BackIcon, Dropdown, TeacherAvater } from "../../../components"
import { Button } from "../../../components/button"

export const UploadResult1 = () => {
  return (
    <section className="w-full pt-8 px-[6rem] pb-8 overflow-auto bg-[#f4f4f4]">
      <div className="flex justify-between pb-14">
        <div className="flex items-end">
          <BackIcon link={"/teacher/uploadresult"} />
        </div>
        <TeacherAvater />
      </div>
      <main className="w-full grid place-items-center">
        <section className=" w-[85%] h-[576px]">
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
          <div className="pl-[40%]">
            <Button
              content="Submit"
              className={
                "bg-[#132985] w-[30%] py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
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
