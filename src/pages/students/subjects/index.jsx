// import PropTypes from 'prop-types'

import { BackIcon, StudentIcon, TableModel } from "../../../components"
import { subjectsData } from "../../../testData"

export const StudentsSubjectList = () => {
  return (
    <section className="w-full px-7 sm:px-[5rem] bg-[#f4f4f4] h-full pt-8 pb-40 sm:pb-14 overflow-auto">
      <main className="grid gap-4">
        <div className="flex justify-between">
          <BackIcon link={"/students/dashboard"} />
          <StudentIcon />
        </div>

        <h2 className="sm:py-[20px] text-xl sm:text-2xl pt-14">My Subjects</h2>
        <div className="sm:w-[90%] w-full">
          <TableModel
            myData={subjectsData}
            columns={columns}
            people={"Teachers"}
            justTable={true}
            // rowOnClick={onClick}
          />
        </div>
      </main>
    </section>
  )
}

const columns = [
  {
    accessorKey: "S/N",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Subjects",
    header: "Subjects",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "empty",
    header: "",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]

StudentsSubjectList.propTypes = {}
