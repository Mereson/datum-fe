import { Formik, Form, FieldArray } from "formik";
import { useCreateStudentForm } from "../states/createStudentForm";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";
import FormDropdown from "./FormDropdown";
import Button from "./Button";
import FormButton from "./FormButton";

export const AddStudents = () => {
  const { studentsFormData, setStudentsFormData, addStudentForm, removeStudentForm } = useCreateStudentForm();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Updated studentsFormData:", studentsFormData);
  }, [studentsFormData]);

  const onSubmit = (values) => {
    setStudentsFormData(values.students);
    console.log("Submitted Values:", values);
    // navigate("/admin/studentsList")
  };

  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div>
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Students</h2>

        <div className="pt-[4.875rem] grid place-items-center">
          <div className="flex gap-[64px] relative">
            <hr className="h-[1.84px] bg-[#132984] w-[6.438rem] absolute left-[26%] top-3" />
            <Link to={"/admin/studentsList/addParents"} className="grid place-items-center gap-3">
              <p className="border-[#8a8a8a] border-[1.47px] text-[13.26px] text-[#8a8a8a] size-[29.46px] rounded-full grid place-items-center">
                1
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Parent Details
              </p>
            </Link>
            <div className="grid place-items-center gap-3">
              <p className="bg-[#132985] text-[13.26px] size-[29.46px] text-[#fff] rounded-full grid place-items-center">
                2
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Student Details
              </p>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            students: studentsFormData,
          }}
          validationSchema={studentDetailsSchema}
          onSubmit={onSubmit}
        >
          {({ values, handleChange }) => (
            <Form>
              <FieldArray name="students">
                {({ remove, push }) => (
                  <>
                    {values.students.map((student, index) => (
                      <div key={index}>
                        <h1 className="text-[#696969] pt-[4.875rem] text-center font-bold text-3xl">
                          {`Student's`} Details
                        </h1>
                        <div className="pt-10 text-[#696969]">
                          <h4 className="font-extrabold text-xl text-[#696969]">
                            Personal Information
                          </h4>
                          <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                            <CustomInput
                              label={"Surname"}
                              name={`students[${index}].surName`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"First Name"}
                              name={`students[${index}].firstName`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"Other Name"}
                              name={`students[${index}].otherName`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"Date of Birth"}
                              name={`students[${index}].dateOfBirth`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <FormDropdown
                              label={"Blood Group"}
                              name={`students[${index}].bloodGroup`}
                              options={["O+", "O-", "B+", "A+", "A-"]}
                              required={true}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="pt-10 text-[#696969]">
                          <h4 className="font-extrabold text-xl text-[#696969]">
                            Contact Information
                          </h4>
                          <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                            <CustomInput
                              label={"Nationality"}
                              name={`students[${index}].nationality`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"State of Origin"}
                              name={`students[${index}].stateofOrigin`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"Local Government of Origin"}
                              name={`students[${index}].localGovernment`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"Address"}
                              name={`students[${index}].address`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                          </div>
                        </div>

                        <div className="pt-10 text-[#696969]">
                          <h4 className="font-extrabold text-xl text-[#696969]">
                            School Information
                          </h4>
                          <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
                            <CustomInput
                              label={"Class"}
                              name={`students[${index}].class`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"Term"}
                              name={`students[${index}].term`}
                              type="text"
                              required={true}
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"Previous School"}
                              name={`students[${index}].previousSchool`}
                              type="text"
                              onChange={handleChange}
                            />
                            <CustomInput
                              label={"Picture"}
                              name={`students[${index}].picture`}
                              type="text"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        {values.students.length > 1 && index > 0 && (
                          <div className="flex justify-end">
                            <Button
                              onClick={() => remove(index)}
                              content="Remove Form"
                              className="bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="flex items-center justify-between">
                      <Button
                        onClick={() =>
                          push({
                            surName: "",
                            firstName: "",
                            otherName: "",
                            dateOfBirth: "",
                            bloodGroup: "",
                            nationality: "",
                            stateofOrigin: "",
                            localGovernment: "",
                            address: "",
                            class: "",
                            term: "",
                            previousSchool: "",
                            picture: "",
                          })
                        }
                        content="Add Form"
                        className="bg-[#132985] w-[100%] px-4 py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
                      />
                      <FormButton
                        type="submit"
                        content="Submit"
                        className="bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
                      />
                    </div>
                  </>
                )}
              </FieldArray>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};
