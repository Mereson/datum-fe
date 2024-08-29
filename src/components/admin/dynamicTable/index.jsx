import PropTypes from "prop-types"

export const DynamicTable = ({ data, currentPage, itemsPerPage }) => {
  // Get the keys of the first object in the data array to use as headers
  const headers = data.length > 0 ? Object.keys(data[0]) : []

  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr className="w-full bg-gray-100 border-b border-gray-300">
            {headers.map((header) => (
              <th
                key={header}
                className="px-4 py-2 text-left text-sm text-[#1e1e1e] font-semibold"
              >
                {header.charAt(0).toUpperCase() + header.slice(1)}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-200">
              {headers.map((header) => (
                <td key={header} className="px-4 py-3 text-sm text-[#1e1e1e]">
                  {row[header]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

DynamicTable.propTypes = {
  data: PropTypes.string,
  currentPage: PropTypes.string,
  itemsPerPage: PropTypes.string,
}
