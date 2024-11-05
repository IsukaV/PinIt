import React from 'react'

function Task({Data}) {

    console.log(Data)
  return (
    <div className="grid grid-cols-[92%,3%] gap-[5%] w-[400px] h-[150px] bg-[#ffffff] rounded-[15px] overflow-hidden">
        <div className='flex justify-between'>
            <div className='w-[60px]'>
            <img src="/assets/images/Starred.png" className="h-[21px] mt-[18px] cursor-pointer m-auto hover:h-[23px] hover:mt-[17px]"/>
            </div>
            
            <div className='w-[100%] pt-[18px] '>
                <div className='font-medium'>
                {Data.Heading}
                </div>
            </div>

        </div>
        <div className="bg-[#0C7DFF]">

        </div>
    </div>
  )
}

export default Task