import { Ellipsis, Pin } from 'lucide-react'
import React from 'react'

const AnnouncmentCard = ({title, time}) => {

  return (
    <div className='flex justify-between p-5 border-[0.5px] bg-[#FAFAFA] w-full rounded mb-2'>
    <div className='flex items-center justify-between'> 
        <div className='flex flex-col items-start gap-[6px]'>
            <h1 className='text-[18px] leading-[24px] font-400 '>{title}</h1>
            <p className='text-[10px] text-[#686868] leading-[14px] font-[400] '>yesterday {time}</p>

        </div>

    </div>
    <div className='flex items-center gap-[25px]'>
        <Pin className='h-5 w-5 text-[#686868]' />
        <Ellipsis className='h-5 w-5 text-[#686868]' />
    </div>

   

</div>
    
  )
}

export default AnnouncmentCard