import { NotificationSvg, TeacherHeroImg } from "../../../assets"
import { FormButton } from "../../../components"
// import { SearchBox } from "../../../components"

export const UploadResult = () => {
  return (
    <section className=" bg-[#f4f4f4] w-full overflow-auto pt-8 px-[6.25rem] pb-[9.563rem]">
      <div>
        {/* <div className="w-[70%]">
          <SearchBox />
        </div> */}

        <div className="flex gap-5 items-center justify-end">
          <div className="p-[12px] bg-[#EFEFEF] text-[17.57px] text-[#404040] font-bold rounded-[12.5px]">
            <img
              src={NotificationSvg}
              className="size-[20px]"
              alt="notification icon"
            />
          </div>
          <div className="flex gap-2 items-center">
            <figure className="size-[50px] rounded-full">
              <img className="rounded-full" src={TeacherHeroImg} alt="" />
            </figure>
            <div className="text-[15px]">
              <p className="font-bold">Ene Maria</p>
              <p>Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* This is the div for the upload result  */}
      <div>
        <FormButton
          type="submit"
          content="Upload result"
          className={
            "bg-[#132985] w-[20%] py-[8px] mt-8 text-center rounded-[8px] font-bold text-white cursor-pointer"
          }
        />
      </div>
      {/* <div>
        <div className="w-[40%]">
          <SearchBox />
        </div>
        <div>
          <Dropdown />
        </div>
      </div> */}
    </section>
  )
}
