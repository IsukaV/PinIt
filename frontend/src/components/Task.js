import React from 'react'

function Task({Data}) {

    console.log(Data)
  return (
    <div className="grid grid-cols-[97%,3%] w-[400px] h-[130px] bg-[#ffffff] rounded-[15px] overflow-hidden">
        <div className='flex justify-between'>
            <div className='w-[60px]'>
            <img src="/assets/images/Starred.png" className="h-[21px] mt-[18px] cursor-pointer m-auto hover:h-[23px] hover:mt-[17px]"/>
            </div>
            
            <div className='w-[69%] pt-[18px] '>
                <div className='font-medium break-words line-clamp-2'>
                {Data.Heading}
                </div>
                <div className='font-light text-[15px] pt-[10px]'>
                    {Data.Date}
                </div>
            </div>

            <div className='w-[60px]'>
            <img src="/assets/images/3dots.png" className="h-[21px] mt-[18px] cursor-pointer m-auto hover:h-[23px] hover:mt-[17px]"/>
            </div>

        </div>
        <div className="bg-[#0C7DFF]">

        </div>
    </div>
  )
}

export default Task