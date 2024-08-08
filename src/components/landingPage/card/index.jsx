import { Engagement } from "../../../assets"

export const Card = ({ icon, title, text }) => {
  return (
    <div className="py-16 px-6 bg-[#ececec] w-[304px] rounded-xl flex flex-col items-center gap-6">
      <img src={icon} className="w-[90px]" alt="Card icon" />
      <h4 className="text-center font-semibold text-2xl"> {title} </h4>
      <p className="font-normal text-base">{text}</p>
    </div>
  )
}

{
  /* <img src={icon} alt="Card icon" />
      <h4>{title}</h4>
      <p>{text}</p> */
}
