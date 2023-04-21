import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import JobBanner from '../JobBanner/JobBanner';
import { addToDb } from '../fakeDb';

const JobDetails = () => {
    const job = useLoaderData()
    const Id = useParams()

    const [myObject, setMyObject] = useState({})

    useEffect (()=>{
        const filterData = job.find( jb =>jb.Id.toString() === Id.Id)
        setMyObject(filterData)

    },[])
   
    const handleAdd = (id)=>{
     
        addToDb(id)

    }

    const navigate = useNavigate();

    const handlerGoback = ()=>{
        navigate(-1);
    }



    return (
        <div>
            <JobBanner 
            
            text = {`Job Details`}
            />
            <div className='my-container flex justify-between text-justify'>
            <div className='w-3/5'>
            <h3 className='h3 mb-3'>Company Name : {myObject.Companyname}</h3>
            <p> <span className='font-bold'>Job Description:</span>  {myObject.Jobdescription}</p> 
            <p className='my-10 whitespace-pre-line'><span className='font-bold'>Job responsibility:</span> {myObject.Jobresponsibility}</p> 
            <p><span className='font-bold'>Educational Requirements:</span> {myObject.EducationalRequirements}</p> 
            <p className='my-10'><span className='font-bold'>Experiences:</span> {myObject.Experiences}</p> 
            </div>
            <div className='bg-gray-200 p-7 w-1/4 rounded '>
                    <div>
                    <h2 className='h3'>Job Details</h2>
                    <p className='my-5'><span className='font-bold'>Salary:</span> {myObject.Salary}</p>
                    <p><b>Job Title: </b>{myObject.Jobtitle}</p>
                    </div>
                    <div className='mt-7'>
                    <h2 className='h3 mb-5'>Contact Information</h2>
                    <p><b>Phone:</b> {myObject.Phone}</p>
                    <p className='my-3'><b>Email:</b> {myObject.Email}</p>
                    <p><b>Address:</b> {myObject.Address}</p>
                    </div>
                    <div>
                        <button className='btn btn-primary mx-auto mt-10 text-center px-20' onClick={()=>handleAdd(Id.Id)}>Apply Now</button>
                    </div>
                    <div>
                    <button onClick={handlerGoback} className='btn btn-success mx-auto mt-10 text-center px-20'>Go back</button>
                    </div>

            </div>
        </div>
        </div>
    );
};

export default JobDetails;