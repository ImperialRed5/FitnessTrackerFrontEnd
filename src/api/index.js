
export const COHORT_NAME = '2303-ftb-et-web-pt';
export const BASE_URL = `http://fitnesstrac-kr.herokuapp.com/api`;

//USER ENDPOINTS 
// register 
export const registerUser = async (username, password) => {

    try{
        const response = await fetch(
            `${BASE_URL}/users/register`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        username: username,
                        password: password
                })
            })
            const result = await response.json();
            console.log('CREATING USER.. ', result);
    }catch(err){
        console.error(err)
    }
}

// login  

export const loginUser = async (username, password)  =>{
    try {
        const response = await fetch(`${BASE_URL}/users/login`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              username: username,
              password: password
          })
        });
        const result = await response.json();
        console.log(result);
        return result

      } catch (err) {
        console.error(err);
      }
  };

// /users/me
export const getUser = async(token)=>{
    try {
        const response = await fetch(`${BASE_URL}/users/me`, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });
        const result = await response.json();
        console.log('meee', result);
        return result
      } catch (err) {
        console.error(err);
      }
};



// activities ENDPOINTS
export const getActivities = async () => {
    try{
        const response = await fetch(`${BASE_URL}/activities`, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const result = await response.json();
        return result;
    }catch(err){
        console.error(err);
    }
};

//post activities
export const postActivities = async(token, name, description) => {
    try{
        const response = await fetch(`${BASE_URL}/activities`,{
            method: "POST",
            headers:{
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                name,
                description
            }),
        });
        const result = await response.json();
        console.log('TEST', result)
        return result;
    }catch(err){
        console.error(err)
    }
};


// routiunes  ENDPOINTS
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
// my routines 

//Routine_Activities ENDPOINTS
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
};