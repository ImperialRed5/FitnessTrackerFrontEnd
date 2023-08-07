import React, { useEffect, useState } from "react";
import { getActivities } from "../api";

const Activities = ({activities, setActivities}) =>{
    useEffect(() =>{
        const fetchData = async () => {
            const activitiesResult = await getActivities();
            setActivities(activitiesResult);
        };
        fetchData();
    },[]);

    return(
    <div>
        <h1>Activities</h1>

        {activities.map((activity)=>(
            <div key={activity.id} value={activity}>
                <h2>Activities</h2>
                <h3>Name: {activity.name}</h3>
                <h3>Description: {activity.description}</h3>
            </div>
            ))}
    </div>
    )
}

export default Activities;