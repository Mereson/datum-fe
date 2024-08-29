import PropTypes from "prop-types"
import { PerformanceAreaChart } from "../../../components"
import { useState } from "react"

const CustomSelect = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="w-[250px] mb-4">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <select
        className="w-full px-[16px] py-[13px] bg-[#ececec] rounded-lg text-sm text-[#333] cursor-pointer"
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        <option value="">Select {label}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

CustomSelect.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  selectedOption: PropTypes.string.isRequired,
  setSelectedOption: PropTypes.func.isRequired,
}

const subjects = ["Mathematics", "English", "Science", "History"]
const terms = ["Term 1", "Term 2", "Term 3"]
const sessions = [
  "Session 1",
  "Session 2",
  "Session 3",
  "Session 4",
  "Session 5",
  "Session 6",
]

export const SubjectAnalysis = () => {
  const [selectedSubject1, setSelectedSubject1] = useState("")
  const [selectedSubject2, setSelectedSubject2] = useState("")
  const [selectedTerms, setSelectedTerms] = useState(new Set())
  const [selectedSessions, setSelectedSessions] = useState("")

  const handleTermChange = (e) => {
    const value = e.target.value
    setSelectedTerms((prev) => {
      const newTerms = new Set(prev)
      if (newTerms.has(value)) {
        newTerms.delete(value)
      } else {
        newTerms.add(value)
      }
      return newTerms
    })
  }


  return (
    <section className="overflow-auto flex flex-col items-center pb-9 w-[100%] bg-[#f4f4f4]">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Grade Comparison</h2>

        <div className="flex gap-4">
          <CustomSelect
            label="Subject 1"
            options={subjects}
            selectedOption={selectedSubject1}
            setSelectedOption={setSelectedSubject1}
          />
          <CustomSelect
            label="Subject 2"
            options={subjects}
            selectedOption={selectedSubject2}
            setSelectedOption={setSelectedSubject2}
          />
        </div>

        <div className="flex gap-4">
          <CustomSelect
            label="Select Sessions"
            options={sessions}
            selectedOption={selectedSessions}
            setSelectedOption={setSelectedSessions}
          />
          <div className="flex flex-col w-[250px]">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Select Terms
            </label>
            <div className="flex flex-col gap-2">
              {terms.map((term) => (
                <label key={term} className="flex items-center">
                  <input
                    type="checkbox"
                    value={term}
                    checked={selectedTerms.has(term)}
                    onChange={handleTermChange}
                    className="mr-2"
                  />
                  {term}
                </label>
              ))}
            </div>
          </div>
        </div>

        <PerformanceAreaChart />
      </div>
    </section>
  )
}
