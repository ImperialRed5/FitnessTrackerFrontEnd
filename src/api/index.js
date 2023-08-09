export const COHORT_NAME = "2303-ftb-et-web-pt";
export const BASE_URL = `https://fitnesstrac-kr.herokuapp.com/api`;

//USER ENDPOINTS
// register
export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    if (!response.ok) {
      throw result;
    }
    console.log("CREATING USER.. ", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// login

export const loginUser = async (username, password) => {
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// /users/me
export const getUser = async (token) => {
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log("meee", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
// users/:username/routines
export const getUserRoutines = async (token, username) => {
  console.log('test3214', token)
  console.log('test user', username)
  try {
    const response = await fetch(`${BASE_URL}/users/${username}/routines`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log('test...1234', result)
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// activities ENDPOINTS
export const getActivities = async () => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};

//post activities
export const postActivities = async (token, name, description) => {
  try {
    const response = await fetch(`${BASE_URL}/activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        description,
      }),
    });
    const result = await response.json();
    console.log("TEST", result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

// routiunes  ENDPOINTS
export const getRoutines = async () => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
// my routines

//post - createRoutine
export const postRoutines = async (token, name, goal) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};

//patch routines
export const patchRoutines = async (token, routineId, name, goal) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
//delete routines
export const deleteRoutines = async (token, routineId) => {
  try {
    const response = await fetch(`${BASE_URL}/routines/${routineId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
// my routines
export const getMyRoutines = async () => {
  const token = localStorage.getItem('token');
  try {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });
    const result = await response.json();
    if (!response.ok) {
      throw new Error(result.error);
    }
    return result;
  } catch (err) {
    console.error(err);
  }
};
//post - createRoutine
export const createRoutine = async (name, goal, isPublic, token) => {
  try {
    const response = await fetch(`${BASE_URL}/routines`, {
      method:'POST',
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name,
        goal,
        isPublic,
      }),
    });
    const result = await response.json();
    return result;
  } catch (err) {
    console.error(err);
  }
};
//Routine_Activities ENDPOINTS
//post - addActivityToRoutine
export const addActivityToRoutine = async (
  routineId,
  activityId,
  count,
  duration,
  token
) => {
  try {
    const response = await fetch(`${BASE_URL}/routine_activities`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        routineId,
        activityId,
        count,
        duration,
      }),
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
//patch - updateRoutineActivity
export const updateRoutineActivity = async (
  routineActivityId,
  count,
  duration,
  token
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          count,
          duration,
        }),
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
//delete - destroyRoutineActivity
export const destroyRoutineActivity = async (routineActivityId, token) => {
  try {
    const response = await fetch(
      `${BASE_URL}/routine_activities/${routineActivityId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
};
