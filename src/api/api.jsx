import { Link, useNavigate } from "react-router-dom"
import styles from "./style.module.css"
import { useCreateStudentForm } from "../states/createStudentStore"
import { useState } from "react"

const Api = () => {

  const {parent, setParentsData, resetStudentForm} = useCreateStudentForm()


  const handleInput = (e) => {
    let { name, value } = e.target
    value = value.slice(0, 1).toUpperCase() + value.slice(1, value.length)
    setParentsData(name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(parent)
    resetStudentForm()
  }

  return (
    <form className={`${styles.apiForm} grid gap-3`}>
      <div>
        <label htmlFor="<surname">Surname</label>
        <input type="text" name="surName" id="1" value={parent.surName} onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="<first name">First Name</label>
        <input type="text" name="firstName" id="2" value={parent.firstName} onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="<other name">Other Name</label>
        <input type="text" name="otherName" id="3" value={parent.otherName} onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="<other name">Email</label>
        <input type="text" name="email" id="4" value={parent.email} onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="<other name">Phone Number</label>
        <input type="text" name="phoneNumber" id="5" value={parent.phoneNumber} onChange={handleInput} />
      </div>
      <div>
        <label htmlFor="<other name">Relationship</label>
        <input type="text" name="relationship" id="6" value={parent.relationship} onChange={handleInput} />
      </div>

      <Link to={"/testApi2"} >
        <button>Next</button>
      </Link>
    </form>
  )
}

export default Api