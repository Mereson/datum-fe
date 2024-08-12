import React, {useState} from 'react'
import { Link, NavLink } from "react-router-dom"
import styles from './styles.module.css'
import { DatumLogo } from "../../../assets"
import { FiMenu } from "react-icons/fi";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className={styles.datumnavbar}>
      <div className={styles.brand}><img src={DatumLogo} alt=""/></div>
      
      <div>        
        <FiMenu 
          className={styles.menu}
          onClick={() => {
              setMenuOpen(!menuOpen) 
          }}        
        />
      </div>

      <nav className={styles.datumnavs}>        
        <ul className={menuOpen ? `${styles.open}` : '' }>
          <li>
            <NavLink 
              to = '/'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              Home
            </NavLink> 
          </li>
          <li>
            <Link 
              to = '/#aboutus'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              About Us
            </Link>
          </li>
          <li>
            <Link 
              to = '/#services'
              onClick={() => {
                  setMenuOpen(!menuOpen) 
              }}
            >
              Service
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
