import React, { useEffect, useState } from "react";
import { getActivities, postActivities } from "../api";


const Activities = ({activities, setActivities, token,}) =>{
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    useEffect(() =>{
        const fetchData = async () => {
            const activitiesResult = await getActivities();
            setActivities(activitiesResult);
        };
        fetchData();
    },[]);

    const handleNewActivity = async (e) => {
        e.preventDefault()
        const response = await postActivities(token, name,description)
        if (response.error) {
            setError(response.error);
        }else{
            setError(null)
            setActivities(prevActivities => [...prevActivities, response]);
        }
    }
    return(
    <div>
        <h1>Activities</h1>
        {error && <div className="error">{error}</div>}
        {token && (
            <form onSubmit={handleNewActivity}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) =>setName(e.target.value)} />
                </label>
                <label>
                    Description:
                    <input type="text" value={description} onChange={(e) =>setDescription(e.target.value)} />
                </label>
                <button type="submit"> Create Activity</button>
            </form>
                
        )}
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