import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import JobCategory from '../JobCategory/JobCategory';
import FeaturedJob from '../FeaturedJob/FeaturedJob';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobdata = useLoaderData()
    const [fourData , setFourData]=useState(4)

   const num = jobdata.length - fourData

    const handleShowMore = () => {
        setFourData(fourData + num);
      };



    return (
        <div>
            <Banner />
            <JobCategory />

            <div className='flex flex-col items-center'>
            <h2 className='title '>Featured Jobs</h2>
            <p className='text-center mt-3'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            
            
            <div className='grid md:grid-cols-2 mt-10'>
            {
                jobdata.slice(0,fourData).map(job =>(
                <FeaturedJob
                
                key={job.Id}
                job = {job}
                
                />
                ))
            }
            
            </div>

            {fourData < jobdata.length && (
        <button className='btn btn-primary text-center my-10 px-16'  onClick={handleShowMore} > See More</button>
      )}

            
           
            </div>
           
        </div>
    );
};

export default Home;