import React, { useState } from 'react';
import Task from './Task';

function Today() {
  const [date] = useState(new Date());

  const data={
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
      <div className="flex justify-between">
        <div>
          <p className="text-[40px]">Today,</p>
          <p  className="font-light ml-1">{formattedDate}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between mt-[40px]">
        <Task Data={data}/>
        <Task Data={data}/>
        <Task Data={data}/>
      </div>
    </div>
  );
}

export default Today;