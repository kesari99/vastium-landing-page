import { Ellipsis } from 'lucide-react'
import React from 'react'

const ScheduleCard
 = ({title, time}) => {
  return (
    <div className='flex justify-between p-2 border-[0.5px] bg-[#FAFAFA] w-full rounded mb-2'>
    <div className='flex items-center justify-between'> 
        <div className='flex flex-col items-start gap-[6px]'>
            <h1 className='text-[16px] leading-[24px] font-400 '>{title}</h1>
            <p className='text-[10px] text-[#686868] leading-[14px] font-[400] '> {time}</p>

        </div>

    </div>

    <Ellipsis className='h-5 w-5 text-[#686868]' />

</div>
  )
}

export default ScheduleCard
