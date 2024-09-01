// import PropTypes from 'prop-types'

import { StudentIcon, TableModel } from "../../../components"
import { subjectsData } from "../../../testData"

export const StudentsSubjectList = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <StudentIcon />

        <h2 className="py-[20px] text-2xl">My Subjects</h2>
        <div className="w-[90%]">
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
