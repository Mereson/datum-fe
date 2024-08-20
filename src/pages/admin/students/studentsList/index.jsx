import { Button } from "../../../../components/button"

export const StudentsList = () => {
  return (
    <div>
      <Button
        link={"/admin/studentsList/addParents"}
        content="Next"
        className={
          "bg-[#132985] w-[100%] py-[8px] mt-9 text-center rounded-[8px] font-bold text-white cursor-pointer"
        }
      />
    </div>
  )
}
