import { AdminIcon, BackIcon, TableModel } from "../../../../../components"
// import { Button } from "../../../../../components/button"
import { classData } from "../../../../../testData"

export const AdminClassesList = () => {
  const onClick = () => {
    alert("This should lead to class tier")
  }
  return (
    <section className="w-full h-full px-3 sm:px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-3">
        <div className="flex justify-between pb-10">
          <div className="flex items-end">
            <BackIcon link={"/admin/academics"} />
          </div>
          <AdminIcon />
        </div>
        <div className="flex flex-col gap-8 px-2">
          {/* <Button
            link={"/admin/academics/addClass"}
            content={<AddBtn text={"Add Class"} />}
            className={
              "bg-[#132985] w-[12rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          /> */}
          <h2 className="sm:text-2xl text-lg mt-2 font-bold text-[#1e1e1e]">
            List of Classes
          </h2>

          <div className="sm:w-[70%] w-[90%]">
            <TableModel
              myData={classData}
              columns={columns}
              people={"Teachers"}
              justTable={true}
              rowOnClick={onClick}
            />
          </div>
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
    accessorKey: "Classes",
    header: "Classes",
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
