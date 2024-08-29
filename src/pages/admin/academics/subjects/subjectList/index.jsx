import {
  AddBtn,
  AdminIcon,
  BackIcon,
  TableModel,
} from "../../../../../components"
import { Button } from "../../../../../components/button"
import { subjectsData } from "../../../../../testData"

export const AdminSubjectsList = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <div className="flex flex-col">
          <div className="flex justify-between pb-14">
            <div className="flex items-end">
              <BackIcon link={"/admin/academics"} />
            </div>
            <AdminIcon />
          </div>

          <Button
            link={"/admin/academics/addSubject"}
            content={<AddBtn text={"Add Subject"} />}
            className={
              "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </div>

        <h2 className="text-2xl mt-4 font-bold text-[#1e1e1e]">Subject List</h2>

        <div className="w-[70%]">
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
