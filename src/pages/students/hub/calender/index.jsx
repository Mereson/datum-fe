import { BackIcon, StudentIcon, TableModel } from "../../../../components"
import { eventsData } from "../../../../testData"

export const StudentsCalenderPage = () => {
  return (
    <section className="w-full px-6 sm:px-[5rem] h-full bg-[#f4f4f4] pt-8 pb-36 sm:pb-14 overflow-auto">
      <main>
        <div className="flex justify-between pb-14">
          <BackIcon link={"/students/hub"} />
          <StudentIcon />
        </div>
        <h2 className="pb-[51px] pt-6 text-xl sm:text-2xl">
          Academic Calender
        </h2>

        <div className="w-full overflow-x-auto">
          <TableModel
            myData={eventsData}
            columns={columns}
            people={"Students"}
            searchValue={"Activity"}
            justTable={true}
            // rowOnClick={rowOnClick}
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
    accessorKey: "Activity",
    header: "Activity",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Start Date",
    header: "Start Date",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "End Date",
    header: "End Date",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Description",
    header: "Description",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]
