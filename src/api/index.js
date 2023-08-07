
export const COHORT_NAME = '2303-ftb-et-web-pt';
export const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`;


// register 



// routiunes  
export const getRoutines = async () => {
    try{
        const response = await fetch(`${BASE_URL}/routines`,{
            headers: { 
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        return result
    }catch(err){
        console.error(err);
    }
}
// activities 
export const getActivities = async () => {
    try{
        const response = await fetch(`${BASE_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        return result
    }catch(err){
        console.error(err);
    }
}
export const getRoutinesWithActivities = async (activityId) => {
    try{
        const response = await fetch(`${BASE_URL}/activities/${activityId}/routines`,{
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        console.log("ACTIVITIES WITH ROUTINE", result)
        return result
    }catch(err){
        console.error(err);
    }
}
// my routines 


// login  

