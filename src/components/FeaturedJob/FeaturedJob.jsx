import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const FeaturedJob = ({job}) => {
    
    
    const {Jobtitle , Companyname, Joblocation, Joboffice, Jobtime,Logo , Salary,Id} = job
    return (
        <div className='my-container  '>
           
           <div className= 'mt-8'>
            <img src={Logo} alt="" />
            <p className='font-bold mt-5'> {Jobtitle}</p>
            <p className='my-3'>{Companyname}</p>
            <div >
                <button className='my-button'>{Joboffice}</button>
                <button className='my-button'>{Jobtime}</button>
            </div>
            <div className='md:flex gap-2 my-3'>
                <div className='md:flex'>
                    <img src="../../assets/Icons/Location Icon.png" alt="" />
                    <p>{Joblocation}</p>
                </div>
                <div className='md:flex'>
                    <img src="../../assets/Icons/Frame.png" alt="" />
                    <p>Salary: {Salary}</p>
                </div>
            </div>
           <Link to={`/${Id}`}><button className='btn btn-primary '>View Details</button></Link>
           

           </div>
        </div>
    );
};

export default FeaturedJob;