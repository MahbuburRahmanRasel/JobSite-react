import React from 'react';

const JobBanner = (props) => {
    return (
        <div className='h-40 bg-slate-100 bg-auto bg-no-repeat flex items-center justify-center' style={{ backgroundImage: "url('https://i.ibb.co/1n9rfwq/Vector.png')" }}	>
            {/* <img src="../../assets/All Images/Vector-1.png" alt="" /> */}
            <h1 className='text-center font-bold text-4xl '>{props.text}</h1>
            {/* <img className='w-56 bg-gradient-to-tr' src="../../assets/All Images/Vector.png" alt="" /> */}
        </div>
    );
};

export default JobBanner;