import React from 'react'
import { ActivitySection } from '../../../components'
import { SchoolTeacher } from '../../../assets'

export const TeachersDashboard = () => {
  return (
    <section className="flex w-[100%] h-[100%] bg-[#f4f4f4] justify-between">
      <section
        className={`overflow-auto pr-[75px] pl-[86px] col-span-3 grid grid-cols-2 gap-3 w-[71%]`}
      ></section>

      <ActivitySection img={SchoolTeacher} />
    </section>
  )
}