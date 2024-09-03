import { BackIcon, StudentIcon } from "../../../../components"

export const StudentsSOWPage = () => {
  return (
    <section className="w-full px-4 sm:px-[5rem] bg-[#f4f4f4] h-full pt-8 pb-28 sm:pb-4 overflow-auto">
      <main>
        <div className="flex justify-between pb-14">
          <BackIcon link={"/students/hub"} />

          <StudentIcon />
        </div>
        <h2 className="pb-6 pl-6 sm:pl-0 sm:pb-[51px] text-xl sm:text-2xl font-medium ">
          Scheme Of Work
        </h2>

        <div className="min-h-screen bg-gray-100 p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <h2 className="sm:text-2xl text-lg font-normal mb-6">
                List of Subjects and their Scheme of Work
              </h2>
              <table className="w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-left text-sm font-semibold">
                    <th className="p-3">S/N</th>
                    <th className="p-3">Subjects</th>
                  </tr>
                </thead>
                <tbody>
                  {subjects.map((subject, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3">{subject.id}</td>
                      <td className="p-3">{subject.name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </section>
  )
}

const subjects = [
  { id: "001", name: "English" },
  { id: "002", name: "Mathematics" },
  { id: "003", name: "Home Economics" },
  { id: "004", name: "Basic Science" },
  { id: "005", name: "Social Science" },
  { id: "007", name: "Agriculture" },
  { id: "008", name: "Intro tech" },
  { id: "009", name: "Health Education" },
  { id: "010", name: "Civics" },
  { id: "011", name: "Computer Science" },
  { id: "012", name: "Business Science" },
  { id: "013", name: "Basic Technology" },
]
