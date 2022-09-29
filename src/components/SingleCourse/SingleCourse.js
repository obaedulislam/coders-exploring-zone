import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({course, handleSeesionTime}) => {
    const{id, name, image, age, time} = course;

    return (
        <div className='lg:p-3  p-2 bg-white shadow-lg rounded-lg'>
            <div className="course-img">
                <img className='rounded-md w-full' src={image} alt={name} />
            </div>
            <div className="course-content pt-3">
                <h3 className='font-bold lg:text-xl md:text-md text-[#3F3679]'>{name}</h3>
                <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur.</p>
                <h5 className='font-semibold sm:mt-2 mt-1 md:text-md sm:text-sm '>For Age: {age}</h5>
                <h4 className='font-semibold sm:mt-2 mt-1 md:text-md sm:text-sm'>Session Time: {time}</h4>
            </div>
            <div className="add-list mt-3">
                <button onClick={() => handleSeesionTime(time)} className="btn btn-sm w-full">Add to List</button>
            </div>
        </div>
    );
};

export default SingleCourse;