import PropTypes from "prop-types"

export const CoreSubjects = ({ subjects }) => {
  return (
    <div className="bg-[#fafafa] pb-[24px] col-span-2 sm:col-span-1 grid  gap-4 pt-4 px-6 shadow-sm rounded-2xl w-full">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">
              <h5 className="text-base xl:text-lg font-bold">Subjects</h5>
            </th>
          </tr>
        </thead>
        <tbody className="grid gap-1">
          {subjects.map(({ id, name }) => (
            <tr key={id}>
              <td className="px-4 py-1 text-left">
                <p className="text-base">{name}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

CoreSubjects.propTypes = {
  subjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string.isRequired,
      topics: PropTypes.number.isRequired,
    })
  ).isRequired,
}
