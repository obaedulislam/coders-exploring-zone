import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import './AllCourses.css'

const AllCourses = () => {
    const [courses, setCourses] = useState([]);
    console.log(courses);
    useEffect(() => {
        fetch(`programs.json`)
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[])

    return (
        <div className='p-20 col-span-9 bg-yellow-100 h-[100%]'>
            <Header></Header>
            <h2 className='text-2xl font-semibold text-black mt-5'>Test Your Coding Skill Today</h2>
            
        </div>
    );
};

export default AllCourses;