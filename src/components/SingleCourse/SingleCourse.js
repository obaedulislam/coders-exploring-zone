import React from 'react';
import './SingleCourse.css'

const SingleCourse = ({course, handleSeesionTime}) => {

    const{id, name, image, age, time} = course;
    return (
        <div className='p-3 bg-white shadow-lg rounded-lg'>
            <div className="course-img">
                <img src={image} alt={name} />
            </div>
            <div className="course-content pt-3">
                <h3 className='font-bold text-xl text-[#3F3679]'>{name}</h3>
                <p className='text-[13px]'>Lorem ipsum dolor sit amet consectetur.</p>
                <h5 className='font-semibold mt-2'>For Age: {age}</h5>
                <h4 className='font-semibold mt-2'>Session Time: {time}</h4>
            </div>
            <div className="add-list mt-3">
                <button onClick={() => handleSeesionTime(time)} className="btn btn-sm w-full">Add to List</button>
            </div>
        </div>
    );
};

export default SingleCourse;