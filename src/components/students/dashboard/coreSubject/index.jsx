import PropTypes from "prop-types"

export const CoreSubjects = ({ subjects }) => {
  return (
    <div className="bg-[#fafafa] h-[309px] gap-4 pt-6 px-6 shadow-sm rounded-2xl">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">
              <h5 className="text-base xl:text-lg font-bold">Core Subjects</h5>
            </th>
            <th className="px-4 py-2 text-left">
              <h5 className="text-base xl:text-lg font-bold">Topics</h5>
            </th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(({ id, subject, topics }) => (
            <tr key={id}>
              <td className="px-4 py-1 text-left">
                <p className="text-base">{subject}</p>
              </td>
              <td className="px-4 py-1 text-center">
                <p>{topics}</p>
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
      subject: PropTypes.string.isRequired,
      topics: PropTypes.number.isRequired,
    })
  ).isRequired,
}
