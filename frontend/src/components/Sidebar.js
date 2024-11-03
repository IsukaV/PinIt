import React from 'react'

function Sidebar() {
  return (
    <div className="h-screen pt-[20px]">
        <p className="text-center text-4xl text-[#377BFB]">PinIt</p>


        <div className="flex justify-between items-center w-[70%] mt-[50px] m-auto">
            <p className="text-[22px]">All Tasks</p>

            {/*Add symbol to add new Tasks*/}
            <div className="border border-[#377BFB] p-[5px] w-[35px] rounded-[10px] cursor-pointer hover:bg-[#F0F5FF]">
                <img src="/assets/images/Add.png" className="h-[18px] m-auto" alt="Description" />
            </div>
        </div>

        <div className="flex flex-col gap-1 items-center justify-center mt-[15px]">
            
            <div className="side-btn">
                <img src="/assets/images/Today.png" className="h-[25px] inline mr-[18px]"/>
                <p className="text-[18px] font-700 "> Today</p>
            </div>

            <div className="side-btn">
                <img src="/assets/images/Upcoming.png" className="h-[21px] inline mr-[18px]"/>
                <p className="text-[18px] font-700 "> Upcoming</p>
            </div>

            <div className="side-btn">
                <img src="/assets/images/Completed.png" className="h-[19px] inline mr-[18px]"/>
                <p className="text-[18px] font-700 "> Completed</p>
            </div>

            <div className="side-btn">
                <img src="/assets/images/Starred.png" className="h-[21px] inline mr-[18px]"/>
                <p className="text-[18px] font-700 "> Important</p>
            </div>
            
        </div>
        <div className="border-t  mt-[20px] pt-[20px]">
            <div className="flex justify-between items-center w-[70%] m-auto mb-[30px]">
                <p className="text-[22px]">Groups</p>

                {/*Add symbol to add new Tasks*/}
                <div className="border border-[#377BFB] p-[5px] w-[35px] rounded-[10px] cursor-pointer hover:bg-[#F0F5FF]">
                    <img src="/assets/images/Add.png" className="h-[18px] m-auto" alt="Description" />
                </div>
            </div>
            {/*Groups are displayed*/ }
            <div>
                <p className="text-center font-light text-gray-500">Not in groups yet</p>
            </div>
        </div>
        
    </div>
  )
}

export default Sidebar