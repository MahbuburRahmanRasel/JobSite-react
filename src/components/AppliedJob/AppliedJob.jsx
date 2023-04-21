import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StoredJobs from '../StoredJobs/StoredJobs';
import JobBanner from '../JobBanner/JobBanner';


const AppliedJob = () => {
    const jobArray = useLoaderData()
 
    const [selectedFilterValue, setSelectedFilterValue] = useState('');

    const handleFilterChange = (event) => {
      setSelectedFilterValue(event.target.value);
    };
  
    const arrayOfObjects = jobArray.reduce((acc, curr) => {
        return acc.concat(curr);
      }, []);

    const filteredData = selectedFilterValue === '' ? arrayOfObjects : arrayOfObjects.filter(item => item.Joboffice === selectedFilterValue);

    return (

        <div>
            <JobBanner
            
            text = {`Applied Jobs`}
            />

        <div className='my-container'>
          <div className='flex justify-end'>
          <select value={selectedFilterValue} onChange={handleFilterChange} className='border border-gray-950 rounded '>
            <option value="">All</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
          </div>
          {
          filteredData.map(jdata => (
           
           <StoredJobs 
           
            key = {jdata.Id}
            jdata = {jdata}
           />


          ))}

          </div>

        </div>
      
      );




    
};

export default AppliedJob;





