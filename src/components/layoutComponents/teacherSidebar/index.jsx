import React, {useState} from 'react'
import style from './styles.module.css'
import { Link } from "react-router-dom"
import { datumLogoWhite } from "../../../assets/icons/teacherSidebar"
import { SidebarNavItem } from "../sidebarNav"
import { IoMdMenu } from "react-icons/io";
import { ParentsIcon, SbAttendance, SbHome, SbLogout, StudentIcon, TeachersIcon } from "../../../assets"

export const TeacherSidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  
  return (
    <nav> 
      <div className={style.brand}>
        <Link className="pt-8 flex items-center gap-1 pb-20" to={"/"}>
          <img
            src={datumLogoWhite}
            className="h-[23px] w-[120]"
            alt="datum logo"
          />
        </Link>
      </div>

      <div className={style.menu}>
        <IoMdMenu               
          onClick={() => {
              setMenuOpen(!menuOpen) 
          }}
        />
      </div> 
      
      <div className={menuOpen ? '' : `${style.open}` }>
        <aside className={`${style.side_navbar}`}>
          <div>  
            <div>
              <div className="flex flex-col w-full ">
                <div
                  onClick={() => {
                    setMenuOpen(!menuOpen) 
                  }}
                >
                  <SidebarNavItem
                    to="/teacher/dashboard"
                    Icon={SbHome}
                    label={"Dashboard"}                  
                  />
                </div>

                <div
                  onClick={() => {
                    setMenuOpen(!menuOpen) 
                  }}
                >
                  <SidebarNavItem
                    to={"/teacher/students"}
                    Icon={StudentIcon}
                    label={"Students"}
                    
                  />
                </div>

                <div
                  onClick={() => {
                    setMenuOpen(!menuOpen) 
                  }}
                >
                  <SidebarNavItem
                    to={"/teacher/attendance"}
                    Icon={SbAttendance}
                    label={"Attendance"}                    
                  />
                </div>

                <div
                  onClick={() => {
                    setMenuOpen(!menuOpen) 
                  }}
                >
                  <SidebarNavItem
                    to={"/teacher/timetable"}
                    Icon={TeachersIcon}
                    label={"Timetable"}                   
                  />
                </div>

                <div
                  onClick={() => {
                    setMenuOpen(!menuOpen) 
                  }}
                >
                  <SidebarNavItem
                    to={"/teacher/schemeOfWork"}
                    Icon={ParentsIcon}
                    label={"Scheme Of Work"}                    
                  />    
                </div> 

              </div>
            </div>

            <hr className="" />

            <div className="pt-11">
              <SidebarNavItem to={"/"} Icon={SbLogout} label="Log out" />
            </div>
          </div>          
        </aside> 
      </div>     
    </nav>
  )
}
