import PropTypes from "prop-types"
import { BiEditAlt } from "react-icons/bi"
import { AdminIcon, BackIcon, TableModel } from "../../../../components"
import { Button } from "../../../../components/button"
import { GoTrash } from "react-icons/go"
import { getAllActivities } from "../../../../api"
import { useQuery } from "@tanstack/react-query"

export const AdminEventsList = () => {
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
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-3">
        <div className="flex justify-between pb-10">
          <div className="flex items-end">
            <BackIcon link={"/admin/academics"} />
          </div>
          <AdminIcon />
        </div>
        <div className="flex flex-col gap-4">
          <Button
            link={"/admin/academics/addActivity"}
            content={"Add Event"}
            className={
              "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>

        <h2 className="text-2xl mt-4 pb-6 text-[#444444]">Academic Calender</h2>

        <div className="w-full">
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

const Description = ({ getValue }) => {
  const value = getValue()

  return (
    <div className="flex justify-between">
      <p> {value}</p>
      <div className="flex gap-2">
        <BiEditAlt />
        <GoTrash />
      </div>
    </div>
  )
}

Description.propTypes = {
  getValue: PropTypes.func,
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
    cell: Description,
    enableSorting: false,
  },
]
