import './App.js';
import React, { Component } from 'react';
import { FiArrowRight } from "react-icons/fi";
import { FiArrowUpRight } from "react-icons/fi";
import { BsCircleHalf } from "react-icons/bs";

function header()
{

return (
<div className='bg-black'>
<div className='flex mr-[7%] mt-[3%] ml-[7%] bg-transparent w-min-screen h-[48px] '>
<div className='h-inherit w-[50%] text-white grid grid-cols-1'>
    <div className='headstyle'><a href="">Alex Watsell</a></div>
    <div className=" text-gray-500 font-['inter'] "><a href="">Selected works</a></div>
</div>
<div className='h-inherit w-[50%] grid grid-cols-3 '>
    <div className='headstyle  '><a href="">Work</a><FiArrowRight className='mt-[6px] ml-[3px]' /> </div>
    <div className='headstyle '><a href="">Linkedin</a><FiArrowUpRight className='mt-[6px] ml-[3px]'/></div>
    <div className='headstyle '> <BsCircleHalf className='mt-[4px] mr-[2px]'/><a href="">Light</a></div>
    <div className='headstyle  '> <a href="">About</a> <FiArrowRight className='mt-[6px] ml-[3px]' /></div>
    <div className='headstyle '> <a href="">Contact</a> <FiArrowRight className='mt-[6px] ml-[3px]' /></div>
     </div>
</div>
</div>
)
}
export default header;