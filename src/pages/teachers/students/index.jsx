import React from 'react';
import { Activites, ActivitySection, CustomCalendar, SearchBox, StudentsAttendance, TableModel } from '../../../components'
import { SbEmojiWave, SchoolTeacher, HeroLady } from '../../../assets'
import styles from './styles.module.css'
import { data } from '../../../testData';

export const TeachersStudents = () => {

  const onClick = (value) => {
    console.log(value)
    alert(`Wecome ${value.firstName}`)
  }

  return (
    <section className={`${styles.students_Container} bg-[#f4f4f4] overflow-auto`}>
      <section className={`${styles.board_section} w-full`}>
              <TableModel
              myData={data}
              columns={columns}
              people={"Students"}
              searchValue={"firstName"}
              rowOnClick={onClick}
              >
                <h2 className='text-xl font-bold text-[#1e1e1e]'>Students List</h2>
              </TableModel>  
      </section>      
    </section>
  )
}

const Remark = ({getValue}) => {
  const item = getValue()
  const click = () => {
alert("How far")
  }
  return (
    <p onClick={click} className='px-5 py-[6px] rounded-lg bg-[#D0D4E7] text-[#132985] text-sm'>{item}</p>
  )
}

const columns = [
  {
    accessorKey: "regNo",
    header: "Reg No",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "surname",
    header: "Surname",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "otherName",
    header: "Other Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "class",
    header: "Class",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "regDate",
    header: "Remarks",
    // cell: (props) => <p>{props.getValue()}</p>,
    cell: Remark,
  },
]
