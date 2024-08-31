import { BackIcon, StudentIcon } from "../../../../components"

export const StudentsCalenderPage = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <div className="flex justify-between pb-14">
        <div className="flex items-end">
          <BackIcon link={"/students/hub"} />
        </div>
        <StudentIcon />
      </div>

      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Academic Calendar</h2>
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-left text-sm font-semibold">
                  <th className="p-3">S/N</th>
                  <th className="p-3">Activity</th>
                  <th className="p-3">Start Date</th>
                  <th className="p-3">End Date</th>
                  <th className="p-3">Description</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{item.id}</td>
                    <td className="p-3">{item.activity}</td>
                    <td className="p-3">{item.startDate}</td>
                    <td className="p-3">{item.endDate}</td>
                    <td className="p-3">{item.description}</td>
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

const data = [
  {
    id: 1,
    activity: "Mid-Term Break",
    startDate: "15-10-2025",
    endDate: "23-10-2025",
    description:
      "All students are to resume to school on the 23rd of October 2025.",
  },
  {
    id: 2,
    activity: "Examinations",
    startDate: "01-11-2025",
    endDate: "14-11-2025",
    description: "All students will start and finish exams on the same date.",
  },
  {
    id: 3,
    activity: "Mid-Term Break",
    startDate: "15-10-2025",
    endDate: "23-10-2025",
    description:
      "All students are to resume to school on the 23rd of October 2025.",
  },
  {
    id: 4,
    activity: "Examinations",
    startDate: "01-11-2025",
    endDate: "14-11-2025",
    description: "All students will start and finish exams on the same date.",
  },
  {
    id: 5,
    activity: "Send-off party",
    startDate: "20-11-2025",
    endDate: "N/A",
    description: "There will be a send-off party for our outgoing students.",
  },
  {
    id: 6,
    activity: "Resumption",
    startDate: "07-11-2026",
    endDate: "N/A",
    description: "All students will start and finish exams on the same date.",
  },
  {
    id: 7,
    activity: "Send-off party",
    startDate: "20-11-2025",
    endDate: "N/A",
    description: "There will be a send-off party for our outgoing students.",
  },
  {
    id: 8,
    activity: "Resumption",
    startDate: "07-11-2026",
    endDate: "N/A",
    description: "All students will start and finish exams on the same date.",
  },
]
