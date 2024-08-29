import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { AdminIcon, BackIcon, TableModel } from "../../../../../components"
import { subjectResultsData } from "../../../../../testData"
import { SchoolTeacher } from "../../../../../assets"

export const AdminSubjectResult = () => {
  const navigate = useNavigate()
  const onClick = () => {
    navigate("")
  }
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main>
        <div className="flex justify-between">
          <div className="flex items-end">
            <BackIcon link={"/admin/academics/result"} />
          </div>
          <AdminIcon />
        </div>

        <section>
          <section className="flex items-center gap-9 pt-10 pb-[6px]">
            <img src={SchoolTeacher} alt="Teacher image" /> 
            <div className="w-full">
              <ul className="grid gap-[3px]">
                <InfoLi title={"Name:"} content={"Okafor Joy Chiamaka"} />
                <InfoLi title={"Subject:"} content={"English"} />
                <InfoLi title={"Class:"} content={"SSS2 B"} />
                <InfoLi title={"Session:"} content={"2023/2024"} />
                <InfoLi title={"Term:"} content={"Second Term"} />
                <InfoLi title={"No of Students:"} content={"3500"} />
              </ul>
            </div>
          </section>
          <TableModel
            myData={subjectResultsData}
            columns={columns}
            center={"text-center justify-center"}
            searchValue={"student"}
            people={"Students of SS1A"}
            rowOnClick={onClick}
          />
        </section>
      </main>
    </section>
  )
}

const InfoLi = ({ title, content }) => {
  return (
    <li className="text-sm text-[#444444] flex items-center gap-5">
      <p className="w-[108px]">{title}</p>
      <p className="font-bold">{content}</p>
    </li>
  )
}

const columns = [
  {
    accessorKey: "s/n",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "student",
    header: "Student",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "assessment",
    header: "Assessment(30)",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "exam",
    header: "Exam(70)",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "total",
    header: "Total(100)",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "grade",
    header: "Grade",
    cell: (props) => <p>{props.getValue()}</p>,
    enableSorting: false,
  },
]


InfoLi.propTypes = {
    title: PropTypes.string,
    content: PropTypes.string,
  }