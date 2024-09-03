import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import PropTypes from "prop-types"
import { useState } from "react"
import { FilteredSearch } from "../filteredSearch"
import { CustomTable } from "../customTable"
import { ListPagination } from "../../admin"

export const TableModel = ({
  myData,
  columns,
  people,
  children,
  searchValue,
  rowOnClick,
  justTable = false,
  center,
  pageSize = "12",
}) => {
  const [data, setData] = useState(myData)
  const [columnFilters, setColumnFilters] = useState([])

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    initialState: {
      pagination: {
        pageSize: pageSize,
      },
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

  const handlePageChange = (selectedPage) => {
    table.setPageIndex(selectedPage)
  }

  const totalRows = table.getRowCount()
  return (
    <>
      {!justTable ? (
        <section className="grid gap-4 w-full">
          <div className="sm:flex sm:justify-between items-center pb-6">
            <div className="w-[50%]">
              <FilteredSearch
                columnFilters={columnFilters}
                setColumnFilters={setColumnFilters}
                searchValue={searchValue}
              />
            </div>
            <div className="flex gap-5 ">
              <select className="p-[0.4rem] rounded" name="Class" id="">
                <option value="">Class</option>
                <option value="">JSS 1</option>
                <option value="">JSS 2</option>
                <option value="">JSS 3</option>
              </select>

              <select className="p-[0.4rem] rounded" name="Class" id="">
                <option value="">Gender</option>
                <option value="JSS1">Male</option>
                <option value="JSS1">Female</option>
              </select>
            </div>
          </div>
          {children}
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
      ) : (
        <section className="grid gap-4">
          <CustomTable table={table} rowOnClick={rowOnClick} />
        </section>
      )}
    </>
  )
}

TableModel.propTypes = {
  myData: PropTypes.object,
  columns: PropTypes.array,
  people: PropTypes.string,
  searchValue: PropTypes.string,
  children: PropTypes.any,
  rowOnClick: PropTypes.func,
  justTable: PropTypes.bool,
  center: PropTypes.string,
  pageSize: PropTypes.string,
}
