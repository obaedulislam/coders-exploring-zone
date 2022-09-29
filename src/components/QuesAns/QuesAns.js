import React from 'react';
import virtualdom from './virtualdom.png'
import './QuesAns.css'
const QuesAns = () => {
    return (
        <div className='lg:px-20 md:px-8 sm:px-5 px-3 md:py-6 sm:py-5 py-5  md:col-span-9 col-span-12 bg-orange-100  ' >
            <h2 className='font-bold lg:text-2xl text-xl'>Some Iportant Q & A we discuss in this Session:</h2>
            <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white ">
                <h3 className='text-[#3F3679] font-bold text-lg'><span className='text-2xl font-extrabold text-[#F8AF23]' >1. </span> How React Application Work?</h3>
                <h4 className='text-xl font-semibold mt-3'>Answer:</h4>
                <p className='mt-2'>React is a JavaScript library (not a framework) that creates user interfaces (UIs) in a predictable and efficient way using declarative code.</p>
                <p className='mt-2'>One of the biggest advantages of using React is that you can infuse HTML code with JavaScript. You can write JSX(JavaScript XML) code in react.</p>
                <p className='mt-2'>Users can create a representation of a DOM node by declaring the Element function in React. </p>  
                <p className='mt-2'>We know that when we create an application using JS DOM it is slow process. You need to add any funtction or mathod manually. So it is not developer friendly</p>  
                <p className='mt-2'>But in react application contain a Virtual DOM & react compare main DOM with Virtual DOM for make an update.</p>    
                <p className='mt-2'>React is faster & Babel transfiler  enables developers to use cutting-edge Javascript without worrying about browser support. </p>
                <p className='mt-2'>Also react application contains component. Its are the building blocks of a React application's UI.
                These components split up the entire UI into small independent and reusable pieces.
                Then it renders each of these components independent of each other 
                without affecting the rest of the UI</p>
                <div className="virtual-dom mt-4">
                    <img className=' mx-auto' src={virtualdom} alt= "Virtual DOM" />
                    <p className='text-center mt-2'>Fig: React Virtual & Real DOM Cmparison</p>
                </div>
            </div>
            <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white ">
                <h3 className='text-[#3F3679] font-bold text-lg'><span className='text-2xl font-extrabold text-[#F8AF23]' >2. </span> Difference between Props vs State</h3>
                <h4 className='text-xl font-semibold mt-3'>Answer:</h4>
                <div className="diff-table mt-3 ">
                    <div className="props grid grid-cols-12 sm:gap-4 gap-2">
                        <div className="props col-span-6 border border-gray-100">
                            <div className="t-head bg-orange-100 py-3">
                                <h2 className='font-bold uppercase text-center'>Props</h2>
                            </div>
                            <div className="cont p-3">
                            <p>1. The Data is passed from one component to another.</p>
                            <p className='mt-2'>2. It is Immutable (cannot be modified).</p>
                            <p className='mt-2'>3. Props can be used with state and functional components.</p>
                            <p className='mt-2'>4. Props are read-only.</p>
                            </div>
                        </div>
                        <div className="state col-span-6 col-span-6 border border-gray-100">
                            <div className="t-head bg-orange-100 py-3">
                                <h2 className='font-bold uppercase text-center'>State</h2>
                            </div>
                            <div className="cont p-3">
                            <p>1. The Data is passed within the component only..</p>
                            <p className='mt-2'>2. It is Mutable ( can be modified).</p>
                            <p className='mt-2'>3. State can be used only with the state components/class component (Before 16.0).</p>
                            <p className='mt-2'>4. State is both read and write.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single-blog p-5 border border-gray-300 mt-5 shadow-lg rounded-xl bg-white">
                <h3 className='text-[#3F3679] font-bold text-lg'><span className='text-2xl font-extrabold text-[#050504]' >3. </span> What does useEffect do without data load?</h3>
                <h4 className='text-xl font-semibold mt-3'>Answer:</h4>
                <p className='mt-2'>A functional React component uses props and/or state to calculate the output. If the functional component makes calculations that don't target the output value, then these calculations are named side-effects.</p>
                <p className='mt-2'>The useEffect Hook allows you to perform side effects in your components.</p>
                <p className='mt-2 font-bold'>Purpose that  we use useEffect() function:</p> 
                <ul className='list-decimal ml-7'>
                    <li><p>Updating the Dom</p></li>
                    <li><p>Setting up subscriptions or timers</p></li>
                    <li><p>Some side-effects need cleanup: close a socket, clear timers.</p></li>
                    <li><p>Fetching data from API end-points</p></li>
                    <li><p>Get data from Local Storage</p></li>
                    <li><p>Also use it for handle Asynchronous Task</p></li>
                </ul> 
                
            </div>
        </div>
    );
};

export default QuesAns;