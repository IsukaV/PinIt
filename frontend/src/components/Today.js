import React, { useState } from 'react';
import Task from './Task';

function Today() {
  const [date] = useState(new Date());

  const data={
    Heading: "Design the task comonents comonents comonents comonents qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq",
    Date: '12-43-23'
  }
  const data1={
    Heading: "Design the task comonents",
    Date: '12-43-23'
  }
  const formattedDate = new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  }).format(date);

  return (
    <div className='p-[40px] '>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-[40px]">Today,</p>
          <p  className="font-light ml-1">{formattedDate}</p>
        </div>

        <div className='bg-[#ffffff] w-[370px] h-[70px] flex justify-around rounded-[20px]'>
          <div className='flex gap-[20px] items-center'>
            <div className='bg-[#0C7DFF] w-[30px] h-[30px] rounded-[5px]'></div>
            <p className=''>Personal</p>
          </div>

          <div className='flex gap-[20px] items-center'>
            <div className='bg-[#F4A105] w-[30px] h-[30px] rounded-[5px]'></div>
            <p className=''>Group</p>
          </div>

        </div>
      </div>
      <div className="flex flex-row justify-between mt-[40px]">
        <Task Data={data}/>
        <Task Data={data1}/>
        <Task Data={data}/>
      </div>
    </div>
  );
}

export default Today;