import React , {useState} from 'react'

function Navbar() {
    const [inputValue, setInputValue] = useState('');
  return (
    <div className="absolute flex justify-between items-center pl-[70px] pr-[70px] top-0 w-[100%] bg-[#3A7FFF] h-[70px] ">

        {/*Search bar */}
        <div className="flex items-center bg-[#ffffff] h-[70%] rounded-[10px] ">
            <input
                    type="text"
                    id="search-task"
                    placeholder='Search Task'
                    value={inputValue} // Bind the input value to the state
                    // onChange={handleInputChange} // Handle input changes
                    className="font-light rounded-[10px] p-3 " // Tailwind CSS classes for styling
                />
            <div className="w-[40px] flex justify-center">
                <img src="/assets/images/Search.png" className="h-[22px]"/>
            </div>
        </div>


        {/*Profile and Notifications*/}
        <div className="flex items-center w-[180px] justify-around">
            <div className="w-[300px] borde">
                <img src="assets/images/WhiteNotify.png" className="h-[30px] hover:h-[33px] m-auto cursor-pointer" />
            </div>
            <div className='flex items-center gap-1.5'>
                <div className="profile-pic ">
                    <img src="assets/images/DefaultPic.png" className="h-[45px] w-[70px]"/>
                </div>
                <p className="text-[#ffffff] text-xl font-light">Isuka</p>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar