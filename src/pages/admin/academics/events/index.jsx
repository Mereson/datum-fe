import PropTypes from "prop-types"
import { BiEditAlt } from "react-icons/bi"
import { AdminIcon, BackIcon, TableModel } from "../../../../components"
import { Button } from "../../../../components/button"
import { eventsData } from "../../../../testData"
import { GoTrash } from "react-icons/go"

export const AdminEventsList = () => {
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

const columns = [
  {
    accessorKey: "S/N",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
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
  },
  {
    accessorKey: "End Date",
    header: "End Date",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Description",
    header: "Description",
    cell: Description,
    enableSorting: false,
  },
]
