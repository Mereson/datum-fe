import PropTypes from "prop-types"
import {
  AdminWelcomeElipse,
  AdminWelcomeStar,
  circlesStudents,
  SbEmojiWave,
} from "../../../../assets"

export const WelcomeBox = ({
  avatar,
  bg,
  admin = false,
  student = false,
  teacher = false,
}) => {
  return (
    <div className={`relative col-span-2 ${bg} pl-8 h-[142px] rounded-2xl`}>
      {admin && (
        <>
          <span className="flex gap-[16.5px] items-center pt-[30px] pb-[6px]">
            <h3 className="text-[27px] font-bold text-[#132985]">
              Hello Nkechi
            </h3>
            <SbEmojiWave />
          </span>
          <p className="text-sm text-[#1E1E1E] absolute z-20 font-semibold w-[432px]">
            Ready for a new term? Check your subjects, assignments, and
            schedule. We&apos;re here to help you succeed.
          </p>
          <img
            className="absolute bottom-0 right-[82.48px]"
            src={avatar}
            alt=""
          />
          <img
            className="absolute bottom-1 left-[297px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute left-[323px] top-[23px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute bottom-[17px] right-[17px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute top-0 right-[0]"
            src={AdminWelcomeElipse}
            alt="welcome page icon"
          />
          <img
            className="absolute bottom-0 size-[74px] opacity-90 left-[0px] rotate-[180deg]"
            src={AdminWelcomeElipse}
            alt="welcome page icon"
          />
        </>
      )}
      {teacher && (
        <>
          <span className="flex gap-[16.5px] items-center pt-[30px] pb-[6px]">
            <h3 className="text-[27px] font-bold text-[#ffffff]">
              Hello Chinyere
            </h3>
            <SbEmojiWave />
          </span>
          <p className="text-sm text-[#ffffff] absolute z-20 font-semibold w-[432px]">
            Ready to inspire and lead? {"Let's"} make this term amazing
            together! Check your schedule, update your plans, and dive in.
          </p>
          <img
            className="absolute bottom-0 right-[82.48px]"
            src={avatar}
            alt=""
          />
          <img
            className="absolute bottom-1 left-[297px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute left-[323px] top-[23px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute bottom-[17px] right-[17px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute top-0 right-[0]"
            src={AdminWelcomeElipse}
            alt="welcome page icon"
          />
          <img
            className="absolute bottom-0 size-[74px] opacity-90 left-[0px] rotate-[180deg]"
            src={AdminWelcomeElipse}
            alt="welcome page icon"
          />
        </>
      )}
      {student && (
        <>
          <span className="flex gap-[16.5px] items-center pt-[30px] pb-[6px]">
            <h3 className="text-[18px] font-medium text-[#ffff]">
              Welcome Back Ene Maria
            </h3>
            <SbEmojiWave w="36" h="34" />
          </span>
          <p className="text-sm text-[#ffff] absolute z-20 font-semibold w-[398px]">
            Ready for a new term? Check your subjects, assignments, and
            schedule. We&apos;re here to help you succeed.
          </p>
          <img className="absolute bottom-0 right-0" src={avatar} alt="" />
          <img
            className="absolute bottom-1 left-[383px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute left-[335px] top-[34px] size-[24px]"
            src={AdminWelcomeStar}
            alt="welcome page icon"
          />
          <img
            className="absolute left-[213px] bottom-[22.13px] opacity-50 size-[34px]"
            src={circlesStudents}
            alt="welcome page icon"
          />
          <img
            className="absolute top-0 right-[0]"
            src={AdminWelcomeElipse}
            alt="welcome page icon"
          />
          <img
            className="absolute bottom-0 size-[74px] opacity-90 left-[0px] rotate-[180deg]"
            src={AdminWelcomeElipse}
            alt="welcome page icon"
          />
        </>
      )}
    </div>
  )
}

WelcomeBox.propTypes = {
  avatar: PropTypes.string,
  bg: PropTypes.string,
  admin: PropTypes.bool,
  student: PropTypes.bool,
  teacher: PropTypes.bool,
}
