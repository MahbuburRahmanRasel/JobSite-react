import React from 'react';
import { Link } from 'react-router-dom';

const StoredJobs = ({jdata}) => {
   
   const {Companyname,Jobtitle,Logo,Joblocation,Jobtime,Joboffice,Salary,Id} = jdata
   

    return (
        <li className='flex flex-col py-6  '>
            <div className='flex justify-evenly items-center '>
            <div className='flex justify-between gap-10 items-center'>
                <div>
                    <img className='bg-slate-300 px-5 py-14' src={Logo} alt="" />
                </div>
                <div>
                    <h3 className='h3'>{Jobtitle}</h3>
                    <p className='my-3'> {Companyname}</p>
                    <div className='flex '>
                    <button className='my-button'>{Joboffice}</button>
                    <button className='my-button'>{Jobtime}</button>
                    </div>
                    <div className='flex gap-2 my-3'>
                <div className='flex'>
                    <img src="../../assets/Icons/Location Icon.png" alt="" />
                    <p>{Joblocation}</p>
                </div>
                <div className='flex'>
                    <img src="../../assets/Icons/Frame.png" alt="" />
                    <p>Salary: {Salary}</p>
                </div>
            </div>
                </div>
               
            </div>
            <div>
            <Link to={`/${Id}`}><button className='btn btn-primary '>View Details</button></Link>
            </div>
            </div>
    </li>
    );
};

export default StoredJobs;