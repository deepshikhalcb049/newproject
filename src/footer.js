import './App.css'
import { FiArrowRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

function footer()
{
return (
    <div className=' mr-[5%] mt-[3%] ml-[5%] mb-[4%] grid grid-cols-4 gap-0 font-light ' >
        <div>
<p className='flex text-white '><FiArrowUp className='mt-[4px] mr-[6px]' /><a href="">Top</a></p>
        </div>
        <div>
<p className='flex text-white  '><a href="">Colophon</a><FiArrowRight className='mt-[6px] ml-[3px]' /></p>
        </div>
        <div>
<p className='text-gray-600 '>Work © respective clients/agencies</p>
        </div>
        <div >
<p className='text-gray-600 '>© 2005 – 2023/♡ v5.0</p>
        </div>

    </div>
)
}
export default footer;