import { useState } from "react"
import { AdminProfileImg } from "../../../../assets"
import { BackIcon, TableModel } from "../../../../components"
import { paymentBreakdownData, paymentsData } from "../../../../testData"
import { StatusCell } from "../paymentStatus"

export const AdminPaymentList = () => {
  const [activeTab, setActiveTab] = useState("payment")

  const handleTabSwitch = (tab) => {
    setActiveTab(tab)
  }

  return (
    <section className="w-full h-full sm:px-[5rem] pl-4 bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className="grid gap-4">
        <BackIcon link={"/admin/dashboard"} />
        <div className="flex flex-col">
          <div className="flex gap-5 items-center justify-end">
            <div className="flex gap-2 items-center pr-4">
              <figure className="size-[50px] rounded-full">
                <img src={AdminProfileImg} alt="" />
              </figure>
              <div className="text-[15px]">
                <p className="font-bold">Nkechi Nduka</p>
                <p>Admin</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4 font-bold items-center">
            <p
              onClick={() => handleTabSwitch("payment")}
              className={`cursor-pointer ${
                activeTab === "payment"
                  ? "text-[#0D1B59] underline underline-offset-4"
                  : "text-[#132985]"
              }`}
            >
              Payment
            </p>
            <p
              onClick={() => handleTabSwitch("breakdown")}
              className={`cursor-pointer ${
                activeTab === "breakdown"
                  ? "text-[#0D1B59] underline underline-offset-4"
                  : "text-[#132985]"
              }`}
            >
              Breakdown
            </p>
          </div>
        </div>

        {activeTab === "payment" ? <PaymentSection /> : <BreakdownSection />}
      </main>
    </section>
  )
}

const PaymentSection = () => {
  return (
    <section>
      <TableModel
        myData={paymentsData}
        columns={dataColumn}
        people={"Students"}
        searchValue={"First Name"}
      />
    </section>
  )
}

const dataColumn = [
  {
    accessorKey: "S/N",
    header: "S/N",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "FirstName",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "OtherName",
    header: "Other Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Gender",
    header: "Gender",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Class",
    header: "Class",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: StatusCell,
  },
]

const BreakdownSection = () => {
  return (
    <section className="w-full h-full overflow-auto pb-20 px-4">
      <TableModel
        myData={paymentBreakdownData}
        columns={breakdownColumn}
        people={"Students"}
        searchValue={"Item"}
      />
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
  },
  {
    accessorKey: "Description",
    header: "Description",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]
