import React from 'react';
import { SearchBox } from '../../../components'
import {Timetable} from '../../../assets'
import styles from './styles.module.css'
import { TeacherAvater } from '../../../components/teachers/teacherAvater';

export const TeachersTimetable = () => {  
  return (
    <section className={`${styles.students_Container} bg-[#f4f4f4] overflow-auto`}>
      <div className={`${styles.timetable_header} px-[4rem] py-[1rem] flex items-center box-border`}>
        <div className="w-[50%] "></div>
        <div className="w-[50%]">
          <TeacherAvater/>
        </div>
      </div>
      <div className='px-[4rem] mt-4 text-[20px] font-bold'>My Timetable</div>
      <section className={`${styles.board_section} w-full`}>          
        <img src={Timetable} alt="" />
      </section>      
    </section>
  )
}

