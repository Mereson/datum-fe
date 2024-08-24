import { Formik, Form, FieldArray } from "formik";
import { useNavigate } from "react-router-dom";
import { studentDetailsSchema } from "./validationSchema";
import { useEffect } from "react";
import { CustomInput, FormButton, FormDropdown } from "../components";
import { Button } from "../components/button";
import { useCreateStudentForm } from "../states/createStudentStore";

export const Dump = () => {
  const { parentsFormData, studentsFormData, setStudentsFormData } = useCreateStudentForm();
  const navigate = useNavigate();

  // useEffect(() => {
  //   console.log("Updated studentsFormData:", studentsFormData);
  //   console.log("Updated parentsFormData:", parentsFormData);
  // }, [studentsFormData]);

  const onSubmit = (values) => {
    console.log("About to console");

    values.students.forEach((student, index) => {
      Object.keys(student).forEach((field) => {
        setStudentsFormData(index, field, student[field]);
      });
    });

    console.log("Submitted Values:", values);
    // navigate("/admin/studentsList")
  };

  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">

      <Formik
        initialValues={{
          students: studentsFormData,
        }}
        validationSchema={studentDetailsSchema}
        onSubmit={onSubmit}
      >
        {({ values, errors }) => (
          <Form>
            <div>
              {Object.keys(errors.students || {}).map((studentIndex) => (
                <div key={studentIndex}>
                  {Object.keys(errors.students[studentIndex] || {}).map((field) => (
                    <div key={field}>
                      {errors.students[studentIndex][field]}
                    </div>
                  ))}
                </div>
              ))}
            </div>
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
                          />
                          <CustomInput
                            label={"First Name"}
                            name={`students[${index}].firstName`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"Other Name"}
                            name={`students[${index}].otherName`}
                            type="text"
                            optionalMessage="Optional"
                          />
                          <CustomInput
                            label={"Date of Birth"}
                            name={`students[${index}].dateOfBirth`}
                            type="text"
                            required={true}
                          />
                          <FormDropdown
                            label={"Blood Group"}
                            name={`students[${index}].bloodGroup`}
                            options={["O+", "O-", "B+", "A+", "A-"]}
                            required={true}
                          />
                          <FormDropdown
                            label={"Gender"}
                            name={`students[${index}].gender`}
                            options={["Male", "Female"]}
                            required={true}
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
                          />
                          <CustomInput
                            label={"State of Origin"}
                            name={`students[${index}].stateOfOrigin`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"Local Government of Origin"}
                            name={`students[${index}].localGovernment`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"Address"}
                            name={`students[${index}].address`}
                            type="text"
                            required={true}
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
                          />
                          <CustomInput
                            label={"Term"}
                            name={`students[${index}].term`}
                            type="text"
                            required={true}
                          />
                          <CustomInput
                            label={"Previous School"}
                            name={`students[${index}].previousSchool`}
                            type="text"
                            optionalMessage="Optional"
                          />
                          <CustomInput
                            label={"Picture"}
                            name={`students[${index}].picture`}
                            type="text"
                            optionalMessage="Optional"
                          />
                        </div>
                      </div>
                      {values.students.length > 1 && index > 0 && (
                        <div className="flex justify-end">
                          <Button
                            onClick={() => remove(index)}
                            // onClick={onClick}
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

    </section>
  );
};


