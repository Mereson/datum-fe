import { AdminProfileImg } from "../../../assets"

export const AdminIcon = () => {
  return (
    <div className="flex gap-5 items-center justify-end">
      <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]"></div>
      <div className="flex gap-2 items-center">
        <figure className="size-[50px] rounded-full">
          <img src={AdminProfileImg} alt="" />
        </figure>
        <div className="text-[15px]">
          <p className="font-bold">Nkechi Nduka</p>
          <p>Admin</p>
        </div>
      </div>
    </div>
  )
}
