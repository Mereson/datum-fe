import PropTypes from "prop-types"
import { useEffect, useState } from "react"

const EditableCell = ({ getValue, row, column, table }) => {
  const initialValue = getValue()
  const [value, setValue] = useState(initialValue)

  const onBlur = () => {
    table.options.meta?.updateData(row.index, column.id, value)
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <input
      className="py-2 text-sm truncate border-[1px] border-gray-300 rounded-md"
      type="text"
      onChange={(e) => setValue(e.target.value)}
      value={value}
      onBlur={onBlur}
    />
  )
}

export default EditableCell

EditableCell.propTypes = {
  getValue: PropTypes.func,
  row: PropTypes.any,
  column: PropTypes.any,
  table: PropTypes.any,
}
