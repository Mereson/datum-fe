import { SbEmojiWave } from "../../../../assets"


export const WelcomeBox = () => {
  return (
    <div className="col-span-2 mb-8 bg-[#132985] pl-7 w-[634px] h-[147px] rounded-2xl">
      <span className="flex gap-9 items-center pt-[15px] pb-[19px]">
        <h3 className="text-lg font-bold text-white">Welcome Back Ene Maria</h3>
        <SbEmojiWave />
      </span>
      <p className="text-sm text-white font-normal w-[432px]">
        Ready for a new term? Check your subjects, assignments, and schedule.
        We&apos;re here to help you succeed.
      </p>
    </div>
  )
}
