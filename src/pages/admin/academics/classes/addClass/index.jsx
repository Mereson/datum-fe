import { useState } from "react"
import { FormInput } from "../../../../../components"
import { Button } from "../../../../../components/button"

export const AdminAddClass = () => {
  const [tiers, setTiers] = useState("")
  const [inputs, setInputs] = useState([])

  const handleInput = (e) => {
    const count = parseInt(e.target.value, 10) || 0;
    setTiers(count)

    const newInputs = Array(count).fill('');
    setInputs(newInputs);
  }

  return (
    <section className="w-full flex px-[6.5rem] bg-[#f4f4f4] pt-20 pb-14 overflow-auto">
      <main className="w-full">
        <h2 className="font-semibold text-3xl text-[#4F4F4F]">Add Class</h2>
        <form className="grid grid-cols-2  mt-12 gap-y-6 gap-x-12">
          <FormInput title="Class Name" />
          <div className="grid">
            <label className="text-[#444] pb-1" >
              Number of Tiers
            </label>
            <input
              className="h-11 rounded-lg border-[0.5px] border-[#a7a7a7] px-1 bg-[#f4f4f4]"
              type="text"
              id="name"
              name="name"
              required
              value={tiers}
              onChange={handleInput}
            />
          </div>
          {tiers <= 5 ? (
            inputs.map((input, index) => (
              <FormInput key={index} title={`Tier ${index + 1}`} />
            ))
          ) : (
            <p className="text-[#6270AE] pb-4">You cannot make more than 5 tiers at a go</p>
          )}
          <div className="col-span-2 flex gap-6">
            <Button
              content={"Save"}
              className={
                "bg-[#132985] w-[6.33rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-white cursor-pointer"
              }
            />
            <Button
            link={"/admin/academics/classes"}
              content={"Cancel"}
              className={
                "bg-[#D0D4E7] w-[6.33rem] py-3 flex justify-center text-center rounded-[8px] font-bold text-[#132985] cursor-pointer"
              }
            />
          </div>
        </form>
      </main>
    </section>
  )
}