import React, { useEffect, useState } from 'react';



const JobCategory = () => {


    const [data, setData]= useState([])
   
    useEffect(()=>{

        fetch('/jobcategory.json')
        .then(res => res.json())
        .then(dat => setData(dat))


},[])

    return (
        <div className='my-container my-32 mx-auto'>
            <h1 className='title '>Job Category List</h1>
            <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid mx-auto grid-cols-2 md:grid-cols-4 mt-12'>
               

                {
                    data.map(jobcat =>(
                        
                <div key = {jobcat.id}>
                    <img src={jobcat.image} alt="" />
                    <h2 className='font-bold'>{jobcat.title}</h2>
                    <p>{jobcat.jobsno} Jobs Available</p>
                </div> 

                    ))
                }
              
            </div>
        </div>
    );
};

export default JobCategory;