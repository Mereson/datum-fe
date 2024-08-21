import React from 'react'
import { Link } from 'react-router-dom'

export const AdminAcad = () => {
  return (
    <section className="w-full px-[5rem] bg-[#f4f4f4] pt-8 pb-14 overflow-auto">
      <main className='grid mt-9 grid-cols-3 gap-9'>
        <AcadCard text={"Attendance"} link={"/admin/academics/attendance"} />
        <AcadCard text={"Classes"} link={"/admin/academics/classes"} />
        <AcadCard text={"Events"} link={"/admin/academics/events"} />
        <AcadCard text={"Results"} link={"/admin/academics/result"} />
        <AcadCard text={"Scheme Of Work"} link={"/admin/academics/schemeOfWork"} />
        <AcadCard text={"Subjects"} link={"/admin/academics/subjects"} />
      </main>
    </section>
  )
}

const AcadCard = ({ text, link }) => {
  return (
    <Link to={link}>
      <div className='h-56 border-2 grid place-items-center rounded-2xl shadow-lg '>
        <h3 className='font-semibold text-xl text-[#0b132e]'>{text}</h3>
      </div>
    </Link>
  )
}