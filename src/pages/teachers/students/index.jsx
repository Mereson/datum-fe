import React from 'react';
import { Activites, ActivitySection, CustomCalendar, SearchBox, StudentsAttendance } from '../../../components'
import { SbEmojiWave, SchoolTeacher, HeroLady } from '../../../assets'
import styles from './styles.module.css'

export const TeachersStudents = () => {
  return (
    <section className={styles.students_Container}>
      <section className={styles.board_section}>
        <div className={styles.search}><SearchBox /></div>
        <div className={styles.filter}>
          <p>Filter by:</p> 
          <button>Class</button> 
          <button>Class</button> 
          <button>Class</button> 
        </div>             
      </section>      
    </section>
  )
}