import React from 'react';
import './Activities.css'
import Activity from './Activity';

const Activities = ({data, time}) => {


    const activity = data.Activity;

    return (
        <div className='activity'>
            {
                activity.map((e,i)=> (
                    <Activity key={`4${i}`} data={e} time={time}/>
                ))
            }
        </div>
    )
}

export default Activities;