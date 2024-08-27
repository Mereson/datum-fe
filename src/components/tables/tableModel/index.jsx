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
        pageSize: 12,
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
        <section className="grid gap-4">
          <FilteredSearch
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            searchValue={searchValue}
          />
          {children}
          <p className="text-sm text-[#6270AE] pb-4">
            Showing {table.getState().pagination.pageIndex + 1} -{" "}
            {table.getPageCount()} of {totalRows} {people}
          </p>
          <CustomTable table={table} rowOnClick={rowOnClick} />
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
}
