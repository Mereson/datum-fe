import Proptypes from "prop-types"
import { Dropdown } from "../../../../components"
import { Button } from "../../../../components/button"

export const AddStudents = () => {
  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div>
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Students</h2>

        <div className="pt-[4.875rem] grid place-items-center">
          <div className="flex gap-[64px] relative">
            <hr className="h-[1.84px] bg-[#132984] w-[6.438rem] absolute  left-[26%] top-3" />
            <div className="grid place-items-center  gap-3">
              <p className="bg-[#132985] text-[13.26px] text-[#fff] size-[29.46px] rounded-full grid place-items-center">
                1
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Parent Details
              </p>
            </div>
            <div className="grid place-items-center  gap-3 ">
              <p className="text-[13.26px] text-[#8a8a8a] size-[29.46px] rounded-full grid place-items-center border-[#8a8a8a] border-[1.47px]">
                2
              </p>
              <p className="text-[#444] font-semibold text-[11.05px]">
                Student Details
              </p>
            </div>
          </div>
          <h1 className="text-[#696969] pt-[4.875rem] font-bold text-3xl">
            {`Student's`} Details
          </h1>
        </div>

        {/* Div for the Personal information */}
        <form>
          <div className="pt-10 text-[#696969] ">
            <h4 className="font-extrabold text-xl text-[#696969]">
              Personal Information
            </h4>

            <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
              <FormInput title={"Surname"} />
              <FormInput title="First Name" />
              <FormInput title="Other Name" />
              <FormInput title="Date of Birth" />

              <Dropdown
                id={1}
                name={"Blood Group"}
                query={"Select Blood Group"}
                items={["O+", "O-", "B+", "A+", "A-"]}
              />

              <Dropdown
                id={2}
                name={"Gender"}
                query={"Select Gender"}
                items={["Male", "Female"]}
              />
            </div>
          </div>

          {/* div for the contact information*/}
          <div className="pt-10 text-[#696969] ">
            <h4 className="font-extrabold text-xl text-[#696969]">
              Contact Information
            </h4>
            <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
              <FormInput title="Nationality" />
              <FormInput title="State of Origin" />
              <FormInput title="Local Government of Origin" />
              <FormInput title="Address" />
            </div>
          </div>

          {/* This is the div for school information  */}
          <div className="pt-10 text-[#696969] ">
            <h4 className="font-extrabold text-xl text-[#696969]">
              School Information
            </h4>
            <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
              <FormInput title="Class" />
              <FormInput title="Term" />
              <FormInput title="Previous School" />
            </div>
          </div>

          <Button
            link={"/students/checkResults/resultAnalysis"}
            content="Submit"
            className={
              "bg-[#132985] w-[15%] py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
            }
          />
        </form>
      </div>
    </section>
  )
}

const FormInput = ({ title = "Name" }) => {
  return (
    <div className="grid">
      <label className="text-[#444] pb-1" htmlFor="First Name">
        {title}
      </label>
      <input
        className="h-11 rounded-lg border-[0.5px] border-[#a7a7a7] px-1 bg-[#f4f4f4]"
        type="text"
        id="name"
        name="name"
        required
      />
    </div>
  )
}

FormInput.propTypes = {
  title: Proptypes.string,
}