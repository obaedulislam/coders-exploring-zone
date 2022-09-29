import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import QuesAns from '../QuesAns/QuesAns';
import SingleCourse from '../SingleCourse/SingleCourse';
import './AllCourses.css'

const AllCourses = ({handleSeesionTime}) => {

    const [courses, setCourses] = useState([]);
    

    useEffect(() => {
        fetch(`programs.json`)
        .then(res => res.json())
        .then(data => setCourses(data))
    } ,[]);



    return (
        <div className='lg:px-20 md:px-8 sm:px-5 px-3 lg:py-20  py-8  md:col-span-9 col-span-12 bg-orange-100 h-[100%] overflow-hidden'>
            <Header></Header>
            <h2 className='lg:text-2xl md:text-lg sm:text-md font-semibold text-black lg:mt-5 mt-3'>Test Your Coding Skill Today</h2>

            <div className="all-courses-continer grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-5 gap-3  lg:mt-10 md:mt-5 mt-3">
                {
                    courses.map((course) => <SingleCourse key={course.id} course={course} handleSeesionTime={handleSeesionTime}></SingleCourse>)
                }
            </div>
            <QuesAns></QuesAns>
        </div>
    );
};

export default AllCourses;