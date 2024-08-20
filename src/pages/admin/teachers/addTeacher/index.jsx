import Proptypes from "prop-types"
import { Dropdown } from "../../../../components"
import { Button } from "../../../../components/button"

export const AddTeacher = () => {
  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div>
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Teacher</h2>

        <div className="pt-[55px] grid place-items-center">
          <h1 className="text-[#696969] font-bold text-3xl">
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
                name={"Gender"}
                query={"Select Gender"}
                items={["Male", "Female"]}
              />

              <Dropdown
                id={2}
                name={"Blood Group"}
                query={"Select Blood Group"}
                items={["O+", "O-", "B+", "A+", "A-"]}
              />
            </div>
          </div>

          {/* This is the div for Educational Background */}
          <div className="pt-10 text-[#696969] ">
            <h4 className="font-extrabold text-xl text-[#696969]">
              Education Background
            </h4>
            <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
              <Dropdown
                id={3}
                name={"Qualification"}
                query={"Select Qualification"}
                items={[
                  "SSCE/NECO",
                  "HND/Bachelor's Degree",
                  "Master's Degree",
                  "PHD",
                ]}
              />

              <Dropdown
                id={4}
                name={"Grade Level"}
                query={"Select Grade Level"}
                items={[
                  "04",
                  "05",
                  "06",
                  "07",
                  "08",
                  "09",
                  "10",
                  "12",
                  "13",
                  "14",
                  "15",
                  "16",
                ]}
              />

              <Dropdown
                id={5}
                name={"Step"}
                query={"Select Step"}
                items={["01", "02", "03", "04", "05", "06"]}
              />

              <FormInput title="Employment Date" />
            </div>
          </div>

          {/* div for the contact information*/}
          <div className="pt-10 text-[#696969] ">
            <h4 className="font-extrabold text-xl text-[#696969]">
              Contact Information
            </h4>
            <div className="pt-4 grid grid-cols-2 gap-x-12 gap-y-6">
              <FormInput title="Phone Number" />
              <FormInput title="Email" />
              <FormInput title="Nationality" />
              <FormInput title="State of Origin" />
              <FormInput title="Local Government of Origin" />
              <FormInput title="Address" />
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

// <Dropdown
//   id={7}
//   name={"State of Origin"}
//   query={"Select state of origin"}
//   items={[
//     "Abia",
//     "Abuja",
//     "Adamawa",
//     "Akwa Ibom",
//     "Anambra",
//     "Bauchi",
//     "Bayelsa",
//     "Benue",
//     "Borno",
//     "Cross River",
//     "Delta",
//     "Ebonyi",
//     "Edo",
//     "Ekiti",
//     "Enugu",
//     "Gombe",
//     "Imo",
//     "Jigawa",
//     "Kaduna",
//     "Kano",
//     "Kastina",
//     "Kebbi",
//     "Kogi",
//     "Kwara",
//     "Lagos",
//     "Nassarawa",
//     "Niger",
//     "Ogun",
//     "Ondo",
//     "Osun",
//     "Oyo",
//     "Plateau",
//     "Rivers",
//     "Sokoto",
//     "Taraba",
//     "Yobe",
//     "Zamfara",
//   ]}
// />
