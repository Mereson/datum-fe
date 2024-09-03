import { useEffect } from "react"
import {
  AddBtn,
  AdminIcon,
  BackIcon,
  TableModel,
} from "../../../../../components"
import { Button } from "../../../../../components/button"
import { getAllSubjects } from "../../../../../api"
import { useAcademicsStore } from "../../../../../states/academics"

export const AdminSubjectsList = () => {
  const { subjectsData, setSubjectsData } = useAcademicsStore()
  useEffect(() => {
    const getData = async () => {
      console.log("is hitting")
      const data = await getAllSubjects()
      console.log(data)
      setSubjectsData(data)
    }
    getData()
  }, [])

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

        {subjectsData.length >= 1 ? (
          <div className="w-[70%]">
            <TableModel
              myData={subjectsData}
              columns={columns}
              people={"Teachers"}
              justTable={true}
              // rowOnClick={onClick}
            />
          </div>
        ) : (
          <p className=" text-[#6270AE] pb-4">Nothing to display</p>
        )}
      </main>
    </section>
  )
}

const columns = [
  {
    accessorKey: "id",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "name",
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
