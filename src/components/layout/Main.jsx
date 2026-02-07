import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotificationsOutline } from "react-icons/io";
import LateefLogo from '../../assets/passport.jpg';
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiCirclesThree } from "react-icons/pi";
import { FaBarsProgress } from "react-icons/fa6";
import { MdOutlineOfflinePin } from "react-icons/md";
import { RiProgress8Line } from "react-icons/ri";
import { FaSpinner } from "react-icons/fa";
import { BsPen } from "react-icons/bs";
import { LuGoal } from "react-icons/lu";
import { RiProgress6Line } from "react-icons/ri";
import { TbUsers } from "react-icons/tb";
import { BsThreeDots } from "react-icons/bs";
import { FaUsersLine } from "react-icons/fa6";
import { MdNotificationsActive } from "react-icons/md";
import { MdNoteAdd } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { GiProgression } from "react-icons/gi";
import { SiCircle } from "react-icons/si"
import { LiaDotCircle } from "react-icons/lia";
import { FaProjectDiagram } from "react-icons/fa";
import WeeklyAreaChart from "./WeeklyAreaChart"
import dash from '../../assets/dashBoard.png'

const Main = () => {
  return (
    <div className=' h-133 w-170 p-1'>
      <nav className='flex flex-row justify-between p-5'>
        <div>
          <p className="font-bold text-lg">Hi, User!</p>      
        </div>

       <div className="flex flex-row gap-4 items-center">
          <button className='bg-black text-white rounded-full px-4 py-1 text-xs cursor-pointer hover:scale-105'>+ Create</button>
          <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center hover:scale-105 hover:bg-gray-500 cursor-pointer"><IoIosSearch /></span>
          <span className="bg-white rounded-full h-6 w-6 flex items-center justify-center hover:scale-105 hover:bg-gray-500 cursor-pointer"><IoIosNotificationsOutline /></span>
          <img src={LateefLogo} alt="image" className="flex justify-center items-center h-7 w-7 hover:scale-120 rounded-full overflow-hidden" />
       </div>
      </nav>
       
             {/* Headline ---- First Row Cards */}
     <section className="Headlines flex flex-row gap-4 justify-center">

        <section className='Over All Information'>
             <div className="bg-black rounded-xl w-45 h-45 mt-2 p-4">

                        <div className="flex flex-row gap-4 items-center">
                          <p className="text-[10px] font-bold text-white">Over all information</p>
                          <span className="text-white flex flex-row"><FaProjectDiagram /><BsThreeDotsVertical /></span>
                        </div>
                
              <div className="flex flex-row gap-4 mt-4 text-white ">
                    <div className="flex flex-row gap-1 justify-center items-center">     
                      <h1 className="font-bold text-xl">43</h1>
                      <p className="text-[6px] w-10 text-gray-100 opacity-70">Task done for all time</p>
                    </div> 

                    <div className="flex flex-row gap-1 justify-center items-center">
                      <h1 className="font-bold text-xl">2</h1>
                      <p className="text-[6px] w-10 text-gray-100 opacity-70">Projects are stepped</p>

                    </div>
              </div>   
          
              <span className="flex flex-row text-white text-sm"><FaBarsProgress /><FaBarsProgress />
              <FaBarsProgress /><FaBarsProgress /><FaBarsProgress /><FaBarsProgress /><FaBarsProgress /><FaBarsProgress /></span>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-center font-bold mt-6">
                    {/* card 1 */}
                    <div className="bg-orange-50 w-12 h-14 rounded-lg hover:scale-105 cursor-pointer transition all duration-300" >
                      <span className="flex flex-row justify-center mt-1"><RiProgress8Line /></span>
                      <h1 className="font-bold text-sm">32</h1>
                      <p className="text-[8px]">Projects</p>
                      </div>

                    {/* card 2 */}
                    <div className="bg-orange-50 w-12 h-14 rounded-lg hover:scale-105 cursor-pointer transition all duration-300">
                      <span className="flex flex-row justify-center mt-1"><FaSpinner /></span>
                      <h1 className="font-bold text-sm">2</h1>
                      <p className="text-[8px]">In progress</p>
                      </div>

                    {/* card 3*/}
                      <div className='bg-orange-50 w-12 h-14 rounded-lg hover:scale-105 cursor-pointer transition all duration-300'>
                      <span className="flex flex-row justify-center mt-1"><MdOutlineOfflinePin /></span>
                      <h1 className="font-bold text-sm">25</h1>
                      <p className="text-[8px]">Complete</p>
                      </div>
               </div>
                    
               </div>
        </section>
    
         <section className='Weekly Progress'> 
               <div className="rounded-xl border border-gray-100 w-60 h-45 mt-2">
                   <img src={dash} alt="chart"  className="flex justify-center items-center h-45 w-60 overflow-hidden"/>

               </div>
         </section>

         <section className='Month Progress'> 
               <div className="bg-white rounded-xl w-45 h-45 mt-2">
                     <div className='flex flex-col'>
                            <div className='flex flex-row justify-between p-3'> 
                                 <p className='text-sm font-semibold'>Month Progress</p>
                                 <span><GiProgression /></span>
                            </div>
                            <div className='flex flex-row justify-evenly items-center gap-5 text-sm p-3'>
                                 <span className="text-sm font-bold">30%</span>
                                 <p className='text-[8px] ml-2 font-semibold'>Completed to last month</p>
                            </div>

                            <div className="flex flex-row justify-evenly mb-1 gap-8">
                              <div>
                                      <p className="font-bold text-[11px]">OVERVIEW</p>
                                      <div className="flex flex-col gap-1 text-[9px] font-bold">
                                          <span className='flex flex-row justify-center items-center gap-1'><LiaDotCircle />Work flow</span>
                                          <span className='flex flex-row justify-center items-center gap-1'><LiaDotCircle />Validation</span>
                                          <span className='flex flex-row justify-center items-center gap-1'><LiaDotCircle />Project Inc</span>
                                      </div>                    
                              </div>
                              
                              <div  className="text-5xl">
                                  <span><SiCircle /></span>
                              </div>

                            </div>

                            <div className="flex flex-row justify-evenly">
                              <span className="bg-black rounded-full text-white"><PiCirclesThree /></span>
                              <button className="text-[8px] w-18 h-4 border rounded-lg hover:scale-115 cursor-pointer transition all duration-300">Download Report</button>
                            </div>
                     </div>
               </div>
         </section>


     </section>  
      

        {/* Middle Cards  */}
    <section className="flex flex-row gap-3 justify-center">
             <div className="bg-white rounded-xl w-40 h-40 mt-2">
                  <div className='flex flex-col justify-center gap-4 mt-2'>
                       <div className='flex flex-row justify-center gap-2 mt-2'>
                            <p className='text-sm font-semibold'>Month's Goal</p>
                            <div>
                              <span className='flex flex-row gap-2'><LuGoal /><BsPen /></span>
                            </div>
                       </div>
                       
                       <ul className='flex flex-col gap-2 font-bold text-gray-500'>
                          <li className='flex flex-row justify-center items-center gap-2 text-gray-900 text-[9px]'><MdOutlineOfflinePin />1hr Meditation</li>
                          <li className='flex flex-row justify-center items-center gap-2 text-[9px]'><MdOutlineOfflinePin />10min Running</li>
                          <li className='flex flex-row justify-center items-center gap-2 text-[9px]'><MdOutlineOfflinePin />30min Workout</li>
                          <li className='flex flex-row justify-center items-center gap-2 text-[9px]'><MdOutlineOfflinePin />30min read book</li>
                       </ul>
                  </div> 
             </div>

               <div className='flex flex-row gap-4 mt-10'>
                         <div className="flex flex-col gap- bg-white rounded-xl w-30 h-30 mt-2">
                              <span className='flex flex-row justify-between p-2'><TbUsers /><BsThreeDots /></span>
                              <p className='font-bold text-sm p-2 opacity-90'>Meet HR For Project</p>
                              <p className='flex flex-row justify-center gap-16 items-center text-[9px] opacity-70'>Tonight<IoIosNotificationsOutline /></p>
                          </div>

                          <div className="relative bg-white rounded-xl w-30 h-30 mt-2">
                              <span className='flex flex-row justify-between p-2'><FaUsersLine /><BsThreeDots /></span>
                              <p className='font-bold text-sm p-2 opacity-90'>Boss Appointment</p>
                              <p className='flex flex-row justify-between p-2 text-[9px] opacity-70'>Next Meeting<MdNotificationsActive /></p>
                              < div className='absolute -top-7 -right-0.5 flex-row justify-center p-4 mt- bg-black text-white rounded-md hover:scale-105 cursor-pointer transition all duration-300 h-16 w-16'> 
                                   <h3 className="flex flex-row justify-center items-center gap-2 text-[7px]">Add Note<MdNoteAdd /></h3>
                                   <h3 className="flex flex-row justify-center items-center gap-2 text-[7px]">Edit<BsPen /></h3>
                                   <h3 className="flex flex-row justify-center items-center gap-2 text-[7px]">Delte<MdDeleteForever /></h3>
                              </div>
      
                          </div>

                          <div className="flex justify-center items-center text-center rounded-xl w-45 h-30 mt-2 border border-dashed hover:scale-105 cursor-pointer transition all duration-300">
                                <p className=" font-bold text-gray-500">+ Add a Task</p>
                          </div>   
               </div>
                         
    </section>   
     

      {/* Footer Cards  */}
        <p className='font-bold flex flex-row justify-start ml-6 mt-3'>Last Project's</p>
      <section className="flex flex-row gap-4 justify-center mt-4">
             <div className="bg-black text-white rounded-xl w-50 h-18 hover:scale-105 cursor-pointer transition all duration-300">
                   
                        <div className='flex flex-col hover:scale-105 cursor-pointer transition all duration-300'>
                              <div className='flex flex-row justify-between p-3'>
                                   <p className='text-sm font-semibold'>New Schedule</p>
                                  <span><RiProgress6Line /></span>  
                              </div>   
                               <div className='flex flex-row gap-2 text-[9px] ml-2 mb-4'>
                                  <span>⚪</span> 
                                  <p>Buckle up guys, Big project coming up.</p>
                               </div>                                                                                                                                                 
                        </div>
              </div>

             <div className="bg-black text-white rounded-xl w-50 h-18 hover:scale-105 cursor-pointer transition all duration-300">
                     <div className='flex flex-col '>
                            <div className='flex flex-row justify-between p-3'> 
                                 <p className='text-sm font-semibold'>Anime Ui Design</p>
                                 <span><MdOutlineOfflinePin /></span>
                            </div>
                            <div className='flex flex-row gap-2 text-[9px] ml-2 mb-4'>
                                 <span>⚪</span>
                                 <p>Completed</p>
                            </div>
                     </div>
             </div>

             <div className="bg-black text-white rounded-xl w-50 h-18 hover:scale-105 cursor-pointer transition all duration-300">
                     <div className='flex flex-col '>
                            <div className='flex flex-row justify-between p-3'> 
                                 <p className='text-sm font-semibold'>Creative Ui Design</p>
                                 <span><MdOutlineOfflinePin /></span>
                            </div>
                            <div className='flex flex-row gap-2 text-[9px] ml-2 mb-4'>
                                 <span>⚪</span>
                                 <p>Completed</p>
                            </div>
                     </div>
             </div>

            
      </section>
      
          {/* chart  */}
      <section>
              <div className="min-h- bg-gray-100 mt-4 p-6">
                       <WeeklyAreaChart />
                   </div>
      </section>

    </div>
   

  )
}

export default Main
