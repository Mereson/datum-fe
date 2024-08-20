import Proptypes from "prop-types"
import { Dropdown } from "../../../../components"
import { Button } from "../../../../components/button"

export const AddParents = () => {
  return (
    <section className="px-[6.25rem] py-20 w-full bg-[#f4f4f4] overflow-auto ">
      <div>
        <h2 className="font-semibold text-3xl text-[#4f4f4f]">Add Students</h2>
        <div className="flex gap-12 pt-5 font-bold">
          <p className="text-[#0d1b59] underline underline-offset-8 ">
            Manually
          </p>
          <p className="text-[#8A8A8A]">Import CSV </p>
        </div>

        <div className="pt-10 grid place-items-center gap-12">
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
          <h1 className="text-[#696969] font-bold text-3xl">Parent Details</h1>

          <div className="flex gap-12 font-bold">
            <p className="text-[#8A8A8A]">Existing Parent</p>
            <p className="text-[#0d1b59] underline underline-offset-8 ">
              New Parent
            </p>
          </div>
        </div>

        <form className="pt-10 grid grid-cols-2 gap-x-12 gap-y-6">
          <FormInput title={"Surname"} />
          <FormInput title="First Name" />
          <FormInput title="Other Name" />
          <FormInput title="Email" />
          <FormInput title="Phone Number" />
          {/* <FormInput title="Relationship" /> */}

          <Dropdown
            id={1}
            name={"Relationship"}
            query={"Select Relationship"}
            items={["Father", "Mother", "Guardian"]}
          />
          <Button
            link={"/admin/studentsList/addStudents"}
            content="Next"
            className={
              "bg-[#132985] w-[30%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
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
