import './App.css'
import { FiArrowRight } from "react-icons/fi";
import { FiArrowUp } from "react-icons/fi";

function footer()
{
return (
    <div className='mr-[7%] mt-[3%] ml-[7%] mb-[4%] grid grid-cols-4 gap-4 font-light'>
        <div>
<p className='text-white flex'><FiArrowUp className='mt-[4px] mr-[3px]' /><a href="">Top</a></p>
        </div>
        <div>
<p className='text-white flex'><a href="">Colophon</a><FiArrowRight className='mt-[6px] ml-[3px]' /></p>
        </div>
        <div>
<p className='text-gray-600'>Work © respective clients/agencies <br />© 2005 – 2023/♡ v5.0</p>
        </div>
        <div className='ml-8'>
<p className='text-gray-600'></p>
        </div>

    </div>
)
}
export default footer;