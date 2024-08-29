import PropTypes from "prop-types"
import { flexRender } from "@tanstack/react-table"
import { BiSort } from "react-icons/bi"
import { FaSortDown, FaSortUp } from "react-icons/fa6"

export const CustomTable = ({ table, rowOnClick, center }) => {
  return (
    <table className={`w-full bg-white border shadow-md border-gray-200`}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr
            key={headerGroup.id}
            className="w-full bg-[#ECECEC] border-b border-gray-300"
          >
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={`px-4 py-2 text-left text-sm text-[#1e1e1e] font-semibold`}
              >
                <p
                  className={`${center} flex items-center gap-1 cursor-pointer`}
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
            className={`border-b cursor-pointer border-gray-200 ${
              row.index % 2 === 0 ? "bg-[#F4F4F4]" : "bg-[#ECECEC]"
            }`}
            onClick={() => rowOnClick(row.original)}
          >
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={` ${center} py-3 px-4 text-sm text-[#1e1e1e]`}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

CustomTable.propTypes = {
  table: PropTypes.object,
  rowOnClick: PropTypes.func,
  center: PropTypes.string,
}
