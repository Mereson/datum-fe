import { Button } from "../../../components/button"
import { CustomSelect, MembersList, StudentIcon } from "../../../components"
import { useState } from "react"

export const ViewResults = () => {
  const [openTab, setOpenTab] = useState(1)

  const handleTabSwitch = (e) => {
    let { id } = e.target
    setOpenTab(id)
  }

  return (
    <section className="bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] pb-[9.563rem]">
      <StudentIcon />

      <div className="flex gap-4 font-bold items-center pb-[3.375rem]">
        <p
          onClick={handleTabSwitch}
          id="1"
          className={`cursor-pointer ${
            openTab == 1
              ? "text-[#0D1B59] underline underline-offset-4"
              : "text-[#132985]"
          } `}
        >
          First Term
        </p>
        <p
          onClick={handleTabSwitch}
          id="2"
          className={`cursor-pointer ${
            openTab == 2
              ? "text-[#0D1B59] underline underline-offset-4 "
              : "text-[#132985]"
          } `}
        >
          Second Term
        </p>
        <p
          onClick={handleTabSwitch}
          id="3"
          className={`cursor-pointer ${
            openTab == 3
              ? "text-[#0D1B59] underline underline-offset-4 "
              : "text-[#132985]"
          } `}
        >
          Third
        </p>
      </div>

      <div className="flex gap-3 items-center pb-11">
        <p className="font-bold text-[#444444]">Filter by:</p>
        <CustomSelect index={1} query={"Class"} width={"6.8rem"} options={[]} />
      </div>

      {openTab == 1 ? (
        <MembersList data={results} title={false} />
      ) : openTab == 2 ? (
        <MembersList data={results} title={true} />
      ) : (
        <MembersList data={results} title={true} people={"Naza"} />
      )}
      <div className=" w-full flex justify-center">
        <Button
          link={"/students/checkResults/resultAnalysis"}
          content="See Analysis"
          className={
            "bg-[#132985] w-[100%] py-[8px] px-10 mt-11 text-center rounded-[4px] font-bold text-white cursor-pointer flex justify-center"
          }
        />
      </div>
    </section>
  )
}

const results = [
  {
    "S/N": 1,
    Subject: "English",
    "Ass Score": 2,
    "Exam Score": 25,
    Total: 31,
    Grade: "F",
  },
  {
    "S/N": 2,
    Subject: "Mathematics",
    "Ass Score": 5,
    "Exam Score": 49,
    Total: 65,
    Grade: "B",
  },

  {
    "S/N": 3,
    Subject: "Biology",
    "Ass Score": 8,
    "Exam Score": 58,
    Total: 77,
    Grade: "A",
  },
  {
    "S/N": 4,
    Subject: "Physics",
    "Ass Score": 10,
    "Exam Score": 60,
    Total: 77,
    Grade: "A",
  },
  {
    "S/N": 5,
    Subject: "Chemistry",
    "Ass Score": 10,
    "Exam Score": 20,
    Total: 40,
    Grade: "D",
  },
  {
    "S/N": 6,
    Subject: "Geography",
    "Ass Score": 4,
    "Exam Score": 40,
    Total: 59,
    Grade: "C",
  },
  {
    "S/N": 7,
    Subject: "Agriculture",
    "Ass Score": 5,
    "Exam Score": 39,
    Total: 62,
    Grade: "B",
  },
  {
    "S/N": 8,
    Subject: "Igbo language",
    "Ass Score": 10,
    "Exam Score": 56,
    Total: 86,
    Grade: "A",
  },
  {
    "S/N": 9,
    Subject: "CRS",
    "Ass Score": 9,
    "Exam Score": 40,
    Total: 63,
    Grade: "B",
  },
  {
    "S/N": 10,
    Subject: "Civic Education",
    "Ass Score": 7,
    "Exam Score": 54,
    Total: 78,
    Grade: "A",
  },
  {
    "S/N": 11,
    Subject: "Computer Science",
    "Ass Score": 8,
    "Exam Score": 48,
    Total: 72,
    Grade: "A",
  },
  {
    "S/N": 12,
    Subject: "Health Science",
    "Ass Score": 5,
    "Exam Score": 50,
    Total: 75,
    Grade: "A",
  },
]
