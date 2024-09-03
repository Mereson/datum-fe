import { BackIcon, StudentIcon, TableModel } from "../../../components"
import { Button } from "../../../components/button"
import { paymentBreakdownData } from "../../../testData"

export const StudentsFees = () => {
  const onClick = () => {
    alert("Coming Soon")
  }
  return (
    <section className="w-full px-5 sm:px-[5rem] bg-[#f4f4f4] pt-8 sm:pb-14 h-full overflow-auto pb-40">
      <main>
        <div className="flex justify-between pb-[20px]">
          <BackIcon link={"/students/dashboard"} />
          <StudentIcon />
        </div>
        <h2 className="sm:pt-5 pt-7 pb-[40px] text-2xl">School Fees</h2>

        <section>
          <TableModel
            myData={paymentBreakdownData}
            columns={breakdownColumn}
            people={"Students"}
            searchValue={"Item"}
            justTable
          />
        </section>
        <div className="flex justify-center">
          <Button
            onClick={onClick}
            content="Pay Fees"
            className={
              "bg-[#132985] py-3 px-8 mt-11 text-center rounded-lg font-bold text-white cursor-pointer flex justify-center"
            }
          />
        </div>
      </main>
    </section>
  )
}

const breakdownColumn = [
  {
    accessorKey: "S/N",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Item",
    header: "Item",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "Amount",
    header: "Amount",
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
