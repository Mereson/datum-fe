import { createStudent } from "../../../../api"
import { Dropdown, FormInput } from "../../../../components"
import { Button } from "../../../../components/button"
import { useCreateStudentForm } from "../../../../states/createStudentStore"
import { Link } from "react-router-dom"

export const AddStudents = () => {

  const { parentsFormData, studentsFormData, setStudentsFormData, addStudentForm, removeStudentForm, resetStudentForm } = useCreateStudentForm()

  const handleStudentFormInput = (e, index) => {
    let { name, value } = e.target
    const capitalizedValue = value.charAt(0).toUpperCase() + value.slice(1);

    setStudentsFormData(index, name, capitalizedValue)
  }

  const getStudentDropdownData = (index, name, capitalizedValue) => {
    setStudentsFormData(index, name, capitalizedValue)
  }


  // const handleFiles = (e, index) => {
  //   let files = e.target.files[0]
  //   let { name } = e.target
  //   setStudentsFormData(index, name, files)
  // }


  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      parentsFormData,
      studentsFormData,
    };

    const hasEmptyFields = checkEmptyFields(formData);

    if (!hasEmptyFields) {
      console.log(formData);
      const data = await createStudent(formData.parentsFormData, formData.studentsFormData)
      console.log(data)
      // resetStudentForm();
    }
  };
  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div>
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Students</h2>

        <div className="pt-[4.875rem] grid place-items-center">
          <div className="flex gap-[64px] relative">
            <hr className="h-[1.84px] bg-[#132984] w-[6.438rem] absolute  left-[26%] top-3" />
            <Link to={"/admin/studentsList/addParents"} className="grid place-items-center  gap-3">
              <p className=" border-[#8a8a8a] border-[1.47px] text-[13.26px]  text-[#8a8a8a] size-[29.46px] rounded-full grid place-items-center">
                1
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Parent Details
              </p>
            </Link>
            <div className="grid place-items-center  gap-3 ">
              <p className="bg-[#132985] text-[13.26px] size-[29.46px]  text-[#fff] rounded-full grid place-items-center  ">
                2
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Student Details
              </p>
            </div>
          </div>

        </div>

        {/* Div for the Personal information */}
        <form onSubmit={handleSubmit}>
          {studentsFormData.map((student, index) => (
            <div key={index}>
              <h1 className="text-[#696969] pt-[4.875rem] text-center  font-bold text-3xl">
                {`Student's`} Details
              </h1>
              <div className="pt-10 text-[#696969] ">
                <h4 className="font-extrabold text-xl text-[#696969]">
                  Personal Information
                </h4>

                <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                  <FormInput title={"Surname"} value={student.surName} name={"surName"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="First Name" value={student.firstName} name={"firstName"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="Other Name" value={student.otherName} name={"otherName"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="Date of Birth" value={student.dateOfBirth} name={"dateOfBirth"} onChange={(e) => handleStudentFormInput(e, index)} />

                  <Dropdown
                    id={1}
                    name={"Blood Group"}
                    query={"Select Blood Group"}
                    items={["O+", "O-", "B+", "A+", "A-"]}
                    dropDownName={"bloodGroup"}
                    setForm={(getStudentDropdownData)}
                    componentIndex={index}
                  />

                  <Dropdown
                    id={2}
                    name={"Gender"}
                    query={"Select Gender"}
                    items={["Male", "Female"]}
                    dropDownName={"gender"}
                    setForm={getStudentDropdownData}
                    componentIndex={index}
                  />
                </div>
              </div>

              < div className="pt-10 text-[#696969] " >
                <h4 className="font-extrabold text-xl text-[#696969]">
                  Contact Information
                </h4>
                <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                  <FormInput title="Nationality" value={student.nationality} name={"nationality"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="State of Origin" value={student.stateOfOrigin} name={"stateOfOrigin"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="Local Government of Origin" value={student.localGovernment} name={"localGovernment"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="Address" value={student.address} name={"address"} onChange={(e) => handleStudentFormInput(e, index)} />
                </div>
              </div>

              <div className="pt-10 text-[#696969] ">
                <h4 className="font-extrabold text-xl text-[#696969]">
                  School Information
                </h4>
                <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                  <FormInput title="Class" value={student.class} name={"class"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="Term" value={student.term} name={"term"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="Previous School" value={student.previousSchool} name={"previousSchool"} onChange={(e) => handleStudentFormInput(e, index)} />
                  <FormInput title="Picture" value={student.picture} name={"picture"} onChange={(e) => handleStudentFormInput(e, index)} />

                  {/* <div className="grid">
                    <label className="text-[#444] pb-1" htmlFor="First Name">
                      Picture
                    </label>
                    <input
                      type="file"
                      name="picture"
                      required
                      onChange={(e) => handleFiles(e, index)}
                    />
                  </div> */}

                </div>
              </div>
              {studentsFormData.length >= 2 && index > 0 ? (
                <div className="flex justify-end">
                  <Button
                    onClick={() => removeStudentForm(index)}
                    content="Remove Form"
                    className={
                      "bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
                    }
                  />
                </div>
              ) : ("")}
            </div>
          ))}

          <div className="flex items-center justify-between">

            <Button
              onClick={addStudentForm}
              content="Add Form"
              className={
                "bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
              }
            />


            <Button
              link={"/students/checkResults/resultAnalysis"}
              onClick={handleSubmit}
              content="Submit"
              className={
                "bg-[#132985] w-[100%] px-5 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
              }
            />
          </div>
        </form>
      </div >
    </section >
  )
}

function checkEmptyFields(obj) {
  let hasEmptyFields = false;

  const isEmpty = (value) => {
    if (value === null || value === "") {
      return true;
    }

    if (typeof value === "object" && value instanceof File && value.type.startsWith("image/")) {
      return false;
    }

    return false;
  };

  const traverse = (currentObj, path = "") => {
    for (const key in currentObj) {
      const fullPath = path ? `${path}.${key}` : key;

      if (typeof currentObj[key] === "object" && currentObj[key] !== null && !(currentObj[key] instanceof File)) {
        traverse(currentObj[key], fullPath);
      } else if (isEmpty(currentObj[key])) {
        console.log(`No value in the field: ${fullPath}`);
        hasEmptyFields = true;
      }
    }
  };

  traverse(obj);
  return hasEmptyFields;
}
