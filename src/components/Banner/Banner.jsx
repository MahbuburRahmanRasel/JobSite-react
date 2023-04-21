import React from 'react';
import bannerPic from '../../assets/All Images/P3OLGJ1 copy 1.png'

const Banner = () => {
    return (
        <div className='md:flex my-container justify-center items-center  '>
            <div className='md:w-1/2 text-center md:text-left'>
            <h1 className='md:text-7xl font-bold leading-tight	text-5xl	 sm:text-center md:text-left'>One Step Closer To Your  <span className='text-primary'>Dream Job</span> </h1>
            <p className='my-5 '>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all  your job application from start to finish.</p>
            <button className='btn btn-primary mt-5'>Get Started</button>
            </div>
            <div >
                <img src={bannerPic} alt="" />
            </div>
        </div>
    );
};

export default Banner;