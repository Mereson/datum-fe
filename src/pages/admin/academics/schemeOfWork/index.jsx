import { AdminIcon, BackIcon } from "../../../../components"

export const AdminSchemeOfWork = () => {
  return (
    <section className="w-full h-full sm:px-[5rem] bg-[#f4f4f4] pt-8 pb-32 sm:pb-14 overflow-auto">
      <div className="flex justify-between px-4 pb-14">
        <BackIcon link={"/admin/academics"} />

        <AdminIcon />
      </div>

      <div className="min-h-screen bg-gray-100 p-4 flex justify-center items-center">
        <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="sm:text-xl font-bold mb-4 text-center">
              List of Subjects and their Scheme of Work
            </h2>
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-sm text-left">
                  <th className="p-4 border">S/N</th>
                  <th className="p-4 border">Subjects</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => (
                  <tr key={subject.id} className="hover:bg-gray-50">
                    <td className="p-4 border">{subject.id}</td>
                    <td className="p-4 border">{subject.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}

const subjects = [
  { id: "001", name: "English" },
  { id: "002", name: "Mathematics" },
  { id: "003", name: "Business Studies" },
  { id: "004", name: "Social Science" },
  { id: "005", name: "Home Economics" },
  { id: "007", name: "Basic Science" },
  { id: "008", name: "Civic Science" },
  { id: "009", name: "Basic Technology" },
  { id: "010", name: "CHristian Religuos Studies" },
  { id: "011", name: "Fine Arts" },
  { id: "012", name: "Health" },
]
