// use local storage to manage cart data
const addToDb = id => {
    let jobList = {}
  
    //get the shopping cart from local storage
    const storedJob = localStorage.getItem('job-List')
    if (storedJob) {
      jobList = JSON.parse(storedJob)
    }
  
    // add quantity
    const quantity = jobList[id]
    if (quantity) {
      const newQuantity = quantity + 1
      jobList[id] = newQuantity
    } else {
      jobList[id] = 1
    }
    localStorage.setItem('job-List', JSON.stringify(jobList))
  }
  
  const getStoredJob = () => {
    let jobList = {}
  
    
    const storedJob = localStorage.getItem('job-List')
    if (storedJob) {
      jobList = JSON.parse(storedJob)
    }
   
    return jobList
  }
  
  
  
  export { addToDb, getStoredJob }
  