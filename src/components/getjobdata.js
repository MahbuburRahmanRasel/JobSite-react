import { getStoredJob } from "./fakeDb"


export  const getjobdata = async () => {

    const jobsData = await fetch('job.json')
    const jobs = await jobsData.json()

    const savedjobs = getStoredJob()

   
    let jobArray = []
    for (const id in savedjobs){
    const foundJob = jobs.filter(job => job.Id == id)
    if(foundJob){
        jobArray.push(foundJob)
    }
    console.log(jobArray);
   
}
    return jobArray
}



