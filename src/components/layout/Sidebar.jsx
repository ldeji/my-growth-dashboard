import React from 'react'
import { RiDashboardFill } from "react-icons/ri";
import { IoCalendarOutline } from "react-icons/io5";
import { GrTask } from "react-icons/gr";
import { FcStatistics } from "react-icons/fc";
import { IoDocumentTextOutline } from "react-icons/io5";
import { RiSlackFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import { BsPlugin } from "react-icons/bs";
import { RiSeoLine } from "react-icons/ri";
import { SiGooglemarketingplatform } from "react-icons/si";
import { CiSettings } from "react-icons/ci";
import reactLogo from '../../assets/react.svg'



const Sidebar = () => {
    return (
       <>
       <div className="bg-white p-4 rounded-3xl flex flex-col gap-4 md:w-60 w-full">
        <div className='flex flex-row justify-center items-center gap-2 mt-6 mb-8'>
            <img src={reactLogo} alt="logo" className="w-7 h-7" />
           <h1 className='text-lg font-bold'>Growth</h1> 
        </div>
        
        <div>
            <p className="bg-black flex justify-center items-center gap-1 rounded-lg text-sm text-white px-4 py-2">
                <RiDashboardFill className="text-base" />
                Dashboard
            </p>

            <ul className='mt-4 flex flex-col gap-2 text-xs font-bold text-gray-900'>
                <li className='flex flex-row justify-center items-center gap-2'><IoCalendarOutline />Calendar</li>
                <li className='flex flex-row justify-center items-center gap-2'><GrTask />My tasks</li>
                <li className='flex flex-row justify-center items-center gap-2'><FcStatistics />My Statics</li>
                <li className='flex flex-row justify-center items-center gap-2'><IoDocumentTextOutline />Document</li>   
            </ul>
        </div>
        
        <div className='flex flex-col gap-2'>
            <p className='text-sm justify-start p-2 font-semibold'>INTEGRATION</p>
            <li className='flex flex-row justify-center text-xs text-gray-900 font-bold gap-1'><RiSlackFill />My Slack</li>
            <li className='flex flex-row justify-center text-xs text-gray-900 font-bold gap-1'><BsDiscord />Discord</li>
            <li className='flex flex-row justify-center text-xs text-gray-900 font-bold gap-2'><BsPlugin />Plugin</li>
        </div>

        <div className='flex flex-col gap-2'> 
            <p className='flex flex-row justify-start p-2 text-sm font-semibold'>TEAMS</p>
            <h3 className='flex flex-row justify-center text-xs text-gray-900 font-bold gap-2'><RiSeoLine />Seo-Op</h3>
            <h3 className='flex flex-row justify-center text-xs text-gray-900 font-bold gap-2'><SiGooglemarketingplatform />Search</h3>
            <h3 className='flex flex-row justify-center text-xs text-gray-900 font-bold gap-2'><CiSettings />Setting</h3>
        </div>
       </div>
       </>
    )
}

export default Sidebar