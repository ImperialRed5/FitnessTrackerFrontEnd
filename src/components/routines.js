import React, {useEffect, useState} from "react";
import {getRoutines, getRoutinesWithActivities} from "../api";


 
const Routines = ({routines, setRoutines, setRoutineWithActivities, routneWithActivities}) =>{
   

    useEffect(()=> {
        const fetchData = async () => {
            const routinesResult = await getRoutines();
            const activitiesRoutine = await getRoutinesWithActivities();
            setRoutines(routinesResult);
            setRoutineWithActivities(activitiesRoutine);
        };
        fetchData();
    }, []);

    return( 
    <div>
            <h2>Routines</h2>
            {routines && routines.length > 0 ? (
                <ul>
                    {routines.map((routine) => (
                        <div key={routine.id} value={routine}>
                            <h2>Routine</h2>
                            <h3>Name: {routine.name}</h3>
                            <h3>Goal: {routine.goal}</h3>
                            <h3>Routine Activities</h3>
                                {routine.activities.map(activity=>
                                <div key={activity.id} value={activity}>
                                <h4>Activity Name: {activity.name}</h4>
                                <h4>Activity Description: {activity.description}</h4>
                                 </div>
                                )}
                        </div>
                    ))}
                </ul>
            ) : (
                <p>No routines available.</p>
            )}
        </div>
    );
}

export default Routines;