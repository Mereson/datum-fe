import { useQuery } from "@tanstack/react-query"
import { BackIcon, StudentIcon, TableModel } from "../../../../components"
import { getAllActivities } from "../../../../api"
import PropTypes from "prop-types"

export const StudentsCalenderPage = () => {
  const query = useQuery({
    queryKey: ["Activities"],
    queryFn: getAllActivities,
  })

  if (query.isError) {
    console.log(query.error.message)
  }

  if (query.isSuccess) {
    console.log(query.data)
  }

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
          {query.isSuccess && (
            <TableModel
              myData={query.data}
              columns={columns}
              people={"Students"}
              searchValue={"Activity"}
              justTable={true}
              // rowOnClick={rowOnClick}
            />
          )}
          {query.isLoading && (
            <p className=" text-[#6270AE] pb-4">Loading...</p>
          )}
          {query.isError && (
            <p className=" text-[#6270AE] pb-4">Nothing to display</p>
          )}
        </div>
      </main>
    </section>
  )
}

const DateText = ({ getValue }) => {
  const value = getValue()

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toISOString().split("T")[0]
  }

  const formattedDate = formatDate(value)

  return <p>{formattedDate}</p>
}

DateText.propTypes = {
  getValue: PropTypes.func,
}

const columns = [
  {
    accessorKey: "id",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: "Activity",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "startDate",
    header: "Start Date",
    cell: DateText,
    enableSorting: false,
  },
  {
    accessorKey: "endDate",
    header: "End Date",
    cell: DateText,
    enableSorting: false,
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]
