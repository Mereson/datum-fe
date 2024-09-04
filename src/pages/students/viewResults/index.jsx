import { CustomSelect, StudentIcon } from "../../../components"
import { useState } from "react"
import { ResultAnalysis } from "../resultAnalysis"

export const ViewResults = () => {
  const [openTab, setOpenTab] = useState(1)

  const handleTabSwitch = (e) => {
    let { id } = e.target
    setOpenTab(id)
  }

  return (
    <section className="bg-[#f4f4f4] w-full h-full overflow-auto pt-8 px-[1.5rem] sm:px-[6.25rem] pb-[9.563rem]">
      <StudentIcon />
      <div className="flex flex-wrap gap-3 text-sm sm:text-base items-center justify-between pt-14 pb-8">
        <div className="flex gap-4 font-bold items-center">
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

        <div className="flex gap-3 items-center">
          <p className="font-bold text-[#444444]">Filter by:</p>
          <CustomSelect
            index={1}
            query={"Class"}
            width={"6.8rem"}
            options={[]}
          />
        </div>
      </div>
      {openTab == 1 ? (
        <div className="overflow-x-auto">
          <ResultAnalysis data={results} columns={columns} />
        </div>
      ) : openTab == 2 ? (
        <>
          <p className="text-sm text-[#6270AE] pb-4">
            Showing Second Term Results
          </p>
          <ResultAnalysis data={results} columns={columns} />
        </>
      ) : (
        <>
          <p className="text-sm text-[#6270AE] pb-4">
            Showing Third Term Results
          </p>
          <ResultAnalysis data={results} columns={columns} />
        </>
      )}
    </section>
  )
}

const columns = [
  {
    accessorKey: "s/n",
    header: "S/N",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "subject",
    header: "Subject",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "assessment",
    header: "Assessment",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "exam",
    header: "Exam",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "total",
    header: "Total",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "grade",
    header: "Grade",
    cell: (Props) => <p>{Props.getValue()}</p>,
    enableSorting: false,
  },
]

const results = [
  {
    "s/n": 1,
    subject: "English",
    assessment: 6,
    exam: 25,
    total: 31,
    grade: "F",
  },
  {
    "s/n": 2,
    subject: "Mathematics",
    assessment: 16,
    exam: 49,
    total: 65,
    grade: "B",
  },

  {
    "s/n": 3,
    subject: "Biology",
    assessment: 19,
    exam: 58,
    total: 77,
    grade: "A",
  },
  {
    "s/n": 4,
    subject: "Physics",
    assessment: 17,
    exam: 60,
    total: 77,
    grade: "A",
  },
  {
    "s/n": 5,
    subject: "Chemistry",
    assessment: 20,
    exam: 20,
    total: 40,
    grade: "D",
  },
  {
    "s/n": 6,
    subject: "Geography",
    assessment: 19,
    exam: 40,
    total: 59,
    grade: "C",
  },
  {
    "s/n": 7,
    subject: "Agriculture",
    assessment: 23,
    exam: 39,
    total: 62,
    grade: "B",
  },
  {
    "s/n": 8,
    subject: "Igbo language",
    assessment: 30,
    exam: 56,
    total: 86,
    grade: "A",
  },
  {
    "s/n": 9,
    subject: "CRS",
    assessment: 23,
    exam: 40,
    total: 63,
    grade: "B",
  },
  {
    "s/n": 10,
    subject: "Civic Education",
    assessment: 7,
    exam: 54,
    total: 78,
    grade: "A",
  },
  {
    "s/n": 11,
    subject: "Computer Science",
    assessment: 30,
    exam: 48,
    total: 72,
    grade: "A",
  },
  {
    "s/n": 12,
    subject: "Health Science",
    assessment: 25,
    exam: 50,
    total: 75,
    grade: "A",
  },
]
