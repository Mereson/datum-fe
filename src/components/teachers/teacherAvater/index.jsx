import React from 'react'
import { PiBellLight } from "react-icons/pi";
import { Teacher2} from '../../../assets'

export const TeacherAvater = () => {
  return (
    <div className="flex justify-end text-[20px] p-2 box-border gap-4">
        <div className='box-border h-8 p-2 bg-[#ECECEC] rounded-lg grid items-center'><PiBellLight/></div>
        <div className='flex gap-2'>
        <img src={Teacher2} alt="" className='h-8'/>
        <div className='text-[12px]'>
            <p className='font-bold'>Nkechi Nduka</p>
            <p>Admin</p>              
        </div>
        </div>
    </div>
  )
}
