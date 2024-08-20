import { Button } from "../../../../components/button"

export const StudentsList = () => {
  return (
    <div className="w-full">
      <Button
        link={"/admin/studentsList/addParents"}
        content="Next"
        className={
          "bg-[#132985] w-[30%] py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
        }
      />
    </div>
  )
}
