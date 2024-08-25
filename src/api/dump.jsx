import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { paymentsData } from "../testData"
import { useState } from "react"
import EditableCell from "./api2"
import StatusCell from "./api"
import Filters from "./filters"
import { BiSort } from "react-icons/bi"
import { FaSortDown, FaSortUp } from "react-icons/fa6"

const columns = [
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
    // cell: EditableCell,
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "Status",
    header: "Status",
    cell: StatusCell,
  },
]

export const Dump = () => {
  const [data, setData] = useState(paymentsData)
  const [columnFilters, setColumnFilters] = useState([])

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    meta: {
      updateData: (rowIndex, coloumnId, value) =>
        setData((prev) =>
          prev.map((row, index) =>
            index === rowIndex
              ? {
                  ...prev[rowIndex],
                  [coloumnId]: value,
                }
              : row
          )
        ),
    },
  })

  return (
    <section className="px-[10%] py-[5%] h-screen">
      <Filters
        columnFilters={columnFilters}
        setColumnFilters={setColumnFilters}
      />
      <table className={`w-full bg-white border shadow-md border-gray-200`}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="w-full bg-gray-100  border-b border-gray-300"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-2 text-left text-sm text-[#1e1e1e] font-semibold"
                >
                  <p
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {header.column.columnDef.header}
                    {header.column.getCanSort() && (
                      <span>
                        <BiSort />
                      </span>
                    )}
                    {
                      {
                        asc: (
                          <span>
                            <FaSortUp />
                          </span>
                        ),
                        desc: (
                          <span>
                            <FaSortDown />
                          </span>
                        ),
                      }[header.column.getIsSorted()]
                    }
                  </p>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className={`border-b border-gray-200 ${
                row.index % 2 === 0 ? "bg-[#F4F4F4]" : "bg-[#ECECEC]"
              }`}
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-3 px-4 text-sm text-[#1e1e1e]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
