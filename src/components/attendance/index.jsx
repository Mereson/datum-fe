import PropTypes from "prop-types"
import { useState } from "react"
import { absent, present } from "../../assets"
import { CustomTable } from "../tables"
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { FilteredSearch } from "../tables/filteredSearch"
import { ListPagination } from "../admin"

export const AttendanceComponent = ({
  myData,
  people,
  title,
  searchValue,
  rowOnClick,
  center,
}) => {
  const data = myData
  const [columnFilters, setColumnFilters] = useState([])

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: 12,
      },
    },
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  })

  const handlePageChange = (selectedPage) => {
    table.setPageIndex(selectedPage)
  }

  const totalRows = table.getRowCount()
  return (
    <>
      <section className="grid gap-4 w-full">
        <div className="flex justify-between items-center">
          <div className="w-[50%]">
            <FilteredSearch
              columnFilters={columnFilters}
              setColumnFilters={setColumnFilters}
              searchValue={searchValue}
            />
          </div>
          <div className="flex gap-5">
            <select className="p-[0.4rem] rounded" name="Class" id="">
              <option value="">Class</option>
              <option value="">JSS 1</option>
              <option value="">JSS 2</option>
              <option value="">JSS 3</option>
            </select>
            <select className="p-[0.4rem] rounded" name="Class" id="">
              <option value="">Tier</option>
              <option value="JSS1">Male</option>
              <option value="JSS1">Female</option>
            </select>
            <select className="p-[0.4rem] rounded" name="Class" id="">
              <option value="">Term</option>
              <option value="JSS1">Name</option>
              <option value="JSS1">Email</option>
            </select>
          </div>
        </div>
        <h2 className="text-2xl pt-4 font-bold text-[#1e1e1e]">
          {title}
        </h2>
        <p className="text-sm text-[#6270AE] pb-4">
          Showing {table.getState().pagination.pageIndex + 1} -{" "}
          {table.getPageCount()} of {totalRows} {people}
        </p>
        <CustomTable table={table} center={center} rowOnClick={rowOnClick} />
        {totalRows > 12 && (
          <div className="mt-8">
            <ListPagination
              totalPages={table.getPageCount()}
              onPageChange={handlePageChange}
            />
          </div>
        )}
      </section>
    </>
  )
}

const renderAttendance = (status) => {
  if (status === "Present") {
    return <img src={present} alt="image" />
  } else if (status === "Absent") {
    return <img src={absent} alt="image" />
  } else if (status === "Null" || status === undefined) {
    return <span>—</span> // For 'Null' or undefined
  } else {
    return <span>__</span> // For any unexpected value
  }
}

const columns = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "attendance.mon",
    header: "Mon",
    cell: ({ row }) => {
      const weeks = row.original.attendance
      return Object.keys(weeks).map((week, index) => (
        <div key={index}>{renderAttendance(weeks[week]?.mon)}</div>
      ))
    },
    enableSorting: false,
  },
  {
    accessorKey: "attendance.tue",
    header: "Tue",
    cell: ({ row }) => {
      const weeks = row.original.attendance
      return Object.keys(weeks).map((week, index) => (
        <div key={index}>{renderAttendance(weeks[week]?.tue)}</div>
      ))
    },
    enableSorting: false,
  },
  {
    accessorKey: "attendance.wed",
    header: "Wed",
    cell: ({ row }) => {
      const weeks = row.original.attendance
      return Object.keys(weeks).map((week, index) => (
        <div key={index}>{renderAttendance(weeks[week]?.wed)}</div>
      ))
    },
    enableSorting: false,
  },
  {
    accessorKey: "attendance.thur",
    header: "Thu",
    cell: ({ row }) => {
      const weeks = row.original.attendance
      return Object.keys(weeks).map((week, index) => (
        <div key={index}>{renderAttendance(weeks[week]?.thur)}</div>
      ))
    },
    enableSorting: false,
  },
  {
    accessorKey: "attendance.fri",
    header: "Fri",
    cell: ({ row }) => {
      const weeks = row.original.attendance
      return Object.keys(weeks).map((week, index) => (
        <div key={index}>{renderAttendance(weeks[week]?.fri)}</div>
      ))
    },
    enableSorting: false,
  },
  {
    accessorKey: "attendance.sat",
    header: "Sat",
    cell: ({ row }) => {
      const weeks = row.original.attendance
      return Object.keys(weeks).map((week, index) => (
        <div key={index}>{renderAttendance(weeks[week]?.sat)}</div>
      ))
    },
    enableSorting: false,
  },
  {
    accessorKey: "attendance.sun",
    header: "Sun",
    cell: ({ row }) => {
      const weeks = row.original.attendance
      return Object.keys(weeks).map((week, index) => (
        <div key={index}>{renderAttendance(weeks[week]?.sun)}</div>
      ))
    },
    enableSorting: false,
  },
]


AttendanceComponent.propTypes = {
    myData: PropTypes.object,
    people: PropTypes.string,
    searchValue: PropTypes.string,
    title: PropTypes.any,
    rowOnClick: PropTypes.func,
    center: PropTypes.string,
  }
  