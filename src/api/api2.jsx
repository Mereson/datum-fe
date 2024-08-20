
import { useCreateStudentForm } from "../states/createStudentStore"
import styles from "./style.module.css"

const Api2 = () => {

  const { parent, students, setStudentData, addStudent, removeStudent, resetForm } = useCreateStudentForm()


  const handleInput = (e, index) => {
    let { name, value } = e.target
    value = value.slice(0, 1).toUpperCase() + value.slice(1, value.length)
    setStudentData(index, name, value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      parent,
      students
    }
    console.log(formData)
    resetForm()
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.apiForm} grid gap-3`}>

      <div>
        {students.map((student, index) => (
          <div className="pt-6" key={index}>
            <div>
              <label htmlFor="surname">Surname</label>
              <input type="text" name="surName" value={student.surName} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label htmlFor="first name">First Name</label>
              <input type="text" name="firstName" value={student.firstName} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label htmlFor="Other Name">Other Name</label>
              <input type="text" name="otherName" value={student.otherName} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Date of Birth</label>
              <input type="text" name="dateOfBirth" placeholder="yyyy-mm-dd" value={student.dateOfBirth} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Blood Group</label>
              <input type="text" name="bloodGroup" value={student.bloodGroup} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Gender</label>
              <input type="text" name="gender" value={student.gender} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Nationality</label>
              <input type="text" name="nationality" value={student.nationality} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >State of Origin</label>
              <input type="text" name="stateOfOrigin" value={student.stateOfOrigin} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Local Government</label>
              <input type="text" name="localGovernment" value={student.localGovernment} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Address</label>
              <input type="text" name="address" value={student.address} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Enrollment Date</label>
              <input type="text" name="enrollmentDate" placeholder="yyyy-mm-dd" value={student.enrollmentDate} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Class</label>
              <input type="text" name="class" value={student.class} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Term</label>
              <input type="text" name="term" value={student.term} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Picture</label>
              <input type="text" name="picture" value={student.picture} onChange={(e) => handleInput(e, index)} />
            </div>
            <div>
              <label >Previous School</label>
              <input type="text" name="previousSchool" value={student.previousSchool} onChange={(e) => handleInput(e, index)} />
            </div>
          
            <div className="p-3 bg-amber-700 w-56" onClick={() => addStudent()}>Add New Student</div>
          </div>

        ))}
        <div className="p-3 bg-amber-700 w-56" onClick={() => addStudent()}>Add New Student</div>

        <button type="submit" >Submit</button>
      </div>
    </form>
  );
}

export default Api2