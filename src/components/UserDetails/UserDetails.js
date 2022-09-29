import React, { useState } from 'react';
import './UserDetails.css'
import user from './user.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLocationDot } from '@fortawesome/free-solid-svg-icons';

const UserDetails = ({timeOfSession}) => {
    const [sessionBreak, setSeesionBreak] = useState(0);
    

    const handleSeesionBreak = (e) => {
        const breakTime = e.target.value;
        setSeesionBreak(breakTime);
    }

    return (
        <div className='md:col-span-3 col-span-12 sm:py-10 py-8 sm:px-5 px-3 overflow-hidden' >
            <div className="user-details-sec">
                <div className="user flex items-center ">
                    <div className="user-img ">
                        <img className='w-16 h-16' src={user} alt="Obaedul Islam" />
                    </div>
                    <div className="user-name ml-2">
                        <h3 className='text-2xl text-[#3F3679] font-bold'>Obaedul Islam</h3>
                        <p><span className='mr-1'><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon></span> Dhaka, Bangladesh</p>
                    </div>
                </div>

                {/* Skills */}
                <div className="coding-skill p-3 bg-orange-100 grid grid-cols-12 gap-2 rounded-xl mt-5">
                    <div className="java-script text-center col-span-4">
                        <h2 className='text-2xl font-bold '>89<span className='text-sm'>%</span></h2>
                        <h5 className='sm:text-[14px] text-[12px] font-semibold -mt-1'>JavaScript</h5>
                    </div>
                    <div className="java-script text-center col-span-4">
                        <h2 className='text-2xl font-bold '>75<span className='text-sm'>%</span></h2>
                        <h5 className='sm:text-[14px] text-[12px] font-semibold -mt-1'>React JS</h5>
                    </div>
                    <div className="java-script text-center col-span-4">
                        <h2 className='text-2xl font-bold '>68<span className='text-sm'>%</span></h2>
                        <h5 className='sm:text-[14px] text-[12px] font-semibold -mt-1'>Node JS</h5>
                    </div>
                </div>

                {/* Session Break Time */}
                <div className="add-break sm:mt-8 mt-4">
                    <h2 className='sm:text-xl text-lg  font-semibold'>Session Break</h2>
                    <div className="break-btn flex justify-between mt-3">
                        <div className="second-btn">
                            <button onClick={e => handleSeesionBreak(e) } value={10}  className=' w-12 h-12 font-bold transition delay-200 ease-in-out text-black hover:bg-orange-100 rounded-full bg-[#F8AF23]'><span  className='text-lg'>10</span><span className='text-sm'>m</span></button>
                        </div>
                        {/* Button End */}
                        
                        <div className="second-btn">
                            <button  onClick={e => handleSeesionBreak(e) } value={20} className=' w-12 h-12 font-bold transition delay-200 ease-in-out text-black hover:bg-orange-100 rounded-full bg-[#F8AF23]'><span className='text-lg'>20</span><span className='text-sm'>m</span></button>
                        </div>
                        {/* Button End */}
                        
                        <div className="second-btn">
                            <button  onClick={e => handleSeesionBreak(e) } value={30}  className=' w-12 h-12 font-bold transition delay-200 ease-in-out text-black hover:bg-orange-100 rounded-full bg-[#F8AF23]'><span className='text-lg'>30</span><span className='text-sm'>m</span></button>
                        </div>
                        {/* Button End */}
                        
                        <div className="second-btn">
                            <button  onClick={e => handleSeesionBreak(e) } value={40} className=' w-12 h-12 font-bold transition delay-200 ease-in-out text-black hover:bg-orange-100 rounded-full bg-[#F8AF23]'><span className='text-lg'>40</span><span className='text-sm'>m</span></button>
                        </div>
                        {/* Button End */}
                        
                        <div className="second-btn">
                            <button  onClick={e => handleSeesionBreak(e) } value={50} className=' w-12 h-12 font-bold transition delay-200 ease-in-out text-black hover:bg-orange-100 rounded-full bg-[#F8AF23]'><span className='text-lg'>50</span><span className='text-sm'>m</span></button>
                        </div>
                        {/* Button End */}
                        
                    </div>
                </div>

                {/* Exercise Details */}
                <div className="exercise-details  sm:mt-8 mt-4">
                <h2 className='sm:text-xl text-lg  font-semibold mt-3'>Session Details</h2>
                <div className="session-time bg-orange-100 p-3 flex justify-between mt-3 rounded-md">
                    <h3 className='font-semibold'>Session Time</h3>
                    <h4><span className='font-semibold'>{timeOfSession ? timeOfSession : 0}</span> Minutes</h4>
                </div>
                <div className="session-time bg-orange-100 p-3 flex justify-between mt-3 rounded-md">
                    <h3 className='font-semibold'>Break Time</h3>
                    <h4><span className='font-semibold'>{sessionBreak}</span> Minutes</h4>
                </div> 

                <div className="complete-btn sm:mt-10 mt-5">
                    <button className="btn btn-sm w-full">Activity Completed</button>
                </div>
                
            </div>
            </div>

        </div>
    );
};

export default UserDetails;