// import styles from "./style.module.css";
// import { Dropdown } from "../../../../components"
// import { Button } from "../../../../components/button"

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
          <div className=""> Hola </div>
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
          <FormInput title="Relationship" />
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
