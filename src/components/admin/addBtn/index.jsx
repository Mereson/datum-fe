import { FaPlus } from "react-icons/fa6"

export const AddBtn = ({ text }) => {
  return (
    <div className="flex gap-2 items-center">
      <FaPlus />
      <p className="font-bold">{text}</p>
    </div>
  )
}